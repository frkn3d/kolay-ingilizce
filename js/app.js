/* ============================================================
   Gramer Atlası — app.js
   Yönlendirici (hash tabanlı), tema, ses düğmeleri, başlatma.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  /* ---------------- tema ---------------- */
  KI.setTheme = function (name) {
    var t = (name === 'dark') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
    KI.store.set('theme', t);
    var g = U.qs('#btn-theme .iconbtn__glyph');
    if (g) g.innerHTML = KI.icons.html(t === 'dark' ? 'sun' : 'moon');
    var meta = U.qs('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#0d1711' : '#14361f');
  };

  /* Yazı boyutu ve hareket tercihlerini belgeye uygula */
  KI.applyPrefs = function () {
    var root = document.documentElement;
    var fs = KI.store.get('fontSize') || 'normal';
    if (fs === 'normal') root.removeAttribute('data-font');
    else root.setAttribute('data-font', fs);
    if (KI.store.get('lessMotion')) root.setAttribute('data-motion', 'less');
    else root.removeAttribute('data-motion');
  };

  /* ---------------- yönlendirici ---------------- */
  var EDU_TABS = ['harita', 'temeller', 'alistirma', 'sozluk'];

  var routes = [
    { re: /^\/?$/,                    tab: 'root',      run: function () { return KI.viewGate.render(); } },
    { re: /^\/harita\/?$/,            tab: 'harita',    run: function () { return KI.viewHome.render(); } },
    { re: /^\/zaman\/([a-z-]+)\/?$/,  tab: 'harita',    run: function (m) { return KI.viewTense.render(m[1]); } },
    { re: /^\/temeller\/?$/,          tab: 'temeller',  run: function () { return KI.viewBasics.render(null); } },
    { re: /^\/temeller\/([a-z-]+)\/?$/, tab: 'temeller', run: function (m) { return KI.viewBasics.render(m[1]); } },
    { re: /^\/alistirma\/?$/,         tab: 'alistirma', run: function () { return KI.viewPractice.render(null); } },
    { re: /^\/alistirma\/([a-z-]+)\/?$/, tab: 'alistirma', run: function (m) { return KI.viewPractice.render(m[1]); } },
    { re: /^\/karsilastir\/?$/, tab: 'temeller',  run: function () { return KI.viewCompare.render(null); } },
    { re: /^\/karsilastir\/([a-z-]+)\/?$/, tab: 'temeller', run: function (m) { return KI.viewCompare.render(m[1]); } },
    { re: /^\/sozluk\/?$/,            tab: 'sozluk',    run: function () { return KI.viewDictionary.render(); } },
    { re: /^\/sozluk\/kelimeler\/?$/, tab: 'sozluk',    run: function () { return KI.viewDictionary.words(); } },
    { re: /^\/sozluk\/hikayeler\/?$/, tab: 'sozluk',    run: function () { return KI.viewStories.list(); } },
    { re: /^\/sozluk\/hikayeler\/([a-z0-9-]+)\/?$/, tab: 'sozluk', run: function (m) { return KI.viewStories.detail(m[1]); } },
    { re: /^\/oyun\/?$/,              tab: 'oyun',      run: function () { return KI.viewGame.map(); } },
    { re: /^\/oyun\/([a-z]+)\/([a-z0-9-]+)\/?$/, tab: 'oyun', run: function (m) { return KI.viewGame.quiz(m[1], m[2]); } }
  ];

  var lastPath = null;

  function paint() {
    var path = (location.hash || '#/').replace(/^#/, '');
    var view = document.getElementById('view');
    var hit = null, m = null, i;

    for (i = 0; i < routes.length; i++) {
      m = path.match(routes[i].re);
      if (m) { hit = routes[i]; break; }
    }

    KI.sentence.sheet.hide();
    U.clear(view);

    if (!hit) {
      view.appendChild(U.el('div', { class: 'empty' }, [
        U.el('span', { class: 'empty__ico', html: KI.icons.html('compass') }),
        U.el('h2', { text: 'Sayfa bulunamadı' }),
        U.el('a', { class: 'btn btn--primary', href: '#/harita', text: 'Haritaya dön' })
      ]));
    } else {
      view.appendChild(hit.run(m));
    }

    U.qsa('.tab').forEach(function (a) {
      a.classList.toggle('is-active', hit && a.getAttribute('data-route') === hit.tab);
    });
    document.documentElement.setAttribute('data-section', hit ? hit.tab : 'root');

    /* Eğitim Modu'nun 4 sekmesi dışında (giriş ekranı, Oyun Modu) alt
       sekme çubuğu gizlenir; o modların kendi iç gezinmesi vardır. */
    var showTabbar = !!(hit && EDU_TABS.indexOf(hit.tab) >= 0);
    var tabbarEl = document.getElementById('tabbar');
    if (tabbarEl) tabbarEl.hidden = !showTabbar;
    document.body.classList.toggle('no-tabbar', !showTabbar);

    /* Giriş ekranının (kök) kendi tasarımı var: üst çubuk da gizlenir,
       tek ekrana sığsın diye; .view ve body'nin ambient dolguları da
       bu sayfada sıfırlanır (bkz. game.css .is-gate). */
    var isGate = !!(hit && hit.tab === 'root');
    var appbarEl = document.getElementById('appbar');
    if (appbarEl) appbarEl.hidden = isGate;
    document.body.classList.toggle('is-gate', isGate);

    if (KI.viewGame) KI.viewGame.syncChrome(hit ? hit.tab : null);

    if (lastPath !== null && lastPath !== path) U.scrollTop();
    lastPath = path;
    view.focus({ preventScroll: true });
  }

  KI.router = {
    refresh: paint,
    go: function (hash) { location.hash = hash; }
  };

  /* ---------------- başlangıç ---------------- */
  var booted = false;
  function boot() {
    if (booted) return;
    booted = true;

    /* sabit ikonlar: her ikon tek yerden, icons.js'ten gelir */
    U.qsa('[data-icon]').forEach(function (el) { el.innerHTML = KI.icons.html(el.getAttribute('data-icon')); });

    KI.setTheme(KI.store.get('theme'));
    KI.applyPrefs();
    KI.sentence.sheet.init();

    /* günlük seri ve başarımlar: sayfa her açıldığında bir kez kontrol edilir */
    KI.store.touchVisitStreak();
    if (KI.achievements) KI.achievements.evaluate();

    /* tema düğmesi */
    document.getElementById('btn-theme').addEventListener('click', function () {
      KI.setTheme(KI.store.get('theme') === 'dark' ? 'light' : 'dark');
      KI.audio.play('toggle');
    });

    /* ayarlar */
    var modal = document.getElementById('settings-modal');
    document.getElementById('btn-settings').addEventListener('click', function () {
      KI.settings.build();
      modal.hidden = false;
      KI.audio.play('open');
    });
    function closeModal() { modal.hidden = true; KI.audio.play('close'); }
    document.getElementById('settings-close').addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });

    /* başarımlar */
    var achModal = document.getElementById('achievements-modal');
    document.getElementById('btn-achievements').addEventListener('click', function () {
      KI.achievements.buildList();
      achModal.hidden = false;
      KI.audio.play('open');
    });
    function closeAchModal() { achModal.hidden = true; KI.audio.play('close'); }
    document.getElementById('achievements-close').addEventListener('click', closeAchModal);
    achModal.addEventListener('click', function (e) { if (e.target === achModal) closeAchModal(); });

    /* Oyun Modu: canlar */
    var heartsModal = document.getElementById('hearts-modal');
    document.getElementById('btn-hearts').addEventListener('click', function () {
      KI.viewGame.buildHeartsModal();
      heartsModal.hidden = false;
      KI.audio.play('open');
    });
    function closeHeartsModal() { heartsModal.hidden = true; KI.audio.play('close'); }
    document.getElementById('hearts-close').addEventListener('click', closeHeartsModal);
    heartsModal.addEventListener('click', function (e) { if (e.target === heartsModal) closeHeartsModal(); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (!modal.hidden) closeModal();
        else if (!achModal.hidden) closeAchModal();
        else if (!heartsModal.hidden) closeHeartsModal();
        else KI.sentence.sheet.hide();
      }
    });

    /* buton sesleri: data-sfx taşıyan her şey */
    document.addEventListener('click', function (e) {
      var el = e.target.closest ? e.target.closest('[data-sfx]') : null;
      if (el) KI.audio.play(el.getAttribute('data-sfx') || 'tap');
    }, true);

    /* ilk dokunuşta ses motorunu uyandır (iOS Safari'de touchend en güvenilir olan) */
    ['pointerdown', 'touchend', 'keydown'].forEach(function (evt) {
      window.addEventListener(evt, function once() {
        KI.audio.unlock();
        window.removeEventListener(evt, once);
      }, { once: true });
    });

    /* sayfa kapanırken konuşmayı sustur */
    window.addEventListener('beforeunload', function () { KI.speech.stop(); });
    window.addEventListener('hashchange', function () {
      /* aynı adrese ikinci kez çizim yapma */
      if ((location.hash || '#/').replace(/^#/, '') === lastPath) return;
      KI.speech.stop();
      paint();
    });

    if (!location.hash) location.replace('#/');
    paint();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  /* Çevrimdışı çalışma: sw.js dosya kökünde olmalı. file:// üzerinde ve
     eski tarayıcılarda serviceWorker desteği yoktur; hata sessizce yutulur. */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }
})(window.KI);
