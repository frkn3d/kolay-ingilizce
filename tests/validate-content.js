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
  'js/data/timeline-journey.js',
  'js/data/exercises.js',
  'js/data/compare.js',
  'js/data/exercises-2.js',
  'js/data/minitest.js'
].forEach(function (rel) { require(path.join(root, rel)); });

var KI = window.KI;
var failures = [];
function fail(msg) { failures.push(msg); }

/* Türkçede zaten aynı yazılan/okunan özel isimler (şehir, kişi adı,
   halk hikâyesi kahramanı vb.) kasıtlı olarak sözlükte yok — bir
   Türkçe konuşana "Ankara" kelimesinin çevirisini göstermenin bir
   faydası yok (bkz. glossary.js/vocabulary.js "özel isimler" notu).
   Bu yüzden kapsama kontrolünden muaf tutuluyorlar. */
var UNTRANSLATED_PROPER_NOUNS = {
  istanbul: 1, bursa: 1, konya: 1, edirne: 1, ankara: 1, topkapi: 1,
  suleymaniye: 1, selimiye: 1, sinan: 1, mimar: 1, fatih: 1, mehmet: 1,
  mehmed: 1, ayse: 1, elif: 1, zeynep: 1, hasan: 1, ali: 1, fatma: 1,
  yunus: 1, emre: 1, mevlana: 1, mesnevi: 1, hereke: 1, eminonu: 1,
  nasreddin: 1, usta: 1, diyarbakir: 1, fethiye: 1, izmir: 1, rize: 1,
  erzurum: 1, antalya: 1, trabzon: 1, mardin: 1, bombasi: 1, dede: 1,
  korkut: 1, keloglan: 1, karagoz: 1, hacivat: 1, kayseri: 1, keloğlan: 1
};
function isExemptWord(clean) {
  var w = clean.toLowerCase().replace(/['’]s$/, '');
  return !!UNTRANSLATED_PROPER_NOUNS[w];
}

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
      if (!KI.glossary.lookup(clean) && !isExemptWord(clean)) missing[clean.toLowerCase()] = (missing[clean.toLowerCase()] || 0) + 1;
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
        if (!KI.glossary.lookup(clean) && !isExemptWord(clean)) fail('basics/' + b.id + ': sözlükte yok "' + clean + '" ("' + ex.en + '")');
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
        if (!KI.glossary.lookup(clean) && !isExemptWord(clean)) fail('compare/' + c.id + ' pair#' + i + ': sözlükte yok "' + clean + '"');
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
      if (!KI.glossary.lookup(clean) && !isExemptWord(clean)) fail('stories/' + s.id + ': sözlükte yok "' + clean + '" ("' + sen.en + '")');
    });
  });
});

/* ---- Zaman Yolculuğu: her tenseId gerçek bir zamana karşılık geliyor mu,
   her cümledeki her kelime sözlükte var mı ---- */
(KI.timelineJourney || []).forEach(function (entry, i) {
  if (!KI.tenses.get(entry.tenseId)) fail('timeline-journey#' + i + ': geçersiz tenseId "' + entry.tenseId + '"');
  entry.en.replace(/[‘’]/g, "'").split(/\s+/).forEach(function (tok) {
    var clean = tok.replace(/^[^A-Za-z']+|[^A-Za-z']+$/g, '');
    if (!clean) return;
    if (!KI.glossary.lookup(clean) && !isExemptWord(clean)) fail('timeline-journey/' + entry.tenseId + ': sözlükte yok "' + clean + '" ("' + entry.en + '")');
  });
});
if ((KI.timelineJourney || []).length !== KI.tenses.list.length) {
  fail('timeline-journey: kayıt sayısı (' + (KI.timelineJourney || []).length + ') zaman sayısıyla (' + KI.tenses.list.length + ') eşleşmiyor');
}

/* ---- Mini Test: yalnız yapısal denetim (mini test.md dış kaynaklı bir
   metin dosyası; sözlük kapsamı denetimi burada uygulanmaz çünkü içinde
   özel isimler ve sözlükte olmayan meslek/konu kelimeleri var). Yalnız
   her satırın geçerli bir seviyeye, iki şıkka ve 0/1 bir cevaba sahip
   olduğu kontrol edilir. Kaynaktaki bozuk (A şıkkı = B şıkkı) satırlar
   uygulama tarafında zaten oyuna girmeden elenir; burada sadece sayılıp
   bilgi amaçlı raporlanır. */
var MINITEST_LEVELS = { kolay: 1, orta: 1, zor: 1, 'cok-zor': 1 };
var minitestDupOptions = 0;
(KI.minitest ? KI.minitest.items : []).forEach(function (it, i) {
  if (!MINITEST_LEVELS[it.level]) fail('minitest#' + i + ': geçersiz seviye "' + it.level + '"');
  if (!it.en) fail('minitest#' + i + ': boş soru metni');
  if (!Array.isArray(it.options) || it.options.length !== 2) fail('minitest#' + i + ': iki şık bekleniyor');
  if (it.answer !== 0 && it.answer !== 1) fail('minitest#' + i + ': cevap 0 ya da 1 olmalı');
  if (it.options && it.options[0] === it.options[1]) minitestDupOptions++;
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
console.log('Zaman Yolculuğu kaydı:', (KI.timelineJourney || []).length);
console.log('Sözlük kelime sayısı:', KI.glossary.size());
console.log('Düzensiz fiil sayısı:', KI.glossary.irregularVerbs.length);
console.log('Mini Test sorusu:', (KI.minitest ? KI.minitest.items.length : 0),
  '(' + minitestDupOptions + ' tanesinde A/B şıkkı aynı — kaynak dosyada bozuk, oyuna girmiyor)');
console.log('');

if (failures.length) {
  console.log('BAŞARISIZ (' + failures.length + '):');
  failures.forEach(function (f) { console.log(' - ' + f); });
  process.exit(1);
}
console.log('Tüm içerik kontrolleri geçti.');
