/* ============================================================
   Gramer Atlası — gate.js
   Uygulamanın ana giriş ekranı: Oyun Modu / Eğitim Modu seçimi.
   Logoya tıklayınca her zaman buraya dönülür (bkz. app.js kökü).
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

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

    var helpBtn = U.el('a', { class: 'gate__stats', href: '#/nasil-kullanilir', 'data-sfx': 'nav' }, [
      U.el('span', { class: 'gate__stats-ico', html: KI.icons.html('help-circle') }),
      U.el('span', { text: 'Nasıl Kullanılır' })
    ]);
    var helpWrap = U.el('div', { class: 'gate__help-wrap' }, [helpBtn]);
    /* İlk açılışta parmakla dokunma ipucu bir kez görünür, sonra
       bir daha hiç çıkmaz (bkz. KI.store.markHelpHintSeen). */
    if (!KI.store.hasSeenHelpHint()) {
      helpWrap.appendChild(U.el('span', { class: 'gate__help-hint', 'aria-hidden': 'true', text: '👇' }));
      KI.store.markHelpHintSeen();
    }
    actions.appendChild(helpWrap);

    actions.appendChild(U.el('a', { class: 'gate__stats', href: '#/istatistikler', 'data-sfx': 'nav' }, [
      U.el('span', { class: 'gate__stats-ico', html: KI.icons.html('chart') }),
      U.el('span', { text: 'İstatistikler' })
    ]));

    wrap.appendChild(actions);

    wrap.appendChild(U.el('p', { class: 'gate__footnote',
      text: 'Logspace' + (KI.appVersion ? ' · v' + KI.appVersion : '') }));

    frag.appendChild(wrap);
    return frag;
  }

  KI.viewGate = { render: render };
})(window.KI);
