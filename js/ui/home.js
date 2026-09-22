/* ============================================================
   Kolay İngilizce — home.js
   "Zaman Haritası": 3 sütun (geçmiş / şimdi / gelecek) x 4 satır.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  function progressBox(inHero) {
    var total = KI.tenses.list.length;
    var done = KI.store.learnedCount();
    var pct = Math.round(done / total * 100);
    var fill = U.el('div', { class: 'progress__fill' });
    var box = U.el('div', { class: 'progress' }, [
      U.el('div', { class: 'progress__bar' }, [fill]),
      U.el('span', { class: 'progress__num', text: done + '/' + total })
    ]);
    setTimeout(function () { fill.style.width = pct + '%'; }, 60);
    if (inHero) box.classList.add('progress--hero');
    return box;
  }

  function tenseCard(t) {
    var card = U.el('a', {
      class: 'tcard tcard--' + t.group,
      href: '#/zaman/' + t.id,
      'data-sfx': 'nav'
    });
    card.appendChild(U.el('span', { class: 'tcard__en', text: t.en }));
    card.appendChild(U.el('span', { class: 'tcard__tr', text: t.tr }));
    var mini = U.el('div', { class: 'tcard__mini' });
    mini.appendChild(KI.timeline.render(t, { mini: true }));
    card.appendChild(mini);
    if (KI.store.isLearned(t.id)) card.appendChild(U.el('span', { class: 'tcard__done', text: '✅' }));
    return card;
  }

  function grid() {
    var wrap = U.el('div', { class: 'grid-map' });
    var head = U.el('div', { class: 'grid-map__head' });
    KI.tenses.groups.forEach(function (g) {
      head.appendChild(U.el('div', { class: 'grid-map__col grid-map__col--' + g.id, html: g.tr + '<br><small style="font-weight:400;opacity:.75;font-size:.72rem">' + g.en + '</small>' }));
    });
    wrap.appendChild(head);

    KI.tenses.aspects.forEach(function (a) {
      wrap.appendChild(U.el('div', { class: 'grid-map__aspect', text: a.tr + ' — ' + a.hint }));
      var row = U.el('div', { class: 'grid-map__row' });
      KI.tenses.groups.forEach(function (g) {
        var t = KI.tenses.byCell(g.id, a.id);
        row.appendChild(t ? tenseCard(t) : U.el('div'));
      });
      wrap.appendChild(row);
    });
    return wrap;
  }

  function view() {
    var frag = document.createDocumentFragment();

    /* --- üst kutu --- */
    var hero = U.el('section', { class: 'hero' });
    hero.appendChild(U.el('p', { class: 'eyebrow', text: 'İngilizcenin iskeleti', style: 'color:rgba(251,246,233,.6)' }));
    hero.appendChild(U.el('h1', { text: 'Her şey zamanın neresinde?' }));
    hero.appendChild(U.el('p', { text: 'İngilizcede bir cümleyi kurmadan önce tek bir soru sorulur: bu iş zaman çizgisinin neresinde duruyor? Aşağıdaki haritada 12 zamanın hepsi yerli yerinde.' }));
    hero.appendChild(progressBox(true));
    var btnRow = U.el('div', { class: 'row', style: 'margin-top:14px' }, [
      U.el('a', { class: 'btn btn--mustard', href: '#/zaman/present-simple', 'data-sfx': 'nav', html: '▶︎ Baştan başla' }),
      U.el('a', { class: 'btn', href: '#/temeller', 'data-sfx': 'nav', html: '🧱 Önce temeller' })
    ]);
    hero.appendChild(btnRow);
    frag.appendChild(hero);

    /* --- nasıl okunur --- */
    var howto = U.el('section', { class: 'card' });
    howto.appendChild(U.el('h2', { class: 'card__title', html: '🧭 Haritayı nasıl okumalı?' }));
    howto.appendChild(U.el('p', { class: 'soft', html: '<b>Sütunlar</b> işin ne zaman olduğunu söyler: geçmiş, şimdi, gelecek. <b>Satırlar</b> ise işin nasıl olduğunu söyler: sadece oldu mu, sürüyor mu, bitmiş mi, yoksa bir süredir mi sürüyor. İkisi birleşince zamanın adı çıkar.' }));
    var legend = U.el('div', { class: 'row' });
    [['past', 'GEÇMİŞ'], ['present', 'ŞİMDİ'], ['future', 'GELECEK']].forEach(function (g) {
      legend.appendChild(U.el('span', { class: 'badge badge--' + g[0], text: g[1] }));
    });
    howto.appendChild(legend);
    frag.appendChild(howto);

    /* --- harita --- */
    var sec = U.el('section', { class: 'section' });
    sec.appendChild(U.el('h2', { class: 'section__title' }, [U.el('span', { class: 'num', text: '12' }), document.createTextNode('Zaman Haritası')]));
    sec.appendChild(grid());
    frag.appendChild(sec);

    /* --- kısa yollar --- */
    var quick = U.el('section', { class: 'section' });
    quick.appendChild(U.el('h2', { class: 'section__title', text: 'Devam et' }));
    var cards = U.el('div', { class: 'cards-2' });
    [
      { href: '#/alistirma', ico: '🎯', t: 'Alıştırma', d: 'Karışık sorularla zamanları tanı. Cevaplar anında açıklanır.' },
      { href: '#/sozluk', ico: '📖', t: 'Sözlük & Kelime Defteri', d: 'Tıkladığın her kelime burada birikir; dinleyebilir, tekrar edebilirsin.' }
    ].forEach(function (c) {
      var card = U.el('a', { class: 'card', href: c.href, 'data-sfx': 'nav', style: 'text-decoration:none;color:inherit;display:block' });
      card.appendChild(U.el('h3', { html: c.ico + ' ' + c.t }));
      card.appendChild(U.el('p', { class: 'soft', text: c.d, style: 'margin:0' }));
      cards.appendChild(card);
    });
    quick.appendChild(cards);
    frag.appendChild(quick);

    return frag;
  }

  KI.viewHome = { render: view, title: 'Zaman Haritası' };
})(window.KI);
