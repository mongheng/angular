/*self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("mongheng").then(function(cache) {
      cache.addAll([
        "/index.html",
        "/app.component.css"
      ])
    })
  )
});

self.addEventListener("fetch", function(event){
  event.respondWith(
    caches.open("mongheng").then(function(cache){
      return cache.match(event.request);
    })
  )
});
*/const VERSION = 'v2';

function log(messages) {
  console.log(VERSION, messages);
}

log('Installing Service Worker');

async function installServiceWorker() {
  log("Service Worker installation started.");
  const request = new Request('offline.html');
  const response = await fetch(request);

  log("response received after loading offline.html", response);
  if (response.status !== 200) {
    throw new Error('Could not load offline page!');
  }

  const cache = await caches.open('app-cache');
  cache.put(request, response);

  log("Cache offline.html");
}

self.addEventListener('install', event => event.waitUntil(installServiceWorker()));

/* self.addEventListener("install", () => {
  log('version is installed');
}); */

self.addEventListener("activate", () => {
  log('version is activated');
});
