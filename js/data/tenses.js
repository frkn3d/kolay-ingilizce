/* ============================================================
   Gramer Atlası - tenses.js
   12 zaman: mantık, formül, zaman çizgisi işaretleri, örnekler.
   Örnekler Türk ve Osmanlı kültüründen seçilmiştir.

   timeline.marks içindeki x değerleri:  -1 = uzak geçmiş,
   0 = ŞİMDİ, +1 = uzak gelecek.
   ============================================================ */
(function (KI) {
  'use strict';

  var T = [];

  /* ---------------- 1. PRESENT SIMPLE ---------------- */
  T.push({
    id: 'present-simple',
    group: 'present',
    aspect: 'simple',
    en: 'Present Simple',
    tr: 'Geniş Zaman',
    tagline: 'Her zaman olan, alışkanlık olan işler',
    formula: {
      pos: 'Özne + <b>V1</b>  (he / she / it → <b>V1 + s</b>)',
      neg: 'Özne + <b>do not / does not</b> + V1',
      que: '<b>Do / Does</b> + özne + V1 ?'
    },
    logic: [
      'Bir iş sürekli tekrar ediyorsa, alışkanlıksa ya da her zaman doğruysa bu zamanı kullanırız.',
      'Zaman çizgisinde tek bir nokta yoktur; iş geçmişte de, şimdi de, gelecekte de tekrarlanır.',
      'Türkçedeki "-er, -ar" ekine benzer: içer, okur, açılır.'
    ],
    keyRule: 'he / she / it özneleriyle fiile <b>-s</b> eklenir: he drink<b>s</b>, she read<b>s</b>.',
    signals: ['every day (her gün)', 'always (her zaman)', 'usually (genellikle)', 'often (sık sık)', 'sometimes (bazen)', 'never (asla)', 'on Fridays (cuma günleri)'],
    timeline: {
      caption: 'İş tekrar eder: dün de vardı, bugün de var, yarın da olacak.',
      marks: [
        { t: 'dots', xs: [-0.72, -0.36, 0, 0.36, 0.72], l: 'tekrar eden iş' }
      ]
    },
    examples: [
      { en: 'My grandfather drinks tea after the morning prayer.', tr: 'Dedem sabah namazından sonra çay içer.', key: ['drinks'], note: 'Her sabah tekrarlanan bir alışkanlık.' },
      { en: 'Ayse reads a poem by Yunus Emre every evening.', tr: 'Ayşe her akşam Yunus Emre’den bir şiir okur.', key: ['reads', 'every'], note: '"every evening" geniş zamanın habercisidir.' },
      { en: 'The Grand Bazaar opens at nine.', tr: 'Kapalıçarşı dokuzda açılır.', key: ['opens'], note: 'Değişmeyen, herkesçe bilinen bir düzen.' },
      { en: 'We eat lahmacun with our family on Fridays.', tr: 'Cuma günleri ailemizle lahmacun yeriz.', key: ['eat'], note: 'Özne "we" olduğu için fiile -s eklenmez.' },
      { en: 'Mehmet does not drink coffee in the evening.', tr: 'Mehmet akşamları kahve içmez.', key: ['does', 'not', 'drink'], note: 'Olumsuzda "does" kullanıldı, fiil yalın kaldı: drink.' },
      { en: 'Does your mother make gozleme on Sundays?', tr: 'Annen pazar günleri gözleme yapar mı?', key: ['does', 'make'], note: 'Soruda da fiil yalın: make (makes değil).' }
    ],
    mistakes: [
      { bad: 'She drink tea every morning.', good: 'She drinks tea every morning.', why: 'he / she / it ile fiile -s eklenir.' },
      { bad: 'He doesn’t drinks coffee.', good: 'He doesn’t drink coffee.', why: '"does" zaten çekimi taşır; fiil yalın kalır.' }
    ],
    quiz: [
      { q: 'My grandmother ___ a kilim every winter.', options: ['weave', 'weaves', 'is weaving', 'wove'], answer: 1, why: '"every winter" tekrar demek; özne "she" olduğu için weaves.' },
      { q: 'Kapalıçarşı dokuzda açılır. → ?', options: ['The bazaar is opening at nine.', 'The bazaar opens at nine.', 'The bazaar opened at nine.', 'The bazaar will open at nine.'], answer: 1, why: 'Değişmeyen düzen: Present Simple.' },
      { q: '___ your father read the newspaper every day?', options: ['Do', 'Does', 'Is', 'Has'], answer: 1, why: 'Özne "your father" = he; soruda Does kullanılır.' }
    ]
  });

  /* ---------------- 2. PRESENT CONTINUOUS ---------------- */
  T.push({
    id: 'present-continuous',
    group: 'present',
    aspect: 'continuous',
    en: 'Present Continuous',
    tr: 'Şimdiki Zaman',
    tagline: 'Tam şu anda sürmekte olan iş',
    formula: {
      pos: 'Özne + <b>am / is / are</b> + V<b>-ing</b>',
      neg: 'Özne + am / is / are + <b>not</b> + V-ing',
      que: '<b>Am / Is / Are</b> + özne + V-ing ?'
    },
    logic: [
      'İş şu anda devam ediyorsa bu zamanı kullanırız. Konuşurken iş hâlâ sürüyordur.',
      'Zaman çizgisinde "ŞİMDİ" noktasının üstünden geçen kısa bir bant gibidir.',
      'Türkçedeki "-yor" ekine denk gelir: içiyor, yapıyor, bekliyor.'
    ],
    keyRule: 'İki parça gerekir: <b>be</b> (am/is/are) + fiil<b>-ing</b>. Biri eksik olursa cümle bozulur.',
    signals: ['now (şimdi)', 'right now (tam şu anda)', 'at the moment (şu an)', 'today (bugün)', 'look! (bak!)', 'listen! (dinle!)'],
    timeline: {
      caption: 'İş şimdi başlamış değil, şimdi sürüyor: az önce başladı, birazdan bitecek.',
      marks: [
        { t: 'span', x: -0.22, x2: 0.22, style: 'wave', l: 'şu anda sürüyor' }
      ]
    },
    examples: [
      { en: 'My mother is rolling the dough for gozleme now.', tr: 'Annem şimdi gözleme için hamuru açıyor.', key: ['is', 'rolling'], note: 'is + rolling: iki parça birlikte.' },
      { en: 'The muezzin is calling the adhan from the minaret.', tr: 'Müezzin minareden ezanı okuyor.', key: ['is', 'calling'], note: 'Tam şu anda duyulan bir iş.' },
      { en: 'Ayse is drawing a tulip motif on the tile.', tr: 'Ayşe çininin üzerine lale motifi çiziyor.', key: ['is', 'drawing'], note: 'Gözümüzün önünde süren iş.' },
      { en: 'We are waiting for the ferry at Eminonu.', tr: 'Eminönü’nde vapuru bekliyoruz.', key: ['are', 'waiting'], note: 'Özne "we" olduğu için "are".' },
      { en: 'I am not watching television right now.', tr: 'Şu anda televizyon izlemiyorum.', key: ['am', 'not', 'watching'], note: 'Olumsuzluk "not" ile be fiilinden hemen sonra gelir.' }
    ],
    mistakes: [
      { bad: 'She cooking soup now.', good: 'She is cooking soup now.', why: '"be" (is) atlanamaz.' },
      { bad: 'I am knowing the answer.', good: 'I know the answer.', why: 'know, like, want gibi fiiller -ing almaz; onlar Present Simple ister.' }
    ],
    quiz: [
      { q: 'Look! The imam ___ the sermon.', options: ['gives', 'is giving', 'gave', 'will give'], answer: 1, why: '"Look!" şu anı gösterir: Present Continuous.' },
      { q: 'Şu anda çay demliyoruz. → ?', options: ['We brew tea.', 'We are brewing tea.', 'We brewed tea.', 'We have brewed tea.'], answer: 1, why: 'Şu anda süren iş: am/is/are + -ing.' },
      { q: 'Hangi cümle doğru?', options: ['They are wait for the bus.', 'They waiting for the bus.', 'They are waiting for the bus.', 'They is waiting for the bus.'], answer: 2, why: 'they → are, fiil -ing alır.' }
    ]
  });

  /* ---------------- 3. PRESENT PERFECT ---------------- */
  T.push({
    id: 'present-perfect',
    group: 'present',
    aspect: 'perfect',
    en: 'Present Perfect',
    tr: 'Yakın / Bağlantılı Geçmiş',
    tagline: 'Geçmişte oldu ama etkisi şimdi duruyor',
    formula: {
      pos: 'Özne + <b>have / has</b> + <b>V3</b>',
      neg: 'Özne + have / has + <b>not</b> + V3',
      que: '<b>Have / Has</b> + özne + V3 ?'
    },
    logic: [
      'İş geçmişte oldu ama <b>ne zaman olduğu önemli değildir</b>; önemli olan sonucun şimdi durmasıdır.',
      'Zaman çizgisinde geçmişteki bir nokta ile ŞİMDİ arasına bir köprü kurar.',
      'Türkçede çoğu zaman "-miş, -mış" ya da "…-dı (hâlâ öyle)" diye çevrilir.'
    ],
    keyRule: 'Cümlede <b>yesterday, in 1453, two days ago</b> gibi kesin geçmiş zaman varsa bu zaman kullanılmaz; o zaman Past Simple gerekir.',
    signals: ['just (az önce)', 'already (çoktan)', 'yet (henüz)', 'ever (hiç)', 'never (hiç)', 'since 2010 (2010’dan beri)', 'for ten years (on yıldır)'],
    timeline: {
      caption: 'Geçmişteki iş, oktan da anlaşılacağı gibi bugüne uzanır.',
      marks: [
        { t: 'dot', x: -0.55, l: 'iş oldu' },
        { t: 'arrow', x: -0.55, x2: -0.02, l: 'bugüne uzanır' }
      ]
    },
    examples: [
      { en: 'I have visited the Suleymaniye Mosque three times.', tr: 'Süleymaniye Camii’ni üç kez ziyaret ettim.', key: ['have', 'visited'], note: 'Ne zaman gittiğim değil, hayatımda üç kez olması önemli.' },
      { en: 'Mehmet has just finished his tea.', tr: 'Mehmet çayını az önce bitirdi.', key: ['has', 'just', 'finished'], note: '"just" = daha yeni oldu, etkisi taze.' },
      { en: 'We have lived in Bursa since 2010.', tr: '2010’dan beri Bursa’da yaşıyoruz.', key: ['have', 'lived', 'since'], note: 'Geçmişte başladı, hâlâ sürüyor: since + başlangıç.' },
      { en: 'Elif has already prepared the iftar table.', tr: 'Elif iftar sofrasını çoktan hazırladı.', key: ['has', 'already', 'prepared'], note: 'Sofra şu anda hazır; sonuç önümüzde.' },
      { en: 'Have you ever tasted kunefe?', tr: 'Hiç künefe tattın mı?', key: ['have', 'ever', 'tasted'], note: '"ever" ile hayat boyu deneyim sorulur.' }
    ],
    mistakes: [
      { bad: 'I have seen him yesterday.', good: 'I saw him yesterday.', why: '"yesterday" kesin geçmiş zamandır; Past Simple ister.' },
      { bad: 'She has went to the market.', good: 'She has gone to the market.', why: 'have/has ile 3. hâl (V3) kullanılır: go → gone.' }
    ],
    quiz: [
      { q: 'Usta ___ bu çiniyi yeni bitirdi. → The master ___ finished this tile.', options: ['has just', 'just', 'is just', 'had just'], answer: 0, why: 'has + just + V3: sonucu şimdi görüyoruz.' },
      { q: 'We ___ in this village for thirty years.', options: ['live', 'are living', 'have lived', 'lived'], answer: 2, why: '"for thirty years" geçmişten bugüne uzanır.' },
      { q: 'Hangisi yanlış?', options: ['I have never seen the sea.', 'He has already left.', 'They have arrived in 1453.', 'She has not called yet.'], answer: 2, why: '"in 1453" kesin tarih ister: Past Simple (arrived).' }
    ]
  });

  /* ---------------- 4. PRESENT PERFECT CONTINUOUS ---------------- */
  T.push({
    id: 'present-perfect-continuous',
    group: 'present',
    aspect: 'perfect-continuous',
    en: 'Present Perfect Continuous',
    tr: 'Süregelen Yakın Geçmiş',
    tagline: 'Geçmişte başladı, hâlâ sürüyor - süresi vurgulanır',
    formula: {
      pos: 'Özne + <b>have / has been</b> + V<b>-ing</b>',
      neg: 'Özne + have / has <b>not</b> been + V-ing',
      que: '<b>Have / Has</b> + özne + been + V-ing ?'
    },
    logic: [
      'İş geçmişte başladı, şu ana kadar hiç durmadı ve hâlâ sürüyor.',
      'Present Perfect sonucu vurgular; bu zaman ise <b>ne kadar süredir</b> yapıldığını vurgular.',
      'Türkçede "…-dir yapıyor" kalıbıyla çevrilir: "kırk yıldır yapıyor".'
    ],
    keyRule: '<b>for</b> = süre (for two hours), <b>since</b> = başlangıç noktası (since morning).',
    signals: ['for two hours (iki saattir)', 'since morning (sabahtan beri)', 'all day (bütün gün)', 'lately (son zamanlarda)', 'how long? (ne kadar süredir?)'],
    timeline: {
      caption: 'Çizgi geçmişte başlar, kesintisiz biçimde ŞİMDİ’ye kadar gelir.',
      marks: [
        { t: 'span', x: -0.75, x2: -0.02, style: 'wave', l: 'kesintisiz sürüyor' },
        { t: 'dot', x: -0.75, l: 'başladı' }
      ]
    },
    examples: [
      { en: 'Ayse has been weaving this carpet since spring.', tr: 'Ayşe bu halıyı ilkbahardan beri dokuyor.', key: ['has', 'been', 'weaving', 'since'], note: 'İlkbaharda başladı, hâlâ tezgâhın başında.' },
      { en: 'It has been raining since the morning prayer.', tr: 'Sabah namazından beri yağmur yağıyor.', key: ['has', 'been', 'raining'], note: 'Başlangıç noktası veriliyor: since.' },
      { en: 'Hasan Usta has been making ebru for forty years.', tr: 'Hasan Usta kırk yıldır ebru yapıyor.', key: ['has', 'been', 'making', 'for'], note: 'Süre veriliyor: for forty years.' },
      { en: 'We have been waiting for the iftar cannon for ten minutes.', tr: 'On dakikadır iftar topunu bekliyoruz.', key: ['have', 'been', 'waiting'], note: 'Bekleme hâlâ sürüyor.' },
      { en: 'How long have you been studying English?', tr: 'Ne zamandır İngilizce çalışıyorsun?', key: ['have', 'been', 'studying'], note: '"How long" bu zamanın en sevdiği sorudur.' }
    ],
    mistakes: [
      { bad: 'I am waiting here since morning.', good: 'I have been waiting here since morning.', why: 'Geçmişten bugüne süren iş için have/has been + -ing gerekir.' },
      { bad: 'She has been knowing him for years.', good: 'She has known him for years.', why: 'know, love, have gibi fiiller -ing almaz.' }
    ],
    quiz: [
      { q: 'Dedem iki saattir bahçede çalışıyor. → My grandfather ___ in the garden for two hours.', options: ['works', 'is working', 'has been working', 'worked'], answer: 2, why: 'Geçmişte başlayıp süren iş + süre (for).' },
      { q: 'It ___ since the morning prayer.', options: ['rains', 'has been raining', 'rained', 'is rain'], answer: 1, why: 'since ile geçmişten bugüne süren iş.' }
    ]
  });

  /* ---------------- 5. PAST SIMPLE ---------------- */
  T.push({
    id: 'past-simple',
    group: 'past',
    aspect: 'simple',
    en: 'Past Simple',
    tr: 'Geçmiş Zaman (‑di)',
    tagline: 'Geçmişte oldu, bitti - tarihi bellidir',
    formula: {
      pos: 'Özne + <b>V2</b> (fiil + ed ya da düzensiz hâl)',
      neg: 'Özne + <b>did not</b> + V1',
      que: '<b>Did</b> + özne + V1 ?'
    },
    logic: [
      'İş geçmişte belli bir anda oldu ve bitti. Şu anla bağlantısı yoktur.',
      'Zaman çizgisinde geçmişte tek bir nokta olarak durur.',
      'Türkçedeki "-dı, -di" ekidir: yaptı, gitti, içti.'
    ],
    keyRule: 'Olumsuz ve soruda <b>did</b> çekimi üstlenir, fiil <b>yalın</b> kalır: did not go (went değil).',
    signals: ['yesterday (dün)', 'last week (geçen hafta)', 'two days ago (iki gün önce)', 'in 1453 (1453’te)', 'when I was a child (çocukken)'],
    timeline: {
      caption: 'İş geçmişte bir noktada oldu ve orada kaldı.',
      marks: [
        { t: 'dot', x: -0.6, l: 'oldu ve bitti' }
      ]
    },
    examples: [
      { en: 'Mimar Sinan built the Selimiye Mosque in 1575.', tr: 'Mimar Sinan Selimiye Camii’ni 1575’te inşa etti.', key: ['built'], note: 'build düzensizdir: build → built.' },
      { en: 'We ate lahmacun for lunch four months ago.', tr: 'Dört ay önce öğle yemeğinde lahmacun yedik.', key: ['ate'], note: 'eat → ate. "ago" kesin geçmiş demektir.' },
      { en: 'Fatih Sultan Mehmet conquered Istanbul in 1453.', tr: 'Fatih Sultan Mehmet 1453’te İstanbul’u fethetti.', key: ['conquered'], note: 'Düzenli fiil: conquer + ed.' },
      { en: 'Yesterday my grandmother made stuffed grape leaves.', tr: 'Dün babaannem sarma yaptı.', key: ['made', 'yesterday'], note: 'make → made.' },
      { en: 'I did not go to the market last Tuesday.', tr: 'Geçen salı pazara gitmedim.', key: ['did', 'not', 'go'], note: 'did kullanıldığı için fiil yalın: go.' }
    ],
    mistakes: [
      { bad: 'He didn’t went to school.', good: 'He didn’t go to school.', why: '"did" zaten geçmişi taşır; fiil 1. hâlde kalır.' },
      { bad: 'I have eaten lahmacun yesterday.', good: 'I ate lahmacun yesterday.', why: '"yesterday" kesin geçmiş zaman: Past Simple.' }
    ],
    quiz: [
      { q: 'Mimar Sinan ___ the Selimiye Mosque in 1575.', options: ['builds', 'built', 'has built', 'was building'], answer: 1, why: 'Kesin tarih (1575) verildi: Past Simple.' },
      { q: 'Dün pazara gitmedik. → We ___ to the market yesterday.', options: ['did not go', 'did not went', 'have not gone', 'not went'], answer: 0, why: 'did not + yalın fiil.' },
      { q: '___ you see the ferry this morning?', options: ['Do', 'Did', 'Have', 'Are'], answer: 1, why: 'Geçmiş soru: Did + özne + V1.' }
    ]
  });

  /* ---------------- 6. PAST CONTINUOUS ---------------- */
  T.push({
    id: 'past-continuous',
    group: 'past',
    aspect: 'continuous',
    en: 'Past Continuous',
    tr: 'Şimdiki Zamanın Hikâyesi (‑yordu)',
    tagline: 'Geçmişte bir anda sürmekte olan iş',
    formula: {
      pos: 'Özne + <b>was / were</b> + V<b>-ing</b>',
      neg: 'Özne + was / were + <b>not</b> + V-ing',
      que: '<b>Was / Were</b> + özne + V-ing ?'
    },
    logic: [
      'Geçmişte bir an alırız ve o anda işin sürdüğünü söyleriz.',
      'Çoğu zaman uzun iş sürerken kısa bir iş araya girer: uzun iş bu zamanla, kısa iş Past Simple ile anlatılır.',
      'Türkçedeki "-yordu" ekidir: içiyordu, dokuyordu.'
    ],
    keyRule: '<b>I / he / she / it → was</b>, <b>you / we / they → were</b>.',
    signals: ['while (…-irken)', 'when (…-diğinde)', 'at eight o’clock (saat sekizde)', 'all morning (bütün sabah)', 'at that moment (o anda)'],
    timeline: {
      caption: 'Uzun iş sürerken (bant), kısa iş araya girer (nokta).',
      marks: [
        { t: 'span', x: -0.82, x2: -0.28, style: 'wave', l: 'süren iş' },
        { t: 'dot', x: -0.55, l: 'araya giren iş' }
      ]
    },
    examples: [
      { en: 'I was drinking tea when the adhan began.', tr: 'Ezan başladığında çay içiyordum.', key: ['was', 'drinking', 'began'], note: 'Uzun iş: içiyordum. Kısa iş: began (Past Simple).' },
      { en: 'My grandmother was weaving a kilim all morning.', tr: 'Babaannem bütün sabah kilim dokuyordu.', key: ['was', 'weaving'], note: 'Sabah boyunca süren iş.' },
      { en: 'The children were playing in the courtyard of the mosque.', tr: 'Çocuklar caminin avlusunda oynuyordu.', key: ['were', 'playing'], note: 'Çoğul özne → were.' },
      { en: 'While my mother was cooking, I was setting the table.', tr: 'Annem yemek yaparken ben sofrayı kuruyordum.', key: ['while', 'was', 'cooking', 'was', 'setting'], note: 'İki iş aynı anda sürüyor: while.' },
      { en: 'We were not sleeping at midnight.', tr: 'Gece yarısı uyumuyorduk.', key: ['were', 'not', 'sleeping'], note: 'Olumsuzluk "not" be fiilinden sonra.' }
    ],
    mistakes: [
      { bad: 'They was waiting at the pier.', good: 'They were waiting at the pier.', why: 'they → were.' },
      { bad: 'When he called, I cooked.', good: 'When he called, I was cooking.', why: 'Telefon geldiğinde iş sürüyorduysa Past Continuous gerekir.' }
    ],
    quiz: [
      { q: 'Ezan okunurken sofrayı kuruyordum. → I ___ the table while the adhan ___.', options: ['set / was calling', 'was setting / was being called', 'was setting / was heard', 'set / called'], answer: 2, why: 'Süren iş: was setting. Kısa iş Past Simple ile verilir.' },
      { q: 'The craftsmen ___ the marble all day.', options: ['was carving', 'were carving', 'carve', 'have carved'], answer: 1, why: 'Çoğul özne (craftsmen) → were.' }
    ]
  });

  /* ---------------- 7. PAST PERFECT ---------------- */
  T.push({
    id: 'past-perfect',
    group: 'past',
    aspect: 'perfect',
    en: 'Past Perfect',
    tr: 'Geçmişin Geçmişi (‑mişti)',
    tagline: 'Geçmişteki bir işten de önce olan iş',
    formula: {
      pos: 'Özne + <b>had</b> + <b>V3</b>',
      neg: 'Özne + had <b>not</b> + V3',
      que: '<b>Had</b> + özne + V3 ?'
    },
    logic: [
      'Geçmişte iki iş varsa, <b>önce olanı</b> bu zamanla anlatırız; sonra olan Past Simple olur.',
      'Zaman çizgisinde iki nokta görürsünüz: soldaki (önce) Past Perfect, sağdaki (sonra) Past Simple.',
      'Türkçedeki "-mişti" ekidir: hazırlamıştı, gitmişti.'
    ],
    keyRule: 'Tek başına nadiren kullanılır; genelde <b>before, after, when, by the time</b> ile ikinci bir geçmiş işe bağlanır.',
    signals: ['before (…-den önce)', 'after (…-den sonra)', 'by the time (…-diğinde)', 'already (çoktan)', 'never before (daha önce hiç)'],
    timeline: {
      caption: 'Önce olan iş solda, sonra olan iş sağda. İkisi de geçmişte.',
      marks: [
        { t: 'dot', x: -0.78, l: '1. önce olan (had + V3)' },
        { t: 'dot', x: -0.34, l: '2. sonra olan (V2)' },
        { t: 'arrow', x: -0.78, x2: -0.34 }
      ]
    },
    examples: [
      { en: 'Elif had prepared the iftar table before the cannon fired.', tr: 'İftar topu patlamadan önce Elif sofrayı hazırlamıştı.', key: ['had', 'prepared', 'before'], note: 'Önce sofra hazırlandı, sonra top patladı.' },
      { en: 'Zeynep had taken her mother’s words seriously.', tr: 'Zeynep annesinin söylediklerini önemsemişti.', key: ['had', 'taken'], note: 'take → taken (3. hâl).' },
      { en: 'When we arrived at the mosque, the prayer had already started.', tr: 'Camiye vardığımızda namaz çoktan başlamıştı.', key: ['had', 'already', 'started'], note: 'Varışımızdan önce namaz başlamış.' },
      { en: 'Mimar Sinan had built many mosques before the Selimiye.', tr: 'Mimar Sinan, Selimiye’den önce birçok cami inşa etmişti.', key: ['had', 'built'], note: 'Selimiye’den daha eski işler.' },
      { en: 'I had never tasted kunefe before that day.', tr: 'O günden önce hiç künefe tatmamıştım.', key: ['had', 'never', 'tasted'], note: '"never … before" bu zamanın kalıbıdır.' }
    ],
    mistakes: [
      { bad: 'When I arrived, the guests already left.', good: 'When I arrived, the guests had already left.', why: 'Varıştan önce olan iş için had + V3.' },
      { bad: 'He had went home.', good: 'He had gone home.', why: 'had ile 3. hâl gelir: go → gone.' }
    ],
    quiz: [
      { q: 'Biz varmadan önce misafirler gitmişti. → The guests ___ before we arrived.', options: ['left', 'have left', 'had left', 'were leaving'], answer: 2, why: 'İki geçmiş işten önce olanı: had + V3.' },
      { q: 'By the time the imam came, the courtyard ___ full.', options: ['is', 'was', 'had been', 'has been'], answer: 2, why: 'Geliş anından önceki durum: had been.' }
    ]
  });

  /* ---------------- 8. PAST PERFECT CONTINUOUS ---------------- */
  T.push({
    id: 'past-perfect-continuous',
    group: 'past',
    aspect: 'perfect-continuous',
    en: 'Past Perfect Continuous',
    tr: 'Geçmişte Süregelmiş İş',
    tagline: 'Geçmişteki bir ana kadar bir süredir devam eden iş',
    formula: {
      pos: 'Özne + <b>had been</b> + V<b>-ing</b>',
      neg: 'Özne + had <b>not</b> been + V-ing',
      que: '<b>Had</b> + özne + been + V-ing ?'
    },
    logic: [
      'Geçmişte bir an seçeriz; o ana <b>gelene kadar</b> iş bir süredir devam ediyordu.',
      'Past Perfect sonucu, bu zaman ise süreyi vurgular: "…-dir yapıyordu".',
      'Genelde cümlede bir süre (for two hours) ya da başlangıç (since morning) bulunur.'
    ],
    keyRule: 'Önce süren iş (had been + -ing), sonra onu kesen olay (Past Simple) gelir.',
    signals: ['for two hours (iki saattir)', 'since morning (sabahtan beri)', 'all day (bütün gün)', 'before (…-den önce)'],
    timeline: {
      caption: 'İş, geçmişteki o ana kadar kesintisiz sürmüştü.',
      marks: [
        { t: 'span', x: -0.85, x2: -0.4, style: 'wave', l: 'bir süredir sürüyordu' },
        { t: 'dot', x: -0.4, l: 'o an geldi' }
      ]
    },
    examples: [
      { en: 'The craftsmen had been carving the marble for months before the sultan came.', tr: 'Padişah gelmeden önce ustalar aylardır mermeri oyuyordu.', key: ['had', 'been', 'carving'], note: 'Süre: for months. Kesen olay: came.' },
      { en: 'We had been waiting at the pier for an hour when the ferry arrived.', tr: 'Vapur geldiğinde iskelede bir saattir bekliyorduk.', key: ['had', 'been', 'waiting'], note: 'Bekleme vapurdan önce başladı.' },
      { en: 'My grandfather had been living in Konya before he moved to Bursa.', tr: 'Dedem Bursa’ya taşınmadan önce Konya’da yaşıyordu.', key: ['had', 'been', 'living'], note: 'Taşınmaya kadar süren durum.' },
      { en: 'She had been reading the Mesnevi for two hours before dinner.', tr: 'Akşam yemeğinden önce iki saattir Mesnevî okuyordu.', key: ['had', 'been', 'reading'], note: 'Yemekten önceki iki saat.' }
    ],
    mistakes: [
      { bad: 'We were waiting for an hour when the ferry arrived.', good: 'We had been waiting for an hour when the ferry arrived.', why: 'Süre + geçmişteki bir ana kadar: had been + -ing.' }
    ],
    quiz: [
      { q: 'Top patladığında üç saattir oruç tutuyorduk. Hangi kalıp?', options: ['had been fasting', 'were fasting', 'have been fasting', 'fasted'], answer: 0, why: 'Geçmişteki ana kadar süren iş: had been + -ing.' },
      { q: 'He ___ the ney for years before he became a master.', options: ['played', 'has been playing', 'had been playing', 'is playing'], answer: 2, why: '"before he became" geçmişteki ana kadar süreyi gösterir.' }
    ]
  });

  /* ---------------- 9. FUTURE SIMPLE ---------------- */
  T.push({
    id: 'future-simple',
    group: 'future',
    aspect: 'simple',
    en: 'Future Simple',
    tr: 'Gelecek Zaman (‑ecek)',
    tagline: 'Gelecekte olacak iş, karar ya da tahmin',
    formula: {
      pos: 'Özne + <b>will</b> + V1',
      neg: 'Özne + <b>will not (won’t)</b> + V1',
      que: '<b>Will</b> + özne + V1 ?'
    },
    logic: [
      'Gelecekte olacak bir işi söylerken kullanırız. Zamanı belirtmek şart değildir.',
      '<b>will</b> genelde o anda verilen karar, söz ya da tahmin içindir.',
      'Planlanmış, hazırlığı yapılmış işler için <b>be going to</b> daha uygundur.'
    ],
    keyRule: 'will’den sonra fiil <b>her zaman yalındır</b>: will go (will goes / will went değil).',
    signals: ['tomorrow (yarın)', 'next week (gelecek hafta)', 'tonight (bu gece)', 'soon (yakında)', 'I think… (sanırım…)', 'in 2030 (2030’da)'],
    timeline: {
      caption: 'İş, ŞİMDİ’nin sağında bir noktada gerçekleşecek.',
      marks: [
        { t: 'dot', x: 0.6, l: 'olacak' }
      ]
    },
    examples: [
      { en: 'I will visit Topkapi Palace next week.', tr: 'Gelecek hafta Topkapı Sarayı’nı ziyaret edeceğim.', key: ['will', 'visit'], note: 'will + yalın fiil.' },
      { en: 'My mother will make ashura tomorrow.', tr: 'Annem yarın aşure yapacak.', key: ['will', 'make'], note: 'Özne ne olursa olsun will değişmez.' },
      { en: 'I think it will rain this evening.', tr: 'Sanırım bu akşam yağmur yağacak.', key: ['will', 'rain'], note: 'Tahmin: I think + will.' },
      { en: 'We will not forget our traditions.', tr: 'Geleneklerimizi unutmayacağız.', key: ['will', 'not', 'forget'], note: 'Olumsuz: will not = won’t.' },
      { en: 'Will you come to the wedding on Saturday?', tr: 'Cumartesi düğüne gelecek misin?', key: ['will', 'come'], note: 'Soru: Will + özne + V1.' }
    ],
    mistakes: [
      { bad: 'She will goes to Edirne.', good: 'She will go to Edirne.', why: 'will’den sonra fiile -s eklenmez.' },
      { bad: 'I will to help you.', good: 'I will help you.', why: 'will ile "to" kullanılmaz.' }
    ],
    quiz: [
      { q: 'Yarın aşure yapacağız. → We ___ ashura tomorrow.', options: ['make', 'will make', 'are making to', 'will making'], answer: 1, why: 'will + yalın fiil.' },
      { q: 'Hangisi doğru?', options: ['He will visits the mosque.', 'He wills visit the mosque.', 'He will visit the mosque.', 'He will to visit the mosque.'], answer: 2, why: 'will + V1, ek yok.' }
    ]
  });

  /* ---------------- 10. FUTURE CONTINUOUS ---------------- */
  T.push({
    id: 'future-continuous',
    group: 'future',
    aspect: 'continuous',
    en: 'Future Continuous',
    tr: 'Gelecekte Süren İş',
    tagline: 'Gelecekteki belli bir anda sürüyor olacak',
    formula: {
      pos: 'Özne + <b>will be</b> + V<b>-ing</b>',
      neg: 'Özne + <b>will not be</b> + V-ing',
      que: '<b>Will</b> + özne + <b>be</b> + V-ing ?'
    },
    logic: [
      'Gelecekte bir an seçeriz ve o anda işin sürmekte olacağını söyleriz.',
      'Future Simple işin olacağını, bu zaman ise o anda <b>devam ediyor olacağını</b> anlatır.',
      'Türkçede "…-yor olacak" diye çevrilir: bekliyor olacağız.'
    ],
    keyRule: 'Kalıp hiç değişmez: <b>will be + fiil-ing</b>. Özne ne olursa olsun aynıdır.',
    signals: ['this time tomorrow (yarın bu saatte)', 'at eight o’clock (saat sekizde)', 'next Friday (gelecek cuma)', 'all evening (bütün akşam)'],
    timeline: {
      caption: 'Gelecekteki o anda iş çoktan başlamış, hâlâ sürüyor olacak.',
      marks: [
        { t: 'span', x: 0.32, x2: 0.82, style: 'wave', l: 'sürüyor olacak' },
        { t: 'flag', x: 0.57, l: 'o an' }
      ]
    },
    examples: [
      { en: 'This time tomorrow we will be sailing on the Bosphorus.', tr: 'Yarın bu saatte Boğaz’da gemiyle gidiyor olacağız.', key: ['will', 'be', 'sailing'], note: 'Gelecekte bir an: this time tomorrow.' },
      { en: 'At eight o’clock we will be eating the iftar meal.', tr: 'Saat sekizde iftar yemeğini yiyor olacağız.', key: ['will', 'be', 'eating'], note: 'Saat sekizde iş sürüyor olacak.' },
      { en: 'Next Friday the imam will be giving the sermon.', tr: 'Gelecek cuma imam hutbe veriyor olacak.', key: ['will', 'be', 'giving'], note: 'Belirli bir gelecek an.' },
      { en: 'Do not call me at noon; I will be praying.', tr: 'Öğlen beni arama, namaz kılıyor olacağım.', key: ['will', 'be', 'praying'], note: 'O anda meşgul olacağım.' }
    ],
    mistakes: [
      { bad: 'We will sailing tomorrow.', good: 'We will be sailing tomorrow.', why: '"be" atlanamaz: will + be + -ing.' }
    ],
    quiz: [
      { q: 'Yarın bu saatte vapurda olacağız (yolculuk sürüyor olacak). → This time tomorrow we ___ on the ferry.', options: ['will travel', 'will be traveling', 'travel', 'are traveling'], answer: 1, why: 'Gelecekteki anda süren iş: will be + -ing.' },
      { q: 'Hangisi doğru?', options: ['She will be cook.', 'She will be cooking.', 'She will cooking.', 'She be cooking.'], answer: 1, why: 'will be + fiil-ing.' }
    ]
  });

  /* ---------------- 11. FUTURE PERFECT ---------------- */
  T.push({
    id: 'future-perfect',
    group: 'future',
    aspect: 'perfect',
    en: 'Future Perfect',
    tr: 'Gelecekte Bitmiş İş',
    tagline: 'Gelecekteki bir ana kadar bitmiş olacak',
    formula: {
      pos: 'Özne + <b>will have</b> + <b>V3</b>',
      neg: 'Özne + <b>will not have</b> + V3',
      que: '<b>Will</b> + özne + <b>have</b> + V3 ?'
    },
    logic: [
      'Gelecekte bir son tarih seçeriz; iş o tarihe kadar <b>tamamlanmış</b> olacaktır.',
      'Cümlede çoğunlukla <b>by</b> (…-e kadar) bulunur: by Friday, by 2030.',
      'Türkçede "…-mış olacak" diye çevrilir: bitirmiş olacak.'
    ],
    keyRule: '<b>by</b> = son tarih (cumaya kadar), <b>until</b> = o ana dek süren durum. Bu zaman "by" ile çalışır.',
    signals: ['by tomorrow (yarına kadar)', 'by 2030 (2030’a kadar)', 'by the time… (…-diğinde)', 'before you arrive (sen gelmeden önce)'],
    timeline: {
      caption: 'Son tarihten önce iş biter; bayrağa varmadan nokta tamamlanmıştır.',
      marks: [
        { t: 'dot', x: 0.38, l: 'iş biter' },
        { t: 'flag', x: 0.75, l: 'son tarih (by…)' },
        { t: 'arrow', x: 0.38, x2: 0.75 }
      ]
    },
    examples: [
      { en: 'By Ramadan, my mother will have finished the quilt.', tr: 'Ramazana kadar annem yorganı bitirmiş olacak.', key: ['will', 'have', 'finished', 'by'], note: 'Son tarih: Ramazan.' },
      { en: 'By 2030, the restoration of the mosque will have ended.', tr: '2030’a kadar caminin restorasyonu bitmiş olacak.', key: ['will', 'have', 'ended'], note: 'Tarihe kadar tamamlanmış olacak.' },
      { en: 'Before you arrive, I will have made the tea.', tr: 'Sen gelmeden önce çayı demlemiş olacağım.', key: ['will', 'have', 'made'], note: 'make → made (V3).' },
      { en: 'By next month, we will have moved to the village.', tr: 'Gelecek aya kadar köye taşınmış olacağız.', key: ['will', 'have', 'moved'], note: 'Taşınma o tarihten önce biter.' }
    ],
    mistakes: [
      { bad: 'By Friday I will finish the carpet.', good: 'By Friday I will have finished the carpet.', why: '"by" ile son tarihe kadar bitmiş olma: will have + V3.' }
    ],
    quiz: [
      { q: 'Akşama kadar sofrayı hazırlamış olacağım. → By the evening I ___ the table.', options: ['will prepare', 'will have prepared', 'prepare', 'have prepared'], answer: 1, why: 'by + son tarih → will have + V3.' },
      { q: 'By 2030 the restoration ___ .', options: ['will end', 'will have ended', 'ends', 'has ended'], answer: 1, why: 'Belirli tarihe kadar tamamlanma.' }
    ]
  });

  /* ---------------- 12. FUTURE PERFECT CONTINUOUS ---------------- */
  T.push({
    id: 'future-perfect-continuous',
    group: 'future',
    aspect: 'perfect-continuous',
    en: 'Future Perfect Continuous',
    tr: 'Gelecekte Süregelmiş İş',
    tagline: 'Gelecekteki bir ana kadar ne kadar süredir yapılıyor olacak',
    formula: {
      pos: 'Özne + <b>will have been</b> + V<b>-ing</b>',
      neg: 'Özne + <b>will not have been</b> + V-ing',
      que: '<b>Will</b> + özne + <b>have been</b> + V-ing ?'
    },
    logic: [
      'Gelecekte bir an seçeriz ve o ana kadar işin <b>kaç zamandır</b> sürdüğünü söyleriz.',
      'Future Perfect işin biteceğini, bu zaman ise hâlâ sürüyor olacağını anlatır.',
      'Türkçede "…-dir yapıyor olacak" diye çevrilir: kırk yıldır yapıyor olacak.'
    ],
    keyRule: 'En uzun kalıptır ama ezberi kolaydır: <b>will have been + fiil-ing</b> + süre (for…).',
    signals: ['by next year (gelecek yıla kadar)', 'for forty years (kırk yıldır)', 'by the time… (…-diğinde)'],
    timeline: {
      caption: 'Süren iş, gelecekteki o ana kadar hiç kesilmemiş olacak.',
      marks: [
        { t: 'span', x: 0.12, x2: 0.78, style: 'wave', l: 'sürüyor olacak' },
        { t: 'flag', x: 0.78, l: 'o ana kadar' }
      ]
    },
    examples: [
      { en: 'By next spring, Hasan Usta will have been making ebru for forty years.', tr: 'Gelecek ilkbaharda Hasan Usta kırk yıldır ebru yapıyor olacak.', key: ['will', 'have', 'been', 'making'], note: 'Süre: for forty years.' },
      { en: 'By the evening prayer, we will have been traveling for ten hours.', tr: 'Akşam namazına kadar on saattir yolculuk yapıyor olacağız.', key: ['will', 'have', 'been', 'traveling'], note: 'O ana kadar geçen süre.' },
      { en: 'In June, my sister will have been studying in Bursa for three years.', tr: 'Haziranda kız kardeşim üç yıldır Bursa’da okuyor olacak.', key: ['will', 'have', 'been', 'studying'], note: 'Okumaya devam ediyor olacak.' }
    ],
    mistakes: [
      { bad: 'By June she will have studying for three years.', good: 'By June she will have been studying for three years.', why: '"been" atlanamaz: will have been + -ing.' }
    ],
    quiz: [
      { q: 'Gelecek yıl kırk yıldır ebru yapıyor olacak. → Next year he ___ ebru for forty years.', options: ['will make', 'will have made', 'will have been making', 'has been making'], answer: 2, why: 'Gelecekteki ana kadar süren iş + süre.' }
    ]
  });

  /* ---------------- dışa aç ---------------- */
  var byId = {};
  T.forEach(function (t, i) { t.index = i; byId[t.id] = t; });

  KI.tenses = {
    list: T,
    get: function (id) { return byId[id] || null; },
    groups: [
      { id: 'past',    tr: 'GEÇMİŞ',  en: 'Past',    hint: 'olmuş bitmiş' },
      { id: 'present', tr: 'ŞİMDİ',   en: 'Present', hint: 'içinde bulunduğumuz an' },
      { id: 'future',  tr: 'GELECEK', en: 'Future',  hint: 'olacak olan' }
    ],
    aspects: [
      { id: 'simple',             tr: 'Basit',             hint: 'İş sadece söylenir: olur, oldu, olacak.' },
      { id: 'continuous',         tr: 'Süren',             hint: 'İş o anda devam eder: -yor.' },
      { id: 'perfect',            tr: 'Tamamlanmış',       hint: 'İş bir ana kadar bitmiştir: -miş.' },
      { id: 'perfect-continuous', tr: 'Tamamlanmış Süren', hint: 'Bir ana kadar süredir devam eder: -dir yapıyor.' }
    ],
    byCell: function (group, aspect) {
      return T.filter(function (t) { return t.group === group && t.aspect === aspect; })[0] || null;
    }
  };
})(window.KI);
