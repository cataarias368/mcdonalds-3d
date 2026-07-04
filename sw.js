/**
 * sw.js — Service Worker AUTO-LIMPIEZA
 * -----------------------------------------------------------
 * Esta versión se auto-desinstala y limpia TODOS los caches
 * viejos del navegador. Pensada para forzar un refresh completo
 * en móviles (iOS Safari, Chrome Android) que quedaron pegados
 * con una versión antigua del bundle.
 *
 * Después de limpiarse, NO intercepta nada (pass-through), así
 * que la próxima carga va directo a la red y descarga el bundle
 * nuevo. En la siguiente visita, vite-plugin-pwa volverá a
 * registrar un SW normal con la nueva lista de precache.
 * -----------------------------------------------------------
 */

self.addEventListener('install', (event) => {
  console.log('[SW] install — auto-limpieza versión 2026-07-05');
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      // Borrar todos los caches
      if (self.caches) {
        try {
          const keys = await self.caches.keys();
          await Promise.all(keys.map((k) => self.caches.delete(k)));
          console.log('[SW] caches borrados:', keys.length);
        } catch (e) {
          console.warn('[SW] error borrando caches:', e);
        }
      }
    })()
  );
});

self.addEventListener('activate', (event) => {
  console.log('[SW] activate — tomando control y auto-desinstalándose');
  event.waitUntil(
    (async () => {
      // Tomar control de todos los clientes inmediatamente
      await self.clients.claim();

      // Avisar a todos los clientes que recarguen
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => {
        try {
          client.postMessage({ type: 'SW_SELF_UNINSTALL' });
        } catch (e) { /* noop */ }
      });

      // Auto-desinstalar el SW → próxima carga va a la red
      await self.registration.unregister();
      console.log('[SW] auto-desinstalado ✓');

      // Forzar recarga de los clientes
      clients.forEach((client) => {
        try { client.navigate(client.url); } catch (e) { /* noop */ }
      });
    })()
  );
});

// Pass-through: no interceptar nada, dejar que todo vaya a la red
self.addEventListener('fetch', (event) => {
  // No hacer nada — el navegador hace el fetch normal
});
