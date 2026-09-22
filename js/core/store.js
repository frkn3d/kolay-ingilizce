/* ============================================================
   Kolay İngilizce — store.js
   Ayarlar, ilerleme ve kelime defteri: localStorage üzerinde.
   ============================================================ */
(function (KI) {
  'use strict';

  var KEY = 'kolay-ingilizce/v1';

  var defaults = {
    sound: true,
    theme: 'light',
    speechRate: 0.85,
    speechVoice: '',
    autoTranslate: false,
    autoSpeakWord: false,
    learned: {},     // { tenseId: true }
    scores: {},      // { tenseId: {best: 0, total: 0} }
    words: [],       // [{en, tr, at}]
    visits: 0,
    lastTense: '',

    /* --- yanlışlardan öğrenme --- */
    weak: {},          // { tenseId: {wrong: n, right: n} }
    wrongQs: [],       // yanlış yapılan sorular
    wrongWords: [],    // yanlış bilinen kelimeler

    /* --- oturum ve görünüm tercihleri --- */
    quizSize: 10,
    onlyLearned: false,
    fontSize: 'normal',   // small | normal | large
    lessMotion: false
  };

  var state = load();

  function load() {
    var out = {}, k;
    for (k in defaults) if (Object.prototype.hasOwnProperty.call(defaults, k)) out[k] = clone(defaults[k]);
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var saved = JSON.parse(raw);
        for (k in saved) if (Object.prototype.hasOwnProperty.call(defaults, k)) out[k] = saved[k];
      }
    } catch (e) { /* gizli sekme / kapalı depolama: varsayılanlarla devam */ }
    return out;
  }

  function clone(v) { return (v && typeof v === 'object') ? JSON.parse(JSON.stringify(v)) : v; }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { /* yazılamıyorsa sessizce geç */ }
  }

  var S = {
    get: function (k) { return state[k]; },
    set: function (k, v) { state[k] = v; save(); return v; },
    all: function () { return state; },

    /* --- ilerleme --- */
    isLearned: function (id) { return !!state.learned[id]; },
    toggleLearned: function (id) {
      if (state.learned[id]) delete state.learned[id];
      else state.learned[id] = true;
      save();
      return !!state.learned[id];
    },
    learnedCount: function () { return Object.keys(state.learned).length; },

    saveScore: function (id, correct, total) {
      var cur = state.scores[id] || { best: 0, total: total };
      if (correct > cur.best) cur.best = correct;
      cur.total = total;
      state.scores[id] = cur;
      save();
      return cur;
    },
    getScore: function (id) { return state.scores[id] || null; },

    /* --- yanlışlardan öğrenme --- */
    recordAnswer: function (q, ok) {
      if (!q) return;
      if (q.tenseId) {
        var w = state.weak[q.tenseId] || { wrong: 0, right: 0 };
        if (ok) w.right++; else w.wrong++;
        state.weak[q.tenseId] = w;
      }
      if (!ok) {
        if (q.blank) {
          var key = q.blank.q;
          state.wrongQs = state.wrongQs.filter(function (x) { return x.q !== key; });
          state.wrongQs.unshift({ q: q.blank.q, options: q.blank.options, answer: q.blank.answer,
            why: q.blank.why, tenseId: q.tenseId || '', at: Date.now() });
          if (state.wrongQs.length > 60) state.wrongQs.pop();
        }
        if (q.word && q.word.en) {
          var we = q.word.en.toLowerCase();
          state.wrongWords = state.wrongWords.filter(function (x) { return x.en.toLowerCase() !== we; });
          state.wrongWords.unshift({ en: q.word.en, tr: q.word.tr, at: Date.now() });
          if (state.wrongWords.length > 100) state.wrongWords.pop();
        }
      } else {
        /* doğru bilinen yanlış listesinden çıkar */
        if (q.blank) state.wrongQs = state.wrongQs.filter(function (x) { return x.q !== q.blank.q; });
        if (q.word && q.word.en) {
          var e2 = q.word.en.toLowerCase();
          state.wrongWords = state.wrongWords.filter(function (x) { return x.en.toLowerCase() !== e2; });
        }
      }
      save();
    },
    weakTenses: function (limit) {
      var out = [];
      Object.keys(state.weak).forEach(function (id) {
        var w = state.weak[id];
        var total = w.wrong + w.right;
        if (w.wrong > 0) out.push({ id: id, wrong: w.wrong, right: w.right, rate: w.wrong / total });
      });
      out.sort(function (a, b) { return (b.rate - a.rate) || (b.wrong - a.wrong); });
      return limit ? out.slice(0, limit) : out;
    },
    wrongQuestions: function () { return state.wrongQs.slice(); },
    wrongWordList: function () { return state.wrongWords.slice(); },
    troubleCount: function () {
      return state.wrongQs.length + state.wrongWords.length + S.weakTenses().length;
    },
    clearTrouble: function () {
      state.wrongQs = []; state.wrongWords = []; state.weak = {}; save();
    },

    /* --- kelime defteri --- */
    hasWord: function (en) {
      var e = String(en).toLowerCase();
      return state.words.some(function (w) { return w.en.toLowerCase() === e; });
    },
    addWord: function (en, tr) {
      if (S.hasWord(en)) return false;
      state.words.unshift({ en: en, tr: tr, at: Date.now() });
      if (state.words.length > 400) state.words.pop();
      save();
      return true;
    },
    removeWord: function (en) {
      var e = String(en).toLowerCase();
      state.words = state.words.filter(function (w) { return w.en.toLowerCase() !== e; });
      save();
    },
    words: function () { return state.words.slice(); },

    reset: function () {
      state = load.call(null);
      try { localStorage.removeItem(KEY); } catch (e) {}
      var k, fresh = {};
      for (k in defaults) fresh[k] = clone(defaults[k]);
      state = fresh;
      save();
    }
  };

  state.visits = (state.visits || 0) + 1;
  save();

  KI.store = S;
})(window.KI);
