/* ============================================================
   Kolay İngilizce — audio.js
   Web Audio ile üretilen kısık, sıcak, retro ses efektleri.
   Hiçbir ses dosyası indirilmez; sesler tarayıcıda sentezlenir.
   ============================================================ */
(function (KI) {
  'use strict';

  var ctx = null, master = null, accent = null, ready = false;
  var MASTER_GAIN = 0.16;   // kısık: uygulamanın önüne geçmesin
  var ACCENT_GAIN = 0.75;   // başarım gibi nadir, kutlama anları: belirgin şekilde daha yüksek

  function init() {
    if (ready) return true;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    try {
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = MASTER_GAIN;
      accent = ctx.createGain();
      accent.gain.value = ACCENT_GAIN;
      // yumuşatıcı: tiz cızırtıyı kes, retro "oda" hissi ver
      var lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 5200;
      lp.Q.value = 0.6;
      master.connect(lp);
      accent.connect(lp);
      lp.connect(ctx.destination);
      ready = true;
      return true;
    } catch (e) { return false; }
  }

  function enabled() { return KI.store ? KI.store.get('sound') : true; }

  /* Tek bir nota: frekans, süre, dalga türü, gecikme, seviye, (varsa) bus.
     bus verilmezse normal efekt seviyesindeki master'a bağlanır; başarım
     gibi nadir kutlama sesleri accent bus'ını kullanır (bkz. ACCENT_GAIN). */
  function tone(freq, dur, type, delay, level, slideTo, bus) {
    if (!ready) return;
    var t0 = ctx.currentTime + (delay || 0);
    var osc = ctx.createOscillator();
    var g = ctx.createGain();
    osc.type = type || 'triangle';
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);

    var peak = (level === undefined ? 0.6 : level);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

    osc.connect(g); g.connect(bus || master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.04);
  }

  /* Kısa "tık": filtrelenmiş gürültü patlaması */
  function click(level, freq, bus) {
    if (!ready) return;
    var t0 = ctx.currentTime;
    var len = Math.floor(ctx.sampleRate * 0.035);
    var buf = ctx.createBuffer(1, len, ctx.sampleRate);
    var data = buf.getChannelData(0);
    for (var i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    var src = ctx.createBufferSource();
    src.buffer = buf;
    var bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = freq || 1400;
    bp.Q.value = 1.1;
    var g = ctx.createGain();
    g.gain.value = (level === undefined ? 0.35 : level);
    src.connect(bp); bp.connect(g); g.connect(bus || master);
    src.start(t0);
  }

  var recipes = {
    tap: function () { click(0.30, 1500); tone(660, 0.07, 'sine', 0, 0.22); },
    nav: function () { tone(523.25, 0.10, 'triangle', 0, 0.35); tone(784, 0.13, 'triangle', 0.07, 0.28); },
    back: function () { tone(660, 0.10, 'triangle', 0, 0.30); tone(440, 0.14, 'triangle', 0.06, 0.26); },
    open: function () { click(0.22, 900); tone(880, 0.12, 'sine', 0.02, 0.26); },
    close: function () { tone(520, 0.10, 'sine', 0, 0.22, 330); },
    reveal: function () { tone(587.33, 0.09, 'sine', 0, 0.3); tone(880, 0.16, 'sine', 0.06, 0.24); },
    word: function () { click(0.18, 2200); tone(1320, 0.06, 'sine', 0, 0.14); },
    correct: function () {
      tone(523.25, 0.11, 'triangle', 0.00, 0.34);
      tone(659.25, 0.11, 'triangle', 0.09, 0.32);
      tone(783.99, 0.20, 'triangle', 0.18, 0.30);
    },
    wrong: function () {
      tone(220, 0.16, 'sawtooth', 0.00, 0.16, 180);
      tone(174.61, 0.22, 'triangle', 0.10, 0.20);
    },
    finish: function () {
      tone(523.25, 0.12, 'triangle', 0.00, 0.30);
      tone(659.25, 0.12, 'triangle', 0.10, 0.30);
      tone(783.99, 0.12, 'triangle', 0.20, 0.30);
      tone(1046.5, 0.30, 'triangle', 0.30, 0.30);
    },
    /* başarım kutlaması: nadir görülür, bu yüzden accent bus'ıyla
       (bkz. ACCENT_GAIN = .75) diğer efektlerden belirgin biçimde yüksek çalar */
    achievement: function () {
      tone(523.25, 0.12, 'triangle', 0.00, 0.55, null, accent);
      tone(659.25, 0.12, 'triangle', 0.10, 0.55, null, accent);
      tone(783.99, 0.14, 'triangle', 0.20, 0.55, null, accent);
      tone(1046.5, 0.32, 'triangle', 0.32, 0.55, null, accent);
      tone(1318.5, 0.30, 'sine', 0.38, 0.4, null, accent);
    },
    star: function () { tone(1318.5, 0.08, 'sine', 0, 0.25); tone(1760, 0.14, 'sine', 0.07, 0.22); },
    toggle: function () { click(0.25, 1100); }
  };

  var A = {
    /* İlk kullanıcı hareketinde ses motorunu uyandır (tarayıcı kuralı) */
    unlock: function () {
      if (!init()) return;
      if (ctx.state === 'suspended') { try { ctx.resume(); } catch (e) {} }
    },
    play: function (name) {
      /* titreşim ses ayarından bağımsız çalışır: kısılmış sesle de,
         sessiz modda da dokunsal geri bildirim istenebilir. */
      if (KI.haptics) KI.haptics.trigger(name);
      if (!enabled()) return;
      if (!init()) return;
      if (ctx.state === 'suspended') { try { ctx.resume(); } catch (e) {} }
      var r = recipes[name] || recipes.tap;
      try { r(); } catch (e) {}
    },
    available: function () { return !!(window.AudioContext || window.webkitAudioContext); }
  };

  KI.audio = A;
})(window.KI);
