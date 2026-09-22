/* ============================================================
   Kolay İngilizce — home.js
   "Zaman Haritası": 3 sütun (geçmiş / şimdi / gelecek) x 4 satır.
   Karşılama ekranı sade tutulur; açıklamalar "Nasıl okunur?"
   ipucunun altında saklıdır.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  function progressBox() {
    var total = KI.tenses.list.length;
    var done = KI.store.learnedCount();
    var fill = U.el('div', { class: 'progress__fill' });
    var box = U.el('div', { class: 'progress' }, [
      U.el('div', { class: 'progress__bar' }, [fill]),
      U.el('span', { class: 'progress__num', text: done + '/' + total })
    ]);
    setTimeout(function () { fill.style.width = Math.round(done / total * 100) + '%'; }, 60);
    return box;
  }

  function tenseCard(t) {
    var card = U.el('a', {
      class: 'tcard tcard--' + t.group,
      href: '#/zaman/' + t.id,
      'data-sfx': 'nav',
      title: t.en + ' — ' + t.tr
    });
    card.appendChild(U.el('span', { class: 'tcard__en', text: t.en }));
    card.appendChild(U.el('span', { class: 'tcard__tr', text: t.tr }));
    var mini = U.el('div', { class: 'tcard__mini' });
    mini.appendChild(KI.timeline.render(t, { mini: true }));
    card.appendChild(mini);
    if (KI.store.isLearned(t.id)) card.appendChild(U.el('span', { class: 'tcard__done', html: KI.icons.html('check-circle') }));
    return card;
  }

  function grid() {
    var wrap = U.el('div', { class: 'grid-map' });
    var head = U.el('div', { class: 'grid-map__head' });
    KI.tenses.groups.forEach(function (g) {
      head.appendChild(U.el('div', { class: 'grid-map__col grid-map__col--' + g.id, text: g.tr }));
    });
    wrap.appendChild(head);

    KI.tenses.aspects.forEach(function (a) {
      wrap.appendChild(U.el('div', { class: 'grid-map__aspect', text: a.tr, title: a.hint }));
      var row = U.el('div', { class: 'grid-map__row' });
      KI.tenses.groups.forEach(function (g) {
        var t = KI.tenses.byCell(g.id, a.id);
        row.appendChild(t ? tenseCard(t) : U.el('div'));
      });
      wrap.appendChild(row);
    });
    return wrap;
  }

  /* "Nasıl okunur?" — kapalı gelen açıklama kutusu */
  function howTo() {
    var d = U.el('details', { class: 'disclose' });
    d.appendChild(U.el('summary', { html: '<span>Haritayı nasıl okumalı?</span>' }));
    var body = U.el('div', { class: 'disclose__body' });

    body.appendChild(U.el('p', { html: '<b>Sütunlar</b> işin ne zaman olduğunu söyler. <b>Satırlar</b> işin nasıl olduğunu söyler. İkisi birleşince zamanın adı çıkar.' }));

    var cols = U.el('div', { class: 'row', style: 'margin-bottom:12px' });
    KI.tenses.groups.forEach(function (g) {
      cols.appendChild(U.el('span', { class: 'badge badge--' + g.id, text: g.tr + ' · ' + g.hint }));
    });
    body.appendChild(cols);

    var ul = U.el('ul', { class: 'disclose__list' });
    KI.tenses.aspects.forEach(function (a) {
      ul.appendChild(U.el('li', { html: '<b>' + U.esc(a.tr) + '</b> — ' + U.esc(a.hint) }));
    });
    body.appendChild(ul);

    body.appendChild(U.el('p', { class: 'soft', style: 'margin:10px 0 0;font-size:.88rem',
      html: 'Her kartın altındaki küçük çizgi, o zamanın işi zaman çizgisinde nereye koyduğunu gösterir: nokta tek bir an, bant süren bir iş, ok ise bugüne uzanan etkidir.' }));

    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:14px', text: 'Nereden başlamalı?' }));
    var route = U.el('ol', { class: 'disclose__list' });
    [
      ['Başlangıç', ['temeller', 'present-simple', 'present-continuous', 'past-simple', 'future-simple']],
      ['Orta', ['past-continuous', 'present-perfect', 'future-continuous', 'past-perfect']],
      ['İleri', ['present-perfect-continuous', 'past-perfect-continuous', 'future-perfect', 'future-perfect-continuous']]
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

    /* --- karşılama --- */
    var last = KI.store.get('lastTense');
    var lastT = last ? KI.tenses.get(last) : null;
    var done = KI.store.learnedCount();

    var hero = U.el('section', { class: 'hero' });
    hero.appendChild(U.el('h1', { text: 'Her şey zamanın neresinde?' }));
    hero.appendChild(U.el('p', { text: 'İngilizcede cümle kurmadan önce tek bir soru sorulur. 12 zamanın hepsi aşağıdaki haritada, yerli yerinde.' }));
    hero.appendChild(progressBox());

    var play = KI.icons.html('play');
    var primary = lastT
      ? U.el('a', { class: 'btn btn--mustard', href: '#/zaman/' + lastT.id, 'data-sfx': 'nav', html: play + ' Devam et: ' + U.esc(lastT.tr) })
      : U.el('a', { class: 'btn btn--mustard', href: '#/zaman/present-simple', 'data-sfx': 'nav', html: play + ' Baştan başla' });
    hero.appendChild(U.el('div', { class: 'row', style: 'margin-top:14px' }, [
      primary,
      U.el('a', { class: 'btn', href: '#/temeller', 'data-sfx': 'nav', html: KI.icons.html('wall') + ' Temeller' })
    ]));
    frag.appendChild(hero);

    /* --- harita --- */
    var head = U.el('div', { class: 'maphead' }, [
      U.el('h2', { text: 'Zaman Haritası' }),
      U.el('span', { class: 'maphead__num', text: done + ' / ' + KI.tenses.list.length + ' öğrenildi' })
    ]);
    frag.appendChild(head);
    frag.appendChild(howTo());
    frag.appendChild(grid());

    /* --- kısa yollar --- */
    var quick = U.el('div', { class: 'quicklinks' });
    [
      { href: '#/alistirma', ico: 'target', t: 'Alıştırma', d: '9 mod' },
      { href: '#/sozluk', ico: 'book', t: 'Sözlük', d: KI.glossary.size() + ' kelime' }
    ].forEach(function (c) {
      quick.appendChild(U.el('a', { class: 'quicklink', href: c.href, 'data-sfx': 'nav' }, [
        U.el('span', { class: 'quicklink__ico', html: KI.icons.html(c.ico) }),
        U.el('span', {}, [
          U.el('b', { text: c.t }),
          U.el('small', { text: c.d })
        ])
      ]));
    });
    frag.appendChild(quick);

    return frag;
  }

  KI.viewHome = { render: view, title: 'Zaman Haritası' };
})(window.KI);
