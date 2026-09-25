/* ============================================================
   Gramer Atlası - examples-extra-6.js
   Altıncı örnek dalgası: okul, komşuluk yardımlaşması, hayvanlar,
   tatil/seyahat, teknoloji. tenses.js yüklendikten sonra examples
   dizisine eklenir. Bu dalgayla örnek havuzu ~7 katına ulaşır.
   ============================================================ */
(function (KI) {
  'use strict';

  var MORE = {};

  MORE['present-simple'] = [
    { en: 'The school bus picks up the children at eight.', tr: 'Okul servisi çocukları sekizde alır.', key: ['picks'], note: 'Sabit bir günlük düzen.' },
    { en: 'My neighbour lends me his ladder whenever I need it.', tr: 'Komşum ne zaman ihtiyacım olsa merdivenini bana ödünç verir.', key: ['lends'], note: 'Genel, tekrarlanan bir yardımlaşma.' },
    { en: 'The cat sleeps on the warm windowsill every afternoon.', tr: 'Kedi her öğleden sonra sıcak pencere pervazında uyur.', key: ['sleeps'], note: 'Günlük alışkanlık.' },
    { en: 'We usually travel by bus when we visit another city.', tr: 'Başka bir şehri ziyaret ederken genellikle otobüsle gideriz.', key: ['travel'], note: '"usually" ile geniş zaman.' },
    { en: 'My father repairs the neighbours’ bicycles for free.', tr: 'Babam komşuların bisikletlerini bedava tamir eder.', key: ['repairs'], note: 'Sürekli, iyilikli bir alışkanlık.' },
    { en: 'The teacher gives homework on Mondays and Thursdays.', tr: 'Öğretmen pazartesi ve perşembe günleri ödev verir.', key: ['gives'], note: 'Sabit bir program.' },
    { en: 'Our dog barks whenever the postman comes.', tr: 'Köpeğimiz postacı geldiğinde havlar.', key: ['barks'], note: 'Koşula bağlı genel bir davranış.' },
    { en: 'My grandmother uses a computer to talk to us online.', tr: 'Büyükannem bizimle konuşmak için bilgisayar kullanır.', key: ['uses'], note: 'Günümüz alışkanlığı.' },
    { en: 'The library lends books for two weeks.', tr: 'Kütüphane kitapları iki haftalığına ödünç verir.', key: ['lends'], note: 'Sabit bir kural/düzen.' },
    { en: 'We help our neighbours carry their shopping upstairs.', tr: 'Komşularımızın alışverişini üst kata taşımalarına yardım ederiz.', key: ['help'], note: 'Tekrarlanan iyi bir alışkanlık.' },
    { en: 'My phone rings loudly in the morning.', tr: 'Telefonum sabahları yüksek sesle çalar.', key: ['rings'], note: 'Günlük tekrarlanan bir olay.' },
    { en: 'The chickens lay eggs early in the morning.', tr: 'Tavuklar sabahın erken saatlerinde yumurtlar.', key: ['lay'], note: 'Doğal, günlük bir düzen.' },
    { en: 'My sister does not use social media much.', tr: 'Kız kardeşim sosyal medyayı pek kullanmaz.', key: ['does', 'not', 'use'], note: 'Kişisel bir alışkanlığın olumsuzu.' },
    { en: 'We pack sandwiches when we travel by train.', tr: 'Trenle seyahat ederken sandviç hazırlarız.', key: ['pack'], note: 'Genel bir alışkanlık.' },
    { en: 'The goats climb the rocky hills every day.', tr: 'Keçiler her gün kayalık tepelere tırmanır.', key: ['climb'], note: 'Doğal, tekrarlanan bir davranış.' },
    { en: 'My uncle sends us photos from his travels.', tr: 'Amcam gezilerinden bize fotoğraflar gönderir.', key: ['sends'], note: 'Tekrarlanan bir alışkanlık.' },
    { en: 'Does the new phone charge faster than the old one?', tr: 'Yeni telefon eskisinden daha hızlı şarj olur mu?', key: ['does', 'charge'], note: 'Genel bir soru: Does + yalın fiil.' },
    { en: 'My grandfather does not trust computers very much.', tr: 'Dedem bilgisayarlara pek güvenmez.', key: ['does', 'not', 'trust'], note: 'Kişisel, genel bir tutum.' },
    { en: 'We always thank our neighbours for their help.', tr: 'Komşularımıza yardımları için her zaman teşekkür ederiz.', key: ['always', 'thank'], note: '"always" ile geniş zaman.' },
    { en: 'The train station gets very crowded on holidays.', tr: 'Tren istasyonu bayramlarda çok kalabalık olur.', key: ['gets'], note: 'Tekrarlanan, genel bir durum.' }
  ];

  MORE['present-continuous'] = [
    { en: 'The children are getting on the school bus now.', tr: 'Çocuklar şimdi okul servisine biniyor.', key: ['are', 'getting'], note: 'Tam şu anda süren iş.' },
    { en: 'My neighbour is borrowing our ladder again.', tr: 'Komşumuz merdivenimizi yine ödünç alıyor.', key: ['is', 'borrowing'], note: 'Şu anda süren bir eylem.' },
    { en: 'The cat is sleeping on the windowsill in the sun.', tr: 'Kedi güneşte pencere pervazında uyuyor.', key: ['is', 'sleeping'], note: 'Şu anda süren bir durum.' },
    { en: 'We are packing our suitcases for the trip.', tr: 'Gezi için valizlerimizi hazırlıyoruz.', key: ['are', 'packing'], note: 'Şu anda süren bir hazırlık.' },
    { en: 'My father is fixing the neighbour’s bicycle in the yard.', tr: 'Babam avluda komşunun bisikletini tamir ediyor.', key: ['is', 'fixing'], note: 'Tam şu anda süren iş.' },
    { en: 'Look! The goats are climbing the steep rocks.', tr: 'Bak! Keçiler dik kayalara tırmanıyor.', key: ['are', 'climbing'], note: '"Look!" tam şu anı gösterir.' },
    { en: 'I am charging my phone before we leave.', tr: 'Biz çıkmadan önce telefonumu şarj ediyorum.', key: ['am', 'charging'], note: 'Şu anda süren bir hazırlık.' },
    { en: 'The teacher is explaining the new lesson right now.', tr: 'Öğretmen şu anda yeni dersi anlatıyor.', key: ['is', 'explaining'], note: '"right now" tam şu anı gösterir.' },
    { en: 'We are not travelling this weekend.', tr: 'Bu hafta sonu seyahat etmiyoruz.', key: ['are', 'not', 'travelling'], note: 'Bu hafta sonuna özgü bir plan.' },
    { en: 'Is the dog barking at the postman again?', tr: 'Köpek yine postacıya mı havlıyor?', key: ['is', 'barking'], note: 'Soru: Is + özne + V-ing.' },
    { en: 'My grandmother is video-calling my cousin abroad.', tr: 'Büyükannem yurt dışındaki kuzenimi görüntülü arıyor.', key: ['is', 'video-calling'], note: 'Şu anda süren bir iletişim.' },
    { en: 'The chickens are running around the yard.', tr: 'Tavuklar avluda koşuşturuyor.', key: ['are', 'running'], note: 'Şu anda süren bir hareket.' },
    { en: 'We are waiting for the train on platform two.', tr: 'İkinci perondan treni bekliyoruz.', key: ['are', 'waiting'], note: 'Şu anda süren bir bekleyiş.' },
    { en: 'My brother is downloading a new game on his phone.', tr: 'Kardeşim telefonuna yeni bir oyun indiriyor.', key: ['is', 'downloading'], note: 'Şu anda süren bir işlem.' },
    { en: 'Why is the printer making that strange noise?', tr: 'Yazıcı neden o garip sesi çıkarıyor?', key: ['is', 'making'], note: 'Soru kelimesiyle şimdiki zaman.' },
    { en: 'We are helping our neighbours move their furniture.', tr: 'Komşularımızın eşyalarını taşımasına yardım ediyoruz.', key: ['are', 'helping'], note: 'Bugün süren bir yardımlaşma.' },
    { en: 'The goats are eating the leaves off the low branches.', tr: 'Keçiler alçak dallardaki yaprakları yiyor.', key: ['are', 'eating'], note: 'Şu anda süren bir davranış.' },
    { en: 'My mother is talking to the neighbour over the fence.', tr: 'Annem çitin üzerinden komşuyla konuşuyor.', key: ['is', 'talking'], note: 'Şu anda süren bir sohbet.' },
    { en: 'We are booking our train tickets online.', tr: 'Tren biletlerimizi çevrimiçi alıyoruz.', key: ['are', 'booking'], note: 'Şu anda süren bir işlem.' },
    { en: 'The children are learning new words at school today.', tr: 'Çocuklar bugün okulda yeni kelimeler öğreniyor.', key: ['are', 'learning'], note: 'Bugüne özgü, süren bir etkinlik.' }
  ];

  MORE['present-perfect'] = [
    { en: 'My neighbour has borrowed our ladder three times this month.', tr: 'Komşumuz bu ay merdivenimizi üç kez ödünç aldı.', key: ['has', 'borrowed'], note: '"this month" henüz bitmemiş bir dönem.' },
    { en: 'We have already booked the train tickets.', tr: 'Tren biletlerini çoktan aldık.', key: ['have', 'already', 'booked'], note: '"already" ile bitmiş iş.' },
    { en: 'The cat has scratched the sofa again.', tr: 'Kedi kanepeyi yine tırmaladı.', key: ['has', 'scratched'], note: 'Sonuç şu an ortada.' },
    { en: 'Have you ever travelled by train at night?', tr: 'Hiç gece treniyle seyahat ettin mi?', key: ['have', 'travelled'], note: 'Hayat boyu deneyim sorusu.' },
    { en: 'My father has fixed the neighbour’s bicycle twice.', tr: 'Babam komşunun bisikletini iki kez tamir etti.', key: ['has', 'fixed'], note: 'Kaç kez olduğu değil, deneyim önemli.' },
    { en: 'We have not finished packing yet.', tr: 'Hazırlığı henüz bitirmedik.', key: ['have', 'not', 'finished', 'yet'], note: '"yet" olumsuzda kullanılır.' },
    { en: 'The teacher has already explained this rule.', tr: 'Öğretmen bu kuralı çoktan anlattı.', key: ['has', 'already', 'explained'], note: 'Sonucu hâlâ geçerli.' },
    { en: 'My phone has just finished charging.', tr: 'Telefonum şarj olmayı az önce bitirdi.', key: ['has', 'just', 'finished'], note: '"just" ile çok yakın geçmiş.' },
    { en: 'The chickens have laid five eggs today.', tr: 'Tavuklar bugün beş yumurta yumurtladı.', key: ['have', 'laid'], note: '"today" henüz bitmemiş bir dönem.' },
    { en: 'We have never missed a train before.', tr: 'Daha önce hiç treni kaçırmadık.', key: ['have', 'never', 'missed'], note: 'Hayat boyu bir deneyim.' },
    { en: 'My grandmother has learned how to use a smartphone.', tr: 'Büyükannem akıllı telefon kullanmayı öğrendi.', key: ['has', 'learned'], note: 'Sonuç şu an geçerli.' },
    { en: 'The goats have eaten all the leaves on that tree.', tr: 'Keçiler o ağaçtaki bütün yaprakları yemiş.', key: ['have', 'eaten'], note: 'eat → eaten.' },
    { en: 'We have thanked our neighbours many times for their help.', tr: 'Komşularımıza yardımları için birçok kez teşekkür ettik.', key: ['have', 'thanked'], note: 'Tekrarlanan bir hayat boyu deneyim.' },
    { en: 'Someone has left the printer on all night.', tr: 'Biri yazıcıyı bütün gece açık bırakmış.', key: ['has', 'left'], note: 'leave → left; sonuç ortada.' },
    { en: 'My sister has downloaded that game on her phone.', tr: 'Kız kardeşim o oyunu telefonuna indirmiş.', key: ['has', 'downloaded'], note: 'Sonuç şu an geçerli.' },
    { en: 'We have visited three cities this holiday.', tr: 'Bu tatilde üç şehir ziyaret ettik.', key: ['have', 'visited'], note: '"this holiday" henüz bitmemiş bir dönem.' },
    { en: 'The dog has never bitten anyone.', tr: 'Köpek hiç kimseyi ısırmadı.', key: ['has', 'never', 'bitten'], note: 'bite → bitten.' },
    { en: 'My father has just called the neighbour about the ladder.', tr: 'Babam merdiven hakkında komşuyu az önce aradı.', key: ['has', 'just', 'called'], note: '"just" ile çok yakın geçmiş.' },
    { en: 'We have not seen this teacher before.', tr: 'Bu öğretmeni daha önce hiç görmedik.', key: ['have', 'not', 'seen'], note: 'Hayat boyu bir deneyimsizlik.' },
    { en: 'My uncle has travelled to more than ten countries.', tr: 'Amcam ondan fazla ülkeye seyahat etti.', key: ['has', 'travelled'], note: 'Hayat boyu birikmiş deneyim.' }
  ];

  MORE['present-perfect-continuous'] = [
    { en: 'The children have been waiting for the school bus since seven.', tr: 'Çocuklar yediden beri okul servisini bekliyor.', key: ['have', 'been', 'waiting', 'since'], note: 'Başlangıç noktası: since seven.' },
    { en: 'My neighbour has been borrowing tools from us all summer.', tr: 'Komşumuz bütün yaz bizden alet ödünç alıyor.', key: ['have', 'been', 'borrowing'], note: '"all summer" kesintisiz süre.' },
    { en: 'We have been packing for the trip since yesterday.', tr: 'Dünden beri gezi için hazırlık yapıyoruz.', key: ['have', 'been', 'packing', 'since'], note: 'Dünden şimdiye süren hazırlık.' },
    { en: 'The cat has been sleeping on the sofa all day.', tr: 'Kedi bütün gün kanepede uyuyor.', key: ['has', 'been', 'sleeping'], note: '"all day" kesintisiz süre.' },
    { en: 'My father has been fixing bicycles for the neighbours for years.', tr: 'Babam yıllardır komşulara bisiklet tamir ediyor.', key: ['has', 'been', 'fixing', 'for'], note: 'Uzun süredir devam eden bir iyilik.' },
    { en: 'How long have you been learning to use that programme?', tr: 'O programı kullanmayı ne zamandır öğreniyorsun?', key: ['have', 'been', 'learning'], note: '"How long" süre sorar.' },
    { en: 'We have been travelling around the country for a month.', tr: 'Bir aydır ülkeyi geziyoruz.', key: ['have', 'been', 'travelling', 'for'], note: 'Süre: for a month.' },
    { en: 'The goats have been climbing the hill since dawn.', tr: 'Keçiler şafaktan beri tepeye tırmanıyor.', key: ['have', 'been', 'climbing', 'since'], note: 'Şafaktan şimdiye süren hareket.' },
    { en: 'My phone has been ringing all morning.', tr: 'Telefonum bütün sabah çalıyor.', key: ['has', 'been', 'ringing'], note: '"all morning" kesintisiz süre.' },
    { en: 'We have been waiting at the station for two hours.', tr: 'İki saattir istasyonda bekliyoruz.', key: ['have', 'been', 'waiting'], note: 'Süre: for two hours.' },
    { en: 'The teacher has been explaining the same rule for ten minutes.', tr: 'Öğretmen on dakikadır aynı kuralı anlatıyor.', key: ['has', 'been', 'explaining'], note: 'Süre: for ten minutes.' },
    { en: 'My grandmother has been chatting with her friend online for an hour.', tr: 'Büyükannem bir saattir arkadaşıyla çevrimiçi sohbet ediyor.', key: ['has', 'been', 'chatting'], note: 'Süre: for an hour.' },
    { en: 'We have been helping our neighbours move house since morning.', tr: 'Sabahtan beri komşularımızın taşınmasına yardım ediyoruz.', key: ['have', 'been', 'helping', 'since'], note: 'Sabahtan şimdiye süren yardım.' },
    { en: 'The dog has been barking at the gate for ten minutes.', tr: 'Köpek on dakikadır kapıda havlıyor.', key: ['has', 'been', 'barking'], note: 'Süre: for ten minutes.' },
    { en: 'I have been downloading this file since lunchtime.', tr: 'Öğle yemeğinden beri bu dosyayı indiriyorum.', key: ['have', 'been', 'downloading', 'since'], note: 'Başlangıç noktası: since lunchtime.' }
  ];

  MORE['past-simple'] = [
    { en: 'The school bus arrived ten minutes late this morning.', tr: 'Okul servisi bu sabah on dakika geç geldi.', key: ['arrived'], note: 'Belirli bir geçmiş olay.' },
    { en: 'My neighbour returned our ladder yesterday.', tr: 'Komşumuz merdivenimizi dün geri getirdi.', key: ['returned'], note: 'Belirli geçmiş zaman: yesterday.' },
    { en: 'The cat knocked a glass off the table.', tr: 'Kedi masadan bir bardağı düşürdü.', key: ['knocked'], note: 'Düzenli fiil: knock → knocked.' },
    { en: 'We travelled to the coast by train last month.', tr: 'Geçen ay trenle sahile gittik.', key: ['travelled'], note: 'Belirli geçmiş zaman: last month.' },
    { en: 'My father fixed three bicycles last weekend.', tr: 'Babam geçen hafta sonu üç bisiklet tamir etti.', key: ['fixed'], note: 'Bitmiş bir geçmiş iş.' },
    { en: 'The teacher explained the lesson twice.', tr: 'Öğretmen dersi iki kez anlattı.', key: ['explained'], note: 'Belirli sayıda tekrarlanan geçmiş olay.' },
    { en: 'My phone fell into the sink this morning.', tr: 'Telefonum bu sabah lavaboya düştü.', key: ['fell'], note: 'fall → fell.' },
    { en: 'The chickens laid ten eggs last week.', tr: 'Tavuklar geçen hafta on yumurta yumurtladı.', key: ['laid'], note: 'lay → laid.' },
    { en: 'We missed the last train by two minutes.', tr: 'Son treni iki dakika farkla kaçırdık.', key: ['missed'], note: 'Bitmiş bir geçmiş olay.' },
    { en: 'My grandmother learned to use a smartphone last year.', tr: 'Büyükannem geçen yıl akıllı telefon kullanmayı öğrendi.', key: ['learned'], note: 'Belirli geçmiş zaman: last year.' },
    { en: 'The goats climbed all the way to the top of the hill.', tr: 'Keçiler tepenin en üstüne kadar tırmandı.', key: ['climbed'], note: 'Bitmiş bir hareket.' },
    { en: 'I downloaded the wrong file by mistake.', tr: 'Yanlışlıkla yanlış dosyayı indirdim.', key: ['downloaded'], note: 'Düzenli fiil: download → downloaded.' },
    { en: 'We thanked the neighbours for their kindness.', tr: 'Komşulara nezaketleri için teşekkür ettik.', key: ['thanked'], note: 'Bitmiş, belirli bir geçmiş olay.' },
    { en: 'The dog bit the postman’s bag, not his hand.', tr: 'Köpek postacının elini değil çantasını ısırdı.', key: ['bit'], note: 'bite → bit.' },
    { en: 'My uncle sent us postcards from every city he visited.', tr: 'Amcam ziyaret ettiği her şehirden bize kartpostal gönderdi.', key: ['sent'], note: 'send → sent.' },
    { en: 'We booked our tickets two months in advance.', tr: 'Biletlerimizi iki ay önceden aldık.', key: ['booked'], note: 'Düzenli fiil: book → booked.' },
    { en: 'The printer stopped working right before the exam.', tr: 'Yazıcı sınavdan hemen önce çalışmayı bıraktı.', key: ['stopped'], note: 'Bitmiş bir geçmiş olay.' },
    { en: 'My sister helped the new student find her classroom.', tr: 'Kız kardeşim yeni öğrencinin sınıfını bulmasına yardım etti.', key: ['helped'], note: 'Düzenli fiil: help → helped.' },
    { en: 'We saw a shooting star on the way home.', tr: 'Eve dönerken bir kayan yıldız gördük.', key: ['saw'], note: 'see → saw.' },
    { en: 'The children fed the chickens before breakfast.', tr: 'Çocuklar kahvaltıdan önce tavukları besledi.', key: ['fed'], note: 'feed → fed.' }
  ];

  MORE['past-continuous'] = [
    { en: 'The children were waiting for the bus when it began to rain.', tr: 'Yağmur başladığında çocuklar otobüsü bekliyordu.', key: ['were', 'waiting', 'began'], note: 'Süren iş + kısa olay.' },
    { en: 'My neighbour was borrowing our ladder when I called him.', tr: 'Onu aradığımda komşum merdivenimizi ödünç alıyordu.', key: ['was', 'borrowing', 'called'], note: 'Süren iş + kısa olay.' },
    { en: 'The cat was sleeping when the phone rang.', tr: 'Telefon çaldığında kedi uyuyordu.', key: ['was', 'sleeping', 'rang'], note: 'Uzun iş + kısa olay.' },
    { en: 'We were travelling when we heard the news.', tr: 'Haberi duyduğumuzda seyahat ediyorduk.', key: ['were', 'travelling', 'heard'], note: 'Süren iş + kısa olay.' },
    { en: 'My father was fixing the bicycle while I was doing my homework.', tr: 'Ben ödevimi yaparken babam bisikleti tamir ediyordu.', key: ['was', 'fixing', 'was', 'doing'], note: 'İki eş zamanlı geçmiş iş.' },
    { en: 'The teacher was explaining the lesson when the bell rang.', tr: 'Zil çaldığında öğretmen dersi anlatıyordu.', key: ['was', 'explaining', 'rang'], note: 'Süren iş + kısa olay.' },
    { en: 'I was charging my phone when the lights went out.', tr: 'Işıklar gittiğinde telefonumu şarj ediyordum.', key: ['was', 'charging', 'went'], note: 'Süren iş + kısa olay.' },
    { en: 'The goats were climbing the hill while the sun was rising.', tr: 'Güneş doğarken keçiler tepeye tırmanıyordu.', key: ['were', 'climbing', 'was', 'rising'], note: 'İki eş zamanlı iş.' },
    { en: 'We were waiting on the platform when the train finally came.', tr: 'Tren nihayet geldiğinde peronda bekliyorduk.', key: ['were', 'waiting', 'came'], note: 'Uzun bekleyiş + kısa olay.' },
    { en: 'My grandmother was chatting online when her computer crashed.', tr: 'Bilgisayarı çöktüğünde büyükannem çevrimiçi sohbet ediyordu.', key: ['was', 'chatting', 'crashed'], note: 'Süren iş + ani olay.' },
    { en: 'We were helping the neighbours when it started to snow.', tr: 'Kar yağmaya başladığında komşulara yardım ediyorduk.', key: ['were', 'helping', 'started'], note: 'Süren iş + kısa olay.' },
    { en: 'The dog was barking at the gate while we were eating dinner.', tr: 'Biz yemek yerken köpek kapıda havlıyordu.', key: ['was', 'barking', 'were', 'eating'], note: 'İki eş zamanlı geçmiş iş.' },
    { en: 'I was downloading the file when the internet stopped working.', tr: 'İnternet çalışmayı bırakırken dosyayı indiriyordum.', key: ['was', 'downloading', 'stopped'], note: 'Süren iş + kısa olay.' },
    { en: 'We were packing our bags when the taxi arrived early.', tr: 'Taksi erken geldiğinde çantalarımızı hazırlıyorduk.', key: ['were', 'packing', 'arrived'], note: 'Süren iş + kısa olay.' },
    { en: 'The chickens were running around when the fox appeared.', tr: 'Tilki ortaya çıktığında tavuklar koşuşturuyordu.', key: ['were', 'running', 'appeared'], note: 'Süren iş + ani olay.' }
  ];

  MORE['past-perfect'] = [
    { en: 'By the time the bus arrived, the children had already left for school.', tr: 'Otobüs geldiğinde çocuklar okula çoktan gitmişti.', key: ['had', 'already', 'left'], note: 'Otobüsten önce olan iş.' },
    { en: 'My neighbour had returned the ladder before I even asked.', tr: 'Ben sormadan önce komşum merdiveni çoktan geri getirmişti.', key: ['had', 'returned', 'before'], note: 'Sormadan önce biten iş.' },
    { en: 'The cat had already eaten before we got home.', tr: 'Biz eve varmadan önce kedi çoktan yemişti.', key: ['had', 'already', 'eaten'], note: 'eat → eaten.' },
    { en: 'We had booked our tickets before the price went up.', tr: 'Fiyat artmadan önce biletlerimizi almıştık.', key: ['had', 'booked', 'before'], note: 'Fiyat artışından önce biten iş.' },
    { en: 'My father had fixed the bicycle before the boy came back for it.', tr: 'Çocuk geri gelmeden önce babam bisikleti tamir etmişti.', key: ['had', 'fixed', 'before'], note: 'Gelmeden önce biten iş.' },
    { en: 'By the time class started, the teacher had already explained the rule.', tr: 'Ders başladığında öğretmen kuralı çoktan anlatmıştı.', key: ['had', 'already', 'explained'], note: 'Başlamadan önce biten iş.' },
    { en: 'I realized my phone had died before the important call.', tr: 'Önemli aramadan önce telefonumun öldüğünü fark ettim.', key: ['had', 'died', 'realized'], note: 'Fark etmeden önceki durum.' },
    { en: 'The chickens had already gone into the coop before it got dark.', tr: 'Hava kararmadan önce tavuklar kümese çoktan girmişti.', key: ['had', 'already', 'gone'], note: 'go → gone.' },
    { en: 'We had never travelled abroad before that summer.', tr: 'O yaza kadar hiç yurt dışına seyahat etmemiştik.', key: ['had', 'never', 'travelled'], note: 'Belirli bir yaza kadarki deneyimsizlik.' },
    { en: 'My grandmother had already learned to video-call before we bought her a new phone.', tr: 'Biz ona yeni bir telefon almadan önce büyükannem görüntülü aramayı çoktan öğrenmişti.', key: ['had', 'already', 'learned'], note: 'Almadan önce olan gelişme.' },
    { en: 'The goats had eaten all the grass before the farmer arrived.', tr: 'Çiftçi gelmeden önce keçiler bütün otu yemişti.', key: ['had', 'eaten', 'before'], note: 'Varıştan önce biten iş.' },
    { en: 'We had already helped our neighbours by the time they asked.', tr: 'Onlar sormadan önce komşularımıza çoktan yardım etmiştik.', key: ['had', 'already', 'helped'], note: 'Sormadan önce biten iş.' },
    { en: 'The dog had barked all night before it finally fell asleep.', tr: 'Nihayet uyuyakalmadan önce köpek bütün gece havlamıştı.', key: ['had', 'barked', 'before'], note: 'Uyumadan önceki süreç.' },
    { en: 'By the time we checked, the file had already downloaded.', tr: 'Biz kontrol ettiğimizde dosya çoktan inmişti.', key: ['had', 'already', 'downloaded'], note: 'Kontrolden önce biten iş.' }
  ];

  MORE['past-perfect-continuous'] = [
    { en: 'The children had been waiting for an hour before the bus finally came.', tr: 'Otobüs nihayet geldiğinde çocuklar bir saattir bekliyordu.', key: ['had', 'been', 'waiting'], note: 'Otobüsten önceki bekleyiş.' },
    { en: 'My father had been fixing that bicycle for a week before he gave up.', tr: 'Vazgeçmeden önce babam o bisikleti bir haftadır tamir ediyordu.', key: ['had', 'been', 'fixing'], note: 'Vazgeçmeden önceki süreç.' },
    { en: 'We had been travelling for days before we reached the border.', tr: 'Sınıra varmadan önce günlerdir seyahat ediyorduk.', key: ['had', 'been', 'travelling'], note: 'Varmadan önceki süreç.' },
    { en: 'The cat had been sleeping all day before it suddenly ran outside.', tr: 'Aniden dışarı koşmadan önce kedi bütün gün uyuyordu.', key: ['had', 'been', 'sleeping'], note: 'Koşmadan önceki süreç.' },
    { en: 'My grandmother had been learning English for months before she visited us.', tr: 'Bizi ziyaret etmeden önce büyükannem aylardır İngilizce öğreniyordu.', key: ['had', 'been', 'learning'], note: 'Ziyaretten önceki süreç.' },
    { en: 'We had been waiting at the station since dawn before the train arrived.', tr: 'Tren gelmeden önce şafaktan beri istasyonda bekliyorduk.', key: ['had', 'been', 'waiting'], note: 'Trenden önceki uzun bekleyiş.' },
    { en: 'The goats had been climbing since morning before they reached the top.', tr: 'Zirveye varmadan önce keçiler sabahtan beri tırmanıyordu.', key: ['had', 'been', 'climbing'], note: 'Varmadan önceki süreç.' },
    { en: 'I had been downloading the file for hours before it finally finished.', tr: 'Nihayet bitmeden önce dosyayı saatlerdir indiriyordum.', key: ['had', 'been', 'downloading'], note: 'Bitmeden önceki süreç.' },
    { en: 'We had been helping our neighbours for years before they moved away.', tr: 'Taşınmadan önce komşularımıza yıllardır yardım ediyorduk.', key: ['had', 'been', 'helping'], note: 'Taşınmadan önceki uzun süreç.' },
    { en: 'The dog had been barking for an hour before we let it inside.', tr: 'İçeri almadan önce köpek bir saattir havlıyordu.', key: ['had', 'been', 'barking'], note: 'İçeri almadan önceki süreç.' },
    { en: 'She had been chatting with him for hours before she noticed the time.', tr: 'Saati fark etmeden önce onunla saatlerdir sohbet ediyordu.', key: ['had', 'been', 'chatting'], note: 'Fark etmeden önceki süreç.' }
  ];

  MORE['future-simple'] = [
    { en: 'The school bus will arrive at eight tomorrow.', tr: 'Okul servisi yarın sekizde gelecek.', key: ['will', 'arrive'], note: 'Gelecekle ilgili sabit bir bilgi.' },
    { en: 'I will return the ladder to my neighbour tomorrow.', tr: 'Merdiveni yarın komşuma geri vereceğim.', key: ['will', 'return'], note: 'Anlık verilen bir söz.' },
    { en: 'We will travel to the countryside next weekend.', tr: 'Gelecek hafta sonu kırsala gideceğiz.', key: ['will', 'travel'], note: 'Belirli bir gelecek plan.' },
    { en: 'My father will fix the neighbour’s bicycle tomorrow.', tr: 'Babam yarın komşunun bisikletini tamir edecek.', key: ['will', 'fix'], note: 'Gelecekteki basit bir plan.' },
    { en: 'The teacher will explain the new rule next week.', tr: 'Öğretmen gelecek hafta yeni kuralı anlatacak.', key: ['will', 'explain'], note: 'Gelecekle ilgili basit bir bilgi.' },
    { en: 'I will charge my phone before we leave the house.', tr: 'Evden çıkmadan önce telefonumu şarj edeceğim.', key: ['will', 'charge'], note: 'Anlık verilen bir karar.' },
    { en: 'Will the goats reach the top of the hill today?', tr: 'Keçiler bugün tepenin zirvesine ulaşacak mı?', key: ['will', 'reach'], note: 'Soru: Will + özne + V1?' },
    { en: 'We will not miss the train this time.', tr: 'Bu sefer treni kaçırmayacağız.', key: ['will', 'not', 'miss'], note: 'Olumsuz gelecek zaman.' },
    { en: 'I think the new phone will be cheaper next month.', tr: 'Sanırım yeni telefon gelecek ay daha ucuz olacak.', key: ['will', 'be'], note: 'I think + will: kişisel tahmin.' },
    { en: 'My grandmother will learn to use the new app.', tr: 'Büyükannem yeni uygulamayı kullanmayı öğrenecek.', key: ['will', 'learn'], note: 'Gelecekle ilgili bir niyet.' },
    { en: 'We will help our neighbours paint the fence.', tr: 'Komşularımıza çiti boyamalarında yardım edeceğiz.', key: ['will', 'help'], note: 'Gelecekteki bir plan/söz.' },
    { en: 'The chickens will lay more eggs in the spring.', tr: 'Tavuklar ilkbaharda daha çok yumurta yumurtlayacak.', key: ['will', 'lay'], note: 'Doğal bir gelecek tahmini.' },
    { en: 'Don’t worry, I will download the file for you.', tr: 'Merak etme, dosyayı senin için indireceğim.', key: ['will', 'download'], note: 'O anda verilen bir söz.' },
    { en: 'We will visit three more cities before we go home.', tr: 'Eve dönmeden önce üç şehir daha ziyaret edeceğiz.', key: ['will', 'visit'], note: 'Belirli bir gelecek plan.' },
    { en: 'Will you feed the chickens while I am away?', tr: 'Ben yokken tavukları besler misin?', key: ['will', 'feed'], note: 'Rica: Will you...?' },
    { en: 'My uncle will send us postcards from his trip.', tr: 'Amcam gezisinden bize kartpostal gönderecek.', key: ['will', 'send'], note: 'Gelecekteki bir söz.' }
  ];

  MORE['future-continuous'] = [
    { en: 'This time tomorrow, we will be travelling to the coast.', tr: 'Yarın bu saatte sahile doğru yol alıyor olacağız.', key: ['will', 'be', 'travelling'], note: 'Belirli bir gelecek anda süren iş.' },
    { en: 'At eight o’clock, the children will be getting on the school bus.', tr: 'Saat sekizde çocuklar okul servisine biniyor olacak.', key: ['will', 'be', 'getting'], note: 'Belirli saatte süren gelecek iş.' },
    { en: 'Next week, my father will be fixing the neighbours’ bicycles again.', tr: 'Gelecek hafta babam yine komşuların bisikletlerini tamir ediyor olacak.', key: ['will', 'be', 'fixing'], note: 'Gelecekteki bir dönem boyunca sürer.' },
    { en: 'This time next month, we will be living near the sea.', tr: 'Gelecek ay bu saatlerde deniz kenarında yaşıyor olacağız.', key: ['will', 'be', 'living'], note: 'Gelecekte belirli bir anda süren durum.' },
    { en: 'At noon, the teacher will be explaining the exam rules.', tr: 'Öğlen öğretmen sınav kurallarını anlatıyor olacak.', key: ['will', 'be', 'explaining'], note: 'Belirli saatte süren gelecek iş.' },
    { en: 'We will be waiting at the station when your train arrives.', tr: 'Trenin geldiğinde istasyonda bekliyor olacağız.', key: ['will', 'be', 'waiting'], note: 'Varış anında süren iş.' },
    { en: 'My grandmother will be chatting online with her friends tonight.', tr: 'Büyükannem bu gece arkadaşlarıyla çevrimiçi sohbet ediyor olacak.', key: ['will', 'be', 'chatting'], note: 'Belirli bir gelecek anda süren iş.' },
    { en: 'This time next year, my brother will be studying at university.', tr: 'Gelecek yıl bu saatlerde kardeşim üniversitede okuyor olacak.', key: ['will', 'be', 'studying'], note: 'Uzak bir gelecekteki an.' },
    { en: 'The goats will be climbing the hill by the time we arrive.', tr: 'Biz vardığımızda keçiler tepeye tırmanıyor olacak.', key: ['will', 'be', 'climbing'], note: 'Varış anında süren iş.' },
    { en: 'We will be helping our neighbours move all afternoon.', tr: 'Bütün öğleden sonra komşularımızın taşınmasına yardım ediyor olacağız.', key: ['will', 'be', 'helping'], note: 'Uzun bir gelecek dönem boyunca sürer.' }
  ];

  MORE['future-perfect'] = [
    { en: 'By eight o’clock, the school bus will have picked up all the children.', tr: 'Saat sekize kadar okul servisi bütün çocukları almış olacak.', key: ['will', 'have', 'picked'], note: 'Belirli bir saate kadar tamamlanacak.' },
    { en: 'By tomorrow, my father will have fixed all the bicycles.', tr: 'Yarına kadar babam bütün bisikletleri tamir etmiş olacak.', key: ['will', 'have', 'fixed'], note: 'Belirli bir tarihe kadar tamamlanacak.' },
    { en: 'By the time we arrive, the teacher will have finished the lesson.', tr: 'Biz vardığımızda öğretmen dersi bitirmiş olacak.', key: ['will', 'have', 'finished'], note: 'Varıştan önce tamamlanacak.' },
    { en: 'By next year, my grandmother will have learned to use every app on her phone.', tr: 'Gelecek yıla kadar büyükannem telefonundaki her uygulamayı kullanmayı öğrenmiş olacak.', key: ['will', 'have', 'learned'], note: 'Belirli bir tarihe kadar tamamlanacak.' },
    { en: 'By noon, the chickens will have laid all their eggs for the day.', tr: 'Öğlene kadar tavuklar günün bütün yumurtalarını yummuş olacak.', key: ['will', 'have', 'laid'], note: 'Belirli bir saate kadar tamamlanacak.' },
    { en: 'By the end of the trip, we will have visited five cities.', tr: 'Gezi sonuna kadar beş şehir ziyaret etmiş olacağız.', key: ['will', 'have', 'visited'], note: 'Gezi sonuna kadar tamamlanacak.' },
    { en: 'By tonight, I will have downloaded all the files I need.', tr: 'Bu geceye kadar ihtiyacım olan bütün dosyaları indirmiş olacağım.', key: ['will', 'have', 'downloaded'], note: 'Belirli bir ana kadar tamamlanacak.' },
    { en: 'By the time you call, we will have already left for the station.', tr: 'Sen aradığında istasyona doğru çoktan yola çıkmış olacağız.', key: ['will', 'have', 'left'], note: 'leave → left.' },
    { en: 'By next month, we will have helped the neighbours finish their new fence.', tr: 'Gelecek aya kadar komşuların yeni çitini bitirmesine yardım etmiş olacağız.', key: ['will', 'have', 'helped'], note: 'Belirli bir tarihe kadar tamamlanacak.' },
    { en: 'By the time the goats come down, they will have eaten all the grass on the hill.', tr: 'Keçiler aşağı indiğinde tepedeki bütün otu yemiş olacaklar.', key: ['will', 'have', 'eaten'], note: 'İnişten önce tamamlanacak.' }
  ];

  MORE['future-perfect-continuous'] = [
    { en: 'By the time the bus arrives, the children will have been waiting for twenty minutes.', tr: 'Otobüs geldiğinde çocuklar yirmi dakikadır bekliyor olacak.', key: ['will', 'have', 'been', 'waiting'], note: 'Varış anına kadar biriken süre.' },
    { en: 'By next year, my father will have been fixing bicycles for the neighbours for a decade.', tr: 'Gelecek yıla kadar babam on yıldır komşulara bisiklet tamir ediyor olacak.', key: ['will', 'have', 'been', 'fixing'], note: 'On yıllık sürenin gelecekte tamamlanması.' },
    { en: 'By the time we land, we will have been travelling for fifteen hours.', tr: 'Biz indiğimizde on beş saattir seyahat ediyor olacağız.', key: ['will', 'have', 'been', 'travelling'], note: 'İniş anına kadar biriken süre.' },
    { en: 'By next month, my grandmother will have been learning English for a year.', tr: 'Gelecek aya kadar büyükannem bir yıldır İngilizce öğreniyor olacak.', key: ['will', 'have', 'been', 'learning'], note: 'Bir yıllık sürenin gelecekte tamamlanması.' },
    { en: 'By noon, the goats will have been climbing since early morning.', tr: 'Öğlene kadar keçiler sabahın erken saatlerinden beri tırmanıyor olacak.', key: ['will', 'have', 'been', 'climbing'], note: 'Öğlene kadar biriken süre.' },
    { en: 'By the time it finishes, I will have been downloading this file for two days.', tr: 'Bittiğinde bu dosyayı iki gündür indiriyor olacağım.', key: ['will', 'have', 'been', 'downloading'], note: 'Bitişe kadar biriken süre.' },
    { en: 'By next spring, we will have been helping that family for a whole year.', tr: 'Gelecek ilkbahara kadar o aileye tam bir yıldır yardım ediyor olacağız.', key: ['will', 'have', 'been', 'helping'], note: 'Bir yıllık sürenin gelecekte tamamlanması.' },
    { en: 'By the time we return, the dog will have been staying with our neighbours for a week.', tr: 'Biz döndüğümüzde köpek bir haftadır komşularımızda kalıyor olacak.', key: ['will', 'have', 'been', 'staying'], note: 'Dönüş anına kadar biriken süre.' }
  ];

  /* ---- yukarıdaki cümlelerde geçen, sözlükte muhtemelen eksik kalan
     kelimeler; node tests/validate-content.js çıktısına göre güncellenir ---- */
  KI.glossary.addWords([
  'whenever|her ne zaman, -dığında her seferinde|bağlaç', 'windowsill|pencere pervazı|isim',
  'neighbours\'|komşuların|isim', 'online|çevrimiçi|sıfat', 'upstairs|üst kat, yukarı kata|zarf',
  'loudly|yüksek sesle|zarf', 'lay|yumurtlamak, koymak|fiil', 'laid|yumurtladı (lay geçmiş/V3)|fiil',
  'rocky|kayalık|sıfat', 'charge|şarj etmek|fiil', 'faster|daha hızlı|zarf',
  'steep|dik|sıfat', 'video-call|görüntülü aramak|fiil', 'noise|gürültü, ses|isim',
  'low|alçak|sıfat', 'scratch|tırmalamak|fiil', 'smartphone|akıllı telefon|isim',
  'anyone|herhangi biri, hiç kimse|zamir', 'programme|program|isim', 'chat|sohbet etmek|fiil',
  'lunchtime|öğle yemeği vakti|isim', 'kindness|nezaket, iyilik|isim', 'postcard|kartpostal|isim',
  'advance|önceden (in advance)|isim', 'bell|zil, çan|isim', 'even|hatta, bile|zarf',
  'class|sınıf, ders|isim', 'die|ölmek, bitmek (pil için)|fiil', 'coop|kümes|isim',
  'cheaper|daha ucuz|sıfat', 'app|uygulama|isim', 'land|inmek (uçak vb.), toprak|fiil'
  ]);

  /* ---- her zamanın examples dizisine ekle ---- */
  if (KI.tenses && KI.tenses.list) {
    KI.tenses.list.forEach(function (t) {
      if (MORE[t.id]) t.examples = (t.examples || []).concat(MORE[t.id]);
    });
  }
})(window.KI);
