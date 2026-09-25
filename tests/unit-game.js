/* ============================================================
   Gramer Atlası - tests/unit-game.js
   Oyun Modu haritasının kilit/açma mantığını (isNodeUnlocked,
   isNodeDone, isLevelUnlocked, checkpoint geçişi) doğrudan render
   edilen DOM üzerinden sınar. Bu dosya, bu proje üzerinde daha önce
   gerçekten yaşanmış 4 hatayı bir daha geri gelmeyecek şekilde
   regresyona karşı kilitler:
     1) İleri Sar'ı geçmek yalnız bir komşuyu değil, o noktaya kadarki
        TÜM önceki durakları açmalı.
     2) "Atlandı" (skip) olarak işaretlenmiş bir durak, kendi önceki
        durağı hiç oynanmamış olsa bile kilitli görünmemeli.
     3) Kilitli bir SEVİYE'deki bir durağa doğrudan URL ile girilmeye
        çalışılırsa (haritadan değil), sınav açılmamalı.
     4) Açık bir seviyedeki İleri Sar sınavı, önündeki dersler hiç
        oynanmamış olsa bile HER ZAMAN oynanabilir olmalı.

   jsdom gerekir (proje kendisi hiçbir pakete bağımlı değildir):
     npm install --no-save jsdom
     node tests/unit-game.js
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

JSDOM.fromFile(path.join(root, 'index.html'), {
  url: fileUrl,
  runScripts: 'dangerously',
  resources: 'usable',
  pretendToBeVisual: true
}).then(function (dom) {
  var window = dom.window;
  window.speechSynthesis = { getVoices: function () { return []; }, speak: function () {}, cancel: function () {} };
  window.SpeechSynthesisUtterance = function () {};

  window.addEventListener('load', function () {
    setTimeout(function () {
      var KI = window.KI;
      var fails = [];

      function ok(label, cond) { if (!cond) fails.push(label); }

      function stopFor(frag, levelId, nodeId) {
        return frag.querySelector('.gmap__level[data-level="' + levelId + '"] [data-node="' + nodeId + '"]');
      }
      function isLocked(stop) {
        return !!(stop && stop.querySelector('.gmap__node--locked'));
      }

      /* ---- Test 1: checkpoint geçilince TÜM önceki duraklar açılır ---- */
      KI.store.reset();
      KI.viewGame.simulateCheckpointResult('baslangic', 'checkpoint-1', 8, 10);
      var frag1 = KI.viewGame.map();
      var levelEl1 = frag1.querySelector('.gmap__level[data-level="baslangic"]');
      var stops1 = Array.prototype.slice.call(levelEl1.querySelectorAll('.gmap__stop'));
      var cpIdx1 = stops1.findIndex(function (s) { return s.classList.contains('gmap__stop--cp'); });
      ok('checkpoint-1 haritada bulunamadı', cpIdx1 >= 0);
      for (var i = 0; i < cpIdx1; i++) {
        ok('checkpoint\'ten önceki ' + i + '. durak hâlâ kilitli görünüyor', !isLocked(stops1[i]));
      }
      if (stops1[cpIdx1 + 1]) {
        ok('checkpoint\'ten sonraki ilk durak açılmamış', !isLocked(stops1[cpIdx1 + 1]));
      }
      var farAfter = stops1[cpIdx1 + 3];
      if (farAfter) {
        ok('checkpoint\'ten çok sonraki bir durağın hâlâ kilitli olması bekleniyordu (her şey yanlışlıkla açılmış olabilir)', isLocked(farAfter));
      }

      /* ---- Test 2: "atlandı" işaretli durak, kendi komşusu oynanmamış olsa da açık ---- */
      KI.store.reset();
      KI.store.markGameNodeSkipped('baslangic', 'present-simple-2');
      var frag2 = KI.viewGame.map();
      var skippedStop = stopFor(frag2, 'baslangic', 'present-simple-2');
      ok('present-simple-2 durağı haritada bulunamadı (id değişmiş olabilir)', !!skippedStop);
      ok('atlanmış (skip) durak, önceki durak hiç oynanmamış olsa bile kilitli görünmemeli', !isLocked(skippedStop));

      /* ---- Test 3: kilitli bir seviyedeki durağa direkt URL ile girilemez ---- */
      KI.store.reset();
      var quiz3 = KI.viewGame.quiz('orta', 'past-continuous-1');
      var h3_3 = quiz3.querySelector('.empty h3');
      ok('kilitli seviyedeki durak URL ile açılabiliyor (kilit ekranı gösterilmedi)', !!h3_3 && /kilitli/i.test(h3_3.textContent));
      ok('kilitli seviyede yanlışlıkla bir sınav kartı (.gquiz) render edilmiş', !quiz3.querySelector('.gquiz'));

      /* ---- Test 4: açık bir seviyedeki checkpoint her zaman oynanabilir ---- */
      KI.store.reset();
      var quiz4 = KI.viewGame.quiz('baslangic', 'checkpoint-1');
      ok('açık seviyedeki İleri Sar sınavı hiç ders oynanmamışken kilitli gösteriliyor', !!quiz4.querySelector('.gquiz'));

      console.log('Oyun Modu birim testleri: 4 senaryo çalıştırıldı.');
      if (fails.length) {
        console.log('BAŞARISIZ (' + fails.length + '):');
        fails.forEach(function (f) { console.log(' - ' + f); });
        process.exit(1);
      }
      console.log('Tüm Oyun Modu mantık testleri geçti.');
      process.exit(0);
    }, 300);
  });
}).catch(function (e) {
  console.log('jsdom yükleme hatası:', e.stack || e.message);
  process.exit(1);
});
