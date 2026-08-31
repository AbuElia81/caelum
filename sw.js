/* CAELVM · Venus und Algol — Service Worker
   Hält die App offline verfügbar. Bei jedem inhaltlichen Update CACHE erhöhen. */
importScripts('widget/venus-kern.js');   // rechnet die Werte für das Widget

const CACHE = 'caelum-v26';
const DATEIEN = [
  'venus.html',
  'inanna.html',
  'widget/venus-kern.js',
  'widget/venus-karte.json',
  'widget/venus-daten.json',
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
      .then(() => widgetAuffrischen())
  );
});

/* ── Das Widget der Windows-Widget-Leiste ────────────────────────────
   Windows zeigt Widgets als Adaptive Card. Die Vorlage liegt in
   widget/venus-karte.json, die Werte rechnet dieser Worker mit
   widget/venus-kern.js selbst aus — es braucht also keinen Server und
   keine Verbindung. Fehlt die Schnittstelle (jeder Browser außer Edge
   unter Windows 11), tut hier nichts etwas, und die App läuft
   unverändert weiter.                                                */
const WIDGET = 'venus-heute';

async function widgetZeichnen(w){
  const vorlage = await (await fetch(w.definition.msAcTemplate)).text();
  await self.widgets.updateByTag(w.definition.tag,
    { template: vorlage, data: JSON.stringify(venusKarte()) });
}

async function widgetAuffrischen(){
  if(!self.widgets) return;
  const w = await self.widgets.getByTag(WIDGET);
  if(w) await widgetZeichnen(w);
}

self.addEventListener('widgetinstall', e => {
  e.waitUntil((async () => {
    await widgetZeichnen(e.widget);
    // Stündlich nachführen, solange das Widget liegt
    const tags = await self.registration.periodicSync.getTags().catch(() => []);
    if(!tags.includes(WIDGET))
      await self.registration.periodicSync
        .register(WIDGET, { minInterval: e.widget.definition.update*1000 })
        .catch(() => {});
  })());
});

self.addEventListener('widgetuninstall', e => {
  e.waitUntil((async () => {
    if(e.widget.instances.length === 1)
      await self.registration.periodicSync.unregister(WIDGET).catch(() => {});
  })());
});

self.addEventListener('widgetresume', e => { e.waitUntil(widgetZeichnen(e.widget)); });
self.addEventListener('periodicsync', e => {
  if(e.tag === WIDGET) e.waitUntil(widgetAuffrischen());
});

// Ein Klick auf die Karte öffnet den Kalender
self.addEventListener('widgetclick', e => {
  if(e.action === 'kalender-oeffnen')
    e.waitUntil(self.clients.openWindow('venus.html'));
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
