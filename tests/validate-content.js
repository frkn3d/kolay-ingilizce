/* ============================================================
   Gramer Atlası — tests/validate-content.js
   Bağımlılık gerektirmez (düz Node). Veri dosyalarını sırayla
   window.KI üzerinde birleştirip şunları doğrular:
     - her quiz sorusunun answer indeksi options sınırları içinde mi
     - her örnek cümledeki her kelime sözlükte var mı
     - temel sayaçlar (kelime, örnek, soru, karşılaştırma sayfası)
   Çalıştırma:  node tests/validate-content.js
   ============================================================ */
'use strict';
var path = require('path');
var root = path.join(__dirname, '..');

global.window = { KI: {} };

[
  'js/core/utils.js',
  'js/core/icons.js',
  'js/core/store.js',
  'js/data/glossary.js',
  'js/data/vocabulary.js',
  'js/data/vocabulary-b2.js',
  'js/data/vocabulary-b2-plus.js',
  'js/data/tenses.js',
  'js/data/examples-extra.js',
  'js/data/examples-extra-2.js',
  'js/data/examples-extra-3.js',
  'js/data/examples-extra-4.js',
  'js/data/examples-extra-5.js',
  'js/data/examples-extra-6.js',
  'js/data/examples-extra-7.js',
  'js/data/basics.js',
  'js/data/stories.js',
  'js/data/exercises.js',
  'js/data/compare.js',
  'js/data/exercises-2.js'
].forEach(function (rel) { require(path.join(root, rel)); });

var KI = window.KI;
var failures = [];
function fail(msg) { failures.push(msg); }

/* ---- answer indeksleri sınır içinde mi ---- */
function checkQuizArray(items, label) {
  (items || []).forEach(function (q, i) {
    if (!q.options || q.options.length < 2) { fail(label + '#' + i + ': seçenek sayısı yetersiz'); return; }
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
      fail(label + '#' + i + ': answer indeksi sınır dışı (' + q.answer + ') — "' + q.q + '"');
    }
  });
}
KI.tenses.list.forEach(function (t) { checkQuizArray(t.quiz, 'tenses/' + t.id); });
KI.compare.list.forEach(function (c) { checkQuizArray(c.quiz, 'compare/' + c.id); });

/* ---- örnek cümlelerdeki her kelime sözlükte var mı ---- */
var missing = {};
KI.tenses.list.forEach(function (t) {
  (t.examples || []).forEach(function (ex) {
    ex.en.replace(/[‘’]/g, "'").split(/\s+/).forEach(function (tok) {
      var clean = tok.replace(/^[^A-Za-z']+|[^A-Za-z']+$/g, '');
      if (!clean) return;
      if (!KI.glossary.lookup(clean)) missing[clean.toLowerCase()] = (missing[clean.toLowerCase()] || 0) + 1;
    });
  });
});
Object.keys(missing).forEach(function (w) { fail('sözlükte yok: "' + w + '" (' + missing[w] + ' örnekte geçiyor)'); });

/* ---- Temeller bölümlerindeki örnek cümleler ---- */
KI.basics.forEach(function (b) {
  (b.blocks || []).forEach(function (blk) {
    if (blk.t !== 'examples') return;
    (blk.items || []).forEach(function (ex) {
      ex.en.replace(/[‘’]/g, "'").split(/\s+/).forEach(function (tok) {
        var clean = tok.replace(/^[^A-Za-z']+|[^A-Za-z']+$/g, '');
        if (!clean) return;
        if (!KI.glossary.lookup(clean)) fail('basics/' + b.id + ': sözlükte yok "' + clean + '" ("' + ex.en + '")');
      });
    });
  });
});

/* ---- karşılaştırma sayfalarındaki eşleştirilmiş örnekler ---- */
KI.compare.list.forEach(function (c) {
  (c.pairs || []).forEach(function (p, i) {
    [p.a.en, p.b.en].forEach(function (en) {
      en.replace(/[‘’]/g, "'").split(/\s+/).forEach(function (tok) {
        var clean = tok.replace(/^[^A-Za-z']+|[^A-Za-z']+$/g, '');
        if (!clean) return;
        if (!KI.glossary.lookup(clean)) fail('compare/' + c.id + ' pair#' + i + ': sözlükte yok "' + clean + '"');
      });
    });
  });
});

/* ---- hikayelerdeki her kelime sözlükte var mı ---- */
(KI.stories || []).forEach(function (s) {
  (s.sentences || []).forEach(function (sen) {
    sen.en.replace(/[‘’]/g, "'").split(/\s+/).forEach(function (tok) {
      var clean = tok.replace(/^[^A-Za-z']+|[^A-Za-z']+$/g, '');
      if (!clean) return;
      if (!KI.glossary.lookup(clean)) fail('stories/' + s.id + ': sözlükte yok "' + clean + '" ("' + sen.en + '")');
    });
  });
});

/* ---- sayaçlar ---- */
var tenseQuiz = 0; KI.tenses.list.forEach(function (t) { tenseQuiz += (t.quiz || []).length; });
var compareQuiz = 0; KI.compare.list.forEach(function (c) { compareQuiz += (c.quiz || []).length; });
var exampleCount = 0; KI.tenses.list.forEach(function (t) { exampleCount += (t.examples || []).length; });
var storySentences = 0; (KI.stories || []).forEach(function (s) { storySentences += (s.sentences || []).length; });

console.log('Zamanlar:', KI.tenses.list.length);
console.log('Karşılaştırma sayfaları:', KI.compare.list.length);
console.log('Örnek cümleler:', exampleCount);
console.log('Sorular (zaman + karşılaştırma):', tenseQuiz + compareQuiz);
console.log('Hikayeler:', (KI.stories || []).length, '(' + storySentences + ' cümle)');
console.log('Sözlük kelime sayısı:', KI.glossary.size());
console.log('Düzensiz fiil sayısı:', KI.glossary.irregularVerbs.length);
console.log('');

if (failures.length) {
  console.log('BAŞARISIZ (' + failures.length + '):');
  failures.forEach(function (f) { console.log(' - ' + f); });
  process.exit(1);
}
console.log('Tüm içerik kontrolleri geçti.');
