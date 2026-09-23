/* ============================================================
   Kolay İngilizce — examples-extra-3.js
   Üçüncü örnek dalgası: köy ve şehir hayatı, esnaf, aile, doğa.
   Amaç, her zamanın örnek havuzunu büyütüp her girişte farklı
   cümleler görünmesini sağlamak (tense.js artık havuzdan rastgele
   seçiyor). tenses.js yüklendikten sonra examples dizisine eklenir.
   ============================================================ */
(function (KI) {
  'use strict';

  var MORE = {};

  MORE['present-simple'] = [
    { en: 'My uncle sells fruit at the market every Saturday.', tr: 'Amcam her cumartesi pazarda meyve satar.', key: ['sells'], note: 'Tekrarlanan alışkanlık: every Saturday.' },
    { en: 'The train to Ankara leaves at seven in the morning.', tr: 'Ankara treni sabah yedide kalkar.', key: ['leaves'], note: 'Değişmeyen tarife.' },
    { en: 'We visit our grandparents twice a month.', tr: 'Büyükanne ve büyükbabamızı ayda iki kez ziyaret ederiz.', key: ['visit'], note: 'Çoğul özne, fiil yalın: visit.' },
    { en: 'My sister studies medicine at the university.', tr: 'Kız kardeşim üniversitede tıp okur.', key: ['studies'], note: 'she → studies (-ies).' },
    { en: 'The imam gives a sermon every Friday.', tr: 'İmam her cuma bir vaaz verir.', key: ['gives'], note: 'Düzenli tekrarlanan bir görev.' },
    { en: 'Farmers plant wheat in the autumn.', tr: 'Çiftçiler sonbaharda buğday eker.', key: ['plant'], note: 'Genel, mevsimlik bir gerçek.' },
    { en: 'My father never eats breakfast before prayer.', tr: 'Babam namazdan önce asla kahvaltı etmez.', key: ['never', 'eats'], note: '"never" ile geniş zaman kullanılır.' },
    { en: 'The ferry crosses the strait every half hour.', tr: 'Vapur boğazı her yarım saatte bir geçer.', key: ['crosses'], note: 'Sabit bir tarife.' },
    { en: 'Our neighbour feeds the street dogs every evening.', tr: 'Komşumuz her akşam sokak köpeklerini besler.', key: ['feeds'], note: 'Tekrarlanan iyi bir alışkanlık.' },
    { en: 'My cousin plays the saz at weddings.', tr: 'Kuzenim düğünlerde saz çalar.', key: ['plays'], note: 'Genel yetenek/alışkanlık.' },
    { en: 'The shepherd takes the sheep to the hills at dawn.', tr: 'Çoban koyunları şafakta tepelere götürür.', key: ['takes'], note: 'Her gün tekrarlanan bir düzen.' },
    { en: 'My mother bakes bread once a week.', tr: 'Annem haftada bir ekmek pişirir.', key: ['bakes'], note: '"once a week" tekrar sıklığını gösterir.' },
    { en: 'The library closes at five on weekdays.', tr: 'Kütüphane hafta içi beşte kapanır.', key: ['closes'], note: 'Sabit çalışma saati.' },
    { en: 'Does the bakery sell simit in the morning?', tr: 'Fırın sabahları simit satar mı?', key: ['does', 'sell'], note: 'Soru: Does + yalın fiil.' },
    { en: 'My grandmother does not like loud music.', tr: 'Büyükannem gürültülü müziği sevmez.', key: ['does', 'not', 'like'], note: 'Olumsuzda fiil yalın kalır.' },
    { en: 'Fishermen go out to sea before sunrise.', tr: 'Balıkçılar gün doğmadan denize açılır.', key: ['go'], note: 'Meslekle ilgili genel bir düzen.' },
    { en: 'Children usually play football after school.', tr: 'Çocuklar genelde okuldan sonra futbol oynar.', key: ['usually', 'play'], note: '"usually" ile geniş zaman.' },
    { en: 'My brother works at a bank in the city centre.', tr: 'Ağabeyim şehir merkezinde bir bankada çalışır.', key: ['works'], note: 'Sürekli bir iş/meslek.' },
    { en: 'We often visit the tea garden on Sundays.', tr: 'Pazar günleri sık sık çay bahçesine gideriz.', key: ['visit'], note: '"often" + "on Sundays" tekrarı vurgular.' },
    { en: 'My aunt teaches children to read the Qur’an.', tr: 'Teyzem çocuklara Kur’an okumayı öğretir.', key: ['teaches'], note: 'Sürekli bir görev/meslek.' }
  ];

  MORE['present-continuous'] = [
    { en: 'My father is fixing the car in the garage right now.', tr: 'Babam şu anda garajda arabayı tamir ediyor.', key: ['is', 'fixing'], note: '"right now" tam şu anı gösterir.' },
    { en: 'Look! The storks are flying south.', tr: 'Bak! Leylekler güneye uçuyor.', key: ['are', 'flying'], note: '"Look!" anı işaret eder.' },
    { en: 'We are baking baklava for the holiday.', tr: 'Bayram için baklava pişiriyoruz.', key: ['are', 'baking'], note: 'Şu anda süren hazırlık.' },
    { en: 'My sister is studying for her exam at the moment.', tr: 'Kız kardeşim şu anda sınavı için çalışıyor.', key: ['is', 'studying'], note: '"at the moment" = şu an.' },
    { en: 'The workers are building a new mosque in our neighbourhood.', tr: 'İşçiler mahallemizde yeni bir cami inşa ediyor.', key: ['are', 'building'], note: 'Şu günlerde süren bir proje.' },
    { en: 'I am not listening to the radio now.', tr: 'Şu anda radyo dinlemiyorum.', key: ['am', 'not', 'listening'], note: 'Olumsuzluk be fiilinden sonra gelir.' },
    { en: 'Are you waiting for the dolmus?', tr: 'Dolmuşu mu bekliyorsun?', key: ['are', 'waiting'], note: 'Soru: Are + özne + V-ing.' },
    { en: 'The old man is feeding the pigeons in the square.', tr: 'Yaşlı adam meydanda güvercinleri besliyor.', key: ['is', 'feeding'], note: 'Gözümüzün önünde süren iş.' },
    { en: 'My grandmother is telling a story to the children.', tr: 'Büyükannem çocuklara bir hikâye anlatıyor.', key: ['is', 'telling'], note: 'Şu anda süren bir eylem.' },
    { en: 'The farmers are harvesting the wheat this week.', tr: 'Çiftçiler bu hafta buğdayı hasat ediyor.', key: ['are', 'harvesting'], note: '"this week" şu günlerde sürdüğünü gösterir.' },
    { en: 'We are climbing the hill to see the sunset.', tr: 'Gün batımını görmek için tepeye tırmanıyoruz.', key: ['are', 'climbing'], note: 'Şu anda devam eden hareket.' },
    { en: 'My brother is learning to play the saz.', tr: 'Ağabeyim saz çalmayı öğreniyor.', key: ['is', 'learning'], note: 'Şu dönemde süren bir çaba.' },
    { en: 'The women are embroidering a cushion in the courtyard.', tr: 'Kadınlar avluda bir yastık işliyor.', key: ['are', 'embroidering'], note: 'Çoğul özne → are.' },
    { en: 'Listen! Someone is knocking on the door.', tr: 'Dinle! Biri kapıyı çalıyor.', key: ['is', 'knocking'], note: '"Listen!" tam şu anı gösterir.' },
    { en: 'My father is not working today; it is a holiday.', tr: 'Babam bugün çalışmıyor; bayram tatili.', key: ['is', 'not', 'working'], note: 'Bugüne özgü, geçici bir durum.' },
    { en: 'The children are collecting shells on the beach.', tr: 'Çocuklar sahilde kabuk topluyor.', key: ['are', 'collecting'], note: 'Şu anda süren oyun/etkinlik.' },
    { en: 'Why is the dog barking at the gate?', tr: 'Köpek neden kapıda havlıyor?', key: ['is', 'barking'], note: 'Soru kelimesiyle şimdiki zaman sorusu.' },
    { en: 'My mother is hanging the washing on the line.', tr: 'Annem çamaşırları ipe asıyor.', key: ['is', 'hanging'], note: 'Ev içinde şu anda süren iş.' },
    { en: 'We are getting ready for the wedding tonight.', tr: 'Bu akşamki düğüne hazırlanıyoruz.', key: ['are', 'getting'], note: 'Bu günlerde süren hazırlık.' },
    { en: 'The baker is taking the bread out of the oven.', tr: 'Fırıncı ekmeği fırından çıkarıyor.', key: ['is', 'taking'], note: 'Tam şu anda gördüğümüz iş.' }
  ];

  MORE['present-perfect'] = [
    { en: 'I have already packed my bag for the trip.', tr: 'Yolculuk için çantamı çoktan hazırladım.', key: ['have', 'already', 'packed'], note: '"already" ile bitmiş, sonucu belli iş.' },
    { en: 'My father has never smoked a cigarette.', tr: 'Babam hiç sigara içmedi.', key: ['has', 'never', 'smoked'], note: 'Hayat boyu geçerli deneyim.' },
    { en: 'Have you ever ridden a horse?', tr: 'Hiç ata bindin mi?', key: ['have', 'ridden'], note: 'ride → ridden (3. hâl).' },
    { en: 'We have lived in this house for fifteen years.', tr: 'Bu evde on beş yıldır yaşıyoruz.', key: ['have', 'lived', 'for'], note: 'Geçmişten şimdiye süren durum.' },
    { en: 'My mother has just finished the ironing.', tr: 'Annem ütüyü az önce bitirdi.', key: ['has', 'just', 'finished'], note: '"just" ile çok yakın geçmiş.' },
    { en: 'The workers have not finished the road yet.', tr: 'İşçiler yolu henüz bitirmedi.', key: ['have', 'not', 'finished', 'yet'], note: '"yet" olumsuzda kullanılır.' },
    { en: 'My grandfather has told this story many times.', tr: 'Dedem bu hikâyeyi birçok kez anlattı.', key: ['has', 'told'], note: 'Kaç kez olduğu değil, deneyim önemli.' },
    { en: 'I have lost my keys again.', tr: 'Anahtarlarımı yine kaybettim.', key: ['have', 'lost'], note: 'Sonuç şu an geçerli: anahtarlar kayıp.' },
    { en: 'Have you seen my glasses anywhere?', tr: 'Gözlüğümü bir yerde gördün mü?', key: ['have', 'seen'], note: 'see → seen (3. hâl).' },
    { en: 'My sister has passed all her exams this year.', tr: 'Kız kardeşim bu yıl bütün sınavlarını geçti.', key: ['has', 'passed'], note: '"this year" henüz bitmemiş bir dönem.' },
    { en: 'We have never been to the Black Sea coast.', tr: 'Karadeniz kıyısına hiç gitmedik.', key: ['have', 'never', 'been'], note: '"have been to" = gidip görmüş olmak.' },
    { en: 'The bread has gone stale already.', tr: 'Ekmek çoktan bayatlamış.', key: ['has', 'gone'], note: 'go → gone; sonuç şu an ortada.' },
    { en: 'My uncle has bought a new tractor for the farm.', tr: 'Amcam çiftlik için yeni bir traktör aldı.', key: ['has', 'bought'], note: 'buy → bought; sonucu hâlâ geçerli.' },
    { en: 'She has known my family since childhood.', tr: 'Ailemi çocukluğundan beri tanır.', key: ['has', 'known', 'since'], note: '"since" ile başlangıç noktası verilir.' },
    { en: 'I have not called my grandmother since Monday.', tr: 'Pazartesiden beri büyükannemi aramadım.', key: ['have', 'not', 'called', 'since'], note: 'Olumsuzda da since kullanılabilir.' },
    { en: 'The guests have arrived earlier than we expected.', tr: 'Misafirler beklediğimizden erken geldi.', key: ['have', 'arrived'], note: 'Sonucu şu an belli: misafirler burada.' },
    { en: 'My father has worked in three different cities.', tr: 'Babam üç farklı şehirde çalıştı.', key: ['has', 'worked'], note: 'Hayat boyu birikmiş deneyim.' },
    { en: 'Someone has eaten all the walnuts.', tr: 'Biri bütün cevizleri yemiş.', key: ['has', 'eaten'], note: 'eat → eaten; sonuç: cevizler bitmiş.' },
    { en: 'We have just heard the good news.', tr: 'İyi haberi az önce duyduk.', key: ['have', 'just', 'heard'], note: '"just" ile çok taze bir haber.' },
    { en: 'Have they finished painting the fence yet?', tr: 'Çiti boyamayı bitirdiler mi?', key: ['have', 'finished', 'yet'], note: 'Soruda "yet" = "acaba şimdiye kadar".' }
  ];

  MORE['present-perfect-continuous'] = [
    { en: 'My mother has been cooking since early morning.', tr: 'Annem sabahın erken saatlerinden beri yemek pişiriyor.', key: ['has', 'been', 'cooking', 'since'], note: 'Başlangıç noktası: since early morning.' },
    { en: 'How long have you been learning English?', tr: 'Ne zamandır İngilizce öğreniyorsun?', key: ['have', 'been', 'learning'], note: '"How long" süre sorar.' },
    { en: 'The children have been playing in the garden for hours.', tr: 'Çocuklar saatlerdir bahçede oynuyor.', key: ['have', 'been', 'playing', 'for'], note: 'Süre: for hours.' },
    { en: 'My father has been repairing the roof since Saturday.', tr: 'Babam cumartesiden beri çatıyı tamir ediyor.', key: ['has', 'been', 'repairing'], note: 'Cumartesi başladı, hâlâ sürüyor.' },
    { en: 'We have been waiting for the doctor for half an hour.', tr: 'Yarım saattir doktoru bekliyoruz.', key: ['have', 'been', 'waiting'], note: 'Şu ana kadar süren bekleyiş.' },
    { en: 'It has been raining since last night.', tr: 'Dün geceden beri yağmur yağıyor.', key: ['has', 'been', 'raining'], note: 'Hava olaylarında sık kullanılır.' },
    { en: 'My grandfather has been growing tomatoes for forty years.', tr: 'Dedem kırk yıldır domates yetiştiriyor.', key: ['has', 'been', 'growing'], note: 'Çok uzun süredir devam eden uğraş.' },
    { en: 'She has been practising the piano all afternoon.', tr: 'Bütün öğleden sonra piyano çalışıyor.', key: ['has', 'been', 'practising'], note: '"all afternoon" kesintisiz süre.' },
    { en: 'The men have been fixing the fishing boat since morning.', tr: 'Adamlar sabahtan beri balıkçı teknesini tamir ediyor.', key: ['have', 'been', 'fixing'], note: 'Sabahtan şimdiye süren iş.' },
    { en: 'I have been thinking about this problem for days.', tr: 'Günlerdir bu sorunu düşünüyorum.', key: ['have', 'been', 'thinking'], note: 'Zihinsel süreç de bu kalıpla anlatılır.' },
    { en: 'My aunt has been knitting the same blanket for a month.', tr: 'Teyzem bir aydır aynı battaniyeyi örüyor.', key: ['has', 'been', 'knitting'], note: 'Uzun süredir devam eden bir el işi.' },
    { en: 'We have been climbing for three hours.', tr: 'Üç saattir tırmanıyoruz.', key: ['have', 'been', 'climbing'], note: 'Yorgunluğun sebebi vurgulanır.' },
    { en: 'The baker has been working since four in the morning.', tr: 'Fırıncı sabah dörtten beri çalışıyor.', key: ['has', 'been', 'working'], note: 'Erken başlayan, süren bir mesai.' },
    { en: 'My sister has been studying for the entrance exam since summer.', tr: 'Kız kardeşim yazdan beri sınava çalışıyor.', key: ['has', 'been', 'studying'], note: 'Uzun süreli bir hazırlık.' },
    { en: 'They have been building the dam for two years.', tr: 'İki yıldır barajı inşa ediyorlar.', key: ['have', 'been', 'building'], note: 'Büyük bir proje, hâlâ sürüyor.' },
    { en: 'I have been feeling tired all week.', tr: 'Bütün hafta yorgun hissediyorum.', key: ['have', 'been', 'feeling'], note: 'Duygu durumu da bu kalıpla anlatılabilir.' },
    { en: 'The cat has been sleeping on the roof all day.', tr: 'Kedi bütün gün çatıda uyuyor.', key: ['has', 'been', 'sleeping'], note: '"all day" kesintisiz süreyi gösterir.' },
    { en: 'My neighbours have been renovating their house since spring.', tr: 'Komşularım ilkbahardan beri evlerini yeniliyor.', key: ['have', 'been', 'renovating'], note: 'İlkbahardan şimdiye süren iş.' },
    { en: 'We have been waiting in line since dawn.', tr: 'Şafaktan beri sırada bekliyoruz.', key: ['have', 'been', 'waiting'], note: 'Uzun bir bekleyiş, hâlâ sürüyor.' },
    { en: 'My grandmother has been feeding the birds since spring.', tr: 'Büyükannem ilkbahardan beri kuşları besliyor.', key: ['has', 'been', 'feeding'], note: 'Küçük ama düzenli, süregelen bir alışkanlık.' }
  ];

  MORE['past-simple'] = [
    { en: 'We celebrated my grandfather’s birthday last week.', tr: 'Geçen hafta dedemin doğum gününü kutladık.', key: ['celebrated'], note: 'Belirli bir geçmiş zaman: last week.' },
    { en: 'My father sold the old car two years ago.', tr: 'Babam eski arabayı iki yıl önce sattı.', key: ['sold'], note: 'sell → sold.' },
    { en: 'The earthquake happened in the middle of the night.', tr: 'Deprem gecenin ortasında oldu.', key: ['happened'], note: 'Bitmiş, tek bir olay.' },
    { en: 'I met my best friend at primary school.', tr: 'En iyi arkadaşımla ilkokulda tanıştım.', key: ['met'], note: 'meet → met.' },
    { en: 'My mother lost her ring at the wedding.', tr: 'Annem yüzüğünü düğünde kaybetti.', key: ['lost'], note: 'lose → lost.' },
    { en: 'We watched the sunset from the hill yesterday.', tr: 'Dün tepeden gün batımını izledik.', key: ['watched'], note: 'Belirli geçmiş zaman: yesterday.' },
    { en: 'The team won the match last night.', tr: 'Takım dün gece maçı kazandı.', key: ['won'], note: 'win → won.' },
    { en: 'My grandfather built this house with his own hands.', tr: 'Dedem bu evi kendi elleriyle yaptı.', key: ['built'], note: 'build → built.' },
    { en: 'We swam in the lake all day last summer.', tr: 'Geçen yaz bütün gün gölde yüzdük.', key: ['swam'], note: 'swim → swam.' },
    { en: 'The bus arrived late this morning.', tr: 'Otobüs bu sabah geç geldi.', key: ['arrived'], note: 'Belirli, bitmiş bir olay.' },
    { en: 'My sister broke her arm while skiing.', tr: 'Kız kardeşim kayak yaparken kolunu kırdı.', key: ['broke'], note: 'break → broke.' },
    { en: 'They moved to Istanbul in 2015.', tr: '2015’te İstanbul’a taşındılar.', key: ['moved'], note: 'Tarih belirtildi: in 2015.' },
    { en: 'I forgot to bring my umbrella today.', tr: 'Bugün şemsiyemi getirmeyi unuttum.', key: ['forgot'], note: 'forget → forgot.' },
    { en: 'The farmer sold his cows at the market last month.', tr: 'Çiftçi geçen ay ineklerini pazarda sattı.', key: ['sold'], note: 'Belirli geçmiş zaman: last month.' },
    { en: 'We planted an olive tree in the garden last spring.', tr: 'Geçen ilkbahar bahçeye bir zeytin ağacı diktik.', key: ['planted'], note: 'Düzenli fiil: plant → planted.' },
    { en: 'My uncle taught me how to fish.', tr: 'Amcam bana balık tutmayı öğretti.', key: ['taught'], note: 'teach → taught.' },
    { en: 'The children found a kitten near the mosque.', tr: 'Çocuklar caminin yanında bir yavru kedi buldu.', key: ['found'], note: 'find → found.' },
    { en: 'I read that book two summers ago.', tr: 'O kitabı iki yaz önce okudum.', key: ['read'], note: 'read (geçmiş hâli aynı yazılır, "red" okunur).' },
    { en: 'My grandmother made this kilim thirty years ago.', tr: 'Büyükannem bu kilimi otuz yıl önce yaptı.', key: ['made'], note: 'make → made.' },
    { en: 'We missed the last ferry and waited an hour.', tr: 'Son vapuru kaçırdık ve bir saat bekledik.', key: ['missed', 'waited'], note: 'İki geçmiş olay art arda anlatılır.' }
  ];

  MORE['past-continuous'] = [
    { en: 'I was washing the dishes when the lights went out.', tr: 'Işıklar gittiğinde bulaşık yıkıyordum.', key: ['was', 'washing', 'went'], note: 'Uzun iş + araya giren kısa olay.' },
    { en: 'My father was driving to work when it started to snow.', tr: 'Babam işe giderken kar yağmaya başladı.', key: ['was', 'driving', 'started'], note: 'Süren iş: was driving.' },
    { en: 'We were having dinner when the guests arrived.', tr: 'Misafirler geldiğinde biz yemek yiyorduk.', key: ['were', 'having', 'arrived'], note: 'Klasik "araya giren iş" kalıbı.' },
    { en: 'The children were playing marbles while their mother was hanging the washing.', tr: 'Anneleri çamaşır asarken çocuklar bilye oynuyordu.', key: ['were', 'playing', 'was', 'hanging'], note: 'Aynı anda süren iki iş: while.' },
    { en: 'I was reading a book when my phone rang.', tr: 'Telefonum çaldığında bir kitap okuyordum.', key: ['was', 'reading', 'rang'], note: 'Süren iş + ani olay.' },
    { en: 'My grandmother was resting when the phone rang.', tr: 'Büyükannem dinlenirken telefon çaldı.', key: ['was', 'resting', 'rang'], note: 'Uzun iş: dinleniyordu.' },
    { en: 'We were walking along the shore when we saw the dolphins.', tr: 'Kıyı boyunca yürürken yunusları gördük.', key: ['were', 'walking', 'saw'], note: 'Süren iş + kısa gözlem.' },
    { en: 'The men were repairing the roof while it was raining.', tr: 'Yağmur yağarken adamlar çatıyı tamir ediyordu.', key: ['were', 'repairing', 'was', 'raining'], note: 'İki iş aynı anda sürüyordu.' },
    { en: 'I was sleeping when you called last night.', tr: 'Dün gece aradığında uyuyordum.', key: ['was', 'sleeping', 'called'], note: 'Uzun iş: uyuyordum.' },
    { en: 'She was cutting vegetables while the soup was boiling.', tr: 'Çorba kaynarken sebze doğruyordu.', key: ['was', 'cutting', 'was', 'boiling'], note: 'İki eş zamanlı iş.' },
    { en: 'We were watching the football match when the electricity went out.', tr: 'Elektrik kesildiğinde futbol maçını izliyorduk.', key: ['were', 'watching', 'went'], note: 'Süren iş + araya giren olay.' },
    { en: 'My uncle was milking the cows at dawn.', tr: 'Amcam şafakta inekleri sağıyordu.', key: ['was', 'milking'], note: 'Belirli bir geçmiş anda süren iş.' },
    { en: 'The shepherd was resting under a tree when the storm began.', tr: 'Fırtına başladığında çoban bir ağacın altında dinleniyordu.', key: ['was', 'resting', 'began'], note: 'Uzun iş + kısa olay.' },
    { en: 'I was writing a letter when the postman knocked.', tr: 'Postacı kapıyı çaldığında bir mektup yazıyordum.', key: ['was', 'writing', 'knocked'], note: 'Süren iş: yazıyordum.' },
    { en: 'My mother was baking a cake for my birthday.', tr: 'Annem doğum günüm için pasta pişiriyordu.', key: ['was', 'baking'], note: 'Geçmişte belirli bir anda süren iş.' },
    { en: 'We were waiting at the station when the train finally came.', tr: 'Tren nihayet geldiğinde istasyonda bekliyorduk.', key: ['were', 'waiting', 'came'], note: 'Uzun bekleyiş + kısa olay.' },
    { en: 'The tourists were taking photos of the old bridge.', tr: 'Turistler eski köprünün fotoğraflarını çekiyordu.', key: ['were', 'taking'], note: 'Çoğul özne → were.' },
    { en: 'I was doing my homework while my brother was watching cartoons.', tr: 'Ben ödevimi yaparken kardeşim çizgi film izliyordu.', key: ['was', 'doing', 'was', 'watching'], note: 'İki iş aynı anda sürüyordu.' },
    { en: 'My father was talking on the phone when I got home.', tr: 'Ben eve geldiğimde babam telefonda konuşuyordu.', key: ['was', 'talking', 'got'], note: 'Süren iş + kısa olay.' },
    { en: 'The women were washing carpets by the river.', tr: 'Kadınlar nehirde halı yıkıyordu.', key: ['were', 'washing'], note: 'Geçmişte süren bir sahne.' }
  ];

  MORE['past-perfect'] = [
    { en: 'When I arrived, the meeting had already started.', tr: 'Ben vardığımda toplantı çoktan başlamıştı.', key: ['had', 'already', 'started'], note: 'Varıştan önce biten iş: had + V3.' },
    { en: 'She had finished her homework before dinner.', tr: 'Akşam yemeğinden önce ödevini bitirmişti.', key: ['had', 'finished', 'before'], note: '"before" iki geçmiş işin sırasını gösterir.' },
    { en: 'We had never seen snow before that winter.', tr: 'O kışa kadar hiç kar görmemiştik.', key: ['had', 'never', 'seen'], note: 'Belirli bir geçmiş ana kadarki deneyim.' },
    { en: 'By the time the doctor came, the pain had gone.', tr: 'Doktor geldiğinde ağrı geçmişti.', key: ['had', 'gone'], note: '"by the time" geçmişin geçmişini ister.' },
    { en: 'My grandfather had already retired when I was born.', tr: 'Ben doğduğumda dedem çoktan emekli olmuştu.', key: ['had', 'already', 'retired'], note: 'Doğumdan önce olan iş.' },
    { en: 'The train had left before we reached the station.', tr: 'Biz istasyona varmadan önce tren gitmişti.', key: ['had', 'left', 'before'], note: 'leave → left.' },
    { en: 'I realized I had left my phone at home.', tr: 'Telefonumu evde bıraktığımı fark ettim.', key: ['had', 'left', 'realized'], note: 'Fark etmeden önce olan iş.' },
    { en: 'She had never cooked manti before that day.', tr: 'O güne kadar hiç mantı pişirmemişti.', key: ['had', 'never', 'cooked'], note: 'Belirli bir ana kadarki deneyimsizlik.' },
    { en: 'We had finished the harvest before the rain started.', tr: 'Yağmur başlamadan önce hasadı bitirmiştik.', key: ['had', 'finished', 'before'], note: 'Yağmurdan önce biten iş.' },
    { en: 'My father had already fixed the tap when the plumber arrived.', tr: 'Muslukçu geldiğinde babam musluğu çoktan tamir etmişti.', key: ['had', 'already', 'fixed'], note: 'Plumber gelmeden önce biten iş.' },
    { en: 'By the time I woke up, everyone had left.', tr: 'Ben uyandığımda herkes gitmişti.', key: ['had', 'left'], note: 'Uyanmadan önce olan iş.' },
    { en: 'She had studied English for years before she moved abroad.', tr: 'Yurt dışına taşınmadan önce yıllarca İngilizce çalışmıştı.', key: ['had', 'studied', 'before'], note: 'Taşınmadan önceki süreç.' },
    { en: 'The guests had already eaten when we arrived.', tr: 'Biz vardığımızda misafirler çoktan yemek yemişti.', key: ['had', 'already', 'eaten'], note: 'eat → eaten.' },
    { en: 'My mother had prepared everything before the guests came.', tr: 'Misafirler gelmeden önce annem her şeyi hazırlamıştı.', key: ['had', 'prepared', 'before'], note: 'Misafirlerden önce biten hazırlık.' },
    { en: 'We had never visited that village before last year.', tr: 'Geçen yıla kadar o köyü hiç ziyaret etmemiştik.', key: ['had', 'never', 'visited'], note: 'Geçen yıla kadarki deneyimsizlik.' },
    { en: 'He had lost his job before he moved to the city.', tr: 'Şehre taşınmadan önce işini kaybetmişti.', key: ['had', 'lost', 'before'], note: 'Taşınmadan önce olan olay.' },
    { en: 'I had never tried baklava before I came to Turkey.', tr: 'Türkiye’ye gelmeden önce hiç baklava denememiştim.', key: ['had', 'never', 'tried'], note: 'Gelmeden önceki deneyimsizlik.' },
    { en: 'The children had gone to bed before their father came home.', tr: 'Babaları eve gelmeden önce çocuklar yatmıştı.', key: ['had', 'gone', 'before'], note: 'go → gone.' },
    { en: 'My grandmother had already heard the news by the time we called.', tr: 'Biz aradığımızda büyükannem haberi çoktan duymuştu.', key: ['had', 'already', 'heard'], note: 'hear → heard.' },
    { en: 'We had packed everything before the taxi arrived.', tr: 'Taksi gelmeden önce her şeyi hazırlamıştık.', key: ['had', 'packed', 'before'], note: 'Taksiden önce biten hazırlık.' }
  ];

  MORE['past-perfect-continuous'] = [
    { en: 'He had been working in the fields for hours before he took a break.', tr: 'Mola vermeden önce saatlerdir tarlalarda çalışıyordu.', key: ['had', 'been', 'working'], note: 'Molaya kadar süren iş + süre.' },
    { en: 'We had been driving for two hours when the car broke down.', tr: 'Araba bozulduğunda iki saattir araba sürüyorduk.', key: ['had', 'been', 'driving'], note: 'Arızaya kadar süren yolculuk.' },
    { en: 'She had been waiting for an hour before the bus finally came.', tr: 'Otobüs nihayet geldiğinde bir saattir bekliyordu.', key: ['had', 'been', 'waiting'], note: 'Otobüsten önceki süren bekleyiş.' },
    { en: 'My grandfather had been fishing since dawn when we found him.', tr: 'Onu bulduğumuzda dedem şafaktan beri balık tutuyordu.', key: ['had', 'been', 'fishing', 'since'], note: 'Bulma anına kadar süren iş.' },
    { en: 'The children had been playing outside for hours before it got dark.', tr: 'Hava kararmadan önce çocuklar saatlerdir dışarıda oynuyordu.', key: ['had', 'been', 'playing'], note: 'Kararmadan önceki süreç.' },
    { en: 'I had been living in that village for ten years before I moved.', tr: 'Taşınmadan önce o köyde on yıldır yaşıyordum.', key: ['had', 'been', 'living'], note: 'Taşınmaya kadar süren durum.' },
    { en: 'They had been building the barn for months before the storm destroyed it.', tr: 'Fırtına onu yıkmadan önce ahırı aylardır inşa ediyorlardı.', key: ['had', 'been', 'building'], note: 'Fırtınaya kadar süren inşaat.' },
    { en: 'She had been crying before her mother noticed.', tr: 'Annesi fark etmeden önce ağlıyordu.', key: ['had', 'been', 'crying'], note: 'Fark etmeden önceki süreç.' },
    { en: 'We had been climbing for three hours when we reached the top.', tr: 'Zirveye vardığımızda üç saattir tırmanıyorduk.', key: ['had', 'been', 'climbing'], note: 'Zirveye kadar süren çaba.' },
    { en: 'My father had been smoking for twenty years before he quit.', tr: 'Bırakmadan önce babam yirmi yıldır sigara içiyordu.', key: ['had', 'been', 'smoking'], note: 'Bırakmadan önceki uzun süreç.' },
    { en: 'The women had been weaving the carpet for months before it was finished.', tr: 'Bitmeden önce kadınlar aylardır halıyı dokuyordu.', key: ['had', 'been', 'weaving'], note: 'Bitirilmeden önce süren el işi.' },
    { en: 'He had been studying all night before the exam.', tr: 'Sınavdan önce bütün gece ders çalışıyordu.', key: ['had', 'been', 'studying'], note: 'Sınavdan önceki gece boyu süren iş.' },
    { en: 'We had been waiting for the rain to stop before we left.', tr: 'Ayrılmadan önce yağmurun durmasını bekliyorduk.', key: ['had', 'been', 'waiting'], note: 'Ayrılmadan önceki bekleyiş.' },
    { en: 'She had been feeling sick for days before she saw the doctor.', tr: 'Doktora gitmeden önce günlerdir kendini hasta hissediyordu.', key: ['had', 'been', 'feeling'], note: 'Doktordan önceki süreç.' },
    { en: 'My uncle had been running the shop for thirty years before he sold it.', tr: 'Satmadan önce amcam otuz yıldır dükkânı işletiyordu.', key: ['had', 'been', 'running'], note: 'Satıştan önceki uzun süre.' },
    { en: 'The dog had been barking for an hour before we let it inside.', tr: 'İçeri almadan önce köpek bir saattir havlıyordu.', key: ['had', 'been', 'barking'], note: 'İçeri almadan önceki süreç.' }
  ];

  MORE['future-simple'] = [
    { en: 'I will visit my grandparents next weekend.', tr: 'Gelecek hafta sonu büyükannemleri ziyaret edeceğim.', key: ['will', 'visit'], note: 'will + yalın fiil.' },
    { en: 'It will probably rain tomorrow evening.', tr: 'Yarın akşam muhtemelen yağmur yağacak.', key: ['will', 'rain'], note: 'Tahmin: probably + will.' },
    { en: 'My father will retire next year.', tr: 'Babam gelecek yıl emekli olacak.', key: ['will', 'retire'], note: 'Gelecekle ilgili basit bir bilgi.' },
    { en: 'Don’t worry, I will fix it myself.', tr: 'Merak etme, kendim tamir edeceğim.', key: ['will', 'fix'], note: 'O anda verilen bir söz.' },
    { en: 'The new bridge will open next spring.', tr: 'Yeni köprü gelecek ilkbahar açılacak.', key: ['will', 'open'], note: 'Gelecekte olacak bir olay.' },
    { en: 'I think the harvest will be good this year.', tr: 'Sanırım bu yıl hasat iyi olacak.', key: ['will', 'be'], note: 'I think + will: kişisel tahmin.' },
    { en: 'We will meet at the tea garden at five.', tr: 'Beşte çay bahçesinde buluşacağız.', key: ['will', 'meet'], note: 'Anlık plan/karar.' },
    { en: 'She will not come to the wedding this time.', tr: 'Bu sefer düğüne gelmeyecek.', key: ['will', 'not', 'come'], note: 'Olumsuz: will not.' },
    { en: 'Will you help me carry these bags?', tr: 'Bu çantaları taşımama yardım eder misin?', key: ['will', 'help'], note: 'Rica: Will you...?' },
    { en: 'My cousin will start university in September.', tr: 'Kuzenim eylülde üniversiteye başlayacak.', key: ['will', 'start'], note: 'Belirli bir gelecek tarih.' },
    { en: 'The shop will be closed for the holiday.', tr: 'Dükkân bayram için kapalı olacak.', key: ['will', 'be'], note: 'Gelecekle ilgili basit bilgi.' },
    { en: 'I promise I will call you every week.', tr: 'Söz veriyorum her hafta seni arayacağım.', key: ['will', 'call'], note: 'Söz verme: promise + will.' },
    { en: 'The weather forecast says it will be cold this weekend.', tr: 'Hava durumu bu hafta sonu soğuk olacağını söylüyor.', key: ['will', 'be'], note: 'Tahmine dayalı bilgi.' },
    { en: 'We will plant new trees in the garden this year.', tr: 'Bu yıl bahçeye yeni ağaçlar dikeceğiz.', key: ['will', 'plant'], note: 'Gelecek için basit bir niyet.' },
    { en: 'My grandmother will teach me how to make dolma.', tr: 'Büyükannem bana dolma yapmayı öğretecek.', key: ['will', 'teach'], note: 'Gelecekteki bir plan/söz.' },
    { en: 'I am sure the team will win tonight.', tr: 'Eminim takım bu gece kazanacak.', key: ['will', 'win'], note: 'Güçlü bir tahmin.' },
    { en: 'The mayor will open the new school next month.', tr: 'Belediye başkanı gelecek ay yeni okulu açacak.', key: ['will', 'open'], note: 'Gelecekteki resmi bir olay.' },
    { en: 'We will not forget this day.', tr: 'Bu günü unutmayacağız.', key: ['will', 'not', 'forget'], note: 'Olumsuz gelecek zaman.' },
    { en: 'Will the ferry run on the holiday?', tr: 'Vapur bayramda çalışacak mı?', key: ['will', 'run'], note: 'Soru: Will + özne + V1?' },
    { en: 'My brother will join the army next year.', tr: 'Kardeşim gelecek yıl askere gidecek.', key: ['will', 'join'], note: 'Belirli bir gelecek tarih.' }
  ];

  MORE['future-continuous'] = [
    { en: 'This time tomorrow, we will be flying to Izmir.', tr: 'Yarın bu saatte İzmir’e uçuyor olacağız.', key: ['will', 'be', 'flying'], note: '"this time tomorrow" gelecekte belli bir an.' },
    { en: 'At nine o’clock, my father will be driving to the airport.', tr: 'Saat dokuzda babam havalimanına araba sürüyor olacak.', key: ['will', 'be', 'driving'], note: 'Belirli saatte süren gelecek iş.' },
    { en: 'Next week, the farmers will be harvesting the grapes.', tr: 'Gelecek hafta çiftçiler üzümleri topluyor olacak.', key: ['will', 'be', 'harvesting'], note: 'Gelecekte bir dönem boyunca süren iş.' },
    { en: 'I will be studying all evening, so please don’t call.', tr: 'Bütün akşam ders çalışıyor olacağım, lütfen arama.', key: ['will', 'be', 'studying'], note: 'Gelecekte meşgul olacağını belirtir.' },
    { en: 'This time next month, we will be living in our new house.', tr: 'Gelecek ay bu saatlerde yeni evimizde yaşıyor olacağız.', key: ['will', 'be', 'living'], note: 'Gelecekteki bir anda süren durum.' },
    { en: 'At noon tomorrow, my sister will be taking her exam.', tr: 'Yarın öğlen kız kardeşim sınavına giriyor olacak.', key: ['will', 'be', 'taking'], note: 'Belirli saat + süren iş.' },
    { en: 'We will be celebrating the holiday with the whole family.', tr: 'Bayramı bütün ailemizle kutluyor olacağız.', key: ['will', 'be', 'celebrating'], note: 'Gelecekte süren bir kutlama.' },
    { en: 'My mother will be cooking dinner when you arrive.', tr: 'Sen vardığında annem akşam yemeğini pişiriyor olacak.', key: ['will', 'be', 'cooking'], note: 'Varış anında süren iş.' },
    { en: 'This time next year, I will be working abroad.', tr: 'Gelecek yıl bu saatlerde yurt dışında çalışıyor olacağım.', key: ['will', 'be', 'working'], note: 'Uzak bir gelecekteki an.' },
    { en: 'The children will be sleeping by the time we get home.', tr: 'Biz eve vardığımızda çocuklar uyuyor olacak.', key: ['will', 'be', 'sleeping'], note: 'Varış anında süren durum.' },
    { en: 'At six o’clock, the muezzin will be calling the adhan.', tr: 'Saat altıda müezzin ezan okuyor olacak.', key: ['will', 'be', 'calling'], note: 'Belirli saatte süren gelecek iş.' },
    { en: 'We will be sailing along the coast this time tomorrow.', tr: 'Yarın bu saatte kıyı boyunca yelken açıyor olacağız.', key: ['will', 'be', 'sailing'], note: 'Gelecekte belirli bir anda süren iş.' },
    { en: 'My father will be repairing the tractor all morning.', tr: 'Babam bütün sabah traktörü tamir ediyor olacak.', key: ['will', 'be', 'repairing'], note: 'Uzun bir gelecek dönem boyunca süren iş.' },
    { en: 'Next Friday, the villagers will be preparing for the wedding.', tr: 'Gelecek cuma köylüler düğüne hazırlanıyor olacak.', key: ['will', 'be', 'preparing'], note: 'Gelecekteki bir dönem boyunca sürer.' },
    { en: 'I will be waiting for you outside the mosque.', tr: 'Seni caminin dışında bekliyor olacağım.', key: ['will', 'be', 'waiting'], note: 'Gelecekte belirli bir anda süren durum.' },
    { en: 'At this time next week, we will be climbing the mountain.', tr: 'Gelecek hafta bu saatlerde dağa tırmanıyor olacağız.', key: ['will', 'be', 'climbing'], note: 'Belirli gelecek an + süren eylem.' }
  ];

  MORE['future-perfect'] = [
    { en: 'By next year, my brother will have finished university.', tr: 'Gelecek yıla kadar kardeşim üniversiteyi bitirmiş olacak.', key: ['will', 'have', 'finished', 'by'], note: 'by + son tarih.' },
    { en: 'By the time you wake up, I will have made breakfast.', tr: 'Sen uyandığında ben kahvaltıyı hazırlamış olacağım.', key: ['will', 'have', 'made'], note: '"by the time" ile gelecekte tamamlanma.' },
    { en: 'By August, the workers will have finished the new road.', tr: 'Ağustosa kadar işçiler yeni yolu bitirmiş olacak.', key: ['will', 'have', 'finished'], note: 'Belirli bir gelecek tarihe kadar bitmiş iş.' },
    { en: 'By the end of the month, we will have saved enough money for the trip.', tr: 'Ay sonuna kadar yolculuk için yeterince para biriktirmiş olacağız.', key: ['will', 'have', 'saved'], note: '"by the end of" = son tarih.' },
    { en: 'By the time she arrives, we will have cleaned the whole house.', tr: 'O geldiğinde bütün evi temizlemiş olacağız.', key: ['will', 'have', 'cleaned'], note: 'Varıştan önce tamamlanmış olacak.' },
    { en: 'By the time the guests arrive, my mother will have cooked everything.', tr: 'Misafirler geldiğinde annem her şeyi pişirmiş olacak.', key: ['will', 'have', 'cooked'], note: 'Misafirlerden önce bitmiş olacak.' },
    { en: 'By next spring, they will have built the new mosque.', tr: 'Gelecek ilkbahara kadar yeni camiyi inşa etmiş olacaklar.', key: ['will', 'have', 'built'], note: 'build → built.' },
    { en: 'By tonight, I will have finished reading this book.', tr: 'Bu geceye kadar bu kitabı okumayı bitirmiş olacağım.', key: ['will', 'have', 'finished'], note: 'Belirli bir gelecek ana kadar tamamlanacak.' },
    { en: 'By the time we retire, we will have worked here for thirty years.', tr: 'Emekli olana kadar burada otuz yıl çalışmış olacağız.', key: ['will', 'have', 'worked'], note: 'Emekliliğe kadar tamamlanmış süre.' },
    { en: 'By next month, the farmers will have sold all the wheat.', tr: 'Gelecek aya kadar çiftçiler bütün buğdayı satmış olacak.', key: ['will', 'have', 'sold'], note: 'sell → sold.' },
    { en: 'By the time the film starts, we will have eaten dinner.', tr: 'Film başladığında akşam yemeğini yemiş olacağız.', key: ['will', 'have', 'eaten'], note: 'eat → eaten.' },
    { en: 'By next year, my sister will have learned to drive.', tr: 'Gelecek yıla kadar kız kardeşim araba kullanmayı öğrenmiş olacak.', key: ['will', 'have', 'learned'], note: 'Gelecekteki bir tarihe kadar tamamlanacak.' },
    { en: 'By six o’clock, my father will have returned from work.', tr: 'Saat altıya kadar babam işten dönmüş olacak.', key: ['will', 'have', 'returned'], note: 'Belirli saate kadar bitmiş olacak.' },
    { en: 'By the end of the summer, we will have painted the whole house.', tr: 'Yaz sonuna kadar bütün evi boyamış olacağız.', key: ['will', 'have', 'painted'], note: 'Yaz sonuna kadar tamamlanacak iş.' },
    { en: 'By the time you call, I will have left for the market.', tr: 'Sen aradığında pazara gitmiş olacağım.', key: ['will', 'have', 'left'], note: 'leave → left.' },
    { en: 'By next winter, my grandfather will have lived here for fifty years.', tr: 'Gelecek kışa kadar dedem burada elli yıldır yaşamış olacak.', key: ['will', 'have', 'lived', 'for'], note: 'Uzun bir sürenin gelecekteki bir tarihe kadar tamamlanması.' }
  ];

  MORE['future-perfect-continuous'] = [
    { en: 'By next June, my sister will have been studying medicine for six years.', tr: 'Gelecek haziranda kız kardeşim altı yıldır tıp okuyor olacak.', key: ['will', 'have', 'been', 'studying'], note: 'Gelecekteki bir ana kadar süren, biriken çalışma.' },
    { en: 'By the time we arrive, they will have been waiting for two hours.', tr: 'Biz vardığımızda iki saattir bekliyor olacaklar.', key: ['will', 'have', 'been', 'waiting'], note: 'Varış anına kadar süren bekleyiş.' },
    { en: 'By next month, my father will have been working at the factory for ten years.', tr: 'Gelecek aya kadar babam on yıldır fabrikada çalışıyor olacak.', key: ['will', 'have', 'been', 'working'], note: 'Uzun süredir devam eden, gelecekte de sürecek iş.' },
    { en: 'By nightfall, the farmers will have been harvesting the wheat for twelve hours.', tr: 'Gece olana kadar çiftçiler on iki saattir buğday hasat ediyor olacak.', key: ['will', 'have', 'been', 'harvesting'], note: 'Gece olana kadarki kesintisiz süre.' },
    { en: 'By the end of the year, we will have been living in this city for a decade.', tr: 'Yıl sonuna kadar bu şehirde on yıldır yaşıyor olacağız.', key: ['will', 'have', 'been', 'living'], note: 'Yıl sonuna kadar tamamlanan uzun süre.' },
    { en: 'By next week, my grandmother will have been knitting that blanket for two months.', tr: 'Gelecek haftaya kadar büyükannem o battaniyeyi iki aydır örüyor olacak.', key: ['will', 'have', 'been', 'knitting'], note: 'Gelecek bir tarihe kadar süren el işi.' },
    { en: 'By the time the guests leave, we will have been cooking all day.', tr: 'Misafirler ayrıldığında bütün gündür yemek pişiriyor olacağız.', key: ['will', 'have', 'been', 'cooking'], note: 'Ayrılış anına kadar süren yoğun iş.' },
    { en: 'By August, the builders will have been working on the mosque for a year.', tr: 'Ağustosa kadar inşaatçılar camide bir yıldır çalışıyor olacak.', key: ['will', 'have', 'been', 'working'], note: 'Bir yıllık sürenin gelecekte tamamlanması.' },
    { en: 'By midnight, we will have been travelling for fifteen hours.', tr: 'Gece yarısına kadar on beş saattir yolculuk ediyor olacağız.', key: ['will', 'have', 'been', 'travelling'], note: 'Gece yarısına kadar biriken yolculuk süresi.' },
    { en: 'By next spring, my uncle will have been running the shop for twenty years.', tr: 'Gelecek ilkbahara kadar amcam dükkânı yirmi yıldır işletiyor olacak.', key: ['will', 'have', 'been', 'running'], note: 'Uzun süredir devam eden, gelecekte de sürecek iş.' },
    { en: 'By the time she finishes, she will have been writing that book for three years.', tr: 'Bitirdiğinde üç yıldır o kitabı yazıyor olacak.', key: ['will', 'have', 'been', 'writing'], note: 'Bitiş anına kadar süren uzun uğraş.' },
    { en: 'By next year, we will have been waiting for the new road for a decade.', tr: 'Gelecek yıla kadar on yıldır yeni yolu bekliyor olacağız.', key: ['will', 'have', 'been', 'waiting'], note: 'Uzun bir bekleyişin gelecekte de sürmesi.' }
  ];

  /* ---- yukarıdaki cümlelerde geçen, sözlükte muhtemelen eksik kalan
     kelimeler; node tests/validate-content.js çıktısına göre güncellenir ---- */
  KI.glossary.addWords([
  'saz|saz (çalgı)|isim', 'shepherd|çoban|isim', 'weekday|hafta içi günü|isim',
  'fisherman|balıkçı|isim', 'fishermen|balıkçılar|isim', 'worker|işçi|isim',
  'neighbourhood|mahalle|isim', 'embroider|işlemek (nakış)|fiil', 'someone|biri|zamir',
  'shell|kabuk, deniz kabuğu|isim', 'bark|havlamak|fiil', 'pack|paketlemek, hazırlamak (çanta)|fiil',
  'smoke|sigara içmek, tütmek|fiil', 'cigarette|sigara|isim', 'anywhere|herhangi bir yerde|zarf',
  'pass|geçmek (sınav, zaman)|fiil', 'stale|bayat|sıfat', 'tractor|traktör|isim',
  'childhood|çocukluk|isim', 'earlier|daha erken|zarf', 'practise|pratik yapmak, çalışmak (enstrüman)|fiil',
  'problem|sorun|isim', 'entrance|giriş|isim', 'dam|baraj|isim',
  'renovate|yenilemek (ev vb.)|fiil', 'best|en iyi|sıfat', 'primary|ilk, birincil|sıfat',
  'kitten|yavru kedi|isim', 'along|boyunca|edat', 'shore|kıyı|isim',
  'postman|postacı|isim', 'born|doğmuş (be born: doğmak)|sıfat', 'manti|mantı (hamur yemeği)|isim',
  'up|yukarı; (break up, wake up gibi kalıplarda) tamamlanma anlamı katar|edat', 'everyone|herkes|zamir',
  'everything|her şey|zamir', 'down|aşağı; (break down: bozulmak) tamamlanma anlamı katar|zarf',
  'dark|karanlık|sıfat', 'barn|ahır|isim', 'quit|bırakmak (alışkanlık)|fiil',
  'inside|içeri, içeride|zarf', 'dolma|dolma (yemek)|isim', 'please|lütfen|ünlem',
  'here|burada, buraya|zarf', 'nightfall|gece olması, alacakaranlık|isim', 'builder|inşaatçı|isim'
  ]);

  /* ---- her zamanın examples dizisine ekle ---- */
  if (KI.tenses && KI.tenses.list) {
    KI.tenses.list.forEach(function (t) {
      if (MORE[t.id]) t.examples = (t.examples || []).concat(MORE[t.id]);
    });
  }
})(window.KI);
