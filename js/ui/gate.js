/* ============================================================
   Gramer Atlası - gate.js
   Uygulamanın ana giriş ekranı: Oyun Modu / Eğitim Modu seçimi.
   Logoya tıklayınca her zaman buraya dönülür (bkz. app.js kökü).
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  /* "Bugünün Çalışması": 4 sabit görev türü (konu/soru/kelime/durak); hedef
     sayılar (7 günlük bir döngüyle değişen) ve ilerleme sayaçları store.js'te
     tutulur (bkz. store.js dailyTargets/dailyProgress) - burada yalnız
     görsel etiket/ikon eşleşmesi tutulur, tek doğruluk kaynağı store.js'tir. */
  var DAILY_TASKS = [
    { key: 'topicsRead', icon: 'map', label: function (n) { return n + ' konu oku'; } },
    { key: 'questions', icon: 'target', label: function (n) { return n + ' soru çöz'; } },
    { key: 'wordsReviewed', icon: 'notebook', label: function (n) { return n + ' kelime tekrar et'; } },
    { key: 'gameNodes', icon: 'flag', label: function (n) { return n + ' oyun durağı tamamla'; } }
  ];
  function dailyDoneCount(progress, targets) {
    var n = 0;
    DAILY_TASKS.forEach(function (task, i) { if ((progress[task.key] || 0) >= targets[i]) n++; });
    return n;
  }

  /* Ana ekran sade kalsın diye görevler burada değil, tek satırlık bir
     menü düğmesinde: tıklanınca modal içinde açılır (bkz. app.js'teki
     daily-modal kapanış kablolaması, açılış burada yapılır çünkü bu
     düğme kalıcı üst çubuktaki gibi değil, her render'da yeniden çizilir). */
  function dailyButton() {
    var targets = KI.store.dailyTargets();
    var progress = KI.store.dailyProgress();
    var doneCount = dailyDoneCount(progress, targets);
    var allDone = doneCount === DAILY_TASKS.length;
    var btn = U.el('button', { class: 'gate__daily-btn' + (allDone ? ' is-all-done' : ''), type: 'button' }, [
      U.el('span', { class: 'gate__daily-btn-ico', html: KI.icons.html('calendar') }),
      U.el('span', { class: 'gate__daily-btn-label', text: 'Bugünün Çalışması' }),
      U.el('span', { class: 'gate__daily-btn-count', html: (allDone ? KI.icons.html('check-circle') : '') + ' ' + doneCount + '/' + DAILY_TASKS.length })
    ]);
    btn.addEventListener('click', function () {
      buildDailyModal();
      KI.util.openModal(document.getElementById('daily-modal'), btn);
      KI.audio.play('open');
    });
    return btn;
  }

  /* Modal içeriği: gerçek görev listesi, tik/üstü çizili tamamlanma
     durumuyla. app.js modalın kapanışını yönetir. */
  function buildDailyModal() {
    var body = document.getElementById('daily-body');
    if (!body) return;
    U.clear(body);
    var targets = KI.store.dailyTargets();
    var progress = KI.store.dailyProgress();
    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.9rem;margin:0 0 10px',
      text: 'Her gün küçük bir hedef seti; 7 günde bir aynı hedefler geri gelir.' }));
    var list = U.el('div', { class: 'gate__daily-list' });
    DAILY_TASKS.forEach(function (task, i) {
      var target = targets[i];
      var count = Math.min(progress[task.key] || 0, target);
      var done = count >= target;
      list.appendChild(U.el('div', { class: 'gate__daily-item' + (done ? ' is-done' : '') }, [
        U.el('span', { class: 'gate__daily-check', html: KI.icons.html(done ? 'check-circle' : 'circle') }),
        U.el('span', { class: 'gate__daily-ico', html: KI.icons.html(task.icon) }),
        U.el('span', { class: 'gate__daily-label', text: task.label(target) }),
        U.el('span', { class: 'gate__daily-count', text: count + '/' + target })
      ]));
    });
    body.appendChild(list);
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

    /* Düğme + footnote aynı sarmalayıcıda: .gate'in dış gap'ine yeni bir
       yuva eklenmesin diye (en küçük ekranlarda taşmaya yol açıyordu),
       ikisi kendi aralarında daha dar bir boşlukla, tek bir "alt blok"
       olarak sayılır. */
    var bottom = U.el('div', { class: 'gate__bottom' });
    bottom.appendChild(dailyButton());
    bottom.appendChild(U.el('p', { class: 'gate__footnote',
      text: 'Logspace' + (KI.appVersion ? ' · v' + KI.appVersion : '') }));
    wrap.appendChild(bottom);

    frag.appendChild(wrap);
    return frag;
  }

  KI.viewGate = { render: render };
})(window.KI);
