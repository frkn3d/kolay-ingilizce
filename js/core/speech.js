/* ============================================================
   Gramer Atlası — speech.js
   Cihazın kendi konuşma motoru (Web Speech API). İnternet / API yok.
   Windows, macOS, Android ve iOS tarayıcılarında çalışır.
   ============================================================ */
(function (KI) {
  'use strict';

  var synth = window.speechSynthesis || null;
  var voices = [];
  var warned = false;
  /* iOS/Safari'de SpeechSynthesisUtterance nesnesi bir yere referans
     tutulmazsa konuşma başlamadan çöp toplayıcı tarafından silinip
     sessiz kalabiliyor (bilinen WebKit hatası). Modül seviyesinde
     tutmak bunu engeller. */
  var currentUtterance = null;

  function refresh() {
    if (!synth) return;
    try { voices = synth.getVoices() || []; } catch (e) { voices = []; }
  }

  if (synth) {
    refresh();
    if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', refresh);
    else synth.onvoiceschanged = refresh;
    // Bazı tarayıcılar listeyi geç doldurur
    setTimeout(refresh, 400);
    setTimeout(refresh, 1500);
  }

  function englishVoices() {
    return voices.filter(function (v) { return /^en(-|_|$)/i.test(v.lang || ''); });
  }

  function chooseVoice() {
    var wanted = KI.store ? KI.store.get('speechVoice') : '';
    var list = englishVoices();
    var i;
    if (wanted) {
      for (i = 0; i < voices.length; i++) if (voices[i].voiceURI === wanted || voices[i].name === wanted) return voices[i];
    }
    // Tercih sırası: en-GB > en-US > diğer İngilizce
    var prefer = ['en-GB', 'en_GB', 'en-US', 'en_US'];
    for (i = 0; i < prefer.length; i++) {
      var hit = list.filter(function (v) { return (v.lang || '').replace('_', '-') === prefer[i].replace('_', '-'); })[0];
      if (hit) return hit;
    }
    return list[0] || null;
  }

  var Sp = {
    supported: function () { return !!synth && typeof window.SpeechSynthesisUtterance === 'function'; },

    voices: function () { refresh(); return englishVoices(); },

    speak: function (text, opts) {
      opts = opts || {};
      if (!Sp.supported()) {
        if (!warned && KI.util) {
          warned = true;
          KI.util.toast('Bu tarayıcı sesli okumayı desteklemiyor.');
        }
        return false;
      }
      /* Zaten bir şey okunmuyorsa cancel() çağırmaya gerek yok — Safari'de
         cancel() hemen ardından aynı anda speak() çağrılması bazen konuşmayı
         sessizce iptal ediyor. */
      if (synth.speaking || synth.pending) { try { synth.cancel(); } catch (e) {} }
      refresh();

      var u = new window.SpeechSynthesisUtterance(String(text));
      currentUtterance = u;   // bkz. yukarısı: WebKit çöp toplama hatası
      var v = chooseVoice();
      if (v) { u.voice = v; u.lang = v.lang; }
      else { u.lang = 'en-US'; }

      var rate = KI.store ? Number(KI.store.get('speechRate')) : 0.85;
      u.rate = opts.rate || (isFinite(rate) && rate > 0 ? rate : 0.85);
      u.pitch = opts.pitch || 1;
      u.volume = opts.volume === undefined ? 1 : opts.volume;

      if (opts.onboundary) u.onboundary = opts.onboundary;
      if (opts.onstart) u.onstart = opts.onstart;
      u.onend = function () { if (currentUtterance === u) currentUtterance = null; if (opts.onend) opts.onend(); };
      u.onerror = function () { if (currentUtterance === u) currentUtterance = null; if (opts.onend) opts.onend(); };

      try {
        synth.speak(u);
        // Chrome/Android'de uzun metinlerde duraklama olabilir; diri tut
        if (!Sp._keepAlive) {
          Sp._keepAlive = setInterval(function () {
            if (synth.speaking && !synth.paused) { try { synth.resume(); } catch (e) {} }
          }, 8000);
        }
        return true;
      } catch (e) { return false; }
    },

    stop: function () { if (synth) { try { synth.cancel(); } catch (e) {} } },

    /* Tek kelimeyi biraz daha yavaş oku */
    word: function (w) { return Sp.speak(w, { rate: 0.7 }); }
  };

  KI.speech = Sp;
})(window.KI);
