/**
 * tour-controller.ts
 * -----------------------------------------------------------
 * Modo presentación: tour automático de cámara por el local 3D.
 * Recorre una serie de waypoints predefinidos, animando la
 * cámara suavemente entre ellos (yaw + posición + pitch).
 *
 * Activación:
 *   - Mano levantada (cursorY < 0.2) durante 3 segundos
 *   - Comando de voz: "tour" / "presentación"
 *
 * Desactivación:
 *   - Cualquier gesto del cursor durante el tour
 *   - Comando de voz: "parar tour"
 *   - Botón "Salir del tour" en pantalla
 * -----------------------------------------------------------
 */

import type { SceneManager } from './scene-manager';

interface TourWaypoint {
  x: number;
  y: number;
  z: number;
  yawDeg: number;
  pitchDeg?: number;
  durationMs: number;   // tiempo de transición hasta el siguiente waypoint
  label: string;        // texto a mostrar durante este segmento
}

/** Waypoints del tour — pensado para un McDonald's típico.
 *  El modelo GLTF está centrado en (0,0,0), con la puerta de
 *  entrada en +Z y el mostrador/counter en -Z. */
const WAYPOINTS: TourWaypoint[] = [
  {
    x: 0, y: 1.7, z: 6, yawDeg: 180, pitchDeg: 0,
    durationMs: 4000,
    label: '🍔 Bienvenido al McDonald\'s 3D — Tour automático'
  },
  {
    x: 0, y: 1.7, z: 2, yawDeg: 180, pitchDeg: -5,
    durationMs: 3500,
    label: 'Entrando al local — zona de caja y mostrador'
  },
  {
    x: -3, y: 1.7, z: 0, yawDeg: 90, pitchDeg: 0,
    durationMs: 4000,
    label: 'Mostrador de pedidos — izquierda'
  },
  {
    x: 0, y: 1.7, z: -2, yawDeg: 0, pitchDeg: 0,
    durationMs: 4000,
    label: 'Zona de mesas — centro del local'
  },
  {
    x: 3, y: 1.7, z: -3, yawDeg: -45, pitchDeg: 0,
    durationMs: 3500,
    label: 'McCafé y zona de estar'
  },
  {
    x: 0, y: 2.5, z: 0, yawDeg: 180, pitchDeg: -25,
    durationMs: 4000,
    label: 'Vista cenital del local'
  },
  {
    x: 0, y: 1.7, z: 6, yawDeg: 180, pitchDeg: 0,
    durationMs: 3000,
    label: 'Fin del tour — volviendo a la entrada'
  }
];

export class TourController {
  private scene: SceneManager;
  private active = false;
  private currentIndex = 0;
  private segmentStartTime = 0;
  private startPos = { x: 0, y: 0, z: 0, yaw: 0, pitch: 0 };
  private targetPos = { x: 0, y: 0, z: 0, yaw: 0, pitch: 0 };
  private rafId: number | null = null;
  private overlay: HTMLDivElement;
  private labelEl: HTMLDivElement;
  private exitBtn: HTMLButtonElement;
  private onActivateCb?: () => void;
  private onDeactivateCb?: () => void;

  constructor(scene: SceneManager) {
    this.scene = scene;

    // Overlay de tour — barra inferior con etiqueta + botón salir
    this.overlay = document.createElement('div');
    this.overlay.id = 'tour-overlay';
    this.overlay.style.cssText = [
      'position: fixed',
      'bottom: 24px',
      'left: 50%',
      'transform: translateX(-50%)',
      'display: none',
      'align-items: center',
      'gap: 1rem',
      'background: rgba(0,0,0,0.85)',
      'border: 1px solid rgba(255,199,44,0.5)',
      'border-radius: 14px',
      'padding: 0.8rem 1.2rem',
      'box-shadow: 0 8px 32px rgba(0,0,0,0.6)',
      'z-index: 960',
      'color: #fff',
      'font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
      'max-width: 90vw',
      'backdrop-filter: blur(8px)',
      '-webkit-backdrop-filter: blur(8px)'
    ].join(';');

    this.labelEl = document.createElement('div');
    this.labelEl.style.cssText = [
      'font-size: 0.95rem',
      'font-weight: 600',
      'color: #FFC72C',
      'text-shadow: 0 1px 2px rgba(0,0,0,0.5)',
      'max-width: 60vw',
      'overflow: hidden',
      'text-overflow: ellipsis',
      'white-space: nowrap'
    ].join(';');
    this.labelEl.textContent = 'Tour en curso...';

    this.exitBtn = document.createElement('button');
    this.exitBtn.textContent = '✕ Salir';
    this.exitBtn.style.cssText = [
      'background: rgba(218,41,28,0.9)',
      'color: #fff',
      'border: none',
      'border-radius: 8px',
      'padding: 0.4rem 0.9rem',
      'font-size: 0.85rem',
      'font-weight: 700',
      'cursor: pointer',
      'white-space: nowrap'
    ].join(';');
    this.exitBtn.addEventListener('click', () => this.deactivate());

    this.overlay.appendChild(this.labelEl);
    this.overlay.appendChild(this.exitBtn);
    document.body.appendChild(this.overlay);
  }

  public isActive(): boolean {
    return this.active;
  }

  public onActivate(cb: () => void): void { this.onActivateCb = cb; }
  public onDeactivate(cb: () => void): void { this.onDeactivateCb = cb; }

  /** Activa el tour desde el primer waypoint. */
  public activate(): void {
    if (this.active) return;
    this.active = true;
    this.currentIndex = 0;
    this.overlay.style.display = 'flex';
    this.startSegment(0);
    this.onActivateCb?.();
  }

  /** Desactiva el tour y restaura el control manual. */
  public deactivate(): void {
    if (!this.active) return;
    this.active = false;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.overlay.style.display = 'none';
    this.onDeactivateCb?.();
  }

  /** Inicia la transición hacia el waypoint idx. */
  private startSegment(idx: number): void {
    const wp = WAYPOINTS[idx];
    if (!wp) {
      // Tour completo — desactivar
      this.deactivate();
      return;
    }

    // Capturar posición inicial de la cámara ahora
    const camState = this.scene.getCameraInfo();
    this.startPos = {
      x: camState.x, y: camState.y, z: camState.z,
      yaw: this.scene.getYaw(),
      pitch: this.scene.getPitch()
    };
    this.targetPos = {
      x: wp.x, y: wp.y, z: wp.z,
      yaw: wp.yawDeg * Math.PI / 180,
      pitch: (wp.pitchDeg ?? 0) * Math.PI / 180
    };
    this.segmentStartTime = performance.now();
    this.labelEl.textContent = wp.label;
  }

  /** Loop de animación — interpola posición y rotación. */
  private loop = (): void => {
    if (!this.active) return;

    const now = performance.now();
    const wp = WAYPOINTS[this.currentIndex];
    if (!wp) {
      this.deactivate();
      return;
    }

    const elapsed = now - this.segmentStartTime;
    const t = Math.min(1, elapsed / wp.durationMs);
    // Easing: ease-in-out cúbico
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // Interpolar posición
    const x = this.startPos.x + (this.targetPos.x - this.startPos.x) * eased;
    const y = this.startPos.y + (this.targetPos.y - this.startPos.y) * eased;
    const z = this.startPos.z + (this.targetPos.z - this.startPos.z) * eased;
    this.scene.setCameraPosition(x, y, z);

    // Interpolar yaw con manejo de wrap-around (camino más corto)
    let yawDelta = this.targetPos.yaw - this.startPos.yaw;
    // Normalizar a [-PI, PI]
    while (yawDelta > Math.PI) yawDelta -= 2 * Math.PI;
    while (yawDelta < -Math.PI) yawDelta += 2 * Math.PI;
    const yaw = this.startPos.yaw + yawDelta * eased;
    // Pitch simple
    const pitch = this.startPos.pitch + (this.targetPos.pitch - this.startPos.pitch) * eased;

    this.scene.setCameraRotation(yaw, pitch);

    if (t >= 1) {
      // Siguiente waypoint
      this.currentIndex++;
      if (this.currentIndex >= WAYPOINTS.length) {
        // Tour completo
        setTimeout(() => this.deactivate(), 500);
        return;
      }
      this.startSegment(this.currentIndex);
    }

    this.rafId = requestAnimationFrame(this.loop);
  };

  /** Llama desde main loop para arrancar el raf cuando se activa. */
  public tick(): void {
    if (this.active && this.rafId === null) {
      this.rafId = requestAnimationFrame(this.loop);
    } else if (!this.active && this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
}
