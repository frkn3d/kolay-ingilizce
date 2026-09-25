/* ============================================================
   Gramer Atlası — dictionary.js
   Sözlük araması, türlere göre süzme ve kelime defteri.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  var FILTERS = [
    { id: 'all',      t: 'Tümü',      fn: function () { return true; } },
    { id: 'isim',     t: 'İsim',      fn: function (d) { return /isim/.test(d.pos) && !/özel/.test(d.pos); } },
    { id: 'fiil',     t: 'Fiil',      fn: function (d) { return /fiil/.test(d.pos); } },
    { id: 'sifat',    t: 'Sıfat',     fn: function (d) { return /sıfat/.test(d.pos); } },
    { id: 'zarf',     t: 'Zarf',      fn: function (d) { return /zarf/.test(d.pos); } },
    { id: 'obek',     t: 'Öbek fiil', fn: function (d) { return /öbek/.test(d.pos); } },
    { id: 'duzensiz', t: 'Düzensiz fiil', special: 'irregular' },
    { id: 'defter',   t: 'Defterim', ico: 'star', special: 'book' }
  ];

  var active = 'all';
  var shown = 60;

  function wordRow(en, tr, opts) {
    opts = opts || {};
    var acts = U.el('div', { class: 'wrow__acts' });

    var say = U.el('button', { class: 'btn btn--sm btn--icon', type: 'button', html: KI.icons.html('speaker'), title: 'Dinle' });
    say.addEventListener('click', function () { KI.audio.play('tap'); KI.speech.word(en); });
    acts.appendChild(say);

    var star = U.el('button', { class: 'btn btn--sm btn--icon', type: 'button' });
    function paint() { star.innerHTML = KI.icons.html(KI.store.hasWord(en) ? 'star' : 'star-outline'); }
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

    var row = U.el('div', { class: 'wrow' }, [
      U.el('div', { style: 'min-width:0' }, [
        U.el('div', { class: 'wrow__en', text: en }),
        U.el('div', { class: 'wrow__tr', text: tr })
      ]),
      acts
    ]);
    return row;
  }

  /* Seçili süzgece göre kelime listesi döndürür */
  function collect(query) {
    var f = FILTERS.filter(function (x) { return x.id === active; })[0] || FILTERS[0];
    var out = [];

    if (f.special === 'book') {
      out = KI.store.words().map(function (w) { return { en: w.en, tr: w.tr, pos: '' }; });
    } else if (f.special === 'irregular') {
      out = KI.glossary.irregularVerbs.map(function (v) {
        return { en: v.v1, tr: v.tr + '  ·  ' + v.v1 + ' / ' + v.v2 + ' / ' + v.v3, pos: 'düzensiz fiil' };
      });
    } else if (query) {
      out = KI.glossary.search(query).filter(f.fn);
    } else {
      var dict = KI.glossary.dict;
      out = Object.keys(dict).sort().map(function (k) { return dict[k]; }).filter(f.fn);
    }

    if (query && f.special) {
      var q = query.toLowerCase();
      out = out.filter(function (d) {
        return d.en.toLowerCase().indexOf(q) >= 0 || d.tr.toLowerCase().indexOf(q) >= 0;
      });
    }
    return out;
  }

  /* Sözlük sekmesine girince ilk görünen seçim ekranı: kelimeler mi,
     hikayeler mi. */
  function hub() {
    var frag = document.createDocumentFragment();
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Sözlük' }),
      U.el('h1', { text: 'Sözlük ve Hikayeler' }),
      U.el('p', { text: 'Kelime dağarcığını çalış ya da bir hikaye okuyarak kelimelere doğal bağlamda rastla.' })
    ]));

    var grid = U.el('div', { class: 'hub-grid' });

    var wordsCard = U.el('a', { class: 'card modecard hub-card', href: '#/sozluk/kelimeler', 'data-sfx': 'nav' }, [
      U.el('span', { class: 'hub-card__ico', html: KI.icons.html('book') }),
      U.el('span', {}, [
        U.el('h3', { text: 'Sözlük' }),
        U.el('p', { class: 'soft', text: KI.glossary.size() + ' kelime · türüne göre süz, dinle, defterine ekle.' })
      ])
    ]);
    grid.appendChild(wordsCard);

    var storiesCard = U.el('a', { class: 'card modecard hub-card', href: '#/sozluk/hikayeler', 'data-sfx': 'nav' }, [
      U.el('span', { class: 'hub-card__ico', html: KI.icons.html('chat') }),
      U.el('span', {}, [
        U.el('h3', { text: 'Hikayeler' }),
        U.el('p', { class: 'soft', text: (KI.stories ? KI.stories.length : 0) + ' anonim halk hikayesi · Nasreddin Hoca ve daha fazlası, okutma ve kelime tıklama ile.' })
      ])
    ]);
    grid.appendChild(storiesCard);

    var journeyCard = U.el('a', { class: 'card modecard hub-card', href: '#/sozluk/zaman-yolculugu', 'data-sfx': 'nav' }, [
      U.el('span', { class: 'hub-card__ico', html: KI.icons.html('compass') }),
      U.el('span', {}, [
        U.el('h3', { text: 'Zaman Yolculuğu' }),
        U.el('p', { class: 'soft', text: 'Tek cümle, 12 zaman. Yakınlaş, gez, karşılaştır.' })
      ])
    ]);
    grid.appendChild(journeyCard);

    frag.appendChild(grid);
    return frag;
  }

  function view() {
    active = 'all';
    shown = 60;
    var frag = document.createDocumentFragment();

    frag.appendChild(U.el('a', { class: 'crumb', href: '#/sozluk', 'data-sfx': 'back', text: '← Sözlük' }));
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Sözlük' }),
      U.el('h1', { text: 'Kelimeler' }),
      U.el('p', { html: '<b>' + KI.glossary.size() + '</b> kelime. Türüne göre süzebilir, dinleyebilir, defterine ekleyebilirsin.' })
    ]));

    var input = U.el('input', { class: 'input', type: 'search', placeholder: 'İngilizce ya da Türkçe ara: mosque, çay, weave…', 'aria-label': 'Kelime ara' });
    frag.appendChild(U.el('div', { style: 'margin-bottom:10px' }, [input]));

    var chips = U.el('div', { class: 'pill-row' });
    frag.appendChild(chips);

    var info = U.el('p', { class: 'quiz__score', style: 'margin:0 0 8px' });
    frag.appendChild(info);

    var tools = U.el('div', { class: 'row', style: 'margin-bottom:10px' });
    frag.appendChild(tools);

    var list = U.el('div', { class: 'wlist' });
    frag.appendChild(list);

    var moreWrap = U.el('div', { class: 'row', style: 'margin-top:12px;justify-content:center' });
    frag.appendChild(moreWrap);

    function paintChips() {
      U.clear(chips);
      FILTERS.forEach(function (f) {
        var b = U.el('button', {
          class: 'btn btn--sm' + (active === f.id ? ' btn--primary' : ''), type: 'button',
          html: (f.ico ? KI.icons.html(f.ico) + ' ' : '') + U.esc(f.t)
        });
        b.addEventListener('click', function () {
          active = f.id;
          shown = 60;
          KI.audio.play('toggle');
          paintChips();
          paintList();
        });
        chips.appendChild(b);
      });
    }

    function paintList() {
      var q = input.value.trim();
      var items = collect(q);
      U.clear(list);
      U.clear(tools);
      U.clear(moreWrap);

      info.textContent = items.length + ' kelime' + (q ? ' · "' + q + '" araması' : '');

      if (!items.length) {
        list.appendChild(U.el('div', { class: 'empty' }, [
          U.el('span', { class: 'empty__ico', html: KI.icons.html(active === 'defter' ? 'notebook' : 'search') }),
          U.el('p', { text: active === 'defter'
            ? 'Defterin boş. Örnek cümlelerde bir kelimeye dokunup "Kelime defterime ekle" dersen burada birikir.'
            : 'Sonuç bulunamadı.' })
        ]));
        return;
      }

      if (active === 'defter' || items.length <= 40) {
        var all = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('speaker') + ' Listeyi sırayla dinle' });
        all.addEventListener('click', function () {
          KI.audio.play('tap');
          var i = 0, arr = items.slice(0, 40);
          (function next() {
            if (i >= arr.length) return;
            KI.speech.speak(arr[i].en, { rate: 0.7, onend: function () { i++; setTimeout(next, 250); } });
          })();
        });
        tools.appendChild(all);
      }

      items.slice(0, shown).forEach(function (d) {
        list.appendChild(wordRow(d.en, d.tr, { onRemove: paintList }));
      });

      if (items.length > shown) {
        var more = U.el('button', { class: 'btn', type: 'button',
          html: '↓ ' + (items.length - shown) + ' kelime daha göster' });
        more.addEventListener('click', function () {
          shown += 100;
          KI.audio.play('tap');
          paintList();
        });
        moreWrap.appendChild(more);
      }
    }

    input.addEventListener('input', U.debounce(function () { shown = 60; paintList(); }, 180));

    paintChips();
    paintList();
    return frag;
  }

  KI.viewDictionary = { render: hub, words: view };
})(window.KI);
