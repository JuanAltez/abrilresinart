// Service Worker para AbrilResinart PWA
const CACHE_NAME = 'abrilresinart-v1';
const urlsToCache = [
  './AbrilResinart.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;600;700&display=swap'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Archivos en caché');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Error al cachear archivos:', error);
      })
  );
  self.skipWaiting();
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Estrategia de caché: Network First, fallback a Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si la respuesta es válida, clona y guarda en caché
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Si falla la red, intenta servir desde caché
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          // Si no está en caché y es una navegación, devuelve la página principal
          if (event.request.mode === 'navigate') {
            return caches.match('./AbrilResinart.html');
          }
        });
      })
  );
});

// Manejo de mensajes del cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
