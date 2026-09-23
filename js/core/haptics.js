/* ============================================================
   Kolay İngilizce — haptics.js
   Dokunsal geri bildirim: KI.audio.play() ile aynı isim setini
   kullanır, böylece her ses efekti otomatik olarak uygun titreşimi
   de tetikler. Yeni bir çağrı noktası eklemek yeterli olur.
   ============================================================ */
(function (KI) {
  'use strict';

  var TAP_MS = 8;
  var WRONG_MS = 200;

  function supported() {
    return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';
  }

  function enabled() {
    if (!supported()) return false;
    return KI.store ? KI.store.get('haptics') !== false : true;
  }

  var H = {
    /* name: audio.js'teki tarif adıyla aynıdır ('wrong' hariç hepsi minik) */
    trigger: function (name) {
      if (!enabled()) return;
      try { navigator.vibrate(name === 'wrong' ? WRONG_MS : TAP_MS); } catch (e) {}
    },
    available: supported
  };

  KI.haptics = H;
})(window.KI);
