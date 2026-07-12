/* Service worker — makes the app work with no internet.

   Bump CACHE when you change the lessons, or phones will keep
   serving the old version from cache. That is the one thing that
   will confuse you later, so it is the first line of the file. */

const CACHE = "katathani-lingo-v2";

const SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./vendor-react.js",
  "./vendor-react-dom.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";

  /* Fonts: cache-first, and quietly cache them the first time they're
     fetched. After one online visit the app looks correct offline. */
  if (isFont) {
    e.respondWith(
      caches.match(req).then((hit) =>
        hit ||
        fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        }).catch(() => hit)
      )
    );
    return;
  }

  /* Everything of ours: cache-first. The lessons never change mid-shift,
     and staff should not wait on hotel wifi to answer question 4. */
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
