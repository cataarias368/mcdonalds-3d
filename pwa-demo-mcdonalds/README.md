# PWA Demo – McDonald's 3D con Control Facial

Demostración para inversores de una experiencia inmersiva 3D dentro de un restaurante McDonald's, **navegable mediante movimientos de la cabeza** (cámara frontal) y **seleccionable mediante toque en pantalla**.

Construida con **Vite + TypeScript + Three.js + MediaPipe Face Mesh** e instalable como **PWA**.

---

## 🎯 Objetivo

Probar que es posible navegar por un entorno 3D (restaurante) usando **exclusivamente la cabeza** (sin manos), y seleccionar elementos con un toque en la pantalla. La cámara 3D permanece **fija a 1.65 m** de altura (altura media de los ojos) y **solo rota** (sin traslación).

---

## 🧩 Funcionalidades

| Funcionalidad | Descripción |
|---|---|
| Escena 3D | Restaurante McDonald's procedural con mostrador, mesas, sillas, cartel luminoso "M" y puerta principal. |
| Control facial | MediaPipe Face Mesh rastrea la punta de la nariz y la traduce en rotación yaw/pitch de la cámara. |
| Selección táctil | Al tocar la pantalla, si se está mirando la puerta (`door_exit`), aparece un popup de salida. |
| UI | Instrucciones iniciales (auto-ocultas 5s), botón de recalibración, indicador de cámara. |
| PWA | Instalable (manifest + service worker) y funcional offline (caché de assets + MediaPipe CDN). |

---

## 🛠️ Stack técnico

| Componente | Tecnología |
|---|---|
| Renderizado 3D | Three.js 0.165 |
| Tracking facial | MediaPipe Face Mesh (CDN + cache SW) |
| Bundler | Vite 5 |
| PWA | vite-plugin-pwa (Workbox) + sw.js manual de respaldo |
| Lenguaje | TypeScript estricto |

---

## 📁 Estructura

```
pwa-demo-mcdonalds/
├── public/
│   ├── model/mcdonald/            ← (vacío: escena procedural en runtime)
│   ├── icon-192.png               ← Icono PWA
│   ├── icon-512.png               ← Icono PWA
│   ├── favicon.png
│   ├── manifest.json              ← Manifest PWA
│   └── sw.js                      ← Service Worker manual (backup)
├── src/
│   ├── main.ts                    ← Orquestador
│   ├── scene-manager.ts           ← Escena 3D, cámara fija a 1.65m, límites yaw/pitch
│   ├── face-tracker.ts            ← MediaPipe Face Mesh, nariz normalizada
│   ├── interaction.ts             ← Raycast + popup de salida
│   ├── ui-controller.ts           ← UI: instrucciones, recalibración, popups, toast
│   └── pwa-register.ts            ← Registro del SW
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Instalación y ejecución

### 1. Instalar dependencias

```bash
cd pwa-demo-mcdonalds
npm install
```

### 2. Desarrollo (en desktop)

```bash
npm run dev
```

Abre `http://localhost:5173` en Chrome. **Para probar el control facial necesitas cámara web**.

> Nota: El control facial requiere **cámara frontal real**. En desktop funciona con webcam normal.

### 3. Probar en móvil (recomendado)

Como la cámara y la PWA requieren **HTTPS** (o localhost), usa una de estas opciones:

#### Opción A: exponer Vite a la red local

```bash
npm run dev -- --host 0.0.0.0
```

Vite mostrará una URL tipo `http://192.168.1.50:5173`. Conéctate desde el móvil a la **misma red Wi-Fi**.

> ⚠️ Para que la cámara funcione en móvil **debes servir por HTTPS**. Usa la opción B.

#### Opción B: servir por HTTPS con `mkcert`

```bash
# Instalar mkcert (macOS: brew install mkcert; Linux: snap install mkcert)
mkcert -install
mkcert localhost 192.168.1.50   # tu IP local

# Copia los certificados y configura vite.config.ts con server.https
npm run dev -- --host 0.0.0.0
```

#### Opción C: build + preview (entorno producción)

```bash
npm run build
npm run preview -- --host 0.0.0.0
```

Sirve la build de producción. Mismo requisito de HTTPS para cámara en móvil.

### 4. Build producción

```bash
npm run build
```

Genera `dist/` con todo el bundle + service worker + manifest listos para desplegar.

---

## 📱 Instalación como PWA

1. Abre la URL (HTTPS) en Chrome para Android o Safari para iOS.
2. Acepta el permiso de cámara cuando lo pida.
3. En Chrome Android: menú ⋮ → **Instalar app** / **Añadir a pantalla de inicio**.
4. En Safari iOS: botón Compartir → **Añadir a pantalla de inicio**.
5. Ábrela desde el icono. Debería abrirse en **fullscreen** y funcionar **offline** (después de la primera carga).

---

## 🎮 Uso

1. **Pantalla de inicio** → pulsa **"Comenzar experiencia"**.
2. Acepta el permiso de cámara.
3. **Mueve la cabeza** hacia los lados / arriba / abajo para mirar alrededor del restaurante.
   - Yaw limitado a ±160° (no se puede girar 360°).
   - Pitch limitado a -30° (suelo) y +45° (techo).
   - Dead zone del 5% y suavizado (lerp 0.15) para evitar temblores.
4. **Mira hacia la puerta principal** (pared frontal, con cartel "EXIT" verde).
5. **Toca la pantalla** mientras miras la puerta → aparece popup **"¿Quieres salir del restaurante?"**.
6. Pulsa **"Sí"** → pantalla de agradecimiento. Pulsa **"No"** → continúa la demo.
7. Si tocas mirando a otro objeto → toast informativo "No es la puerta".
8. **Recalibrar**: pulsa el botón ⚪ inferior para establecer la posición actual de la nariz como centro.

---

## 🧠 Control facial (detalle técnico)

- **MediaPipe Face Mesh** devuelve 468 landmarks faciales. Se usa el **landmark 1** (punta de la nariz) con coordenadas normalizadas `(x, y) ∈ [0, 1]`.
- **Mapeo**:
  - `dx = nose.x - calibration.x` → **yaw** (invertido porque la cámara frontal está espejada).
  - `dy = nose.y - calibration.y` → **pitch** (invertido: nariz arriba = mirar arriba).
- **Dead zone** del 5%: movimientos menores a ±0.05 se ignoran.
- **Suavizado**: `lerp(actual, target, 0.15)` para evitar temblores.
- **Recalibración**: botón ⚪ guarda la nariz actual como nuevo `(0, 0)`.
- **Resolución de cámara** reducida a `320×240` para mantener >30 FPS en móviles gama media.

---

## 🚪 Detección de puerta (raycast)

- `SceneManager.isLookingAtDoor()` lanza un `THREE.Raycaster` desde el centro de la pantalla `(0, 0)` con la cámara actual.
- Recorre `intersectObjects` buscando un objeto con `name === 'door_exit'` (subiendo por la jerarquía de parents).
- La puerta real (cristal tintado) y un **collider invisible más amplio** están etiquetados como `door_exit` para facilitar el hit.
- Al tocar la pantalla, `InteractionController.onTap` decide qué hacer según el resultado.

---

## ⚙️ Configuración de la escena

- **Cámara**: `PerspectiveCamera(72°, aspect, 0.05, 100)` en `(0, 1.65, 0)`.
- **Rotation order**: `YXZ` (yaw primero, pitch después) → rotación natural de cabeza.
- **Límites**:
  - Yaw: `[-160°, +160°]` (radianes: `[-2.79, +2.79]`).
  - Pitch: `[-30°, +45°]`.
- **Punto de partida**: cámara en el centro mirando hacia `-Z` (puerta principal).
- **Habitación**: `14m × 12m × 3.6m`.
- **Iluminación**: ambient + hemisphere + 1 directional con sombras + 4 spotlights colgantes sobre las mesas.

---

## 📐 Sobre el modelo de Sketchfab

El prompt original referencia el modelo **"McDonald Restaurant" de Katydid en Sketchfab**:

```
https://sketchfab.com/3d-models/mcdonald-restaurant-f2820c06096d4f4196648551114f4c74
```

Para que la demo sea **autónoma y no dependa de descargas externas**, la escena se construye **proceduralmente en runtime** con `Three.js` (geometrías primitivas + materiales PBR). Esto reproduce los elementos clave:

- Mostrador con caja registradora y menú iluminado.
- 4 sets de mesa+sillas distribuidos por el salón.
- Cartel luminoso "M" dorado en la pared trasera.
- Puerta principal de cristal con marco rojo y cartel "EXIT" verde.
- Suelo de baldosas, paredes con zócalo rojo y banda amarilla decorativa.
- Techo con lámparas colgantes.

> **Para usar el modelo real de Sketchfab**: descarga el `.glb` (requiere cuenta), colócalo en `public/model/mcdonald/` y reemplaza el contenido de `buildCounter()`, `buildTables()`, `buildSignage()` y `buildDoor()` en `scene-manager.ts` por un `GLTFLoader.load('model/mcdonald/scene.glb')`. Conserva el objeto puerta nombrado `door_exit` para que el raycast siga funcionando. **Asegúrate de ajustar la escala y rotación del modelo** para que la cámara a `Y=1.65m` quede realista respecto a mesas y mostrador.

---

## ⚠️ Restricciones y notas

- ❌ No usa WebGPU (solo WebGL2 vía Three.js).
- ❌ No usa librerías de UI pesadas (solo CSS puro).
- ✅ **Privacidad**: la cámara se procesa 100% local. No se transmite ni almacena ninguna imagen.
- ✅ **Performance**: pixel ratio limitado a 2, sombras suaves, caché de MediaPipe.
- ✅ **Compatibilidad**: Chrome Android, Safari iOS, Edge desktop.
- ⚠️ MediaPipe se carga vía CDN en la **primera carga**; después queda cacheado por el SW para uso offline.

---

## 🐞 Solución de problemas

| Problema | Solución |
|---|---|
| Cámara no se activa | Verifica HTTPS, permisos del navegador, y que no haya otra app usando la cámara. |
| `MediaPipe Face Mesh no está cargado` | Revisa conexión a internet (primera carga) o desactiva bloqueadores de CDN. |
| El control se siente invertido | Edita `targetYaw = -dx * SENSITIVITY_X` en `main.ts` (cambia el signo). |
| Latencia alta | Reduce `width/height` en `face-tracker.ts` a `240×180`. |
| No aparece el popup al mirar la puerta | Acerca más la mirada al centro de la puerta; el collider es amplio pero la cabeza debe estar orientada. |
| Build falla por tipos de MediaPipe | Los tipos de `@mediapipe/face_mesh` no incluyen los globales del CDN. Los declaramos en `face-tracker.ts`. |

---

## 📜 Scripts

```bash
npm run dev         # Desarrollo con HMR
npm run build       # Build producción (tsc + vite build)
npm run preview     # Servir build localmente
npm run typecheck   # Solo type-check (sin emitir)
```

---

## 📝 Licencia

Demo para inversores. © Nexus Engine. Los logos y colores de McDonald's son marcas registradas de sus respectivos propietarios y se usan aquí solo con fines demostrativos.
