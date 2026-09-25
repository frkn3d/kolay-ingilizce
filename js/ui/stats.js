/* ============================================================
   Gramer Atlası — stats.js
   Ana ekrandan girilen "İstatistikler" sayfası: hem Eğitim hem
   Oyun Modu'ndaki ilerlemeyi tek bir eğlenceli panoda toplar.
   Sayılar açılışta 0'dan hedefe sayar, genel ilerleme halkası
   dolar; "az hareket" tercihinde (data-motion="less") hepsi
   doğrudan son değeriyle görünür.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;
  var SVG_NS = 'http://www.w3.org/2000/svg';

  function reduceMotion() { return document.documentElement.getAttribute('data-motion') === 'less'; }

  /* Sayıyı 0'dan hedefe, yavaşlayarak sayar (ease-out küp). */
  function animateNumber(el, target, suffix, duration) {
    suffix = suffix || '';
    target = target || 0;
    if (reduceMotion() || !target) { el.textContent = target + suffix; return; }
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }

  function svgEl(tag, attrs) {
    var n = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }

  /* Genel ilerleme halkası: dolum animasyonu CSS transition ile,
     içindeki yüzde ise JS ile sayar; ikisi aynı sürede biter. */
  function ring(pct) {
    var r = 52, c = Math.round(2 * Math.PI * r * 10) / 10;
    var box = U.el('div', { class: 'stats-hero__ring' });
    var inner = U.el('div', { class: 'stats-ring-wrap' });

    var svg = svgEl('svg', { viewBox: '0 0 120 120', class: 'stats-ring', 'aria-hidden': 'true' });
    var bg = svgEl('circle', { class: 'stats-ring__bg', cx: 60, cy: 60, r: r });
    var fg = svgEl('circle', { class: 'stats-ring__fg', cx: 60, cy: 60, r: r,
      'stroke-dasharray': c, 'stroke-dashoffset': c });
    svg.appendChild(bg); svg.appendChild(fg);
    inner.appendChild(svg);

    var pctEl = U.el('div', { class: 'stats-ring__pct', text: '0%' });
    inner.appendChild(pctEl);
    box.appendChild(inner);
    box.appendChild(U.el('p', { class: 'stats-ring__lbl', text: 'Genel ilerleme' }));

    box.__circumference = c; box.__fg = fg; box.__pctEl = pctEl; box.__pct = pct;
    return box;
  }

  function tile(opts) {
    var t = U.el('div', { class: 'stat-tile reveal' }, [
      U.el('span', { class: 'stat-tile__ico', html: KI.icons.html(opts.icon) }),
      U.el('div', { class: 'stat-tile__body' }, [
        U.el('div', { class: 'stat-tile__num', text: '0' }),
        U.el('div', { class: 'stat-tile__lbl', text: opts.lbl })
      ])
    ]);
    t.__target = opts.num || 0;
    t.__suffix = opts.suffix || '';
    return t;
  }

  function section(title, icon, tiles) {
    var sec = U.el('section', { class: 'stats-section' });
    sec.appendChild(U.el('h2', { class: 'stats-section__title' }, [
      U.el('span', { class: 'stats-section__ico', html: KI.icons.html(icon) }),
      document.createTextNode(title)
    ]));
    var grid = U.el('div', { class: 'stats-grid' });
    tiles.forEach(function (o) { grid.appendChild(tile(o)); });
    sec.appendChild(grid);
    return sec;
  }

  function bestTenseStat() {
    var scores = KI.store.get('scores') || {};
    var best = null;
    Object.keys(scores).forEach(function (id) {
      var s = scores[id];
      if (!s || !s.total) return;
      var ratio = s.best / s.total;
      if (!best || ratio > best.ratio || (ratio === best.ratio && s.total > best.total)) {
        best = { id: id, ratio: ratio, best: s.best, total: s.total };
      }
    });
    return best;
  }

  /* "En iyi bildiğin zaman" / "Üzerinde çalış" kartları: hiç test
     çözülmemişse tek bir nazik davet kartı gösterilir. */
  function highlightRow() {
    var row = U.el('div', { class: 'stats-highlight-row' });
    var best = bestTenseStat();
    var weak = KI.store.weakTenses(1)[0];

    if (!best && !weak) {
      row.appendChild(U.el('div', { class: 'stats-highlight stats-highlight--empty reveal' }, [
        U.el('span', { class: 'stats-highlight__ico', html: KI.icons.html('bulb') }),
        U.el('p', { text: 'Henüz bir alıştırma testi çözmedin. Birkaç soru cevaplayınca en güçlü ve gelişmen gereken zamanların burada belirecek.' })
      ]));
      return row;
    }
    if (best) {
      var bt = KI.tenses.get(best.id);
      if (bt) row.appendChild(U.el('div', { class: 'stats-highlight stats-highlight--' + bt.group + ' reveal' }, [
        U.el('span', { class: 'stats-highlight__eyebrow', text: '★ En iyi bildiğin' }),
        U.el('span', { class: 'stats-highlight__name', text: bt.tr }),
        U.el('span', { class: 'stats-highlight__meta', text: best.best + ' / ' + best.total + ' doğru' })
      ]));
    }
    if (weak) {
      var wt = KI.tenses.get(weak.id);
      if (wt) row.appendChild(U.el('div', { class: 'stats-highlight stats-highlight--' + wt.group + ' reveal' }, [
        U.el('span', { class: 'stats-highlight__eyebrow', text: '↗ Üzerinde çalış' }),
        U.el('span', { class: 'stats-highlight__name', text: wt.tr }),
        U.el('span', { class: 'stats-highlight__meta', text: weak.wrong + ' kez karıştırmışsın' })
      ]));
    }
    return row;
  }

  /* "Şimdi ne yapmalısın?" önerisi: en çok karıştırılan zamana göre
     iki somut eylem sunar. "Zorlandıklarım" modu zaten yanlış yapılan
     sorularla birlikte zayıf zamanlardan ek cümle soruları da topladığı
     için (bkz. practice.js troubleQuestions) "benzer sorularla alıştır"
     için gerçekten uygun, var olan bir hedef. */
  function recommendationCard() {
    var weak = KI.store.weakTenses(1)[0];
    if (!weak) return null;
    var wt = KI.tenses.get(weak.id);
    if (!wt) return null;

    var card = U.el('div', { class: 'stats-reco reveal' });
    card.appendChild(U.el('p', { class: 'stats-reco__eyebrow' }, [
      U.el('span', { html: KI.icons.html('target') }),
      document.createTextNode('Şimdi ne yapmalısın?')
    ]));
    card.appendChild(U.el('p', { class: 'stats-reco__line',
      html: 'En çok <b>' + U.esc(wt.tr) + '</b> (' + U.esc(wt.en) + ') konusunda hata yaptın — ' + weak.wrong + ' kez karıştırmışsın.' }));
    var actions = U.el('div', { class: 'stats-reco__actions' });
    actions.appendChild(U.el('a', { class: 'stats-reco__btn', href: '#/zaman/' + wt.id, 'data-sfx': 'nav' }, [
      U.el('span', { html: KI.icons.html('repeat') }), document.createTextNode('Kuralın özetine dön, tekrar oku')
    ]));
    actions.appendChild(U.el('a', { class: 'stats-reco__btn stats-reco__btn--primary', href: '#/alistirma/zorlandiklarim', 'data-sfx': 'nav' }, [
      U.el('span', { html: KI.icons.html('target') }), document.createTextNode('Benzer sorularla alıştır')
    ]));
    card.appendChild(actions);
    return card;
  }

  /* 12 zamanın renkli nokta haritası: Harita sekmesindeki 3x4 düzenle
     aynı sırada (satır = süreç, sütun = geçmiş/şimdi/gelecek). */
  function tenseMap(learned, total) {
    var box = U.el('div', { class: 'stats-tensemap-box' });
    box.appendChild(U.el('div', { class: 'stats-tensemap__head' }, [
      U.el('span', { class: 'stats-tensemap__title', text: 'Zaman Haritan' }),
      U.el('span', { class: 'stats-tensemap__count', text: learned + ' / ' + total })
    ]));
    var grid = U.el('div', { class: 'stats-tensemap' });
    KI.tenses.aspects.forEach(function (a) {
      KI.tenses.groups.forEach(function (g) {
        var t = KI.tenses.byCell(g.id, a.id);
        if (!t) { grid.appendChild(U.el('span')); return; }
        var done = KI.store.isLearned(t.id);
        grid.appendChild(U.el('span', {
          class: 'stats-dot stats-dot--' + g.id + (done ? ' is-done' : '') + ' reveal',
          title: t.tr + (done ? ' · öğrenildi' : ' · henüz değil')
        }));
      });
    });
    box.appendChild(grid);
    var legend = U.el('div', { class: 'stats-legend' });
    KI.tenses.groups.forEach(function (g) {
      legend.appendChild(U.el('span', { class: 'stats-legend__item' }, [
        U.el('span', { class: 'stats-dot stats-dot--sm stats-dot--' + g.id + ' is-done' }),
        document.createTextNode(g.tr)
      ]));
    });
    box.appendChild(legend);
    return box;
  }

  function heroLine(d) {
    if (d.streak >= 7) return '🔥 ' + d.streak + ' gündür ara vermiyorsun — bu artık gerçek bir alışkanlık!';
    if (d.streak >= 3) return d.streak + ' gün üst üste buradasın, tempo güzel gidiyor.';
    if (d.visits <= 1) return 'İlk ziyaretin! Sayıların burada birikmeye başlayacak.';
    return 'Bugüne kadarki serüvenin aşağıda seni bekliyor.';
  }

  function closingLine(pct) {
    if (pct >= 90) return 'Zamanlar konusunda artık neredeyse bir uzman sayılırsın!';
    if (pct >= 60) return 'Gidişat çok iyi — bu tempoyla devam!';
    if (pct >= 30) return 'İyi bir başlangıç yaptın, yolun yarısı bile sayılır.';
    return 'Her büyük ilerleme küçük bir adımla başlar — devam et!';
  }

  function computeData() {
    var learned = KI.store.learnedCount();
    var totalTenses = KI.tenses.list.length;
    var gameDone = KI.store.gameNodesDoneCount();
    var gameTotal = KI.viewGame ? KI.viewGame.totalNodes() : 0;
    var achMap = KI.store.get('achievements') || {};
    var achTotal = (KI.achievements && KI.achievements.list) ? KI.achievements.list.length : 0;
    var game = KI.store.get('game') || {};
    var progress = game.progress || {};
    var checkpointsPassed = 0;
    Object.keys(progress).forEach(function (lv) {
      Object.keys(progress[lv]).forEach(function (id) {
        if (id.indexOf('checkpoint-') === 0 && progress[lv][id].best >= 7) checkpointsPassed++;
      });
    });
    return {
      visits: KI.store.get('visits') || 0,
      streak: KI.store.get('streak') || 0,
      learned: learned, totalTenses: totalTenses,
      quizzesCompleted: KI.store.get('quizzesCompleted') || 0,
      perfectQuizzes: KI.store.get('perfectQuizzes') || 0,
      gameDone: gameDone, gameTotal: gameTotal,
      bestCombo: game.bestCombo || 0,
      perfectGameQuizzes: game.perfectGameQuizzes || 0,
      videoWatches: game.videoWatches || 0,
      checkpointsPassed: checkpointsPassed,
      words: KI.store.words().length,
      mastered: KI.store.masteredWordCount(),
      achUnlocked: Object.keys(achMap).length,
      achTotal: achTotal
    };
  }

  function startAnimations(page, ringBox) {
    var offset = ringBox.__circumference * (1 - ringBox.__pct / 100);
    if (reduceMotion()) {
      ringBox.__fg.style.strokeDashoffset = String(offset);
    } else {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { ringBox.__fg.style.strokeDashoffset = String(offset); });
      });
    }
    animateNumber(ringBox.__pctEl, ringBox.__pct, '%', 1100);

    U.qsa('.stat-tile', page).forEach(function (t, i) {
      setTimeout(function () {
        t.classList.add('reveal--in');
        animateNumber(t.querySelector('.stat-tile__num'), t.__target, t.__suffix, 900);
      }, reduceMotion() ? 0 : 35 * i);
    });

    U.qsa('.reveal', page).forEach(function (el, i) {
      if (el.classList.contains('stat-tile')) return;
      setTimeout(function () { el.classList.add('reveal--in'); }, reduceMotion() ? 0 : 18 * i);
    });
  }

  function view() {
    var frag = document.createDocumentFragment();
    var d = computeData();
    var pct = (d.totalTenses && d.gameTotal)
      ? Math.round(((d.learned / d.totalTenses) + (d.gameDone / d.gameTotal)) / 2 * 100)
      : 0;

    var page = U.el('div', { class: 'stats-page' });

    page.appendChild(U.el('a', { class: 'stats-back', href: '#/', 'data-sfx': 'back', text: '← Ana sayfa' }));

    var hero = U.el('div', { class: 'stats-hero' });
    hero.appendChild(U.el('p', { class: 'stats-eyebrow', text: 'İSTATİSTİK' }));
    hero.appendChild(U.el('h1', { text: 'Senin Sayıların' }));
    hero.appendChild(U.el('p', { class: 'stats-hero__line', text: heroLine(d) }));
    var ringBox = ring(pct);
    hero.appendChild(ringBox);
    page.appendChild(hero);

    page.appendChild(section('Genel', 'trophy', [
      { icon: 'calendar', num: d.visits, lbl: 'Toplam ziyaret' },
      { icon: 'ach-flame', num: d.streak, lbl: 'Üst üste gün' },
      { icon: 'target', num: d.quizzesCompleted, lbl: 'Tamamlanan test' },
      { icon: 'ach-gem', num: d.perfectQuizzes, lbl: 'Kusursuz test' },
      { icon: 'trophy', num: d.achUnlocked, suffix: ' / ' + d.achTotal, lbl: 'Kazanılan başarım' }
    ]));

    var eduSec = U.el('section', { class: 'stats-section' });
    eduSec.appendChild(U.el('h2', { class: 'stats-section__title' }, [
      U.el('span', { class: 'stats-section__ico', html: KI.icons.html('map') }),
      document.createTextNode('Eğitim Modu')
    ]));
    var eduGrid = U.el('div', { class: 'stats-grid stats-grid--single' });
    eduGrid.appendChild(tile({ icon: 'map', num: d.learned, suffix: ' / ' + d.totalTenses, lbl: 'Öğrenilen zaman' }));
    eduSec.appendChild(eduGrid);
    eduSec.appendChild(highlightRow());
    var reco = recommendationCard();
    if (reco) eduSec.appendChild(reco);
    eduSec.appendChild(tenseMap(d.learned, d.totalTenses));
    page.appendChild(eduSec);

    page.appendChild(section('Oyun Modu', 'flag', [
      { icon: 'flag', num: d.gameDone, suffix: ' / ' + d.gameTotal, lbl: 'Tamamlanan durak' },
      { icon: 'chart', num: d.bestCombo, lbl: 'En uzun kombo' },
      { icon: 'star', num: d.perfectGameQuizzes, lbl: 'Kusursuz oyun sınavı' },
      { icon: 'fast-forward', num: d.checkpointsPassed, lbl: 'Geçilen İleri Sar' },
      { icon: 'play', num: d.videoWatches, lbl: 'İzlenen video' }
    ]));

    page.appendChild(section('Kelime Defteri', 'book', [
      { icon: 'book', num: d.words, lbl: 'Kaydedilen kelime' },
      { icon: 'ach-brain', num: d.mastered, lbl: 'Ezberlenen kelime' }
    ]));

    page.appendChild(U.el('p', { class: 'stats-footnote', text: closingLine(pct) }));

    frag.appendChild(page);
    setTimeout(function () { startAnimations(page, ringBox); }, 0);
    return frag;
  }

  KI.viewStats = { render: view };
})(window.KI);
