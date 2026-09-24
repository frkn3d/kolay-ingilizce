/* ============================================================
   Gramer Atlası — game.js
   Oyun Modu: aşağı doğru uzanan zaman haritası + can sistemi.

   Her seviyenin kendi konuları vardır (ör. Başlangıç: Temeller,
   Present Simple...); en az 24 ders elde etmek için konular sırayla
   birden çok "tur" olarak tekrar gezilir (buildPath). Her 8 derste
   bir "İleri Sar" sınavı eklenir: bu sınavlar her zaman açıktır, o
   seviyenin en zor (cümle kurma tipi) sorularından oluşur; geçilirse
   (10 üzerinden en az 7) kendisinden hemen önceki ve hemen sonraki
   ilk düğüm de açılır — sırayı takip etmeden ileri atlanabilir.

   Sorular js/data/game-questions.js dosyasından (questions.md'den
   üretildi) gelir. İleride "questions2" ile gelecek ek sorular aynı
   KI.gameQuestions[level][topic] dizilerine eklenerek (concat) bu
   havuz mantığına otomatik katılır; kod tarafında değişiklik gerekmez.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  /* Düz, hep aynı aralıkla sağa-sola zıplayan bir zikzak yerine düzensiz
     genlikli, ara sıra aynı yöne art arda kayan bir "patika" hissi versin
     diye elle ayarlanmış bir dizi. Değerler px cinsinde; en büyük genlik
     (66px) dar telefonlarda bile yatay kaydırmaya yol açmayacak şekilde
     seçildi (bkz. gmap__connector genişliği ve .gmap__node çapı). */
  var ZIGZAG = [0, 42, 66, 24, -58, -20, 50, -66, 14, -40, 62, -12, 36, -62, 48, -30];

  /* Duraklar arasındaki eğri bağlantı çizgisi: sabit yükseklikli bir
     "connector" bloğu içine, iki durağın yatay ofsetini birleştiren tek
     bir kübik Bezier eğrisi çizilir. viewBox genişliği ZIGZAG'ın en büyük
     genliğinden belirgin ölçüde geniş tutulur ki eğri hiçbir zaman kırpılmasın. */
  var CONNECTOR_W = 200, CONNECTOR_H = 46, CONNECTOR_H_TALL = 58;
  function buildConnector(fromX, toX, tall) {
    var h = tall ? CONNECTOR_H_TALL : CONNECTOR_H;
    var x1 = CONNECTOR_W / 2 + fromX, x2 = CONNECTOR_W / 2 + toX;
    var mid = h / 2;
    var d = 'M' + x1 + ' 0 C ' + x1 + ' ' + mid + ' ' + x2 + ' ' + mid + ' ' + x2 + ' ' + h;
    var svg = '<svg width="' + CONNECTOR_W + '" height="' + h + '" viewBox="0 0 ' + CONNECTOR_W + ' ' + h + '" aria-hidden="true">' +
      '<path class="gmap__connector-line" d="' + d + '" fill="none" stroke-linecap="round"></path></svg>';
    return U.el('div', { class: 'gmap__connector', html: svg });
  }

  /* Haritada aynı zaman ismi ("Present Simple") tur boyunca defalarca
     tekrar etmesin diye her ders düğümüne, hangi zamanı çalıştırdığından
     bağımsız, günlük hayattan bir tema (ikon + başlık) atanır. Havuz
     tüm haritadaki ders sayısından (73) fazla olduğu için tek bir
     baştan-sona geçişte hiçbir başlık tekrar etmez. Gerçek zaman adı
     sınav sayfasında eyebrow olarak hâlâ görünür. */
  var THEME_POOL = [
    { ico: 'tea-glass', t: 'Çay Saati' },
    { ico: 'simit', t: 'Simit Arabası' },
    { ico: 'minibus', t: 'Dolmuş Durağı' },
    { ico: 'tray', t: 'Kahvaltı Sofrası' },
    { ico: 'basket', t: 'Pazar Günü' },
    { ico: 'minaret', t: 'Akşam Ezanı' },
    { ico: 'backgammon', t: 'Kıraathane Tavlası' },
    { ico: 'lantern', t: 'Kapalıçarşı Gezisi' },
    { ico: 'ferry', t: 'Vapur Yolculuğu' },
    { ico: 'mountain', t: 'Yayla Havası' },
    { ico: 'nazar', t: 'Nazar Boncuğu' },
    { ico: 'coffee-cup', t: 'Kahve Falı' },
    { ico: 'sprout', t: 'Bahçe İşi' },
    { ico: 'briefcase', t: 'Ofis Toplantısı' },
    { ico: 'graduation-cap', t: 'Okul Zili' },
    { ico: 'phone', t: 'Telefon Sohbeti' },
    { ico: 'laptop', t: 'Bilgisayar Başında' },
    { ico: 'ball', t: 'Mahalle Maçı' },
    { ico: 'music-note', t: 'Radyo Türküleri' },
    { ico: 'film-clapper', t: 'Sinema Gecesi' },
    { ico: 'flower', t: 'Çiçekçi Dükkanı' },
    { ico: 'fish', t: 'Balıkçı Teknesi' },
    { ico: 'snowflake', t: 'Kar Tatili' },
    { ico: 'umbrella', t: 'Yağmurlu Gün' },
    { ico: 'gift', t: 'Doğum Günü' },
    { ico: 'envelope', t: 'Mektup Yazmak' },
    { ico: 'train', t: 'Tren İstasyonu' },
    { ico: 'camera', t: 'Aile Fotoğrafı' },
    { ico: 'kite', t: 'Uçurtma Şenliği' },
    { ico: 'bicycle', t: 'Bisiklet Turu' },
    { ico: 'clock', t: 'Mesai Saati' },
    { ico: 'paintbrush', t: 'Ebru Atölyesi' },
    { ico: 'book', t: 'Kütüphane Köşesi' },
    { ico: 'chat', t: 'Komşu Sohbeti' },
    { ico: 'headphones', t: 'Kulaklıkla Yolda' },
    { ico: 'sun', t: 'Güneşli Balkon' },
    { ico: 'moon', t: 'Ay Işığında' },
    { ico: 'map', t: 'Şehir Turu' },
    { ico: 'target', t: 'Ok Atışı' },
    { ico: 'calendar', t: 'Takvim Yaprağı' },
    { ico: 'star', t: 'Yıldızlı Gece' },
    { ico: 'flag', t: 'Bayrak Töreni' },
    { ico: 'trophy', t: 'Kupa Töreni' },
    { ico: 'dice', t: 'Zar Oyunu' },
    { ico: 'puzzle', t: 'Bulmaca Vakti' },
    { ico: 'key', t: 'Kayıp Anahtar' },
    { ico: 'history', t: 'Tarih Dersi' },
    { ico: 'box', t: 'Taşınma Günü' },
    { ico: 'tag', t: 'Fiyat Etiketi' },
    { ico: 'mirror', t: 'Ayna Karşısı' },
    { ico: 'person', t: 'Yeni Komşu' },
    { ico: 'bell', t: 'Kapı Zili' },
    { ico: 'notebook', t: 'Not Defteri' },
    { ico: 'pencil', t: 'Ödev Saati' },
    { ico: 'compass', t: 'Pusula ile Yol' },
    { ico: 'turtle', t: 'Yavaş Kaplumbağa' },
    { ico: 'bulb', t: 'Parlak Fikir' },
    { ico: 'repeat', t: 'Tekrar Turu' },
    { ico: 'thumbsup', t: 'Başparmak Yukarı' },
    { ico: 'search', t: 'Kayıp Eşya' },
    { ico: 'eye', t: 'Göz Muayenesi' },
    { ico: 'help-circle', t: 'Bilmece Zamanı' },
    { ico: 'logic', t: 'Mantık Oyunu' },
    { ico: 'formula', t: 'Matematik Saati' },
    { ico: 'bicycle', t: 'Sabah Sporu' },
    { ico: 'coffee-cup', t: 'Kahve Molası' },
    { ico: 'mountain', t: 'Akşam Yürüyüşü' },
    { ico: 'fish', t: 'Deniz Kenarı' },
    { ico: 'sprout', t: 'Bahar Temizliği' },
    { ico: 'book', t: 'Kitap Fuarı' },
    { ico: 'envelope', t: 'Kartpostal' },
    { ico: 'train', t: 'Yolculuk Hazırlığı' },
    { ico: 'graduation-cap', t: 'Sınav Heyecanı' },
    { ico: 'chat', t: 'Kahvaltıda Sohbet' },
    { ico: 'notebook', t: 'Ders Çalışma' },
    { ico: 'phone', t: 'Telefon Rehberi' },
    { ico: 'briefcase', t: 'Yeni İş Günü' },
    { ico: 'moon', t: 'Gökyüzü Manzarası' },
    { ico: 'book', t: 'Kütüphane Sessizliği' },
    { ico: 'clock', t: 'Pazartesi Sabahı' },
    { ico: 'minaret', t: 'Cuma Namazı' },
    { ico: 'gift', t: 'Bayram Ziyareti' },
    { ico: 'mountain', t: 'Doğa Yürüyüşü' },
    { ico: 'fish', t: 'Balık Tutma' },
    { ico: 'music-note', t: 'Müzik Kursu' },
    { ico: 'paintbrush', t: 'Resim Sergisi' },
    { ico: 'ball', t: 'Spor Salonu' },
    { ico: 'minibus', t: 'Otobüs Bekleme' },
    { ico: 'ferry', t: 'Vapur İskelesi' },
    { ico: 'coffee-cup', t: 'Kahve Dükkanı' }
  ];
  var themeCursor = 0;
  function nextTheme() {
    var th = THEME_POOL[themeCursor % THEME_POOL.length];
    themeCursor++;
    return th;
  }
  var LESSON_SIZE = 10;       // her ders/sınav 10 soru
  var CHECKPOINT_EVERY = 8;   // her 8 dersten sonra bir İleri Sar sınavı
  var CHECKPOINT_PASS = 7;    // İleri Sar'ı geçmek için gereken en az doğru sayısı (10 üzerinden)

  var LEVEL_DEFS = [
    { id: 'baslangic', t: 'Başlangıç', desc: 'Kolay seviye', rounds: 5, topics: [
      { id: 'temeller', t: 'Temeller' },
      { id: 'present-simple', t: 'Present Simple', time: 'present', aspect: 'simple' },
      { id: 'present-continuous', t: 'Present Continuous', time: 'present', aspect: 'cont' },
      { id: 'past-simple', t: 'Past Simple', time: 'past', aspect: 'simple' },
      { id: 'future-simple', t: 'Future Simple', time: 'future', aspect: 'simple' }
    ] },
    { id: 'orta', t: 'Orta', desc: 'Orta seviye', rounds: 6, topics: [
      { id: 'past-continuous', t: 'Past Continuous', time: 'past', aspect: 'cont' },
      { id: 'present-perfect', t: 'Present Perfect', time: 'present', aspect: 'perfect' },
      { id: 'future-continuous', t: 'Future Continuous', time: 'future', aspect: 'cont' },
      { id: 'past-perfect', t: 'Past Perfect', time: 'past', aspect: 'perfect' }
    ] },
    { id: 'ileri', t: 'İleri', desc: 'İleri seviye', rounds: 6, topics: [
      { id: 'present-perfect-continuous', t: 'Present Perfect Continuous', time: 'present', aspect: 'perfectcont' },
      { id: 'past-perfect-continuous', t: 'Past Perfect Continuous', time: 'past', aspect: 'perfectcont' },
      { id: 'future-perfect', t: 'Future Perfect', time: 'future', aspect: 'perfect' },
      { id: 'future-perfect-continuous', t: 'Future Perfect Continuous', time: 'future', aspect: 'perfectcont' }
    ] }
  ];

  function buildPath(level) {
    var lessons = [];
    for (var r = 1; r <= level.rounds; r++) {
      level.topics.forEach(function (tp) {
        lessons.push({ kind: 'lesson', id: tp.id + '-' + r, topic: tp, round: r, theme: nextTheme() });
      });
    }
    var path = [], cpCount = 0;
    lessons.forEach(function (node, idx) {
      path.push(node);
      /* Son dersten hemen sonraya sınav koymuyoruz: orada açılacak bir
         "sonraki durak" olmadığı için mantıksız bir bitiş olurdu. */
      var isLastLesson = (idx === lessons.length - 1);
      if (!isLastLesson && (idx + 1) % CHECKPOINT_EVERY === 0) {
        cpCount++;
        path.push({ kind: 'checkpoint', id: 'checkpoint-' + cpCount, n: cpCount });
      }
    });
    return path;
  }

  var LEVELS = LEVEL_DEFS.map(function (lv) { lv.path = buildPath(lv); return lv; });

  function levelById(id) { return LEVELS.filter(function (l) { return l.id === id; })[0]; }
  function levelIdx(id) {
    for (var i = 0; i < LEVELS.length; i++) if (LEVELS[i].id === id) return i;
    return -1;
  }
  function nodeIndex(level, id) {
    for (var i = 0; i < level.path.length; i++) if (level.path[i].id === id) return i;
    return -1;
  }
  function lastCheckpointOf(level) {
    for (var i = level.path.length - 1; i >= 0; i--) if (level.path[i].kind === 'checkpoint') return level.path[i];
    return null;
  }

  /* Bir düğüm "tamam" sayılır: normal derste her bitirme yeterli;
     İleri Sar'da yalnız CHECKPOINT_PASS eşiğini geçen en iyi skor
     "tamam" sayılır (aksi hâlde bir sonraki düğüm haksız yere açılırdı). */
  function isNodeDone(level, node) {
    var p = KI.store.gameProgress(level.id, node.id);
    if (!p || !p.done) return false;
    if (node.kind === 'checkpoint') return p.best >= CHECKPOINT_PASS;
    return true;
  }

  function isNodeUnlocked(level, i) {
    var node = level.path[i];
    if (node.kind === 'checkpoint') return true;   // İleri Sar sınavları her zaman açık
    if (i === 0) return true;
    /* Kendisi zaten tamam/atlanmış sayılıyorsa (bir İleri Sar'ı geçerek
       açılmış olabilir) önceki düğüm hiç bitirilmemiş olsa bile erişilir. */
    if (isNodeDone(level, node)) return true;
    return isNodeDone(level, level.path[i - 1]);
  }

  function isLevelUnlocked(li) {
    if (li === 0) return true;
    var prev = LEVELS[li - 1];
    var last = prev.path[prev.path.length - 1];
    if (isNodeDone(prev, last)) return true;
    var lastCp = lastCheckpointOf(prev);
    return !!(lastCp && isNodeDone(prev, lastCp));
  }

  /* ---------- canlar: paylaşılan mini bileşen ---------- */
  function heartsLine() {
    var n = KI.store.heartsCount();
    return KI.store.isPremium() ? '∞' : String(n);
  }
  function paintHeartsBadge() {
    var b = document.getElementById('hearts-badge');
    if (b) b.textContent = heartsLine();
  }

  function mountHearts(container, onChange) {
    function paint() {
      U.clear(container);
      KI.store.gameTouchDay();
      var premium = KI.store.isPremium();
      var n = KI.store.heartsCount();
      var max = KI.store.maxHearts();

      container.appendChild(U.el('div', { class: 'hearts__count' }, [
        U.el('span', { html: KI.icons.html('ach-heart') }),
        U.el('b', { text: premium ? 'Sınırsız can' : (n + ' / ' + max + ' can') })
      ]));

      if (premium) {
        container.appendChild(U.el('p', { class: 'soft', text: 'Premium hesabınla canların hiç bitmez.' }));
        return;
      }

      var watch = U.el('button', { class: 'btn btn--primary btn--block', type: 'button',
        html: KI.icons.html('play') + ' Video izle · +3 can' });
      if (n >= max) watch.disabled = true;
      watch.addEventListener('click', function () {
        KI.audio.play('tap');
        KI.store.gainHeart();
        U.toast('3 can kazandın');
        paintHeartsBadge();
        paint();
        if (onChange) onChange();
      });
      container.appendChild(watch);

      var premBtn = U.el('button', { class: 'btn btn--block', type: 'button', style: 'margin-top:8px',
        html: KI.icons.html('ach-crown') + ' Premium’a geç · sınırsız can' });
      premBtn.addEventListener('click', function () {
        KI.audio.play('achievement');
        KI.store.setPremium(true);
        U.toast('Premium aktif! Canların artık hiç bitmeyecek.');
        paintHeartsBadge();
        paint();
        if (onChange) onChange();
      });
      container.appendChild(premBtn);

      container.appendChild(U.el('p', { class: 'soft', style: 'font-size:.78rem;margin-top:10px',
        text: 'Deneme sürümü: video ve satın alma burada gerçek bir işlem yapılmadan hemen can/üyelik verir; gerçek video reklamı ve ödeme sistemi sonra eklenecek.' }));
    }
    paint();
  }

  /* ---------- harita ---------- */
  function renderMap() {
    KI.store.gameTouchDay();
    var frag = document.createDocumentFragment();

    /* İlerleme yalnızca bu cihazda saklanıyor; Oyun Modu'na ilk kez
       girildiğinde bir kerelik, yedeklemeyi hatırlatan bir uyarı çıkar
       (bkz. gmap__backup-hint için haritanın en altındaki kalıcı, minik
       hatırlatma). */
    if (!KI.store.hasSeenGameBackupHint()) {
      KI.store.markGameBackupHintSeen();
      setTimeout(function () {
        U.toast('İlerlemen yalnızca bu cihazda saklanıyor. Ayarlar\'dan yedekleyebilirsin.', 4200);
      }, 500);
    }

    var wrap = U.el('div', { class: 'gmap' });

    LEVELS.forEach(function (level, li) {
      var unlocked = isLevelUnlocked(li);
      var section = U.el('section', { class: 'gmap__level', 'data-level': level.id });

      section.appendChild(U.el('div', { class: 'gmap__banner' + (unlocked ? '' : ' gmap__banner--locked') }, [
        U.el('span', { class: 'gmap__banner-ico', html: KI.icons.html(unlocked ? 'flag' : 'lock') }),
        U.el('div', {}, [
          U.el('h2', { text: level.t }),
          U.el('p', { text: unlocked ? (level.desc + ' · ' + level.path.length + ' durak') : 'Önceki seviyeyi bitirince açılır' })
        ])
      ]));

      var track = U.el('div', { class: 'gmap__track' });
      var prevOffset = 0;
      level.path.forEach(function (node, i) {
        var isCp = node.kind === 'checkpoint';
        var tUnlocked = unlocked && isNodeUnlocked(level, i);
        var done = unlocked && isNodeDone(level, node);
        var prog = KI.store.gameProgress(level.id, node.id);
        var offset = isCp ? 0 : ZIGZAG[i % ZIGZAG.length];

        if (i > 0) {
          var prevIsCp = level.path[i - 1].kind === 'checkpoint';
          track.appendChild(buildConnector(prevOffset, offset, isCp || prevIsCp));
        }
        prevOffset = offset;

        var stop = U.el('div', { class: 'gmap__stop' + (isCp ? ' gmap__stop--cp' : ''), style: 'transform:translateX(' + offset + 'px)', 'data-node': node.id });

        var nodeCls = 'gmap__node' + (isCp ? ' gmap__node--checkpoint' : '') +
          (done ? ' gmap__node--done' : (tUnlocked ? ' gmap__node--next' : ' gmap__node--locked'));
        var node_ = U.el(tUnlocked ? 'a' : 'div', {
          class: nodeCls,
          href: tUnlocked ? ('#/oyun/' + level.id + '/' + node.id) : null,
          'data-sfx': tUnlocked ? 'nav' : null,
          'aria-disabled': tUnlocked ? null : 'true',
          title: isCp ? 'İleri Sar' : (node.theme.t + ' (' + node.topic.t + ')')
        });
        if (!tUnlocked) {
          node_.addEventListener('click', function () { KI.audio.play('toggle'); U.toast('Önce bir önceki durağı bitir'); });
        }
        var icoName = isCp ? 'fast-forward' : node.theme.ico;
        node_.appendChild(U.el('span', {
          class: 'gmap__node-ico',
          html: KI.icons.html((tUnlocked || done) ? icoName : 'lock')
        }));
        if (done) {
          node_.appendChild(U.el('span', { class: 'gmap__node-star' + (prog && prog.skipped ? ' gmap__node-star--skip' : ''),
            html: KI.icons.html(prog && prog.skipped ? 'fast-forward' : 'star') }));
        }
        stop.appendChild(node_);

        stop.appendChild(U.el('div', { class: 'gmap__label' + (isCp ? ' gmap__label--cp' : '') }, [
          U.el('b', { text: isCp ? 'İleri Sar' : node.theme.t }),
          isCp ? U.el('span', { class: 'gmap__label-score', text: (prog ? prog.best : 0) + '/10' })
            : (prog && !prog.skipped ? U.el('span', { class: 'gmap__label-score', text: prog.best + '/10' })
              : (prog && prog.skipped ? U.el('span', { class: 'gmap__label-score', text: 'atlandı' }) : null))
        ]));

        track.appendChild(stop);
      });
      section.appendChild(track);
      wrap.appendChild(section);
    });

    frag.appendChild(wrap);
    frag.appendChild(U.el('p', { class: 'gmap__footnote soft',
      text: 'İlerlemen yalnızca bu cihazda saklanıyor · Ayarlar\'dan yedekleyebilirsin' }));
    return frag;
  }

  /* ---------- sınav (durak) ---------- */
  function buildLessonItems(level, topicId) {
    var bank = (KI.gameQuestions[level.id] && KI.gameQuestions[level.id][topicId]) || [];
    var n = Math.min(LESSON_SIZE, bank.length);
    return U.shuffle(bank).slice(0, n);
  }
  function levelPool(level) {
    var all = [];
    level.topics.forEach(function (tp) {
      var bank = (KI.gameQuestions[level.id] && KI.gameQuestions[level.id][tp.id]) || [];
      all = all.concat(bank);
    });
    return all;
  }
  /* İleri Sar geçildiğinde, kendisine kadar olan tüm önceki dersler
     (haritada kilit gösterse bile) geçilmiş sayılır — tek bir komşu
     değil, o noktaya kadarki bütün yol açılır. finish() bunu gerçek bir
     sınav bittiğinde çağırır; simulateCheckpointResult de (tests/) aynı
     fonksiyonu kullanarak birim testlerinde aynı davranışı sınar. */
  function unlockPrecedingLessons(levelId, level, idx) {
    for (var b = 0; b < idx; b++) {
      if (level.path[b].kind === 'lesson') KI.store.markGameNodeSkipped(levelId, level.path[b].id);
    }
  }

  function buildCheckpointItems(level) {
    var pool = levelPool(level);
    var builds = pool.filter(function (q) { return q.type === 'build'; });
    var choices = pool.filter(function (q) { return q.type === 'choice'; });
    var picked = U.shuffle(builds).slice(0, LESSON_SIZE);
    if (picked.length < LESSON_SIZE) picked = picked.concat(U.shuffle(choices).slice(0, LESSON_SIZE - picked.length));
    return U.shuffle(picked);
  }

  function outOfHeartsBlock(onResume) {
    var wrap = U.el('div');
    wrap.appendChild(U.el('div', { class: 'callout callout--warn', style: 'margin-bottom:10px' }, [
      U.el('b', { class: 'callout__t', text: 'Canların bitti' }),
      U.el('span', { text: 'Devam etmek için video izleyip can kazanabilir ya da Premium’a geçebilirsin.' })
    ]));
    var box = U.el('div');
    mountHearts(box, onResume);
    wrap.appendChild(box);
    wrap.appendChild(U.el('a', { class: 'btn', href: '#/oyun', 'data-sfx': 'back', style: 'margin-top:10px;display:inline-block', text: '← Haritaya dön' }));
    return wrap;
  }

  function renderQuiz(levelId, nodeId) {
    var level = levelById(levelId);
    var idx = level ? nodeIndex(level, nodeId) : -1;
    var node = idx >= 0 ? level.path[idx] : null;
    var frag = document.createDocumentFragment();

    if (!level || !node) {
      frag.appendChild(U.el('div', { class: 'empty' }, [
        U.el('h3', { text: 'Bulunamadı' }),
        U.el('a', { class: 'btn btn--primary', href: '#/oyun', text: '← Haritaya dön' })
      ]));
      return frag;
    }

    var isCp = node.kind === 'checkpoint';
    var levelOpen = isLevelUnlocked(levelIdx(levelId));
    var nodeOpen = levelOpen && isNodeUnlocked(level, idx);
    KI.store.gameTouchDay();

    if (!nodeOpen) {
      frag.appendChild(U.el('div', { class: 'empty' }, [
        U.el('span', { class: 'empty__ico', html: KI.icons.html('lock') }),
        U.el('h3', { text: 'Bu durak henüz kilitli' }),
        U.el('p', { text: levelOpen ? 'Önce bir önceki durağı bitirmen gerekiyor.' : 'Bu seviye önceki seviye bitirilince açılır.' }),
        U.el('a', { class: 'btn btn--primary', href: '#/oyun', 'data-sfx': 'nav', text: '← Haritaya dön' })
      ]));
      return frag;
    }

    frag.appendChild(U.el('a', { class: 'btn gquiz__back', href: '#/oyun', 'data-sfx': 'back', text: '← Geri dön' }));
    frag.appendChild(U.el('div', { class: 'page-head page-head--tight' }, [
      U.el('p', { class: 'eyebrow', text: isCp ? level.t : (level.t + ' · ' + node.topic.t + ' · ' + node.round + '. tur') }),
      U.el('h1', { text: isCp ? 'İleri Sar' : node.theme.t })
    ]));
    if (isCp) {
      frag.appendChild(U.el('p', { class: 'soft', style: 'margin:-6px 0 12px',
        text: 'Bu seviyenin en zor sorularından 10 tanesi. ' + CHECKPOINT_PASS + '/10 veya üstü yaparsan buraya kadarki tüm duraklar ve bir sonraki ilk durak açılır.' }));
    }

    var box = U.el('div', { class: 'card gquiz', 'data-level': level.id });
    frag.appendChild(box);

    if (!KI.store.canPlayGame()) {
      box.appendChild(outOfHeartsBlock(function () { if (KI.store.canPlayGame()) paint(); }));
      return frag;
    }

    var items = isCp ? buildCheckpointItems(level) : buildLessonItems(level, node.topic.id);
    if (!items.length) {
      box.appendChild(U.el('p', { class: 'empty', text: 'Bu durak için henüz soru yok.' }));
      return frag;
    }

    var i = 0, correct = 0, combo = 0;

    function paint() {
      if (!KI.store.canPlayGame()) { U.clear(box); box.appendChild(outOfHeartsBlock(function () { if (KI.store.canPlayGame()) paint(); })); return; }
      if (i >= items.length) return finish();

      U.clear(box);
      box.appendChild(U.el('div', { class: 'gquiz__top' }, [
        U.el('span', { class: 'gquiz__prog', text: (i + 1) + ' / ' + items.length }),
        U.el('span', { class: 'gquiz__hearts', html: KI.icons.html('ach-heart') + ' ' + heartsLine() })
      ]));

      var it = items[i];
      if (it.type === 'choice') paintChoice(it); else paintBuild(it);
    }

    function onWrong() { KI.store.loseHeart(); paintHeartsBadge(); combo = 0; }
    function onCorrect() {
      combo++;
      KI.store.noteGameCombo(combo);
      if (combo === 3 || combo === 5 || combo === 7) {
        KI.confetti.burst();
        KI.audio.play('combo');
      }
    }

    function stepFooter(ok, correctText) {
      var fb = U.el('div', { class: 'quiz__fb callout ' + (ok ? 'callout--tip' : 'callout--warn') });
      fb.appendChild(U.el('b', { class: 'callout__t', text: ok ? '✓ Doğru' : ('✕ Doğrusu: ' + correctText) }));
      box.appendChild(fb);

      if (!KI.store.canPlayGame()) {
        box.appendChild(outOfHeartsBlock(function () { if (KI.store.canPlayGame()) paint(); }));
        return;
      }
      var next = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:12px',
        html: (i + 1 >= items.length ? 'Sonucu gör' : 'Sonraki soru →') });
      next.addEventListener('click', function () { i++; KI.audio.play('nav'); paint(); });
      box.appendChild(next);
    }

    function paintChoice(it) {
      box.appendChild(U.el('p', { class: 'quiz__q', text: it.q }));
      var list = U.el('div', { class: 'quiz__opts' });
      var answered = false;

      /* questions.md'deki doğru şık dağılımı A/B'ye yüklüydü; her
         gösterimde şıkları karıştırıp doğru indeksi yeniden hesaplıyoruz. */
      var order = U.shuffle([0, 1, 2, 3]);
      var opts = order.map(function (idx2) { return it.opts[idx2]; });
      var correctK = order.indexOf(it.a);

      opts.forEach(function (o, k) {
        var b = U.el('button', { class: 'opt', type: 'button' }, [
          U.el('span', { class: 'opt__key', text: 'ABCD'.charAt(k) }),
          U.el('span', { class: 'opt__txt', text: o })
        ]);
        b.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          var ok = (k === correctK);
          var rightBtn = list.children[correctK];
          rightBtn.classList.add('is-right'); rightBtn.querySelector('.opt__key').textContent = '✓';
          if (!ok) { b.classList.add('is-wrong'); b.querySelector('.opt__key').textContent = '✕'; }
          U.qsa('.opt', list).forEach(function (x, idx2) { x.disabled = true; if (idx2 !== k && idx2 !== correctK) x.classList.add('is-dim'); });
          if (ok) { correct++; onCorrect(); KI.audio.play('correct'); } else { KI.audio.play('wrong'); onWrong(); }
          stepFooter(ok, opts[correctK]);
        });
        list.appendChild(b);
      });
      box.appendChild(list);
    }

    function paintBuild(it) {
      var target = it.en.replace(/\s+/g, ' ').trim();
      var words = target.split(' ');
      box.appendChild(U.el('p', { class: 'quiz__q', html: KI.icons.html('flag') + ' ' + U.esc(it.tr) }));

      var line = U.el('div', { class: 'builder__line' });
      var pool = U.el('div', { class: 'builder__pool' });
      var placed = [];
      var check = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:12px', html: '✓ Kontrol et' });

      function refresh() {
        U.clear(line);
        if (!placed.length) line.appendChild(U.el('span', { class: 'builder__hint', text: 'Cümlen burada oluşacak' }));
        placed.forEach(function (p, idx2) {
          var chip = U.el('button', { class: 'wchip wchip--placed', type: 'button', text: p.w });
          chip.addEventListener('click', function () { placed.splice(idx2, 1); p.node.hidden = false; KI.audio.play('tap'); refresh(); });
          line.appendChild(chip);
        });
        check.disabled = placed.length !== words.length;
      }

      U.shuffle(words.map(function (w, k) { return { w: w, k: k }; })).forEach(function (item) {
        var chip = U.el('button', { class: 'wchip', type: 'button', text: item.w });
        item.node = chip;
        chip.addEventListener('click', function () { chip.hidden = true; placed.push(item); KI.audio.play('word'); refresh(); });
        pool.appendChild(chip);
      });

      box.appendChild(line); box.appendChild(pool); box.appendChild(check);
      refresh();

      check.addEventListener('click', function () {
        var answer = placed.map(function (p) { return p.w; }).join(' ');
        var ok = answer.toLowerCase() === target.toLowerCase();
        if (ok) { correct++; onCorrect(); KI.audio.play('correct'); } else { KI.audio.play('wrong'); onWrong(); }
        check.disabled = true;
        U.qsa('.wchip', box).forEach(function (c) { c.disabled = true; });
        line.classList.add(ok ? 'is-right' : 'is-wrong');

        var fb = U.el('div', { class: 'quiz__fb callout ' + (ok ? 'callout--tip' : 'callout--warn') });
        fb.appendChild(U.el('b', { class: 'callout__t', text: ok ? '✓ Doğru kurdun' : '✕ Doğrusu şöyle:' }));
        fb.appendChild(U.el('div', { style: 'font-family:var(--font-display);font-size:1.05rem', text: target }));
        box.appendChild(fb);

        if (!KI.store.canPlayGame()) {
          box.appendChild(outOfHeartsBlock(function () { if (KI.store.canPlayGame()) paint(); }));
          return;
        }
        var next = U.el('button', { class: 'btn btn--primary btn--block', type: 'button', style: 'margin-top:12px',
          html: (i + 1 >= items.length ? 'Sonucu gör' : 'Sonraki soru →') });
        next.addEventListener('click', function () { i++; KI.audio.play('nav'); paint(); });
        box.appendChild(next);
      });
    }

    function finish() {
      U.clear(box);
      var total = items.length;
      KI.store.recordGameResult(levelId, nodeId, correct, total);
      paintHeartsBadge();

      if (isCp) {
        var passed = correct >= CHECKPOINT_PASS;
        if (passed) unlockPrecedingLessons(levelId, level, idx);
        box.appendChild(U.el('h3', { html: KI.icons.html(passed ? 'trophy' : 'thumbsup') + '  ' + correct + ' / ' + total + ' doğru' }));
        if (passed) {
          box.appendChild(U.el('div', { class: 'callout callout--tip' }, [
            U.el('b', { class: 'callout__t', text: '✓ İleri Sar’ı geçtin!' }),
            U.el('span', { text: 'Bu sınava kadarki tüm duraklar ve bir sonraki ilk durak açıldı; istersen sırayı takip etmeden devam edebilirsin.' })
          ]));
        } else {
          box.appendChild(U.el('div', { class: 'callout callout--warn' }, [
            U.el('b', { class: 'callout__t', text: 'Henüz geçemedin' }),
            U.el('span', { text: 'En az ' + CHECKPOINT_PASS + '/10 gerekiyor. Dersleri sırayla çalışıp tekrar deneyebilirsin.' })
          ]));
        }
      } else {
        box.appendChild(U.el('h3', { html: KI.icons.html(correct >= 8 ? 'trophy' : 'thumbsup') + '  ' + correct + ' / ' + total + ' doğru' }));
        var stars = (correct === total) ? 3 : (correct >= Math.ceil(total * 0.7)) ? 2 : (correct >= Math.ceil(total * 0.5)) ? 1 : 0;
        var starsRow = U.el('div', { class: 'gquiz__stars' });
        for (var s = 0; s < 3; s++) starsRow.appendChild(U.el('span', { html: KI.icons.html(s < stars ? 'star' : 'star-outline') }));
        box.appendChild(starsRow);
        box.appendChild(U.el('p', { class: 'soft', text: stars >= 1 ? 'Bu durağı tamamladın, sıradaki açıldı!' : 'Durağı tamamladın; istersen tekrar deneyip yıldızını artırabilirsin.' }));
      }

      var row = U.el('div', { class: 'row', style: 'margin-top:10px' });
      var again = U.el('button', { class: 'btn', type: 'button', html: '↻ Tekrar dene' });
      again.addEventListener('click', function () { i = 0; correct = 0; combo = 0; items = isCp ? buildCheckpointItems(level) : buildLessonItems(level, node.topic.id); KI.audio.play('tap'); paint(); });
      row.appendChild(again);
      row.appendChild(U.el('a', { class: 'btn btn--primary', href: '#/oyun', 'data-sfx': 'nav', text: 'Haritaya dön →' }));
      box.appendChild(row);

      /* Hepsini doğru bitirince: daha uzun konfeti + daha uzun, ayrı bir ses. */
      if (correct === total) {
        KI.confetti.burst({ big: true });
        KI.audio.play('flawless');
      } else {
        KI.audio.play('finish');
      }
    }

    paint();
    return frag;
  }

  /* ---------- üst çubuk entegrasyonu: canlar düğmesi + günlük can yenileme ---------- */
  function syncChrome(tab) {
    var btn = document.getElementById('btn-hearts');
    if (!btn) return;
    if (tab === 'oyun') {
      KI.store.gameTouchDay();
      btn.hidden = false;
      paintHeartsBadge();
    } else {
      btn.hidden = true;
    }
  }

  KI.viewGame = {
    map: renderMap,
    quiz: renderQuiz,
    syncChrome: syncChrome,
    buildHeartsModal: function () { mountHearts(document.getElementById('hearts-body')); },
    totalNodes: function () { return LEVELS.reduce(function (n, lv) { return n + lv.path.length; }, 0); },
    /* Gerçek bir İleri Sar sınavının bitişini simüle eder (sonucu kaydeder,
       geçildiyse önceki dersleri açar) — finish()'teki checkpoint dalıyla
       birebir aynı unlockPrecedingLessons'ı çağırır. Yalnızca
       tests/unit-game.js tarafından kullanılır; uygulama arayüzünden
       tetiklenmez. */
    simulateCheckpointResult: function (levelId, nodeId, correct, total) {
      var level = levelById(levelId);
      var idx = level ? nodeIndex(level, nodeId) : -1;
      if (idx < 0) return false;
      KI.store.recordGameResult(levelId, nodeId, correct, total);
      if (correct >= CHECKPOINT_PASS) unlockPrecedingLessons(levelId, level, idx);
      return true;
    }
  };
})(window.KI);
