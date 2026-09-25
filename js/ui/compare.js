/* ============================================================
   Gramer Atlası - compare.js (arayüz)
   Karışan zamanları yan yana gösteren karşılaştırma sayfası.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  function side(s, which) {
    var box = U.el('div', { class: 'cmp__side cmp__side--' + which });
    box.appendChild(U.el('span', { class: 'cmp__tag', text: which === 'a' ? 'A' : 'B' }));
    box.appendChild(U.el('h3', { text: s.label, style: 'margin:0' }));
    box.appendChild(U.el('p', { class: 'soft', style: 'margin:0;font-size:.85rem', text: s.tr }));
    if (s.tenseId) {
      var t = KI.tenses.get(s.tenseId);
      if (t) {
        var tl = U.el('div', { style: 'margin-top:8px' });
        tl.appendChild(KI.timeline.render(t, { mini: true }));
        box.appendChild(tl);
        box.appendChild(U.el('a', { class: 'btn btn--sm', href: '#/zaman/' + t.id, 'data-sfx': 'nav',
          style: 'margin-top:8px', text: 'Konuya git →' }));
      }
    }
    return box;
  }

  function rulesTable(c) {
    var wrap = U.el('div', { class: 'tablewrap' });
    var tb = U.el('table', { class: 'tbl tbl--cmp' });
    var thead = U.el('thead');
    var tr = U.el('tr');
    tr.appendChild(U.el('th', { text: 'Durum' }));
    [['A', c.a.label], ['B', c.b.label]].forEach(function (h) {
      tr.appendChild(U.el('th', { title: h[1] }, [
        U.el('span', { class: 'cmp__mark', text: h[0] }),
        U.el('span', { class: 'cmp__word', text: ' ' + h[1] })
      ]));
    });
    thead.appendChild(tr);
    tb.appendChild(thead);
    var body = U.el('tbody');
    c.rules.forEach(function (r) {
      var row = U.el('tr');
      row.appendChild(U.el('td', { text: r.when }));
      [r.a, r.b].forEach(function (v) {
        var cls = v === 'kullanılır' ? 'cmp__yes' : v === 'kullanılmaz' ? 'cmp__no' : 'cmp__maybe';
        var mark = v === 'kullanılır' ? '✓' : v === 'kullanılmaz' ? '✕' : '~';
        row.appendChild(U.el('td', {}, [
          U.el('span', { class: cls, title: v }, [
            U.el('span', { class: 'cmp__mark', text: mark }),
            U.el('span', { class: 'cmp__word', text: ' ' + v })
          ])
        ]));
      });
      body.appendChild(row);
    });
    tb.appendChild(body);
    wrap.appendChild(tb);
    return wrap;
  }

  function pairBlock(p, c) {
    var box = U.el('div', { class: 'cmp__pair' });
    var grid = U.el('div', { class: 'cmp__pairgrid' });
    [['a', p.a, c.a.label], ['b', p.b, c.b.label]].forEach(function (x) {
      var cell = U.el('div', { class: 'cmp__cell cmp__cell--' + x[0] });
      cell.appendChild(U.el('span', { class: 'cmp__cellhead', text: x[2] }));
      cell.appendChild(KI.sentence.example(x[1], {}));
      grid.appendChild(cell);
    });
    box.appendChild(grid);
    if (p.why) box.appendChild(U.el('p', { class: 'example__note', html: KI.icons.html('bulb') + ' ' + U.esc(p.why) }));
    return box;
  }

  function view(id) {
    var frag = document.createDocumentFragment();

    if (!id) {
      frag.appendChild(U.el('div', { class: 'page-head' }, [
        U.el('p', { class: 'eyebrow', text: 'Karşılaştırma' }),
        U.el('h1', { text: 'Karışan zamanlar' }),
        U.el('p', { style: 'font-size:.84rem', text: 'Türkçe konuşanların en çok karıştırdığı ' + KI.compare.list.length + ' çift. Her sayfada iki zaman yan yana durur, farkı tek bakışta görünür.' })
      ]));
      var stack = U.el('div', { class: 'stack' });
      KI.compare.list.forEach(function (c) {
        var card = U.el('a', { class: 'card modecard', href: '#/karsilastir/' + c.id, 'data-sfx': 'nav' });
        card.appendChild(U.el('h3', { text: c.title, style: 'margin-bottom:.2em' }));
        card.appendChild(U.el('p', { class: 'soft', style: 'margin:0;font-size:.84rem', text: c.short }));
        stack.appendChild(card);
      });
      frag.appendChild(stack);
      return frag;
    }

    var c = KI.compare.get(id);
    if (!c) {
      frag.appendChild(U.el('div', { class: 'empty' }, [
        U.el('span', { class: 'empty__ico', html: KI.icons.html('compass') }),
        U.el('p', { text: 'Bu karşılaştırma bulunamadı.' }),
        U.el('a', { class: 'btn', href: '#/karsilastir', text: 'Listeye dön' })
      ]));
      return frag;
    }

    frag.appendChild(U.el('a', { class: 'crumb', href: '#/karsilastir', 'data-sfx': 'back', text: '← Karışan zamanlar' }));
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('h1', { text: c.title }),
      U.el('p', { html: c.intro })
    ]));

    frag.appendChild(U.el('div', { class: 'cmp__heads' }, [side(c.a, 'a'), side(c.b, 'b')]));

    var s1 = U.el('section', { class: 'section' });
    s1.appendChild(U.el('h2', { class: 'section__title', text: 'Hangisi ne zaman?' }));
    s1.appendChild(rulesTable(c));
    s1.appendChild(U.el('p', { class: 'soft', style: 'font-size:.82rem;margin:8px 0 0',
      html: '<b>A</b> = ' + U.esc(c.a.label) + ' &nbsp;·&nbsp; <b>B</b> = ' + U.esc(c.b.label) +
            ' &nbsp;·&nbsp; ✓ uygun · ✕ uygun değil · ~ olabilir' }));
    frag.appendChild(s1);

    var s2 = U.el('section', { class: 'section' });
    s2.appendChild(U.el('h2', { class: 'section__title', text: 'Aynı durum, iki cümle' }));
    /* Her girişte aynı sırayı görmemek için çiftler karıştırılır. */
    U.shuffle(c.pairs).forEach(function (p) { s2.appendChild(pairBlock(p, c)); });
    frag.appendChild(s2);

    if (c.quiz && c.quiz.length && KI.quiz) {
      var s3 = U.el('section', { class: 'section' });
      s3.appendChild(U.el('h2', { class: 'section__title', text: 'Ayırt edebiliyor musun?' }));
      /* Havuzdan her seferinde rastgele bir alt küme gösterilir. */
      var CQUIZ_N = Math.min(6, c.quiz.length);
      s3.appendChild(KI.quiz.widget(U.shuffle(c.quiz).slice(0, CQUIZ_N), {}));
      frag.appendChild(s3);
    }

    var idx = KI.compare.list.indexOf(c);
    var next = KI.compare.list[idx + 1];
    frag.appendChild(U.el('div', { class: 'pager' }, [
      U.el('a', { class: 'btn', href: '#/karsilastir', 'data-sfx': 'back' }, [U.el('span', { text: '← Tüm karşılaştırmalar' })]),
      next
        ? U.el('a', { class: 'btn btn--primary', href: '#/karsilastir/' + next.id, 'data-sfx': 'nav' }, [U.el('span', { text: next.title + ' →' })])
        : U.el('a', { class: 'btn btn--primary', href: '#/alistirma', 'data-sfx': 'nav' }, [U.el('span', { text: 'Alıştırmaya geç →' })])
    ]));
    return frag;
  }

  KI.viewCompare = { render: view };
})(window.KI);
