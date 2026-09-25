/* ============================================================
   Gramer Atlası — practice.js
   Çoktan seçmeli motor + üç alıştırma modu.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  /* --------- soru üreticiler --------- */

  /* "Sadece öğrendiğim zamanlar" açıksa ve en az bir zaman işaretliyse,
     soru üretimi yalnız o zamanlardan yapılır. Hiçbiri işaretli değilse
     (kör noktaya düşmemek için) tüm zamanlar kullanılır. */
  function activeTenses() {
    if (!KI.store.get('onlyLearned')) return KI.tenses.list;
    var learned = KI.tenses.list.filter(function (t) { return KI.store.isLearned(t.id); });
    return learned.length ? learned : KI.tenses.list;
  }

  /* Rastgele 3 yanlış zaman adı seç */
  function otherTenses(t, k) {
    return U.shuffle(KI.tenses.list.filter(function (x) { return x.id !== t.id; })).slice(0, k || 3);
  }

  /* 1) İngilizce cümleyi gör, zamanını bul */
  function sentenceQuestions(count) {
    var pool = [];
    activeTenses().forEach(function (t) {
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
        link: '#/zaman/' + p.t.id,
        tenseId: p.t.id
      };
    });
  }

  /* 2) Zaman çizgisini gör, zamanını bul */
  function timelineQuestions(count) {
    return U.shuffle(activeTenses().slice()).slice(0, count).map(function (t) {
      var opts = U.shuffle([t].concat(otherTenses(t, 3)));
      return {
        kind: 'timeline',
        head: 'Bu çizgi hangi zamanı anlatıyor?',
        tense: t,
        options: opts.map(function (o) { return o.en + ' · ' + o.tr; }),
        answer: opts.indexOf(t),
        why: t.timeline.caption,
        link: '#/zaman/' + t.id,
        tenseId: t.id
      };
    });
  }

  /* 3) Boşluk doldurma (elle yazılmış sorular) */
  function blankQuestions(count, tenseId) {
    var qs = [];
    (tenseId ? KI.tenses.list : activeTenses()).forEach(function (t) {
      if (tenseId && t.id !== tenseId) return;
      (t.quiz || []).forEach(function (q) {
        qs.push({
          kind: 'blank', head: 'Doğru seçeneği bul',
          sentence: q.q, options: q.options.slice(), answer: q.answer,
          why: q.why, link: '#/zaman/' + t.id, tenseName: t.en,
          tenseId: t.id, blank: q
        });
      });
    });
    qs = U.shuffle(qs);
    return count ? qs.slice(0, count) : qs;
  }

  /* Sözlükten tek bir kelime sorusu üretir */
  function makeWordQ(d, enToTr) {
    var dict = KI.glossary.dict;
    var keys = Object.keys(dict).filter(function (k) {
      var x = dict[k];
      return x.tr && k.length > 2 && k.indexOf(' ') < 0 && x.pos !== 'özel isim';
    });
    var wrongs = U.shuffle(keys.filter(function (x) {
      return dict[x].tr !== d.tr && (dict[x].pos === d.pos || Math.random() < .3);
    })).slice(0, 3).map(function (x) { return dict[x]; });
    var all = U.shuffle([d].concat(wrongs));
    return {
      kind: 'word',
      head: enToTr ? 'Bu kelime ne demek?' : 'Bunun İngilizcesi hangisi?',
      sentence: enToTr ? d.en : d.tr,
      speak: enToTr ? d.en : null,
      options: all.map(function (o) { return enToTr ? o.tr : o.en; }),
      answer: all.indexOf(d),
      why: d.en + ' = ' + d.tr + (d.pos ? '  (' + d.pos + ')' : ''),
      word: { en: d.en, tr: d.tr }
    };
  }

  /* 7) Zorlandıklarım: yanlış yapılanlar ve zayıf zamanlar */
  function troubleQuestions(count) {
    var out = [];

    KI.store.wrongQuestions().forEach(function (w) {
      out.push({
        kind: 'blank', head: 'Bunu daha önce yanlış yapmıştın',
        sentence: w.q, options: w.options.slice(), answer: w.answer, why: w.why,
        link: w.tenseId ? '#/zaman/' + w.tenseId : null,
        tenseId: w.tenseId,
        blank: { q: w.q, options: w.options, answer: w.answer, why: w.why }
      });
    });

    KI.store.wrongWordList().forEach(function (w, i) {
      var d = KI.glossary.dict[String(w.en).toLowerCase()] || { en: w.en, tr: w.tr, pos: '' };
      var q = makeWordQ(d, i % 2 === 0);
      q.head = 'Bu kelimeyi karıştırmıştın';
      out.push(q);
    });

    var weak = KI.store.weakTenses(3).map(function (w) { return w.id; });
    if (weak.length) {
      var pool = [];
      KI.tenses.list.forEach(function (t) {
        if (weak.indexOf(t.id) < 0) return;
        t.examples.forEach(function (ex) { pool.push({ t: t, ex: ex }); });
      });
      U.shuffle(pool).slice(0, 6).forEach(function (p) {
        var wrong = otherTenses(p.t, 3);
        var opts = U.shuffle([p.t].concat(wrong));
        out.push({
          kind: 'sentence', head: 'Zorlandığın zamanlardan: bu cümle hangi zamanda?',
          sentence: p.ex.en, speak: p.ex.en,
          options: opts.map(function (o) { return o.en + ' · ' + o.tr; }),
          answer: opts.indexOf(p.t),
          why: p.ex.tr + '  →  ' + p.t.en + ' (' + p.t.tr + ')',
          link: '#/zaman/' + p.t.id, tenseId: p.t.id
        });
      });
    }

    return U.shuffle(out).slice(0, count || 12);
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
    var missed = {};   /* bu oturumda hangi zamanda kaç yanlış */

    function finish() {
      U.clear(box);
      var pct = Math.round(correct / qs.length * 100);
      var mood = KI.icons.html(pct >= 80 ? 'trophy' : pct >= 50 ? 'thumbsup' : 'sprout');
      box.appendChild(U.el('h3', { html: mood + '  ' + correct + ' / ' + qs.length + ' doğru' }));
      box.appendChild(U.el('p', { class: 'soft', text: pct >= 80 ? 'Çok iyi! Bu zamanı kavramışsın.' : pct >= 50 ? 'Fena değil. Örneklere bir daha göz at.' : 'Acele etme; önce mantık bölümünü tekrar oku.' }));
      if (opts.tenseId) KI.store.saveScore(opts.tenseId, correct, qs.length);
      KI.store.recordQuizResult(correct, qs.length);

      /* Sıradaki adım önerisi */
      var worst = null, worstN = 0;
      Object.keys(missed).forEach(function (id) { if (missed[id] > worstN) { worstN = missed[id]; worst = id; } });
      var tip = U.el('div', { class: 'callout callout--tip', style: 'margin-top:14px' });
      tip.appendChild(U.el('b', { class: 'callout__t', text: 'Şimdi ne yapmalıyım?' }));
      if (worst && KI.tenses.get(worst)) {
        var wt = KI.tenses.get(worst);
        tip.appendChild(U.el('span', { text: 'En çok ' + wt.en + ' (' + wt.tr + ') sorularında zorlandın. Önce oranın mantığını bir daha oku.' }));
        tip.appendChild(U.el('div', { class: 'row', style: 'margin-top:8px' }, [
          U.el('a', { class: 'btn btn--sm', href: '#/zaman/' + wt.id, 'data-sfx': 'nav', text: wt.en + ' konusuna git →' }),
          U.el('a', { class: 'btn btn--sm', href: '#/alistirma/zorlandiklarim', 'data-sfx': 'nav', html: KI.icons.html('flag') + ' Zorlandıklarımı çöz' })
        ]));
      } else if (KI.store.troubleCount() > 0) {
        tip.appendChild(U.el('span', { text: 'Bu turda hata yapmadın. Geçmişte zorlandığın sorular birikmiş durumda; onları temizlemek iyi olur.' }));
        tip.appendChild(U.el('div', { class: 'row', style: 'margin-top:8px' }, [
          U.el('a', { class: 'btn btn--sm', href: '#/alistirma/zorlandiklarim', 'data-sfx': 'nav', html: KI.icons.html('flag') + ' Zorlandıklarımı çöz' })
        ]));
      } else {
        tip.appendChild(U.el('span', { text: 'Hata listen temiz. Yeni bir mod deneyebilir ya da henüz öğrenmediğin bir zamana geçebilirsin.' }));
        var nextT = KI.tenses.list.filter(function (t) { return !KI.store.isLearned(t.id); })[0];
        if (nextT) {
          tip.appendChild(U.el('div', { class: 'row', style: 'margin-top:8px' }, [
            U.el('a', { class: 'btn btn--sm', href: '#/zaman/' + nextT.id, 'data-sfx': 'nav', text: 'Sıradaki: ' + nextT.en + ' →' })
          ]));
        }
      }
      box.appendChild(tip);

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
          var say = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('speaker') + ' Dinle', style: isPrompt ? 'margin-top:8px' : '' });
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
          KI.store.recordAnswer(q, ok);
          if (!ok && q.tenseId) missed[q.tenseId] = (missed[q.tenseId] || 0) + 1;

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
        why: d.en + ' = ' + d.tr + (d.pos ? '  (' + d.pos + ')' : ''),
        word: { en: d.en, tr: d.tr }
      };
    });
  }

  /* 4b) Aralıklı tekrar: kelime defterinde tekrar zamanı gelmiş kelimeler.
     Doğru cevap kutu seviyesini yükseltir (tekrar tarihi ertelenir),
     yanlış cevap kutuyu sıfırlar (bugün tekrar edilir) — bkz. store.js. */
  function reviewQuestions(count) {
    var due = KI.store.dueWords();
    var dict = KI.glossary.dict;
    var keys = Object.keys(dict);
    return U.shuffle(due).slice(0, count).map(function (w, i) {
      var found = KI.glossary.lookup(w.en);
      var pos = found ? found.pos : '';
      var wrongs = U.shuffle(keys.filter(function (k) {
        return dict[k].tr !== w.tr && dict[k].en.toLowerCase() !== w.en.toLowerCase() && (dict[k].pos === pos || Math.random() < .3);
      })).slice(0, 3).map(function (k) { return dict[k]; });
      var correct = { en: w.en, tr: w.tr };
      var all = U.shuffle([correct].concat(wrongs));
      var enToTr = (i % 2 === 0);
      return {
        kind: 'word',
        head: enToTr ? 'Bu kelime ne demek?' : 'Bunun İngilizcesi hangisi?',
        sentence: enToTr ? w.en : w.tr,
        speak: enToTr ? w.en : null,
        options: all.map(function (o) { return enToTr ? o.tr : o.en; }),
        answer: all.indexOf(correct),
        why: w.en + ' = ' + w.tr,
        word: { en: w.en, tr: w.tr }
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
        why: v.v1 + ' → ' + v.v2 + ' → ' + v.v3 + '  (' + v.tr + ')',
        word: { en: v.v1, tr: v.tr }
      };
    });
  }

  /* 6) Cümle kurma için malzeme */
  function buildItems(count) {
    var pool = [];
    activeTenses().forEach(function (t) {
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
      box.appendChild(U.el('h3', { html: KI.icons.html(pct >= 80 ? 'trophy' : pct >= 50 ? 'thumbsup' : 'sprout') + '  ' + correct + ' / ' + items.length + ' doğru' }));
      box.appendChild(U.el('p', { class: 'soft', text: 'Cümle kurmak, kelime sırasını öğrenmenin en hızlı yoludur.' }));
      KI.store.recordQuizResult(correct, items.length);
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
      box.appendChild(U.el('p', { class: 'quiz__q', html: KI.icons.html('flag') + ' ' + U.esc(it.tr) }));

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
            p.node.classList.remove('wchip--used'); p.node.disabled = false;
            KI.audio.play('tap');
            refresh();
          });
          line.appendChild(chip);
        });
        check.disabled = placed.length !== words.length;
      }

      /* "hidden" ile DOM akışından tamamen çıkarmak yerine (kalan kelimelerin
         flex-wrap içinde kaymasına ve yanlış kelimeye dokunulmasına yol
         açıyordu) yerini koruyan bir "kullanıldı" durumuna geçiriyoruz. */
      U.shuffle(words.map(function (w, k) { return { w: w, k: k }; })).forEach(function (item) {
        var chip = U.el('button', { class: 'wchip', type: 'button', text: item.w });
        item.node = chip;
        chip.addEventListener('click', function () {
          chip.classList.add('wchip--used'); chip.disabled = true;
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

        /* Yanlışsa kendi cümleni kelime kelime karşılaştır */
        if (!ok) {
          var mine = U.el('div', { class: 'diffline' });
          mine.appendChild(U.el('span', { class: 'diffline__lbl', text: 'senin kurduğun' }));
          placed.forEach(function (p, idx) {
            var good = words[idx] && words[idx].toLowerCase() === p.w.toLowerCase();
            mine.appendChild(U.el('span', { class: 'diffw' + (good ? ' diffw--ok' : ' diffw--bad'), text: p.w }));
          });
          fb.appendChild(mine);
        }
        var actions = U.el('div', { class: 'row', style: 'margin-top:8px' });
        var say = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('speaker') + ' Dinle' });
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

  /* --------- dikte: dinle ve yaz --------- */
  function normalize(s) {
    return String(s).toLowerCase()
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[^a-z' ]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function dictation(items, opts) {
    opts = opts || {};
    var box = U.el('div', { class: 'card' });
    var i = 0, correct = 0;

    function finish() {
      U.clear(box);
      var pct = Math.round(correct / items.length * 100);
      box.appendChild(U.el('h3', { html: KI.icons.html(pct >= 80 ? 'trophy' : pct >= 50 ? 'thumbsup' : 'sprout') + '  ' + correct + ' / ' + items.length + ' doğru' }));
      box.appendChild(U.el('p', { class: 'soft', text: 'Dikte, dinlediğini anlamayı ve yazımı aynı anda çalıştırır.' }));
      KI.store.recordQuizResult(correct, items.length);
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
      U.clear(box);

      box.appendChild(U.el('p', { class: 'eyebrow', text: (i + 1) + ' / ' + items.length + ' · Dinle ve duyduğunu yaz' }));

      var play = U.el('button', { class: 'btn btn--primary', type: 'button', html: KI.icons.html('speaker') + ' Dinle' });
      play.addEventListener('click', function () { KI.audio.play('tap'); KI.speech.speak(target); });
      var slow = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('turtle') + ' Yavaş' });
      slow.addEventListener('click', function () { KI.audio.play('tap'); KI.speech.speak(target, { rate: 0.5 }); });
      var hint = U.el('button', { class: 'btn btn--sm btn--ghost', type: 'button', html: KI.icons.html('bulb') + ' Türkçesi' });
      var hintP = U.el('p', { class: 'example__note', hidden: true, html: KI.icons.html('flag') + ' ' + U.esc(it.tr) });
      hint.addEventListener('click', function () {
        hintP.hidden = !hintP.hidden;
        KI.audio.play(hintP.hidden ? 'close' : 'reveal');
      });
      box.appendChild(U.el('div', { class: 'row', style: 'margin-bottom:10px' }, [play, slow, hint]));
      box.appendChild(hintP);

      var field = U.el('input', {
        class: 'input', type: 'text', autocomplete: 'off', autocorrect: 'off',
        autocapitalize: 'off', spellcheck: 'false', placeholder: 'Duyduğun cümleyi buraya yaz…'
      });
      box.appendChild(field);

      var check = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:12px', html: '✓ Kontrol et' });
      box.appendChild(check);

      function submit() {
        var mine = field.value;
        if (!normalize(mine)) { field.focus(); return; }
        var ok = normalize(mine) === normalize(target);
        if (ok) correct++;
        KI.audio.play(ok ? 'correct' : 'wrong');
        check.disabled = true;
        field.disabled = true;
        field.classList.add(ok ? 'input--ok' : 'input--no');

        var fb = U.el('div', { class: 'quiz__fb callout ' + (ok ? 'callout--tip' : 'callout--warn') });
        fb.appendChild(U.el('b', { class: 'callout__t', text: ok ? '✓ Tam doğru yazdın' : '✕ Doğrusu şöyle:' }));
        fb.appendChild(U.el('div', { style: 'font-family:var(--font-display);font-size:1.05rem', text: target }));
        fb.appendChild(U.el('div', { class: 'soft', style: 'font-size:.9rem;margin-top:.2em', text: it.tr }));

        if (!ok) {
          var tw = normalize(target).split(' ');
          var mw = normalize(mine).split(' ');
          var line = U.el('div', { class: 'diffline' });
          line.appendChild(U.el('span', { class: 'diffline__lbl', text: 'senin yazdığın' }));
          mw.forEach(function (w, idx) {
            line.appendChild(U.el('span', { class: 'diffw' + (tw[idx] === w ? ' diffw--ok' : ' diffw--bad'), text: w }));
          });
          if (tw.length > mw.length) {
            line.appendChild(U.el('span', { class: 'diffw diffw--miss', text: '+' + (tw.length - mw.length) + ' kelime eksik' }));
          }
          fb.appendChild(line);
        }
        box.appendChild(fb);

        var next = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:12px',
          html: (i + 1 >= items.length ? 'Sonucu gör' : 'Sonraki cümle →') });
        next.addEventListener('click', function () { i++; KI.audio.play('nav'); paint(); });
        box.appendChild(next);
        next.focus();
      }

      check.addEventListener('click', submit);
      field.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });

      /* cümle bir kez kendiliğinden okunur */
      setTimeout(function () { KI.speech.speak(target); }, 250);
    }

    paint();
    return box;
  }

  /* --------- Mini Test: dış kaynaklı 500 soruluk sabit havuz ---------
     js/data/minitest.js -> KI.minitest.items, dört zorluk seviyesi
     (kolay/orta/zor/cok-zor). Kaynak dosyada aynı sorular birkaç kez
     tekrarlanıyor (150/150/150/50 satır ama çok daha az benzersiz
     soru); bir tur içinde aynı sorunun iki kez çıkmaması için havuz
     metne göre benzersizleştirilip öyle karıştırılıyor. Ayrıca A/B
     şıkları birebir aynı olan birkaç bozuk satır (kaynak dosyanın
     kendi hatası) oyuna hiç girmesin diye elenir. */
  function tipTenseId(tip) {
    var t = KI.tenses.list.filter(function (x) { return tip.indexOf(x.en) >= 0; })[0];
    return t ? t.id : null;
  }

  function minitestQuestions(level, count) {
    var seen = {};
    var pool = (KI.minitest ? KI.minitest.items : []).filter(function (it) {
      if (it.level !== level) return false;
      if (it.options[0] === it.options[1]) return false;
      if (seen[it.en]) return false;
      seen[it.en] = true;
      return true;
    });
    return U.shuffle(pool).slice(0, count).map(function (it) {
      var tId = tipTenseId(it.tip);
      return {
        kind: 'minitest', head: it.tip,
        sentence: it.en, options: it.options.slice(), answer: it.answer,
        tenseId: tId, link: tId ? '#/zaman/' + tId : null,
        blank: { q: it.en, options: it.options, answer: it.answer, why: '' }
      };
    });
  }

  /* Zorluk seçim ekranı: "Mini Test" kartına tıklayınca önce burası açılır. */
  function minitestPicker() {
    var frag = document.createDocumentFragment();
    frag.appendChild(U.el('a', { class: 'crumb', href: '#/alistirma', 'data-sfx': 'back', text: '← Modlara dön' }));
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Alıştırma' }),
      U.el('h1', { text: 'Mini Test' }),
      U.el('p', { style: 'font-size:.84rem', text: 'Önce zorluğunu seç, hemen başla. Her seviyede 500 soruluk havuzdan sürpriz sorular çıkar.' })
    ]));
    var grid = U.el('div', { class: 'stack' });
    (KI.minitest ? KI.minitest.levels : []).forEach(function (lv) {
      var card = U.el('a', { class: 'card modecard minitest-card minitest-card--' + lv.id,
        href: '#/alistirma/minitest/' + lv.id, 'data-sfx': 'nav' });
      card.appendChild(U.el('h3', { text: lv.tr, style: 'margin-bottom:.2em' }));
      card.appendChild(U.el('p', { class: 'soft', style: 'margin:0;font-size:.84rem', text: lv.hint }));
      grid.appendChild(card);
    });
    frag.appendChild(grid);
    return frag;
  }

  /* --------- alıştırma sayfası --------- */
  function size() {
    var n = Number(KI.store.get('quizSize'));
    return (n >= 3 && n <= 40) ? n : 10;
  }

  var MODES = [
    { id: 'minitest', ico: KI.icons.html('target'), t: 'Mini Test', minitest: true,
      d: '500 soruluk kısa test havuzu; önce zorluğunu seç, hemen başla.' },
    { id: 'karisik', ico: KI.icons.html('dice'), t: 'Karışık', d: 'Her türden soru: cümle, çizgi, boşluk, kelime, fiil.',
      make: function () {
        var n = size();
        return U.shuffle(sentenceQuestions(Math.ceil(n * .3)).concat(
          timelineQuestions(Math.ceil(n * .2)), blankQuestions(Math.ceil(n * .3)),
          wordQuestions(Math.ceil(n * .2)), verbQuestions(Math.ceil(n * .15)))).slice(0, n);
      } },
    { id: 'zorlandiklarim', ico: KI.icons.html('flag'), t: 'Zorlandıklarım', d: 'Yanlış yaptığın sorular ve karıştırdığın kelimeler burada toplanır.',
      make: function () { return troubleQuestions(size()); } },
    { id: 'tekrar', ico: KI.icons.html('calendar'), t: 'Bugünkü Tekrar', d: 'Kelime defterinde tekrar zamanı gelmiş kelimeler; aralıklı tekrar ile birikmez.',
      make: function () { return reviewQuestions(size()); } },
    { id: 'cumle', ico: KI.icons.html('chat'), t: 'Cümleden zamanı bul', d: 'İngilizce cümleyi oku, hangi zaman olduğunu seç.',
      make: function () { return sentenceQuestions(size()); } },
    { id: 'cizgi', ico: KI.icons.html('chart'), t: 'Çizgiden zamanı bul', d: 'Zaman çizgisine bak, hangi zaman olduğunu seç.',
      make: function () { return timelineQuestions(size()); } },
    { id: 'bosluk', ico: KI.icons.html('pencil'), t: 'Boşluğu doldur', d: 'Cümledeki boşluğa doğru yapıyı yerleştir.',
      make: function () { return blankQuestions(size()); } },
    { id: 'kur', ico: KI.icons.html('puzzle'), t: 'Cümleyi kur', d: 'Türkçesi verilir; kelimelere dokunarak İngilizce cümleyi sen kur.',
      kind: 'builder', make: function () { return buildItems(size()); } },
    { id: 'dikte', ico: KI.icons.html('headphones'), t: 'Dinle ve yaz', d: 'Cümle okunur, sen yazarsın; sonra kelime kelime karşılaştırılır.',
      kind: 'dictation', make: function () { return buildItems(Math.min(size(), 10)); } },
    { id: 'kelime', ico: KI.icons.html('book'), t: 'Kelime bilgisi', d: 'Sözlükteki kelimeleri iki yönlü çalış: İngilizce ↔ Türkçe.',
      make: function () { return wordQuestions(size()); } },
    { id: 'fiil', ico: KI.icons.html('repeat'), t: 'Düzensiz fiiller', d: 'Fiilin 2. ve 3. hâlini bul. Zamanların yapı taşı budur.',
      make: function () { return verbQuestions(size()); } }
  ];

  function view(modeId, sub) {
    var frag = document.createDocumentFragment();
    var mode = MODES.filter(function (m) { return m.id === modeId; })[0];

    if (mode && mode.minitest && !sub) return minitestPicker();
    var levelMeta = (mode && mode.minitest && KI.minitest)
      ? KI.minitest.levels.filter(function (l) { return l.id === sub; })[0] : null;

    frag.appendChild(U.el('div', { class: 'page-head' + (mode ? ' page-head--tight' : '') }, [
      U.el('p', { class: 'eyebrow', text: 'Alıştırma' }),
      U.el('h1', { text: mode ? (levelMeta ? mode.t + ' · ' + levelMeta.tr : mode.t) : 'Kendini dene' }),
      U.el('p', { style: 'font-size:.84rem', text: mode ? (levelMeta ? levelMeta.hint : mode.d) : 'Bir mod seç; her yanlıştan sonra doğrusu ve nedeni gösterilir.' })
    ]));

    if (mode && mode.minitest && !levelMeta) {
      frag.appendChild(U.el('div', { class: 'empty' }, [
        U.el('h3', { text: 'Zorluk bulunamadı' }),
        U.el('a', { class: 'btn btn--primary', href: '#/alistirma/minitest', 'data-sfx': 'nav', text: '← Zorluk seç' })
      ]));
      return frag;
    }

    /* Mod açıkken kısayol şeridi kaldırıldı: alıştırma sırasında bir
       soruyu cevapladıktan sonra kaydırma mesafesini kısaltmak için
       (bkz. sürüm notları). Moda geçiş için "← Modlara dön" yeterli. */

    if (!mode) {
      /* oturum boyu */
      var sizeRow = U.el('div', { class: 'setrow' });
      sizeRow.appendChild(U.el('span', { class: 'setrow__lbl', text: 'Bir turda kaç soru?' }));
      [5, 10, 20].forEach(function (n) {
        var b = U.el('button', {
          class: 'btn btn--sm' + (size() === n ? ' btn--primary' : ''), type: 'button', text: String(n)
        });
        b.addEventListener('click', function () {
          KI.store.set('quizSize', n);
          KI.audio.play('toggle');
          KI.router.refresh();
        });
        sizeRow.appendChild(b);
      });
      frag.appendChild(sizeRow);

      var grid = U.el('div', { class: 'stack' });
      MODES.forEach(function (m) {
        var card = U.el('a', { class: 'card modecard', href: '#/alistirma/' + m.id, 'data-sfx': 'nav' });
        var title = U.el('h3', { html: m.ico + '  ' + m.t, style: 'margin-bottom:.2em' });
        if (m.id === 'zorlandiklarim') {
          var n = KI.store.troubleCount();
          title.appendChild(U.el('span', { class: 'countpill' + (n ? '' : ' countpill--zero'), text: String(n) }));
        }
        if (m.id === 'tekrar') {
          var nd = KI.store.dueWordCount();
          title.appendChild(U.el('span', { class: 'countpill' + (nd ? '' : ' countpill--zero'), text: String(nd) }));
        }
        card.appendChild(title);
        card.appendChild(U.el('p', { class: 'soft', text: m.d, style: 'margin:0;font-size:.84rem' }));
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

    var qs = mode.minitest ? minitestQuestions(sub, size()) : mode.make();
    if (!qs.length) {
      if (mode.id === 'zorlandiklarim') {
        frag.appendChild(U.el('div', { class: 'empty' }, [
          U.el('span', { class: 'empty__ico', html: KI.icons.html('trophy') }),
          U.el('h3', { text: 'Zorlandığın bir şey yok' }),
          U.el('p', { text: 'Yanlış yaptığın sorular ve karıştırdığın kelimeler burada birikir. Birkaç tur çözünce burası dolmaya başlar.' }),
          U.el('a', { class: 'btn btn--primary', href: '#/alistirma/karisik', 'data-sfx': 'nav', html: KI.icons.html('dice') + ' Karışık tura başla' })
        ]));
      } else if (mode.id === 'tekrar') {
        var hasNotebook = KI.store.words().length > 0;
        frag.appendChild(U.el('div', { class: 'empty' }, [
          U.el('span', { class: 'empty__ico', html: KI.icons.html('calendar') }),
          U.el('h3', { text: hasNotebook ? 'Bugün tekrar edilecek kelime yok' : 'Kelime defterin boş' }),
          U.el('p', { text: hasNotebook
            ? 'Defterindeki bütün kelimelerin tekrar tarihi ileride. Yarın tekrar bak.'
            : 'Sözlükte veya bir örnek cümlede bir kelimeye dokunup "Kelime defterime ekle" dersen, aralıklı tekrar burada başlar.' }),
          U.el('a', { class: 'btn btn--primary', href: '#/sozluk', 'data-sfx': 'nav', html: KI.icons.html('book') + ' Sözlüğe git' })
        ]));
      } else {
        frag.appendChild(U.el('p', { class: 'empty', text: 'Bu modda soru bulunamadı.' }));
      }
      return frag;
    }
    var opts = {
      onFinish: function () {
        return U.el('a', { class: 'btn', href: '#/alistirma', 'data-sfx': 'back', text: '← Modlara dön' });
      }
    };
    if (mode.id === 'zorlandiklarim') {
      var clr = U.el('button', { class: 'btn btn--sm btn--ghost', type: 'button', html: KI.icons.html('trash') + ' Listeyi temizle' });
      clr.addEventListener('click', function () {
        if (!window.confirm('Zorlandıklarım listesi tamamen silinsin mi?')) return;
        KI.store.clearTrouble();
        KI.audio.play('toggle');
        U.toast('Liste temizlendi');
        KI.router.go('#/alistirma');
      });
      frag.appendChild(U.el('div', { class: 'row', style: 'margin-bottom:10px' }, [clr]));
    }
    frag.appendChild(mode.kind === 'builder' ? builder(qs, opts)
      : mode.kind === 'dictation' ? dictation(qs, opts)
      : widget(qs, opts));
    return frag;
  }

  KI.quiz = { widget: widget, builder: builder, dictation: dictation, modes: MODES };
  KI.viewPractice = { render: view };
})(window.KI);
