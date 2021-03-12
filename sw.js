
/*The install event is triggered when a new ServiceWorker(sw.js) file is detected in the root directory
  Also, any change in the ServiceWorker(sw.js) file will trigger a new install event 
  to allow you to update the app.
  */
  self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName); 
    await cache.addAll(staticAssets); //cache will fetch all static assets e.g. index.html, app.js etc
  });

  self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
  });

  const cacheName = 'pwa-candy-v1';
  const staticAssets = [
  './',
  './index.html',
  './app.js',
  './app.css'
  ];

  async function cacheFirst(req) {
    const cache = await caches.open(cacheName); //open the static contents in cache
    const cachedResponse = await cache.match(req); 
    // Return either the cached response if there is one
    // or delegate the request to the network
    return cachedResponse || fetch(req); 
  }
