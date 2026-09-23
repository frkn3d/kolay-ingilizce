/* ============================================================
   Kolay İngilizce — examples-extra-7.js
   Yedinci ve tamamlayıcı örnek dalgası: müzik, sağlık, mutfak,
   iş hayatı. tenses.js yüklendikten sonra examples dizisine
   eklenir. Bu dalgayla örnek havuzu ~7 katına tamamlanır.
   ============================================================ */
(function (KI) {
  'use strict';

  var MORE = {};

  MORE['present-simple'] = [
    { en: 'My grandfather takes his medicine after every meal.', tr: 'Dedem her yemekten sonra ilacını alır.', key: ['takes'], note: 'Düzenli tekrarlanan bir alışkanlık.' },
    { en: 'The cook adds a little cinnamon to the rice.', tr: 'Aşçı pilava biraz tarçın ekler.', key: ['adds'], note: 'Genel, mesleki bir gerçek.' },
    { en: 'My mother visits the doctor twice a year.', tr: 'Annem yılda iki kez doktora gider.', key: ['visits'], note: 'Düzenli tekrar sıklığı.' },
    { en: 'The orchestra practises in the town hall every Tuesday.', tr: 'Orkestra her salı belediye salonunda çalışır.', key: ['practises'], note: 'Sabit haftalık düzen.' },
    { en: 'My boss checks his email before breakfast.', tr: 'Patronum kahvaltıdan önce e-postasını kontrol eder.', key: ['checks'], note: 'Günlük tekrarlanan alışkanlık.' },
    { en: 'Doctors recommend eight hours of sleep.', tr: 'Doktorlar sekiz saat uyku önerir.', key: ['recommend'], note: 'Genel, bilinen bir tavsiye.' }
  ];

  MORE['present-continuous'] = [
    { en: 'The cook is adding salt to the soup right now.', tr: 'Aşçı çorbaya şu anda tuz ekliyor.', key: ['is', 'adding'], note: '"right now" tam şu anı gösterir.' },
    { en: 'My colleagues are preparing the report for tomorrow.', tr: 'İş arkadaşlarım yarınki raporu hazırlıyor.', key: ['are', 'preparing'], note: 'Şu günlerde süren bir görev.' },
    { en: 'The nurse is taking my grandmother’s temperature.', tr: 'Hemşire büyükannemin ateşini ölçüyor.', key: ['is', 'taking'], note: 'Şu anda süren bir işlem.' },
    { en: 'We are listening to a new song on the radio.', tr: 'Radyoda yeni bir şarkı dinliyoruz.', key: ['are', 'listening'], note: 'Şu anda süren bir eylem.' },
    { en: 'My father is meeting his boss this afternoon.', tr: 'Babam bu öğleden sonra patronuyla görüşüyor.', key: ['is', 'meeting'], note: 'Bugüne özgü, planlanmış bir buluşma.' },
    { en: 'The musicians are tuning their instruments before the concert.', tr: 'Müzisyenler konserden önce enstrümanlarını akort ediyor.', key: ['are', 'tuning'], note: 'Şu anda süren bir hazırlık.' }
  ];

  MORE['present-perfect'] = [
    { en: 'The doctor has already examined my grandfather.', tr: 'Doktor dedemi çoktan muayene etti.', key: ['has', 'already', 'examined'], note: '"already" ile bitmiş iş.' },
    { en: 'We have finished the report ahead of time.', tr: 'Raporu vaktinden önce bitirdik.', key: ['have', 'finished'], note: 'Sonuç şu an ortada.' },
    { en: 'My mother has never missed a doctor’s appointment.', tr: 'Annem hiç doktor randevusunu kaçırmadı.', key: ['has', 'never', 'missed'], note: 'Hayat boyu bir alışkanlık.' },
    { en: 'The band has just finished their rehearsal.', tr: 'Grup provasını az önce bitirdi.', key: ['has', 'just', 'finished'], note: '"just" ile çok yakın geçmiş.' },
    { en: 'I have taken all my medicine for today.', tr: 'Bugünlük bütün ilaçlarımı aldım.', key: ['have', 'taken'], note: 'take → taken.' },
    { en: 'Have you spoken to the manager about the schedule yet?', tr: 'Program hakkında müdürle konuştun mu?', key: ['have', 'spoken', 'yet'], note: 'speak → spoken.' }
  ];

  MORE['present-perfect-continuous'] = [
    { en: 'The cook has been chopping vegetables since six.', tr: 'Aşçı altıdan beri sebze doğruyor.', key: ['has', 'been', 'chopping', 'since'], note: 'Başlangıç noktası: since six.' },
    { en: 'We have been working on this project for two weeks.', tr: 'İki haftadır bu proje üzerinde çalışıyoruz.', key: ['have', 'been', 'working', 'for'], note: 'Süre: for two weeks.' },
    { en: 'My grandmother has been taking this medicine for a month.', tr: 'Büyükannem bir aydır bu ilacı alıyor.', key: ['has', 'been', 'taking'], note: 'Bir aydır süren tedavi.' },
    { en: 'The orchestra has been rehearsing for the concert since Monday.', tr: 'Orkestra pazartesiden beri konser için prova yapıyor.', key: ['has', 'been', 'rehearsing', 'since'], note: 'Pazartesiden şimdiye süren hazırlık.' },
    { en: 'How long have you been working at this company?', tr: 'Bu şirkette ne zamandır çalışıyorsun?', key: ['have', 'been', 'working'], note: '"How long" süre sorar.' }
  ];

  MORE['past-simple'] = [
    { en: 'The doctor examined my grandfather carefully.', tr: 'Doktor dedemi dikkatlice muayene etti.', key: ['examined'], note: 'Bitmiş, belirli bir geçmiş olay.' },
    { en: 'We finished the report two days early.', tr: 'Raporu iki gün erken bitirdik.', key: ['finished'], note: 'Bitmiş bir geçmiş iş.' },
    { en: 'The cook added too much salt to the soup yesterday.', tr: 'Aşçı dün çorbaya çok fazla tuz ekledi.', key: ['added'], note: 'Belirli geçmiş zaman: yesterday.' },
    { en: 'My boss called a meeting last Monday.', tr: 'Patronum geçen pazartesi bir toplantı çağırdı.', key: ['called'], note: 'Belirli geçmiş zaman.' },
    { en: 'The band played three new songs at the concert.', tr: 'Grup konserde üç yeni şarkı çaldı.', key: ['played'], note: 'Bitmiş bir geçmiş olay.' },
    { en: 'I took my medicine right after lunch.', tr: 'İlacımı öğle yemeğinden hemen sonra aldım.', key: ['took'], note: 'take → took.' }
  ];

  MORE['past-continuous'] = [
    { en: 'The doctor was examining my grandfather when the phone rang.', tr: 'Telefon çaldığında doktor dedemi muayene ediyordu.', key: ['was', 'examining', 'rang'], note: 'Süren iş + kısa olay.' },
    { en: 'We were working on the report when the power went out.', tr: 'Elektrik gittiğinde rapor üzerinde çalışıyorduk.', key: ['were', 'working', 'went'], note: 'Süren iş + ani kesinti.' },
    { en: 'The band was rehearsing when the manager arrived.', tr: 'Müdür geldiğinde grup prova yapıyordu.', key: ['was', 'rehearsing', 'arrived'], note: 'Süren iş + kısa olay.' },
    { en: 'I was cooking dinner while my sister was setting the table.', tr: 'Kız kardeşim sofrayı kurarken ben akşam yemeğini pişiriyordum.', key: ['was', 'cooking', 'was', 'setting'], note: 'İki eş zamanlı geçmiş iş.' },
    { en: 'My father was talking to his boss when I walked in.', tr: 'Ben içeri girdiğimde babam patronuyla konuşuyordu.', key: ['was', 'talking', 'walked'], note: 'Süren iş + kısa olay.' }
  ];

  MORE['past-perfect'] = [
    { en: 'By the time the doctor arrived, the fever had already gone down.', tr: 'Doktor geldiğinde ateş çoktan düşmüştü.', key: ['had', 'already', 'gone'], note: 'Varıştan önce olan değişim.' },
    { en: 'We had finished the report before the deadline.', tr: 'Son teslim tarihinden önce raporu bitirmiştik.', key: ['had', 'finished', 'before'], note: 'Son tarihten önce biten iş.' },
    { en: 'The band had already left when the manager called.', tr: 'Müdür aradığında grup çoktan gitmişti.', key: ['had', 'already', 'left'], note: 'leave → left.' },
    { en: 'I had never tried Turkish coffee before that trip.', tr: 'O geziye kadar hiç Türk kahvesi denememiştim.', key: ['had', 'never', 'tried'], note: 'Geziye kadarki deneyimsizlik.' },
    { en: 'My mother had already taken her medicine before dinner.', tr: 'Annem akşam yemeğinden önce ilacını çoktan almıştı.', key: ['had', 'already', 'taken'], note: 'Yemekten önce biten iş.' }
  ];

  MORE['past-perfect-continuous'] = [
    { en: 'The cook had been chopping vegetables for an hour before the guests arrived.', tr: 'Misafirler gelmeden önce aşçı bir saattir sebze doğruyordu.', key: ['had', 'been', 'chopping'], note: 'Varıştan önceki süreç.' },
    { en: 'We had been working on the project for weeks before it was approved.', tr: 'Onaylanmadan önce projede haftalardır çalışıyorduk.', key: ['had', 'been', 'working'], note: 'Onaydan önceki süreç.' },
    { en: 'The orchestra had been rehearsing for months before the concert finally began.', tr: 'Konser nihayet başlamadan önce orkestra aylardır prova yapıyordu.', key: ['had', 'been', 'rehearsing'], note: 'Başlamadan önceki uzun süreç.' },
    { en: 'She had been feeling ill for days before she saw the doctor.', tr: 'Doktora gitmeden önce günlerdir kendini hasta hissediyordu.', key: ['had', 'been', 'feeling'], note: 'Doktordan önceki süreç.' }
  ];

  MORE['future-simple'] = [
    { en: 'The doctor will examine you shortly.', tr: 'Doktor sizi kısa süre içinde muayene edecek.', key: ['will', 'examine'], note: 'Gelecekle ilgili basit bir bilgi.' },
    { en: 'I will finish the report by tonight.', tr: 'Raporu bu geceye kadar bitireceğim.', key: ['will', 'finish'], note: 'Anlık verilen bir söz.' },
    { en: 'The band will play at the festival next month.', tr: 'Grup gelecek ay festivalde çalacak.', key: ['will', 'play'], note: 'Belirli bir gelecek plan.' },
    { en: 'My boss will call a meeting tomorrow morning.', tr: 'Patronum yarın sabah bir toplantı çağıracak.', key: ['will', 'call'], note: 'Gelecekteki basit bir olay.' },
    { en: 'I think this medicine will help you feel better.', tr: 'Sanırım bu ilaç kendini daha iyi hissetmene yardım edecek.', key: ['will', 'help'], note: 'I think + will: kişisel tahmin.' }
  ];

  MORE['future-continuous'] = [
    { en: 'At ten o’clock, the doctor will be examining patients.', tr: 'Saat onda doktor hastaları muayene ediyor olacak.', key: ['will', 'be', 'examining'], note: 'Belirli saatte süren gelecek iş.' },
    { en: 'This time tomorrow, we will be working on the new project.', tr: 'Yarın bu saatte yeni proje üzerinde çalışıyor olacağız.', key: ['will', 'be', 'working'], note: 'Belirli bir gelecek anda süren iş.' },
    { en: 'Next Friday, the band will be performing at the festival.', tr: 'Gelecek cuma grup festivalde sahne alıyor olacak.', key: ['will', 'be', 'performing'], note: 'Gelecekteki bir dönem boyunca sürer.' },
    { en: 'At noon, my father will be meeting his new boss.', tr: 'Öğlen babam yeni patronuyla görüşüyor olacak.', key: ['will', 'be', 'meeting'], note: 'Belirli saatte süren gelecek iş.' }
  ];

  MORE['future-perfect'] = [
    { en: 'By tonight, the doctor will have examined every patient.', tr: 'Bu geceye kadar doktor her hastayı muayene etmiş olacak.', key: ['will', 'have', 'examined'], note: 'Belirli bir ana kadar tamamlanacak.' },
    { en: 'By Friday, we will have finished the whole report.', tr: 'Cumaya kadar bütün raporu bitirmiş olacağız.', key: ['will', 'have', 'finished'], note: 'Belirli bir tarihe kadar tamamlanacak.' },
    { en: 'By the time the concert starts, the band will have tuned every instrument.', tr: 'Konser başladığında grup her enstrümanı akort etmiş olacak.', key: ['will', 'have', 'tuned'], note: 'Başlangıçtan önce tamamlanacak.' },
    { en: 'By next week, my mother will have finished her treatment.', tr: 'Gelecek haftaya kadar annem tedavisini bitirmiş olacak.', key: ['will', 'have', 'finished'], note: 'Belirli bir tarihe kadar tamamlanacak.' }
  ];

  MORE['future-perfect-continuous'] = [
    { en: 'By the time the concert ends, the band will have been playing for three hours.', tr: 'Konser bittiğinde grup üç saattir çalıyor olacak.', key: ['will', 'have', 'been', 'playing'], note: 'Bitiş anına kadar biriken süre.' },
    { en: 'By next year, my father will have been working at that company for fifteen years.', tr: 'Gelecek yıla kadar babam o şirkette on beş yıldır çalışıyor olacak.', key: ['will', 'have', 'been', 'working'], note: 'On beş yıllık sürenin gelecekte tamamlanması.' },
    { en: 'By the time she recovers, she will have been taking this medicine for a month.', tr: 'İyileştiğinde bu ilacı bir aydır alıyor olacak.', key: ['will', 'have', 'been', 'taking'], note: 'İyileşme anına kadar biriken süre.' }
  ];

  /* ---- yukarıdaki cümlelerde geçen, sözlükte muhtemelen eksik kalan
     kelimeler; node tests/validate-content.js çıktısına göre güncellenir ---- */
  KI.glossary.addWords([
  'cinnamon|tarçın|isim', 'tune|akort etmek|fiil', 'rehearsal|prova|isim',
  'rehearse|prova yapmak|fiil', 'power|elektrik, güç|isim', 'approve|onaylamak|fiil',
  'shortly|kısa süre içinde|zarf', 'better|daha iyi|sıfat'
  ]);

  /* ---- her zamanın examples dizisine ekle ---- */
  if (KI.tenses && KI.tenses.list) {
    KI.tenses.list.forEach(function (t) {
      if (MORE[t.id]) t.examples = (t.examples || []).concat(MORE[t.id]);
    });
  }
})(window.KI);
