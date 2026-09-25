/* ============================================================
   Gramer Atlası - tests/smoke.js
   Uygulamayı gerçek bir tarayıcı gibi (jsdom ile dosyadan) yükler,
   her rotayı gezer ve konsol hatası / boş ikon / kırık sayaç olup
   olmadığını kontrol eder.

   jsdom bu depoya dahil değildir (uygulamanın kendisi hiçbir paket
   bağımlılığı gerektirmez). Çalıştırmadan önce bir kere:
     npm install --no-save jsdom
   sonra:
     node tests/smoke.js
   ============================================================ */
'use strict';
var path = require('path');
var root = path.join(__dirname, '..');

var JSDOM;
try {
  JSDOM = require('jsdom').JSDOM;
} catch (e) {
  console.log('jsdom bulunamadı. Önce şunu çalıştırın:');
  console.log('  npm install --no-save jsdom');
  process.exit(1);
}

var fileUrl = 'file:///' + root.split(path.sep).join('/').replace(/ /g, '%20') + '/index.html';
var ROUTES = [
  '#/', '#/istatistikler', '#/nasil-kullanilir', '#/harita', '#/temeller', '#/alistirma', '#/sozluk',
  '#/sozluk/kelimeler', '#/sozluk/hikayeler', '#/sozluk/hikayeler/ay-mi-gunes-mi',
  '#/sozluk/hikayeler/keloglan-pasa', '#/sozluk/zaman-yolculugu',
  '#/karsilastir', '#/karsilastir/past-simple-present-perfect',
  '#/zaman/present-simple', '#/zaman/future-perfect-continuous',
  '#/oyun', '#/oyun/baslangic/temeller-1', '#/oyun/baslangic/present-simple-2',
  '#/oyun/baslangic/checkpoint-1', '#/oyun/orta/past-continuous-1',
  '#/oyun/ileri/future-perfect-continuous-1', '#/oyun/ileri/checkpoint-2'
].concat(['karisik', 'zorlandiklarim', 'tekrar', 'cumle', 'cizgi', 'bosluk', 'kur', 'dikte', 'kelime', 'fiil', 'minitest']
  .map(function (m) { return '#/alistirma/' + m; }))
  .concat(['kolay', 'orta', 'zor', 'cok-zor'].map(function (lv) { return '#/alistirma/minitest/' + lv; }));

JSDOM.fromFile(path.join(root, 'index.html'), {
  url: fileUrl,
  runScripts: 'dangerously',
  resources: 'usable',
  pretendToBeVisual: true
}).then(function (dom) {
  var window = dom.window;
  window.speechSynthesis = { getVoices: function () { return []; }, speak: function () {}, cancel: function () {} };
  window.SpeechSynthesisUtterance = function () {};

  var errors = [];
  window.addEventListener('error', function (e) { errors.push(e.error ? (e.error.stack || e.message) : e.message); });

  window.addEventListener('load', function () {
    setTimeout(function () {
      var KI = window.KI;
      var problems = errors.slice();

      var chromeIcons = Array.prototype.slice.call(window.document.querySelectorAll('[data-icon]'));
      chromeIcons.forEach(function (el) {
        if (!el.innerHTML.trim()) problems.push('appbar/tab ikonu boş kaldı: ' + (el.id || el.className));
      });

      ROUTES.forEach(function (hash) {
        try {
          window.location.hash = hash;
          KI.router.refresh();
          var view = window.document.getElementById('view');
          if (!view.children.length) problems.push(hash + ': view boş kaldı');
        } catch (e) {
          problems.push(hash + ': ' + (e.stack || e.message));
        }
      });

      console.log('Rota sayısı test edildi:', ROUTES.length);
      console.log('Sözlük:', KI.glossary.size(), 'kelime,', KI.glossary.irregularVerbs.length, 'düzensiz fiil');

      if (problems.length) {
        console.log('BAŞARISIZ (' + problems.length + '):');
        problems.forEach(function (p) { console.log(' - ' + p); });
        process.exit(1);
      }
      console.log('Tüm rotalar hatasız yüklendi.');
      process.exit(0);
    }, 300);
  });
}).catch(function (e) {
  console.log('jsdom yükleme hatası:', e.stack || e.message);
  process.exit(1);
});
