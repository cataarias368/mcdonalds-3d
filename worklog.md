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
