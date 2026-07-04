/**
 * gesture-cursor.ts
 * -----------------------------------------------------------
 * Cursor visual que sigue la posición de la mano derecha.
 * - Círculo rojo de 24px cuando está sobre espacio vacío
 * - Círculo verde de 28px cuando está sobre un objeto interactuable
 * - Animación "pulse" (escala 1.5x) al disparar un doble-tap
 *
 * El cursor solo es visible cuando el gesto está activo
 * (mano derecha + índice+medio extendidos).
 * -----------------------------------------------------------
 */

export class GestureCursor {
  private el: HTMLDivElement;
  private visible = false;
  private hovering = false;
  private currentX = 0;
  private currentY = 0;

  constructor() {
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
    document.body.appendChild(this.el);
  }

  /** Muestra u oculta el cursor (según si el gesto está activo). */
  public setVisible(v: boolean): void {
    if (v === this.visible) return;
    this.visible = v;
    this.el.style.opacity = v ? '1' : '0';
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
    }
  }

  /** Actualiza la posición del cursor en píxeles de pantalla. */
  public setPosition(x: number, y: number): void {
    this.currentX = x;
    this.currentY = y;
    this.el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  }

  /** Animación pulse al disparar doble-tap. */
  public pulse(): void {
    // Escala 1.5x con timeout y luego vuelve
    this.el.style.transition = 'transform 0.1s ease-out, opacity 0.15s ease';
    this.el.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%) scale(1.6)`;
    setTimeout(() => {
      this.el.style.transition = 'opacity 0.15s ease, width 0.15s ease, height 0.15s ease, background 0.15s ease';
      this.el.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`;
    }, 180);
  }
}
