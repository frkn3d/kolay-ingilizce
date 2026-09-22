/* ============================================================
   Kolay İngilizce — practice.js
   Çoktan seçmeli motor + üç alıştırma modu.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  /* --------- soru üreticiler --------- */

  /* Rastgele 3 yanlış zaman adı seç */
  function otherTenses(t, k) {
    return U.shuffle(KI.tenses.list.filter(function (x) { return x.id !== t.id; })).slice(0, k || 3);
  }

  /* 1) İngilizce cümleyi gör, zamanını bul */
  function sentenceQuestions(count) {
    var pool = [];
    KI.tenses.list.forEach(function (t) {
      t.examples.forEach(function (ex) { pool.push({ t: t, ex: ex }); });
    });
    return U.shuffle(pool).slice(0, count).map(function (p) {
      var wrong = otherTenses(p.t, 3);
      var opts = U.shuffle([p.t].concat(wrong));
      return {
        kind: 'sentence',
        head: 'Bu cümle hangi zamanda?',
        sentence: p.ex.en,
        speak: p.ex.en,
        options: opts.map(function (o) { return o.en + ' · ' + o.tr; }),
        answer: opts.indexOf(p.t),
        why: p.ex.tr + '  →  ' + p.t.en + ' (' + p.t.tr + ')',
        link: '#/zaman/' + p.t.id
      };
    });
  }

  /* 2) Zaman çizgisini gör, zamanını bul */
  function timelineQuestions(count) {
    return U.shuffle(KI.tenses.list.slice()).slice(0, count).map(function (t) {
      var opts = U.shuffle([t].concat(otherTenses(t, 3)));
      return {
        kind: 'timeline',
        head: 'Bu çizgi hangi zamanı anlatıyor?',
        tense: t,
        options: opts.map(function (o) { return o.en + ' · ' + o.tr; }),
        answer: opts.indexOf(t),
        why: t.timeline.caption,
        link: '#/zaman/' + t.id
      };
    });
  }

  /* 3) Boşluk doldurma (elle yazılmış sorular) */
  function blankQuestions(count, tenseId) {
    var qs = [];
    KI.tenses.list.forEach(function (t) {
      if (tenseId && t.id !== tenseId) return;
      (t.quiz || []).forEach(function (q) {
        qs.push({
          kind: 'blank', head: 'Doğru seçeneği bul',
          sentence: q.q, options: q.options.slice(), answer: q.answer,
          why: q.why, link: '#/zaman/' + t.id, tenseName: t.en
        });
      });
    });
    qs = U.shuffle(qs);
    return count ? qs.slice(0, count) : qs;
  }

  /* --------- çoktan seçmeli bileşen --------- */
  function widget(rawQs, opts) {
    opts = opts || {};
    var qs = (rawQs || []).map(function (q) {
      if (q.kind) return q;
      /* zaman sayfasındaki basit sorular */
      return { kind: 'blank', head: 'Doğru seçeneği bul', sentence: q.q, options: q.options.slice(), answer: q.answer, why: q.why };
    });

    var box = U.el('div', { class: 'card' });
    var i = 0, correct = 0, answered = false;

    function finish() {
      U.clear(box);
      var pct = Math.round(correct / qs.length * 100);
      var mood = pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪';
      box.appendChild(U.el('h3', { text: mood + '  ' + correct + ' / ' + qs.length + ' doğru' }));
      box.appendChild(U.el('p', { class: 'soft', text: pct >= 80 ? 'Çok iyi! Bu zamanı kavramışsın.' : pct >= 50 ? 'Fena değil. Örneklere bir daha göz at.' : 'Acele etme; önce mantık bölümünü tekrar oku.' }));
      if (opts.tenseId) KI.store.saveScore(opts.tenseId, correct, qs.length);
      var again = U.el('button', { class: 'btn btn--primary', type: 'button', html: '↻ Tekrar dene' });
      again.addEventListener('click', function () {
        i = 0; correct = 0; KI.audio.play('tap');
        qs = U.shuffle(qs); paint();
      });
      var row = U.el('div', { class: 'row', style: 'margin-top:10px' }, [again]);
      if (opts.onFinish) row.appendChild(opts.onFinish());
      box.appendChild(row);
      KI.audio.play('finish');
    }

    function paint() {
      if (i >= qs.length) return finish();
      answered = false;
      var q = qs[i];
      U.clear(box);

      box.appendChild(U.el('p', { class: 'eyebrow', text: (i + 1) + ' / ' + qs.length + ' · ' + q.head }));

      if (q.kind === 'timeline') {
        var tl = U.el('div', { class: 'tl-wrap', style: 'margin-bottom:12px' });
        tl.appendChild(KI.timeline.render(q.tense));
        box.appendChild(tl);
      } else if (q.sentence) {
        var qp = U.el('div', { class: 'quiz__q' });
        if (q.kind === 'sentence') {
          qp.appendChild(KI.sentence.render(q.sentence, []));
          var say = U.el('button', { class: 'btn btn--sm', type: 'button', html: '🔊 Dinle' });
          say.addEventListener('click', function () { KI.audio.play('tap'); KI.speech.speak(q.speak); });
          qp.appendChild(say);
        } else {
          qp.appendChild(U.el('span', { text: q.sentence }));
        }
        box.appendChild(qp);
      }

      var list = U.el('div', { class: 'quiz__opts' });
      q.options.forEach(function (o, k) {
        var b = U.el('button', { class: 'opt', type: 'button' }, [
          U.el('span', { class: 'opt__key', text: 'ABCD'.charAt(k) }),
          U.el('span', { text: o })
        ]);
        b.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          var ok = (k === q.answer);
          if (ok) { correct++; b.classList.add('is-right'); KI.audio.play('correct'); }
          else {
            b.classList.add('is-wrong');
            list.children[q.answer].classList.add('is-right');
            KI.audio.play('wrong');
          }
          U.qsa('.opt', list).forEach(function (x) { x.disabled = true; });

          var fb = U.el('div', { class: 'quiz__fb callout ' + (ok ? 'callout--tip' : 'callout--warn') });
          fb.appendChild(U.el('b', { class: 'callout__t', text: ok ? '✓ Doğru' : '✕ Doğrusu: ' + q.options[q.answer] }));
          if (q.why) fb.appendChild(U.el('span', { text: q.why }));
          if (q.link) {
            fb.appendChild(U.el('div', { style: 'margin-top:8px' }, [
              U.el('a', { class: 'btn btn--sm', href: q.link, 'data-sfx': 'nav', text: 'Konuya git →' })
            ]));
          }
          box.appendChild(fb);

          var nextBtn = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:12px',
            html: (i + 1 >= qs.length ? 'Sonucu gör' : 'Sonraki soru →') });
          nextBtn.addEventListener('click', function () { i++; KI.audio.play('nav'); paint(); });
          box.appendChild(nextBtn);
        });
        list.appendChild(b);
      });
      box.appendChild(list);
    }

    paint();
    return box;
  }

  /* --------- alıştırma sayfası --------- */
  var MODES = [
    { id: 'karisik', ico: '🎲', t: 'Karışık', d: 'Üç türden de sorular gelir.',
      make: function () { return U.shuffle(sentenceQuestions(5).concat(timelineQuestions(3), blankQuestions(4))); } },
    { id: 'cumle', ico: '💬', t: 'Cümleden zamanı bul', d: 'İngilizce cümleyi oku, hangi zaman olduğunu seç.',
      make: function () { return sentenceQuestions(10); } },
    { id: 'cizgi', ico: '📈', t: 'Çizgiden zamanı bul', d: 'Zaman çizgisine bak, hangi zaman olduğunu seç.',
      make: function () { return timelineQuestions(8); } },
    { id: 'bosluk', ico: '✏️', t: 'Boşluğu doldur', d: 'Cümledeki boşluğa doğru yapıyı yerleştir.',
      make: function () { return blankQuestions(12); } }
  ];

  function view(modeId) {
    var frag = document.createDocumentFragment();
    var mode = MODES.filter(function (m) { return m.id === modeId; })[0];

    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Alıştırma' }),
      U.el('h1', { text: mode ? mode.t : 'Kendini dene' }),
      U.el('p', { text: mode ? mode.d : 'Bir mod seç; her yanlıştan sonra doğrusu ve nedeni gösterilir.' })
    ]));

    var row = U.el('div', { class: 'pill-row' });
    MODES.forEach(function (m) {
      var a = U.el('a', {
        class: 'btn btn--sm' + (mode && mode.id === m.id ? ' btn--primary' : ''),
        href: '#/alistirma/' + m.id, 'data-sfx': 'nav', html: m.ico + ' ' + m.t
      });
      row.appendChild(a);
    });
    frag.appendChild(row);

    if (!mode) {
      var grid = U.el('div', { class: 'stack' });
      MODES.forEach(function (m) {
        var card = U.el('a', { class: 'card', href: '#/alistirma/' + m.id, 'data-sfx': 'nav',
          style: 'text-decoration:none;color:inherit;display:block' });
        card.appendChild(U.el('h3', { html: m.ico + '  ' + m.t }));
        card.appendChild(U.el('p', { class: 'soft', text: m.d, style: 'margin:0' }));
        grid.appendChild(card);
      });
      frag.appendChild(grid);

      var stats = U.el('section', { class: 'section' });
      stats.appendChild(U.el('h2', { class: 'section__title', text: 'Sonuçların' }));
      var any = false, list = U.el('div', { class: 'wlist' });
      KI.tenses.list.forEach(function (t) {
        var s = KI.store.getScore(t.id);
        if (!s) return;
        any = true;
        list.appendChild(U.el('div', { class: 'wrow' }, [
          U.el('div', {}, [
            U.el('div', { class: 'wrow__en', text: t.en }),
            U.el('div', { class: 'wrow__tr', text: t.tr })
          ]),
          U.el('span', { class: 'quiz__score', text: s.best + ' / ' + s.total })
        ]));
      });
      stats.appendChild(any ? list : U.el('p', { class: 'soft', text: 'Henüz test çözmedin. Bir mod seçerek başla.' }));
      frag.appendChild(stats);
      return frag;
    }

    var qs = mode.make();
    if (!qs.length) {
      frag.appendChild(U.el('p', { class: 'empty', text: 'Bu modda soru bulunamadı.' }));
      return frag;
    }
    frag.appendChild(widget(qs, {
      onFinish: function () {
        return U.el('a', { class: 'btn', href: '#/alistirma', 'data-sfx': 'back', text: '← Modlara dön' });
      }
    }));
    return frag;
  }

  KI.quiz = { widget: widget, modes: MODES };
  KI.viewPractice = { render: view };
})(window.KI);
