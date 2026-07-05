/**
 * gesture-cursor.ts
 * -----------------------------------------------------------
 * Cursor visual que sigue la posición de la mano.
 *
 * Estados:
 *  - Idle (rojo, 24px)      → sobre espacio vacío
 *  - Hovering (verde, 28px) → sobre objeto interactuable
 *  - Dwelling (anillo)      → el anillo se llena 0→100% en DWELL_MS
 *  - Pulse (escala 1.6x)    → al completar dwell o gesto confirm
 *
 * DWELL: cuando el cursor está quieto sobre un objeto, un anillo
 * amarillo se va llenando alrededor del cursor. Cuando llega a
 * 100%, se dispara el click automático. Si el cursor se mueve
 * fuera del objeto o el gesto se desactiva, el dwell se cancela.
 * -----------------------------------------------------------
 */

/** Tiempo de dwell en ms — tiempo que el cursor debe estar
 *  quieto sobre un objeto para disparar el click automático. */
export const DWELL_MS = 1500;

export class GestureCursor {
  private el: HTMLDivElement;
  private ringEl: HTMLDivElement;       // anillo SVG que se llena
  private ringCircle: SVGCircleElement; // círculo de progreso
  private visible = false;
  private hovering = false;
  private dwelling = false;
  private currentX = 0;
  private currentY = 0;

  constructor() {
    // Contenedor principal (punto rojo/verde)
    this.el = document.createElement('div');
    this.el.id = 'gesture-cursor';
    this.el.style.cssText = [
      'position: fixed',
      'top: 0',
      'left: 0',
      'width: 24px',
      'height: 24px',
      'border-radius: 50%',
      'background: rgba(255, 34, 34, 0.85)',
      'border: 2px solid #fff',
      'box-shadow: 0 0 12px rgba(255, 0, 0, 0.8), 0 0 4px rgba(0,0,0,0.5)',
      'pointer-events: none',
      'z-index: 870',
      'transform: translate(-50%, -50%)',
      'opacity: 0',
      'transition: opacity 0.15s ease, width 0.15s ease, height 0.15s ease, background 0.15s ease',
      'will-change: transform, opacity'
    ].join(';');

    // Anillo de dwell — SVG circular que se llena con stroke-dashoffset
    this.ringEl = document.createElement('div');
    this.ringEl.id = 'gesture-cursor-ring';
    this.ringEl.style.cssText = [
      'position: fixed',
      'top: 0',
      'left: 0',
      'width: 60px',
      'height: 60px',
      'pointer-events: none',
      'z-index: 869',
      'transform: translate(-50%, -50%)',
      'opacity: 0',
      'transition: opacity 0.2s ease',
      'will-change: transform, opacity'
    ].join(';');

    // SVG del anillo — círculo de fondo + círculo de progreso
    const RADIUS = 26;
    const CIRC = 2 * Math.PI * RADIUS;
    this.ringEl.innerHTML = `
      <svg width="60" height="60" viewBox="0 0 60 60" style="overflow: visible;">
        <circle cx="30" cy="30" r="${RADIUS}" fill="none"
                stroke="rgba(255,255,255,0.25)" stroke-width="3" />
        <circle id="gesture-cursor-progress" cx="30" cy="30" r="${RADIUS}" fill="none"
                stroke="#FFC72C" stroke-width="4"
                stroke-linecap="round"
                stroke-dasharray="${CIRC}"
                stroke-dashoffset="${CIRC}"
                transform="rotate(-90 30 30)"
                style="transition: stroke-dashoffset 0.05s linear;" />
      </svg>
    `;
    this.ringCircle = this.ringEl.querySelector('#gesture-cursor-progress') as SVGCircleElement;
    this.ringCircle.dataset.circumference = String(CIRC);

    document.body.appendChild(this.ringEl);
    document.body.appendChild(this.el);
  }

  /** Muestra u oculta el cursor (según si el gesto está activo). */
  public setVisible(v: boolean): void {
    if (v === this.visible) return;
    this.visible = v;
    this.el.style.opacity = v ? '1' : '0';
    if (!v) {
      // Al ocultar, también ocultar anillo y resetear dwell
      this.ringEl.style.opacity = '0';
      this.setDwellProgress(0);
    }
  }

  /** Cambia el estado de "hovering" (sobre objeto interactuable → verde). */
  public setHovering(h: boolean): void {
    if (h === this.hovering) return;
    this.hovering = h;
    if (h) {
      this.el.style.background = 'rgba(52, 199, 89, 0.9)';
      this.el.style.width = '28px';
      this.el.style.height = '28px';
      this.el.style.boxShadow = '0 0 14px rgba(52, 199, 89, 0.9), 0 0 4px rgba(0,0,0,0.5)';
    } else {
      this.el.style.background = 'rgba(255, 34, 34, 0.85)';
      this.el.style.width = '24px';
      this.el.style.height = '24px';
      this.el.style.boxShadow = '0 0 12px rgba(255, 0, 0, 0.8), 0 0 4px rgba(0,0,0,0.5)';
      // Al dejar de hover, cancelar dwell
      this.cancelDwell();
    }
  }

  /** Actualiza la posición del cursor en píxeles de pantalla. */
  public setPosition(x: number, y: number): void {
    this.currentX = x;
    this.currentY = y;
    this.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    this.ringEl.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  }

  /**
   * Inicia el dwell: muestra el anillo y empieza a llenarlo.
   * Devuelve un callback para actualizar el progreso (0..1).
   */
  public startDwell(): void {
    if (this.dwelling) return;
    this.dwelling = true;
    this.ringEl.style.opacity = '1';
    this.setDwellProgress(0);
  }

  /** Actualiza el progreso del dwell (0..1). */
  public setDwellProgress(progress: number): void {
    const p = Math.max(0, Math.min(1, progress));
    const circ = parseFloat(this.ringCircle.dataset.circumference || '163.36');
    const offset = circ * (1 - p);
    this.ringCircle.style.strokeDashoffset = String(offset);
  }

  /** Cancela el dwell — resetea el anillo y lo oculta. */
  public cancelDwell(): void {
    if (!this.dwelling) return;
    this.dwelling = false;
    this.ringEl.style.opacity = '0';
    this.setDwellProgress(0);
  }

  /** Completa el dwell — el anillo llega a 100% y se oculta. */
  public completeDwell(): void {
    this.setDwellProgress(1);
    this.dwelling = false;
    // Pulse visual antes de ocultar el anillo
    this.pulse();
    setTimeout(() => {
      this.ringEl.style.opacity = '0';
      this.setDwellProgress(0);
    }, 200);
  }

  /** Animación pulse al disparar click. */
  public pulse(): void {
    this.el.style.transition = 'transform 0.1s ease-out, opacity 0.15s ease';
    this.el.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%) scale(1.6)`;
    setTimeout(() => {
      this.el.style.transition = 'opacity 0.15s ease, width 0.15s ease, height 0.15s ease, background 0.15s ease';
      this.el.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`;
    }, 180);
  }
}
