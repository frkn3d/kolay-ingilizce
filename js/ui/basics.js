/* ============================================================
   Kolay İngilizce — basics.js (arayüz)
   Temel gramer bölümlerini kartlar hâlinde çizer.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  function table(b) {
    var wrap = U.el('div', { class: 'tablewrap' });
    var tb = U.el('table', { class: 'tbl' });
    var thead = U.el('thead');
    var tr = U.el('tr');
    b.head.forEach(function (h) { tr.appendChild(U.el('th', { text: h })); });
    thead.appendChild(tr);
    tb.appendChild(thead);
    var body = U.el('tbody');
    b.rows.forEach(function (r) {
      var row = U.el('tr');
      r.forEach(function (c) { row.appendChild(U.el('td', { html: c })); });
      body.appendChild(row);
    });
    tb.appendChild(body);
    wrap.appendChild(tb);
    return wrap;
  }

  function verbTable() {
    var box = U.el('div');
    var wrap = U.el('div', { class: 'tablewrap', style: 'max-height:360px;overflow:auto' });
    var tb = U.el('table', { class: 'tbl' });
    var thead = U.el('thead');
    var tr = U.el('tr');
    ['V1 (yalın)', 'V2 (geçmiş)', 'V3 (-miş)', 'Türkçe', ''].forEach(function (h) { tr.appendChild(U.el('th', { text: h })); });
    thead.appendChild(tr);
    tb.appendChild(thead);
    var body = U.el('tbody');
    KI.glossary.irregularVerbs.forEach(function (v) {
      var row = U.el('tr');
      row.appendChild(U.el('td', {}, [U.el('b', { text: v.v1 })]));
      row.appendChild(U.el('td', { text: v.v2 }));
      row.appendChild(U.el('td', { text: v.v3 }));
      row.appendChild(U.el('td', { class: 'soft', text: v.tr }));
      var btn = U.el('button', { class: 'btn btn--sm btn--icon', type: 'button', html: '🔊', title: 'Üç hâlini dinle' });
      btn.addEventListener('click', function () {
        KI.audio.play('tap');
        KI.speech.speak(v.v1 + ', ' + v.v2.replace(',', ' or ') + ', ' + v.v3, { rate: 0.68 });
      });
      row.appendChild(U.el('td', {}, [btn]));
      body.appendChild(row);
    });
    tb.appendChild(body);
    wrap.appendChild(tb);
    box.appendChild(wrap);
    box.appendChild(U.el('p', { class: 'soft', style: 'font-size:.82rem;margin:8px 0 0',
      text: 'Bu listedeki ' + KI.glossary.irregularVerbs.length + ' fiil, günlük İngilizcenin büyük bölümünü karşılar.' }));
    return box;
  }

  function block(b) {
    if (b.t === 'text') return U.el('p', { html: b.v });
    if (b.t === 'list') {
      var ul = U.el('ul', { style: 'padding-left:20px;margin:0 0 10px' });
      b.items.forEach(function (i) { ul.appendChild(U.el('li', { html: i, style: 'margin-bottom:.35em' })); });
      return ul;
    }
    if (b.t === 'table') return table(b);
    if (b.t === 'verbs') return verbTable();
    if (b.t === 'callout') {
      var c = U.el('div', { class: 'callout' + (b.kind ? ' callout--' + b.kind : '') });
      if (b.title) c.appendChild(U.el('b', { class: 'callout__t', text: b.title }));
      c.appendChild(U.el('span', { html: b.text }));
      return c;
    }
    if (b.t === 'examples') {
      var box = U.el('div', { style: 'margin-top:10px' });
      b.items.forEach(function (ex) { box.appendChild(KI.sentence.example(ex)); });
      return box;
    }
    return U.el('div');
  }

  function view(id) {
    var frag = document.createDocumentFragment();
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Başlangıç' }),
      U.el('h1', { text: 'Temeller' }),
      U.el('p', { text: 'Zamanları kurmak için gereken en küçük bilgi seti. Buradaki her cümleyi dinleyebilir, çevirebilir, kelimelerine dokunabilirsin.' })
    ]));

    var row = U.el('div', { class: 'pill-row' });
    KI.basics.forEach(function (s) {
      row.appendChild(U.el('a', {
        class: 'btn btn--sm' + (id === s.id ? ' btn--primary' : ''),
        href: '#/temeller/' + s.id, 'data-sfx': 'nav', html: s.icon + ' ' + s.title
      }));
    });
    frag.appendChild(row);

    var shown = id ? KI.basics.filter(function (s) { return s.id === id; }) : KI.basics;
    if (!shown.length) shown = KI.basics;

    shown.forEach(function (s) {
      var card = U.el('section', { class: 'card', id: 'b-' + s.id });
      card.appendChild(U.el('h2', { class: 'card__title', html: s.icon + '  ' + s.title }));
      if (s.intro) card.appendChild(U.el('p', { class: 'soft', html: s.intro }));
      s.blocks.forEach(function (b) { card.appendChild(block(b)); });
      frag.appendChild(card);
    });

    if (KI.compare) {
      var cs = U.el('section', { class: 'section' });
      cs.appendChild(U.el('h2', { class: 'section__title', text: '↔ Karışan zamanlar' }));
      cs.appendChild(U.el('p', { class: 'soft', style: 'margin-top:-6px;font-size:.9rem',
        text: 'Türkçe konuşanların en çok karıştırdığı çiftler yan yana konmuş hâlde.' }));
      var stack = U.el('div', { class: 'stack' });
      KI.compare.list.forEach(function (c) {
        var card = U.el('a', { class: 'card modecard', href: '#/karsilastir/' + c.id, 'data-sfx': 'nav' });
        card.appendChild(U.el('h3', { text: c.title, style: 'margin-bottom:.2em' }));
        card.appendChild(U.el('p', { class: 'soft', style: 'margin:0', text: c.short }));
        stack.appendChild(card);
      });
      cs.appendChild(stack);
      frag.appendChild(cs);
    }

    frag.appendChild(U.el('div', { class: 'pager' }, [
      U.el('a', { class: 'btn', href: '#/harita', 'data-sfx': 'back' }, [U.el('span', { text: '← Harita' })]),
      U.el('a', { class: 'btn btn--primary', href: '#/zaman/present-simple', 'data-sfx': 'nav' }, [U.el('span', { text: 'Zamanlara başla →' })])
    ]));
    return frag;
  }

  KI.viewBasics = { render: view };
})(window.KI);
