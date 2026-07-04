/**
 * ui-controller.ts
 * -----------------------------------------------------------
 * Maneja toda la interfaz de usuario:
 *  - Pantalla de carga
 *  - Pantalla de inicio (permiso cámara)
 *  - Instrucciones iniciales (desaparecen a los 5s)
 *  - Indicador de cámara (punto verde/rojo)
 *  - Botón de recalibración
 *  - Toast de mensajes
 *  - Popup de salida
 *  - Pantalla final
 * -----------------------------------------------------------
 */

export class UIController {
  private loader: HTMLElement;
  private startScreen: HTMLElement;
  private instructions: HTMLElement;
  private camDot: HTMLElement;
  private camLabel: HTMLElement;
  private calibrateBtn: HTMLElement;
  private toast: HTMLElement;
  private exitPopup: HTMLElement;
  private endScreen: HTMLElement;
  private camPreview: HTMLElement;

  private toastTimer: number | null = null;
  private instructionsTimer: number | null = null;
  private calibrateHandler: () => void;
  private endRestartHandler: () => void;

  constructor() {
    this.loader = document.getElementById('loader')!;
    this.startScreen = document.getElementById('start-screen')!;
    this.instructions = document.getElementById('instructions')!;
    this.camDot = document.getElementById('cam-dot')!;
    this.camLabel = document.getElementById('cam-label')!;
    this.calibrateBtn = document.getElementById('calibrate-btn')!;
    this.toast = document.getElementById('toast')!;
    this.exitPopup = document.getElementById('exit-popup')!;
    this.endScreen = document.getElementById('end-screen')!;
    this.camPreview = document.getElementById('cam-preview')!;

    this.calibrateHandler = () => { /* asignado externamente */ };
    this.endRestartHandler = () => { /* asignado externamente */ };
  }

  // ----- Loader -----
  public hideLoader(): void {
    this.loader.classList.add('hide');
    setTimeout(() => { this.loader.style.display = 'none'; }, 700);
  }

  public setLoaderText(text: string): void {
    const t = document.getElementById('loader-text');
    if (t) t.textContent = text;
  }

  // ----- Start screen -----
  public showStartScreen(): void {
    this.startScreen.classList.remove('hide');
  }

  public hideStartScreen(): void {
    this.startScreen.classList.add('hide');
  }

  public onStart(callback: () => void): void {
    const btn = document.getElementById('start-btn')!;
    const handler = () => callback();
    btn.addEventListener('click', handler, { once: true });
  }

  // ----- Instructions -----
  public showInstructions(): void {
    this.instructions.classList.remove('hide');
    // Auto-ocultar a los 5 segundos
    if (this.instructionsTimer !== null) {
      clearTimeout(this.instructionsTimer);
    }
    this.instructionsTimer = window.setTimeout(() => {
      this.instructions.classList.add('hide');
    }, 5000);
  }

  public hideInstructions(): void {
    this.instructions.classList.add('hide');
  }

  // ----- Cámara indicador -----
  public setCameraActive(active: boolean): void {
    if (active) {
      this.camDot.classList.add('active');
      this.camLabel.textContent = 'CAM';
    } else {
      this.camDot.classList.remove('active');
      this.camLabel.textContent = 'OFF';
    }
  }

  public setCameraLabel(text: string): void {
    this.camLabel.textContent = text;
  }

  // ----- Botón recalibración -----
  public onCalibrate(callback: () => void): void {
    this.calibrateHandler = callback;
    this.calibrateBtn.addEventListener('click', this.calibrateHandler);
  }

  // ----- Toast -----
  public showToast(message: string, duration = 1800): void {
    this.toast.textContent = message;
    this.toast.classList.add('visible');
    if (this.toastTimer !== null) clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => {
      this.toast.classList.remove('visible');
    }, duration);
  }

  // ----- Popup de salida -----
  public showExitPopup(): void {
    this.exitPopup.classList.add('visible');
  }

  public hideExitPopup(): void {
    this.exitPopup.classList.remove('visible');
  }

  // ----- Pantalla final -----
  public showEndScreen(): void {
    this.endScreen.classList.add('visible');
  }

  public hideEndScreen(): void {
    this.endScreen.classList.remove('visible');
  }

  public onEndRestart(callback: () => void): void {
    this.endRestartHandler = callback;
    const btn = document.getElementById('end-restart')!;
    btn.addEventListener('click', this.endRestartHandler);
  }

  // ----- Cam preview (debug) -----
  public showCamPreview(): void {
    this.camPreview.classList.add('visible');
  }

  public hideCamPreview(): void {
    this.camPreview.classList.remove('visible');
  }

  // ----- Limpieza -----
  public dispose(): void {
    this.calibrateBtn.removeEventListener('click', this.calibrateHandler);
    if (this.toastTimer !== null) clearTimeout(this.toastTimer);
    if (this.instructionsTimer !== null) clearTimeout(this.instructionsTimer);
  }
}
