/* ============================================================
   Gramer Atlası - sentence.js
   Tıklanabilir kelimeler, "Çevir" düğmesi, sesli okuma
   ve alttan açılan kelime kartı.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  /* Kelimenin geçtiği bir örnek cümleyi uygulamanın içinden bulur.
     Dizin ilk ihtiyaçta bir kez kurulur. */
  var exIndex = null;
  function exampleFor(base) {
    if (!base) return null;
    if (!exIndex) {
      exIndex = {};
      ((KI.tenses && KI.tenses.list) || []).forEach(function (t) {
        t.examples.forEach(function (ex) {
          ex.en.split(/\s+/).forEach(function (tok) {
            var r = KI.glossary.lookup(tok);
            var k = r ? String(r.base).toLowerCase() : null;
            if (k && !exIndex[k]) exIndex[k] = ex;
          });
        });
      });
    }
    return exIndex[String(base).toLowerCase()] || null;
  }

  /* ---------- kelime kartı ---------- */
  var sheet = {
    node: null, activeSpan: null, current: null,
    init: function () {
      sheet.node = document.getElementById('word-sheet');
      if (!sheet.node) return;
      document.getElementById('word-close').addEventListener('click', function () {
        KI.audio.play('close'); sheet.hide();
      });
      document.getElementById('word-speak').addEventListener('click', function () {
        if (sheet.current) KI.speech.word(sheet.current.en);
      });
      document.getElementById('word-save').addEventListener('click', function () {
        if (!sheet.current) return;
        var w = sheet.current;
        if (KI.store.hasWord(w.base || w.en)) {
          KI.store.removeWord(w.base || w.en);
          U.toast('Kelime defterinden çıkarıldı');
        } else {
          KI.store.addWord(w.base || w.en, w.tr);
          KI.audio.play('star');
          U.toast('Kelime defterine eklendi');
        }
        sheet.refreshSaveBtn();
      });
      document.addEventListener('click', function (e) {
        if (sheet.node.hidden) return;
        if (sheet.node.contains(e.target)) return;
        if (e.target.closest && e.target.closest('.w')) return;
        sheet.hide();
      });
    },
    refreshSaveBtn: function () {
      var b = document.getElementById('word-save');
      if (!b || !sheet.current) return;
      var saved = KI.store.hasWord(sheet.current.base || sheet.current.en);
      b.innerHTML = KI.icons.html(saved ? 'star' : 'star-outline') + ' ' + (saved ? 'Defterimde - çıkar' : 'Kelime defterime ekle');
    },
    show: function (raw, span) {
      if (!sheet.node) return;
      var found = KI.glossary.lookup(raw);
      var clean = String(raw).replace(/^[^A-Za-z']+|[^A-Za-z']+$/g, '');
      sheet.current = found || { en: clean, base: clean, tr: '', pos: '', note: '' };

      document.getElementById('word-title').textContent = clean;
      document.getElementById('word-pos').textContent = found ? (found.pos || '') : 'sözlükte yok';
      document.getElementById('word-mean').textContent = found ? found.tr : 'Bu kelime sözlükte bulunamadı - yine de dinleyebilirsin.';
      var noteEl = document.getElementById('word-note');
      var note = found && found.note ? found.note : '';
      if (found && found.base && found.base.toLowerCase() !== clean.toLowerCase()) {
        note = (note ? note + ' · ' : '') + 'yalın hâli: ' + found.base;
      }
      noteEl.textContent = note;
      noteEl.hidden = !note;

      /* kelimenin geçtiği örnek cümle */
      var exBox = document.getElementById('word-ex');
      var ex = exampleFor(found ? found.base : clean);
      if (ex) {
        document.getElementById('word-ex-en').textContent = ex.en;
        document.getElementById('word-ex-tr').textContent = ex.tr;
        exBox.hidden = false;
        exBox.onclick = function () { KI.speech.speak(ex.en); };
      } else {
        exBox.hidden = true;
      }

      sheet.refreshSaveBtn();
      sheet.node.hidden = false;

      if (sheet.activeSpan) sheet.activeSpan.classList.remove('is-active');
      if (span) { span.classList.add('is-active'); sheet.activeSpan = span; }
      KI.audio.play('word');
      if (KI.store.get('autoSpeakWord')) KI.speech.word(clean);
    },
    hide: function () {
      if (!sheet.node) return;
      sheet.node.hidden = true;
      if (sheet.activeSpan) { sheet.activeSpan.classList.remove('is-active'); sheet.activeSpan = null; }
    }
  };

  /* ---------- cümleyi kelimelere böl ---------- */
  function renderSentence(en, keys) {
    var p = U.el('p', { class: 'sentence' });
    var keyset = {};
    (keys || []).forEach(function (k) { keyset[String(k).toLowerCase()] = true; });

    en.split(/(\s+)/).forEach(function (tok) {
      if (!tok) return;
      if (/^\s+$/.test(tok)) { p.appendChild(document.createTextNode(' ')); return; }
      var m = tok.match(/^([^A-Za-z]*)([A-Za-z][A-Za-z'\u2019-]*)([^A-Za-z]*)$/);
      if (!m) { p.appendChild(U.el('span', { class: 'p', text: tok })); return; }
      if (m[1]) p.appendChild(U.el('span', { class: 'p', text: m[1] }));
      var core = m[2];
      var cls = 'w' + (keyset[core.toLowerCase().replace(/[\u2019']/g, "'")] ? ' w--key' : '');
      p.appendChild(U.el('span', { class: cls, 'data-w': core, text: core }));
      if (m[3]) p.appendChild(U.el('span', { class: 'p', text: m[3] }));
    });

    p.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('.w') : null;
      if (!t || !p.contains(t)) return;
      sheet.show(t.getAttribute('data-w'), t);
    });
    return p;
  }

  /* ---------- tam örnek kartı ---------- */
  function example(ex, opts) {
    opts = opts || {};
    var card = U.el('div', { class: 'example' + (opts.accent ? ' example--accent' : '') });
    var sent = renderSentence(ex.en, ex.key);
    card.appendChild(sent);

    var trEl = U.el('p', { class: 'example__tr', html: '<b>TR:</b> ' + U.esc(ex.tr) });
    var noteEl = ex.note ? U.el('p', { class: 'example__note', html: KI.icons.html('bulb') + ' ' + ex.note }) : null;

    var open = !!KI.store.get('autoTranslate');
    trEl.hidden = !open;
    if (noteEl) noteEl.hidden = !open;

    var btnTr = U.el('button', { class: 'btn btn--sm', type: 'button' });
    function label() { btnTr.innerHTML = KI.icons.html(trEl.hidden ? 'eye' : 'eye-off') + ' ' + (trEl.hidden ? 'Çevir' : 'Gizle'); }
    label();
    btnTr.addEventListener('click', function () {
      trEl.hidden = !trEl.hidden;
      if (noteEl) noteEl.hidden = trEl.hidden;
      KI.audio.play(trEl.hidden ? 'close' : 'reveal');
      label();
    });

    var btnSay = U.el('button', { class: 'btn btn--sm btn--primary', type: 'button', html: KI.icons.html('speaker') + ' Dinle' });
    btnSay.addEventListener('click', function () {
      KI.audio.play('tap');
      KI.speech.speak(ex.en);
    });

    var btnSlow = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('turtle') + ' Yavaş' });
    btnSlow.addEventListener('click', function () {
      KI.audio.play('tap');
      KI.speech.speak(ex.en, { rate: 0.55 });
    });

    var bar = U.el('div', { class: 'example__bar' }, [btnSay, btnSlow, btnTr]);
    card.appendChild(bar);
    card.appendChild(trEl);
    if (noteEl) card.appendChild(noteEl);
    return card;
  }

  KI.sentence = { render: renderSentence, example: example, sheet: sheet };
})(window.KI);
