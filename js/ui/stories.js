/* ============================================================
   Gramer Atlası — stories.js
   Hikayeler: liste ve okuma ekranı. Kelimelere dokunulunca anlamı
   görünür (KI.sentence.render), "Hikayeyi oku" ile cümle cümle
   sesli okuma ve okunan cümlenin vurgulanması.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  var CATS = [
    { id: 'nasreddin', title: 'Nasreddin Hoca Fıkraları' },
    { id: 'halk', title: 'Diğer Halk Hikayeleri' }
  ];

  function get(id) { return (KI.stories || []).filter(function (s) { return s.id === id; })[0]; }

  function list() {
    var frag = document.createDocumentFragment();
    frag.appendChild(U.el('a', { class: 'crumb', href: '#/sozluk', 'data-sfx': 'back', text: '← Sözlük' }));
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Hikayeler' }),
      U.el('h1', { text: 'Hikayeler' }),
      U.el('p', { text: 'Anonim halk hikayelerini oku ya da dinle; herhangi bir kelimeye dokunarak anlamını gör.' })
    ]));

    CATS.forEach(function (cat) {
      var items = (KI.stories || []).filter(function (s) { return s.cat === cat.id; });
      if (!items.length) return;
      frag.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:16px', text: cat.title }));
      var stack = U.el('div', { class: 'stack' });
      items.forEach(function (s) {
        var card = U.el('a', { class: 'card modecard', href: '#/sozluk/hikayeler/' + s.id, 'data-sfx': 'nav' });
        card.appendChild(U.el('h3', { text: s.title, style: 'margin-bottom:.15em' }));
        card.appendChild(U.el('p', { class: 'soft', style: 'margin:0 0 .3em', text: s.tr }));
        card.appendChild(U.el('p', { class: 'soft', style: 'margin:0;font-size:.82rem', text: s.summary + ' · ' + s.sentences.length + ' cümle' }));
        stack.appendChild(card);
      });
      frag.appendChild(stack);
    });
    return frag;
  }

  function detail(id) {
    var s = get(id);
    var frag = document.createDocumentFragment();
    if (!s) {
      frag.appendChild(U.el('div', { class: 'empty' }, [
        U.el('span', { class: 'empty__ico', html: KI.icons.html('compass') }),
        U.el('p', { text: 'Bu hikaye bulunamadı.' }),
        U.el('a', { class: 'btn', href: '#/sozluk/hikayeler', text: 'Hikayelere dön' })
      ]));
      return frag;
    }

    frag.appendChild(U.el('a', { class: 'crumb', href: '#/sozluk/hikayeler', 'data-sfx': 'back', text: '← Hikayeler' }));
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: s.cat === 'nasreddin' ? 'Nasreddin Hoca' : 'Halk Hikayesi' }),
      U.el('h1', { text: s.title }),
      U.el('p', { text: s.tr + ' — ' + s.summary })
    ]));

    var playBtn = U.el('button', { class: 'btn btn--primary btn--sm', type: 'button', html: KI.icons.html('speaker') + ' Hikayeyi oku' });
    var trBtn = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('eye') + ' Türkçesini göster' });
    frag.appendChild(U.el('div', { class: 'row', style: 'margin-bottom:12px' }, [playBtn, trBtn]));
    frag.appendChild(U.el('p', { class: 'soft', style: 'font-size:.85rem;margin:-6px 0 12px',
      html: KI.icons.html('bulb') + ' Herhangi bir kelimeye dokunursan Türkçe anlamı ve o kelimeyi kullanan bir örnek cümle açılır.' }));

    var body = U.el('div', { class: 'card story-body' });
    var rows = s.sentences.map(function (sen) {
      var p = KI.sentence.render(sen.en, []);
      p.classList.add('story-sentence');
      var trP = U.el('p', { class: 'story-tr soft', text: sen.tr, hidden: true });
      body.appendChild(p);
      body.appendChild(trP);
      return { en: p, tr: trP };
    });
    frag.appendChild(body);

    /* --- çeviri satırlarını tek düğmeyle aç/kapat --- */
    var trOpen = false;
    trBtn.addEventListener('click', function () {
      trOpen = !trOpen;
      rows.forEach(function (r) { r.tr.hidden = !trOpen; });
      trBtn.innerHTML = KI.icons.html(trOpen ? 'eye-off' : 'eye') + ' ' + (trOpen ? 'Türkçesini gizle' : 'Türkçesini göster');
      KI.audio.play(trOpen ? 'reveal' : 'close');
    });

    /* --- cümle cümle sesli okuma + okunan cümleyi vurgulama --- */
    var stopped = true;
    function clearHighlight() { rows.forEach(function (r) { r.en.classList.remove('speaking'); }); }
    function paintPlayBtn() { playBtn.innerHTML = KI.icons.html(stopped ? 'speaker' : 'close') + ' ' + (stopped ? 'Hikayeyi oku' : 'Durdur'); }
    function stopPlaying() {
      stopped = true;
      clearHighlight();
      paintPlayBtn();
    }
    function playFrom(i) {
      if (stopped || i >= rows.length) { stopPlaying(); return; }
      clearHighlight();
      rows[i].en.classList.add('speaking');
      rows[i].en.scrollIntoView({ behavior: 'smooth', block: 'center' });
      KI.speech.speak(s.sentences[i].en, { onend: function () { playFrom(i + 1); } });
    }
    /* Sayfadan ayrılınca (hashchange) okumayı durdurulmuş say; devam
       eden bir speechSynthesis geri çağrısı bu bayrağı görüp sessizce
       çıkar. */
    window.addEventListener('hashchange', function () { stopped = true; }, { once: true });

    playBtn.addEventListener('click', function () {
      KI.audio.play('tap');
      if (!stopped) { stopped = true; KI.speech.stop(); stopPlaying(); return; }
      stopped = false;
      paintPlayBtn();
      playFrom(0);
    });

    var idx = (KI.stories || []).indexOf(s);
    var next = (KI.stories || [])[idx + 1];
    frag.appendChild(U.el('div', { class: 'pager' }, [
      U.el('a', { class: 'btn', href: '#/sozluk/hikayeler', 'data-sfx': 'back' }, [U.el('span', { text: '← Tüm hikayeler' })]),
      next
        ? U.el('a', { class: 'btn btn--primary', href: '#/sozluk/hikayeler/' + next.id, 'data-sfx': 'nav' }, [U.el('span', { text: next.title + ' →' })])
        : U.el('a', { class: 'btn btn--primary', href: '#/sozluk/hikayeler', 'data-sfx': 'nav' }, [U.el('span', { text: 'Listeye dön' })])
    ]));

    return frag;
  }

  KI.viewStories = { list: list, detail: detail };
})(window.KI);
