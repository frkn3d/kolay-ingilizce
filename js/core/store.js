/* ============================================================
   Gramer Atlası - store.js
   Ayarlar, ilerleme ve kelime defteri: localStorage üzerinde.
   ============================================================ */
(function (KI) {
  'use strict';

  var KEY = 'kolay-ingilizce/v1';

  /* Basit bir Leitner kutusu: doğru bilince bir sonraki kutuya geçer ve
     tekrar tarihi ertelenir; yanlış bilince ilk kutuya döner (bugün tekrar
     edilir). Kutu numarası = kaçıncı kez üst üste doğru bilindiği. */
  var SRS_INTERVAL_DAYS = [null, 0, 1, 3, 7, 16, 30];   // dizin = kutu no (1..6)
  var SRS_MAX_BOX = SRS_INTERVAL_DAYS.length - 1;
  var DAY = 24 * 60 * 60 * 1000;

  var defaults = {
    sound: true,
    haptics: true,
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
    seenHelpHint: false,   // giriş ekranındaki "Nasıl Kullanılır" el ipucu, yalnız ilk açılışta gösterilir

    /* --- yanlışlardan öğrenme --- */
    weak: {},          // { tenseId: {wrong: n, right: n} }
    wrongQs: [],       // yanlış yapılan sorular
    wrongWords: [],    // yanlış bilinen kelimeler

    /* --- oturum ve görünüm tercihleri --- */
    quizSize: 10,
    onlyLearned: false,
    fontSize: 'normal',   // small | normal | large
    lessMotion: false,

    /* --- başarımlar ve seri --- */
    achievements: {},      // { achievementId: kazanılma zamanı (ms) }
    quizzesCompleted: 0,
    perfectQuizzes: 0,
    streak: 0,
    lastVisitDay: '',      // 'YYYY-M-D', gün değişince seriyi güncellemek için

    /* --- Oyun Modu: canlar, premium, harita ilerlemesi --- */
    game: {
      hearts: 7,
      heartsDay: '',        // 'YYYY-M-D', gün değişince canlar 7'ye döner
      premium: false,
      progress: {},         // { level: { topicId: { done: true, best: 0..10, skipped: bool } } }
      perfectGameQuizzes: 0,
      bestCombo: 0,
      videoWatches: 0,
      seenBackupHint: false  // Oyun Modu haritasına ilk girişte gösterilen "yedekle" hatırlatması
    }
  };

  var GAME_MAX_HEARTS = 7;
  var GAME_VIDEO_BONUS = 3;

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
    /* Her kayıtta başarım koşulları yeniden değerlendirilir; achievements.js
       kendi içinde tekrar girişe (save() -> evaluate() -> set() -> save()) karşı
       korumalıdır. */
    if (KI.achievements) KI.achievements.evaluate();
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
      /* Sorulan kelime defterde kayıtlıysa (hangi moddan geldiğine
         bakmaksızın) aralıklı tekrar kutusunu da güncelle. */
      if (q.word && q.word.en && S.hasWord(q.word.en)) S.reviewWord(q.word.en, ok);
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
      state.words.unshift({ en: en, tr: tr, at: Date.now(), box: 1, due: Date.now() });
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
    masteredWordCount: function () {
      return state.words.filter(function (w) { return (w.box || 1) >= SRS_MAX_BOX; }).length;
    },

    /* --- aralıklı tekrar (Leitner kutusu) --- */
    /* Eski kelime defteri kayıtlarında box/due alanı yoktur; olmayanlar
       "hemen tekrar edilmeli" kabul edilir (due <= şimdi). */
    dueWords: function () {
      var now = Date.now();
      return state.words.filter(function (w) { return !w.due || w.due <= now; });
    },
    dueWordCount: function () { return S.dueWords().length; },
    reviewWord: function (en, ok) {
      var e = String(en).toLowerCase();
      var w = state.words.filter(function (x) { return x.en.toLowerCase() === e; })[0];
      if (!w) return;
      w.box = ok ? Math.min((w.box || 1) + 1, SRS_MAX_BOX) : 1;
      w.due = Date.now() + SRS_INTERVAL_DAYS[w.box] * DAY;
      save();
    },

    reset: function () {
      state = load.call(null);
      try { localStorage.removeItem(KEY); } catch (e) {}
      var k, fresh = {};
      for (k in defaults) fresh[k] = clone(defaults[k]);
      state = fresh;
      save();
    },

    /* --- alıştırma sayaçları (başarımlar için) --- */
    recordQuizResult: function (correct, total) {
      state.quizzesCompleted = (state.quizzesCompleted || 0) + 1;
      if (total > 0 && correct === total) state.perfectQuizzes = (state.perfectQuizzes || 0) + 1;
      save();
    },

    /* --- günlük seri: uygulama gün içinde ilk açıldığında bir kez çağrılır --- */
    touchVisitStreak: function () {
      var d = new Date();
      var key = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
      if (state.lastVisitDay === key) return;
      var y = new Date(d.getTime() - DAY);
      var yKey = y.getFullYear() + '-' + (y.getMonth() + 1) + '-' + y.getDate();
      state.streak = (state.lastVisitDay === yKey) ? (state.streak || 0) + 1 : 1;
      state.lastVisitDay = key;
      save();
    },

    /* --- giriş ekranındaki "Nasıl Kullanılır" el ipucu: yalnız ilk açılış --- */
    hasSeenHelpHint: function () { return !!state.seenHelpHint; },
    markHelpHintSeen: function () { state.seenHelpHint = true; save(); },

    /* --- Oyun Modu: günlük 7 can, video/premium ile kazanma, harita ilerlemesi ---
       Can sayısı günde bir kez 7'ye sıfırlanır (gerçek zamanlı yenilenme değil,
       basit "günlük hak" mantığı). Premium hesapta can hiç tükenmez. */
    gameTouchDay: function () {
      var d = new Date();
      var key = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
      if (state.game.heartsDay === key) return;
      state.game.heartsDay = key;
      state.game.hearts = GAME_MAX_HEARTS;
      save();
    },
    heartsCount: function () { return state.game.premium ? Infinity : state.game.hearts; },
    maxHearts: function () { return GAME_MAX_HEARTS; },
    isPremium: function () { return !!state.game.premium; },
    canPlayGame: function () { return state.game.premium || state.game.hearts > 0; },
    loseHeart: function () {
      if (state.game.premium) return state.game.hearts;
      state.game.hearts = Math.max(0, state.game.hearts - 1);
      save();
      return state.game.hearts;
    },
    /* Video izleyince +3 can verilir, ama 7'yi hiç geçmez. */
    gainHeart: function () {
      if (state.game.premium) return state.game.hearts;
      state.game.hearts = Math.min(GAME_MAX_HEARTS, state.game.hearts + GAME_VIDEO_BONUS);
      state.game.videoWatches = (state.game.videoWatches || 0) + 1;
      save();
      return state.game.hearts;
    },
    setPremium: function (on) { state.game.premium = !!on; save(); },

    gameProgress: function (level, topicId) {
      var lv = state.game.progress[level];
      return (lv && lv[topicId]) || null;
    },
    recordGameResult: function (level, topicId, correct, total) {
      var lv = state.game.progress[level] || (state.game.progress[level] = {});
      var cur = lv[topicId] || { done: false, best: 0 };
      cur.done = true;
      cur.skipped = false;
      if (correct > cur.best) cur.best = correct;
      lv[topicId] = cur;
      state.quizzesCompleted = (state.quizzesCompleted || 0) + 1;
      if (total > 0 && correct === total) {
        state.perfectQuizzes = (state.perfectQuizzes || 0) + 1;
        state.game.perfectGameQuizzes = (state.game.perfectGameQuizzes || 0) + 1;
      }
      save();
      return cur;
    },
    isGameTopicDone: function (level, topicId) {
      var p = S.gameProgress(level, topicId);
      return !!(p && p.done);
    },
    /* --- Oyun Modu başarımları için sayaçlar --- */
    gameNodesDoneCount: function () {
      var n = 0;
      Object.keys(state.game.progress).forEach(function (lv) {
        Object.keys(state.game.progress[lv]).forEach(function (id) {
          if (state.game.progress[lv][id].done) n++;
        });
      });
      return n;
    },
    hasPassedAnyCheckpoint: function () {
      var found = false;
      Object.keys(state.game.progress).forEach(function (lv) {
        Object.keys(state.game.progress[lv]).forEach(function (id) {
          if (id.indexOf('checkpoint-') === 0 && state.game.progress[lv][id].best >= 7) found = true;
        });
      });
      return found;
    },
    noteGameCombo: function (n) {
      if (n > (state.game.bestCombo || 0)) { state.game.bestCombo = n; save(); }
    },
    hasSeenGameBackupHint: function () { return !!state.game.seenBackupHint; },
    markGameBackupHintSeen: function () { state.game.seenBackupHint = true; save(); },
    /* İleri Sar sınavı geçilince komşu düğüm oynanmamış olsa da "geçildi"
       sayılır; gerçekten oynanmış bir kayıt varsa üzerine yazılmaz. */
    markGameNodeSkipped: function (level, nodeId) {
      var lv = state.game.progress[level] || (state.game.progress[level] = {});
      var cur = lv[nodeId];
      if (cur && cur.done) return cur;
      cur = { done: true, skipped: true, best: 0 };
      lv[nodeId] = cur;
      save();
      return cur;
    },

    /* --- veri dışa/içe aktarma: telefon değişince ilerleme kaybolmasın --- */
    exportData: function () { return JSON.stringify(state, null, 2); },
    importData: function (json) {
      var data;
      try { data = JSON.parse(json); } catch (e) { return false; }
      if (!data || typeof data !== 'object') return false;
      var k, fresh = {};
      for (k in defaults) fresh[k] = Object.prototype.hasOwnProperty.call(data, k) ? data[k] : clone(defaults[k]);
      state = fresh;
      save();
      return true;
    }
  };

  state.visits = (state.visits || 0) + 1;
  save();

  KI.store = S;
})(window.KI);
