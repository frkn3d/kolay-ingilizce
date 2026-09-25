/* ============================================================
   Gramer Atlası — tense.js
   Tek bir zamanın sayfası: çizgi, mantık, formül, örnekler, hatalar, test.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  function head(t) {
    var box = U.el('div', { class: 'tense-head' });
    var top = U.el('div', { class: 'tense-head__top' });

    var left = U.el('div', { style: 'min-width:0' });
    var gr = KI.tenses.groups.filter(function (g) { return g.id === t.group; })[0];
    var asp = KI.tenses.aspects.filter(function (a) { return a.id === t.aspect; })[0];
    left.appendChild(U.el('div', { class: 'row', style: 'gap:6px' }, [
      U.el('span', { class: 'badge badge--' + t.group, text: gr ? gr.tr : t.group }),
      U.el('span', { class: 'badge', text: asp ? asp.tr : t.aspect })
    ]));
    left.appendChild(U.el('h1', { text: t.en }));
    left.appendChild(U.el('p', { class: 'tense-head__tr', html: '<b>' + U.esc(t.tr) + '</b> — ' + U.esc(t.tagline) }));
    top.appendChild(left);

    var btn = U.el('button', { class: 'btn btn--sm', type: 'button' });
    function paint() {
      var on = KI.store.isLearned(t.id);
      btn.innerHTML = KI.icons.html(on ? 'check-circle' : 'circle') + ' ' + (on ? 'Öğrendim' : 'Öğrendim işaretle');
      btn.classList.toggle('btn--primary', on);
    }
    paint();
    btn.addEventListener('click', function () {
      var on = KI.store.toggleLearned(t.id);
      KI.audio.play(on ? 'star' : 'toggle');
      U.toast(on ? 'Öğrenildi olarak işaretlendi' : 'İşaret kaldırıldı');
      paint();
    });
    top.appendChild(btn);
    box.appendChild(top);
    return box;
  }

  function formula(t) {
    var card = U.el('section', { class: 'card' });
    card.appendChild(U.el('h2', { class: 'card__title', html: KI.icons.html('formula') + ' Formül' }));
    var f = U.el('div', { class: 'formula' });
    [['+', t.formula.pos, ''], ['−', t.formula.neg, ' formula__row--neg'], ['?', t.formula.que, ' formula__row--que']]
      .forEach(function (r) {
        f.appendChild(U.el('div', { class: 'formula__row' + r[2] }, [
          U.el('span', { class: 'formula__sign', text: r[0] }),
          U.el('span', { class: 'formula__txt', html: r[1] })
        ]));
      });
    card.appendChild(f);
    if (t.keyRule) {
      card.appendChild(U.el('div', { class: 'callout callout--warn' }, [
        U.el('b', { class: 'callout__t', text: 'Altın kural' }),
        U.el('span', { html: t.keyRule })
      ]));
    }
    return card;
  }

  function logic(t) {
    var card = U.el('section', { class: 'card' });
    card.appendChild(U.el('h2', { class: 'card__title', html: KI.icons.html('logic') + ' Mantığı' }));
    var ul = U.el('ul', { style: 'margin:0 0 4px;padding-left:20px' });
    t.logic.forEach(function (l) { ul.appendChild(U.el('li', { html: l, style: 'margin-bottom:.4em' })); });
    card.appendChild(ul);

    card.appendChild(U.el('p', { class: 'eyebrow', text: 'Bu kelimeleri görürsen bu zamanı düşün', style: 'margin-top:12px' }));
    var chips = U.el('div');
    t.signals.forEach(function (s) {
      var m = s.match(/^(.*?)\s*\((.*)\)$/);
      chips.appendChild(U.el('span', { class: 'chip', html: m ? '<b>' + U.esc(m[1]) + '</b> · ' + U.esc(m[2]) : U.esc(s) }));
    });
    card.appendChild(chips);
    return card;
  }

  function examples(t) {
    var sec = U.el('section', { class: 'section' });
    sec.appendChild(U.el('h2', { class: 'section__title' }, [
      U.el('span', { class: 'num', text: '★' }), document.createTextNode('Örnekler')
    ]));
    sec.appendChild(U.el('p', { class: 'soft', style: 'margin-top:-6px;font-size:.9rem',
      html: 'Yeşil kelimeler bu zamanın yapı taşlarıdır. Herhangi bir kelimeye dokunarak anlamını görebilirsin.' }));

    /* Her girişte aynı örnekleri görmemek için havuzdan rastgele bir sıra
       çekilir; "hepsini dinle" de aynı sırayı okur, tutarlı olsun diye. */
    var pool = U.shuffle(t.examples);

    var allBtn = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('speaker') + ' Hepsini sırayla dinle' });
    allBtn.addEventListener('click', function () {
      KI.audio.play('tap');
      var i = 0;
      (function next() {
        if (i >= pool.length) return;
        KI.speech.speak(pool[i].en, { onend: function () { i++; setTimeout(next, 420); } });
      })();
    });
    sec.appendChild(U.el('div', { class: 'row', style: 'margin-bottom:12px' }, [allBtn]));

    var FIRST = 4;
    pool.slice(0, FIRST).forEach(function (ex) {
      sec.appendChild(KI.sentence.example(ex, { accent: true }));
    });

    var rest = pool.slice(FIRST);
    if (rest.length) {
      var box = U.el('div', { hidden: true });
      rest.forEach(function (ex) { box.appendChild(KI.sentence.example(ex, { accent: true })); });
      var more = U.el('button', { class: 'btn btn--block', type: 'button',
        html: '↓ ' + rest.length + ' örnek daha göster' });
      more.addEventListener('click', function () {
        box.hidden = !box.hidden;
        KI.audio.play(box.hidden ? 'close' : 'reveal');
        more.innerHTML = box.hidden ? '↓ ' + rest.length + ' örnek daha göster' : '↑ Fazla örnekleri gizle';
      });
      sec.appendChild(box);
      sec.appendChild(more);
    }
    return sec;
  }

  function mistakes(t) {
    if (!t.mistakes || !t.mistakes.length) return null;
    var sec = U.el('section', { class: 'section' });
    sec.appendChild(U.el('h2', { class: 'section__title' }, [
      U.el('span', { class: 'num', text: '!' }), document.createTextNode('Sık yapılan hatalar')
    ]));
    var vs = U.el('div', { class: 'vs' });
    t.mistakes.forEach(function (m) {
      var row = U.el('div', { class: 'vs__row' });
      row.appendChild(U.el('div', { class: 'vs__cell vs__cell--bad' }, [
        U.el('span', { class: 'vs__tag', text: '✕ yanlış' }), U.el('span', { text: m.bad })
      ]));
      row.appendChild(U.el('div', { class: 'vs__cell vs__cell--good' }, [
        U.el('span', { class: 'vs__tag', text: '✓ doğru' }), U.el('span', { text: m.good })
      ]));
      vs.appendChild(row);
      vs.appendChild(U.el('p', { class: 'example__note', html: KI.icons.html('bulb') + ' ' + U.esc(m.why), style: 'margin:0 0 6px' }));
    });
    sec.appendChild(vs);
    return sec;
  }

  function pager(t) {
    var list = KI.tenses.list;
    var prev = list[t.index - 1], next = list[t.index + 1];
    var row = U.el('div', { class: 'pager' });
    row.appendChild(prev
      ? U.el('a', { class: 'btn', href: '#/zaman/' + prev.id, 'data-sfx': 'back' }, [U.el('span', { text: '← ' + prev.en })])
      : U.el('a', { class: 'btn', href: '#/harita', 'data-sfx': 'back' }, [U.el('span', { text: '← Harita' })]));
    row.appendChild(next
      ? U.el('a', { class: 'btn btn--primary', href: '#/zaman/' + next.id, 'data-sfx': 'nav' }, [U.el('span', { text: next.en + ' →' })])
      : U.el('a', { class: 'btn btn--primary', href: '#/alistirma', 'data-sfx': 'nav' }, [U.el('span', { text: 'Alıştırmaya geç →' })]));
    return row;
  }

  function view(id) {
    var t = KI.tenses.get(id);
    var frag = document.createDocumentFragment();
    if (!t) {
      frag.appendChild(U.el('div', { class: 'empty' }, [
        U.el('span', { class: 'empty__ico', html: KI.icons.html('compass') }),
        U.el('p', { text: 'Bu zaman bulunamadı.' }),
        U.el('a', { class: 'btn', href: '#/harita', text: 'Haritaya dön' })
      ]));
      return frag;
    }
    KI.store.set('lastTense', t.id);

    frag.appendChild(U.el('a', { class: 'crumb', href: '#/harita', 'data-sfx': 'back', text: '← Zaman haritası' }));
    frag.appendChild(head(t));
    frag.appendChild(KI.timeline.box(t));
    frag.appendChild(U.el('div', { style: 'height:16px' }));
    frag.appendChild(logic(t));
    frag.appendChild(formula(t));
    frag.appendChild(examples(t));
    var m = mistakes(t);
    if (m) frag.appendChild(m);

    if (t.quiz && t.quiz.length && KI.quiz) {
      var sec = U.el('section', { class: 'section' });
      sec.appendChild(U.el('h2', { class: 'section__title' }, [
        U.el('span', { class: 'num', text: '?' }), document.createTextNode('Kendini dene')
      ]));
      /* Havuzda çok daha fazla soru var; her girişte rastgele bir alt küme
         gösterilir ki hep aynı soru turu tekrarlanmasın. */
      var QUIZ_N = Math.min(6, t.quiz.length);
      sec.appendChild(KI.quiz.widget(U.shuffle(t.quiz).slice(0, QUIZ_N), { tenseId: t.id }));
      frag.appendChild(sec);
    }

    /* bu zamanla karışan başka zaman varsa yolu göster */
    if (KI.compare) {
      var cmps = KI.compare.forTense(t.id);
      if (cmps.length) {
        var cs = U.el('section', { class: 'section' });
        cs.appendChild(U.el('h2', { class: 'section__title' }, [
          U.el('span', { class: 'num', text: '↔' }), document.createTextNode('Bununla karışır')
        ]));
        cmps.forEach(function (c) {
          var card = U.el('a', { class: 'card modecard', href: '#/karsilastir/' + c.id, 'data-sfx': 'nav' });
          card.appendChild(U.el('h3', { text: c.title, style: 'margin-bottom:.2em' }));
          card.appendChild(U.el('p', { class: 'soft', style: 'margin:0;font-size:.84rem', text: c.short }));
          cs.appendChild(card);
        });
        frag.appendChild(cs);
      }
    }

    frag.appendChild(pager(t));
    return frag;
  }

  KI.viewTense = { render: view };
})(window.KI);
