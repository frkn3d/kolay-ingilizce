/* ============================================================
   Gramer Atlası - haptics.js
   Dokunsal geri bildirim: KI.audio.play() ile aynı isim setini
   kullanır, böylece her ses efekti otomatik olarak uygun titreşimi
   de tetikler. Yeni bir çağrı noktası eklemek yeterli olur.
   ============================================================ */
(function (KI) {
  'use strict';

  /* 8-12 ms gibi çok kısa vuruşlar birçok Android telefonda zayıf kalıyor
     ya da hiç hissedilmiyor; 20 ms belirgin ama hâlâ kısa bir "tık". */
  var TAP_MS = 20;
  var TICK_MS = 12;                                 // kaydırıcı/zoom: en hafif
  var SWAP_PATTERN = [26, 50, 18];                  // Harita kural döngüsü: çift tık hissi
  var WRONG_MS = 200;
  var ACHIEVEMENT_PATTERN = [70, 90, 70, 90, 70];   // art arda üç vuruş
  var COMBO_PATTERN = [30, 40, 30];                 // 3/5/7 kombo: iki kısa vuruş
  var FLAWLESS_PATTERN = [60, 60, 60, 60, 60, 60, 90]; // 10/10 kutlaması: uzun seri

  function vibrateApi() {
    return typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function';
  }

  /* iPhone'da Safari navigator.vibrate'i desteklemiyor. iOS 17.4+ ise
     <input type="checkbox" switch> anahtarına dokunulduğunda sistem
     titreşimi (taptic) veriyor; görünmez bir anahtarın etiketine programla
     tıklayarak aynı minik titreşim elde edilir. Desenler tek vuruşa
     iner, 'wrong' gibi vurgulu olanlar iki vuruş olur. */
  var IOS = typeof navigator !== 'undefined' &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
  var iosLabel = null;
  function iosTick() {
    try {
      if (!iosLabel) {
        iosLabel = document.createElement('label');
        iosLabel.setAttribute('aria-hidden', 'true');
        iosLabel.style.cssText = 'position:fixed;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;left:-9px;top:-9px';
        var inp = document.createElement('input');
        inp.type = 'checkbox';
        inp.setAttribute('switch', '');
        inp.tabIndex = -1;
        iosLabel.appendChild(inp);
        /* bu sahte tıklama sayfadaki "dışarı tıklayınca kapat" dinleyicilerine
           (ör. kelime kartı) ulaşmasın */
        iosLabel.addEventListener('click', function (e) { e.stopPropagation(); });
        document.body.appendChild(iosLabel);
      }
      iosLabel.click();
    } catch (e) {}
  }
  function supported() { return vibrateApi() || IOS; }

  function enabled() {
    if (!supported()) return false;
    return KI.store ? KI.store.get('haptics') !== false : true;
  }

  var H = {
    /* name: audio.js'teki tarif adıyla aynıdır (çoğu minik, 'wrong' uzun,
       'achievement' art arda üç kısa vuruş) */
    trigger: function (name) {
      if (!enabled()) return;
      if (!vibrateApi()) {
        if (name === 'tick') return;   // en hafif olanı iPhone'da atla
        iosTick();
        if (name === 'wrong' || name === 'swap' || name === 'achievement' || name === 'combo' || name === 'flawless') setTimeout(iosTick, 90);
        return;
      }
      try {
        if (name === 'wrong') navigator.vibrate(WRONG_MS);
        else if (name === 'swap') navigator.vibrate(SWAP_PATTERN);
        else if (name === 'tick') navigator.vibrate(TICK_MS);
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
