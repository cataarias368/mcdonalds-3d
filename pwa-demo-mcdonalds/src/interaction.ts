/**
 * interaction.ts
 * -----------------------------------------------------------
 * Maneja la interacción de toque en pantalla:
 *  - Al tocar, lanza un raycast desde el centro de la cámara.
 *  - Si impacta con el objeto `door_exit`, muestra el popup de salida.
 *  - Si impacta con otro objeto, muestra un toast informativo.
 *  - Si no impacta nada, no hace nada.
 *
 * También gestiona la lógica del popup (Sí / No).
 * -----------------------------------------------------------
 */

import type { SceneManager } from './scene-manager';
import type { UIController } from './ui-controller';

export class InteractionController {
  private scene: SceneManager;
  private ui: UIController;
  private popupActive = false;
  private touchHandler: (e: TouchEvent | MouseEvent) => void;

  constructor(scene: SceneManager, ui: UIController) {
    this.scene = scene;
    this.ui = ui;

    this.touchHandler = (e: Event) => this.onTap(e);
    // Touch y click
    window.addEventListener('touchend', this.touchHandler as any, { passive: true });
    window.addEventListener('click', this.touchHandler as any);
  }

  /** Maneja el toque en pantalla. */
  private onTap(_e: Event): void {
    // Si el popup está activo, ignorar el toque (los botones manejan su click)
    if (this.popupActive) return;
    // Ignorar toques sobre elementos de UI (botones, etc.)
    if (_e.target instanceof HTMLElement && _e.target.closest('button, .popup-card, #instructions')) {
      return;
    }

    const lookingAtDoor = this.scene.isLookingAtDoor();
    if (lookingAtDoor) {
      this.showExitPopup();
    } else {
      const obj = this.scene.getLookedObject();
      if (obj) {
        const name = obj.name || obj.type || 'objeto';
        this.ui.showToast(`No es la puerta (${name})`);
      } else {
        this.ui.showToast('No hay nada allí');
      }
    }
  }

  /** Muestra el popup de salida y configura los botones. */
  private showExitPopup(): void {
    this.popupActive = true;
    this.ui.showExitPopup();

    const yes = document.getElementById('exit-yes');
    const no = document.getElementById('exit-no');
    if (!yes || !no) return;

    const onYes = () => {
      cleanup();
      this.ui.hideExitPopup();
      this.ui.showEndScreen();
    };
    const onNo = () => {
      cleanup();
      this.ui.hideExitPopup();
      this.popupActive = false;
    };
    const cleanup = () => {
      yes.removeEventListener('click', onYes);
      no.removeEventListener('click', onNo);
    };

    yes.addEventListener('click', onYes);
    no.addEventListener('click', onNo);
  }

  /** Permite re-entrar desde la pantalla final (botón "Volver a entrar"). */
  public resetFromEnd(): void {
    this.popupActive = false;
  }

  public dispose(): void {
    window.removeEventListener('touchend', this.touchHandler as any);
    window.removeEventListener('click', this.touchHandler as any);
  }
}
