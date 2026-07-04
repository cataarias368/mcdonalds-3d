/**
 * hand-tracker.ts
 * -----------------------------------------------------------
 * Inicializa MediaPipe HandLandmarker (Tasks Vision API) y
 * detecta:
 *   - Mano derecha presente
 *   - Gesto "pinza con dos dedos": índice + medio extendidos,
 *     anular + meñique cerrados
 *   - Posición del cursor (mapeada desde landmark 9 / MCP del medio)
 *   - Doble-tap: dos activaciones del gesto en <400ms
 *
 * Corre en paralelo con FaceTracker usando el mismo elemento <video>.
 * Comparte el runtime WASM de Tasks Vision con FaceLandmarker (sin
 * colisión de globals como ocurría con los scripts legacy).
 * -----------------------------------------------------------
 */

import {
  HandLandmarker,
  FilesetResolver,
  type HandLandmarkerResult,
  type Category
} from '@mediapipe/tasks-vision';
import { type PerformancePreset } from './performance';

export interface HandState {
  /** Se detectó alguna mano en este frame */
  detected: boolean;
  /** Gesto activo: mano derecha + índice+medio extendidos + anular+meñique cerrados.
   *  El pulgar puede estar extendido o no (no afecta la activación del cursor). */
  isActive: boolean;
  /** Posición del cursor normalizada 0..1 (X: izquierda..derecha, Y: arriba..abajo) */
  cursorX: number;
  cursorY: number;
  /** Se disparó un gesto OK en este frame (true solo en el frame del evento).
   *  OK = índice+medio+pulgar extendidos, anular+meñique cerrados.
   *  Se dispara en el flanco ascendente (cuando el pulgar pasa de cerrado a abierto). */
  confirm: boolean;
  /** Etiqueta de la mano detectada (para debug) */
  handedness: string;
}

export interface HandTrackerOptions {
  video: HTMLVideoElement;
  onFrame?: (state: HandState) => void;
  onReady?: () => void;
  onError?: (err: Error) => void;
  /** Preset de performance — controla numHands, throttle, GPU/CPU */
  performance?: PerformancePreset;
}

// Landmark indices for MediaPipe Hands (21 puntos por mano)
const THUMB_TIP = 4;
const INDEX_TIP = 8;
const INDEX_PIP = 6;
const INDEX_MCP = 5;
const MIDDLE_TIP = 12;
const MIDDLE_PIP = 10;
const RING_TIP = 16;
const RING_PIP = 14;
const PINKY_TIP = 20;
const PINKY_PIP = 18;
const MCP_MIDDLE = 9; // base del dedo medio — centro estable de la palma

/** Distancia mínima (en coords normalizadas 0..1) entre la punta del pulgar
 *  y la base del índice para considerar el pulgar como extendido.
 *  Empírico: pulgar cerrado contra índice ≈ 0.04, pulgar abierto ≈ 0.12.
 *  Bajado a 0.06 para hacer el gesto OK más sensible (se disparaba poco). */
const THUMB_EXTENDED_THRESHOLD = 0.06;

/** Throttle para enviar frames a HandLandmarker (ms) — alivia CPU. */
const FRAME_THROTTLE_MS = 50; // ~20fps

/**
 * URL del runtime WASM de Tasks Vision (compartido con FaceLandmarker).
 * Debe ser la MISMA versión para que el runtime se reutilice.
 */
const WASM_URL =
  'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm';

/**
 * URL del modelo de Hand Landmarker (21 puntos por mano).
 */
const HAND_MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

export class HandTracker {
  private handLandmarker: HandLandmarker | null = null;
  private video: HTMLVideoElement;
  private onFrame?: (state: HandState) => void;
  private onReady?: () => void;
  private onError?: (err: Error) => void;
  private running = false;
  private rafId: number | null = null;
  private perf: PerformancePreset;

  // Estado interno para gesto OK (flanco ascendente del pulgar)
  private confirmWasActive = false;
  private lastSendTime = 0;
  private lastVideoTime = -1;

  constructor(opts: HandTrackerOptions) {
    this.video = opts.video;
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
  }

  public async init(): Promise<void> {
    try {
      const vision = await FilesetResolver.forVisionTasks(WASM_URL);

      const delegate: 'GPU' | 'CPU' = this.perf.handUseGpu ? 'GPU' : 'CPU';
      const numHands = this.perf.handNumHands;
      console.log(`✋ HandTracker: delegate inicial=${delegate}, numHands=${numHands}, throttle=${this.perf.handThrottleMs}ms`);

      try {
        this.handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: HAND_MODEL_URL,
            delegate
          },
          runningMode: 'VIDEO',
          numHands,
          minHandDetectionConfidence: 0.6,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5
        });
      } catch (gpuErr) {
        // GPU falló — reintentar con CPU
        console.warn('⚠️ HandTracker GPU delegate falló, reintentando con CPU:', gpuErr);
        this.handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: HAND_MODEL_URL,
            delegate: 'CPU'
          },
          runningMode: 'VIDEO',
          numHands,
          minHandDetectionConfidence: 0.6,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5
        });
      }

      this.onReady?.();
    } catch (err) {
      this.onError?.(err instanceof Error ? err : new Error(String(err)));
    }
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
    if (this.handLandmarker) {
      try { this.handLandmarker.close(); } catch { /* noop */ }
      this.handLandmarker = null;
    }
  }

  private loop = (): void => {
    if (!this.running) {
      this.rafId = requestAnimationFrame(this.loop);
      return;
    }
    const now = performance.now();
    // Throttle según preset (low=100ms, medium=66ms, high=50ms)
    if (
      this.handLandmarker &&
      now - this.lastSendTime >= this.perf.handThrottleMs &&
      this.video.readyState >= 2 &&
      this.video.videoWidth > 0 &&
      this.video.currentTime !== this.lastVideoTime
    ) {
      this.lastSendTime = now;
      this.lastVideoTime = this.video.currentTime;
      try {
        const results: HandLandmarkerResult =
          this.handLandmarker.detectForVideo(this.video, now);
        this.onResults(results);
      } catch {
        // Errores transitorios — ignorar
      }
    }
    this.rafId = requestAnimationFrame(this.loop);
  };

  private onResults(results: HandLandmarkerResult): void {
    if (!results.landmarks || results.landmarks.length === 0) {
      // Sin mano — emitir estado idle
      this.onFrame?.({
        detected: false,
        isActive: false,
        cursorX: 0.5,
        cursorY: 0.5,
        confirm: false,
        handedness: ''
      });
      this.confirmWasActive = false;
      return;
    }

    // Buscar mano derecha (handedness desde perspectiva del usuario)
    // Tasks Vision: results.handednesses[i] = array de Category
    // categoryName: "Left" | "Right"
    let handIndex = 0;
    let handedness = 'Right';
    if (results.handednesses && results.handednesses.length > 1) {
      let found = false;
      for (let i = 0; i < results.handednesses.length; i++) {
        const cats: Category[] = results.handednesses[i];
        if (cats && cats.length > 0 && cats[0].categoryName === 'Right') {
          handIndex = i;
          handedness = 'Right';
          found = true;
          break;
        }
      }
      if (!found) {
        handIndex = 0;
        const cats = results.handednesses[0];
        handedness = cats && cats[0] ? cats[0].categoryName : 'Right';
      }
    } else if (results.handednesses && results.handednesses.length === 1) {
      const cats = results.handednesses[0];
      handedness = cats && cats[0] ? cats[0].categoryName : 'Right';
    }

    const landmarks = results.landmarks[handIndex];

    // Determinar qué dedos están extendidos.
    // Un dedo está extendido si la punta está MÁS ARRIBA (y menor) que la articulación PIP.
    // Umbral pequeño (-0.005) para ser más tolerante con dedos "casi extendidos"
    // que la MediaPipe a veces fluctúa.
    const indexExtended = landmarks[INDEX_TIP].y < landmarks[INDEX_PIP].y + 0.005;
    const middleExtended = landmarks[MIDDLE_TIP].y < landmarks[MIDDLE_PIP].y + 0.005;
    const ringExtended = landmarks[RING_TIP].y < landmarks[RING_PIP].y - 0.01;
    const pinkyExtended = landmarks[PINKY_TIP].y < landmarks[PINKY_PIP].y - 0.01;

    // Pulgar extendido: la distancia entre la punta del pulgar (landmark 4)
    //  y la base del índice (landmark 5) supera un umbral.
    // Es más robusto que comparar X/Y porque el pulgar se mueve lateralmente.
    const thumbDist = Math.hypot(
      landmarks[THUMB_TIP].x - landmarks[INDEX_MCP].x,
      landmarks[THUMB_TIP].y - landmarks[INDEX_MCP].y
    );
    const thumbExtended = thumbDist > THUMB_EXTENDED_THRESHOLD;

    // Gesto cursor: índice + medio extendidos.
    // IMPORTANTE: no requerimos que anular/meñique estén cerrados — muchos
    // usuarios al levantar los dos dedos mantienen los otros ligeramente
    // extendidos. Antes exigíamos ambos cerrados y el punto rojo nunca
    // aparecía. Ahora basta con que índice y medio estén arriba.
    const isGestureActive = indexExtended && middleExtended;

    // Gesto OK (confirmar selección): gesto cursor activo + pulgar extendido.
    const isConfirmActive = isGestureActive && thumbExtended;

    // Posición del cursor: usar landmark 9 (MCP del medio) — centro estable de la palma
    const cursorPoint = landmarks[MCP_MIDDLE];
    // Espejar X para que la cámara frontal se comporte como espejo:
    // mano derecha del usuario → aparece a la derecha de la pantalla
    const cursorX = 1 - cursorPoint.x;
    const cursorY = cursorPoint.y;

    // === Confirmación por flanco ascendente del gesto OK ===
    // Se dispara UNA vez cuando el pulgar pasa de cerrado a abierto
    // mientras se mantiene el gesto cursor. Mucho más confiable que
    // doble-tap porque no depende de timing.
    let confirm = false;
    if (isConfirmActive && !this.confirmWasActive) {
      confirm = true;
    }
    this.confirmWasActive = isConfirmActive;

    this.onFrame?.({
      detected: true,
      isActive: isGestureActive,
      cursorX,
      cursorY,
      confirm,
      handedness
    });
  }
}
