/* ============================================================
   Kolay İngilizce — examples-extra.js
   Günlük hayattan ek örnek cümleler. Zeytin hasadı, pazar, dolmuş,
   bayram, tatil... Aralarında birkaç da halk hikâyesi var.
   tenses.js yüklendikten sonra her zamanın examples dizisine eklenir.
   ============================================================ */
(function (KI) {
  'use strict';

  var MORE = {};

  MORE['present-simple'] = [
    { en: 'Watermelons from Diyarbakir taste very sweet.', tr: 'Diyarbakır karpuzu çok tatlı olur.', key: ['taste'], note: 'Herkesçe bilinen, değişmeyen bir gerçek.' },
    { en: 'People go to Fethiye to see the turquoise sea.', tr: 'İnsanlar turkuaz denizi görmek için Fethiye’ye gider.', key: ['go'], note: 'Genel bir doğru; özne çoğul olduğu için fiil yalın.' },
    { en: 'My mother makes tomato paste on the roof every September.', tr: 'Annem her eylül çatıda salça yapar.', key: ['makes', 'every'], note: 'Yılda bir tekrarlanan alışkanlık: every September.' },
    { en: 'The street cats wait in front of the grocer every evening.', tr: 'Sokak kedileri her akşam bakkalın önünde bekler.', key: ['wait'], note: 'Tekrar eden davranış.' },
    { en: 'Karagoz and Hacivat make people laugh in the shadow play.', tr: 'Karagöz ile Hacivat gölge oyununda insanları güldürür.', key: ['make'], note: 'Hikâyelerde ve genel doğrularda geniş zaman kullanılır.' }
  ];

  MORE['present-continuous'] = [
    { en: 'We are picking olives to make olive oil.', tr: 'Zeytinyağı yapmak için zeytin topluyoruz.', key: ['are', 'picking'], note: 'Tam şu anda süren iş.' },
    { en: 'The neighbours are shaking their carpets on the balcony.', tr: 'Komşular balkonda halılarını silkeliyor.', key: ['are', 'shaking'], note: 'Çoğul özne → are.' },
    { en: 'It is raining in Rize again this week.', tr: 'Bu hafta Rize’de yine yağmur yağıyor.', key: ['is', 'raining'], note: 'Bu günlerde süren durum için de kullanılır.' },
    { en: 'My uncle is grilling fish by the sea.', tr: 'Amcam deniz kenarında balık pişiriyor.', key: ['is', 'grilling'], note: 'Gözümüzün önünde olan iş.' }
  ];

  MORE['present-perfect'] = [
    { en: 'I have never liked Izmir bombasi.', tr: 'İzmir bombasını hiç sevmedim.', key: ['have', 'never', 'liked'], note: '"never" ile hayat boyu geçerli bir deneyim.' },
    { en: 'We have been to Cappadocia twice.', tr: 'Kapadokya’ya iki kez gittik.', key: ['have', 'been'], note: '"have been to" = gidip dönmüş olmak.' },
    { en: 'My father has already bought the holiday sweets.', tr: 'Babam bayram şekerlerini çoktan aldı.', key: ['has', 'already', 'bought'], note: 'Şekerler şu anda evde: sonuç ortada.' },
    { en: 'She has just taken the pickles out of the jar.', tr: 'Turşuyu kavanozdan yeni çıkardı.', key: ['has', 'just', 'taken'], note: 'take → taken (3. hâl).' }
  ];

  MORE['present-perfect-continuous'] = [
    { en: 'My grandmother has been making tarhana since Monday.', tr: 'Babaannem pazartesiden beri tarhana yapıyor.', key: ['has', 'been', 'making', 'since'], note: 'Pazartesi başladı, hâlâ sürüyor.' },
    { en: 'We have been waiting for the dolmus for twenty minutes.', tr: 'Dolmuşu yirmi dakikadır bekliyoruz.', key: ['have', 'been', 'waiting', 'for'], note: 'Süre veriliyor: for twenty minutes.' },
    { en: 'It has been snowing in Erzurum for three days.', tr: 'Erzurum’da üç gündür kar yağıyor.', key: ['has', 'been', 'snowing'], note: 'Hava olaylarında çok kullanılır.' },
    { en: 'The children have been swimming in the sea all afternoon.', tr: 'Çocuklar bütün öğleden sonra denizde yüzüyor.', key: ['have', 'been', 'swimming'], note: '"all afternoon" kesintisiz süreyi gösterir.' }
  ];

  MORE['past-simple'] = [
    { en: 'We went to pick olives to make olive oil.', tr: 'Zeytinyağı yapmak için zeytin toplamaya gittik.', key: ['went'], note: 'go → went. Bitmiş bir iş.' },
    { en: 'Last summer we swam in the sea at Fethiye.', tr: 'Geçen yaz Fethiye’de denizde yüzdük.', key: ['swam'], note: 'swim → swam (düzensiz).' },
    { en: 'My father bought fresh bread from the bakery this morning.', tr: 'Babam bu sabah fırından taze ekmek aldı.', key: ['bought'], note: 'buy → bought.' },
    { en: 'Dede Korkut told stories to the Oghuz people.', tr: 'Dede Korkut Oğuzlara hikâyeler anlattı.', key: ['told'], note: 'Hikâyeler genelde Past Simple ile anlatılır: tell → told.' }
  ];

  MORE['past-continuous'] = [
    { en: 'We were drinking tea in the garden while the rain was falling.', tr: 'Yağmur yağarken bahçede çay içiyorduk.', key: ['were', 'drinking', 'was', 'falling'], note: 'Aynı anda süren iki iş: while.' },
    { en: 'My mother was boiling tomatoes for the paste all day.', tr: 'Annem bütün gün salça için domates kaynatıyordu.', key: ['was', 'boiling'], note: '"all day" uzun süren işi gösterir.' },
    { en: 'The men were playing backgammon in the teahouse.', tr: 'Adamlar kıraathanede tavla oynuyordu.', key: ['were', 'playing'], note: 'Çoğul özne → were.' },
    { en: 'Keloglan was climbing the mountain when he saw a giant.', tr: 'Keloğlan dağa tırmanırken bir dev gördü.', key: ['was', 'climbing', 'saw'], note: 'Uzun iş: tırmanıyordu. Kısa iş: gördü (Past Simple).' }
  ];

  MORE['past-perfect'] = [
    { en: 'We had picked all the olives before the rain started.', tr: 'Yağmur başlamadan önce bütün zeytinleri toplamıştık.', key: ['had', 'picked', 'before'], note: 'Önce toplama bitti, sonra yağmur başladı.' },
    { en: 'By the time we arrived in Fethiye, the sun had set.', tr: 'Fethiye’ye vardığımızda güneş batmıştı.', key: ['had', 'set'], note: 'Varıştan önce olan iş: had + V3.' },
    { en: 'My aunt had prepared the pickles before winter came.', tr: 'Teyzem kış gelmeden önce turşuları hazırlamıştı.', key: ['had', 'prepared'], note: 'İki geçmiş işten önce olanı.' },
    { en: 'Nasreddin Hodja had lost his ring in the house before he looked in the garden.', tr: 'Nasreddin Hoca, bahçede aramadan önce yüzüğünü evde kaybetmişti.', key: ['had', 'lost'], note: 'Hikâyenin sırasını kurar: önce kaybetti, sonra aradı.' }
  ];

  MORE['past-perfect-continuous'] = [
    { en: 'We had been driving for six hours before we reached Diyarbakir.', tr: 'Diyarbakır’a varmadan önce altı saattir araba kullanıyorduk.', key: ['had', 'been', 'driving'], note: 'Varış anına kadar süren iş + süre.' },
    { en: 'The women had been rolling dough since dawn when the guests arrived.', tr: 'Misafirler geldiğinde kadınlar şafaktan beri hamur açıyordu.', key: ['had', 'been', 'rolling', 'since'], note: 'since ile başlangıç noktası.' },
    { en: 'He had been working in the olive grove all morning before he sat under the tree.', tr: 'Ağacın altına oturmadan önce bütün sabah zeytinlikte çalışıyordu.', key: ['had', 'been', 'working'], note: 'Oturma anına kadar süren çalışma.' }
  ];

  MORE['future-simple'] = [
    { en: 'I will buy a watermelon from the market tomorrow.', tr: 'Yarın pazardan bir karpuz alacağım.', key: ['will', 'buy'], note: 'will + yalın fiil.' },
    { en: 'The balloons will rise over Cappadocia at sunrise.', tr: 'Balonlar gün doğarken Kapadokya’nın üzerinde yükselecek.', key: ['will', 'rise'], note: 'Gelecekte olacak bir olay.' },
    { en: 'I think the traffic will be heavy on the bridge this evening.', tr: 'Sanırım bu akşam köprüde trafik yoğun olacak.', key: ['will', 'be'], note: 'Tahmin: I think + will.' },
    { en: 'We will pick the olives together next November.', tr: 'Gelecek kasım zeytinleri birlikte toplayacağız.', key: ['will', 'pick'], note: 'Gelecek bir zaman ifadesi: next November.' }
  ];

  MORE['future-continuous'] = [
    { en: 'This time tomorrow we will be swimming in Fethiye.', tr: 'Yarın bu saatte Fethiye’de yüzüyor olacağız.', key: ['will', 'be', 'swimming'], note: 'Gelecekte bir anda süren iş.' },
    { en: 'At six o\u2019clock my mother will be cooking the soup.', tr: 'Saat altıda annem çorbayı pişiriyor olacak.', key: ['will', 'be', 'cooking'], note: 'Saat verilir, o anda iş sürüyordur.' },
    { en: 'Next week the villagers will be harvesting the olives.', tr: 'Gelecek hafta köylüler zeytin topluyor olacak.', key: ['will', 'be', 'harvesting'], note: 'Kalıp değişmez: will be + fiil-ing.' }
  ];

  MORE['future-perfect'] = [
    { en: 'By October, we will have made all the tomato paste.', tr: 'Ekime kadar bütün salçayı yapmış olacağız.', key: ['will', 'have', 'made', 'by'], note: 'by + son tarih.' },
    { en: 'By the time you arrive, I will have set the breakfast table.', tr: 'Sen gelene kadar kahvaltı sofrasını kurmuş olacağım.', key: ['will', 'have', 'set'], note: 'set fiilinin üç hâli de aynıdır.' },
    { en: 'By next summer, they will have built the new road to the village.', tr: 'Gelecek yaza kadar köye giden yeni yolu yapmış olacaklar.', key: ['will', 'have', 'built'], note: 'O tarihten önce tamamlanacak.' }
  ];

  MORE['future-perfect-continuous'] = [
    { en: 'By noon, we will have been picking olives for five hours.', tr: 'Öğlene kadar beş saattir zeytin topluyor olacağız.', key: ['will', 'have', 'been', 'picking'], note: 'O ana kadar geçen süre: for five hours.' },
    { en: 'By December, my father will have been driving the same truck for twenty years.', tr: 'Aralığa kadar babam yirmi yıldır aynı kamyonu kullanıyor olacak.', key: ['will', 'have', 'been', 'driving'], note: 'Uzun süredir devam eden ve edecek olan iş.' },
    { en: 'In May, my sister will have been teaching in Fethiye for ten years.', tr: 'Mayısta kız kardeşim on yıldır Fethiye’de öğretmenlik yapıyor olacak.', key: ['will', 'have', 'been', 'teaching'], note: 'Gelecekteki bir anda süregelen meslek hayatı.' }
  ];

  /* ---- zamanların örnek dizilerine ekle ---- */
  if (KI.tenses && KI.tenses.list) {
    KI.tenses.list.forEach(function (t) {
      if (MORE[t.id]) t.examples = t.examples.concat(MORE[t.id]);
    });
  }
})(window.KI);
