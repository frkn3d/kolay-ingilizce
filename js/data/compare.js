/* ============================================================
   Kolay İngilizce — compare.js
   Birbirine karışan zamanların yan yana karşılaştırılması.
   ============================================================ */
(function (KI) {
  'use strict';

  var C = [];

  C.push({
    id: 'past-simple-present-perfect',
    title: 'Past Simple ↔ Present Perfect',
    short: 'Oldu bitti mi, yoksa etkisi duruyor mu?',
    a: { label: 'Past Simple', tr: 'Geçmiş Zaman (‑di)', tenseId: 'past-simple' },
    b: { label: 'Present Perfect', tr: 'Yakın / Bağlantılı Geçmiş', tenseId: 'present-perfect' },
    intro: 'Türkçede ikisini de "‑di" ile söyleyebildiğimiz için en çok karışan çift budur. Ayırt etmenin yolu tek bir soruya bakmaktır: <b>ne zaman olduğu söyleniyor mu?</b>',
    rules: [
      { when: 'Cümlede kesin zaman var (yesterday, in 1453, two days ago)', a: 'kullanılır', b: 'kullanılmaz' },
      { when: 'Zaman söylenmiyor, sonuç önemli', a: 'kullanılmaz', b: 'kullanılır' },
      { when: 'just, already, yet, ever, never', a: 'kullanılmaz', b: 'kullanılır' },
      { when: 'since / for ile bugüne uzanan süre', a: 'kullanılmaz', b: 'kullanılır' },
      { when: 'Bitmiş bir dönem (last year, when I was a child)', a: 'kullanılır', b: 'kullanılmaz' }
    ],
    pairs: [
      { a: { en: 'I visited Bursa in 2019.', tr: '2019’da Bursa’yı ziyaret ettim.' },
        b: { en: 'I have visited Bursa three times.', tr: 'Bursa’yı üç kez ziyaret ettim.' },
        why: 'Solda tarih var, iş kapanmıştır. Sağda tarih yok; hayat boyu biriken bir deneyimden söz ediliyor.' },
      { a: { en: 'My mother made tarhana last week.', tr: 'Annem geçen hafta tarhana yaptı.' },
        b: { en: 'My mother has just made tarhana.', tr: 'Annem az önce tarhana yaptı.' },
        why: '"last week" bitmiş bir zaman dilimi. "just" ise sonucun hâlâ taze olduğunu söyler.' },
      { a: { en: 'We lived in Konya for ten years.', tr: 'On yıl Konya’da yaşadık.' },
        b: { en: 'We have lived in Konya for ten years.', tr: 'On yıldır Konya’da yaşıyoruz.' },
        why: 'Aynı kelimeler, farklı anlam: solda artık orada oturmuyoruz, sağda hâlâ oturuyoruz.' }
    ],
    quiz: [
      { q: 'I ___ my grandfather yesterday.', options: ['have visited', 'visited', 'have been visiting', 'visit'], answer: 1, why: '"yesterday" kesin geçmiş zamandır.' },
      { q: 'Kapıyı henüz boyamadılar. → They ___ the door yet.', options: ['did not paint', 'have not painted', 'do not paint', 'were not painting'], answer: 1, why: '"yet" Present Perfect ister.' },
      { q: 'Hangi cümle "hâlâ orada yaşıyoruz" anlamındadır?', options: ['We lived in Bursa for five years.', 'We have lived in Bursa for five years.', 'We were living in Bursa.', 'We live in Bursa five years.'], answer: 1, why: 'have lived + for: geçmişte başladı, sürüyor.' }
    ]
  });

  C.push({
    id: 'present-perfect-continuous',
    title: 'Present Perfect ↔ Present Perfect Continuous',
    short: 'Sonuç mu önemli, süre mi?',
    a: { label: 'Present Perfect', tr: 'Yakın / Bağlantılı Geçmiş', tenseId: 'present-perfect' },
    b: { label: 'Present Perfect Continuous', tr: 'Süregelen Yakın Geçmiş', tenseId: 'present-perfect-continuous' },
    intro: 'İkisi de geçmişi bugüne bağlar. Fark şudur: biri <b>işin sonucunu</b>, diğeri <b>ne kadar süredir yapıldığını</b> öne çıkarır.',
    rules: [
      { when: 'Kaç tane, kaç kez yapıldı', a: 'kullanılır', b: 'kullanılmaz' },
      { when: 'Ne kadar süredir yapılıyor', a: 'olabilir', b: 'daha doğal' },
      { when: 'İş bitti, sonucu ortada', a: 'kullanılır', b: 'kullanılmaz' },
      { when: 'İş hâlâ sürüyor', a: 'kullanılmaz', b: 'kullanılır' },
      { when: 'know, love, want gibi fiiller', a: 'kullanılır', b: 'kullanılmaz' }
    ],
    pairs: [
      { a: { en: 'She has woven three carpets.', tr: 'Üç halı dokudu.' },
        b: { en: 'She has been weaving since spring.', tr: 'İlkbahardan beri halı dokuyor.' },
        why: 'Solda sayı var, iş tamamlanmış. Sağda süre var, tezgâh hâlâ başında.' },
      { a: { en: 'I have read the Mesnevi.', tr: 'Mesnevî’yi okudum.' },
        b: { en: 'I have been reading the Mesnevi for a month.', tr: 'Bir aydır Mesnevî okuyorum.' },
        why: 'Solda kitap bitti. Sağda hâlâ okuma sürüyor.' },
      { a: { en: 'It has rained.', tr: 'Yağmur yağmış.' },
        b: { en: 'It has been raining all morning.', tr: 'Bütün sabah yağmur yağıyor.' },
        why: 'Solda ıslak sokağı görürsün; sağda yağmur hâlâ devam ediyor.' }
    ],
    quiz: [
      { q: 'Hasan Usta kırk yıldır ebru yapıyor.', options: ['has made ebru for forty years', 'has been making ebru for forty years', 'makes ebru for forty years', 'made ebru for forty years'], answer: 1, why: 'Süre vurgusu ve devam eden iş.' },
      { q: 'She ___ five glasses of tea today.', options: ['has been drinking', 'has drunk', 'drinks', 'is drinking'], answer: 1, why: 'Sayı verilmiş: tamamlanan iş.' }
    ]
  });

  C.push({
    id: 'will-going-to',
    title: 'will ↔ be going to',
    short: 'Şimdi karar verdim mi, önceden planladım mı?',
    a: { label: 'will', tr: 'anlık karar, söz, tahmin', tenseId: 'future-simple' },
    b: { label: 'be going to', tr: 'önceden yapılmış plan', tenseId: null },
    intro: 'İkisi de geleceği anlatır. Ayırt etmek için şunu sor: <b>bu kararı ne zaman verdim?</b> Konuşurken mi, yoksa daha önceden mi?',
    rules: [
      { when: 'Kararı tam o anda veriyorum', a: 'kullanılır', b: 'kullanılmaz' },
      { when: 'Karar önceden verilmiş, hazırlık var', a: 'kullanılmaz', b: 'kullanılır' },
      { when: 'Söz veriyorum, teklif ediyorum', a: 'kullanılır', b: 'kullanılmaz' },
      { when: 'Ortada işaret var (bulutlar toplandı)', a: 'kullanılmaz', b: 'kullanılır' },
      { when: 'Tahmin (I think, probably)', a: 'kullanılır', b: 'olabilir' }
    ],
    pairs: [
      { a: { en: 'The kettle is empty. I will make tea.', tr: 'Çaydanlık boş. Ben çay yapayım.' },
        b: { en: 'I am going to make tea for the guests.', tr: 'Misafirler için çay yapacağım.' },
        why: 'Solda kararı o anda verdim. Sağda zaten planlıydı.' },
      { a: { en: 'I think it will rain tomorrow.', tr: 'Sanırım yarın yağmur yağacak.' },
        b: { en: 'Look at those clouds. It is going to rain.', tr: 'Şu bulutlara bak. Yağmur yağacak.' },
        why: 'Solda sadece tahmin var; sağda gözle görülür bir işaret var.' },
      { a: { en: 'Do not worry, I will help you.', tr: 'Merak etme, sana yardım edeceğim.' },
        b: { en: 'We are going to pick olives next week.', tr: 'Gelecek hafta zeytin toplayacağız.' },
        why: 'Solda söz veriliyor. Sağda tarih belli bir plan var.' }
    ],
    quiz: [
      { q: 'Kapı çaldı. — Ben açarım. → The door rang. — I ___ it.', options: ['am going to open', 'will open', 'open', 'opened'], answer: 1, why: 'O anda verilen karar: will.' },
      { q: 'Biletleri aldık, cumartesi Fethiye’ye gidiyoruz.', options: ['We will go to Fethiye.', 'We are going to go to Fethiye on Saturday.', 'We go to Fethiye.', 'We went to Fethiye.'], answer: 1, why: 'Hazırlığı yapılmış plan: be going to.' }
    ]
  });

  C.push({
    id: 'past-continuous-past-simple',
    title: 'Past Continuous ↔ Past Simple',
    short: 'Arka plan mı, olayın kendisi mi?',
    a: { label: 'Past Continuous', tr: 'Şimdiki Zamanın Hikâyesi', tenseId: 'past-continuous' },
    b: { label: 'Past Simple', tr: 'Geçmiş Zaman (‑di)', tenseId: 'past-simple' },
    intro: 'Bir hikâyede iki katman vardır: <b>sürmekte olan arka plan</b> ve <b>araya giren olay</b>. Arka plan Past Continuous, olay Past Simple ile anlatılır.',
    rules: [
      { when: 'Uzun süren, arka plandaki iş', a: 'kullanılır', b: 'kullanılmaz' },
      { when: 'Kısa, tek seferlik olay', a: 'kullanılmaz', b: 'kullanılır' },
      { when: 'while ile başlayan cümle', a: 'kullanılır', b: 'kullanılmaz' },
      { when: 'when ile başlayan cümle', a: 'olabilir', b: 'daha sık' },
      { when: 'Sırayla olan işler (önce… sonra…)', a: 'kullanılmaz', b: 'kullanılır' }
    ],
    pairs: [
      { a: { en: 'I was drinking tea when the adhan began.', tr: 'Ezan başladığında çay içiyordum.' },
        b: { en: 'I drank my tea and went out.', tr: 'Çayımı içtim ve dışarı çıktım.' },
        why: 'Solda çay içmek arka plan, ezan araya giriyor. Sağda iki iş sırayla oluyor.' },
      { a: { en: 'While my mother was cooking, I set the table.', tr: 'Annem yemek yaparken sofrayı kurdum.' },
        b: { en: 'My mother cooked and I set the table.', tr: 'Annem yemek yaptı, ben de sofrayı kurdum.' },
        why: '"while" süren işi ister; ikinci cümlede iki bitmiş iş yan yana duruyor.' }
    ],
    quiz: [
      { q: 'Vapur geldiğinde iskelede bekliyorduk. → We ___ at the pier when the ferry ___ .', options: ['waited / arrived', 'were waiting / arrived', 'were waiting / was arriving', 'waited / was arriving'], answer: 1, why: 'Arka plan süren iş, olay Past Simple.' },
      { q: 'Hangisi doğru?', options: ['While I was walking, I was seeing a stork.', 'While I walked, I saw a stork.', 'While I was walking, I saw a stork.', 'While I saw, I was walking.'], answer: 2, why: 'while + süren iş, ardından kısa olay.' }
    ]
  });

  C.push({
    id: 'future-perfect-continuous',
    title: 'Future Perfect ↔ Future Perfect Continuous',
    short: 'Gelecekte bitecek mi, sürüyor mu olacak?',
    a: { label: 'Future Perfect', tr: 'Gelecekte Bitmiş İş', tenseId: 'future-perfect' },
    b: { label: 'Future Perfect Continuous', tr: 'Gelecekte Süregelmiş İş', tenseId: 'future-perfect-continuous' },
    intro: 'İkisi de gelecekte bir ana bakar. Fark: biri o ana kadar <b>bitmiş</b> olacağını, diğeri o ana kadar <b>ne kadar süredir sürdüğünü</b> söyler.',
    rules: [
      { when: 'İş o ana kadar tamamlanır', a: 'kullanılır', b: 'kullanılmaz' },
      { when: 'İş o anda hâlâ sürüyor olur', a: 'kullanılmaz', b: 'kullanılır' },
      { when: 'for + süre vurgusu', a: 'olabilir', b: 'daha doğal' },
      { when: 'by + son tarih', a: 'kullanılır', b: 'kullanılır' }
    ],
    pairs: [
      { a: { en: 'By June, she will have finished the quilt.', tr: 'Hazirana kadar yorganı bitirmiş olacak.' },
        b: { en: 'By June, she will have been sewing for three months.', tr: 'Hazirana kadar üç aydır dikiyor olacak.' },
        why: 'Solda yorgan biter; sağda dikiş hâlâ sürer, sadece süresi söylenir.' },
      { a: { en: 'By noon we will have picked all the olives.', tr: 'Öğlene kadar bütün zeytinleri toplamış olacağız.' },
        b: { en: 'By noon we will have been picking olives for five hours.', tr: 'Öğlene kadar beş saattir zeytin topluyor olacağız.' },
        why: 'Solda iş biter; sağda iş devam ediyordur.' }
    ],
    quiz: [
      { q: 'Gelecek yıl bu okulda yirmi yıldır çalışıyor olacak.', options: ['will have worked', 'will have been working', 'will work', 'has been working'], answer: 1, why: 'Süre + devam: will have been + ‑ing.' },
      { q: 'By Friday the builders ___ the roof.', options: ['will have finished', 'will have been finishing', 'finish', 'will be finished'], answer: 0, why: 'O tarihe kadar tamamlanmış olacak.' }
    ]
  });

  C.push({
    id: 'present-simple-present-continuous',
    title: 'Present Simple ↔ Present Continuous',
    short: 'Her zaman mı oluyor, yoksa tam şu anda mı?',
    a: { label: 'Present Simple', tr: 'Geniş Zaman', tenseId: 'present-simple' },
    b: { label: 'Present Continuous', tr: 'Şimdiki Zaman', tenseId: 'present-continuous' },
    intro: 'Başlangıç seviyesinde en çok karışan çift budur. Ayırt etmenin yolu şudur: <b>bu her zaman mı böyle, yoksa sadece şu anda mı böyle?</b>',
    rules: [
      { when: 'Alışkanlık, tekrar eden iş (always, usually, every day)', a: 'kullanılır', b: 'kullanılmaz' },
      { when: 'Tam şu anda oluyor (now, right now, Look!/Listen!)', a: 'kullanılmaz', b: 'kullanılır' },
      { when: 'Genel, değişmeyen bir gerçek', a: 'kullanılır', b: 'kullanılmaz' },
      { when: 'Geçici bir dönem (these days, this month, this week)', a: 'kullanılmaz', b: 'kullanılır' },
      { when: 'know, like, want, believe gibi durum fiilleri', a: 'kullanılır', b: 'kullanılmaz' }
    ],
    pairs: [
      { a: { en: 'I drink tea every morning.', tr: 'Her sabah çay içerim.' },
        b: { en: 'I am drinking tea right now.', tr: 'Şu anda çay içiyorum.' },
        why: 'Solda alışkanlık; sağda tam bu anda süren iş.' },
      { a: { en: 'My father works at the bank.', tr: 'Babam bankada çalışır.' },
        b: { en: 'My father is working late this week.', tr: 'Babam bu hafta geç saate kadar çalışıyor.' },
        why: 'Solda kalıcı iş; sağda geçici bir durum (this week).' },
      { a: { en: 'It rains a lot in Rize.', tr: 'Rize’de çok yağmur yağar.' },
        b: { en: 'It is raining in Rize right now.', tr: 'Rize’de şu anda yağmur yağıyor.' },
        why: 'Solda genel bir gerçek; sağda şu anki durum.' }
    ],
    quiz: [
      { q: 'Annem her gün çorba pişirir. → My mother ___ soup every day.', options: ['cook', 'cooks', 'is cooking', 'cooked'], answer: 1, why: 'Alışkanlık: geniş zaman.' },
      { q: 'Bak! Kedi masadan atlıyor. → Look! The cat ___ off the table.', options: ['jumps', 'jump', 'is jumping', 'jumped'], answer: 2, why: '"Look!" şu anı gösterir.' },
      { q: 'Hangisi doğru?', options: ['She always drink coffee.', 'She always drinks coffee.', 'She is always drink coffee.', 'She always is drinking coffee.'], answer: 1, why: '"always" ile geniş zaman, he/she/it → -s.' },
      { q: 'Şu sıralar yeni bir dil öğreniyorum. → I ___ a new language these days.', options: ['learn', 'learns', 'am learning', 'learned'], answer: 2, why: '"these days" geçici bir dönem.' },
      { q: 'Su deniz seviyesinde 100 derecede kaynar. → Water ___ at 100 degrees at sea level.', options: ['boil', 'boils', 'is boiling', 'boiled'], answer: 1, why: 'Bilimsel gerçek: geniş zaman.' },
      { q: 'Hangisi yanlış?', options: ['I am knowing the answer.', 'I know the answer.', 'She likes tea.', 'Do you understand?'], answer: 0, why: '"know" bir durum fiilidir, -ing almaz.' },
      { q: 'Şu anda bahçede çalışıyor. → He ___ in the garden right now.', options: ['works', 'work', 'is working', 'worked'], answer: 2, why: '"right now" şu anı gösterir.' },
      { q: 'Otobüs her gün sekizde kalkar. → The bus ___ at eight every day.', options: ['leave', 'leaves', 'is leaving', 'left'], answer: 1, why: 'Sabit tarife: geniş zaman.' },
      { q: 'Hangisi doğru?', options: ['We are usually walking to school.', 'We usually walk to school.', 'We usually are walking to school.', 'We usually walks to school.'], answer: 1, why: '"usually" ile geniş zaman, we → walk.' },
      { q: 'Bu ay İstanbul’da kalıyoruz (geçici). → We ___ in Istanbul this month.', options: ['stay', 'stays', 'are staying', 'stayed'], answer: 2, why: '"this month" geçici bir durum.' }
    ]
  });

  KI.compare = {
    list: C,
    get: function (id) { return C.filter(function (c) { return c.id === id; })[0] || null; },
    forTense: function (tenseId) {
      return C.filter(function (c) {
        return (c.a.tenseId === tenseId) || (c.b.tenseId === tenseId);
      });
    }
  };
})(window.KI);
