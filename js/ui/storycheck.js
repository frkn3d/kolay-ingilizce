/* ============================================================
   Gramer Atlası - storycheck.js
   "Kendini dene"deki "Kendi hikâyeni yaz" görevi: kullanıcının
   serbest yazdığı İngilizce metni puanlar.

   Puan = hatasız kelime oranı (%). Geçme şartı:
     - en az MIN_SENTENCES cümle ve MIN_WORDS kelime
     - en az MIN_TENSE_SENTENCES cümlede hedef zaman kullanılmış
     - hatasız kelime oranı >= PASS_PCT (%80)

   Hata kaynakları:
     - Çevrimiçiyken (ayar açıksa) LanguageTool'un ücretsiz genel API'si
       (api.languagetool.org, anahtar gerekmez) dilbilgisi + yazım hatası
       bulur. Ağ yoksa ya da istek başarısız olursa sessizce çevrimdışı
       denetime düşülür.
     - Çevrimdışı: uygulamanın sözlüğünde bulunamayan kelimeler olası
       yazım hatası sayılır (dilbilgisi denetlenemez, kullanıcıya söylenir).
   Zaman tespiti tamamen cihazda, basit kalıplarla yapılır.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  var PASS_PCT = 80;
  var MIN_SENTENCES = 3;
  var MIN_WORDS = 15;
  var MIN_TENSE_SENTENCES = 2;
  var LT_URL = 'https://api.languagetool.org/v2/check';
  var LT_TIMEOUT = 9000;
  /* Puanı düşüren LanguageTool hata türleri; üslup/tipografi önerileri
     gösterilir ama puanı etkilemez. */
  var LT_PENALTY = { misspelling: 1, grammar: 1, duplication: 1 };

  /* ---------- düzensiz fiil biçimleri ---------- */
  var V2 = {}, V3 = {};
  (KI.glossary.irregularVerbs || []).forEach(function (v) {
    String(v.v2).split(',').forEach(function (f) { f = f.trim().toLowerCase(); if (f) V2[f] = 1; });
    String(v.v3).split(',').forEach(function (f) { f = f.trim().toLowerCase(); if (f) V3[f] = 1; });
  });
  var NOT_ING = { thing: 1, something: 1, nothing: 1, anything: 1, everything: 1, morning: 1, evening: 1,
    king: 1, ring: 1, spring: 1, string: 1, wing: 1, ceiling: 1, during: 1, sing: 1, bring: 1, swing: 1, sting: 1 };
  var NOT_ED = { bed: 1, red: 1, need: 1, seed: 1, speed: 1, feed: 1, hundred: 1, sled: 1, shed: 1, wed: 1, bleed: 1 };
  /* aux ile fiil arasına girebilen kelimeler */
  var SKIP = { not: 1, never: 1, already: 1, just: 1, ever: 1, still: 1, probably: 1, really: 1, also: 1,
    always: 1, usually: 1, often: 1, sometimes: 1, recently: 1, finally: 1, certainly: 1, definitely: 1, only: 1, all: 1 };

  function isIng(w) { return w.length > 4 && /ing$/.test(w) && !NOT_ING[w]; }
  function isV3(w) { return !!V3[w] || (/[a-z]{2}ed$/.test(w) && !NOT_ED[w]); }
  function isV2(w) { return !!V2[w] || (/[a-z]{2}ed$/.test(w) && !NOT_ED[w]); }

  /* "I’ve" → "i have", "won’t" → "will not" ... */
  function words(sentence) {
    var s = ' ' + String(sentence).toLowerCase().replace(/[‘’`]/g, "'") + ' ';
    s = s.replace(/\bwon't\b/g, 'will not').replace(/\bcan't\b/g, 'can not')
      .replace(/n't\b/g, ' not').replace(/'m\b/g, ' am').replace(/'re\b/g, ' are')
      .replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will').replace(/'d\b/g, ' had')
      .replace(/\b(he|she|it|that|there|who|what)'s been\b/g, '$1 has been')
      .replace(/\b(he|she|it|that|there|who|what)'s\b/g, '$1 is');
    return s.replace(/[^a-z' ]+/g, ' ').trim().split(/\s+/).filter(Boolean);
  }

  function skippable(x) { return !!SKIP[x] || (/ly$/.test(x) && x.length > 4); }

  /* aux'tan sonra, pred'i sağlayan ilk kelimenin dizini. Zarflar atlanır;
     soru cümlelerinde araya özne girebildiği için (Have the storks come...?)
     en fazla 3 kelimelik bir pencereye bakılır. */
  function scan(w, i, pred) {
    var seen = 0;
    for (var j = i + 1; j < w.length && seen < 3; j++) {
      if (skippable(w[j])) continue;
      if (pred(w[j])) return j;
      if (AUX[w[j]]) return -1;
      seen++;
    }
    return -1;
  }
  var AUX = { will: 1, shall: 1, have: 1, has: 1, had: 1, am: 1, is: 1, are: 1, was: 1, were: 1, do: 1, does: 1, did: 1,
    be: 1, been: 1, can: 1, could: 1, should: 1, must: 1, may: 1, might: 1, would: 1 };
  function eq(x) { return function (y) { return y === x; }; }
  function isPerfectWord(y) { return y === 'been' || isV3(y); }

  /* Bir cümlede bulunan zamanların kümesi { tenseId: true } */
  function detectTenses(sentence) {
    var w = words(sentence), found = {}, used = {};
    function mark(id, idxs) { found[id] = true; idxs.forEach(function (k) { used[k] = 1; }); }

    for (var i = 0; i < w.length; i++) {
      var a = w[i], j, k, l;
      if (used[i]) continue;
      if (a === 'will' || a === 'shall') {
        if ((j = scan(w, i, eq('have'))) >= 0) {
          if ((k = scan(w, j, eq('been'))) >= 0 && (l = scan(w, k, isIng)) >= 0) mark('future-perfect-continuous', [i, j, k, l]);
          else if ((k = scan(w, j, isPerfectWord)) >= 0) mark('future-perfect', [i, j, k]);
          else mark('future-simple', [i, j]);
        } else if ((j = scan(w, i, eq('be'))) >= 0) {
          if ((k = scan(w, j, isIng)) >= 0) mark('future-continuous', [i, j, k]);
          else mark('future-simple', [i, j]);
        } else mark('future-simple', [i]);
      } else if (a === 'have' || a === 'has') {
        if ((j = scan(w, i, eq('been'))) >= 0 && (k = scan(w, j, isIng)) >= 0) mark('present-perfect-continuous', [i, j, k]);
        else if ((j = scan(w, i, isPerfectWord)) >= 0) mark('present-perfect', [i, j]);
      } else if (a === 'had') {
        if ((j = scan(w, i, eq('been'))) >= 0 && (k = scan(w, j, isIng)) >= 0) mark('past-perfect-continuous', [i, j, k]);
        else if ((j = scan(w, i, isPerfectWord)) >= 0) mark('past-perfect', [i, j]);
        else mark('past-simple', [i]);           /* "I had breakfast" */
      } else if (a === 'was' || a === 'were') {
        j = scan(w, i, isIng);
        if (j >= 0 && !(w[j] === 'going' && w[j + 1] === 'to')) mark('past-continuous', [i, j]);
        else mark('past-simple', [i]);           /* "I was happy" */
      } else if (a === 'am' || a === 'is' || a === 'are') {
        j = scan(w, i, isIng);
        if (j >= 0 && w[j] === 'going' && w[j + 1] === 'to') mark('future-simple', [i, j]);   /* be going to */
        if (j >= 0) mark('present-continuous', [i, j]);
        else mark('present-simple', [i]);        /* "She is happy" */
      } else if (a === 'did') {
        mark('past-simple', [i]);
      } else if (a === 'do' || a === 'does') {
        mark('present-simple', [i]);
      }
    }
    /* yardımcı fiilsiz çekimler: V2 (geçmiş) */
    var modal = false;
    for (var m = 0; m < w.length; m++) {
      var x = w[m], prev = w[m - 1] || '';
      if (/^(can|could|should|must|may|might|would)$/.test(x)) modal = true;
      if (used[m] || prev === 'to' || AUX[prev]) continue;
      if (m > 0 && (V2[x] || isV2(x))) found['past-simple'] = true;
    }
    /* Hiçbir yapı bulunamadıysa ve kip yoksa düz cümle geniş zamandır
       (Farmers plant wheat in the autumn.) */
    if (!Object.keys(found).length && !modal && w.length >= 2) found['present-simple'] = true;
    return found;
  }

  function splitSentences(text) {
    /* lookbehind kullanılmıyor: eski iOS Safari'de sözdizimi hatası verir */
    return (String(text).match(/[^.!?\n]+[.!?]*/g) || [])
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return /[a-zA-Z]/.test(s); });
  }

  /* Metindeki kelimeler ve konumları (offset), hata eşlemesi için */
  function tokenize(text) {
    var out = [], re = /[A-Za-z][A-Za-z'’-]*/g, m;
    while ((m = re.exec(text))) out.push({ w: m[0], start: m.index, end: m.index + m[0].length });
    return out;
  }

  /* Cümle başındaki büyük harfli kelime değilse, büyük harfle başlayan
     kelime özel isimdir (Mehmet, Konya...) - yazım hatası sayılmaz. */
  function isProper(text, tok) {
    if (!/^[A-Z]/.test(tok.w)) return false;
    var before = text.slice(0, tok.start).replace(/\s+$/, '');
    return before.length > 0 && !/[.!?]$/.test(before);
  }

  /* Çevrimdışı denetim: sözlükte olmayan kelimeleri işaretle */
  function offlineIssues(text, toks) {
    var issues = [];
    toks.forEach(function (t, idx) {
      if (t.w.length < 2 && !/^[aiAI]$/.test(t.w)) return;
      if (isProper(text, t)) return;
      if (KI.glossary.lookup(t.w)) return;
      issues.push({ idx: [idx], start: t.start, end: t.end, msg: 'Sözlükte bulunamadı; yazımını kontrol et.', fix: '', penalty: true });
    });
    return issues;
  }

  /* Cihazda, her zaman çalışan birkaç kesin kural (LanguageTool'un ücretsiz
     sürümü bunların bir kısmını kaçırıyor):
       - did / does / do / will / can ... + V2, -ed ya da -s'li fiil  → yalın olmalı
       - yesterday / last / ago geçen cümlede yardımcısız geniş zaman fiili → V2 olmalı */
  var BASE_AFTER = /^(did|didn't|does|doesn't|do|don't|will|won't|can|can't|could|couldn't|should|shouldn't|must|may|might|would|wouldn't)$/;
  var V2_ONLY = {};
  (KI.glossary.irregularVerbs || []).forEach(function (v) {
    String(v.v2).split(',').forEach(function (f) { f = f.trim().toLowerCase(); if (f && f !== v.v1) V2_ONLY[f] = v.v1; });
  });
  function irregularOf(base) {
    return (KI.glossary.irregularVerbs || []).filter(function (v) { return v.v1 === base; })[0];
  }
  function localIssues(text, toks) {
    var issues = [];
    function low(i) { return toks[i].w.toLowerCase().replace(/\u2019/g, "'"); }
    function sameSentence(i, j) { return !/[.!?]/.test(text.slice(toks[i].end, toks[j].start)); }
    toks.forEach(function (t, k) {
      var x = low(k), d = KI.glossary.lookup(x);
      /* düzensiz fiile -ed eklenmiş: eated, buyed */
      if (d && d.pos === 'fiil' && /ed$/.test(x) && x.length > 4 && !NOT_ED[x] && !V2[x] && !V3[x] && !KI.glossary.dict[x]) {
        var irr = irregularOf(d.base);
        if (irr) {
          issues.push({ idx: [k], start: t.start, end: t.end, penalty: true,
            fix: String(irr.v2).split(',')[0].trim() + ' / ' + String(irr.v3).split(',')[0].trim(),
            msg: d.base + ' düzensiz bir fiildir, -ed almaz.' });
          return;
        }
      }
      if (!k) return;
      /* yardımcıdan hemen sonra ya da araya özne girerek (Did you saw) */
      var p = k - 1;
      if (p > 0 && /^(i|you|he|she|it|we|they)$/.test(low(p))) p--;
      if (!BASE_AFTER.test(low(p)) || !sameSentence(p, k)) return;
      var base = '';
      if (V2_ONLY[x]) base = V2_ONLY[x];
      else if (d && d.pos === 'fiil' && d.base !== x && /(s|ed)$/.test(x)) base = d.base;
      if (base) issues.push({ idx: [k], start: t.start, end: t.end, fix: base, penalty: true,
        msg: low(p) + ' sonrasında fiil yalın hâlde kullanılır.' });
    });
    /* yesterday / last / ago olan, başka hiçbir zaman yapısı bulunmayan cümlede
       yalın ya da -s'li fiil: geçmiş hâli olmalı */
    splitSentences(text).forEach(function (sen) {
      if (!/\b(yesterday|ago|last)\b/i.test(sen)) return;
      var found = Object.keys(detectTenses(sen));
      if (found.length !== 1 || found[0] !== 'present-simple') return;
      if (/\b(can|could|should|must|may|might|would)\b/i.test(sen)) return;
      var off = text.indexOf(sen);
      if (off < 0) return;
      for (var k = 0; k < toks.length; k++) {
        var tk = toks[k];
        if (tk.start < off || tk.end > off + sen.length || tk.start === off) continue;
        var x = low(k), d = KI.glossary.lookup(x);
        if (!d || d.pos !== 'fiil' || d.base === 'be' || (k > 0 && low(k - 1) === 'to')) continue;
        if (x !== d.base && x !== d.base + 's' && x !== d.base + 'es') continue;
        /* sözlükte V2'si ayrıca kayıtlı fiiller (laid, stung): mastar anlamı -mak/-mek */
        if (!/m[ae]k\b/.test(d.tr)) continue;
        var vb = irregularOf(d.base);
        issues.push({ idx: [k], start: tk.start, end: tk.end, penalty: true,
          fix: vb ? String(vb.v2).split(',')[0].trim() : d.base.replace(/e$/, '') + 'ed',
          msg: 'Cümlede geçmiş zaman ifadesi var (yesterday / last / ago); fiil geçmiş hâlde olmalı.' });
        break;
      }
    });
    return issues;
  }

  /* Aynı kelimeyi işaretleyen ikinci uyarıyı at */
  function mergeIssues(a, b) {
    var seen = {};
    return a.concat(b).filter(function (it) {
      var key = it.start + ':' + it.end;
      if (seen[key]) return false;
      seen[key] = 1; return true;
    }).sort(function (x, y) { return x.start - y.start; });
  }

  function ltIssues(text, toks, matches) {
    var issues = [];
    (matches || []).forEach(function (m) {
      var type = m.rule && m.rule.issueType;
      var start = m.offset, end = m.offset + m.length;
      var idx = [];
      toks.forEach(function (t, k) { if (t.start < end && t.end > start) idx.push(k); });
      var penalty = !!LT_PENALTY[type];
      /* özel isimler ve sözlüğümüzde olan Türkçe kökenli kelimeler (baklava, lahmacun) */
      if (type === 'misspelling' && idx.length === 1) {
        var t = toks[idx[0]];
        /* yalnız sözlükte birebir olan kelimeler (lookup ekleri soyar: eated → eat) */
        if (isProper(text, t) || KI.glossary.dict[t.w.toLowerCase()]) return;
      }
      var fix = (m.replacements || []).slice(0, 2).map(function (r) { return r.value; }).join(' / ');
      issues.push({ idx: idx, start: start, end: end, msg: m.shortMessage || m.message || '', fix: fix, penalty: penalty });
    });
    return issues;
  }

  function fetchLT(text) {
    if (!window.fetch || (typeof navigator !== 'undefined' && navigator.onLine === false)) return Promise.reject(new Error('offline'));
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, LT_TIMEOUT);
    var body = 'language=en-US&text=' + encodeURIComponent(text);
    return fetch(LT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body,
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (r) {
      clearTimeout(timer);
      if (!r.ok) throw new Error('http ' + r.status);
      return r.json();
    }, function (e) { clearTimeout(timer); throw e; });
  }

  /* Ana denetim: Promise<result> */
  function check(text, tenseId) {
    text = String(text || '').trim();
    var toks = tokenize(text);
    var sentences = splitSentences(text);
    var tenseHits = sentences.filter(function (s) { return detectTenses(s)[tenseId]; }).length;
    var base = { text: text, toks: toks, sentences: sentences.length, words: toks.length, tenseHits: tenseHits };

    function finish(issues, online) {
      var bad = {};
      issues.forEach(function (it) { if (it.penalty) it.idx.forEach(function (k) { bad[k] = 1; }); });
      var nBad = Object.keys(bad).length;
      var pct = toks.length ? Math.round((toks.length - nBad) / toks.length * 100) : 0;
      base.issues = issues; base.bad = bad; base.pct = pct; base.online = online;
      base.longEnough = sentences.length >= MIN_SENTENCES && toks.length >= MIN_WORDS;
      base.tenseOk = tenseHits >= MIN_TENSE_SENTENCES;
      base.pass = base.longEnough && base.tenseOk && pct >= PASS_PCT;
      return base;
    }

    if (!toks.length) return Promise.resolve(finish([], false));
    var local = localIssues(text, toks);
    if (KI.store.get('onlineCheck') === false) return Promise.resolve(finish(mergeIssues(local, offlineIssues(text, toks)), false));
    return fetchLT(text).then(function (data) {
      return finish(mergeIssues(local, ltIssues(text, toks, data && data.matches)), true);
    }).catch(function () {
      return finish(mergeIssues(local, offlineIssues(text, toks)), false);
    });
  }

  /* Metni, hatalı kelimeler işaretli olarak göster */
  function marked(res) {
    var box = U.el('div', { class: 'story-check__text' });
    var pos = 0;
    res.toks.forEach(function (t, k) {
      if (t.start > pos) box.appendChild(document.createTextNode(res.text.slice(pos, t.start)));
      box.appendChild(U.el('span', { class: res.bad[k] ? 'diffw diffw--bad' : 'story-check__w', text: t.w }));
      pos = t.end;
    });
    if (pos < res.text.length) box.appendChild(document.createTextNode(res.text.slice(pos)));
    return box;
  }

  /* --------- görev arayüzü: widget içinde tek soru --------- */
  /* report(ok) her denetimde çağrılır; son sonuç geçerli sayılır. */
  function render(q, report) {
    var t = q.tense;
    var wrap = U.el('div', { class: 'story-task' });
    wrap.appendChild(U.el('div', { class: 'quiz__q' }, [
      U.el('span', { text: q.task.tr })
    ]));
    wrap.appendChild(U.el('p', { class: 'story-task__rules soft',
      html: 'En az <b>' + MIN_SENTENCES + ' cümle</b> yaz; en az <b>' + MIN_TENSE_SENTENCES + ' cümlede ' + U.esc(t.en) +
        '</b> kullan. Kelimelerinin <b>%' + PASS_PCT + '</b>’i hatasızsa geçersin.' }));
    if (q.task.hint) {
      wrap.appendChild(U.el('p', { class: 'story-task__hint', html: KI.icons.html('bulb') + ' ' + U.esc(q.task.hint) }));
    }
    var field = U.el('textarea', {
      class: 'input story-task__field', rows: '5', autocomplete: 'off', autocapitalize: 'sentences',
      spellcheck: 'false', placeholder: 'Hikâyeni İngilizce yaz…', 'aria-label': 'Hikâyen'
    });
    var counter = U.el('span', { class: 'story-task__count soft', text: '0 kelime · 0 cümle' });
    field.addEventListener('input', function () {
      var n = tokenize(field.value).length, s = splitSentences(field.value).length;
      counter.textContent = n + ' kelime · ' + s + ' cümle';
    });
    wrap.appendChild(field);

    var online = KI.store.get('onlineCheck') !== false;
    wrap.appendChild(U.el('div', { class: 'story-task__meta' }, [
      counter,
      U.el('span', { class: 'soft', text: online ? 'Denetim: LanguageTool (çevrimiçi)' : 'Denetim: çevrimdışı' })
    ]));

    var check = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:10px', html: '✓ Kontrol et' });
    var skip = U.el('button', { class: 'btn btn--sm btn--ghost', type: 'button', style: 'margin-top:8px', text: 'Bu görevi atla' });
    var out = U.el('div', { 'aria-live': 'polite' });
    wrap.appendChild(check);
    wrap.appendChild(skip);
    wrap.appendChild(out);

    skip.addEventListener('click', function () {
      KI.audio.play('tap');
      skip.remove();
      report(false);
    });

    check.addEventListener('click', function () {
      var text = field.value.trim();
      if (!text) { field.focus(); return; }
      check.disabled = true;
      check.innerHTML = 'Kontrol ediliyor…';
      U.clear(out);
      check_(text);
    });

    function check_(text) {
      KI.storyCheck.check(text, t.id).then(function (res) {
        check.disabled = false;
        check.innerHTML = '↻ Düzelttim, tekrar kontrol et';
        skip.remove();
        KI.audio.play(res.pass ? 'correct' : 'wrong');

        var fb = U.el('div', { class: 'quiz__fb callout ' + (res.pass ? 'callout--tip' : 'callout--warn') });
        fb.appendChild(U.el('b', { class: 'callout__t', text: (res.pass ? '✓ Geçtin · ' : '✕ Henüz değil · ') + '%' + res.pct + ' doğru' }));
        var list = U.el('ul', { class: 'story-check__list' });
        list.appendChild(U.el('li', { text: (res.longEnough ? '✓ ' : '✕ ') + res.sentences + ' cümle, ' + res.words + ' kelime' +
          (res.longEnough ? '' : ' (en az ' + MIN_SENTENCES + ' cümle ve ' + MIN_WORDS + ' kelime gerekli)') }));
        list.appendChild(U.el('li', { text: (res.tenseOk ? '✓ ' : '✕ ') + t.en + ' ' + res.tenseHits + ' cümlede' +
          (res.tenseOk ? '' : ' (en az ' + MIN_TENSE_SENTENCES + ' gerekli: ' + t.formula.pos.replace(/<[^>]+>/g, '') + ')') }));
        list.appendChild(U.el('li', { text: (res.pct >= PASS_PCT ? '✓ ' : '✕ ') + 'Hatasız kelime oranı %' + res.pct + ' (en az %' + PASS_PCT + ')' }));
        fb.appendChild(list);
        fb.appendChild(marked(res));

        var shown = res.issues.slice(0, 6);
        if (shown.length) {
          var il = U.el('ul', { class: 'story-check__issues' });
          shown.forEach(function (it) {
            var frag = res.text.slice(it.start, it.end);
            il.appendChild(U.el('li', {}, [
              U.el('b', { text: frag }),
              it.fix ? document.createTextNode(' → ' + it.fix) : null,
              it.msg ? U.el('span', { class: 'soft', text: '  ' + it.msg }) : null
            ]));
          });
          fb.appendChild(il);
        }
        if (!res.online) {
          fb.appendChild(U.el('p', { class: 'soft', style: 'margin:6px 0 0;font-size:.8rem',
            text: 'Çevrimdışı denetim: yalnız kelime yazımı ve zaman kullanımı kontrol edildi, dilbilgisi hataları yakalanamaz.' }));
        }
        out.appendChild(fb);
        report(res.pass);
      });
    }
    return wrap;
  }

  KI.storyCheck = {
    check: check, render: render, detectTenses: detectTenses, splitSentences: splitSentences, localIssues: localIssues, tokenize: tokenize,
    PASS_PCT: PASS_PCT, MIN_SENTENCES: MIN_SENTENCES, MIN_TENSE_SENTENCES: MIN_TENSE_SENTENCES
  };
})(window.KI);
