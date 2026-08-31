/* CAELVM · Venus und Algol — Service Worker
   Hält die App offline verfügbar. Bei jedem inhaltlichen Update CACHE erhöhen. */
const CACHE = 'caelum-v8';
const DATEIEN = [
  'venus.html',
  'manifest.webmanifest',
  'icon.svg',
  'icon-maskable.svg',
  'bilder/ischtar-loewe.jpg',
  'algol.html',
  'manifest-algol.webmanifest',
  'icon-algol.svg',
  'dekane.html',
  'finsternistafel.html',
  'bilder/rahu.jpg',
  'bilder/ketu.jpg',
  'bilder/navagraha.jpg',
  'manifest-dekane.webmanifest',
  'icon-dekane.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(DATEIEN))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())   // einzelne fehlende Datei darf nicht blockieren
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

/* Netz zuerst, Cache als Rückfall — so bleibt die App aktuell und trotzdem offline nutzbar. */
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || !r.url.startsWith(self.location.origin)) return;
  e.respondWith(
    fetch(r)
      .then(resp => {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const kopie = resp.clone();
          caches.open(CACHE).then(c => c.put(r, kopie)).catch(() => {});
        }
        return resp;
      })
      .catch(() => caches.match(r).then(hit => hit || caches.match('venus.html')))
  );
});
