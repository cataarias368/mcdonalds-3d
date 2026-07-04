# Worklog — McDonald's 3D PWA

---
Task ID: 1
Agent: main
Task: Generar imágenes reales de productos con IA + reescribir menú para usar paths locales (fix fotos 404)

Work Log:
- Confirmé que todas las URLs de `mcdonalds.com/is/image/...` en menu-popup.ts devolvían HTTP 404 (paths inventados, nunca existieron)
- Generé 15 imágenes de productos con IA (z-ai CLI, 1024x1024 PNG): big-mac, quarter-pounder, cheeseburger, mcchicken, mcnuggets, filet-o-fish, fries, cola, latte, vanilla-cone, sundae-chocolate, apple-pie, egg-mcmuffin, hotcakes, mcflurry
- Imágenes guardadas en `pwa-demo-mcdonalds/public/products/` (se bundleean con Vite)
- Reescribí `menu-popup.ts`: removidas las 38 URLs 404 de McDonald's CDN, reemplazadas con `img('name')` que resuelve a `${BASE_URL}products/name.png`
- 2 productos sin imagen (Ensalada César, Agua Mineral) → emoji fallback
- Build exitoso: nuevo bundle `index-BodX60Y0.js` (740 KB)
- Copiado dist/ al repo root, creado `.nojekyll` para bypass Jekyll
- 3 pushes a origin/main (código + .nojekyll + commit vacío para trigger rebuild)
- Confirmado vía `raw.githubusercontent.com` que las 15 imágenes están en el repo remoto

Stage Summary:
- Código correcto y pusheado: `58f5374`, `9d1a55b`, `9fd878e`
- GitHub Pages NO ha propagado: sigue sirviendo `index-BJnBWgVs.js` (bundle de ayer)
- Cache headers del CDN: `last-modified: Sat, 04 Jul 2026 19:50:11 GMT`, `max-age: 600`, `age: 459`
- El deploy está pendiente del lado de infraestructura de GitHub Pages
- Cuando Pages rebuild + cache expire (~10 min), las imágenes aparecerán en https://cataarias368.github.io/mcdonalds-3d/products/

Pendiente:
- Verificar propagación de GitHub Pages (revisar Settings → Pages en el repo)
- Issue anterior SIN resolver: "la versión mobile no funciona igual que PC" — aún no investigado
- performance.ts existe pero no está integrado en los trackers
- Face tracking freeze cuando el menú está abierto — no implementado

---
Task ID: 2
Agent: main
Task: Fix lógica de gestos (menú se abría con solo índice+medio) + forzar deploy confiable de GitHub Pages

Work Log:
- Diagnóstico gestos: el threshold del pulgar era 0.06 (absoluto). Cuando el usuario levanta índice+medio con pulgar relajado, la distancia thumb_tip→index_mcp ya es >0.06, así que `thumbExtended=true` desde el frame 1, disparando `confirm` (apertura de menú) inmediatamente.
- Fix en `hand-tracker.ts`:
  * Detección scale-invariant: ratio = distancia(THUMB_TIP, INDEX_MCP) / tamaño_mano(WRIST→MCP_MIDDLE)
  * Threshold 0.70 (era 0.06 fijo) — requiere pulgar claramente extendido, no relajado
  * Throttle reducido: 50ms → 30ms (~33fps) para respuesta más fluida
  * Aclaración en comentarios: cursor = índice+medio, menú = índice+medio+pulgar
- Fix en `performance.ts`: handThrottleMs reducido en los 3 tiers (low 100→50, medium 66→40, high 50→33)
- Fix en `hand-tracker.ts` constructor: default handThrottleMs 50→33 para consistencia
- Build exitoso: nuevo bundle `index-BTUyJdpS.js`
- Creado `.github/workflows/deploy.yml`: workflow de GitHub Actions que build con Vite + deploy con actions/deploy-pages. Más confiable que "serve from branch" porque forza rebuild limpio.
- Push commit `80ac376` con todos los cambios
- Workflow ejecutado automáticamente por GitHub Actions
- Verificación: HTML deployado referencia `index-BTUyJdpS.js` (nuevo bundle)
- Verificación: las 15 imágenes en /products/ devuelven HTTP 200
- `last-modified` del HTML: `Sat, 04 Jul 2026 22:41:36 GMT` (deploy fresco)

Stage Summary:
- Deploy confirmado y funcionando: https://cataarias368.github.io/mcdonalds-3d/
- 15/15 imágenes de productos accesibles (HTTP 200)
- Gestos arreglados: índice+medio = cursor, índice+medio+pulgar = menú (threshold scale-invariant)
- Response time mejorado: ~33fps en high tier (antes ~20fps)
- Workflow de CI/CD instalado — próximos pushes deployan automáticamente

⚠️ Acción requerida del usuario:
- En el celular, hacer HARD REFRESH (limpiar cache del sitio) porque el service worker viejo puede seguir cacheando el bundle anterior. Si no funciona, borrar el sitio de los datos del navegador.

Pendiente:
- Issue "la versión mobile no funciona igual que PC" — puede estar relacionado con el fix de gestos de hoy, o ser un problema separado de camera/touch en móvil. Re-evaluar después de que el usuario pruebe.
- performance.ts NO está integrado en main.ts — los presets existen pero main.ts no los usa todavía
- Face tracking freeze cuando el menú está abierto — no implementado

