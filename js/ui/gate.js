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
        U.el('img', { src: opts.img, alt: '', width: 108, height: 108 })
      ]),
      U.el('h2', { text: opts.title }),
      U.el('p', { text: opts.desc }),
      U.el('span', { class: 'gate__cta', text: opts.cta + '  →' })
    ]);
  }

  function render() {
    var frag = document.createDocumentFragment();
    var wrap = U.el('div', { class: 'gate' });

    wrap.appendChild(U.el('div', { class: 'gate__head' }, [
      U.el('p', { class: 'eyebrow', text: 'Gramer Atlası' }),
      U.el('h1', { text: 'Nasıl çalışmak istersin?' }),
      U.el('p', { class: 'soft', text: 'İkisi arasında istediğin an geçiş yapabilirsin; ilerlemen her modda ayrı saklanır.' })
    ]));

    var grid = U.el('div', { class: 'gate__grid' });
    grid.appendChild(card({
      mod: 'game', href: '#/oyun', img: 'assets/icon-mode-game.svg',
      title: 'Oyun Modu',
      desc: 'Aşağı doğru uzanan haritada ilerle; her durakta 10 soruluk kısa bir sınav var. Yanlış cevap can eksiltir.',
      cta: 'Haritaya gir'
    }));
    grid.appendChild(card({
      mod: 'study', href: '#/harita', img: 'assets/icon-mode-study.svg',
      title: 'Eğitim Modu',
      desc: 'Zaman çizgisi haritası, temeller, alıştırmalar, sözlük ve hikayeler — baştan sona öğrenme yolculuğu.',
      cta: 'Öğrenmeye başla'
    }));
    wrap.appendChild(grid);

    frag.appendChild(wrap);
    return frag;
  }

  KI.viewGate = { render: render };
})(window.KI);
