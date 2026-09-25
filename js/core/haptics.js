/* ============================================================
   Gramer Atlası - haptics.js
   Dokunsal geri bildirim: KI.audio.play() ile aynı isim setini
   kullanır, böylece her ses efekti otomatik olarak uygun titreşimi
   de tetikler. Yeni bir çağrı noktası eklemek yeterli olur.
   ============================================================ */
(function (KI) {
  'use strict';

  var TAP_MS = 8;
  var WRONG_MS = 200;
  var ACHIEVEMENT_PATTERN = [70, 90, 70, 90, 70];   // art arda üç vuruş
  var COMBO_PATTERN = [30, 40, 30];                 // 3/5/7 kombo: iki kısa vuruş
  var FLAWLESS_PATTERN = [60, 60, 60, 60, 60, 60, 90]; // 10/10 kutlaması: uzun seri

  function supported() {
    return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';
  }

  function enabled() {
    if (!supported()) return false;
    return KI.store ? KI.store.get('haptics') !== false : true;
  }

  var H = {
    /* name: audio.js'teki tarif adıyla aynıdır (çoğu minik, 'wrong' uzun,
       'achievement' art arda üç kısa vuruş) */
    trigger: function (name) {
      if (!enabled()) return;
      try {
        if (name === 'wrong') navigator.vibrate(WRONG_MS);
        else if (name === 'achievement') navigator.vibrate(ACHIEVEMENT_PATTERN);
        else if (name === 'combo') navigator.vibrate(COMBO_PATTERN);
        else if (name === 'flawless') navigator.vibrate(FLAWLESS_PATTERN);
        else navigator.vibrate(TAP_MS);
      } catch (e) {}
    },
    available: supported
  };

  KI.haptics = H;
})(window.KI);
