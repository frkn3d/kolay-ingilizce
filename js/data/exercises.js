/* ============================================================
   Gramer Atlası — exercises.js
   Zamanlara ait ek alıştırma soruları. tenses.js yüklendikten
   sonra çalışır ve her zamanın quiz dizisini genişletir.
   Biçim: { q, options, answer (0'dan başlar), why }
   ============================================================ */
(function (KI) {
  'use strict';

  var EXTRA = {};

  EXTRA['present-simple'] = [
    { q: 'The muezzin ___ the adhan five times a day.', options: ['call', 'calls', 'is calling', 'called'], answer: 1, why: 'Her gün tekrarlanan düzen; özne "the muezzin" = he → calls.' },
    { q: 'Babaannem asla kahve içmez. → My grandmother ___ coffee.', options: ['never drinks', 'never drink', 'is never drinking', 'never drank'], answer: 0, why: '"never" geniş zamanla kullanılır ve fiile -s eklenir.' },
    { q: 'Hangisi yanlış?', options: ['Water boils at 100 degrees.', 'He watch television every night.', 'They live in Konya.', 'She teaches English.'], answer: 1, why: 'he ile "watches" olmalı.' },
    { q: 'Kapalıçarşı pazar günleri kapalıdır. → The Grand Bazaar ___ on Sundays.', options: ['is closing', 'closes', 'closed', 'will close'], answer: 1, why: 'Değişmeyen düzen: Present Simple.' }
  ];

  EXTRA['present-continuous'] = [
    { q: 'Listen! My father ___ the Qur\u2019an.', options: ['reads', 'read', 'is reading', 'has read'], answer: 2, why: '"Listen!" şu anı gösterir.' },
    { q: 'Şu anda sofrayı kuruyoruz. → We ___ the table now.', options: ['set', 'are setting', 'were setting', 'have set'], answer: 1, why: 'Şu anda süren iş: are + setting.' },
    { q: 'Hangisi yanlış?', options: ['She is wanting a new carpet.', 'She is weaving a carpet.', 'They are waiting outside.', 'I am drinking tea.'], answer: 0, why: 'want fiili -ing almaz: She wants a new carpet.' },
    { q: 'The children ___ in the courtyard at the moment.', options: ['play', 'plays', 'are playing', 'played'], answer: 2, why: '"at the moment" = şu an; çoğul özne → are.' }
  ];

  EXTRA['present-perfect'] = [
    { q: 'Ustalar çiniyi henüz bitirmedi. → The masters ___ the tiles yet.', options: ['did not finish', 'have not finished', 'do not finish', 'were not finishing'], answer: 1, why: '"yet" Present Perfect ile kullanılır.' },
    { q: 'I ___ Edirne twice in my life.', options: ['visited', 'have visited', 'am visiting', 'had visited'], answer: 1, why: 'Hayat boyu deneyim; zamanı belirtilmiyor.' },
    { q: 'Hangisi doğru?', options: ['He has broke the cup.', 'He has broken the cup.', 'He have broken the cup.', 'He has break the cup.'], answer: 1, why: 'has + V3: break → broken.' },
    { q: 'Boya kokusu var, annem duvarı ___ .', options: ['paints', 'has just painted', 'painted yesterday', 'is painting tomorrow'], answer: 1, why: 'Sonucu şimdi duyuyoruz: has just painted.' }
  ];

  EXTRA['present-perfect-continuous'] = [
    { q: 'Ne zamandır ebru yapıyorsun? → How long ___ ebru?', options: ['do you make', 'are you making', 'have you been making', 'did you make'], answer: 2, why: '"How long" + süregelen iş.' },
    { q: 'She ___ in the kitchen since the morning prayer.', options: ['works', 'has been working', 'is working', 'worked'], answer: 1, why: 'since ile geçmişten şimdiye süren iş.' },
    { q: 'Hangisi yanlış?', options: ['I have been waiting for an hour.', 'It has been raining all day.', 'He has been knowing her for years.', 'They have been building the mosque since 2019.'], answer: 2, why: 'know fiili -ing almaz: He has known her for years.' },
    { q: 'Yorgunum, üç saattir halı dokuyorum. → I am tired; I ___ a carpet for three hours.', options: ['weave', 'have woven', 'have been weaving', 'wove'], answer: 2, why: 'Süre vurgusu ve yorgunluğun sebebi: have been + -ing.' }
  ];

  EXTRA['past-simple'] = [
    { q: 'Evliya Çelebi ___ all over the empire in the 17th century.', options: ['travels', 'travelled', 'has travelled', 'was travelling'], answer: 1, why: 'Bitmiş, tarihi belli geçmiş.' },
    { q: 'Dün akşam çorba içmedik. → We ___ soup last night.', options: ['did not drink', 'have not drunk', 'did not drank', 'not drank'], answer: 0, why: 'did not + yalın fiil.' },
    { q: '___ your grandfather build this house?', options: ['Does', 'Did', 'Has', 'Was'], answer: 1, why: 'Geçmiş zaman sorusu: Did + özne + V1.' },
    { q: 'Hangisi yanlış?', options: ['She went to the market.', 'They ate at noon.', 'He builded a wall.', 'I saw the ferry.'], answer: 2, why: 'build düzensizdir: built.' }
  ];

  EXTRA['past-continuous'] = [
    { q: 'Ezan okunurken bahçedeydim. → I was in the garden while the muezzin ___ .', options: ['called', 'was calling', 'has called', 'calls'], answer: 1, why: '"while" ile süren iş: was calling.' },
    { q: 'What ___ you ___ at eight o\u2019clock last night?', options: ['did / do', 'were / doing', 'have / done', 'are / doing'], answer: 1, why: 'Geçmişte belli bir anda süren iş.' },
    { q: 'Hangisi yanlış?', options: ['We were eating when he arrived.', 'She was cooking all morning.', 'They was waiting outside.', 'I was reading the Mesnevi.'], answer: 2, why: 'they → were.' },
    { q: 'Yağmur yağarken iskelede bekliyorduk. → We ___ at the pier while it ___ .', options: ['waited / rained', 'were waiting / was raining', 'wait / rains', 'have waited / rained'], answer: 1, why: 'Aynı anda süren iki iş.' }
  ];

  EXTRA['past-perfect'] = [
    { q: 'Ben gelmeden önce çayı demlemişti. → She ___ the tea before I arrived.', options: ['brewed', 'has brewed', 'had brewed', 'was brewing'], answer: 2, why: 'Varıştan önce biten iş: had + V3.' },
    { q: 'By the time the guests came, my mother ___ the table.', options: ['set', 'had set', 'has set', 'was setting'], answer: 1, why: '"By the time" geçmişin geçmişini ister.' },
    { q: 'Hangisi doğru?', options: ['He had ate before we came.', 'He had eaten before we came.', 'He had eat before we came.', 'He has eaten before we came.'], answer: 1, why: 'had + V3: eat → eaten.' },
    { q: 'Daha önce hiç deve görmemiştim. → I ___ a camel before.', options: ['never saw', 'have never seen', 'had never seen', 'never see'], answer: 2, why: 'Geçmişteki bir ana kadar olan deneyim.' }
  ];

  EXTRA['past-perfect-continuous'] = [
    { q: 'Usta, çırağı gelmeden önce iki saattir mermer oyuyordu.', options: ['had been carving', 'was carving', 'has been carving', 'carved'], answer: 0, why: 'Geçmişteki bir ana kadar süren iş + süre.' },
    { q: 'They ___ for the ferry for an hour when it finally arrived.', options: ['waited', 'were waiting', 'had been waiting', 'have been waiting'], answer: 2, why: 'Vapur geldiği ana kadar süren bekleme.' },
    { q: 'Hangisi yanlış?', options: ['She had been studying for hours.', 'We had been walking since noon.', 'He had been been sleeping.', 'They had been working all day.'], answer: 2, why: '"been" bir kez kullanılır.' },
    { q: 'Taşınmadan önce on yıldır Konya\u2019da yaşıyordu.', options: ['He lived in Konya for ten years before he moved.', 'He had been living in Konya for ten years before he moved.', 'He has lived in Konya for ten years.', 'He was living in Konya ten years.'], answer: 1, why: 'Taşınma anına kadar süren durum + süre.' }
  ];

  EXTRA['future-simple'] = [
    { q: 'Çanta ağır, ben taşırım. → The bag is heavy. I ___ it.', options: ['carry', 'will carry', 'am carrying', 'am going to carry'], answer: 1, why: 'O anda verilen karar: will.' },
    { q: 'Sanırım yarın kar yağacak. → I think it ___ tomorrow.', options: ['snows', 'is snowing', 'will snow', 'snowed'], answer: 2, why: 'Tahmin: I think + will.' },
    { q: 'Hangisi yanlış?', options: ['She will come tonight.', 'They will not forget.', 'He will helps us.', 'Will you call me?'], answer: 2, why: 'will + yalın fiil: will help.' },
    { q: 'Söz veriyorum, geleneklerimizi yaşatacağız.', options: ['We keep our traditions alive.', 'We will keep our traditions alive.', 'We are keeping our traditions alive.', 'We kept our traditions alive.'], answer: 1, why: 'Söz vermek: will.' }
  ];

  EXTRA['future-continuous'] = [
    { q: 'Yarın bu saatte iftar sofrasını hazırlıyor olacağız.', options: ['We will prepare the iftar table.', 'We will be preparing the iftar table.', 'We prepare the iftar table.', 'We have prepared the iftar table.'], answer: 1, why: 'Gelecekteki anda süren iş: will be + -ing.' },
    { q: 'Do not call at noon. I ___ .', options: ['will pray', 'will be praying', 'pray', 'am praying'], answer: 1, why: 'O anda meşgul olacağım.' },
    { q: 'This time next week we ___ on the Bosphorus.', options: ['sail', 'will sail', 'will be sailing', 'have sailed'], answer: 2, why: '"this time next week" belirli bir gelecek an.' },
    { q: 'Hangisi doğru?', options: ['He will be cook dinner.', 'He will being cooking.', 'He will be cooking.', 'He be will cooking.'], answer: 2, why: 'Kalıp: will be + fiil-ing.' }
  ];

  EXTRA['future-perfect'] = [
    { q: 'Bayrama kadar yorganı bitirmiş olacak.', options: ['She will finish the quilt by the feast.', 'She will have finished the quilt by the feast.', 'She finishes the quilt by the feast.', 'She has finished the quilt by the feast.'], answer: 1, why: 'by + son tarih → will have + V3.' },
    { q: 'Sen gelene kadar çayı demlemiş olacağım.', options: ['I will brew the tea.', 'I will have brewed the tea by the time you arrive.', 'I am brewing the tea.', 'I brewed the tea.'], answer: 1, why: '"by the time" ile gelecekte tamamlanma.' },
    { q: 'Hangisi yanlış?', options: ['They will have arrived by noon.', 'We will have finished by Friday.', 'She will have went by then.', 'He will have left before dawn.'], answer: 2, why: 'will have + V3: go → gone.' },
    { q: 'By next spring the craftsmen ___ the dome.', options: ['will repair', 'will have repaired', 'repair', 'have repaired'], answer: 1, why: 'Gelecekteki tarihe kadar bitmiş olacak.' }
  ];

  EXTRA['future-perfect-continuous'] = [
    { q: 'Haziranda kardeşim üç yıldır Bursa\u2019da okuyor olacak.', options: ['My sister will study in Bursa for three years.', 'My sister will have been studying in Bursa for three years.', 'My sister has studied in Bursa for three years.', 'My sister is studying in Bursa.'], answer: 1, why: 'Gelecekteki ana kadar süren iş + süre.' },
    { q: 'By sunset, we ___ for ten hours.', options: ['will travel', 'will have travelled', 'will have been travelling', 'are travelling'], answer: 2, why: 'O ana kadar kesintisiz süren yolculuk.' },
    { q: 'Hangisi doğru?', options: ['He will have been make ebru.', 'He will have making ebru.', 'He will have been making ebru.', 'He will been making ebru.'], answer: 2, why: 'Kalıp: will have been + fiil-ing.' }
  ];

  /* ---- zamanların soru dizilerine ekle ---- */
  if (KI.tenses && KI.tenses.list) {
    KI.tenses.list.forEach(function (t) {
      if (EXTRA[t.id]) t.quiz = (t.quiz || []).concat(EXTRA[t.id]);
    });
  }
})(window.KI);
