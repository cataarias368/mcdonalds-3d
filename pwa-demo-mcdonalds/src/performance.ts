/**
 * performance.ts
 * -----------------------------------------------------------
 * Detección automática de capacidad del hardware y presets de
 * configuración para ajustar calidad visual + carga de inferencia
 * de MediaPipe según el equipo del usuario.
 *
 * Categorías:
 *   - 'low'    : i3/i5 viejo, 4-8GB RAM, GPU Intel HD integrada.
 *                Antialias OFF, sombras OFF, video 240x180,
 *                tracking a 10-15fps, numHands=1.
 *   - 'medium' : i5/i7 mid-range, 8-16GB RAM, GPU Intel UHD o
 *                entrada Nvidia. Antialias OFF, sombras basic,
 *                video 320x240, tracking 20fps, numHands=2.
 *   - 'high'   : i7/i9 o Ryzen 7+, 16GB+ RAM, GPU dedicada.
 *                Antialias ON, sombras PCF Soft, video 480x360,
 *                tracking 30fps, numHands=2.
 *
 * El usuario puede forzar el modo con ?perf=low en la URL,
 * con el botón "Modo rendimiento" en la UI, o con
 * localStorage.setItem('mcdonalds-perf', 'low').
 * -----------------------------------------------------------
 */

export type PerformanceTier = 'low' | 'medium' | 'high';

export interface PerformancePreset {
  tier: PerformanceTier;
  // Three.js renderer
  antialias: boolean;
  pixelRatioMax: number;
  shadowsEnabled: boolean;
  shadowMapSize: number;
  powerPreference: 'high-performance' | 'low-power' | 'default';
  // Iluminación
  numPointLights: number;
  numDirectionalLights: number;
  hemisphereLight: boolean;
  // MediaPipe video capture
  videoWidth: number;
  videoHeight: number;
  // FaceTracker
  faceThrottleMs: number;       // 0 = sin throttle (cada frame)
  faceUseGpu: boolean;          // intentar GPU delegate
  // HandTracker
  handThrottleMs: number;
  handNumHands: number;
  handUseGpu: boolean;
  // FPS target (si bajamos mucho, mostrar advertencia)
  minAcceptableFps: number;
}

const PRESETS: Record<PerformanceTier, PerformancePreset> = {
  low: {
    tier: 'low',
    antialias: false,
    pixelRatioMax: 1,
    shadowsEnabled: false,
    shadowMapSize: 512,
    powerPreference: 'low-power',
    numPointLights: 0,
    numDirectionalLights: 1,
    hemisphereLight: true,
    videoWidth: 240,
    videoHeight: 180,
    faceThrottleMs: 66,        // ~15fps
    faceUseGpu: false,         // CPU suele ser más estable en Intel HD vieja
    handThrottleMs: 100,       // 10fps — suficiente para gestos
    handNumHands: 1,
    handUseGpu: false,
    minAcceptableFps: 20
  },
  medium: {
    tier: 'medium',
    antialias: false,
    pixelRatioMax: 1.5,
    shadowsEnabled: true,
    shadowMapSize: 1024,
    powerPreference: 'high-performance',
    numPointLights: 2,
    numDirectionalLights: 2,
    hemisphereLight: true,
    videoWidth: 320,
    videoHeight: 240,
    faceThrottleMs: 50,        // 20fps
    faceUseGpu: true,
    handThrottleMs: 66,        // 15fps
    handNumHands: 2,
    handUseGpu: true,
    minAcceptableFps: 25
  },
  high: {
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
    faceThrottleMs: 33,        // 30fps
    faceUseGpu: true,
    handThrottleMs: 50,        // 20fps
    handNumHands: 2,
    handUseGpu: true,
    minAcceptableFps: 30
  }
};

/**
 * Detecta el nivel de performance del hardware basándose en:
 *  - navigator.hardwareConcurrency (cores lógicos)
 *  - navigator.deviceMemory (GB)
 *  - Modelo de GPU (vía WebGL renderer string)
 *
 * Heurística simple pero robusta:
 *   - low:  <4 cores, <8GB, o GPU Intel HD legacy (HD Graphics 2xxx-5xxx)
 *   - high: >=8 cores, >=16GB, y GPU Nvidia/AMD dedicada
 *   - medium: cualquier otra combinación (incluye móviles modernos)
 *
 * IMPORTANTE para móviles: antes forzábamos todos los móviles a 'low',
 * lo que desactivaba el GPU delegate de MediaPipe Hands → tracking
 * lentísimo en CPU → el gesto nunca se detectaba. Ahora los móviles
 * modernos (Apple GPU, Adreno 6+, Mali-G7x+) caen a 'medium' que
 * usa GPU delegate y es mucho más rápido.
 */
export function detectPerformanceTier(): PerformanceTier {
  const cores = navigator.hardwareConcurrency ?? 4;
  // @ts-expect-error — deviceMemory solo existe en Chromium
  const mem = (navigator.deviceMemory ?? 8) as number;

  // Detectar GPU
  let gpuString = '';
  try {
    const canvas = document.createElement('canvas');
    const gl = (canvas.getContext('webgl2') ||
                canvas.getContext('webgl')) as WebGLRenderingContext | null;
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        gpuString = (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '').toLowerCase();
      }
    }
  } catch {
    /* noop */
  }

  // Heurística de GPU
  const hasIntelLegacy = /intel.*hd graphics.*[12345]\d{3}/.test(gpuString) ||
                         /intel.*hd graphics 4\d{3}/.test(gpuString) ||
                         /intel.*hd graphics 5\d{3}/.test(gpuString);
  const hasIntelModern = /intel.*uhd|intel.*iris|intel.*arc/.test(gpuString);
  const hasDedicatedGpu = /nvidia|radeon|amd|geforce|rtx|gtx|rx [0-9]/.test(gpuString);

  // Detección de móviles modernos (Apple A12+ / Snapdragon 845+ / Exynos 9810+)
  // Apple GPU = todos los iPhones desde XS (A12 Bionic)
  // Adreno 6xx+ = Snapdragon 845+ (2018+)
  // Mali-G7x/G6x = Exynos 9810+ / MediaTek Dimensity
  const isMobileGpu = /mali|adreno|powervr|apple gpu/.test(gpuString);
  const isModernMobileGpu = /apple gpu/.test(gpuString) ||
                            /adreno [6789]/.test(gpuString) ||
                            /mali-g[6789]/.test(gpuString) ||
                            /mali-g7[0-9]/.test(gpuString);

  // Decisiones
  if (hasIntelLegacy || cores < 4 || mem < 4) {
    return 'low';
  }
  if ((hasDedicatedGpu || hasIntelModern) && cores >= 8 && mem >= 16) {
    return 'high';
  }
  // Móvil moderno → medium (GPU delegate ON, 320x240 video, 2 manos)
  // Móvil viejo → low (CPU delegate, 240x180 video, 1 mano)
  if (isModernMobileGpu) {
    return 'medium';
  }
  if (isMobileGpu) {
    return 'low';
  }
  // Default
  return 'medium';
}

/**
 * Lee overrides del usuario (URL param, localStorage) y devuelve el preset final.
 * Prioridad: URL param > localStorage > detección automática.
 */
export function getPerformancePreset(): PerformancePreset {
  // 1. URL override (?perf=low|medium|high)
  const urlParams = new URLSearchParams(window.location.search);
  const urlOverride = urlParams.get('perf')?.toLowerCase();
  if (urlOverride === 'low' || urlOverride === 'medium' || urlOverride === 'high') {
    console.log(`⚡ Performance override por URL: ${urlOverride}`);
    return PRESETS[urlOverride];
  }

  // 2. localStorage override
  try {
    const stored = localStorage.getItem('mcdonalds-perf');
    if (stored === 'low' || stored === 'medium' || stored === 'high') {
      console.log(`⚡ Performance override por localStorage: ${stored}`);
      return PRESETS[stored];
    }
  } catch {
    /* localStorage puede estar bloqueado */
  }

  // 3. Detección automática
  const tier = detectPerformanceTier();
  console.log(`⚡ Performance detectado: ${tier} (cores=${navigator.hardwareConcurrency}, mem=${(navigator as any).deviceMemory ?? '?'}GB, gpu="${gpuStringSnapshot()}"}`);
  return PRESETS[tier];
}

// Helper para log sin duplicar la lógica de detección de GPU
let _gpuSnapshot: string | null = null;
function gpuStringSnapshot(): string {
  if (_gpuSnapshot !== null) return _gpuSnapshot;
  try {
    const canvas = document.createElement('canvas');
    const gl = (canvas.getContext('webgl2') ||
                canvas.getContext('webgl')) as WebGLRenderingContext | null;
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        _gpuSnapshot = (renderer ? String(renderer) : '').toLowerCase();
        return _gpuSnapshot;
      }
    }
  } catch { /* noop */ }
  _gpuSnapshot = 'unknown';
  return _gpuSnapshot;
}

/**
 * Guarda el tier elegido en localStorage para sesiones futuras.
 */
export function savePerformanceTier(tier: PerformanceTier): void {
  try {
    localStorage.setItem('mcdonalds-perf', tier);
  } catch {
    /* noop */
  }
}

/**
 * Limpia el override guardado (vuelve a detección automática).
 */
export function clearPerformanceOverride(): void {
  try {
    localStorage.removeItem('mcdonalds-perf');
  } catch {
    /* noop */
  }
}
