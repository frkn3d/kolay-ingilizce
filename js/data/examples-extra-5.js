/* ============================================================
   Gramer Atlası — examples-extra-5.js
   Beşinci örnek dalgası: mevsimler, doğa, çocukluk oyunları,
   spor, gelenekler, yolculuk. tenses.js yüklendikten sonra
   examples dizisine eklenir.
   ============================================================ */
(function (KI) {
  'use strict';

  var MORE = {};

  MORE['present-simple'] = [
    { en: 'The snow covers the mountains from November to April.', tr: 'Kar dağları kasımdan nisana kadar kaplar.', key: ['covers'], note: 'Mevsimlik, tekrarlanan bir doğa gerçeği.' },
    { en: 'My grandfather plays chess with his friends every afternoon.', tr: 'Dedem her öğleden sonra arkadaşlarıyla satranç oynar.', key: ['plays'], note: 'Günlük tekrarlanan bir alışkanlık.' },
    { en: 'The river floods the fields almost every spring.', tr: 'Nehir hemen her ilkbahar tarlaları su altında bırakır.', key: ['floods'], note: 'Doğal, tekrarlanan bir olay.' },
    { en: 'Children fly kites on windy days.', tr: 'Çocuklar rüzgârlı günlerde uçurtma uçurur.', key: ['fly'], note: 'Genel bir davranış kalıbı.' },
    { en: 'My mother waters the roses every morning.', tr: 'Annem her sabah gülleri sular.', key: ['waters'], note: 'Günlük tekrarlanan bir bakım.' },
    { en: 'The village school opens in September.', tr: 'Köy okulu eylülde açılır.', key: ['opens'], note: 'Sabit, yıllık bir takvim.' },
    { en: 'My uncle drives a truck between the two cities.', tr: 'Amcam iki şehir arasında kamyon sürer.', key: ['drives'], note: 'Sürekli bir meslek.' },
    { en: 'The nightingale sings beautifully in the spring.', tr: 'Bülbül ilkbaharda güzel öter.', key: ['sings'], note: 'Doğaya dair genel bir gerçek.' },
    { en: 'We hang a wreath on the door for the new year.', tr: 'Yeni yıl için kapıya bir çelenk asarız.', key: ['hang'], note: 'Yıllık tekrarlanan bir gelenek.' },
    { en: 'The tide comes in twice a day.', tr: 'Gelgit günde iki kez olur.', key: ['comes'], note: 'Doğal, düzenli bir döngü.' },
    { en: 'My father checks the beehives every weekend.', tr: 'Babam her hafta sonu arı kovanlarını kontrol eder.', key: ['checks'], note: 'Düzenli bir alışkanlık.' },
    { en: 'The children build sandcastles on the beach every summer.', tr: 'Çocuklar her yaz sahilde kum kaleler yapar.', key: ['build'], note: 'Mevsimlik tekrarlanan bir oyun.' },
    { en: 'My sister does not eat meat on Fridays.', tr: 'Kız kardeşim cuma günleri et yemez.', key: ['does', 'not', 'eat'], note: 'Kişisel, tekrarlanan bir tercih.' },
    { en: 'The old windmill still turns when the wind blows.', tr: 'Eski yel değirmeni rüzgâr estiğinde hâlâ döner.', key: ['turns'], note: 'Koşula bağlı genel bir gerçek.' },
    { en: 'We spend every August at my grandparents’ farm.', tr: 'Her ağustosu büyükanne ve büyükbabamın çiftliğinde geçiririz.', key: ['spend'], note: 'Yıllık, tekrarlanan bir alışkanlık.' },
    { en: 'My brother trains at the football club three times a week.', tr: 'Kardeşim futbol kulübünde haftada üç kez antrenman yapar.', key: ['trains'], note: 'Düzenli tekrar sıklığı belirtilir.' },
    { en: 'The bees make honey from the mountain flowers.', tr: 'Arılar dağ çiçeklerinden bal yapar.', key: ['make'], note: 'Genel, doğal bir gerçek.' },
    { en: 'Does the shepherd know every sheep by name?', tr: 'Çoban her koyunu adıyla bilir mi?', key: ['does', 'know'], note: 'Soru: Does + yalın fiil.' },
    { en: 'My grandmother never throws away old bread.', tr: 'Büyükannem asla eski ekmeği atmaz.', key: ['never', 'throws'], note: '"never" ile geniş zaman.' },
    { en: 'The lighthouse warns ships at night.', tr: 'Deniz feneri geceleri gemileri uyarır.', key: ['warns'], note: 'Sürekli bir görev.' }
  ];

  MORE['present-continuous'] = [
    { en: 'The leaves are falling early this year.', tr: 'Yapraklar bu yıl erken düşüyor.', key: ['are', 'falling'], note: 'Bu mevsime özgü, süren bir durum.' },
    { en: 'My father is checking the beehives right now.', tr: 'Babam şu anda arı kovanlarını kontrol ediyor.', key: ['is', 'checking'], note: 'Tam şu anda süren iş.' },
    { en: 'We are packing our bags for the mountain trip.', tr: 'Dağ gezisi için çantalarımızı hazırlıyoruz.', key: ['are', 'packing'], note: 'Şu anda süren hazırlık.' },
    { en: 'Look! The nightingale is singing in the almond tree.', tr: 'Bak! Bülbül badem ağacında ötüyor.', key: ['is', 'singing'], note: '"Look!" tam şu anı gösterir.' },
    { en: 'My brother is training hard for the tournament.', tr: 'Kardeşim turnuva için sıkı çalışıyor.', key: ['is', 'training'], note: 'Bu dönemde süren bir hazırlık.' },
    { en: 'The children are building a sandcastle on the beach.', tr: 'Çocuklar sahilde bir kum kale yapıyor.', key: ['are', 'building'], note: 'Şu anda süren bir oyun.' },
    { en: 'We are not swimming today; the sea is too cold.', tr: 'Bugün yüzmüyoruz; deniz çok soğuk.', key: ['are', 'not', 'swimming'], note: 'Bugüne özgü bir durum.' },
    { en: 'Is the tide coming in now?', tr: 'Gelgit şimdi mi geliyor?', key: ['is', 'coming'], note: 'Soru: Is + özne + V-ing.' },
    { en: 'My mother is planting roses along the fence.', tr: 'Annem çit boyunca güller dikiyor.', key: ['is', 'planting'], note: 'Şu anda süren bir bahçe işi.' },
    { en: 'The old windmill is turning slowly in the wind.', tr: 'Eski yel değirmeni rüzgârda yavaşça dönüyor.', key: ['is', 'turning'], note: 'Şu anda gözlenen bir hareket.' },
    { en: 'We are climbing higher as the sun sets.', tr: 'Güneş batarken daha yükseğe tırmanıyoruz.', key: ['are', 'climbing'], note: 'Şu anda süren bir hareket.' },
    { en: 'My grandmother is knitting socks for the winter.', tr: 'Büyükannem kış için çorap örüyor.', key: ['is', 'knitting'], note: 'Bu günlerde süren bir uğraş.' },
    { en: 'The lighthouse is warning the ships about the storm.', tr: 'Deniz feneri gemileri fırtına konusunda uyarıyor.', key: ['is', 'warning'], note: 'Şu anda süren bir görev.' },
    { en: 'We are watching the eagles circle above the valley.', tr: 'Kartalların vadinin üzerinde dönmesini izliyoruz.', key: ['are', 'watching'], note: 'Şu anda süren bir gözlem.' },
    { en: 'My uncle is loading the truck with vegetables.', tr: 'Amcam kamyona sebze yüklüyor.', key: ['is', 'loading'], note: 'Şu anda süren bir iş.' },
    { en: 'The bees are flying around the lavender field.', tr: 'Arılar lavanta tarlasının çevresinde uçuyor.', key: ['are', 'flying'], note: 'Şu anda gözlenen bir hareket.' },
    { en: 'Why are the sheep running towards the barn?', tr: 'Koyunlar neden ahıra doğru koşuyor?', key: ['are', 'running'], note: 'Soru kelimesiyle şimdiki zaman.' },
    { en: 'We are collecting firewood before the storm.', tr: 'Fırtınadan önce odun topluyoruz.', key: ['are', 'collecting'], note: 'Bugüne özgü süren hazırlık.' },
    { en: 'My father is teaching my little brother to swim.', tr: 'Babam küçük kardeşime yüzmeyi öğretiyor.', key: ['is', 'teaching'], note: 'Şu anda süren bir öğretim.' },
    { en: 'The farmers are loading the grapes onto the cart.', tr: 'Çiftçiler üzümleri arabaya yüklüyor.', key: ['are', 'loading'], note: 'Şu anda süren bir hasat işi.' }
  ];

  MORE['present-perfect'] = [
    { en: 'The snow has covered the whole village.', tr: 'Kar bütün köyü kaplamış.', key: ['has', 'covered'], note: 'Sonuç şu an ortada.' },
    { en: 'My brother has scored three goals this season.', tr: 'Kardeşim bu sezon üç gol attı.', key: ['has', 'scored'], note: '"this season" henüz bitmemiş bir dönem.' },
    { en: 'We have never climbed that peak before.', tr: 'Daha önce hiç o zirveye tırmanmadık.', key: ['have', 'never', 'climbed'], note: 'Hayat boyu bir deneyim.' },
    { en: 'The bees have made a lot of honey this year.', tr: 'Arılar bu yıl çok bal yaptı.', key: ['have', 'made'], note: '"this year" henüz bitmemiş bir dönem.' },
    { en: 'My grandmother has knitted five pairs of socks.', tr: 'Büyükannem beş çift çorap örmüş.', key: ['has', 'knitted'], note: 'Sonuç şu an ortada.' },
    { en: 'Have you ever seen a wolf in the forest?', tr: 'Ormanda hiç kurt gördün mü?', key: ['have', 'seen'], note: 'Hayat boyu bir deneyim sorusu.' },
    { en: 'The river has flooded the lower fields again.', tr: 'Nehir aşağı tarlaları yine su altında bırakmış.', key: ['has', 'flooded'], note: 'Sonucu şu an görünür.' },
    { en: 'I have just finished training for today.', tr: 'Bugünlük antrenmanı az önce bitirdim.', key: ['have', 'just', 'finished'], note: '"just" ile çok yakın geçmiş.' },
    { en: 'My father has already checked the beehives.', tr: 'Babam arı kovanlarını çoktan kontrol etti.', key: ['has', 'already', 'checked'], note: '"already" ile bitmiş iş.' },
    { en: 'The children have not finished the sandcastle yet.', tr: 'Çocuklar kum kaleyi henüz bitirmedi.', key: ['have', 'not', 'finished', 'yet'], note: '"yet" olumsuzda kullanılır.' },
    { en: 'We have lived through many hard winters here.', tr: 'Burada birçok zor kış geçirdik.', key: ['have', 'lived', 'through'], note: 'Hayat boyu birikmiş deneyim.' },
    { en: 'My uncle has driven that same road for thirty years.', tr: 'Amcam otuz yıldır aynı yolda araba sürdü.', key: ['has', 'driven', 'for'], note: 'drive → driven.' },
    { en: 'The team has won every match this season.', tr: 'Takım bu sezon her maçı kazandı.', key: ['has', 'won'], note: '"this season" devam eden bir dönem.' },
    { en: 'I have never eaten such sweet grapes.', tr: 'Hiç bu kadar tatlı üzüm yemedim.', key: ['have', 'never', 'eaten'], note: 'eat → eaten.' },
    { en: 'The wind has broken three branches off the tree.', tr: 'Rüzgâr ağacın üç dalını kırmış.', key: ['has', 'broken'], note: 'break → broken.' },
    { en: 'My sister has passed her driving test.', tr: 'Kız kardeşim ehliyet sınavını geçti.', key: ['has', 'passed'], note: 'Sonuç şu an geçerli.' },
    { en: 'We have never been to that lighthouse.', tr: 'O deniz fenerine hiç gitmedik.', key: ['have', 'never', 'been'], note: '"have been to" = gidip görmüş olmak.' },
    { en: 'Have the storks built their nest yet?', tr: 'Leylekler yuvalarını yaptı mı?', key: ['have', 'built', 'yet'], note: 'build → built.' },
    { en: 'My grandfather has grown vegetables here since he was young.', tr: 'Dedem gençliğinden beri burada sebze yetiştirir.', key: ['has', 'grown', 'since'], note: 'Uzun süreli deneyimin sonucu.' },
    { en: 'Someone has left the gate open again.', tr: 'Biri kapıyı yine açık bırakmış.', key: ['has', 'left'], note: 'leave → left.' }
  ];

  MORE['present-perfect-continuous'] = [
    { en: 'It has been snowing since yesterday afternoon.', tr: 'Dün öğleden sonradan beri kar yağıyor.', key: ['has', 'been', 'snowing'], note: 'Başlangıç noktası verilir.' },
    { en: 'My brother has been training for the tournament for two months.', tr: 'Kardeşim turnuva için iki aydır antrenman yapıyor.', key: ['has', 'been', 'training', 'for'], note: 'Süre vurgusu: for two months.' },
    { en: 'We have been climbing since sunrise.', tr: 'Gün doğumundan beri tırmanıyoruz.', key: ['have', 'been', 'climbing'], note: 'Gün doğumundan şimdiye süren çaba.' },
    { en: 'The bees have been flying around the field all morning.', tr: 'Arılar bütün sabah tarlanın çevresinde uçuyor.', key: ['have', 'been', 'flying'], note: '"all morning" kesintisiz süre.' },
    { en: 'My grandmother has been knitting since breakfast.', tr: 'Büyükannem kahvaltıdan beri örgü örüyor.', key: ['has', 'been', 'knitting'], note: 'Kahvaltıdan şimdiye süren iş.' },
    { en: 'How long have you been playing chess?', tr: 'Ne zamandır satranç oynuyorsun?', key: ['have', 'been', 'playing'], note: '"How long" süre sorar.' },
    { en: 'The river has been rising since the rain started.', tr: 'Yağmur başladığından beri nehir yükseliyor.', key: ['has', 'been', 'rising', 'since'], note: 'Yağmurdan şimdiye süren değişim.' },
    { en: 'We have been waiting for the ferry for two hours.', tr: 'İki saattir vapuru bekliyoruz.', key: ['have', 'been', 'waiting'], note: 'Süre: for two hours.' },
    { en: 'My father has been checking the beehives all day.', tr: 'Babam bütün gün arı kovanlarını kontrol ediyor.', key: ['has', 'been', 'checking'], note: '"all day" kesintisiz süre.' },
    { en: 'The children have been building the sandcastle since noon.', tr: 'Çocuklar öğleden beri kum kaleyi yapıyor.', key: ['have', 'been', 'building'], note: 'Öğleden şimdiye süren oyun.' },
    { en: 'I have been feeling seasick since we left the harbour.', tr: 'Limandan ayrıldığımızdan beri deniz tutuyor.', key: ['have', 'been', 'feeling', 'since'], note: 'Başlangıç noktası: since we left.' },
    { en: 'The team has been practising every day this month.', tr: 'Takım bu ay her gün antrenman yapıyor.', key: ['have', 'been', 'practising'], note: 'Bu ay boyunca tekrarlanan süreç.' },
    { en: 'My uncle has been driving all night.', tr: 'Amcam bütün gece araba sürüyor.', key: ['has', 'been', 'driving'], note: '"all night" kesintisiz süre.' },
    { en: 'We have been waiting for the snow to stop.', tr: 'Karın durmasını bekliyoruz.', key: ['have', 'been', 'waiting'], note: 'Şu ana kadar süren bekleyiş.' },
    { en: 'The lighthouse has been warning ships since midnight.', tr: 'Deniz feneri gece yarısından beri gemileri uyarıyor.', key: ['has', 'been', 'warning', 'since'], note: 'Gece yarısından şimdiye süren görev.' },
    { en: 'My sister has been studying chess strategies for weeks.', tr: 'Kız kardeşim haftalardır satranç stratejileri çalışıyor.', key: ['has', 'been', 'studying'], note: 'Uzun süredir devam eden bir çaba.' }
  ];

  MORE['past-simple'] = [
    { en: 'The snow fell heavily all night.', tr: 'Kar bütün gece yoğun yağdı.', key: ['fell'], note: 'fall → fell.' },
    { en: 'My brother scored the winning goal in the last minute.', tr: 'Kardeşim son dakikada galibiyet golünü attı.', key: ['scored'], note: 'Belirli, bitmiş bir olay.' },
    { en: 'We climbed to the top just before sunset.', tr: 'Gün batımından hemen önce zirveye tırmandık.', key: ['climbed'], note: 'Belirli bir geçmiş zaman.' },
    { en: 'The old windmill stopped turning years ago.', tr: 'Eski yel değirmeni yıllar önce dönmeyi bıraktı.', key: ['stopped'], note: 'Bitmiş bir geçmiş durum.' },
    { en: 'My grandfather rode a horse to the market when he was young.', tr: 'Dedem gençken pazara ata binerek giderdi.', key: ['rode'], note: 'ride → rode.' },
    { en: 'The river flooded three villages last spring.', tr: 'Nehir geçen ilkbahar üç köyü su altında bıraktı.', key: ['flooded'], note: 'Belirli geçmiş zaman: last spring.' },
    { en: 'We built a snowman in the garden last January.', tr: 'Geçen ocak bahçede bir kardan adam yaptık.', key: ['built'], note: 'build → built.' },
    { en: 'My sister won the school chess competition.', tr: 'Kız kardeşim okulun satranç yarışmasını kazandı.', key: ['won'], note: 'win → won.' },
    { en: 'The bees stung my uncle twice last summer.', tr: 'Arılar geçen yaz amcamı iki kez soktu.', key: ['stung'], note: 'sting → stung.' },
    { en: 'We drove all the way to the coast without stopping.', tr: 'Hiç durmadan sahile kadar sürdük.', key: ['drove'], note: 'drive → drove.' },
    { en: 'The lighthouse guided the ship safely to the harbour.', tr: 'Deniz feneri gemiyi güvenle limana yönlendirdi.', key: ['guided'], note: 'Düzenli fiil: guide → guided.' },
    { en: 'My father taught me how to play chess.', tr: 'Babam bana satranç oynamayı öğretti.', key: ['taught'], note: 'teach → taught.' },
    { en: 'The eagle caught a fish from the river.', tr: 'Kartal nehirden bir balık yakaladı.', key: ['caught'], note: 'catch → caught.' },
    { en: 'We planted lavender along the fence last April.', tr: 'Geçen nisan çit boyunca lavanta ektik.', key: ['planted'], note: 'Belirli geçmiş zaman.' },
    { en: 'The storm broke three branches off the old tree.', tr: 'Fırtına eski ağacın üç dalını kırdı.', key: ['broke'], note: 'break → broke.' },
    { en: 'My grandmother knitted a scarf for every grandchild.', tr: 'Büyükannem her torun için bir atkı ördü.', key: ['knitted'], note: 'Düzenli fiil: knit → knitted.' },
    { en: 'We watched the eagles circle above the valley.', tr: 'Kartalların vadinin üzerinde dönmesini izledik.', key: ['watched'], note: 'Belirli, bitmiş bir gözlem.' },
    { en: 'The farmers loaded the last cart before dark.', tr: 'Çiftçiler hava kararmadan önce son arabayı yüklediler.', key: ['loaded'], note: 'Bitmiş bir geçmiş iş.' },
    { en: 'My uncle sold the truck after twenty years.', tr: 'Amcam yirmi yıl sonra kamyonu sattı.', key: ['sold'], note: 'sell → sold.' },
    { en: 'We found an old coin near the ruins.', tr: 'Harabelerin yanında eski bir para bulduk.', key: ['found'], note: 'find → found.' }
  ];

  MORE['past-continuous'] = [
    { en: 'It was snowing heavily when we left the house.', tr: 'Biz evden çıktığımızda yoğun kar yağıyordu.', key: ['was', 'snowing', 'left'], note: 'Süren iş + kısa olay.' },
    { en: 'My brother was training when the coach arrived.', tr: 'Antrenör geldiğinde kardeşim antrenman yapıyordu.', key: ['was', 'training', 'arrived'], note: 'Uzun iş: antrenman yapıyordu.' },
    { en: 'We were climbing when the storm suddenly began.', tr: 'Fırtına aniden başladığında tırmanıyorduk.', key: ['were', 'climbing', 'began'], note: 'Süren iş + araya giren olay.' },
    { en: 'The bees were flying around the hive when I approached.', tr: 'Ben yaklaşırken arılar kovanın etrafında uçuyordu.', key: ['were', 'flying', 'approached'], note: 'Süren iş + kısa olay.' },
    { en: 'My grandmother was knitting while the rain was falling.', tr: 'Yağmur yağarken büyükannem örgü örüyordu.', key: ['was', 'knitting', 'was', 'falling'], note: 'Aynı anda süren iki iş.' },
    { en: 'We were watching the eagles when they suddenly dived.', tr: 'Kartalları izlerken birden dalış yaptılar.', key: ['were', 'watching', 'dived'], note: 'Süren iş + ani olay.' },
    { en: 'The children were building a snowman when it stopped snowing.', tr: 'Kar durduğunda çocuklar kardan adam yapıyordu.', key: ['were', 'building', 'stopped'], note: 'Süren iş + kısa olay.' },
    { en: 'I was driving along the coast when I saw the lighthouse.', tr: 'Kıyı boyunca sürerken deniz fenerini gördüm.', key: ['was', 'driving', 'saw'], note: 'Süren iş + kısa gözlem.' },
    { en: 'We were waiting for the ferry while the sun was setting.', tr: 'Güneş batarken vapuru bekliyorduk.', key: ['were', 'waiting', 'was', 'setting'], note: 'İki eş zamanlı iş.' },
    { en: 'My father was checking the beehives when the rain started.', tr: 'Yağmur başladığında babam arı kovanlarını kontrol ediyordu.', key: ['was', 'checking', 'started'], note: 'Süren iş + kısa olay.' },
    { en: 'The team was practising when the coach called them in.', tr: 'Antrenör onları çağırdığında takım antrenman yapıyordu.', key: ['was', 'practising', 'called'], note: 'Uzun iş + kısa olay.' },
    { en: 'We were sitting by the river when the flood began.', tr: 'Sel başladığında nehir kenarında oturuyorduk.', key: ['were', 'sitting', 'began'], note: 'Süren iş + kısa olay.' },
    { en: 'My uncle was loading the truck when I arrived.', tr: 'Ben vardığımda amcam kamyonu yüklüyordu.', key: ['was', 'loading', 'arrived'], note: 'Süren iş + kısa olay.' },
    { en: 'The nightingale was singing while we were walking in the garden.', tr: 'Bahçede yürürken bülbül ötüyordu.', key: ['was', 'singing', 'were', 'walking'], note: 'Aynı anda süren iki iş.' },
    { en: 'I was reading by the fire when the storm knocked out the lights.', tr: 'Fırtına ışıkları söndürdüğünde ateşin yanında okuyordum.', key: ['was', 'reading', 'knocked'], note: 'Süren iş + ani olay.' },
    { en: 'We were collecting shells when the tide started to come in.', tr: 'Gelgit gelmeye başladığında kabuk topluyorduk.', key: ['were', 'collecting', 'started'], note: 'Süren iş + kısa olay.' }
  ];

  MORE['past-perfect'] = [
    { en: 'By the time we woke up, it had already stopped snowing.', tr: 'Biz uyandığımızda kar çoktan durmuştu.', key: ['had', 'already', 'stopped'], note: 'Uyanmadan önce biten olay.' },
    { en: 'My brother had trained for years before he joined the team.', tr: 'Takıma katılmadan önce kardeşim yıllarca antrenman yapmıştı.', key: ['had', 'trained', 'before'], note: 'Katılmadan önceki süreç.' },
    { en: 'We had never seen such a big flood before that year.', tr: 'O yıla kadar hiç bu kadar büyük bir sel görmemiştik.', key: ['had', 'never', 'seen'], note: 'Belirli bir yıla kadarki deneyim.' },
    { en: 'The bees had already left the hive by the time I looked.', tr: 'Ben baktığımda arılar kovanı çoktan terk etmişti.', key: ['had', 'already', 'left'], note: 'Bakmadan önce olan iş.' },
    { en: 'My grandmother had finished the scarf before winter came.', tr: 'Kış gelmeden önce büyükannem atkıyı bitirmişti.', key: ['had', 'finished', 'before'], note: 'Kıştan önce biten iş.' },
    { en: 'By the time the coach arrived, the team had already started.', tr: 'Antrenör geldiğinde takım çoktan başlamıştı.', key: ['had', 'already', 'started'], note: 'Varıştan önce başlayan iş.' },
    { en: 'We had packed our bags before the taxi came.', tr: 'Taksi gelmeden önce çantalarımızı hazırlamıştık.', key: ['had', 'packed', 'before'], note: 'Taksiden önce biten iş.' },
    { en: 'My father had checked the beehives before the storm hit.', tr: 'Fırtına vurmadan önce babam arı kovanlarını kontrol etmişti.', key: ['had', 'checked', 'before'], note: 'Fırtınadan önce biten iş.' },
    { en: 'I realized I had left the gate open.', tr: 'Kapıyı açık bıraktığımı fark ettim.', key: ['had', 'left', 'realized'], note: 'Fark etmeden önce olan iş.' },
    { en: 'The river had already flooded the fields when help arrived.', tr: 'Yardım geldiğinde nehir tarlaları çoktan su altında bırakmıştı.', key: ['had', 'already', 'flooded'], note: 'Yardımdan önce olan olay.' },
    { en: 'We had never tried mountain climbing before that trip.', tr: 'O geziye kadar hiç dağcılık denememiştik.', key: ['had', 'never', 'tried'], note: 'Geziye kadarki deneyimsizlik.' },
    { en: 'My sister had passed her exam before the results were announced.', tr: 'Sonuçlar açıklanmadan önce kız kardeşim sınavını geçmişti.', key: ['had', 'passed', 'before'], note: 'Açıklamadan önce belli olan durum.' },
    { en: 'The children had built the snowman before their mother woke up.', tr: 'Anneleri uyanmadan önce çocuklar kardan adamı yapmıştı.', key: ['had', 'built', 'before'], note: 'Uyanmadan önce biten iş.' },
    { en: 'By the time we arrived, the eagles had already flown away.', tr: 'Biz vardığımızda kartallar çoktan uçup gitmişti.', key: ['had', 'already', 'flown'], note: 'fly → flown.' },
    { en: 'My uncle had driven that road a thousand times before he retired.', tr: 'Emekli olmadan önce amcam o yolda bin kez araba sürmüştü.', key: ['had', 'driven', 'before'], note: 'Emeklilikten önceki uzun deneyim.' },
    { en: 'We had lit the fire before the sun went down.', tr: 'Güneş batmadan önce ateşi yakmıştık.', key: ['had', 'lit', 'before'], note: 'light → lit.' }
  ];

  MORE['past-perfect-continuous'] = [
    { en: 'It had been snowing for hours before it finally stopped.', tr: 'Nihayet durmadan önce saatlerdir kar yağıyordu.', key: ['had', 'been', 'snowing'], note: 'Durmadan önceki süreç.' },
    { en: 'My brother had been training for the match for weeks.', tr: 'Kardeşim haftalardır maç için antrenman yapıyordu.', key: ['had', 'been', 'training'], note: 'Maça kadar süren hazırlık.' },
    { en: 'We had been climbing for four hours before we reached the summit.', tr: 'Zirveye varmadan önce dört saattir tırmanıyorduk.', key: ['had', 'been', 'climbing'], note: 'Zirveye kadar süren çaba.' },
    { en: 'The bees had been gathering pollen since early morning.', tr: 'Arılar sabahın erken saatlerinden beri polen topluyordu.', key: ['had', 'been', 'gathering', 'since'], note: 'Sabahtan itibaren süren iş.' },
    { en: 'My grandmother had been knitting that scarf for weeks before she finished it.', tr: 'Bitirmeden önce büyükannem o atkıyı haftalardır örüyordu.', key: ['had', 'been', 'knitting'], note: 'Bitirmeden önceki süreç.' },
    { en: 'We had been waiting for the ferry for an hour before it arrived.', tr: 'Vapur gelmeden önce bir saattir bekliyorduk.', key: ['had', 'been', 'waiting'], note: 'Varıştan önceki bekleyiş.' },
    { en: 'The river had been rising all night before it flooded the fields.', tr: 'Tarlaları su altında bırakmadan önce nehir bütün gece yükseliyordu.', key: ['had', 'been', 'rising'], note: 'Sel basmadan önceki süreç.' },
    { en: 'I had been feeling tired for days before I finally rested.', tr: 'Nihayet dinlenmeden önce günlerdir yorgun hissediyordum.', key: ['had', 'been', 'feeling'], note: 'Dinlenmeden önceki süreç.' },
    { en: 'The team had been practising all season before they won the cup.', tr: 'Kupayı kazanmadan önce takım bütün sezon antrenman yapıyordu.', key: ['had', 'been', 'practising'], note: 'Kazanmadan önceki uzun süreç.' },
    { en: 'My father had been driving all night before he stopped to rest.', tr: 'Durup dinlenmeden önce babam bütün gece araba sürüyordu.', key: ['had', 'been', 'driving'], note: 'Durmadan önceki uzun süre.' },
    { en: 'We had been sitting by the fire for hours before we went to bed.', tr: 'Yatmadan önce saatlerdir ateşin yanında oturuyorduk.', key: ['had', 'been', 'sitting'], note: 'Yatmadan önceki süreç.' },
    { en: 'The lighthouse had been warning ships for hours before the storm passed.', tr: 'Fırtına geçmeden önce deniz feneri saatlerdir gemileri uyarıyordu.', key: ['had', 'been', 'warning'], note: 'Fırtınadan önceki süreç.' }
  ];

  MORE['future-simple'] = [
    { en: 'It will probably snow in the mountains tonight.', tr: 'Bu gece dağlarda muhtemelen kar yağacak.', key: ['will', 'snow'], note: 'Hava tahmini: probably + will.' },
    { en: 'My brother will train harder before the next match.', tr: 'Kardeşim bir sonraki maçtan önce daha sıkı antrenman yapacak.', key: ['will', 'train'], note: 'Gelecek için basit bir plan.' },
    { en: 'We will climb that mountain next summer.', tr: 'Gelecek yaz o dağa tırmanacağız.', key: ['will', 'climb'], note: 'Belirli bir gelecek zaman.' },
    { en: 'The bees will build a new hive in the old tree.', tr: 'Arılar eski ağaçta yeni bir kovan yapacak.', key: ['will', 'build'], note: 'Doğal bir gelecek tahmini.' },
    { en: 'I will knit a scarf for you this winter.', tr: 'Bu kış sana bir atkı öreceğim.', key: ['will', 'knit'], note: 'Anlık verilen bir söz.' },
    { en: 'Will the river flood the fields again this year?', tr: 'Nehir bu yıl tarlaları yine su altında bırakacak mı?', key: ['will', 'flood'], note: 'Soru: Will + özne + V1?' },
    { en: 'We will not go fishing if it rains.', tr: 'Yağmur yağarsa balığa gitmeyeceğiz.', key: ['will', 'not', 'go'], note: 'Koşula bağlı bir gelecek karar.' },
    { en: 'I think the team will win the cup this year.', tr: 'Sanırım takım bu yıl kupayı kazanacak.', key: ['will', 'win'], note: 'I think + will: kişisel tahmin.' },
    { en: 'My father will plant lavender along the fence.', tr: 'Babam çit boyunca lavanta dikecek.', key: ['will', 'plant'], note: 'Gelecekteki basit bir plan.' },
    { en: 'The lighthouse will guide the ships safely tonight.', tr: 'Deniz feneri bu gece gemileri güvenle yönlendirecek.', key: ['will', 'guide'], note: 'Gelecekle ilgili bir bilgi.' },
    { en: 'We will visit the lighthouse this weekend.', tr: 'Bu hafta sonu deniz fenerini ziyaret edeceğiz.', key: ['will', 'visit'], note: 'Belirli bir gelecek plan.' },
    { en: 'I promise I will train every day this month.', tr: 'Söz veriyorum bu ay her gün antrenman yapacağım.', key: ['will', 'train'], note: 'Söz verme: promise + will.' },
    { en: 'The storm will probably break more branches tonight.', tr: 'Fırtına bu gece muhtemelen daha çok dal kıracak.', key: ['will', 'break'], note: 'Tahmin: probably + will.' },
    { en: 'My grandmother will teach me how to knit.', tr: 'Büyükannem bana örgü örmeyi öğretecek.', key: ['will', 'teach'], note: 'Gelecekteki bir plan/söz.' },
    { en: 'Will you come climbing with us next month?', tr: 'Gelecek ay bizimle tırmanışa gelecek misin?', key: ['will', 'come'], note: 'Rica/soru: Will you...?' },
    { en: 'The eagles will return to this valley in the spring.', tr: 'Kartallar ilkbaharda bu vadiye geri dönecek.', key: ['will', 'return'], note: 'Doğal bir gelecek olay.' }
  ];

  MORE['future-continuous'] = [
    { en: 'This time tomorrow, we will be climbing the mountain.', tr: 'Yarın bu saatte dağa tırmanıyor olacağız.', key: ['will', 'be', 'climbing'], note: 'Belirli bir gelecek anda süren iş.' },
    { en: 'At five o’clock, my brother will be training at the club.', tr: 'Saat beşte kardeşim kulüpte antrenman yapıyor olacak.', key: ['will', 'be', 'training'], note: 'Belirli saatte süren gelecek iş.' },
    { en: 'Next week, the bees will be building a new hive.', tr: 'Gelecek hafta arılar yeni bir kovan yapıyor olacak.', key: ['will', 'be', 'building'], note: 'Gelecekteki bir dönem boyunca sürer.' },
    { en: 'This time next month, we will be sailing along the coast.', tr: 'Gelecek ay bu saatlerde kıyı boyunca yelken açıyor olacağız.', key: ['will', 'be', 'sailing'], note: 'Gelecekte belirli bir anda süren iş.' },
    { en: 'At sunrise, the fishermen will be casting their nets.', tr: 'Gün doğumunda balıkçılar ağlarını atıyor olacak.', key: ['will', 'be', 'casting'], note: 'Belirli bir gelecek anda süren iş.' },
    { en: 'My grandmother will be knitting by the fire all evening.', tr: 'Büyükannem bütün akşam ateşin yanında örgü örüyor olacak.', key: ['will', 'be', 'knitting'], note: 'Uzun bir gelecek dönem boyunca sürer.' },
    { en: 'We will be watching the storm from the window.', tr: 'Fırtınayı pencereden izliyor olacağız.', key: ['will', 'be', 'watching'], note: 'Gelecekte belirli bir anda süren iş.' },
    { en: 'At noon tomorrow, the team will be practising on the field.', tr: 'Yarın öğlen takım sahada antrenman yapıyor olacak.', key: ['will', 'be', 'practising'], note: 'Belirli saatte süren gelecek iş.' },
    { en: 'This time next year, my brother will be studying abroad.', tr: 'Gelecek yıl bu saatlerde kardeşim yurt dışında okuyor olacak.', key: ['will', 'be', 'studying'], note: 'Uzak bir gelecekteki an.' },
    { en: 'The eagles will be circling above the valley at dawn.', tr: 'Şafakta kartallar vadinin üzerinde dönüyor olacak.', key: ['will', 'be', 'circling'], note: 'Belirli bir gelecek anda süren iş.' },
    { en: 'We will be collecting firewood all afternoon.', tr: 'Bütün öğleden sonra odun topluyor olacağız.', key: ['will', 'be', 'collecting'], note: 'Uzun bir gelecek dönem boyunca sürer.' },
    { en: 'My father will be checking the beehives when you arrive.', tr: 'Sen vardığında babam arı kovanlarını kontrol ediyor olacak.', key: ['will', 'be', 'checking'], note: 'Varış anında süren iş.' }
  ];

  MORE['future-perfect'] = [
    { en: 'By tonight, it will have snowed for six hours straight.', tr: 'Bu geceye kadar aralıksız altı saat kar yağmış olacak.', key: ['will', 'have', 'snowed'], note: 'Belirli bir tarihe kadar tamamlanan doğa olayı.' },
    { en: 'By the end of the season, my brother will have scored twenty goals.', tr: 'Sezon sonuna kadar kardeşim yirmi gol atmış olacak.', key: ['will', 'have', 'scored'], note: 'Sezon sonuna kadar tamamlanacak.' },
    { en: 'By next month, the bees will have filled the whole hive.', tr: 'Gelecek aya kadar arılar bütün kovanı doldurmuş olacak.', key: ['will', 'have', 'filled'], note: 'Belirli bir tarihe kadar tamamlanacak.' },
    { en: 'By the time we arrive, the storm will have passed.', tr: 'Biz vardığımızda fırtına geçmiş olacak.', key: ['will', 'have', 'passed'], note: 'Varıştan önce tamamlanacak.' },
    { en: 'By next spring, we will have planted the whole garden.', tr: 'Gelecek ilkbahara kadar bütün bahçeyi dikmiş olacağız.', key: ['will', 'have', 'planted'], note: 'Belirli bir tarihe kadar tamamlanacak.' },
    { en: 'By the end of the trip, we will have climbed three mountains.', tr: 'Gezi sonuna kadar üç dağa tırmanmış olacağız.', key: ['will', 'have', 'climbed'], note: 'Gezi sonuna kadar tamamlanacak.' },
    { en: 'By tomorrow, the river will have flooded the whole valley.', tr: 'Yarına kadar nehir bütün vadiyi su altında bırakmış olacak.', key: ['will', 'have', 'flooded'], note: 'Belirli bir tarihe kadar tamamlanan doğa olayı.' },
    { en: 'By next year, my grandmother will have knitted a scarf for every grandchild.', tr: 'Gelecek yıla kadar büyükannem her torun için bir atkı örmüş olacak.', key: ['will', 'have', 'knitted'], note: 'Belirli bir tarihe kadar tamamlanacak.' },
    { en: 'By six o’clock, my father will have finished checking the beehives.', tr: 'Saat altıya kadar babam arı kovanlarını kontrol etmeyi bitirmiş olacak.', key: ['will', 'have', 'finished'], note: 'Belirli saate kadar tamamlanacak.' },
    { en: 'By the time the sun rises, we will have driven three hundred kilometres.', tr: 'Güneş doğana kadar üç yüz kilometre yol almış olacağız.', key: ['will', 'have', 'driven'], note: 'Belirli bir ana kadar tamamlanacak.' },
    { en: 'By next winter, the team will have played twenty matches.', tr: 'Gelecek kışa kadar takım yirmi maç oynamış olacak.', key: ['will', 'have', 'played'], note: 'Belirli bir tarihe kadar tamamlanacak.' },
    { en: 'By the end of the week, we will have collected enough firewood.', tr: 'Hafta sonuna kadar yeterince odun toplamış olacağız.', key: ['will', 'have', 'collected'], note: 'Hafta sonuna kadar tamamlanacak.' }
  ];

  MORE['future-perfect-continuous'] = [
    { en: 'By tonight, it will have been snowing for twelve hours.', tr: 'Bu geceye kadar on iki saattir kar yağıyor olacak.', key: ['will', 'have', 'been', 'snowing'], note: 'Belirli bir ana kadar biriken süre.' },
    { en: 'By the end of the season, my brother will have been playing football for ten years.', tr: 'Sezon sonuna kadar kardeşim on yıldır futbol oynuyor olacak.', key: ['will', 'have', 'been', 'playing'], note: 'On yıllık sürenin gelecekte tamamlanması.' },
    { en: 'By noon, we will have been climbing for five hours.', tr: 'Öğlene kadar beş saattir tırmanıyor olacağız.', key: ['will', 'have', 'been', 'climbing'], note: 'Öğlene kadar biriken süre.' },
    { en: 'By next spring, the bees will have been living in that hive for three years.', tr: 'Gelecek ilkbahara kadar arılar üç yıldır o kovanda yaşıyor olacak.', key: ['will', 'have', 'been', 'living'], note: 'Üç yıllık sürenin gelecekte tamamlanması.' },
    { en: 'By the time we arrive, they will have been waiting at the harbour for hours.', tr: 'Biz vardığımızda saatlerdir limanda bekliyor olacaklar.', key: ['will', 'have', 'been', 'waiting'], note: 'Varış anına kadar biriken süre.' },
    { en: 'By next month, my grandmother will have been knitting scarves for the whole family.', tr: 'Gelecek aya kadar büyükannem bütün aile için atkı örüyor olacak.', key: ['will', 'have', 'been', 'knitting'], note: 'Süregelen bir uğraşın gelecekte de devam etmesi.' },
    { en: 'By dawn, the river will have been rising all night.', tr: 'Şafağa kadar nehir bütün gece yükseliyor olacak.', key: ['will', 'have', 'been', 'rising'], note: 'Şafağa kadar biriken süre.' },
    { en: 'By the end of the trip, we will have been driving for two full days.', tr: 'Gezi sonuna kadar tam iki gündür araba sürüyor olacağız.', key: ['will', 'have', 'been', 'driving'], note: 'İki günlük sürenin tamamlanması.' },
    { en: 'By next year, the team will have been training together for five years.', tr: 'Gelecek yıla kadar takım beş yıldır birlikte antrenman yapıyor olacak.', key: ['will', 'have', 'been', 'training'], note: 'Beş yıllık sürenin gelecekte tamamlanması.' },
    { en: 'By sunset, we will have been fishing for eight hours.', tr: 'Gün batımına kadar sekiz saattir balık tutuyor olacağız.', key: ['will', 'have', 'been', 'fishing'], note: 'Gün batımına kadar biriken süre.' }
  ];

  /* ---- yukarıdaki cümlelerde geçen, sözlükte muhtemelen eksik kalan
     kelimeler; node tests/validate-content.js çıktısına göre güncellenir ---- */
  KI.glossary.addWords([
  'chess|satranç|isim', 'nightingale|bülbül|isim', 'beautifully|güzel bir şekilde|zarf',
  'wreath|çelenk|isim', 'check|kontrol etmek|fiil', 'beehive|arı kovanı|isim',
  'hive|kovan|isim', 'sandcastle|kum kale|isim', 'windmill|yel değirmeni|isim',
  'grandparents\'|büyükanne ve büyükbabanın|isim', 'away|uzağa, uzakta|zarf', 'lighthouse|deniz feneri|isim',
  'hard|sıkı, zor|sıfat', 'above|üzerinde, yukarısında|edat', 'load|yüklemek|fiil',
  'lavender|lavanta|isim', 'towards|-e doğru|edat', 'firewood|odun|isim',
  'onto|üzerine|edat', 'cart|at arabası|isim', 'lower|daha alçak, aşağı|sıfat',
  'off|(fiillerle) ayrılma, kopma anlamı katar|edat', 'seasick|deniz tutmuş|sıfat', 'heavily|yoğun bir şekilde|zarf',
  'snowman|kardan adam|isim', 'sting|sokmak (arı vb.)|fiil', 'stung|soktu (sting geçmiş/V3)|fiil',
  'guide|yönlendirmek, rehberlik etmek|fiil', 'safely|güvenle|zarf', 'grandchild|torun|isim',
  'ruins|harabeler|isim', 'dive|dalış yapmak|fiil', 'harder|daha sıkı|zarf',
  'cast|atmak (ağ vb.)|fiil', 'scarf|atkı|isim', 'scarves|atkılar|isim'
  ]);

  /* ---- her zamanın examples dizisine ekle ---- */
  if (KI.tenses && KI.tenses.list) {
    KI.tenses.list.forEach(function (t) {
      if (MORE[t.id]) t.examples = (t.examples || []).concat(MORE[t.id]);
    });
  }
})(window.KI);
