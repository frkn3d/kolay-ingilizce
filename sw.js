/* ============================================================
   Gramer Atlası — sw.js (service worker)
   Çevrimdışı çalışmayı sağlar. Strateji: ağ öncelikli — çevrimiçiyken
   her zaman en güncel dosya alınır ve önbelleğe yazılır; ağ yoksa
   (uçakta, metroda, çekim olmayan yerde) önbellekten sunulur.

   Yeni bir yayında dosya listesi değiştiyse (yeni js/css dosyası
   eklendi/kaldırıldı) CACHE_VERSION'ı artırın — eski önbellek otomatik
   silinir.
   ============================================================ */
'use strict';

var CACHE_VERSION = 'ki-cache-v6';

var CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/base.css',
  './css/components.css',
  './css/layout.css',
  './css/game.css',
  './js/core/utils.js',
  './js/core/icons.js',
  './js/core/store.js',
  './js/core/audio.js',
  './js/core/haptics.js',
  './js/core/speech.js',
  './js/data/glossary.js',
  './js/data/vocabulary.js',
  './js/data/vocabulary-b2.js',
  './js/data/vocabulary-b2-plus.js',
  './js/data/tenses.js',
  './js/data/examples-extra.js',
  './js/data/examples-extra-2.js',
  './js/data/examples-extra-3.js',
  './js/data/examples-extra-4.js',
  './js/data/examples-extra-5.js',
  './js/data/examples-extra-6.js',
  './js/data/examples-extra-7.js',
  './js/data/basics.js',
  './js/data/stories.js',
  './js/data/exercises.js',
  './js/data/compare.js',
  './js/data/exercises-2.js',
  './js/data/game-questions.js',
  './js/ui/timeline.js',
  './js/ui/sentence.js',
  './js/ui/home.js',
  './js/ui/tense.js',
  './js/ui/practice.js',
  './js/ui/basics.js',
  './js/ui/compare.js',
  './js/ui/dictionary.js',
  './js/ui/stories.js',
  './js/ui/achievements.js',
  './js/ui/settings.js',
  './js/ui/gate.js',
  './js/ui/game.js',
  './js/app.js',
  './assets/favicon.svg',
  './assets/icon-512.svg',
  './assets/logo.svg',
  './assets/icon-mode-game.svg',
  './assets/icon-mode-study.svg'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(function (cache) { return cache.addAll(CORE_ASSETS); })
      .then(function () { return self.skipWaiting(); })
      .catch(function () { /* bir dosya alınamazsa kurulum sessizce geçilir */ })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (names) {
        return Promise.all(names.filter(function (n) { return n !== CACHE_VERSION; }).map(function (n) { return caches.delete(n); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // yalnız kendi dosyalarımız

  event.respondWith(
    fetch(event.request).then(function (response) {
      var copy = response.clone();
      caches.open(CACHE_VERSION).then(function (cache) { cache.put(event.request, copy); });
      return response;
    }).catch(function () {
      return caches.match(event.request).then(function (cached) {
        return cached || caches.match('./index.html');
      });
    })
  );
});
