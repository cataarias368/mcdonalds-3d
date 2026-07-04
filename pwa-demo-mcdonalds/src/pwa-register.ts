/**
 * pwa-register.ts
 * -----------------------------------------------------------
 * Registro del Service Worker.
 *
 * vite-plugin-pwa se encarga de generar y registrar el SW real
 * (con Workbox) en producción. Este archivo actúa como:
 *  - Backup en desarrollo.
 *  - Punto central para escuchar eventos de actualización.
 * -----------------------------------------------------------
 */

export function registerPWA(): void {
  if (!('serviceWorker' in navigator)) {
    console.warn('[PWA] Service Worker no soportado en este navegador.');
    return;
  }

  // vite-plugin-pwa registra automáticamente el SW generado.
  // Aquí registramos sw.js manualmente solo si no hay otro SW activo,
  // para evitar conflictos en dev (el plugin también maneja dev).
  // Usamos import.meta.env.BASE_URL para que funcione en subpaths (GitHub Pages).
  const swUrl = `${import.meta.env.BASE_URL}sw.js`;
  const swScope = import.meta.env.BASE_URL;
  window.addEventListener('load', () => {
    if (navigator.serviceWorker.controller) {
      // Ya hay un SW controlando la página (probablemente de vite-plugin-pwa)
      return;
    }
    navigator.serviceWorker
      .register(swUrl, { scope: swScope })
      .then((reg) => {
        console.log('[PWA] Service Worker registrado:', reg.scope);
      })
      .catch((err) => {
        console.warn('[PWA] Error registrando SW:', err);
      });
  });
}
