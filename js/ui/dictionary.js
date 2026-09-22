/* ============================================================
   Kolay İngilizce — dictionary.js
   Sözlük araması ve kelime defteri.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  function wordRow(en, tr, opts) {
    opts = opts || {};
    var acts = U.el('div', { class: 'wrow__acts' });

    var say = U.el('button', { class: 'btn btn--sm btn--icon', type: 'button', html: '🔊', title: 'Dinle' });
    say.addEventListener('click', function () { KI.audio.play('tap'); KI.speech.word(en); });
    acts.appendChild(say);

    var star = U.el('button', { class: 'btn btn--sm btn--icon', type: 'button' });
    function paint() { star.innerHTML = KI.store.hasWord(en) ? '⭐' : '☆'; }
    paint();
    star.addEventListener('click', function () {
      if (KI.store.hasWord(en)) {
        KI.store.removeWord(en);
        KI.audio.play('toggle');
        if (opts.onRemove) return opts.onRemove();
      } else {
        KI.store.addWord(en, tr);
        KI.audio.play('star');
      }
      paint();
    });
    acts.appendChild(star);

    return U.el('div', { class: 'wrow' }, [
      U.el('div', { style: 'min-width:0' }, [
        U.el('div', { class: 'wrow__en', text: en }),
        U.el('div', { class: 'wrow__tr', text: tr })
      ]),
      acts
    ]);
  }

  function view() {
    var frag = document.createDocumentFragment();
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Sözlük' }),
      U.el('h1', { text: 'Kelimeler' }),
      U.el('p', { html: 'Uygulamadaki <b>' + KI.glossary.size() + '</b> kelimede arama yap ya da defterine eklediklerini tekrar et.' })
    ]));

    var input = U.el('input', { class: 'input', type: 'search', placeholder: 'İngilizce ya da Türkçe yaz: mosque, çay, weave…', 'aria-label': 'Kelime ara' });
    frag.appendChild(U.el('div', { style: 'margin-bottom:14px' }, [input]));

    var results = U.el('div', { class: 'wlist' });
    var resSec = U.el('section', { class: 'section', hidden: true }, [
      U.el('h2', { class: 'section__title', text: 'Sonuçlar' }), results
    ]);
    frag.appendChild(resSec);

    var bookSec = U.el('section', { class: 'section' });
    bookSec.appendChild(U.el('h2', { class: 'section__title', text: '⭐ Kelime defterim' }));
    var bookList = U.el('div', { class: 'wlist' });
    bookSec.appendChild(bookList);

    function paintBook() {
      U.clear(bookList);
      var words = KI.store.words();
      if (!words.length) {
        bookList.appendChild(U.el('div', { class: 'empty' }, [
          U.el('span', { class: 'empty__ico', text: '📒' }),
          U.el('p', { text: 'Defterin boş. Örnek cümlelerde bir kelimeye dokunup "Kelime defterime ekle" dersen burada birikir.' })
        ]));
        return;
      }
      var all = U.el('button', { class: 'btn btn--sm', type: 'button', html: '🔊 Hepsini dinle' });
      all.addEventListener('click', function () {
        KI.audio.play('tap');
        var i = 0;
        (function next() {
          if (i >= words.length) return;
          KI.speech.speak(words[i].en, { rate: 0.7, onend: function () { i++; setTimeout(next, 280); } });
        })();
      });
      bookList.appendChild(U.el('div', { class: 'row', style: 'margin-bottom:6px' }, [
        all, U.el('span', { class: 'quiz__score', text: words.length + ' kelime' })
      ]));
      words.forEach(function (w) {
        bookList.appendChild(wordRow(w.en, w.tr, { onRemove: paintBook }));
      });
    }
    paintBook();
    frag.appendChild(bookSec);

    var search = U.debounce(function () {
      var q = input.value.trim();
      U.clear(results);
      if (!q) { resSec.hidden = true; bookSec.hidden = false; return; }
      resSec.hidden = false;
      bookSec.hidden = true;
      var hits = KI.glossary.search(q);
      if (!hits.length) {
        results.appendChild(U.el('p', { class: 'soft', text: '"' + q + '" için sonuç yok.' }));
        return;
      }
      hits.slice(0, 40).forEach(function (h) {
        results.appendChild(wordRow(h.en, h.tr + (h.pos ? '  ·  ' + h.pos : '')));
      });
    }, 180);
    input.addEventListener('input', search);

    return frag;
  }

  KI.viewDictionary = { render: view };
})(window.KI);
