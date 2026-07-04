import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// GitHub Pages sirve el sitio en /mcdonalds-3d/, por lo que TODOS los
// assets generados (JS, CSS, iconos, modelo, SW) deben llevar ese prefijo.
const GITHUB_PAGES_BASE = '/mcdonalds-3d/';

// https://vitejs.dev/config/
export default defineConfig({
  base: GITHUB_PAGES_BASE,
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: "McDonald's 3D - Demo",
        short_name: 'McDonalds3D',
        description: 'Navega por un McDonald\u0027s en 3D usando solo tu cabeza.',
        start_url: GITHUB_PAGES_BASE,
        scope: GITHUB_PAGES_BASE,
        display: 'fullscreen',
        orientation: 'landscape',
        background_color: '#111111',
        theme_color: '#FFC72C',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,gltf,glb,bin,jpg,jpeg,woff,woff2}'],
        // El modelo glTF de McDonald's pesa ~11 MB; elevar el límite para que se cachee.
        maximumFileSizeToCacheInBytes: 15 * 1024 * 1024, // 15 MiB
        // Importante: cachear también los assets de MediaPipe cargados desde CDN no es posible,
        // pero sí todo lo local. Para máxima offline se podría descargar MediaPipe localmente.
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'mediapipe-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: true,
        type: 'module'
      }
    })
  ],
  build: {
    target: 'es2020',
    sourcemap: false
  },
  server: {
    https: false,
    port: 5173
  }
});
