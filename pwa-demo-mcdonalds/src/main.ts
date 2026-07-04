/**
 * main.ts
 * -----------------------------------------------------------
 * Punto de entrada. Orquesta:
 *  1. UIController (interfaz)
 *  2. SceneManager (escena 3D)
 *  3. FaceTracker (MediaPipe)
 *  4. InteractionController (raycast + popup)
 *
 * Flujo:
 *  - Carga la escena 3D y muestra la pantalla de inicio.
 *  - Al pulsar "Comenzar experiencia", pide permiso de cámara
 *    e inicia el tracking facial.
 *  - Cada frame de MediaPipe actualiza yaw/pitch de la cámara.
 *  - Toques en pantalla los gestiona InteractionController.
 * -----------------------------------------------------------
 */

import { SceneManager } from './scene-manager';
import { FaceTracker } from './face-tracker';
import { HandTracker, type HandState } from './hand-tracker';
import { GestureCursor } from './gesture-cursor';
import { ObjectInfoPopup, classifyObject } from './object-info';
import { MenuPopup } from './menu-popup';
import { InteractionController } from './interaction';
import { UIController } from './ui-controller';
import { registerPWA } from './pwa-register';
import {
  getPerformancePreset,
  savePerformanceTier,
  clearPerformanceOverride,
  detectPerformanceTier,
  type PerformancePreset,
  type PerformanceTier
} from './performance';

// ----- Boot -----
function boot(): void {
  registerPWA();

  // === DETECCIÓN DE PERFORMANCE ===
  // Determina el preset según hardware / override del usuario.
  // Se evalúa UNA vez al iniciar. Para cambiar en runtime, el usuario
  // usa el botón "Modo" → recarga la página con el nuevo tier.
  const perfPreset = getPerformancePreset();
  console.log(`⚡ Performance inicial: ${perfPreset.tier.toUpperCase()}`);

  const ui = new UIController();
  const canvas = document.getElementById('scene-canvas') as HTMLCanvasElement;

  // Crear escena 3D con el preset detectado
  let scene: SceneManager;
  try {
    scene = new SceneManager({ canvas, performance: perfPreset });
    scene.start();
  } catch (err) {
    console.error('Error inicializando escena:', err);
    ui.setLoaderText('Error: WebGL no disponible');
    return;
  }

  // === OVERLAY DE DEBUG (coordenadas siempre visibles) ===
  // Elemento DOM en la esquina superior izquierda que muestra X/Y/Z/Yaw
  const debugInfoEl = document.createElement('pre');
  debugInfoEl.id = 'debug-info';
  debugInfoEl.style.cssText = [
    'position: fixed',
    'top: max(12px, env(safe-area-inset-top))',
    'left: max(12px, env(safe-area-inset-left))',
    'padding: 8px 12px',
    'background: rgba(0,0,0,0.7)',
    'backdrop-filter: blur(6px)',
    '-webkit-backdrop-filter: blur(6px)',
    'border-radius: 10px',
    'border: 1px solid rgba(255,199,44,0.4)',
    'color: #FFC72C',
    'font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace',
    'font-size: 11px',
    'line-height: 1.5',
    'margin: 0',
    'z-index: 850',
    'pointer-events: none',
    'white-space: pre',
    'text-shadow: 0 1px 2px rgba(0,0,0,0.8)'
  ].join(';');
  document.body.appendChild(debugInfoEl);

  // === INDICADOR VISUAL DE ZONA (joystick superior centrado) ===
  // Un círculo exterior gris translúcido (zona activa), un círculo interior
  // gris más opaco (zona muerta) y un punto rojo que se mueve según la
  // posición de la nariz respecto al centro calibrado.
  //
  // Estructura HTML:
  //   #head-indicator (contenedor fijo, top center)
  //     .head-indicator-outer  (círculo gris claro translúcido — zona activa)
  //     .head-indicator-dead   (círculo gris más opaco — zona muerta)
  //     .head-indicator-dot    (punto rojo que se mueve)
  //
  // Mapping:
  //   - offset = DEAD_ZONE (0.03) → borde del círculo muerto (12px del centro)
  //   - offset mayor → el punto se desplaza más, clampeado al borde exterior
  const indicatorEl = document.createElement('div');
  indicatorEl.id = 'head-indicator';
  indicatorEl.style.cssText = [
    'position: fixed',
    'top: max(12px, env(safe-area-inset-top))',
    'left: 50%',
    'transform: translateX(-50%)',
    'width: 80px',
    'height: 80px',
    'z-index: 860',
    'pointer-events: none',
    'display: flex',
    'align-items: center',
    'justify-content: center'
  ].join(';');
  indicatorEl.innerHTML = `
    <div style="
      position: absolute;
      width: 80px; height: 80px;
      border-radius: 50%;
      background: rgba(128, 128, 128, 0.25);
      border: 1px solid rgba(128, 128, 128, 0.4);
      box-sizing: border-box;
    "></div>
    <div style="
      position: absolute;
      width: 24px; height: 24px;
      border-radius: 50%;
      background: rgba(128, 128, 128, 0.55);
      border: 1px solid rgba(80, 80, 80, 0.6);
      box-sizing: border-box;
    "></div>
    <div id="head-indicator-dot" style="
      position: absolute;
      width: 10px; height: 10px;
      border-radius: 50%;
      background: #ff2222;
      box-shadow: 0 0 6px rgba(255, 0, 0, 0.7);
      transform: translate(0, 0);
      transition: transform 0.05s linear;
    "></div>
  `;
  document.body.appendChild(indicatorEl);

  const indicatorDot = document.getElementById('head-indicator-dot');
  // Escala: offset = DEAD_ZONE (0.03) → 12px (borde del círculo muerto)
  // Es decir, SCALE = 12 / 0.03 = 400 px por unidad de offset
  const INDICATOR_SCALE = 400;
  // Radio máximo del punto (para que no se salga del círculo exterior)
  const INDICATOR_MAX_R = 35; // 40 (radio exterior) - 5 (radio del punto)

  // Estado de tracking facial
  let tracker: FaceTracker | null = null;
  let interaction: InteractionController | null = null;

  // === HAND TRACKING (paralelo a face tracking) ===
  let handTracker: HandTracker | null = null;
  const gestureCursor = new GestureCursor();
  const objectInfoPopup = new ObjectInfoPopup();
  const menuPopup = new MenuPopup();
  let currentHand: HandState = {
    detected: false,
    isActive: false,
    cursorX: 0.5,
    cursorY: 0.5,
    confirm: false,
    handedness: ''
  };
  // Cooldown para no re-disparar popup inmediatamente después de cerrarlo
  let popupCooldownUntil = 0;
  // Última clasificación de objeto bajo el cursor (para hover visual)
  let lastHoveringInteractable = false;

  // Posición de la nariz en el último frame
  let currentNose = { x: 0.5, y: 0.5, detected: false };

  // Calibración: el centro se establece con la posición actual de la nariz
  // (cuando el usuario tiene la cabeza centrada mirando al frente)
  const calibration = { x: 0.5, y: 0.5 };

  // =========================================================================
  // MODO CONTROL POR CABEZA — GIRO + CAMINAR (umbral 5°)
  // =========================================================================
  // Dinámica (exactamente como pidió el usuario):
  //   1. UMBRAL 5°: la cabeza debe desviarse más de 5° del centro calibrado
  //      para activar cualquier movimiento. Mucho más sensible que antes (15°).
  //   2. CABEZA IZQ/DER → GIRO CONTINUO:
  //      - Cabeza a la izquierda (>5°) → cámara gira a la izquierda (yaw > 0)
  //      - Cabeza a la derecha (>5°)   → cámara gira a la derecha  (yaw < 0)
  //      - Velocidad proporcional al exceso sobre el umbral.
  //   3. CABEZA ARRIBA/ABAJO → CAMINAR:
  //      - Bajar la cabeza (>5°, nariz hacia abajo) → caminar ADELANTE
  //      - Subir la cabeza  (>5°, nariz hacia arriba) → caminar ATRÁS
  //      - Velocidad proporcional al exceso sobre el umbral.
  //   4. CABEZA CENTRADA → TODO SE DETIENE:
  //      La cámara queda en su orientación actual y el personaje se para.
  //
  // Implementación:
  //   offsetX = nose.x - calibration.x    (-0.5..+0.5)
  //   offsetY = nose.y - calibration.y    (-0.5..+0.5)
  //
  //   1. Aplicar DEAD_ZONE (0.03) para filtrar jitter sub-pixel.
  //   2. Convertir offset a grados aproximados: deg = offset * 90
  //      (factor empírico: offset 0.5 ≈ 45° de giro de cabeza)
  //   3. Si |deg| > ACTIVATION_THRESHOLD_DEG (5°):
  //        excess = (|deg| - 5°) / 45°   → 0..1+
  //        speed = sign(offset) * min(excess, 1) * MAX_*_SPEED
  //
  // Signos (convención MediaPipe NO espejada):
  //   - offsetX > 0 (nariz a la derecha en imagen = cabeza girada a la izq)
  //     → yawSpeed > 0 → yaw aumenta → cámara gira izquierda en Three.js ✓
  //   - offsetY > 0 (nariz abajo en imagen = cabeza inclinada hacia abajo)
  //     → walkSpeed > 0 → avanza hacia donde mira la cámara ✓
  //   - offsetY < 0 (nariz arriba = cabeza hacia arriba) → walkSpeed < 0 → retrocede ✓
  // =========================================================================
  const CONFIG = {
    DEAD_ZONE: 0.03,                    // 3% — filtro de jitter sub-pixel
    ACTIVATION_THRESHOLD_DEG: 5,        // 5° — umbral de activación (mucho más sensible)
    MAX_YAW_SPEED: 2.5,                 // rad/seg — velocidad máx de giro
    MAX_WALK_SPEED: 3.0,                // m/seg — velocidad máx de caminata
    SMOOTHING: 0.15,                    // factor de lerp para suavizar transiciones
    DEG_FACTOR: 90,                     // offset × 90 = grados aproximados
    EXCESS_NORM: 45                     // normalización del exceso (45° = velocidad máx)
  };
  // Exponer para ajuste en runtime desde la consola del navegador:
  //   __controlsConfig.MAX_YAW_SPEED = 3.5     ← girará más rápido
  //   __controlsConfig.ACTIVATION_THRESHOLD_DEG = 3   ← más sensible aún
  //   __controlsConfig.MAX_WALK_SPEED = 4.0    ← caminará más rápido
  (window as any).__controlsConfig = CONFIG;

  // Velocidades suavizadas (lerp hacia el objetivo cada frame)
  let smoothYawSpeed = 0;
  let smoothWalkSpeed = 0;

  // ----- Loop de render + control facial -----
  // Estado de movimiento (forward/strafe en rango -1..+1)
  const moveState = { forward: 0, strafe: 0 };
  const keysPressed = new Set<string>();

  // Helper: actualiza moveState a partir de las teclas presionadas
  function updateMoveFromKeys(): void {
    let f = 0, s = 0;
    if (keysPressed.has('KeyW') || keysPressed.has('ArrowUp')) f += 1;
    if (keysPressed.has('KeyS') || keysPressed.has('ArrowDown')) f -= 1;
    if (keysPressed.has('KeyD') || keysPressed.has('ArrowRight')) s += 1;
    if (keysPressed.has('KeyA') || keysPressed.has('ArrowLeft')) s -= 1;
    moveState.forward = f;
    moveState.strafe = s;
  }

  // Listeners de teclado (desktop)
  window.addEventListener('keydown', (e) => {
    if (['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)) {
      keysPressed.add(e.code);
      updateMoveFromKeys();
      e.preventDefault();
    }
    // === ALTURA DE CÁMARA con + y - ===
    // + (= sin shift) → subir 0.3m
    // - (_ sin shift) → bajar 0.3m
    // Shift+plus → subir 1m (rápido)
    // Shift+minus → bajar 1m (rápido)
    if (e.code === 'Equal' || e.code === 'NumpadAdd') {
      const step = e.shiftKey ? 1.0 : 0.3;
      scene.adjustCameraHeight(step);
      e.preventDefault();
    } else if (e.code === 'Minus' || e.code === 'NumpadSubtract') {
      const step = e.shiftKey ? 1.0 : 0.3;
      scene.adjustCameraHeight(-step);
      e.preventDefault();
    }
    // === LOG DE COORDENADAS con P ===
    // Imprime la posición actual a la consola con formato fácil de copiar
    else if (e.code === 'KeyP') {
      const info = scene.getCameraInfo();
      const line = `[PUNTO CAMARA] x=${info.x.toFixed(3)}, y=${info.y.toFixed(3)}, z=${info.z.toFixed(3)}, yaw=${info.yawDeg.toFixed(1)}°, pitch=${info.pitchDeg.toFixed(1)}°`;
      console.log('%c' + line, 'color: #FFC72C; font-weight: bold; font-size: 14px;');
      // También mostrar como toast para que el usuario lo vea sin abrir consola
      ui.showToast(`📍 X=${info.x.toFixed(2)} Y=${info.y.toFixed(2)} Z=${info.z.toFixed(2)} | Yaw=${info.yawDeg.toFixed(0)}°`, 4000);
      e.preventDefault();
    }
    // === TELETRANSPORTE al centro del modelo con T (debug) ===
    // Útil si la cámara se queda atascada en algún lado
    else if (e.code === 'KeyT') {
      scene.resetPosition();
      // Reset rotación a 0 (frente) — el acumulador vive en SceneManager
      scene.applyRotation(0, 0, 1);
      ui.showToast('🔄 Posición reseteada al centro del modelo', 2000);
      e.preventDefault();
    }
  });
  window.addEventListener('keyup', (e) => {
    keysPressed.delete(e.code);
    updateMoveFromKeys();
  });
  window.addEventListener('blur', () => {
    keysPressed.clear();
    updateMoveFromKeys();
  });

  // ----- Joystick táctil (mobile) -----
  const joystick = document.getElementById('joystick') as HTMLElement | null;
  const knob = document.getElementById('joystick-knob') as HTMLElement | null;
  let joystickActive = false;
  let joystickVec = { x: 0, y: 0 }; // -1..+1 en cada eje
  const JOY_MAX = 50; // px de radio máximo del knob

  if (joystick && knob) {
    const setKnob = (dx: number, dy: number) => {
      knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    };
    const resetKnob = () => {
      setKnob(0, 0);
      joystickVec.x = 0;
      joystickVec.y = 0;
    };
    const handleMove = (clientX: number, clientY: number) => {
      const rect = joystick.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      let dx = clientX - cx;
      let dy = clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > JOY_MAX) {
        dx = (dx / dist) * JOY_MAX;
        dy = (dy / dist) * JOY_MAX;
      }
      setKnob(dx, dy);
      // Normalizar a -1..+1. Y invertido: arriba en pantalla = forward positivo
      joystickVec.x = dx / JOY_MAX;   // derecha = +X = strafe derecho
      joystickVec.y = -dy / JOY_MAX;  // arriba en pantalla = forward positivo
    };

    joystick.addEventListener('touchstart', (e) => {
      e.preventDefault();
      joystickActive = true;
      const t = e.touches[0];
      handleMove(t.clientX, t.clientY);
    }, { passive: false });
    joystick.addEventListener('touchmove', (e) => {
      if (!joystickActive) return;
      e.preventDefault();
      const t = e.touches[0];
      handleMove(t.clientX, t.clientY);
    }, { passive: false });
    const endTouch = () => {
      joystickActive = false;
      resetKnob();
    };
    joystick.addEventListener('touchend', endTouch);
    joystick.addEventListener('touchcancel', endTouch);

    // Mouse (para pruebas en desktop también)
    let mouseDown = false;
    joystick.addEventListener('mousedown', (e) => {
      mouseDown = true;
      joystickActive = true;
      handleMove(e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', (e) => {
      if (!mouseDown) return;
      handleMove(e.clientX, e.clientY);
    });
    window.addEventListener('mouseup', () => {
      if (!mouseDown) return;
      mouseDown = false;
      joystickActive = false;
      resetKnob();
    });
  }

  // ----- Botones flotantes de altura (touch + mouse) -----
  // Replican la funcionalidad de las teclas +/- en mobile
  const heightUpBtn = document.getElementById('height-up');
  const heightDownBtn = document.getElementById('height-down');
  const HEIGHT_STEP_NORMAL = 0.3;
  const HEIGHT_STEP_REPEAT = 0.15; // paso menor cuando se mantiene presionado

  if (heightUpBtn && heightDownBtn) {
    let holdTimer: number | null = null;
    let repeatTimer: number | null = null;

    const startHold = (delta: number) => {
      // Pulso inicial
      scene.adjustCameraHeight(delta);
      // Si se mantiene presionado, repetir cada 100ms
      holdTimer = window.setTimeout(() => {
        repeatTimer = window.setInterval(() => {
          scene.adjustCameraHeight(delta > 0 ? HEIGHT_STEP_REPEAT : -HEIGHT_STEP_REPEAT);
        }, 80);
      }, 400);
    };
    const endHold = () => {
      if (holdTimer !== null) { clearTimeout(holdTimer); holdTimer = null; }
      if (repeatTimer !== null) { clearInterval(repeatTimer); repeatTimer = null; }
    };

    // Touch events
    heightUpBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startHold(HEIGHT_STEP_NORMAL);
    }, { passive: false });
    heightUpBtn.addEventListener('touchend', endHold);
    heightUpBtn.addEventListener('touchcancel', endHold);

    heightDownBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      startHold(-HEIGHT_STEP_NORMAL);
    }, { passive: false });
    heightDownBtn.addEventListener('touchend', endHold);
    heightDownBtn.addEventListener('touchcancel', endHold);

    // Mouse events (desktop)
    heightUpBtn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startHold(HEIGHT_STEP_NORMAL);
    });
    heightDownBtn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startHold(-HEIGHT_STEP_NORMAL);
    });
    window.addEventListener('mouseup', endHold);
  }

  // Loop con delta time para movimiento suave independiente del FPS
  let lastTime = performance.now();
  function applyFaceControl(): void {
    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.1); // cap a 100ms
    lastTime = now;

    // === FREEZE cuando un popup está abierto ===
    // Si el menú o el popup de info está abierto, congelamos el movimiento
    // de la cámara (face tracking + teclado + joystick) para que el usuario
    // pueda interactuar con el popup sin que la vista se mueva.
    const anyPopupOpen = menuPopup.isOpen() || objectInfoPopup.isOpen();

    if (!anyPopupOpen && currentNose.detected) {
      // === OFFSET DE CABEZA DESDE EL CENTRO CALIBRADO ===
      // offsetX: positivo = nariz a la derecha en imagen = cabeza girada a la izq
      // offsetY: positivo = nariz abajo en imagen  = cabeza inclinada hacia abajo
      let offsetX = currentNose.x - calibration.x;
      let offsetY = currentNose.y - calibration.y;

      // === ZONA MUERTA (jitter sub-pixel) ===
      if (Math.abs(offsetX) < CONFIG.DEAD_ZONE) offsetX = 0;
      if (Math.abs(offsetY) < CONFIG.DEAD_ZONE) offsetY = 0;

      // === CONVERTIR OFFSET A GRADOS APROXIMADOS ===
      // Factor empírico: offset 0.5 ≈ 45° de desviación de cabeza
      const yawDeg = offsetX * CONFIG.DEG_FACTOR;
      const pitchDeg = offsetY * CONFIG.DEG_FACTOR;

      // === YAW (giro izquierda/derecha) ===
      let targetYawSpeed = 0;
      if (Math.abs(yawDeg) > CONFIG.ACTIVATION_THRESHOLD_DEG) {
        // Exceso sobre el umbral, normalizado a 0..1 (45° = 1)
        const excess = (Math.abs(yawDeg) - CONFIG.ACTIVATION_THRESHOLD_DEG) / CONFIG.EXCESS_NORM;
        // sign(offsetX): nariz a la derecha en imagen (cabeza a la izq) → yaw positivo (gira izq)
        targetYawSpeed = Math.sign(offsetX) * Math.min(excess, 1) * CONFIG.MAX_YAW_SPEED;
      }

      // === WALK (caminar adelante/atrás) ===
      // offsetY > 0 (nariz abajo = cabeza abajo) → caminar ADELANTE (walkSpeed > 0)
      // offsetY < 0 (nariz arriba = cabeza arriba) → caminar ATRÁS (walkSpeed < 0)
      let targetWalkSpeed = 0;
      if (Math.abs(pitchDeg) > CONFIG.ACTIVATION_THRESHOLD_DEG) {
        const excess = (Math.abs(pitchDeg) - CONFIG.ACTIVATION_THRESHOLD_DEG) / CONFIG.EXCESS_NORM;
        targetWalkSpeed = Math.sign(offsetY) * Math.min(excess, 1) * CONFIG.MAX_WALK_SPEED;
      }

      // === SUAVIZADO (lerp hacia el objetivo) ===
      // Esto evita arranques/paradas bruscas. Factor 0.15 → ~10 frames para llegar al 80%
      smoothYawSpeed = smoothYawSpeed + (targetYawSpeed - smoothYawSpeed) * CONFIG.SMOOTHING;
      smoothWalkSpeed = smoothWalkSpeed + (targetWalkSpeed - smoothWalkSpeed) * CONFIG.SMOOTHING;
      // Forzar cero si estamos muy cerca (evita drift perpetuo por redondeo)
      if (Math.abs(smoothYawSpeed) < 0.005) smoothYawSpeed = 0;
      if (Math.abs(smoothWalkSpeed) < 0.005) smoothWalkSpeed = 0;

      // === ENVIAR AL SCENEMANAGER ===
      // SceneManager acumula: yaw += yawSpeed * dt, position += forward * walkSpeed * dt
      // Si ambos son 0 (cabeza en zona muerta), la cámara se queda quieta.
      // Si yawSpeed ≠ 0, la cámara gira continuamente (360° libre).
      // Si walkSpeed ≠ 0, el personaje avanza/retrocede en la dirección mirada.
      scene.setControls(smoothYawSpeed, smoothWalkSpeed, dt);
    }

    // Movimiento: combinar teclado + joystick (también congelado si popup abierto)
    if (!anyPopupOpen) {
      const fwd = moveState.forward + joystickVec.y;
      const str = moveState.strafe + joystickVec.x;
      if (Math.abs(fwd) > 0.01 || Math.abs(str) > 0.01) {
        // Clamp a -1..+1 por si se suman teclado + joystick
        const f = Math.max(-1, Math.min(1, fwd));
        const s = Math.max(-1, Math.min(1, str));
        scene.moveRelative(f, s, dt);
      }
    }

    // === OVERLAY DE COORDENADAS (siempre visible) ===
    // Muestra X/Y/Z/Yaw en la esquina superior izquierda para que el usuario
    // pueda movernos la posición correcta del punto de inicio.
    if (debugInfoEl) {
      const info = scene.getCameraInfo();
      debugInfoEl.textContent =
        `X: ${info.x.toFixed(2)}  Y: ${info.y.toFixed(2)}  Z: ${info.z.toFixed(2)}\n` +
        `Yaw: ${info.yawDeg.toFixed(0)}°  Pitch: ${info.pitchDeg.toFixed(0)}°`;
    }

    // === INDICADOR VISUAL DE ZONA ===
    // Mueve el punto rojo según el offset de la nariz respecto al centro.
    // Si la cabeza está en zona muerta, el punto queda en el centro (dentro
    // del círculo más pequeño). Si la cabeza se desvía, el punto se desplaza
    // hacia la dirección correspondiente y sale del círculo muerto.
    if (indicatorDot) {
      let ix = currentNose.detected ? (currentNose.x - calibration.x) : 0;
      let iy = currentNose.detected ? (currentNose.y - calibration.y) : 0;

      // Convertir offset (0..0.5) a píxeles
      let px = ix * INDICATOR_SCALE;
      let py = iy * INDICATOR_SCALE;

      // Clamp al radio máximo (mantiene el punto dentro del círculo exterior)
      const mag = Math.hypot(px, py);
      if (mag > INDICATOR_MAX_R) {
        px = (px / mag) * INDICATOR_MAX_R;
        py = (py / mag) * INDICATOR_MAX_R;
      }

      // El eje Y de la imagen crece hacia abajo, igual que el eje Y de la
      // pantalla, así que no hay que invertirlo.
      indicatorDot.style.transform = `translate(${px}px, ${py}px)`;
    }

    // === HAND TRACKING — cursor y selección por gesto ===
    // Solo procesa si el hand tracker está activo (después de "Comenzar").
    if (handTracker) {
      // 1. Actualizar visibilidad del cursor (solo visible cuando el gesto está activo)
      gestureCursor.setVisible(currentHand.isActive);

      if (currentHand.isActive) {
        // 2. Convertir posición normalizada (0..1) a píxeles de pantalla
        const screenX = currentHand.cursorX * window.innerWidth;
        const screenY = currentHand.cursorY * window.innerHeight;
        gestureCursor.setPosition(screenX, screenY);

        // 3. Raycast para detectar objeto bajo el cursor (hover)
        const ndcX = currentHand.cursorX * 2 - 1;
        const ndcY = -(currentHand.cursorY * 2 - 1);
        const hitObj = scene.getObjectAtScreenPoint(ndcX, ndcY);
        const classification = hitObj ? classifyObject(hitObj) : null;
        const isHovering = classification !== null;
        if (isHovering !== lastHoveringInteractable) {
          gestureCursor.setHovering(isHovering);
          lastHoveringInteractable = isHovering;
        }

        // 4. Gesto OK (índice+medio+pulgar) → confirmar selección
        if (currentHand.confirm) {
          gestureCursor.pulse();
          const now = performance.now();
          if (now > popupCooldownUntil) {
            // Si ya hay un popup abierto → cerrarlo
            if (menuPopup.isOpen()) {
              menuPopup.hide();
              popupCooldownUntil = now + 400;
            } else if (objectInfoPopup.isOpen()) {
              objectInfoPopup.hide();
              popupCooldownUntil = now + 400;
            } else {
              // Abrir MENÚ siempre que se haga el gesto OK, sin requerir
              // que el cursor esté sobre un objeto 3D. Antes exigíamos
              // hitObj y el raycast casi siempre fallaba (punto en el aire)
              // por lo que el menú nunca se abría.
              menuPopup.show();
              ui.showToast('🍔 Menú abierto — tocá una categoría para expandir', 2500);
              popupCooldownUntil = now + 800;
            }
          }
        }
      } else {
        // Gesto inactivo — reset hover
        if (lastHoveringInteractable) {
          gestureCursor.setHovering(false);
          lastHoveringInteractable = false;
        }
      }
    }

    requestAnimationFrame(applyFaceControl);
  }
  applyFaceControl();

  // ----- Ocultar loader y mostrar pantalla de inicio -----
  ui.hideLoader();
  ui.showStartScreen();
  ui.onCalibrate(() => {
    // Recalibrar: establecer el centro como la posición actual de la nariz.
    // La dirección actual de la cámara se conserva (el acumulador yaw/pitch
    // vive dentro de SceneManager y no se toca aquí).
    if (currentNose.detected) {
      calibration.x = currentNose.x;
      calibration.y = currentNose.y;
      ui.showToast('Centro recalibrado');
    } else {
      ui.showToast('No se detecta tu rostro');
    }
  });

  ui.onEndRestart(() => {
    // Volver a entrar
    ui.hideEndScreen();
    interaction?.resetFromEnd?.();
    // Reset rotación a centro (mirando al frente) y posición al punto de entrada
    // El acumulador de yaw/pitch vive dentro de SceneManager, así que con
    // applyRotation(0, 0, 1) quedan ambos en 0.
    scene.applyRotation(0, 0, 1);
    scene.resetPosition();
  });

  // ----- Botón "Comenzar experiencia" -----
  ui.onStart(async () => {
    ui.hideStartScreen();
    ui.setCameraActive(false);
    ui.setCameraLabel('INI...');

    // Mostrar controles de movimiento según el dispositivo
    const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
    const joyEl = document.getElementById('joystick');
    const hintEl = document.getElementById('key-hint');
    if (isTouchDevice) {
      joyEl?.classList.add('visible');
      // En algunos laptops táctiles mostramos ambos
      hintEl?.classList.add('visible');
    } else {
      hintEl?.classList.add('visible');
    }

    // Configurar video y overlay
    const video = document.getElementById('cam-video') as HTMLVideoElement;
    const overlay = document.getElementById('cam-overlay') as HTMLCanvasElement;
    // El overlay se dimensiona según el preset (240/320/480 px de ancho)
    overlay.width = perfPreset.videoWidth;
    overlay.height = perfPreset.videoHeight;

    tracker = new FaceTracker({
      video,
      overlayCanvas: overlay,
      showOverlay: false, // cambiar a true para debug visual
      performance: perfPreset,
      onFrame: (nose) => {
        currentNose = nose;
      },
      onReady: () => {
        ui.setCameraActive(true);
        ui.showInstructions();
        ui.showToast(`Cámara activa · Modo ${perfPreset.tier.toUpperCase()}`, 2200);
      },
      onError: (err) => {
        console.error('FaceTracker error:', err);
        ui.setCameraActive(false);
        ui.setCameraLabel('ERR');
        ui.showToast('Error de cámara: ' + err.message, 4000);
      }
    });

    try {
      await tracker.init();
      tracker.start();
      interaction = new InteractionController(scene, ui);

      // === HAND TRACKER (inicia después de face tracker, mismo video) ===
      try {
        handTracker = new HandTracker({
          video,
          performance: perfPreset,
          onFrame: (state: HandState) => {
            currentHand = state;
          },
          onReady: () => {
            console.log('✋ Hand tracker listo (mano derecha + 2 dedos → cursor)');
          },
          onError: (err) => {
            console.warn('⚠️ Hand tracker error:', err.message);
            // No mostramos toast para no asustar al usuario — face tracking sigue funcionando
          }
        });
        await handTracker.init();
        handTracker.start();
      } catch (handErr) {
        console.warn('⚠️ No se pudo iniciar hand tracking:', handErr);
        // Continúa sin hand tracking — la cara sigue funcionando
      }
    } catch (err) {
      console.error('Error iniciando tracker:', err);
      ui.showToast('No se pudo iniciar la cámara', 3000);
    }
  });

  // === FPS METER + BOTÓN MODO PERFORMANCE ===
  // Cuenta frames de rendering usando requestAnimationFrame. Muestra el FPS
  // promedio cada 500ms en el badge superior derecho. Si baja del umbral
  // mínimo del preset, cambia de color (amarillo/rojo) para alertar al usuario.
  const fpsBadge = document.getElementById('fps-badge');
  const perfBtn = document.getElementById('perf-btn');
  const perfPopup = document.getElementById('perf-popup');

  let frameCount = 0;
  let fpsLastUpdate = performance.now();
  let currentFps = 0;

  function fpsLoop(): void {
    frameCount++;
    const now = performance.now();
    const elapsed = now - fpsLastUpdate;
    if (elapsed >= 500) {
      currentFps = Math.round((frameCount * 1000) / elapsed);
      frameCount = 0;
      fpsLastUpdate = now;
      if (fpsBadge) {
        fpsBadge.textContent = `${currentFps} FPS`;
        // Color según umbral del preset
        const minFps = perfPreset.minAcceptableFps;
        if (currentFps < minFps - 10) {
          fpsBadge.className = 'bad';
        } else if (currentFps < minFps) {
          fpsBadge.className = 'warn';
        } else {
          fpsBadge.className = '';
        }
      }
    }
    requestAnimationFrame(fpsLoop);
  }
  fpsLoop();

  // Inicializar texto del botón con el tier actual
  function updatePerfBtn(): void {
    if (!perfBtn) return;
    // Detectar si hay override (URL o localStorage)
    const urlTier = new URLSearchParams(window.location.search).get('perf');
    const storedTier = (() => {
      try { return localStorage.getItem('mcdonalds-perf'); } catch { return null; }
    })();
    const override = urlTier || storedTier;

    if (override) {
      perfBtn.textContent = `⚙️ MODO: ${override.toUpperCase()}`;
      perfBtn.className = `perf-btn ${override}`;
    } else {
      perfBtn.textContent = `⚙️ MODO: AUTO (${perfPreset.tier.toUpperCase()})`;
      perfBtn.className = 'perf-btn';
    }
  }
  updatePerfBtn();

  // Abrir popup al hacer click en el botón
  perfBtn?.addEventListener('click', () => {
    perfPopup?.classList.add('visible');
    // Marcar la opción activa
    const urlTier = new URLSearchParams(window.location.search).get('perf');
    const storedTier = (() => {
      try { return localStorage.getItem('mcdonalds-perf'); } catch { return null; }
    })();
    const activeTier = urlTier || storedTier || 'auto';
    document.querySelectorAll('.perf-option').forEach(el => {
      const tier = el.getAttribute('data-tier');
      el.classList.toggle('active', tier === activeTier);
    });
  });

  // Cerrar popup al hacer click fuera
  perfPopup?.addEventListener('click', (e) => {
    if (e.target === perfPopup) {
      perfPopup.classList.remove('visible');
    }
  });

  // Selección de opción
  document.querySelectorAll('.perf-option').forEach(el => {
    el.addEventListener('click', () => {
      const tier = el.getAttribute('data-tier') as PerformanceTier | 'auto';
      if (tier === 'auto') {
        clearPerformanceOverride();
        // Limpiar también URL param si existe
        if (new URLSearchParams(window.location.search).has('perf')) {
          const url = new URL(window.location.href);
          url.searchParams.delete('perf');
          window.location.href = url.toString();
          return;
        }
      } else {
        savePerformanceTier(tier);
      }
      // Recargar la página para aplicar el nuevo preset
      // (no se puede cambiar en runtime porque MediaPipe ya está creado)
      window.location.reload();
    });
  });

  // Mostrar advertencia si el FPS es consistentemente bajo
  let lowFpsCounter = 0;
  let lowFpsWarned = false;
  setInterval(() => {
    if (currentFps > 0 && currentFps < perfPreset.minAcceptableFps) {
      lowFpsCounter++;
      if (lowFpsCounter >= 3 && !lowFpsWarned) {
        lowFpsWarned = true;
        ui.showToast(
          `⚠️ FPS bajo (${currentFps}). Tocá "MODO" arriba a la derecha y probá "Rendimiento"`,
          6000
        );
      }
    } else {
      lowFpsCounter = 0;
    }
  }, 2000);
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
