/* ============================================================
   Gramer Atlası — game.js
   Oyun Modu: aşağı doğru uzanan zaman haritası + can sistemi.
   Sorular js/data/game-questions.js dosyasından (questions.md'den
   üretildi) gelir. Her durak 10 sorudan oluşur; yanlış cevap can
   eksiltir, can biterse video/premium ile devam edilir.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  var ASPECT_ICON = { simple: 'aspect-simple', cont: 'aspect-cont', perfect: 'check-circle', perfectcont: 'history' };
  var ZIGZAG = [0, 58, -58, 58, -58, 58, -58, 58];

  var LEVELS = [
    { id: 'baslangic', t: 'Başlangıç', desc: 'Kolay seviye', topics: [
      { id: 'temeller', t: 'Temeller' },
      { id: 'present-simple', t: 'Present Simple', time: 'present', aspect: 'simple' },
      { id: 'present-continuous', t: 'Present Continuous', time: 'present', aspect: 'cont' },
      { id: 'past-simple', t: 'Past Simple', time: 'past', aspect: 'simple' },
      { id: 'future-simple', t: 'Future Simple', time: 'future', aspect: 'simple' }
    ] },
    { id: 'orta', t: 'Orta', desc: 'Orta seviye', topics: [
      { id: 'past-continuous', t: 'Past Continuous', time: 'past', aspect: 'cont' },
      { id: 'present-perfect', t: 'Present Perfect', time: 'present', aspect: 'perfect' },
      { id: 'future-continuous', t: 'Future Continuous', time: 'future', aspect: 'cont' },
      { id: 'past-perfect', t: 'Past Perfect', time: 'past', aspect: 'perfect' }
    ] },
    { id: 'ileri', t: 'İleri', desc: 'İleri seviye', topics: [
      { id: 'present-perfect-continuous', t: 'Present Perfect Continuous', time: 'present', aspect: 'perfectcont' },
      { id: 'past-perfect-continuous', t: 'Past Perfect Continuous', time: 'past', aspect: 'perfectcont' },
      { id: 'future-perfect', t: 'Future Perfect', time: 'future', aspect: 'perfect' },
      { id: 'future-perfect-continuous', t: 'Future Perfect Continuous', time: 'future', aspect: 'perfectcont' }
    ] }
  ];

  function levelById(id) { return LEVELS.filter(function (l) { return l.id === id; })[0]; }
  function topicById(level, id) { return level && level.topics.filter(function (t) { return t.id === id; })[0]; }

  function isLevelUnlocked(li) {
    if (li === 0) return true;
    var prev = LEVELS[li - 1];
    return prev.topics.every(function (tp) { return KI.store.isGameTopicDone(prev.id, tp.id); });
  }
  function isTopicUnlocked(level, ti) {
    if (ti === 0) return true;
    return KI.store.isGameTopicDone(level.id, level.topics[ti - 1].id);
  }

  /* ---------- canlar: paylaşılan mini bileşen ---------- */
  function heartsLine() {
    var n = KI.store.heartsCount();
    return KI.store.isPremium() ? '∞' : String(n);
  }
  function paintHeartsBadge() {
    var b = document.getElementById('hearts-badge');
    if (b) b.textContent = heartsLine();
  }

  function mountHearts(container, onChange) {
    function paint() {
      U.clear(container);
      KI.store.gameTouchDay();
      var premium = KI.store.isPremium();
      var n = KI.store.heartsCount();

      container.appendChild(U.el('div', { class: 'hearts__count' }, [
        U.el('span', { html: KI.icons.html('ach-heart') }),
        U.el('b', { text: premium ? 'Sınırsız can' : (n + ' / 5 can') })
      ]));

      if (premium) {
        container.appendChild(U.el('p', { class: 'soft', text: 'Premium hesabınla canların hiç bitmez.' }));
        return;
      }

      var watch = U.el('button', { class: 'btn btn--primary btn--block', type: 'button',
        html: KI.icons.html('play') + ' Video izle · +1 can' });
      if (n >= 5) watch.disabled = true;
      watch.addEventListener('click', function () {
        KI.audio.play('tap');
        KI.store.gainHeart();
        U.toast('Bir can kazandın');
        paintHeartsBadge();
        paint();
        if (onChange) onChange();
      });
      container.appendChild(watch);

      var premBtn = U.el('button', { class: 'btn btn--block', type: 'button', style: 'margin-top:8px',
        html: KI.icons.html('ach-crown') + ' Premium’a geç · sınırsız can' });
      premBtn.addEventListener('click', function () {
        KI.audio.play('achievement');
        KI.store.setPremium(true);
        U.toast('Premium aktif! Canların artık hiç bitmeyecek.');
        paintHeartsBadge();
        paint();
        if (onChange) onChange();
      });
      container.appendChild(premBtn);

      container.appendChild(U.el('p', { class: 'soft', style: 'font-size:.78rem;margin-top:10px',
        text: 'Deneme sürümü: video ve satın alma burada gerçek bir işlem yapılmadan hemen can/üyelik verir; gerçek video reklamı ve ödeme sistemi sonra eklenecek.' }));
    }
    paint();
  }

  /* ---------- harita ---------- */
  function renderMap() {
    KI.store.gameTouchDay();
    var frag = document.createDocumentFragment();

    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Oyun Modu' }),
      U.el('h1', { text: 'Zaman Haritası' }),
      U.el('p', { text: 'Aşağı doğru ilerle. Her durak 10 sorudan oluşur; yanlış cevap bir can eksiltir.' })
    ]));

    var wrap = U.el('div', { class: 'gmap' });

    LEVELS.forEach(function (level, li) {
      var unlocked = isLevelUnlocked(li);
      var section = U.el('section', { class: 'gmap__level', 'data-level': level.id });

      section.appendChild(U.el('div', { class: 'gmap__banner' + (unlocked ? '' : ' gmap__banner--locked') }, [
        U.el('span', { class: 'gmap__banner-ico', html: KI.icons.html(unlocked ? 'flag' : 'lock') }),
        U.el('div', {}, [
          U.el('h2', { text: level.t }),
          U.el('p', { text: unlocked ? level.desc : 'Önceki seviyeyi bitirince açılır' })
        ])
      ]));

      var track = U.el('div', { class: 'gmap__track' });
      level.topics.forEach(function (tp, ti) {
        var tUnlocked = unlocked && isTopicUnlocked(level, ti);
        var done = KI.store.isGameTopicDone(level.id, tp.id);
        var prog = KI.store.gameProgress(level.id, tp.id);
        var offset = ZIGZAG[ti % ZIGZAG.length];

        var stop = U.el('div', { class: 'gmap__stop', style: 'transform:translateX(' + offset + 'px)' });

        var nodeCls = 'gmap__node' + (done ? ' gmap__node--done' : tUnlocked ? ' gmap__node--next' : ' gmap__node--locked');
        var node = U.el(tUnlocked ? 'a' : 'div', {
          class: nodeCls,
          href: tUnlocked ? ('#/oyun/' + level.id + '/' + tp.id) : null,
          'data-sfx': tUnlocked ? 'nav' : null,
          'aria-disabled': tUnlocked ? null : 'true',
          title: tp.t
        });
        if (!tUnlocked) {
          node.addEventListener('click', function () { KI.audio.play('toggle'); U.toast('Önce bir önceki durağı bitir'); });
        }
        var icoName = tp.aspect ? ASPECT_ICON[tp.aspect] : 'wall';
        node.appendChild(U.el('span', {
          class: 'gmap__node-ico' + (tp.time ? ' gmap__node-ico--' + tp.time : ''),
          html: KI.icons.html((tUnlocked || done) ? icoName : 'lock')
        }));
        if (done) node.appendChild(U.el('span', { class: 'gmap__node-star', html: KI.icons.html('star') }));
        stop.appendChild(node);

        stop.appendChild(U.el('div', { class: 'gmap__label' }, [
          U.el('b', { text: tp.t }),
          prog ? U.el('span', { class: 'gmap__label-score', text: prog.best + '/10' }) : null
        ]));

        track.appendChild(stop);
      });
      section.appendChild(track);
      wrap.appendChild(section);
    });

    frag.appendChild(wrap);
    return frag;
  }

  /* ---------- sınav (durak) ---------- */
  function buildItems(levelId, topicId) {
    var bank = (KI.gameQuestions[levelId] && KI.gameQuestions[levelId][topicId]) || [];
    var n = Math.min(10, bank.length);
    return U.shuffle(bank).slice(0, n);
  }

  function outOfHeartsBlock(onResume) {
    var wrap = U.el('div');
    wrap.appendChild(U.el('div', { class: 'callout callout--warn', style: 'margin-bottom:10px' }, [
      U.el('b', { class: 'callout__t', text: 'Canların bitti' }),
      U.el('span', { text: 'Devam etmek için video izleyip can kazanabilir ya da Premium’a geçebilirsin.' })
    ]));
    var box = U.el('div');
    mountHearts(box, onResume);
    wrap.appendChild(box);
    wrap.appendChild(U.el('a', { class: 'btn', href: '#/oyun', 'data-sfx': 'back', style: 'margin-top:10px;display:inline-block', text: '← Haritaya dön' }));
    return wrap;
  }

  function renderQuiz(levelId, topicId) {
    var level = levelById(levelId);
    var topic = topicById(level, topicId);
    var frag = document.createDocumentFragment();

    if (!level || !topic) {
      frag.appendChild(U.el('div', { class: 'empty' }, [
        U.el('h3', { text: 'Bulunamadı' }),
        U.el('a', { class: 'btn btn--primary', href: '#/oyun', text: '← Haritaya dön' })
      ]));
      return frag;
    }

    KI.store.gameTouchDay();
    frag.appendChild(U.el('a', { class: 'crumb', href: '#/oyun', 'data-sfx': 'back', html: '← ' + U.esc(level.t) }));
    frag.appendChild(U.el('div', { class: 'page-head page-head--tight' }, [
      U.el('p', { class: 'eyebrow', text: level.t }),
      U.el('h1', { text: topic.t })
    ]));

    var box = U.el('div', { class: 'card gquiz', 'data-level': level.id });
    frag.appendChild(box);

    if (!KI.store.canPlayGame()) {
      box.appendChild(outOfHeartsBlock(function () { if (KI.store.canPlayGame()) paint(); }));
      return frag;
    }

    var items = buildItems(levelId, topicId);
    if (!items.length) {
      box.appendChild(U.el('p', { class: 'empty', text: 'Bu durak için henüz soru yok.' }));
      return frag;
    }

    var i = 0, correct = 0;

    function paint() {
      if (!KI.store.canPlayGame()) { U.clear(box); box.appendChild(outOfHeartsBlock(function () { if (KI.store.canPlayGame()) paint(); })); return; }
      if (i >= items.length) return finish();

      U.clear(box);
      box.appendChild(U.el('div', { class: 'gquiz__top' }, [
        U.el('span', { class: 'gquiz__prog', text: (i + 1) + ' / ' + items.length }),
        U.el('span', { class: 'gquiz__hearts', html: KI.icons.html('ach-heart') + ' ' + heartsLine() })
      ]));

      var it = items[i];
      if (it.type === 'choice') paintChoice(it); else paintBuild(it);
    }

    function onWrong() { KI.store.loseHeart(); paintHeartsBadge(); }

    function stepFooter(ok, correctText) {
      var fb = U.el('div', { class: 'quiz__fb callout ' + (ok ? 'callout--tip' : 'callout--warn') });
      fb.appendChild(U.el('b', { class: 'callout__t', text: ok ? '✓ Doğru' : ('✕ Doğrusu: ' + correctText) }));
      box.appendChild(fb);

      if (!KI.store.canPlayGame()) {
        box.appendChild(outOfHeartsBlock(function () { if (KI.store.canPlayGame()) paint(); }));
        return;
      }
      var next = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:12px',
        html: (i + 1 >= items.length ? 'Sonucu gör' : 'Sonraki soru →') });
      next.addEventListener('click', function () { i++; KI.audio.play('nav'); paint(); });
      box.appendChild(next);
    }

    function paintChoice(it) {
      box.appendChild(U.el('p', { class: 'quiz__q', text: it.q }));
      var list = U.el('div', { class: 'quiz__opts' });
      var answered = false;

      /* questions.md'deki doğru şık dağılımı A/B'ye yüklüydü (kaynak
         içerikte doğru cevap çoğunlukla ilk sıralarda yazılmış); her
         gösterimde şıkları karıştırıp doğru indeksi buna göre yeniden
         hesaplıyoruz ki oyuncu harfe göre değil bilgiye göre cevaplasın. */
      var order = U.shuffle([0, 1, 2, 3]);
      var opts = order.map(function (idx) { return it.opts[idx]; });
      var correctK = order.indexOf(it.a);

      opts.forEach(function (o, k) {
        var b = U.el('button', { class: 'opt', type: 'button' }, [
          U.el('span', { class: 'opt__key', text: 'ABCD'.charAt(k) }),
          U.el('span', { class: 'opt__txt', text: o })
        ]);
        b.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          var ok = (k === correctK);
          var rightBtn = list.children[correctK];
          rightBtn.classList.add('is-right'); rightBtn.querySelector('.opt__key').textContent = '✓';
          if (!ok) { b.classList.add('is-wrong'); b.querySelector('.opt__key').textContent = '✕'; }
          U.qsa('.opt', list).forEach(function (x, idx) { x.disabled = true; if (idx !== k && idx !== correctK) x.classList.add('is-dim'); });
          if (ok) { correct++; KI.audio.play('correct'); } else { KI.audio.play('wrong'); onWrong(); }
          stepFooter(ok, opts[correctK]);
        });
        list.appendChild(b);
      });
      box.appendChild(list);
    }

    function paintBuild(it) {
      var target = it.en.replace(/\s+/g, ' ').trim();
      var words = target.split(' ');
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
          chip.addEventListener('click', function () { placed.splice(idx, 1); p.node.hidden = false; KI.audio.play('tap'); refresh(); });
          line.appendChild(chip);
        });
        check.disabled = placed.length !== words.length;
      }

      U.shuffle(words.map(function (w, k) { return { w: w, k: k }; })).forEach(function (item) {
        var chip = U.el('button', { class: 'wchip', type: 'button', text: item.w });
        item.node = chip;
        chip.addEventListener('click', function () { chip.hidden = true; placed.push(item); KI.audio.play('word'); refresh(); });
        pool.appendChild(chip);
      });

      box.appendChild(line); box.appendChild(pool); box.appendChild(check);
      refresh();

      check.addEventListener('click', function () {
        var answer = placed.map(function (p) { return p.w; }).join(' ');
        var ok = answer.toLowerCase() === target.toLowerCase();
        if (ok) { correct++; KI.audio.play('correct'); } else { KI.audio.play('wrong'); onWrong(); }
        check.disabled = true;
        U.qsa('.wchip', box).forEach(function (c) { c.disabled = true; });
        line.classList.add(ok ? 'is-right' : 'is-wrong');

        var fb = U.el('div', { class: 'quiz__fb callout ' + (ok ? 'callout--tip' : 'callout--warn') });
        fb.appendChild(U.el('b', { class: 'callout__t', text: ok ? '✓ Doğru kurdun' : '✕ Doğrusu şöyle:' }));
        fb.appendChild(U.el('div', { style: 'font-family:var(--font-display);font-size:1.05rem', text: target }));
        box.appendChild(fb);

        if (!KI.store.canPlayGame()) {
          box.appendChild(outOfHeartsBlock(function () { if (KI.store.canPlayGame()) paint(); }));
          return;
        }
        var next = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:12px',
          html: (i + 1 >= items.length ? 'Sonucu gör' : 'Sonraki soru →') });
        next.addEventListener('click', function () { i++; KI.audio.play('nav'); paint(); });
        box.appendChild(next);
      });
    }

    function finish() {
      U.clear(box);
      var total = items.length;
      var stars = (correct === total) ? 3 : (correct >= Math.ceil(total * 0.7)) ? 2 : (correct >= Math.ceil(total * 0.5)) ? 1 : 0;
      KI.store.recordGameResult(levelId, topicId, correct, total);
      paintHeartsBadge();

      box.appendChild(U.el('h3', { html: KI.icons.html(stars >= 2 ? 'trophy' : 'thumbsup') + '  ' + correct + ' / ' + total + ' doğru' }));
      var starsRow = U.el('div', { class: 'gquiz__stars' });
      for (var s = 0; s < 3; s++) starsRow.appendChild(U.el('span', { html: KI.icons.html(s < stars ? 'star' : 'star-outline') }));
      box.appendChild(starsRow);
      box.appendChild(U.el('p', { class: 'soft', text: stars >= 1 ? 'Bu durağı tamamladın, sıradaki açıldı!' : 'Durağı tamamladın; istersen tekrar deneyip yıldızını artırabilirsin.' }));

      var row = U.el('div', { class: 'row', style: 'margin-top:10px' });
      var again = U.el('button', { class: 'btn', type: 'button', html: '↻ Tekrar dene' });
      again.addEventListener('click', function () { i = 0; correct = 0; items = buildItems(levelId, topicId); KI.audio.play('tap'); paint(); });
      row.appendChild(again);
      row.appendChild(U.el('a', { class: 'btn btn--primary', href: '#/oyun', 'data-sfx': 'nav', text: 'Haritaya dön →' }));
      box.appendChild(row);
      KI.audio.play('finish');
    }

    paint();
    return frag;
  }

  /* ---------- üst çubuk entegrasyonu: canlar düğmesi + günlük can yenileme ---------- */
  function syncChrome(tab) {
    var btn = document.getElementById('btn-hearts');
    if (!btn) return;
    if (tab === 'oyun') {
      KI.store.gameTouchDay();
      btn.hidden = false;
      paintHeartsBadge();
    } else {
      btn.hidden = true;
    }
  }

  KI.viewGame = {
    map: renderMap,
    quiz: renderQuiz,
    syncChrome: syncChrome,
    buildHeartsModal: function () { mountHearts(document.getElementById('hearts-body')); }
  };
})(window.KI);
