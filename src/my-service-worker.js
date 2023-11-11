const broadcast = new BroadcastChannel("PREFETCH_VOICE_CHANNEL");

const CACHE_NAME = "my-app-cache";

const preloadUrl = function () {};

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "MESSAGE_IDENTIFIER") {
    preloadUrl();
  }
});

self.addEventListener("install", (event) => {
  // console.log("WORKER: install event in progress.");

  event.waitUntil(self.skipWaiting());
});

broadcast.onmessage = (event) => {
  if (event.data && event.data.type === "PREFETCH_VOICE") {
    console.log("received message", event.data.urls);

    const preCache = async () => {
      const cache = await caches.open(CACHE_NAME);
      return cache.addAll(event.data.urls);
    };

    preCache().then(() => {
      console.log("precached");
    });
  }
};

self.addEventListener("activate", function (event) {
  // console.log('Claiming control');
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // console.log('fetch', event);
  // console.log(event.request.url, caches);

  const options = {
    ignoreVary: true,
  };

  if (event.request.url.includes("texttospeech")) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request, options).then((cachedResponse) => {
          if (cachedResponse) {
            // console.log('returning from cache', cachedResponse);
            return cachedResponse;
          } else {
            return fetch(event.request);
          }
        });
      }),
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});

importScripts("./ngsw-worker.js");
