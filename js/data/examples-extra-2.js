/* ============================================================
   Gramer Atlası — examples-extra-2.js
   Sıradan insanların günlük yaşamından ikinci örnek dalgası:
   iş, ev, komşuluk, çarşı, aile, sokak hayatı.
   tenses.js yüklendikten sonra her zamanın examples dizisine eklenir.
   ============================================================ */
(function (KI) {
  'use strict';

  var MORE = {};

  MORE['present-simple'] = [
    { en: 'My father reads the newspaper every morning with his tea.', tr: 'Babam her sabah çayıyla birlikte gazete okur.', key: ['reads'], note: 'Günlük alışkanlık: every morning.' },
    { en: 'The bus stops in front of our building at seven.', tr: 'Otobüs saat yedide binamızın önünde durur.', key: ['stops'], note: 'Sabit bir program, tarife.' },
    { en: 'Our neighbour waters her flowers on the balcony every day.', tr: 'Komşumuz her gün balkondaki çiçeklerini sular.', key: ['waters'], note: 'she → waters (3. tekil -s).' },
    { en: 'The corner shop opens at eight and closes at ten.', tr: 'Bakkal saat sekizde açılır, onda kapanır.', key: ['opens', 'closes'], note: 'Değişmeyen çalışma saatleri.' },
    { en: 'My grandmother knits a sweater every winter.', tr: 'Babaannem her kış bir kazak örer.', key: ['knits'], note: 'Tekrarlanan mevsimsel alışkanlık.' }
  ];

  MORE['present-continuous'] = [
    { en: 'The children are doing their homework at the kitchen table.', tr: 'Çocuklar mutfak masasında ödevlerini yapıyor.', key: ['are', 'doing'], note: 'Şu anda süren bir iş.' },
    { en: 'My mother is ironing the shirts in the living room.', tr: 'Annem oturma odasında gömlekleri ütülüyor.', key: ['is', 'ironing'], note: 'Tam şu anda olan iş.' },
    { en: 'Look! The plumber is fixing the leaking tap.', tr: 'Bak! Muslukçu akan musluğu tamir ediyor.', key: ['is', 'fixing'], note: '"Look!" anı gösterir.' },
    { en: 'We are waiting for the minibus at the corner.', tr: 'Köşede minibüsü bekliyoruz.', key: ['are', 'waiting'], note: 'Şu anda devam eden bekleyiş.' },
    { en: 'The whole street is losing electricity again tonight.', tr: 'Bütün sokak bu gece yine elektriksiz kalıyor.', key: ['is', 'losing'], note: 'Şu günlerde yaşanan geçici durum.' }
  ];

  MORE['present-perfect'] = [
    { en: 'I have already fed the street cats this morning.', tr: 'Sokak kedilerini bu sabah çoktan besledim.', key: ['have', 'already', 'fed'], note: 'Sonuç önemli: kediler artık doymuş.' },
    { en: 'My uncle has just called to ask about the football match.', tr: 'Amcam maçı sormak için az önce aradı.', key: ['has', 'just', 'called'], note: '"just" ile çok yakın geçmiş.' },
    { en: 'She has never borrowed sugar from the neighbours before.', tr: 'Daha önce hiç komşulardan şeker ödünç almamıştı… almamıştır.', key: ['has', 'never', 'borrowed'], note: 'Hayat boyu deneyim: never.' },
    { en: 'The teacher has finished grading all the papers.', tr: 'Öğretmen bütün kâğıtları okumayı bitirdi.', key: ['has', 'finished'], note: 'Sonuç ortada: kâğıtlar hazır.' },
    { en: 'We have taken out the rubbish already.', tr: 'Çöpü çoktan çıkardık.', key: ['have', 'taken'], note: 'take → taken (3. hâl).' }
  ];

  MORE['present-perfect-continuous'] = [
    { en: 'The barber has been cutting hair since early morning.', tr: 'Berber sabahın erken saatlerinden beri saç kesiyor.', key: ['has', 'been', 'cutting', 'since'], note: 'Sabahtan beri sürüyor.' },
    { en: 'My father has been reading the same newspaper for an hour.', tr: 'Babam aynı gazeteyi bir saattir okuyor.', key: ['has', 'been', 'reading', 'for'], note: 'Süre: for an hour.' },
    { en: 'The children have been playing football in the street all afternoon.', tr: 'Çocuklar bütün öğleden sonra sokakta futbol oynuyor.', key: ['have', 'been', 'playing'], note: 'Kesintisiz süren aktivite.' },
    { en: 'We have been waiting in traffic for forty minutes.', tr: 'Kırk dakikadır trafikte bekliyoruz.', key: ['have', 'been', 'waiting'], note: 'Şu ana kadar süren sıkıntı.' }
  ];

  MORE['past-simple'] = [
    { en: 'My grandfather worked as a bus driver for thirty years.', tr: 'Dedem otuz yıl otobüs şoförü olarak çalıştı.', key: ['worked'], note: 'Bitmiş bir dönem: for thirty years.' },
    { en: 'We visited my sick aunt at the hospital last night.', tr: 'Dün gece hasta teyzemi hastanede ziyaret ettik.', key: ['visited'], note: 'Belirli bir geçmiş zaman: last night.' },
    { en: 'The teacher gave us a lot of homework yesterday.', tr: 'Öğretmen dün bize çok ödev verdi.', key: ['gave'], note: 'give → gave.' },
    { en: 'I forgot my umbrella on the bus this morning.', tr: 'Bu sabah şemsiyemi otobüste unuttum.', key: ['forgot'], note: 'forget → forgot.' },
    { en: 'My mother made a shopping list before we went to the market.', tr: 'Annem pazara gitmeden önce bir alışveriş listesi yaptı.', key: ['made', 'went'], note: 'İki geçmiş olay, art arda anlatılır.' }
  ];

  MORE['past-continuous'] = [
    { en: 'I was doing the laundry when the phone rang.', tr: 'Telefon çaldığında çamaşır yıkıyordum.', key: ['was', 'doing', 'rang'], note: 'Uzun iş: yıkıyordum. Kısa iş: çaldı.' },
    { en: 'The children were watching cartoons while their mother was cooking dinner.', tr: 'Anneleri akşam yemeği pişirirken çocuklar çizgi film izliyordu.', key: ['were', 'watching', 'was', 'cooking'], note: 'İki iş aynı anda sürüyordu.' },
    { en: 'We were sitting on the balcony when the electricity went out.', tr: 'Elektrik kesildiğinde biz balkonda oturuyorduk.', key: ['were', 'sitting', 'went'], note: 'Süren iş + araya giren kısa olay.' },
    { en: 'My father was reading the newspaper when I came home.', tr: 'Ben eve geldiğimde babam gazete okuyordu.', key: ['was', 'reading', 'came'], note: 'Klasik "araya giren iş" kalıbı.' }
  ];

  MORE['past-perfect'] = [
    { en: 'The bus had already left when we reached the stop.', tr: 'Biz durağa vardığımızda otobüs çoktan gitmişti.', key: ['had', 'already', 'left'], note: 'İki geçmiş işten önce olanı: had + V3.' },
    { en: 'My mother had cooked dinner before my father came home.', tr: 'Babam eve gelmeden önce annem yemeği pişirmişti.', key: ['had', 'cooked', 'before'], note: 'Önce yemek pişti, sonra baba geldi.' },
    { en: 'The children had finished their homework before the football match started.', tr: 'Maç başlamadan önce çocuklar ödevlerini bitirmişti.', key: ['had', 'finished', 'before'], note: '"before" iki geçmiş olayın sırasını gösterir.' },
    { en: 'I realized I had forgotten my keys at the office.', tr: 'Anahtarlarımı ofiste unuttuğumu fark ettim.', key: ['had', 'forgotten', 'realized'], note: 'Fark etmeden önce olan iş: had forgotten.' }
  ];

  MORE['past-perfect-continuous'] = [
    { en: 'My grandfather had been working in that shop for forty years before he retired.', tr: 'Dedem emekli olmadan önce o dükkânda kırk yıldır çalışıyordu.', key: ['had', 'been', 'working', 'before'], note: 'Emekli olana kadar süren iş.' },
    { en: 'The children had been playing outside for hours before it started to rain.', tr: 'Yağmur başlamadan önce çocuklar saatlerdir dışarıda oynuyordu.', key: ['had', 'been', 'playing'], note: 'Yağmurdan önceki süreç.' },
    { en: 'She had been waiting for the doctor for two hours when her name was called.', tr: 'Adı çağrıldığında doktoru iki saattir bekliyordu.', key: ['had', 'been', 'waiting'], note: 'Çağrılana kadar süren bekleyiş.' }
  ];

  MORE['future-simple'] = [
    { en: 'I will call my grandmother tonight.', tr: 'Bu gece babaanneme telefon edeceğim.', key: ['will', 'call'], note: 'Anlık karar / söz.' },
    { en: 'The plumber will come tomorrow morning to fix the tap.', tr: 'Muslukçu yarın sabah musluğu tamir etmeye gelecek.', key: ['will', 'come'], note: 'Gelecekle ilgili basit bir tahmin/plan.' },
    { en: 'Don’t worry, I will help you carry the bags.', tr: 'Merak etme, çantaları taşımana yardım edeceğim.', key: ['will', 'help'], note: 'Yerinde verilen bir söz.' },
    { en: 'The shop will be closed on Sunday.', tr: 'Dükkân pazar günü kapalı olacak.', key: ['will', 'be'], note: 'Gelecekle ilgili basit bilgi.' }
  ];

  MORE['future-continuous'] = [
    { en: 'This time tomorrow, my father will be driving to the village.', tr: 'Yarın bu saatte babam köye doğru araba sürüyor olacak.', key: ['will', 'be', 'driving'], note: '"this time tomorrow" gelecekte süren bir anı gösterir.' },
    { en: 'At six o’clock, the children will be doing their homework.', tr: 'Saat altıda çocuklar ödevlerini yapıyor olacak.', key: ['will', 'be', 'doing'], note: 'Belirli bir gelecek anında süren iş.' },
    { en: 'We will be having dinner when you arrive.', tr: 'Sen vardığında biz yemek yiyor olacağız.', key: ['will', 'be', 'having'], note: 'Varış anında süren iş.' }
  ];

  MORE['future-perfect'] = [
    { en: 'By the time you arrive, I will have cleaned the whole house.', tr: 'Sen vardığında ben bütün evi temizlemiş olacağım.', key: ['will', 'have', 'cleaned'], note: 'Varıştan önce tamamlanmış olacak.' },
    { en: 'My grandfather will have retired by next summer.', tr: 'Dedem gelecek yaza kadar emekli olmuş olacak.', key: ['will', 'have', 'retired'], note: 'Belirli bir gelecek tarihe kadar bitmiş iş.' },
    { en: 'They will have finished building the mosque by the end of the year.', tr: 'Yıl sonuna kadar camiyi bitirmiş olacaklar.', key: ['will', 'have', 'finished'], note: '"by the end of the year" = son tarih.' }
  ];

  MORE['future-perfect-continuous'] = [
    { en: 'By next month, my father will have been working at that shop for twenty years.', tr: 'Gelecek aya kadar babam o dükkânda yirmi yıldır çalışıyor olacak.', key: ['will', 'have', 'been', 'working'], note: 'Süregelen iş belirli bir geleceğe kadar devam ediyor.' },
    { en: 'By the time she graduates, she will have been studying English for eight years.', tr: 'Mezun olana kadar sekiz yıldır İngilizce çalışıyor olacak.', key: ['will', 'have', 'been', 'studying'], note: '"for eight years" ile süre vurgulanır.' }
  ];

  /* ---- yukarıdaki cümlelerde geçen, sözlükte eksik kalan kelimeler ---- */
  KI.glossary.addWords([
  'leaking|sızdıran, akan|sıfat', 'electricity|elektrik|isim', 'lot|çok, bir sürü|isim',
  'list|liste|isim', 'cartoon|çizgi film|isim', 'outside|dışarı, dışarıda|zarf',
  'carry|taşımak|fiil', 'bag|çanta, torba|isim',
  'there|orada, oraya|zarf|there is/are: var', 'use|kullanmak|fiil',
  'fifty|elli|sayı', 'sixty|altmış|sayı', 'seventy|yetmiş|sayı',
  'eighty|seksen|sayı', 'ninety|doksan|sayı'
  ]);

  /* ---- her zamanın examples dizisine ekle ---- */
  if (KI.tenses && KI.tenses.list) {
    KI.tenses.list.forEach(function (t) {
      if (MORE[t.id]) t.examples = (t.examples || []).concat(MORE[t.id]);
    });
  }
})(window.KI);
