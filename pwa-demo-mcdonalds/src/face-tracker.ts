/**
 * face-tracker.ts
 * -----------------------------------------------------------
 * Inicializa MediaPipe FaceLandmarker (Tasks Vision API) y
 * obtiene las coordenadas normalizadas de la punta de la nariz
 * en cada frame.
 *
 * Usa @mediapipe/tasks-vision (modern API) en lugar del legacy
 * face_mesh.js global. Esto permite compartir el mismo runtime
 * WASM con HandLandmarker sin colisión de globals.
 *
 * Modelo: face_landmarker.task (478 puntos, mismo índice 1 = nose tip)
 * -----------------------------------------------------------
 */

import {
  FaceLandmarker,
  FilesetResolver,
  type FaceLandmarkerResult
} from '@mediapipe/tasks-vision';
import { type PerformancePreset } from './performance';

export interface NosePosition {
  /** x normalizado 0..1 (izquierda..derecha en la imagen) */
  x: number;
  /** y normalizado 0..1 (arriba..abajo en la imagen) */
  y: number;
  /** Si se detectó rostro en este frame */
  detected: boolean;
}

export interface FaceTrackerOptions {
  video: HTMLVideoElement;
  overlayCanvas?: HTMLCanvasElement;
  /** Mostrar malla facial en el overlay (debug) */
  showOverlay?: boolean;
  /** Llamado en cada frame con la posición de la nariz */
  onFrame?: (nose: NosePosition) => void;
  /** Llamado cuando la cámara se activa correctamente */
  onReady?: () => void;
  /** Llamado en caso de error */
  onError?: (err: Error) => void;
  /** Preset de performance — controla resolución, throttle, GPU/CPU */
  performance?: PerformancePreset;
}

/**
 * Índice del landmark de la punta de la nariz en MediaPipe Face Mesh /
 * FaceLandmarker. (1 = nose tip en el modelo de 478 puntos)
 */
const NOSE_TIP_INDEX = 1;

/**
 * URL del runtime WASM de Tasks Vision (compartido con HandLandmarker).
 * Cargado desde jsdelivr CDN.
 */
const WASM_URL =
  'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm';

/**
 * URL del modelo de Face Landmarker (478 puntos). Tamaño ~1.3MB.
 */
const FACE_MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';

export class FaceTracker {
  private faceLandmarker: FaceLandmarker | null = null;
  private video: HTMLVideoElement;
  private overlay?: HTMLCanvasElement;
  private overlayCtx?: CanvasRenderingContext2D;
  private showOverlay: boolean;
  private onFrame?: (nose: NosePosition) => void;
  private onReady?: () => void;
  private onError?: (err: Error) => void;
  private running = false;
  private rafId: number | null = null;
  private stream: MediaStream | null = null;
  private lastVideoTime = -1;
  private perf: PerformancePreset;
  private lastSendTime = 0;

  constructor(opts: FaceTrackerOptions) {
    this.video = opts.video;
    this.overlay = opts.overlayCanvas;
    this.showOverlay = !!opts.showOverlay;
    this.onFrame = opts.onFrame;
    this.onReady = opts.onReady;
    this.onError = opts.onError;
    // Default = high (compat con código viejo)
    this.perf = opts.performance ?? {
      tier: 'high',
      antialias: true, pixelRatioMax: 2, shadowsEnabled: true, shadowMapSize: 2048,
      powerPreference: 'high-performance', numPointLights: 4, numDirectionalLights: 2,
      hemisphereLight: true, videoWidth: 480, videoHeight: 360,
      faceThrottleMs: 33, faceUseGpu: true,
      handThrottleMs: 50, handNumHands: 2, handUseGpu: true,
      minAcceptableFps: 30
    };

    if (this.overlay) {
      this.overlayCtx = this.overlay.getContext('2d') ?? undefined;
    }
  }

  /**
   * Inicializa FaceLandmarker y arranca la cámara frontal.
   */
  public async init(): Promise<void> {
    try {
      // 1. Resolver del runtime WASM
      const vision = await FilesetResolver.forVisionTasks(WASM_URL);

      // 2. Crear FaceLandmarker según preset de performance
      // Si faceUseGpu=false (modo low), vamos directo a CPU.
      // Si faceUseGpu=true (medium/high), intentamos GPU y caemos a CPU si falla.
      const delegate: 'GPU' | 'CPU' = this.perf.faceUseGpu ? 'GPU' : 'CPU';
      console.log(`📷 FaceTracker: delegate inicial=${delegate}, video=${this.perf.videoWidth}x${this.perf.videoHeight}, throttle=${this.perf.faceThrottleMs}ms`);

      try {
        this.faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: FACE_MODEL_URL,
            delegate
          },
          outputFaceBlendshapes: false,
          outputFacialTransformationMatrixes: false,
          runningMode: 'VIDEO',
          numFaces: 1
        });
      } catch (gpuErr) {
        // Si GPU falla, reintentar con CPU (aunque el preset dijera GPU)
        console.warn('⚠️ FaceTracker GPU delegate falló, reintentando con CPU:', gpuErr);
        this.faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: FACE_MODEL_URL,
            delegate: 'CPU'
          },
          outputFaceBlendshapes: false,
          outputFacialTransformationMatrixes: false,
          runningMode: 'VIDEO',
          numFaces: 1
        });
      }

      // 3. Arrancar cámara frontal con resolución según preset
      // 240x180 en low, 320x240 en medium, 480x360 en high
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: this.perf.videoWidth },
          height: { ideal: this.perf.videoHeight }
        },
        audio: false
      });
      this.video.srcObject = this.stream;
      await this.video.play();

      this.onReady?.();
    } catch (err) {
      this.onError?.(err instanceof Error ? err : new Error(String(err)));
    }
  }

  /**
   * Loop principal: detecta landmarks en cada frame del video.
   * Usa requestAnimationFrame con timestamp monótono de performance.now().
   */
  private loop = (): void => {
    if (!this.running || !this.faceLandmarker) {
      this.rafId = requestAnimationFrame(this.loop);
      return;
    }

    if (this.video.readyState >= 2 && this.video.videoWidth > 0) {
      const now = performance.now();
      // Throttle para aliviar CPU en equipos débiles
      const elapsed = now - this.lastSendTime;
      const throttleMs = this.perf.faceThrottleMs;
      if (elapsed >= throttleMs && this.video.currentTime !== this.lastVideoTime) {
        this.lastSendTime = now;
        this.lastVideoTime = this.video.currentTime;
        try {
          const results: FaceLandmarkerResult =
            this.faceLandmarker.detectForVideo(this.video, now);
          this.onResults(results);
        } catch {
          // Errores transitorios — ignorar
        }
      }
    }

    this.rafId = requestAnimationFrame(this.loop);
  };

  /** Procesa resultados y extrae la nariz. */
  private onResults(results: FaceLandmarkerResult): void {
    if (!results.faceLandmarks || results.faceLandmarks.length === 0) {
      this.onFrame?.({ x: 0.5, y: 0.5, detected: false });
      this.clearOverlay();
      return;
    }

    const landmarks = results.faceLandmarks[0];
    const nose = landmarks[NOSE_TIP_INDEX];
    if (!nose) {
      this.onFrame?.({ x: 0.5, y: 0.5, detected: false });
      this.clearOverlay();
      return;
    }

    this.onFrame?.({
      x: nose.x,
      y: nose.y,
      detected: true
    });

    if (this.showOverlay) {
      this.drawOverlay(landmarks);
    }
  }

  /** Dibuja la malla facial en el canvas overlay (debug). */
  private drawOverlay(landmarks: { x: number; y: number }[]): void {
    if (!this.overlay || !this.overlayCtx) return;
    const w = this.overlay.width;
    const h = this.overlay.height;
    this.overlayCtx.clearRect(0, 0, w, h);

    this.overlayCtx.fillStyle = '#FFC72C';
    for (const lm of landmarks) {
      this.overlayCtx.beginPath();
      this.overlayCtx.arc(lm.x * w, lm.y * h, 1.2, 0, Math.PI * 2);
      this.overlayCtx.fill();
    }

    const nose = landmarks[NOSE_TIP_INDEX];
    if (nose) {
      this.overlayCtx.fillStyle = '#DA291C';
      this.overlayCtx.beginPath();
      this.overlayCtx.arc(nose.x * w, nose.y * h, 5, 0, Math.PI * 2);
      this.overlayCtx.fill();
    }
  }

  private clearOverlay(): void {
    if (!this.overlay || !this.overlayCtx) return;
    this.overlayCtx.clearRect(0, 0, this.overlay.width, this.overlay.height);
  }

  public start(): void {
    this.running = true;
    if (this.rafId === null) {
      this.rafId = requestAnimationFrame(this.loop);
    }
  }

  public stop(): void {
    this.running = false;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop());
      this.stream = null;
    }
    if (this.faceLandmarker) {
      try { this.faceLandmarker.close(); } catch { /* noop */ }
      this.faceLandmarker = null;
    }
  }

  /** Cambia visibilidad del overlay en runtime. */
  public setShowOverlay(show: boolean): void {
    this.showOverlay = show;
    if (!show) this.clearOverlay();
  }
}
