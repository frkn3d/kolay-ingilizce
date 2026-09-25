/* ============================================================
   Gramer Atlası - gate.js
   Uygulamanın ana giriş ekranı: Oyun Modu / Eğitim Modu seçimi.
   Logoya tıklayınca her zaman buraya dönülür (bkz. app.js kökü).
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  /* "Bugünün Çalışması": 4 sabit görev türü (konu/soru/kelime/durak),
     hedef sayılar 7 günlük bir döngüyle değişir (bkz. DAILY_TARGETS) -
     her gün biraz farklı, 7 günde bir aynı hedefler geri gelir. Sayaçlar
     KI.store.daily* üzerinde tutulur ve gün değişince kendiliğinden
     sıfırlanır (bkz. store.js touchDaily). */
  var DAILY_TASKS = [
    { key: 'topicsRead', icon: 'map', label: function (n) { return n + ' konu oku'; } },
    { key: 'questions', icon: 'target', label: function (n) { return n + ' soru çöz'; } },
    { key: 'wordsReviewed', icon: 'notebook', label: function (n) { return n + ' kelime tekrar et'; } },
    { key: 'gameNodes', icon: 'flag', label: function (n) { return n + ' oyun durağı tamamla'; } }
  ];
  var DAILY_TARGETS = [
    [1, 10, 5, 1],
    [1, 8, 4, 2],
    [2, 6, 5, 1],
    [1, 12, 3, 1],
    [1, 10, 6, 2],
    [2, 8, 4, 1],
    [1, 15, 5, 1]
  ];
  function dailyCycleIndex() {
    var d = new Date();
    var epochDay = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
    return ((epochDay % 7) + 7) % 7;
  }
  function dailySection() {
    var targets = DAILY_TARGETS[dailyCycleIndex()];
    var progress = KI.store.dailyProgress();
    var wrap = U.el('div', { class: 'gate__daily' });
    wrap.appendChild(U.el('p', { class: 'gate__daily-title' }, [
      U.el('span', { html: KI.icons.html('calendar') }),
      document.createTextNode('Bugünün Çalışması')
    ]));
    var list = U.el('div', { class: 'gate__daily-list' });
    var doneCount = 0;
    DAILY_TASKS.forEach(function (task, i) {
      var target = targets[i];
      var count = Math.min(progress[task.key] || 0, target);
      var done = count >= target;
      if (done) doneCount++;
      list.appendChild(U.el('div', { class: 'gate__daily-item' + (done ? ' is-done' : '') }, [
        U.el('span', { class: 'gate__daily-check', html: KI.icons.html(done ? 'check-circle' : 'circle') }),
        U.el('span', { class: 'gate__daily-ico', html: KI.icons.html(task.icon) }),
        U.el('span', { class: 'gate__daily-label', text: task.label(target) }),
        U.el('span', { class: 'gate__daily-count', text: count + '/' + target })
      ]));
    });
    if (doneCount === DAILY_TASKS.length) list.classList.add('is-all-done');
    wrap.appendChild(list);
    return wrap;
  }

  function card(opts) {
    return U.el('a', { class: 'gate__card gate__card--' + opts.mod, href: opts.href, 'data-sfx': 'nav' }, [
      U.el('span', { class: 'gate__ico' }, [
        U.el('img', { src: opts.img, alt: '', width: 78, height: 78 })
      ]),
      U.el('h2', { text: opts.title }),
      U.el('p', { text: opts.desc }),
      U.el('span', { class: 'gate__cta', text: opts.cta + '  →' })
    ]);
  }

  function render() {
    var frag = document.createDocumentFragment();
    var wrap = U.el('div', { class: 'gate' });

    wrap.appendChild(U.el('div', { class: 'gate__brand' }, [
      U.el('img', { class: 'gate__brand-ico', src: 'assets/logo.svg', alt: '' }),
      U.el('span', { class: 'gate__brand-txt', text: 'Gramer Atlası' })
    ]));

    wrap.appendChild(U.el('div', { class: 'gate__head' }, [
      U.el('h1', { text: 'Nasıl çalışmak istersin?' }),
      U.el('p', { class: 'soft', text: 'İstediğin an mod değiştirebilirsin.' })
    ]));

    var grid = U.el('div', { class: 'gate__grid' });
    grid.appendChild(card({
      mod: 'study', href: '#/harita', img: 'assets/icon-mode-study.svg',
      title: 'Eğitim Modu',
      desc: 'Zaman çizgisi, temeller, sözlük.',
      cta: 'Başla'
    }));
    grid.appendChild(card({
      mod: 'game', href: '#/oyun', img: 'assets/icon-mode-game.svg',
      title: 'Oyun Modu',
      desc: 'Harita, canlar, kısa sınavlar.',
      cta: 'Haritaya gir'
    }));
    wrap.appendChild(grid);

    var actions = U.el('div', { class: 'gate__actions' });

    /* İki düğme de aynı iskelette (.gate__action-slot > .gate__stats)
       tutulur - yalnız birine ipucu eklenince flex genişlikleri
       kaymasın diye (bkz. flex:1 1 0 dağılımı). */
    var helpBtn = U.el('a', { class: 'gate__stats', href: '#/nasil-kullanilir', 'data-sfx': 'nav' }, [
      U.el('span', { class: 'gate__stats-ico', html: KI.icons.html('help-circle') }),
      U.el('span', { text: 'Nasıl Kullanılır' })
    ]);
    var helpSlot = U.el('div', { class: 'gate__action-slot' }, [helpBtn]);
    /* İlk açılışta parmakla dokunma ipucu bir kez görünür, sonra
       bir daha hiç çıkmaz (bkz. KI.store.markHelpHintSeen). */
    if (!KI.store.hasSeenHelpHint()) {
      helpSlot.appendChild(U.el('span', { class: 'gate__help-hint', 'aria-hidden': 'true', html: KI.icons.html('point-down') }));
      KI.store.markHelpHintSeen();
    }
    actions.appendChild(helpSlot);

    var statsBtn = U.el('a', { class: 'gate__stats', href: '#/istatistikler', 'data-sfx': 'nav' }, [
      U.el('span', { class: 'gate__stats-ico', html: KI.icons.html('chart') }),
      U.el('span', { text: 'İstatistikler' })
    ]);
    actions.appendChild(U.el('div', { class: 'gate__action-slot' }, [statsBtn]));

    wrap.appendChild(actions);

    wrap.appendChild(dailySection());

    wrap.appendChild(U.el('p', { class: 'gate__footnote',
      text: 'Logspace' + (KI.appVersion ? ' · v' + KI.appVersion : '') }));

    frag.appendChild(wrap);
    return frag;
  }

  KI.viewGate = { render: render };
})(window.KI);
