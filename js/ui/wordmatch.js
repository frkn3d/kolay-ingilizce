/* ============================================================
   Gramer Atlası - wordmatch.js
   "Kelime Eşleştir": Oyun Modu haritasındaki bağımsız dallardan girilen
   bir kelime modu. Sözlükten rastgele 5 kelime seçilir; İngilizcesi
   solda, Türkçesi sağda karışık sırada açılır. Doğru eşleşen çift
   silikleşir (is-solved). Haritadaki ilerlemeden tamamen bağımsızdır:
   girmek için hiçbir ön koşul yoktur, can harcamaz, ilerleme kaydetmez.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;
  var PAIR_COUNT = 5;

  function pickWords() {
    var dict = KI.glossary.dict;
    var keys = Object.keys(dict).filter(function (k) {
      var d = dict[k];
      return d.tr && k.length > 2 && k.indexOf(' ') < 0 && d.pos !== 'özel isim';
    });
    return U.shuffle(keys).slice(0, PAIR_COUNT).map(function (k) { return dict[k]; });
  }

  function render() {
    var words = pickWords();
    var frag = document.createDocumentFragment();

    frag.appendChild(U.el('a', { class: 'crumb', href: '#/oyun', 'data-sfx': 'back', text: '← Haritaya dön' }));
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Oyun Modu' }),
      U.el('h1', { text: 'Kelime Eşleştir' }),
      U.el('p', { text: 'Soldaki İngilizce kelimeyle sağdaki Türkçe karşılığını eşleştir. Bu mod haritadaki ilerlemenden bağımsız, istediğin an oynayabilirsin.' })
    ]));

    if (words.length < PAIR_COUNT) {
      frag.appendChild(U.el('div', { class: 'empty' }, [
        U.el('span', { class: 'empty__ico', html: KI.icons.html('compass') }),
        U.el('p', { text: 'Şu an yeterli kelime bulunamadı.' })
      ]));
      return frag;
    }

    var board = U.el('div', { class: 'wmatch' });
    var leftCol = U.el('div', { class: 'wmatch__col' });
    var rightCol = U.el('div', { class: 'wmatch__col' });
    board.appendChild(leftCol);
    board.appendChild(rightCol);
    frag.appendChild(board);

    var doneBox = U.el('div', { class: 'wmatch__done', hidden: true });
    frag.appendChild(doneBox);

    var solvedCount = 0;
    var selLeft = null, selRight = null;
    var leftBtns = {}, rightBtns = {};
    var idxs = words.map(function (w, i) { return i; });

    function clearSelection() {
      if (selLeft != null && leftBtns[selLeft]) leftBtns[selLeft].classList.remove('is-selected');
      if (selRight != null && rightBtns[selRight]) rightBtns[selRight].classList.remove('is-selected');
      selLeft = null; selRight = null;
    }

    function tryMatch() {
      if (selLeft == null || selRight == null) return;
      var l = leftBtns[selLeft], r = rightBtns[selRight];
      if (selLeft === selRight) {
        KI.audio.play('correct');
        [l, r].forEach(function (b) { b.classList.remove('is-selected'); b.classList.add('is-solved'); b.disabled = true; });
        selLeft = null; selRight = null;
        solvedCount++;
        if (solvedCount === words.length) {
          KI.audio.play('finish');
          setTimeout(showDone, 500);
        }
      } else {
        KI.audio.play('wrong');
        [l, r].forEach(function (b) {
          b.classList.add('is-wrong');
          setTimeout(function () { b.classList.remove('is-wrong'); }, 380);
        });
        clearSelection();
      }
    }

    function makeCol(order, col, labelKey) {
      order.forEach(function (idx) {
        var btn = U.el('button', { class: 'wmatch__item', type: 'button', text: words[idx][labelKey] });
        btn.addEventListener('click', function () {
          if (btn.disabled) return;
          KI.audio.play('tap');
          var isLeft = labelKey === 'en';
          if (isLeft) {
            if (selLeft != null && leftBtns[selLeft]) leftBtns[selLeft].classList.remove('is-selected');
            selLeft = idx;
          } else {
            if (selRight != null && rightBtns[selRight]) rightBtns[selRight].classList.remove('is-selected');
            selRight = idx;
          }
          btn.classList.add('is-selected');
          tryMatch();
        });
        (labelKey === 'en' ? leftBtns : rightBtns)[idx] = btn;
        col.appendChild(btn);
      });
    }
    makeCol(U.shuffle(idxs.slice()), leftCol, 'en');
    makeCol(U.shuffle(idxs.slice()), rightCol, 'tr');

    function showDone() {
      U.clear(doneBox);
      doneBox.hidden = false;
      doneBox.appendChild(U.el('div', { class: 'empty' }, [
        U.el('span', { class: 'empty__ico', html: KI.icons.html('trophy') }),
        U.el('p', { text: '5 kelimenin hepsini eşleştirdin!' })
      ]));
      var again = U.el('button', { class: 'btn btn--primary', type: 'button', html: KI.icons.html('repeat') + ' Yeni kelimelerle tekrar oyna' });
      again.addEventListener('click', function () { KI.audio.play('tap'); KI.router.refresh(); });
      doneBox.appendChild(U.el('div', { class: 'row', style: 'margin-top:10px;justify-content:center' }, [again]));
    }

    return frag;
  }

  KI.viewWordMatch = { render: render };
})(window.KI);
