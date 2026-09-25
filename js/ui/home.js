/* ============================================================
   Gramer Atlası - home.js
   "Zaman Haritası": 3 sütun (geçmiş / şimdi / gelecek) x 4 satır.
   Karşılama ekranı sade tutulur; açıklamalar "Nasıl okunur?"
   ipucunun altında saklıdır.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  function tenseCard(t, registry) {
    var card = U.el('a', {
      class: 'tcard tcard--' + t.group + ' reveal',
      href: '#/zaman/' + t.id,
      'data-sfx': 'nav',
      title: t.en + ' - ' + t.tr
    });
    card.appendChild(U.el('span', { class: 'tcard__en', text: t.en }));
    var trEl = U.el('span', { class: 'tcard__tr', text: t.tr });
    card.appendChild(trEl);
    var mini = U.el('div', { class: 'tcard__mini' });
    mini.appendChild(KI.timeline.render(t, { mini: true }));
    card.appendChild(mini);
    if (KI.store.isLearned(t.id)) card.appendChild(U.el('span', { class: 'tcard__done', html: KI.icons.html('check-circle') }));

    /* Kartın kendi kural döngüsü yok artık - en üstteki ana zaman
       çizgisine dokununca TÜM kartlar birlikte döner (bkz. grid()). */
    if (registry) registry.push({ trEl: trEl, tense: t });

    return card;
  }

  /* "ilk girdiğinde" animasyonu yalnız bu sayfa yüklemesinde bir kez oynar;
     Harita sekmesine her dönüşte tekrar etmesin diye modül seviyesinde
     tutulur. */
  var introPlayed = false;

  /* Kalın rozetler yerine ekranı uçtan uca kaplayan tek bir ince ok:
     üstünde sade İngilizce etiketler (PAST / NOW / FUTURE), altında
     iki ucu oklu tek bir çizgi. */
  var TIMEBAR_EN = { past: 'PAST', present: 'NOW', future: 'FUTURE' };

  /* 12 zaman tek seferde biraz yoğun görünebiliyor; harita üç
     zorluk katmanına ayrılır (Oyun Modu'ndaki Başlangıç/Orta/İleri
     ile aynı renk kimliği: yeşil → hardal → kiremit), her katman
     aşağı indikçe biraz daha koyu bir zemine oturur. */
  var TIERS = [
    { id: 'baslangic', num: '1', tr: 'BAŞLANGIÇ', hint: 'Basit yapılar: tek bir gerçek ya da alışkanlık.', aspects: ['simple'] },
    { id: 'orta', num: '2', tr: 'ORTA', hint: 'Süren ve tamamlanmış işler.', aspects: ['continuous', 'perfect'] },
    { id: 'ileri', num: '3', tr: 'İLERİ', hint: 'Süregelen, en ileri düzey yapılar.', aspects: ['perfect-continuous'] }
  ];

  function tierTenseIds(tier) {
    var out = [];
    tier.aspects.forEach(function (aspectId) {
      KI.tenses.groups.forEach(function (g) {
        var t = KI.tenses.byCell(g.id, aspectId);
        if (t) out.push(t.id);
      });
    });
    return out;
  }

  function tierHeader(tier) {
    var ids = tierTenseIds(tier);
    var learned = ids.filter(function (id) { return KI.store.isLearned(id); }).length;
    return U.el('div', { class: 'grid-map__tier-head' }, [
      U.el('span', { class: 'grid-map__tier-badge grid-map__tier-badge--' + tier.id, text: tier.num }),
      U.el('div', { class: 'grid-map__tier-text' }, [
        U.el('b', { class: 'grid-map__tier-name grid-map__tier-name--' + tier.id, text: tier.tr }),
        U.el('span', { class: 'grid-map__tier-hint', text: tier.hint })
      ]),
      U.el('span', { class: 'grid-map__tier-count', text: learned + ' / ' + ids.length })
    ]);
  }

  function grid() {
    var wrap = U.el('div', { class: 'grid-map' });
    var timebar = U.el('div', { class: 'timebar' + (introPlayed ? '' : ' timebar--intro') });
    introPlayed = true;
    var labels = U.el('div', { class: 'timebar__labels' });
    KI.tenses.groups.forEach(function (g) {
      if (g.id === 'present') {
        /* "NOW" yazısı yerine sürekli kısa dalgalar yayan kalın bir nokta;
           yazı ekran okuyucular için aria-label olarak korunuyor. */
        labels.appendChild(U.el('span', { class: 'timebar__label timebar__label--now', 'aria-label': 'NOW' }, [
          U.el('span', { class: 'timebar__now-dot', 'aria-hidden': 'true' })
        ]));
        return;
      }
      labels.appendChild(U.el('span', {
        class: 'timebar__label',
        text: TIMEBAR_EN[g.id] || g.en.toUpperCase()
      }));
    });
    timebar.appendChild(labels);
    var trackwrap = U.el('button', { class: 'timebar__trackwrap', type: 'button',
      'aria-label': 'Zamanların olumlu, olumsuz ve soru kurallarını sırayla göster' }, [
      U.el('span', { class: 'timebar__cap timebar__cap--l' }),
      U.el('span', { class: 'timebar__line' }),
      U.el('span', { class: 'timebar__cap timebar__cap--r' })
    ]);
    timebar.appendChild(trackwrap);
    wrap.appendChild(timebar);

    var registry = [];
    TIERS.forEach(function (tier) {
      var band = U.el('div', { class: 'grid-map__tier grid-map__tier--' + tier.id });
      band.appendChild(tierHeader(tier));
      tier.aspects.forEach(function (aspectId) {
        var a = KI.tenses.aspects.filter(function (x) { return x.id === aspectId; })[0];
        if (!a) return;
        band.appendChild(U.el('div', { class: 'grid-map__aspect reveal', text: a.tr, title: a.hint }));
        var row = U.el('div', { class: 'grid-map__row' });
        KI.tenses.groups.forEach(function (g) {
          var t = KI.tenses.byCell(g.id, a.id);
          row.appendChild(t ? tenseCard(t, registry) : U.el('div'));
        });
        band.appendChild(row);
      });
      wrap.appendChild(band);
    });

    /* Ana zaman çizgisine dokununca bütün kartların Türkçe adı, o zamanın
       kuralına (olumlu → olumsuz → soru → ada geri) birlikte, kısaca yer
       değiştirerek geçer. */
    var RULE_KEYS = [null, 'pos', 'neg', 'que'];
    var ruleStep = 0;
    trackwrap.addEventListener('click', function () {
      ruleStep = (ruleStep + 1) % RULE_KEYS.length;
      var key = RULE_KEYS[ruleStep];
      registry.forEach(function (item) {
        item.trEl.classList.remove('tcard__tr--swap');
        void item.trEl.offsetWidth; // reflow: animasyonu her tıklamada yeniden başlatır
        item.trEl.classList.add('tcard__tr--swap');
        item.trEl.innerHTML = key ? item.tense.formula[key] : U.esc(item.tense.tr);
      });
      KI.audio.play('tap');
    });

    return wrap;
  }

  /* "Nasıl okunur?" - kapalı gelen açıklama kutusu */
  function howTo(done) {
    var d = U.el('details', { class: 'disclose reveal' });
    d.appendChild(U.el('summary', { html: '<span>Haritayı nasıl okumalı?</span>' }));
    var body = U.el('div', { class: 'disclose__body' });

    body.appendChild(U.el('div', { class: 'maphead', style: 'margin-top:0' }, [
      U.el('h2', { text: 'Her şey zamanın neresinde?' }),
      U.el('span', { class: 'maphead__num', text: done + ' / ' + KI.tenses.list.length + ' öğrenildi' })
    ]));
    body.appendChild(U.el('p', { class: 'maphead__desc',
      text: 'İngilizcede cümle kurmadan önce tek bir soru sorulur. 12 zamanın hepsi aşağıdaki haritada, yerli yerinde.' }));

    body.appendChild(U.el('p', { html: '<b>Sütunlar</b> işin ne zaman olduğunu söyler. <b>Satırlar</b> işin nasıl olduğunu söyler. İkisi birleşince zamanın adı çıkar.' }));

    var cols = U.el('div', { class: 'row', style: 'margin-bottom:12px' });
    KI.tenses.groups.forEach(function (g) {
      cols.appendChild(U.el('span', { class: 'badge badge--' + g.id, text: g.tr + ' · ' + g.hint }));
    });
    body.appendChild(cols);

    var ul = U.el('ul', { class: 'disclose__list' });
    KI.tenses.aspects.forEach(function (a) {
      ul.appendChild(U.el('li', { html: '<b>' + U.esc(a.tr) + '</b> - ' + U.esc(a.hint) }));
    });
    body.appendChild(ul);

    body.appendChild(U.el('p', { class: 'soft', style: 'margin:10px 0 0;font-size:.88rem',
      html: 'Her kartın altındaki küçük çizgi, o zamanın işi zaman çizgisinde nereye koyduğunu gösterir: nokta tek bir an, bant süren bir iş, ok ise bugüne uzanan etkidir.' }));

    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:14px', text: 'Nereden başlamalı?' }));
    var route = U.el('ol', { class: 'disclose__list' });
    /* Aşağıdaki sıralama, haritadaki Başlangıç/Orta/İleri katmanlarıyla
       birebir aynı (bkz. grid()'teki TIERS) - ikisi arasında fark
       olmasın diye. */
    [
      ['Başlangıç', ['temeller'].concat(tierTenseIds(TIERS[0]))],
      ['Orta', tierTenseIds(TIERS[1])],
      ['İleri', tierTenseIds(TIERS[2])]
    ].forEach(function (step) {
      var li = U.el('li');
      li.appendChild(U.el('b', { text: step[0] + ': ' }));
      step[1].forEach(function (id, i) {
        if (i) li.appendChild(document.createTextNode(' · '));
        if (id === 'temeller') {
          li.appendChild(U.el('a', { href: '#/temeller', 'data-sfx': 'nav', text: 'Temeller' }));
        } else {
          var t = KI.tenses.get(id);
          if (t) li.appendChild(U.el('a', { href: '#/zaman/' + id, 'data-sfx': 'nav', text: t.en }));
        }
      });
      route.appendChild(li);
    });
    body.appendChild(route);

    d.appendChild(body);
    return d;
  }

  function view() {
    var frag = document.createDocumentFragment();

    /* --- karşılama metni artık "Haritayı nasıl okumalı?" bölmesinin
       içinde; burada yalnız ilerleme çubuğu ve eylem düğmeleri kalır --- */
    var last = KI.store.get('lastTense');
    var lastT = last ? KI.tenses.get(last) : null;
    var done = KI.store.learnedCount();

    var actions = U.el('div', { class: 'maphead__actions reveal' });
    var play = KI.icons.html('play');
    var primary = lastT
      ? U.el('a', { class: 'btn btn--mustard btn--sm', href: '#/zaman/' + lastT.id, 'data-sfx': 'nav', html: play + ' Devam et: ' + U.esc(lastT.tr) })
      : U.el('a', { class: 'btn btn--mustard btn--sm', href: '#/zaman/present-simple', 'data-sfx': 'nav', html: play + ' Baştan başla' });
    actions.appendChild(U.el('div', { class: 'row' }, [primary]));
    frag.appendChild(actions);

    /* Önce harita, açıklama ("Haritayı nasıl okumalı?") en altta -
       kullanıcı önce 12 zamanı görsün, ayrıntı isteyen altta bulsun. */
    frag.appendChild(grid());
    frag.appendChild(howTo(done));

    setTimeout(setupReveal, 0);
    return frag;
  }

  /* Ekrana girene kadar hiçbir şey oynamasın diye IntersectionObserver
     kullanılır: her .reveal elemanı yalnız görünüşe girdiğinde belirir,
     sonra bir daha izlenmez. view() bir DocumentFragment döndürdüğü için
     bu, fragment DOM'a eklendikten hemen sonra (setTimeout 0) çalıştırılır. */
  function setupReveal() {
    var view = document.getElementById('view');
    if (!view) return;
    var els = U.qsa('.reveal', view);
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('reveal--in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('reveal--in');
        io.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -30px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  KI.viewHome = { render: view, title: 'Zaman Haritası' };
})(window.KI);
