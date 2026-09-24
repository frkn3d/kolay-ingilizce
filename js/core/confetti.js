/* ============================================================
   Gramer Atlası — confetti.js
   Oyun Modu kutlama efekti: küçük renkli parçacıklar kısa süre
   ekrana saçılır. Saf CSS animasyonu kullanır; "daha az hareket"
   ayarı zaten global olarak tüm animasyon sürelerini sıfıra
   indirdiği için (bkz. base.css html[data-motion="less"]) burada
   ayrıca bir kontrol gerekmez.
   ============================================================ */
(function (KI) {
  'use strict';

  var COLORS = ['#2a6a46', '#d9a03c', '#b5542f', '#3f7f8c', '#6d4a7a', '#5aa077', '#fbf6e9'];

  function burst(opts) {
    opts = opts || {};
    var big = !!opts.big;
    var count = big ? 64 : 22;
    var durMs = big ? 2200 : 1100;

    var wrap = document.createElement('div');
    wrap.className = 'confetti-burst';
    for (var i = 0; i < count; i++) {
      var p = document.createElement('span');
      p.className = 'confetti-piece';
      var dx = Math.round((Math.random() * 2 - 1) * (big ? 220 : 130));
      var dur = (durMs / 1000 + Math.random() * 0.5).toFixed(2) + 's';
      var delay = (Math.random() * (big ? 0.4 : 0.15)).toFixed(2) + 's';
      p.style.left = (38 + Math.random() * 24) + '%';
      p.style.setProperty('--dx', dx + 'px');
      p.style.setProperty('--dur', dur);
      p.style.animationDelay = delay;
      p.style.background = COLORS[i % COLORS.length];
      if (i % 3 === 0) p.style.borderRadius = '50%';
      wrap.appendChild(p);
    }
    document.body.appendChild(wrap);
    setTimeout(function () { wrap.parentNode && wrap.parentNode.removeChild(wrap); }, durMs + 700);
  }

  KI.confetti = { burst: burst };
})(window.KI);
