/* ============================================================
   Gramer Atlası - idioms.js (ekran)
   Sözlük > Deyimler: Türkçe atasözü / deyim / kalıp sözlerin
   İngilizcedeki kalıplaşmış karşılıkları. Arama, türe göre süzme,
   dinleme ve örnek cümle.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  var CAT_LABEL = { atasozu: 'Atasözü', deyim: 'Deyim', kalip: 'Kalıp söz' };
  var PAGE = 40;
  var active = 'all';
  var shown = PAGE;

  /* Türkçe büyük/küçük harf ve şapkalı harfler aramada sorun çıkarmasın */
  function norm(s) {
    return String(s || '').toLocaleLowerCase('tr')
      .replace(/[‘’']/g, '').replace(/[âàá]/g, 'a').replace(/[îì]/g, 'i').replace(/[ûù]/g, 'u');
  }

  function card(it) {
    var c = U.el('article', { class: 'card idiom idiom--' + it.cat });

    c.appendChild(U.el('div', { class: 'idiom__top' }, [
      U.el('span', { class: 'idiom__cat', text: CAT_LABEL[it.cat] || '' }),
      U.el('span', { class: 'idiom__match idiom__match--' + it.match,
        text: it.match === 'birebir' ? 'Aynı imge' : 'Anlamca karşılık',
        title: it.match === 'birebir' ? 'İngilizcede de aynı benzetme kullanılır' : 'İngilizcede başka bir benzetmeyle aynı anlam verilir' })
    ]));
    c.appendChild(U.el('p', { class: 'idiom__tr', text: it.tr }));

    var say = U.el('button', { class: 'btn btn--sm btn--icon', type: 'button', html: KI.icons.html('speaker'),
      title: 'Dinle', 'aria-label': 'Dinle: ' + it.en });
    say.addEventListener('click', function () { KI.audio.play('tap'); KI.speech.speak(it.en); });
    c.appendChild(U.el('div', { class: 'idiom__en-row' }, [
      U.el('p', { class: 'idiom__en', lang: 'en', text: it.en }), say
    ]));

    c.appendChild(U.el('p', { class: 'idiom__mean', html: '<b>Anlamı:</b> ' + U.esc(it.mean) }));
    if (it.note) c.appendChild(U.el('p', { class: 'idiom__note', html: KI.icons.html('bulb') + ' <span>' + U.esc(it.note) + '</span>' }));

    if (it.ex) {
      var exBox = U.el('div', { class: 'idiom__ex', hidden: true });
      var exSay = U.el('button', { class: 'btn btn--sm btn--icon', type: 'button', html: KI.icons.html('speaker'),
        title: 'Örneği dinle', 'aria-label': 'Örneği dinle' });
      exSay.addEventListener('click', function () { KI.audio.play('tap'); KI.speech.speak(it.ex); });
      exBox.appendChild(U.el('div', { class: 'idiom__ex-row' }, [U.el('p', { class: 'idiom__ex-en', lang: 'en', text: it.ex }), exSay]));
      exBox.appendChild(U.el('p', { class: 'idiom__ex-tr', text: it.exTr }));
      var toggle = U.el('button', { class: 'btn btn--sm btn--ghost idiom__toggle', type: 'button', 'aria-expanded': 'false', text: 'Örnek cümle' });
      toggle.addEventListener('click', function () {
        exBox.hidden = !exBox.hidden;
        toggle.setAttribute('aria-expanded', String(!exBox.hidden));
        toggle.textContent = exBox.hidden ? 'Örnek cümle' : 'Örneği gizle';
        KI.audio.play(exBox.hidden ? 'close' : 'reveal');
      });
      c.appendChild(toggle);
      c.appendChild(exBox);
    }
    return c;
  }

  function collect(q) {
    var list = KI.idioms.list.filter(function (it) {
      if (active === 'birebir') return it.match === 'birebir';
      return active === 'all' || it.cat === active;
    });
    if (q) {
      var n = norm(q);
      list = list.filter(function (it) {
        return norm(it.tr).indexOf(n) >= 0 || norm(it.en).indexOf(n) >= 0 || norm(it.mean).indexOf(n) >= 0;
      });
    }
    return list;
  }

  function render() {
    active = 'all';
    shown = PAGE;
    var total = KI.idioms.list.length;
    var frag = document.createDocumentFragment();

    frag.appendChild(U.el('a', { class: 'crumb', href: '#/sozluk', 'data-sfx': 'back', text: '← Sözlük' }));
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Sözlük' }),
      U.el('h1', { text: 'Deyimler' }),
      U.el('p', { style: 'font-size:.84rem', html: '<b>' + total + '</b> Türkçe atasözü, deyim ve kalıp sözün İngilizcede gerçekten kullanılan karşılığı. ' +
        'Kelimesi kelimesine çeviri yok; yalnız İngilizcede kalıplaşmış olanlar var.' })
    ]));

    var input = U.el('input', { class: 'input', type: 'search', placeholder: 'Ara: damla, fire, kedi, cake…', 'aria-label': 'Deyim ara' });
    frag.appendChild(U.el('div', { style: 'margin-bottom:10px' }, [input]));

    var chips = U.el('div', { class: 'pill-row' });
    frag.appendChild(chips);
    var info = U.el('p', { class: 'quiz__score', style: 'margin:0 0 8px', 'aria-live': 'polite' });
    frag.appendChild(info);
    var list = U.el('div', { class: 'idiom-list' });
    frag.appendChild(list);
    var moreWrap = U.el('div', { class: 'row', style: 'margin-top:12px;justify-content:center' });
    frag.appendChild(moreWrap);

    function paintChips() {
      U.clear(chips);
      KI.idioms.cats.forEach(function (c) {
        var n = c.id === 'all' ? total : KI.idioms.list.filter(function (it) {
          return c.id === 'birebir' ? it.match === 'birebir' : it.cat === c.id;
        }).length;
        var b = U.el('button', { class: 'btn btn--sm' + (active === c.id ? ' btn--primary' : ''), type: 'button',
          'aria-pressed': String(active === c.id), text: c.t + ' · ' + n });
        b.addEventListener('click', function () {
          if (active === c.id) return;
          active = c.id; shown = PAGE;
          KI.audio.play('toggle');
          paintChips(); paintList();
        });
        chips.appendChild(b);
      });
    }

    function paintList() {
      var q = input.value.trim();
      var items = collect(q);
      U.clear(list); U.clear(moreWrap);
      info.textContent = items.length + ' sonuç' + (q ? ' · "' + q + '" araması' : '');
      if (!items.length) {
        list.appendChild(U.el('div', { class: 'empty' }, [
          U.el('span', { class: 'empty__ico', html: KI.icons.html('search') }),
          U.el('p', { text: 'Sonuç bulunamadı. Türkçe ya da İngilizce bir kelimeyle ara.' })
        ]));
        return;
      }
      items.slice(0, shown).forEach(function (it, i) {
        var c = card(it);
        if (i < 8) c.classList.add('reveal');
        list.appendChild(c);
      });
      setTimeout(function () { U.staggerReveal(list, '.reveal', 40); }, 0);
      if (items.length > shown) {
        var more = U.el('button', { class: 'btn', type: 'button', html: '↓ ' + (items.length - shown) + ' tane daha göster' });
        more.addEventListener('click', function () { shown += PAGE; KI.audio.play('tap'); paintList(); });
        moreWrap.appendChild(more);
      }
    }

    input.addEventListener('input', U.debounce(function () { shown = PAGE; paintList(); }, 180));
    paintChips();
    paintList();
    return frag;
  }

  KI.viewIdioms = { render: render };
})(window.KI);
