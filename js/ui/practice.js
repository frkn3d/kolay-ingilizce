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
        var isPrompt = (q.kind === 'word' || q.kind === 'verb');
        var qp = U.el('div', { class: 'quiz__q' + (isPrompt ? ' quiz__q--big' : '') });
        if (q.kind === 'sentence') {
          qp.appendChild(KI.sentence.render(q.sentence, []));
        } else {
          qp.appendChild(U.el('span', { text: q.sentence }));
        }
        if (q.speak) {
          var say = U.el('button', { class: 'btn btn--sm', type: 'button', html: '🔊 Dinle', style: isPrompt ? 'margin-top:8px' : '' });
          say.addEventListener('click', function () { KI.audio.play('tap'); KI.speech.speak(q.speak, isPrompt ? { rate: 0.7 } : null); });
          qp.appendChild(say);
        }
        box.appendChild(qp);
      }

      var list = U.el('div', { class: 'quiz__opts' });
      q.options.forEach(function (o, k) {
        var b = U.el('button', { class: 'opt', type: 'button' }, [
          U.el('span', { class: 'opt__key', text: 'ABCD'.charAt(k) }),
          U.el('span', { class: 'opt__txt', text: o })
        ]);
        b.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          var ok = (k === q.answer);
          var rightBtn = list.children[q.answer];

          /* Doğru şık her zaman işaretlenir; seçilen şık ayrıca etiketlenir.
             Renk tek başına yeterli olmasın diye ✓ / ✕ işareti de konur. */
          rightBtn.classList.add('is-right');
          rightBtn.querySelector('.opt__key').textContent = '✓';
          if (!ok) {
            b.classList.add('is-wrong');
            b.querySelector('.opt__key').textContent = '✕';
          }
          b.appendChild(U.el('span', { class: 'opt__tag', text: 'senin cevabın' }));

          U.qsa('.opt', list).forEach(function (x, idx) {
            x.disabled = true;
            if (idx !== k && idx !== q.answer) x.classList.add('is-dim');
          });

          if (ok) { correct++; KI.audio.play('correct'); }
          else { KI.audio.play('wrong'); }

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

  /* 4) Kelime bilgisi: İngilizce <-> Türkçe */
  function wordQuestions(count) {
    var dict = KI.glossary.dict;
    var keys = Object.keys(dict).filter(function (k) {
      var d = dict[k];
      return d.tr && k.length > 2 && k.indexOf(' ') < 0 && d.pos !== 'özel isim' && d.pos !== 'artikel';
    });
    var picked = U.shuffle(keys).slice(0, count);
    return picked.map(function (k, i) {
      var d = dict[k];
      var wrongs = U.shuffle(keys.filter(function (x) {
        return x !== k && dict[x].tr !== d.tr && (dict[x].pos === d.pos || Math.random() < .3);
      })).slice(0, 3).map(function (x) { return dict[x]; });
      var all = U.shuffle([d].concat(wrongs));
      var enToTr = (i % 2 === 0);
      return {
        kind: 'word',
        head: enToTr ? 'Bu kelime ne demek?' : 'Bunun İngilizcesi hangisi?',
        sentence: enToTr ? d.en : d.tr,
        speak: enToTr ? d.en : null,
        options: all.map(function (o) { return enToTr ? o.tr : o.en; }),
        answer: all.indexOf(d),
        why: d.en + ' = ' + d.tr + (d.pos ? '  (' + d.pos + ')' : '')
      };
    });
  }

  /* 5) Düzensiz fiillerin hâlleri */
  function verbQuestions(count) {
    var verbs = KI.glossary.irregularVerbs.filter(function (v) { return v.v2 !== v.v1 || v.v3 !== v.v1; });
    return U.shuffle(verbs).slice(0, count).map(function (v) {
      var askV3 = Math.random() < .5;
      var right = askV3 ? v.v3 : v.v2;
      var wrongs = U.shuffle(verbs.filter(function (x) {
        return x.v1 !== v.v1 && (askV3 ? x.v3 : x.v2) !== right;
      })).slice(0, 3).map(function (x) { return askV3 ? x.v3 : x.v2; });
      var all = U.shuffle([right].concat(wrongs));
      return {
        kind: 'verb',
        head: askV3 ? '3. hâli (V3) hangisi?' : '2. hâli (geçmiş) hangisi?',
        sentence: v.v1 + '  ( ' + v.tr + ' )',
        speak: v.v1 + ', ' + v.v2 + ', ' + v.v3,
        options: all,
        answer: all.indexOf(right),
        why: v.v1 + ' → ' + v.v2 + ' → ' + v.v3 + '  (' + v.tr + ')'
      };
    });
  }

  /* 6) Cümle kurma için malzeme */
  function buildItems(count) {
    var pool = [];
    KI.tenses.list.forEach(function (t) {
      t.examples.forEach(function (ex) {
        var n = ex.en.split(/\s+/).length;
        if (n >= 4 && n <= 10) pool.push({ en: ex.en, tr: ex.tr, tense: t });
      });
    });
    return U.shuffle(pool).slice(0, count);
  }

  /* --------- cümle kurma bileşeni --------- */
  function builder(items, opts) {
    opts = opts || {};
    var box = U.el('div', { class: 'card' });
    var i = 0, correct = 0;

    function finish() {
      U.clear(box);
      var pct = Math.round(correct / items.length * 100);
      box.appendChild(U.el('h3', { text: (pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪') + '  ' + correct + ' / ' + items.length + ' doğru' }));
      box.appendChild(U.el('p', { class: 'soft', text: 'Cümle kurmak, kelime sırasını öğrenmenin en hızlı yoludur.' }));
      var again = U.el('button', { class: 'btn btn--primary', type: 'button', html: '↻ Tekrar dene' });
      again.addEventListener('click', function () { i = 0; correct = 0; items = U.shuffle(items); KI.audio.play('tap'); paint(); });
      var row = U.el('div', { class: 'row', style: 'margin-top:10px' }, [again]);
      if (opts.onFinish) row.appendChild(opts.onFinish());
      box.appendChild(row);
      KI.audio.play('finish');
    }

    function paint() {
      if (i >= items.length) return finish();
      var it = items[i];
      var target = it.en.replace(/\s+/g, ' ').trim();
      var words = target.split(' ');
      U.clear(box);

      box.appendChild(U.el('p', { class: 'eyebrow', text: (i + 1) + ' / ' + items.length + ' · Kelimelere dokunup cümleyi kur' }));
      box.appendChild(U.el('p', { class: 'quiz__q', html: '🇹🇷 ' + U.esc(it.tr) }));

      var line = U.el('div', { class: 'builder__line' });
      var pool = U.el('div', { class: 'builder__pool' });
      var placed = [];
      var check = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:12px', html: '✓ Kontrol et' });

      function refresh() {
        U.clear(line);
        if (!placed.length) line.appendChild(U.el('span', { class: 'builder__hint', text: 'Cümlen burada oluşacak' }));
        placed.forEach(function (p, idx) {
          var chip = U.el('button', { class: 'wchip wchip--placed', type: 'button', text: p.w });
          chip.addEventListener('click', function () {
            placed.splice(idx, 1);
            p.node.hidden = false;
            KI.audio.play('tap');
            refresh();
          });
          line.appendChild(chip);
        });
        check.disabled = placed.length !== words.length;
      }

      U.shuffle(words.map(function (w, k) { return { w: w, k: k }; })).forEach(function (item) {
        var chip = U.el('button', { class: 'wchip', type: 'button', text: item.w });
        item.node = chip;
        chip.addEventListener('click', function () {
          chip.hidden = true;
          placed.push(item);
          KI.audio.play('word');
          refresh();
        });
        pool.appendChild(chip);
      });

      box.appendChild(line);
      box.appendChild(pool);
      box.appendChild(check);
      refresh();

      check.addEventListener('click', function () {
        var answer = placed.map(function (p) { return p.w; }).join(' ');
        var ok = answer.toLowerCase() === target.toLowerCase();
        if (ok) correct++;
        KI.audio.play(ok ? 'correct' : 'wrong');
        check.disabled = true;
        U.qsa('.wchip', box).forEach(function (c) { c.disabled = true; });
        line.classList.add(ok ? 'is-right' : 'is-wrong');

        var fb = U.el('div', { class: 'quiz__fb callout ' + (ok ? 'callout--tip' : 'callout--warn') });
        fb.appendChild(U.el('b', { class: 'callout__t', text: ok ? '✓ Doğru kurdun' : '✕ Doğrusu şöyle:' }));
        fb.appendChild(U.el('div', { style: 'font-family:var(--font-display);font-size:1.05rem', text: target }));
        var actions = U.el('div', { class: 'row', style: 'margin-top:8px' });
        var say = U.el('button', { class: 'btn btn--sm', type: 'button', html: '🔊 Dinle' });
        say.addEventListener('click', function () { KI.audio.play('tap'); KI.speech.speak(target); });
        actions.appendChild(say);
        if (it.tense) {
          actions.appendChild(U.el('a', { class: 'btn btn--sm', href: '#/zaman/' + it.tense.id, 'data-sfx': 'nav', text: it.tense.en + ' →' }));
        }
        fb.appendChild(actions);
        box.appendChild(fb);

        var next = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:12px',
          html: (i + 1 >= items.length ? 'Sonucu gör' : 'Sonraki cümle →') });
        next.addEventListener('click', function () { i++; KI.audio.play('nav'); paint(); });
        box.appendChild(next);
      });
    }

    paint();
    return box;
  }

  /* --------- alıştırma sayfası --------- */
  var MODES = [
    { id: 'karisik', ico: '🎲', t: 'Karışık', d: 'Her türden soru: cümle, çizgi, boşluk, kelime, fiil.',
      make: function () { return U.shuffle(sentenceQuestions(5).concat(timelineQuestions(3), blankQuestions(5), wordQuestions(4), verbQuestions(3))); } },
    { id: 'cumle', ico: '💬', t: 'Cümleden zamanı bul', d: 'İngilizce cümleyi oku, hangi zaman olduğunu seç.',
      make: function () { return sentenceQuestions(12); } },
    { id: 'cizgi', ico: '📈', t: 'Çizgiden zamanı bul', d: 'Zaman çizgisine bak, hangi zaman olduğunu seç.',
      make: function () { return timelineQuestions(12); } },
    { id: 'bosluk', ico: '✏️', t: 'Boşluğu doldur', d: 'Cümledeki boşluğa doğru yapıyı yerleştir.',
      make: function () { return blankQuestions(15); } },
    { id: 'kur', ico: '🧩', t: 'Cümleyi kur', d: 'Türkçesi verilir; kelimelere dokunarak İngilizce cümleyi sen kur.',
      kind: 'builder', make: function () { return buildItems(10); } },
    { id: 'kelime', ico: '📖', t: 'Kelime bilgisi', d: 'Sözlükteki kelimeleri iki yönlü çalış: İngilizce ↔ Türkçe.',
      make: function () { return wordQuestions(15); } },
    { id: 'fiil', ico: '🔁', t: 'Düzensiz fiiller', d: 'Fiilin 2. ve 3. hâlini bul. Zamanların yapı taşı budur.',
      make: function () { return verbQuestions(15); } }
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
    var opts = {
      onFinish: function () {
        return U.el('a', { class: 'btn', href: '#/alistirma', 'data-sfx': 'back', text: '← Modlara dön' });
      }
    };
    frag.appendChild(mode.kind === 'builder' ? builder(qs, opts) : widget(qs, opts));
    return frag;
  }

  KI.quiz = { widget: widget, builder: builder, modes: MODES };
  KI.viewPractice = { render: view };
})(window.KI);
