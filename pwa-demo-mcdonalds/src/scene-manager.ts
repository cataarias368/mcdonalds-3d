// scene-manager.ts
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { type PerformancePreset } from './performance';

// ----- Constantes exportadas (compatibilidad con main.ts / interaction.ts) -----
export const EYE_HEIGHT = 1.65; // metros
// YAW sin límites: permitimos rotación 360° completa (modo VR-style).
// Se exportan valores extremos sólo para compatibilidad con código antiguo.
export const YAW_MIN = -Infinity;
export const YAW_MAX = Infinity;
export const PITCH_MIN = THREE.MathUtils.degToRad(-45);
export const PITCH_MAX = THREE.MathUtils.degToRad(45);
export const DOOR_OBJECT_NAME = 'door_exit';

/** Altura objetivo del techo del McDonald's al escalar el modelo. */
const TARGET_MODEL_HEIGHT = 3.5; // metros (techo realista de local)
/** Margen desde las paredes para evitar que la cámara las atraviese. */
const WALL_MARGIN = 0.4; // metros
/** Velocidad de caminata (m/s). */
const WALK_SPEED = 2.2;

/**
 * PUNTO DE INICIO FIJO — debe respetarse en TODAS las versiones.
 * Coordenadas absolutas (en metros, espacio del modelo escalado).
 * yaw en GRADOS (se convierte a radianes al aplicar).
 * -4796° ≡ -116° (mod 360) — la rotación es modular, visualmente idéntico.
 */
export const START_POSITION = {
  x: -2.63,
  y: 0.75,
  z: -0.13,
  yawDeg: -4796
};

export interface SceneInit {
  canvas: HTMLCanvasElement;
  performance?: PerformancePreset;
}

export class SceneManager {
  public readonly scene: THREE.Scene;
  public readonly camera: THREE.PerspectiveCamera;
  public readonly renderer: THREE.WebGLRenderer;
  private doorObject: THREE.Object3D | null = null;
  private modelLoaded: boolean = false;
  private perf: PerformancePreset;

  // Límites de posición (bounding box interior del modelo)
  private modelBounds: { minX: number; maxX: number; minZ: number; maxZ: number } | null = null;

  // Constantes de configuración
  private readonly CAMERA_HEIGHT = EYE_HEIGHT; // metros
  // YAW sin límites: rotación 360° libre (modo VR-style)
  private readonly YAW_LIMITS = { min: -Infinity, max: Infinity };
  private readonly PITCH_LIMITS = { min: -45, max: 45 }; // grados

  // Estado de rotación (para compatibilidad con main.ts)
  public yaw = 0;
  public pitch = 0;
  private currentYaw = 0;
  private currentPitch = 0;

  // Loop
  private animationId: number | null = null;
  private resizeHandler: () => void;

  // Canvas
  private canvas: HTMLCanvasElement;

  constructor(init: SceneInit) {
    this.canvas = init.canvas;
    // Si no se pasa preset, asumir 'high' (compat con código viejo)
    this.perf = init.performance ?? {
      tier: 'high',
      antialias: true,
      pixelRatioMax: 2,
      shadowsEnabled: true,
      shadowMapSize: 2048,
      powerPreference: 'high-performance',
      numPointLights: 4,
      numDirectionalLights: 2,
      hemisphereLight: true,
      videoWidth: 480,
      videoHeight: 360,
      faceThrottleMs: 33,
      faceUseGpu: true,
      handThrottleMs: 50,
      handNumHands: 2,
      handUseGpu: true,
      minAcceptableFps: 30
    };

    console.log(`🎨 SceneManager inicializando con preset: ${this.perf.tier}`);

    // 1. Escena
    this.scene = new THREE.Scene();
    // Fondo claro (cielo) por si se ve el exterior a través de ventanas
    this.scene.background = new THREE.Color(0x9ec9e8);
    // Niebla ligera para dar profundidad sin ocultar el interior
    this.scene.fog = new THREE.Fog(0x9ec9e8, 30, 100);

    // 2. Cámara (perspectiva, 75° FOV)
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.05, 300);
    // Posición inicial: entrada del local (cerca de +Z), mirando hacia -Z (fondo)
    this.camera.position.set(0, this.CAMERA_HEIGHT, 0);
    this.camera.rotation.order = 'YXZ'; // IMPORTANTE: para control facial

    // 3. Renderer — configurado según el preset
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: this.perf.antialias,
      powerPreference: this.perf.powerPreference,
      // Forzar WebGL2 si está disponible (mejor rendimiento en Intel HD)
      stencil: false,
      depth: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.perf.pixelRatioMax));
    this.renderer.shadowMap.enabled = this.perf.shadowsEnabled;
    // PCFSoftShadowMap en high, BasicShadowMap en medium (más barato), none en low
    if (this.perf.shadowsEnabled) {
      this.renderer.shadowMap.type = this.perf.tier === 'high'
        ? THREE.PCFSoftShadowMap
        : THREE.BasicShadowMap;
    }
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.5;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // 4. Iluminación (necesaria para que el modelo se vea bien)
    this.setupLighting();

    // 5. Cargar el modelo real
    this.loadModel();

    // 6. Redimensionar ventana
    this.resizeHandler = this.resize.bind(this);
    window.addEventListener('resize', this.resizeHandler);
  }

  private setupLighting() {
    // Luz ambiental alta (para que el modelo no se vea oscuro sin texturas reales)
    // En modo low la subimos para compensar la falta de point lights
    const ambientIntensity = this.perf.tier === 'low' ? 1.6 : 1.2;
    const ambientLight = new THREE.AmbientLight(0xffffff, ambientIntensity);
    this.scene.add(ambientLight);

    // Luz principal direccional (simula el sol/techo)
    const mainLight = new THREE.DirectionalLight(0xffeedd, 1.8);
    mainLight.position.set(2, 5, 3);
    if (this.perf.shadowsEnabled) {
      mainLight.castShadow = true;
      mainLight.shadow.mapSize.set(this.perf.shadowMapSize, this.perf.shadowMapSize);
      mainLight.shadow.camera.near = 0.5;
      mainLight.shadow.camera.far = 30;
      mainLight.shadow.camera.left = -10;
      mainLight.shadow.camera.right = 10;
      mainLight.shadow.camera.top = 10;
      mainLight.shadow.camera.bottom = -10;
      mainLight.shadow.bias = -0.0005;
    }
    this.scene.add(mainLight);
    this.scene.add(mainLight.target);

    // Luz de relleno solo en medium/high
    if (this.perf.numDirectionalLights >= 2) {
      const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
      fillLight.position.set(-3, 2, -2);
      this.scene.add(fillLight);
    }

    // Luces puntuales en las 4 esquinas superiores (solo en medium/high)
    // En low se omiten porque son costosas en Intel HD
    if (this.perf.numPointLights > 0) {
      const cornerPositions: Array<[number, number]> = [
        [-3, -3],
        [3, -3],
        [-3, 3],
        [3, 3]
      ];
      // Limitar al número configurado (medium=2, high=4)
      const limit = Math.min(cornerPositions.length, this.perf.numPointLights);
      for (let i = 0; i < limit; i++) {
        const [x, z] = cornerPositions[i];
        const pl = new THREE.PointLight(0xffe0b0, 1.0, 12, 1.5);
        pl.position.set(x, 3.0, z);
        this.scene.add(pl);
      }
    }

    // Luz de techo central solo en high
    if (this.perf.tier === 'high') {
      const ceilingLight = new THREE.PointLight(0xffccaa, 1.2, 12);
      ceilingLight.position.set(0, 3.5, 0);
      this.scene.add(ceilingLight);
    }

    // Hemisphere para realismo (barato, lo mantenemos en todos los modos)
    if (this.perf.hemisphereLight) {
      const hemi = new THREE.HemisphereLight(0xffe8b0, 0x402010, 0.7);
      hemi.position.set(0, 5, 0);
      this.scene.add(hemi);
    }
  }

  private loadModel() {
    const loader = new GLTFLoader();
    // Resuelve la ruta del modelo de forma relativa al base de Vite
    // para que funcione tanto en dev como en GitHub Pages (/mcdonalds-3d/).
    const modelPath = `${import.meta.env.BASE_URL}model/mcdonald/scene.gltf`;

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;

        // 1. Auto-escalar el modelo para que la ALTURA sea TARGET_MODEL_HEIGHT (3.5m).
        // Antes se normalizaba a la dimensión máxima = 10, lo que dejaba la altura
        // en solo ~2m y la cámara veía el techo/terraza. Ahora preservamos la
        // escala real (el modelo original está en cm: 874×341×1691 ≈ 8.7×3.4×16.9 m).
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        console.log(`📦 Modelo - size original: [${size.x.toFixed(2)}, ${size.y.toFixed(2)}, ${size.z.toFixed(2)}]`);
        console.log(`📦 Modelo - center original: [${center.x.toFixed(2)}, ${center.y.toFixed(2)}, ${center.z.toFixed(2)}]`);

        // Escalar para que la altura (Y) sea TARGET_MODEL_HEIGHT
        const scale = TARGET_MODEL_HEIGHT / size.y;
        model.scale.setScalar(scale);

        // Recalcular box escalada (después de aplicar scale)
        const scaledBox = new THREE.Box3().setFromObject(model);
        const scaledSize = new THREE.Vector3();
        const scaledCenter = new THREE.Vector3();
        scaledBox.getSize(scaledSize);
        scaledBox.getCenter(scaledCenter);

        // 2. Centrar el modelo en X/Z y poner el suelo en Y=0
        model.position.x -= scaledCenter.x;
        model.position.z -= scaledCenter.z;
        model.position.y -= scaledBox.min.y; // suelo en Y=0

        // 3. Recalcular box FINAL después de todos los ajustes de posición
        model.updateMatrixWorld(true);
        const finalBox = new THREE.Box3().setFromObject(model);
        console.log(`📐 Modelo escalado a ${scale.toFixed(4)}x (altura objetivo: ${TARGET_MODEL_HEIGHT}m)`);
        console.log(`📐 Nuevo tamaño: [${scaledSize.x.toFixed(2)}, ${scaledSize.y.toFixed(2)}, ${scaledSize.z.toFixed(2)}] m`);
        console.log(`📐 Bounding box final: min=[${finalBox.min.x.toFixed(2)}, ${finalBox.min.y.toFixed(2)}, ${finalBox.min.z.toFixed(2)}] max=[${finalBox.max.x.toFixed(2)}, ${finalBox.max.y.toFixed(2)}, ${finalBox.max.z.toFixed(2)}]`);

        // 4. Guardar límites de movimiento (interior del local, con margen)
        this.modelBounds = {
          minX: finalBox.min.x + WALL_MARGIN,
          maxX: finalBox.max.x - WALL_MARGIN,
          minZ: finalBox.min.z + WALL_MARGIN,
          maxZ: finalBox.max.z - WALL_MARGIN
        };
        console.log(`🚶 Límites de caminata: X[${this.modelBounds.minX.toFixed(2)}, ${this.modelBounds.maxX.toFixed(2)}] Z[${this.modelBounds.minZ.toFixed(2)}, ${this.modelBounds.maxZ.toFixed(2)}]`);

        // 5. Posicionar la cámara en el PUNTO DE INICIO FIJO (definido arriba).
        // Esto garantiza que la experiencia arranque siempre en el mismo lugar
        // y orientación, sin importar la versión del bundle.
        this.applyStartPosition();
        console.log(`📷 Cámara inicial (START_POSITION): x=${this.camera.position.x.toFixed(2)}, y=${this.camera.position.y.toFixed(2)}, z=${this.camera.position.z.toFixed(2)}, yaw=${START_POSITION.yawDeg}°`);

        // Habilitar sombras en todos los meshes
        model.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
            // Asegurar texturas en espacio sRGB
            const mat = obj.material;
            if (Array.isArray(mat)) {
              mat.forEach((m) => this.fixMaterialSRGB(m));
            } else if (mat) {
              this.fixMaterialSRGB(mat);
            }
          }
        });

        this.scene.add(model);
        this.modelLoaded = true;

        // 3. Buscar la puerta por su nombre (debe coincidir con el modelo)
        this.doorObject = model.getObjectByName('door_exit') ?? null;

        if (!this.doorObject) {
          console.warn('⚠️ No se encontró "door_exit" en el modelo. Buscando por "door"...');
          this.doorObject = model.getObjectByName('door') ?? null;
        }

        if (this.doorObject) {
          this.doorObject.userData.isDoor = true;
          this.doorObject.name = DOOR_OBJECT_NAME;
          console.log('✅ Puerta detectada y etiquetada');
        } else {
          console.warn('⚠️ No se encontró ningún objeto de puerta. Creando fallback...');
          // Crea un objeto invisible en la posición de la puerta como fallback
          // Usamos finalBox (después de ajustar position) para tener las coordenadas correctas
          this.createDoorFallback(finalBox);
        }

        console.log('✅ Modelo cargado correctamente');
      },
      (xhr) => {
        if (xhr.total) {
          const progress = (xhr.loaded / xhr.total) * 100;
          console.log(`Cargando modelo: ${Math.round(progress)}%`);
        }
      },
      (error) => {
        console.error('❌ Error al cargar el modelo:', error);
        // Si falla, carga la escena procedural como fallback
        this.buildProceduralScene();
      }
    );
  }

  /**
   * Asegura que las texturas color se interpreten en sRGB y corrige alphas.
   *
   * ⚠️ FIX CRÍTICO: el modelo de Sketchfab tiene el Material "Merged_materials"
   * (usado por las 4 meshes principales: paredes + techo del McDonald's) con
   * baseColorFactor=[1,1,1,0] (alpha=0) y alphaMode='BLEND'. Eso hace que las
   * paredes exteriores sean INVISIBLES, y por eso se ve "la terraza" en lugar
   * del interior. Forzamos opacidad total en TODOS los materiales del modelo
   * (un local de McDonald's no tiene paredes de vidrio transparente).
   */
  private fixMaterialSRGB(mat: THREE.Material): void {
    const m = mat as any;
    if (m.map) {
      m.map.colorSpace = THREE.SRGBColorSpace;
    }
    if (m.emissiveMap) {
      m.emissiveMap.colorSpace = THREE.SRGBColorSpace;
    }
    // Forzar opacidad total
    m.opacity = 1;
    m.transparent = false;
    if (m.color && typeof m.color.a === 'number') {
      m.color.a = 1;
    }
    // Forzar depthWrite a true (a veces se desactiva con BLEND)
    m.depthWrite = true;
  }

  // Fallback: escena procedural si el modelo no se carga (útil para desarrollo)
  private buildProceduralScene() {
    console.warn('🔄 Usando escena procedural (fallback)');
    // Suelo simple
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshStandardMaterial({ color: 0xd8d4c8, roughness: 0.85 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Caja simple alrededor para contexto
    const room = new THREE.Mesh(
      new THREE.BoxGeometry(14, 4, 12),
      new THREE.MeshStandardMaterial({
        color: 0xf2efe8,
        roughness: 0.9,
        side: THREE.BackSide
      })
    );
    room.position.y = 2;
    room.receiveShadow = true;
    this.scene.add(room);

    // Crear puerta fallback
    this.createDoorFallback();
  }

  // Fallback: crea un collider invisible en la posición de la puerta
  private createDoorFallback(scaledBox?: THREE.Box3) {
    // La cámara por defecto en Three.js mira hacia -Z.
    // Por eso ponemos la puerta en -Z (al frente de la cámara).
    // Si tenemos el bounding box escalado, usar su min.z (la pared más cercana a -Z).
    const z = scaledBox ? scaledBox.min.z + 0.2 : -4.8;
    const x = 0;
    const y = 1.2;

    const doorCollider = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 2.4, 0.4),
      new THREE.MeshBasicMaterial({
        color: 0xffc72c,
        transparent: true,
        opacity: 0.0,
        depthWrite: false
      })
    );
    doorCollider.position.set(x, y, z);
    doorCollider.userData.isDoor = true;
    doorCollider.name = DOOR_OBJECT_NAME;
    this.doorObject = doorCollider;
    this.scene.add(doorCollider);
    console.log(`✅ Collider de puerta creado en posición: (${x}, ${y}, ${z})`);

    // Añadir también una marca visual visible (cartel EXIT verde)
    const exitSign = new THREE.Mesh(
      new THREE.PlaneGeometry(0.6, 0.3),
      new THREE.MeshStandardMaterial({
        color: 0x00aa44,
        emissive: 0x00ff66,
        emissiveIntensity: 0.8
      })
    );
    // El cartel mira hacia +Z (hacia la cámara)
    exitSign.position.set(0, y + 1.4, z + 0.21);
    this.scene.add(exitSign);

    // Y un marco rojo visible alrededor de la "puerta"
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xda291c,
      roughness: 0.5
    });
    const topFrame = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.1, 0.1),
      frameMat
    );
    topFrame.position.set(0, y + 1.25, z);
    this.scene.add(topFrame);

    const leftFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 2.5, 0.1),
      frameMat
    );
    leftFrame.position.set(-0.85, y, z);
    this.scene.add(leftFrame);

    const rightFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 2.5, 0.1),
      frameMat
    );
    rightFrame.position.set(0.85, y, z);
    this.scene.add(rightFrame);
  }

  // --- Control de cámara por facial ---

  /**
   * setRotation: método original del usuario.
   * Aplica yaw/pitch. Yaw SIN límites (360° libre). Pitch con límites.
   */
  public setRotation(yaw: number, pitch: number) {
    // Pitch con límites, yaw libre (360°)
    const clampedPitch = THREE.MathUtils.clamp(
      pitch,
      THREE.MathUtils.degToRad(this.PITCH_LIMITS.min),
      THREE.MathUtils.degToRad(this.PITCH_LIMITS.max)
    );

    this.currentYaw = yaw;
    this.currentPitch = clampedPitch;
    this.yaw = yaw;
    this.pitch = clampedPitch;

    this.camera.rotation.y = this.currentYaw;
    this.camera.rotation.x = this.currentPitch;
  }

  /**
   * applyRotation: wrapper compatible con main.ts.
   * Yaw SIN clamp (rotación 360° libre, modo VR-style).
   * Pitch con límites para no voltear la cabeza totalmente.
   * Aplica suavizado (lerp) para movimiento natural.
   */
  public applyRotation(targetYaw: number, targetPitch: number, lerpFactor = 0.15): void {
    // Yaw: sin clamp (360° libre)
    // Para evitar saltos al pasar de +π a -π, normalizamos la diferencia
    const yawDelta = targetYaw - this.yaw;
    // Normalizar delta al rango [-π, +π] para ir por el camino más corto
    const normalizedDelta = Math.atan2(Math.sin(yawDelta), Math.cos(yawDelta));

    this.yaw = this.yaw + normalizedDelta * lerpFactor;

    // Pitch: con límites
    const clampedPitch = THREE.MathUtils.clamp(targetPitch, PITCH_MIN, PITCH_MAX);
    this.pitch = THREE.MathUtils.lerp(this.pitch, clampedPitch, lerpFactor);

    this.currentYaw = this.yaw;
    this.currentPitch = this.pitch;

    this.camera.rotation.y = this.currentYaw;
    this.camera.rotation.x = this.currentPitch;
  }

  /**
   * setYawAbsolute: establece el yaw directamente sin suavizado ni clamp.
   * Útil para reset/teletransporte.
   */
  public setYawAbsolute(yaw: number): void {
    this.yaw = yaw;
    this.currentYaw = yaw;
    this.camera.rotation.y = yaw;
  }

  /**
   * setControls: integra velocidades de giro (yaw) y caminata (forward).
   * -------------------------------------------------------
   * Modelo VELOCITY-BASED con UMBRAL de 5°:
   *   - yawSpeed ≠ 0 → cámara gira continuamente (360° libre)
   *   - forwardSpeed ≠ 0 → cámara avanza/retrocede en dirección horizontal
   *   - Ambos = 0 (cabeza centrada) → todo se detiene
   *
   * El eje Y de la cabeza (arriba/abajo) ya NO controla pitch — ahora controla
   * caminar hacia adelante (cabeza abajo) o hacia atrás (cabeza arriba).
   * -------------------------------------------------------
   * @param yawSpeed       velocidad angular de yaw en rad/seg
   *                       (positivo = girar izquierda, negativo = girar derecha)
   * @param forwardSpeed   velocidad de caminata en m/seg
   *                       (positivo = avanzar hacia donde mira la cámara,
   *                        negativo = retroceder)
   * @param deltaTime      tiempo delta en segundos
   */
  public setControls(yawSpeed: number, forwardSpeed: number, deltaTime: number): void {
    // 1. Yaw: 360° libre, sin clamp
    this.yaw += yawSpeed * deltaTime;
    this.currentYaw = this.yaw;
    this.camera.rotation.y = this.currentYaw;

    // 2. Walk: movimiento lineal adelante/atrás respecto al yaw actual
    //    (ignoramos pitch para mantener la cámara en el plano horizontal)
    if (forwardSpeed !== 0) {
      const forwardVec = new THREE.Vector3(0, 0, -1);
      forwardVec.applyEuler(new THREE.Euler(0, this.yaw, 0, 'YXZ'));
      forwardVec.y = 0;
      forwardVec.normalize();

      const displacement = forwardVec.multiplyScalar(forwardSpeed * deltaTime);
      this.camera.position.add(displacement);
      this.clampPosition();
    }
  }

  // --- Movimiento (caminata por el local) ---

  /**
   * Mueve la cámara en la dirección horizontal de vista.
   * @param forward  -1 (atrás) .. +1 (adelante), relativo al yaw actual.
   * @param strafe   -1 (izq) .. +1 (der), relativo al yaw actual.
   * @param deltaSeconds  tiempo delta en segundos (para mover a velocidad m/s).
   */
  public moveRelative(forward: number, strafe: number, deltaSeconds: number): void {
    if (forward === 0 && strafe === 0) return;

    // Vector forward (hacia donde mira la cámara), ignorando pitch (solo horizontal)
    const forwardVec = new THREE.Vector3(0, 0, -1);
    forwardVec.applyEuler(new THREE.Euler(0, this.yaw, 0, 'YXZ'));
    forwardVec.y = 0;
    forwardVec.normalize();

    // Vector right = forward × up
    const rightVec = new THREE.Vector3().crossVectors(forwardVec, new THREE.Vector3(0, 1, 0)).normalize();

    const delta = new THREE.Vector3();
    delta.addScaledVector(forwardVec, forward * WALK_SPEED * deltaSeconds);
    delta.addScaledVector(rightVec, strafe * WALK_SPEED * deltaSeconds);

    this.camera.position.add(delta);
    this.clampPosition();
  }

  /** Limita la posición al interior del modelo (con margen de pared). */
  private clampPosition(): void {
    if (!this.modelBounds) return;
    const p = this.camera.position;
    p.x = THREE.MathUtils.clamp(p.x, this.modelBounds.minX, this.modelBounds.maxX);
    p.z = THREE.MathUtils.clamp(p.z, this.modelBounds.minZ, this.modelBounds.maxZ);
    // NO forzamos Y aquí: el usuario puede ajustar la altura con + y -
    // para encontrar el punto correcto dentro del modelo.
  }

  /**
   * Ajusta la altura de la cámara manualmente (debug / búsqueda de punto).
   * @param delta metros a sumar (positivo = subir, negativo = bajar).
   */
  public adjustCameraHeight(delta: number): void {
    this.camera.position.y += delta;
    // Permitir rango amplio para que el usuario pueda explorar el modelo
    this.camera.position.y = THREE.MathUtils.clamp(this.camera.position.y, -5, 10);
  }

  /**
   * Devuelve la posición actual de la cámara y su yaw en grados.
   * Útil para mostrar en pantalla / loggear al buscar el punto correcto.
   */
  public getCameraInfo(): { x: number; y: number; z: number; yawDeg: number; pitchDeg: number } {
    return {
      x: this.camera.position.x,
      y: this.camera.position.y,
      z: this.camera.position.z,
      yawDeg: THREE.MathUtils.radToDeg(this.yaw),
      pitchDeg: THREE.MathUtils.radToDeg(this.pitch)
    };
  }

  /**
   * Teletransporta la cámara a una posición absoluta (para cuando el usuario
   * encuentra el punto correcto y quiere movernos ahí).
   */
  public setCameraPosition(x: number, y: number, z: number): void {
    this.camera.position.set(x, y, z);
  }

  /**
   * Aplica el PUNTO DE INICIO FIJO definido en START_POSITION.
   * Se llama al cargar el modelo y al resetear (KeyT / restart).
   * Garantiza arrancar siempre en las mismas coordenadas y orientación.
   */
  public applyStartPosition(): void {
    this.camera.position.set(START_POSITION.x, START_POSITION.y, START_POSITION.z);
    const yawRad = THREE.MathUtils.degToRad(START_POSITION.yawDeg);
    this.yaw = yawRad;
    this.currentYaw = yawRad;
    this.pitch = 0;
    this.currentPitch = 0;
    this.camera.rotation.set(0, yawRad, 0, 'YXZ');
  }

  /** Reinicia la posición al PUNTO DE INICIO FIJO (mismo lugar que al arrancar). */
  public resetPosition(): void {
    this.applyStartPosition();
  }

  // --- Raycast para detectar puerta ---

  /**
   * checkDoorHit: método original del usuario.
   * Devuelve true si el rayo desde el centro impacta con la puerta.
   */
  public checkDoorHit(): boolean {
    if (!this.doorObject) return false;

    const raycaster = new THREE.Raycaster();
    const center = new THREE.Vector2(0, 0); // Centro de la pantalla

    raycaster.setFromCamera(center, this.camera);
    raycaster.far = 20;

    // Detectar intersección con el objeto puerta (y sus hijos)
    const intersects = raycaster.intersectObject(this.doorObject, true);
    return intersects.length > 0;
  }

  /**
   * isLookingAtDoor: wrapper compatible con interaction.ts.
   * Igual que checkDoorHit pero también chequea TODA la escena
   * y verifica si el primer impacto es la puerta.
   */
  public isLookingAtDoor(): boolean {
    // Primero intentar el check directo contra doorObject
    if (this.checkDoorHit()) return true;

    // También verificar contra toda la escena por si la puerta
    // está dentro de una jerarquía no detectada
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    raycaster.far = 20;
    const intersects = raycaster.intersectObjects(this.scene.children, true);
    for (const hit of intersects) {
      let obj: THREE.Object3D | null = hit.object;
      while (obj) {
        if (obj.name === DOOR_OBJECT_NAME || obj.userData?.isDoor === true) {
          return true;
        }
        obj = obj.parent;
      }
    }
    return false;
  }

  /**
   * getLookedObject: devuelve el primer objeto impactado por el rayo central.
   * Compatible con interaction.ts.
   */
  public getLookedObject(): THREE.Object3D | null {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    raycaster.far = 20;
    const intersects = raycaster.intersectObjects(this.scene.children, true);
    if (intersects.length === 0) return null;
    return intersects[0].object;
  }

  /**
   * getObjectAtScreenPoint: raycast desde un punto 2D en pantalla.
   * @param ndcX  coordenada NDC X (-1..+1, izquierda..derecha)
   * @param ndcY  coordenada NDC Y (-1..+1, abajo..arriba)
   * @returns primer Object3D impactado, o null si no hay hit.
   */
  public getObjectAtScreenPoint(ndcX: number, ndcY: number): THREE.Object3D | null {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), this.camera);
    raycaster.far = 25;
    const intersects = raycaster.intersectObjects(this.scene.children, true);
    if (intersects.length === 0) return null;
    return intersects[0].object;
  }

  // --- Render loop ---
  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * start: inicia el loop de animación.
   * Compatible con main.ts.
   */
  public start(): void {
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      this.render();
    };
    animate();
  }

  /** Devuelve el preset de performance activo. */
  public getPerformancePreset(): PerformancePreset {
    return this.perf;
  }

  // --- Resize ---
  private resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  // --- Limpieza ---
  public dispose(): void {
    if (this.animationId !== null) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resizeHandler);
    this.scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry?.dispose?.();
        const mat = obj.material;
        if (Array.isArray(mat)) {
          mat.forEach((m) => m.dispose());
        } else if (mat) {
          mat.dispose();
        }
      }
    });
    this.renderer.dispose();
  }
}
