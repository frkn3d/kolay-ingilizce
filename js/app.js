/* ============================================================
   Kolay İngilizce — app.js
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
  var routes = [
    { re: /^\/?$/,                    tab: 'harita',    run: function () { return KI.viewHome.render(); } },
    { re: /^\/harita\/?$/,            tab: 'harita',    run: function () { return KI.viewHome.render(); } },
    { re: /^\/zaman\/([a-z-]+)\/?$/,  tab: 'harita',    run: function (m) { return KI.viewTense.render(m[1]); } },
    { re: /^\/temeller\/?$/,          tab: 'temeller',  run: function () { return KI.viewBasics.render(null); } },
    { re: /^\/temeller\/([a-z-]+)\/?$/, tab: 'temeller', run: function (m) { return KI.viewBasics.render(m[1]); } },
    { re: /^\/alistirma\/?$/,         tab: 'alistirma', run: function () { return KI.viewPractice.render(null); } },
    { re: /^\/alistirma\/([a-z-]+)\/?$/, tab: 'alistirma', run: function (m) { return KI.viewPractice.render(m[1]); } },
    { re: /^\/karsilastir\/?$/, tab: 'temeller',  run: function () { return KI.viewCompare.render(null); } },
    { re: /^\/karsilastir\/([a-z-]+)\/?$/, tab: 'temeller', run: function (m) { return KI.viewCompare.render(m[1]); } },
    { re: /^\/sozluk\/?$/,            tab: 'sozluk',    run: function () { return KI.viewDictionary.render(); } }
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

    /* ses düğmesi */
    var sb = document.getElementById('btn-sound');
    function paintSound() {
      var on = !!KI.store.get('sound');
      sb.classList.toggle('is-off', !on);
      sb.querySelector('.iconbtn__glyph').innerHTML = KI.icons.html(on ? 'bell' : 'bell-off');
      sb.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    paintSound();
    sb.addEventListener('click', function () {
      KI.store.set('sound', !KI.store.get('sound'));
      paintSound();
      KI.audio.play('toggle');
      U.toast(KI.store.get('sound') ? 'Ses efektleri açık' : 'Ses efektleri kapalı');
    });

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
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (!modal.hidden) closeModal();
        else KI.sentence.sheet.hide();
      }
    });

    /* buton sesleri: data-sfx taşıyan her şey */
    document.addEventListener('click', function (e) {
      var el = e.target.closest ? e.target.closest('[data-sfx]') : null;
      if (el) KI.audio.play(el.getAttribute('data-sfx') || 'tap');
    }, true);

    /* ilk dokunuşta ses motorunu uyandır */
    ['pointerdown', 'keydown'].forEach(function (evt) {
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

    var foot = document.getElementById('foot-count');
    if (foot) foot.textContent = KI.tenses.list.length + ' zaman · ' + KI.glossary.size() + ' kelime';

    if (!location.hash) location.replace('#/harita');
    paint();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window.KI);
