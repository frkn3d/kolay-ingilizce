/* ============================================================
   Gramer Atlası - achievements.js
   Başarım tanımları, koşul kontrolü ve arayüzü (rozet, liste,
   kazanılınca çıkan kutlama kutusu).
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  var LIST = [
    { id: 'ilk-adim', cat: 'Zaman Haritası', title: 'İlk Adım', icon: 'ach-step',
      desc: 'Bir zamanı "Öğrendim" olarak işaretle.',
      check: function () { return KI.store.learnedCount() >= 1; } },
    { id: 'yari-yolda', cat: 'Zaman Haritası', title: 'Yarı Yolda', icon: 'ach-half',
      desc: '12 zamandan 6’sını öğren.',
      check: function () { return KI.store.learnedCount() >= 6; } },
    { id: 'on-iki-de-on-iki', cat: 'Zaman Haritası', title: '12’de 12', icon: 'ach-crown',
      desc: 'Haritadaki tüm zamanları öğren.',
      check: function () { return KI.store.learnedCount() >= KI.tenses.list.length; } },

    { id: 'ilk-sinav', cat: 'Alıştırma', title: 'İlk Sınav', icon: 'ach-clipboard',
      desc: 'Bir alıştırmayı tamamla.',
      check: function () { return (KI.store.get('quizzesCompleted') || 0) >= 1; } },
    { id: 'azimli', cat: 'Alıştırma', title: 'Azimli', icon: 'ach-stopwatch',
      desc: '10 alıştırma tamamla.',
      check: function () { return (KI.store.get('quizzesCompleted') || 0) >= 10; } },
    { id: 'sinav-ustasi', cat: 'Alıştırma', title: 'Sınav Ustası', icon: 'ach-medal',
      desc: '40 alıştırma tamamla.',
      check: function () { return (KI.store.get('quizzesCompleted') || 0) >= 40; } },
    { id: 'kusursuz', cat: 'Alıştırma', title: 'Kusursuz', icon: 'ach-gem',
      desc: 'Bir alıştırmayı hiç hata yapmadan bitir.',
      check: function () { return (KI.store.get('perfectQuizzes') || 0) >= 1; } },
    { id: 'mukemmeliyetci', cat: 'Alıştırma', title: 'Mükemmeliyetçi', icon: 'ach-gems',
      desc: '5 alıştırmayı hatasız bitir.',
      check: function () { return (KI.store.get('perfectQuizzes') || 0) >= 5; } },

    { id: 'kelime-avcisi', cat: 'Kelime', title: 'Kelime Avcısı', icon: 'ach-bookmark',
      desc: 'Kelime defterine ilk kelimeni ekle.',
      check: function () { return KI.store.words().length >= 1; } },
    { id: 'koleksiyoner', cat: 'Kelime', title: 'Koleksiyoner', icon: 'ach-stack',
      desc: 'Kelime defterinde 30 kelime biriktir.',
      check: function () { return KI.store.words().length >= 30; } },
    { id: 'kelime-kutuphanesi', cat: 'Kelime', title: 'Kelime Kütüphanesi', icon: 'ach-shelf',
      desc: 'Kelime defterinde 100 kelime biriktir.',
      check: function () { return KI.store.words().length >= 100; } },
    { id: 'ezberledim', cat: 'Kelime', title: 'Ezberledim!', icon: 'ach-brain',
      desc: 'Bir kelimeyi tekrarlarla tamamen öğren.',
      check: function () { return KI.store.masteredWordCount() >= 1; } },

    { id: 'sadik-ogrenci', cat: 'Bağlılık', title: 'Sadık Öğrenci', icon: 'ach-heart',
      desc: 'Uygulamayı 10 kez aç.',
      check: function () { return (KI.store.get('visits') || 0) >= 10; } },
    { id: 'uc-gun', cat: 'Bağlılık', title: '3 Gün Üst Üste', icon: 'ach-flame',
      desc: '3 gün art arda çalış.',
      check: function () { return (KI.store.get('streak') || 0) >= 3; } },
    { id: 'bir-hafta', cat: 'Bağlılık', title: 'Bir Hafta Boyunca', icon: 'ach-flame-star',
      desc: '7 gün art arda çalış.',
      check: function () { return (KI.store.get('streak') || 0) >= 7; } },

    { id: 'harita-ilk-adim', cat: 'Oyun Modu', title: 'Haritada İlk Adım', icon: 'flag',
      desc: 'Oyun Modu’nda bir durağı tamamla.',
      check: function () { return KI.store.gameNodesDoneCount() >= 1; } },
    { id: 'harita-on-durak', cat: 'Oyun Modu', title: '10 Durak', icon: 'map',
      desc: 'Oyun Modu’nda 10 durak tamamla.',
      check: function () { return KI.store.gameNodesDoneCount() >= 10; } },
    { id: 'harita-tam-gezi', cat: 'Oyun Modu', title: 'Tüm Haritayı Gezdim', icon: 'trophy',
      desc: 'Oyun Modu haritasındaki bütün durakları tamamla.',
      check: function () { return KI.viewGame && KI.store.gameNodesDoneCount() >= KI.viewGame.totalNodes(); } },
    { id: 'ileri-sar-ilk', cat: 'Oyun Modu', title: 'İlk İleri Sar', icon: 'fast-forward',
      desc: 'Bir İleri Sar sınavını geç (10 üzerinden en az 7).',
      check: function () { return KI.store.hasPassedAnyCheckpoint(); } },
    { id: 'oyun-kusursuz', cat: 'Oyun Modu', title: 'Kusursuz Sınav', icon: 'star',
      desc: 'Oyun Modu’nda bir durağı 10/10 bitir.',
      check: function () { return (KI.store.get('game').perfectGameQuizzes || 0) >= 1; } },
    { id: 'yedili-kombo', cat: 'Oyun Modu', title: '7’li Kombo', icon: 'chart',
      desc: 'Bir sınavda üst üste 7 doğru cevap ver.',
      check: function () { return (KI.store.get('game').bestCombo || 0) >= 7; } },
    { id: 'video-izleyici', cat: 'Oyun Modu', title: 'Video İzleyici', icon: 'play',
      desc: 'Can kazanmak için bir video izle.',
      check: function () { return (KI.store.get('game').videoWatches || 0) >= 1; } }
  ];

  var CATS = ['Zaman Haritası', 'Alıştırma', 'Kelime', 'Bağlılık', 'Oyun Modu'];

  function unlockedMap() { return KI.store.get('achievements') || {}; }

  /* store.save() her çağrıldığında evaluate() da çağrılır (bkz. store.js);
     bu da set('achievements', ...) -> save() -> evaluate() döngüsü kurar.
     evaluating bayrağı bu tekrar girişi güvenle keser. */
  var evaluating = false;
  function evaluate() {
    if (evaluating) return [];
    evaluating = true;
    var newly = [];
    try {
      var unlocked = unlockedMap();
      LIST.forEach(function (a) {
        if (unlocked[a.id]) return;
        var ok = false;
        try { ok = !!a.check(); } catch (e) { ok = false; }
        if (ok) { unlocked[a.id] = Date.now(); newly.push(a); }
      });
      if (newly.length) {
        KI.store.set('achievements', unlocked);
        newly.forEach(enqueue);
      }
      paintBadge();
    } finally {
      evaluating = false;
    }
    return newly;
  }

  /* ---- uygulama çubuğundaki ikon üstü rozet ---- */
  function paintBadge() {
    var b = document.getElementById('ach-badge');
    if (!b) return;
    var n = Object.keys(unlockedMap()).length;
    if (n > 0) { b.textContent = n; b.hidden = false; }
    else b.hidden = true;
  }

  /* ---- kazanılınca çıkan kutlama kutusu: birden çoksa sırayla göster ---- */
  var queue = [], showing = false;
  function enqueue(a) {
    queue.push(a);
    if (!showing) { showing = true; setTimeout(dequeue, 500); }
  }
  function dequeue() {
    if (!queue.length) { showing = false; return; }
    var a = queue.shift();
    var modal = document.getElementById('ach-earned-modal');
    var card = document.getElementById('ach-earned-card');
    if (!modal || !card) { showing = false; return; }
    U.clear(card);
    card.appendChild(U.el('div', { class: 'ach-pop__ico', html: KI.icons.html(a.icon) }));
    card.appendChild(U.el('p', { class: 'ach-pop__eyebrow', text: 'Yeni başarım' }));
    card.appendChild(U.el('h3', { text: a.title }));
    card.appendChild(U.el('p', { text: a.desc }));
    var ok = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', text: 'Harika!' });
    ok.addEventListener('click', function () {
      modal.hidden = true;
      KI.audio.play('close');
      setTimeout(dequeue, 350);
    });
    card.appendChild(ok);
    modal.hidden = false;
    KI.audio.play('achievement');
  }

  function formatDate(ts) {
    var d = new Date(ts);
    var months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }

  /* ---- başarımlar modalının içeriği ---- */
  function buildList() {
    var body = document.getElementById('achievements-body');
    if (!body) return;
    U.clear(body);
    var unlocked = unlockedMap();
    var n = Object.keys(unlocked).length;
    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.9rem;margin-bottom:2px',
      text: n + ' / ' + LIST.length + ' başarım kazanıldı' }));

    CATS.forEach(function (cat) {
      var items = LIST.filter(function (a) { return a.cat === cat; });
      if (!items.length) return;
      body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:14px', text: cat }));
      var grid = U.el('div', { class: 'ach-grid' });
      items.forEach(function (a) {
        var un = unlocked[a.id];
        var item = U.el('div', { class: 'ach-item ' + (un ? 'is-unlocked' : 'is-locked') });
        item.appendChild(U.el('span', { class: 'ach-item__ico', html: KI.icons.html(a.icon) }));
        var b = U.el('span', { class: 'ach-item__body' }, [
          U.el('b', { text: a.title }),
          U.el('span', { class: 'soft', text: a.desc })
        ]);
        if (un) b.appendChild(U.el('span', { class: 'ach-item__date', text: formatDate(un) + ' tarihinde kazanıldı' }));
        item.appendChild(b);
        grid.appendChild(item);
      });
      body.appendChild(grid);
    });
  }

  KI.achievements = {
    list: LIST,
    evaluate: evaluate,
    isUnlocked: function (id) { return !!unlockedMap()[id]; },
    paintBadge: paintBadge,
    buildList: buildList
  };
})(window.KI);
