/* ============================================================
   Gramer Atlası — examples-extra-4.js
   Dördüncü örnek dalgası: çarşı, düğün, festival, güreş, halk
   hikâyeleri (Nasreddin Hoca), doğa. tenses.js yüklendikten sonra
   examples dizisine eklenir.
   ============================================================ */
(function (KI) {
  'use strict';

  var MORE = {};

  MORE['present-simple'] = [
    { en: 'The tailor makes suits by hand in his small shop.', tr: 'Terzi küçük dükkânında elle takım elbise diker.', key: ['makes'], note: 'Genel, mesleki bir gerçek.' },
    { en: 'My grandmother tells folk tales on winter nights.', tr: 'Büyükannem kış geceleri halk hikâyeleri anlatır.', key: ['tells'], note: 'Mevsimlik tekrarlanan alışkanlık.' },
    { en: 'The call to prayer echoes across the whole town.', tr: 'Ezan bütün kasabaya yankılanır.', key: ['echoes'], note: 'Her gün geçerli, değişmeyen bir durum.' },
    { en: 'Camels rarely get thirsty in the desert.', tr: 'Develer çölde nadiren susar.', key: ['rarely', 'get'], note: 'Genel bir doğa gerçeği.' },
    { en: 'My father drinks his tea without sugar.', tr: 'Babam çayını şekersiz içer.', key: ['drinks'], note: 'Kişisel, değişmeyen bir alışkanlık.' },
    { en: 'The potter shapes the clay on a wheel.', tr: 'Çömlekçi kili çıkrıkta şekillendirir.', key: ['shapes'], note: 'Meslekle ilgili genel bir gerçek.' },
    { en: 'Nasreddin Hodja always finds a clever answer.', tr: 'Nasreddin Hoca her zaman zekice bir cevap bulur.', key: ['always', 'finds'], note: 'Hikâyelerde tekrarlanan bir özellik.' },
    { en: 'We celebrate the national day with a parade every year.', tr: 'Her yıl ulusal günü bir geçit töreniyle kutlarız.', key: ['celebrate'], note: 'Yıllık tekrarlanan bir gelenek.' },
    { en: 'My mother sews new curtains every spring.', tr: 'Annem her ilkbahar yeni perdeler diker.', key: ['sews'], note: 'Mevsimlik tekrar: every spring.' },
    { en: 'The market sells fresh vegetables on Wednesdays.', tr: 'Pazar çarşamba günleri taze sebze satar.', key: ['sells'], note: 'Sabit bir haftalık düzen.' },
    { en: 'Storks return to the village every March.', tr: 'Leylekler her mart köye geri döner.', key: ['return'], note: 'Doğal, tekrarlanan bir döngü.' },
    { en: 'My uncle repairs shoes in his little workshop.', tr: 'Amcam küçük atölyesinde ayakkabı tamir eder.', key: ['repairs'], note: 'Sürekli bir meslek.' },
    { en: 'Turkish children learn folk dances at school.', tr: 'Türk çocukları okulda halk oyunları öğrenir.', key: ['learn'], note: 'Genel, bilinen bir durum.' },
    { en: 'The old clock in the square strikes every hour.', tr: 'Meydandaki eski saat her saat başı çalar.', key: ['strikes'], note: 'Düzenli, tekrarlanan bir mekanizma.' },
    { en: 'My grandfather never wastes bread.', tr: 'Dedem asla ekmek israf etmez.', key: ['never', 'wastes'], note: '"never" ile geniş zaman kullanılır.' },
    { en: 'We usually spend the holiday at my aunt’s house.', tr: 'Bayramı genellikle teyzemin evinde geçiririz.', key: ['usually', 'spend'], note: '"usually" tekrarlanan bir tercih gösterir.' },
    { en: 'The wrestlers oil their bodies before the match.', tr: 'Güreşçiler maçtan önce vücutlarına yağ sürer.', key: ['oil'], note: 'Geleneksel, düzenli bir hazırlık.' },
    { en: 'My sister collects stamps from different countries.', tr: 'Kız kardeşim farklı ülkelerden pul biriktirir.', key: ['collects'], note: 'Sürekli bir hobi.' },
    { en: 'Does your grandfather still play backgammon every night?', tr: 'Deden hâlâ her gece tavla oynar mı?', key: ['does', 'play'], note: 'Soru: Does + yalın fiil.' },
    { en: 'The village does not have a proper hospital.', tr: 'Köyde düzgün bir hastane yok.', key: ['does', 'not', 'have'], note: 'Genel bir durumun olumsuzu.' }
  ];

  MORE['present-continuous'] = [
    { en: 'The wrestlers are warming up before the match.', tr: 'Güreşçiler maçtan önce ısınıyor.', key: ['are', 'warming'], note: 'Şu anda süren hazırlık.' },
    { en: 'My grandfather is telling us about the old days.', tr: 'Dedem bize eski günlerden bahsediyor.', key: ['is', 'telling'], note: 'Tam şu anda süren anlatım.' },
    { en: 'We are decorating the house for the holiday.', tr: 'Bayram için evi süslüyoruz.', key: ['are', 'decorating'], note: 'Bu günlerde süren hazırlık.' },
    { en: 'The potter is shaping a new jug on the wheel.', tr: 'Çömlekçi çıkrıkta yeni bir testi şekillendiriyor.', key: ['is', 'shaping'], note: 'Gözümüzün önünde süren iş.' },
    { en: 'Look! The kite is flying higher than the minaret.', tr: 'Bak! Uçurtma minareden daha yükseğe uçuyor.', key: ['is', 'flying'], note: '"Look!" tam şu anı gösterir.' },
    { en: 'My mother is sewing a dress for the wedding.', tr: 'Annem düğün için bir elbise dikiyor.', key: ['is', 'sewing'], note: 'Şu anda süren bir hazırlık.' },
    { en: 'The children are singing a folk song in the yard.', tr: 'Çocuklar avluda bir halk şarkısı söylüyor.', key: ['are', 'singing'], note: 'Çoğul özne → are.' },
    { en: 'We are not going to the market today.', tr: 'Bugün pazara gitmiyoruz.', key: ['are', 'not', 'going'], note: 'Bugüne özgü olumsuz bir plan.' },
    { en: 'Is the tailor measuring your suit right now?', tr: 'Terzi şu anda takım elbiseni mi ölçüyor?', key: ['is', 'measuring'], note: 'Soru: Is + özne + V-ing.' },
    { en: 'The camels are resting near the tents.', tr: 'Develer çadırların yanında dinleniyor.', key: ['are', 'resting'], note: 'Şu anda süren bir durum.' },
    { en: 'My father is planting saplings along the road.', tr: 'Babam yol boyunca fidan dikiyor.', key: ['is', 'planting'], note: 'Bugün süren bir iş.' },
    { en: 'The women are preparing the bride’s henna tonight.', tr: 'Kadınlar bu akşam gelinin kınasını hazırlıyor.', key: ['are', 'preparing'], note: 'Bu akşama özgü, süren hazırlık.' },
    { en: 'Why are the dogs barking at the stranger?', tr: 'Köpekler yabancıya neden havlıyor?', key: ['are', 'barking'], note: 'Soru kelimesiyle şimdiki zaman.' },
    { en: 'We are painting the fence a bright blue.', tr: 'Çiti parlak mavi renge boyuyoruz.', key: ['are', 'painting'], note: 'Şu günlerde süren bir iş.' },
    { en: 'My brother is practising for the wrestling match.', tr: 'Ağabeyim güreş maçı için çalışıyor.', key: ['is', 'practising'], note: 'Bu dönemde süren bir hazırlık.' },
    { en: 'The old bridge is slowly collapsing.', tr: 'Eski köprü yavaş yavaş çöküyor.', key: ['is', 'collapsing'], note: 'Şu günlerde gelişen bir süreç.' },
    { en: 'My aunt is teaching the girls to embroider.', tr: 'Teyzem kızlara nakış işlemeyi öğretiyor.', key: ['is', 'teaching'], note: 'Şu anda süren bir öğretim.' },
    { en: 'The band is playing at the village festival.', tr: 'Grup köy festivalinde çalıyor.', key: ['is', 'playing'], note: 'Şu anda süren bir etkinlik.' },
    { en: 'I am carrying water from the well.', tr: 'Kuyudan su taşıyorum.', key: ['am', 'carrying'], note: 'Şu anda süren fiziksel bir iş.' },
    { en: 'The moon is rising slowly over the hills.', tr: 'Ay tepelerin üzerinde yavaşça yükseliyor.', key: ['is', 'rising'], note: 'Şu anda gözlenen doğal bir hareket.' }
  ];

  MORE['present-perfect'] = [
    { en: 'We have decorated the whole house for the wedding.', tr: 'Düğün için bütün evi süsledik.', key: ['have', 'decorated'], note: 'Sonuç şu an ortada: ev süslü.' },
    { en: 'My grandfather has told that story a hundred times.', tr: 'Dedem bu hikâyeyi yüz kere anlattı.', key: ['has', 'told'], note: 'Kaç kez olduğu önemli değil, deneyim önemli.' },
    { en: 'Have you tried the new bakery near the mosque?', tr: 'Caminin yanındaki yeni fırını denedin mi?', key: ['have', 'tried'], note: 'Hayat boyu bir deneyim sorusu.' },
    { en: 'The wrestlers have already oiled their bodies.', tr: 'Güreşçiler vücutlarına çoktan yağ sürdü.', key: ['have', 'already', 'oiled'], note: '"already" ile bitmiş bir hazırlık.' },
    { en: 'My sister has never worn a wedding dress.', tr: 'Kız kardeşim hiç gelinlik giymedi.', key: ['has', 'never', 'worn'], note: 'wear → worn (3. hâl).' },
    { en: 'We have planted fifty saplings this spring.', tr: 'Bu ilkbahar elli fidan diktik.', key: ['have', 'planted'], note: '"this spring" henüz bitmemiş bir dönem.' },
    { en: 'The potter has broken another jug.', tr: 'Çömlekçi bir testi daha kırdı.', key: ['has', 'broken'], note: 'break → broken; sonuç şu an ortada.' },
    { en: 'I have never heard such a beautiful folk song.', tr: 'Hiç bu kadar güzel bir halk şarkısı duymadım.', key: ['have', 'never', 'heard'], note: 'Hayat boyu deneyim.' },
    { en: 'My grandmother has woven three kilims this year.', tr: 'Büyükannem bu yıl üç kilim dokudu.', key: ['has', 'woven'], note: 'weave → woven.' },
    { en: 'Have the storks come back to the village yet?', tr: 'Leylekler köye geri döndü mü?', key: ['have', 'come', 'yet'], note: 'Soruda "yet" kullanılır.' },
    { en: 'My uncle has repaired shoes for forty years.', tr: 'Amcam kırk yıldır ayakkabı tamir etti.', key: ['has', 'repaired', 'for'], note: 'Geçmişten şimdiye süren meslek.' },
    { en: 'We have not visited the castle yet.', tr: 'Kaleyi henüz ziyaret etmedik.', key: ['have', 'not', 'visited', 'yet'], note: '"yet" olumsuzda kullanılır.' },
    { en: 'The children have collected wood for the fire.', tr: 'Çocuklar ateş için odun topladı.', key: ['have', 'collected'], note: 'Sonuç ortada: odun hazır.' },
    { en: 'I have already fed the camels this morning.', tr: 'Develeri bu sabah çoktan besledim.', key: ['have', 'already', 'fed'], note: '"already" ile bitmiş iş.' },
    { en: 'My father has just come back from the mosque.', tr: 'Babam camiden az önce döndü.', key: ['has', 'just', 'come'], note: '"just" ile çok yakın geçmiş.' },
    { en: 'The bride has chosen her dress already.', tr: 'Gelin elbisesini çoktan seçti.', key: ['has', 'chosen'], note: 'choose → chosen.' },
    { en: 'We have watched that wrestling match three times.', tr: 'O güreş maçını üç kez izledik.', key: ['have', 'watched'], note: 'Tekrar sayısı önemli değil, deneyim önemli.' },
    { en: 'My mother has never liked crowded weddings.', tr: 'Annem hiç kalabalık düğünleri sevmedi.', key: ['has', 'never', 'liked'], note: 'Hayat boyu geçerli bir tercih.' },
    { en: 'Someone has broken the old clock in the square.', tr: 'Biri meydandaki eski saati kırmış.', key: ['has', 'broken'], note: 'Failini bilmeden sonucu anlatır.' },
    { en: 'Have you ever climbed that mountain?', tr: 'O dağa hiç tırmandın mı?', key: ['have', 'climbed'], note: 'Hayat boyu deneyim sorusu.' }
  ];

  MORE['present-perfect-continuous'] = [
    { en: 'The potter has been shaping pots since sunrise.', tr: 'Çömlekçi gün doğumundan beri kap şekillendiriyor.', key: ['has', 'been', 'shaping'], note: 'Başlangıç noktası: since sunrise.' },
    { en: 'We have been decorating the hall for three days.', tr: 'Üç gündür salonu süslüyoruz.', key: ['have', 'been', 'decorating', 'for'], note: 'Süre: for three days.' },
    { en: 'My grandfather has been telling stories for an hour.', tr: 'Dedem bir saattir hikâyeler anlatıyor.', key: ['has', 'been', 'telling'], note: 'Şu ana kadar süren anlatım.' },
    { en: 'The wrestlers have been training since spring.', tr: 'Güreşçiler ilkbahardan beri antrenman yapıyor.', key: ['have', 'been', 'training', 'since'], note: 'İlkbahardan şimdiye süren hazırlık.' },
    { en: 'How long have you been weaving that kilim?', tr: 'Ne zamandır o kilimi dokuyorsun?', key: ['have', 'been', 'weaving'], note: '"How long" süre sorar.' },
    { en: 'My aunt has been preparing the henna since noon.', tr: 'Teyzem öğleden beri kınayı hazırlıyor.', key: ['has', 'been', 'preparing'], note: 'Öğleden şimdiye süren hazırlık.' },
    { en: 'We have been walking around the bazaar for hours.', tr: 'Saatlerdir çarşıda dolaşıyoruz.', key: ['have', 'been', 'walking'], note: 'Yorgunluğun sebebi vurgulanır.' },
    { en: 'The band has been playing since the wedding started.', tr: 'Düğün başladığından beri grup çalıyor.', key: ['has', 'been', 'playing', 'since'], note: 'Başlangıç noktası verilir.' },
    { en: 'My father has been repairing the fence all day.', tr: 'Babam bütün gün çiti tamir ediyor.', key: ['has', 'been', 'repairing'], note: '"all day" kesintisiz süreyi gösterir.' },
    { en: 'The storks have been building their nest since March.', tr: 'Leylekler marttan beri yuvalarını yapıyor.', key: ['have', 'been', 'building'], note: 'Marttan şimdiye süren iş.' },
    { en: 'I have been collecting stamps since I was a child.', tr: 'Çocukluğumdan beri pul topluyorum.', key: ['have', 'been', 'collecting'], note: 'Çok uzun süredir devam eden bir hobi.' },
    { en: 'My mother has been baking pastries since morning.', tr: 'Annem sabahtan beri börek pişiriyor.', key: ['has', 'been', 'baking'], note: 'Sabahtan şimdiye süren iş.' },
    { en: 'We have been climbing since dawn.', tr: 'Şafaktan beri tırmanıyoruz.', key: ['have', 'been', 'climbing'], note: 'Süregelen fiziksel çaba.' },
    { en: 'The children have been singing folk songs all evening.', tr: 'Çocuklar bütün akşam halk şarkıları söylüyor.', key: ['have', 'been', 'singing'], note: '"all evening" kesintisiz süre.' },
    { en: 'My grandmother has been sitting by the window since lunch.', tr: 'Büyükannem öğle yemeğinden beri pencerenin yanında oturuyor.', key: ['has', 'been', 'sitting'], note: 'Öğle yemeğinden şimdiye süren durum.' },
    { en: 'He has been carving wood for many years.', tr: 'Yıllardır tahta oyuyor.', key: ['has', 'been', 'carving', 'for'], note: 'Çok uzun süredir devam eden bir uğraş.' },
    { en: 'We have been preparing for the festival since Monday.', tr: 'Pazartesiden beri festival için hazırlanıyoruz.', key: ['have', 'been', 'preparing'], note: 'Pazartesiden şimdiye süren hazırlık.' },
    { en: 'The camels have been walking across the desert since morning.', tr: 'Develer sabahtan beri çölü geçiyor.', key: ['have', 'been', 'walking'], note: 'Sabahtan şimdiye süren yolculuk.' }
  ];

  MORE['past-simple'] = [
    { en: 'The wrestlers competed in the village festival last summer.', tr: 'Güreşçiler geçen yaz köy festivalinde yarıştı.', key: ['competed'], note: 'Belirli geçmiş zaman: last summer.' },
    { en: 'My grandfather told this story when I was young.', tr: 'Dedem bu hikâyeyi ben küçükken anlattı.', key: ['told'], note: 'tell → told.' },
    { en: 'We danced at the wedding until midnight.', tr: 'Düğünde gece yarısına kadar dans ettik.', key: ['danced'], note: 'Bitmiş, belirli bir geçmiş olay.' },
    { en: 'The potter broke his favourite jug yesterday.', tr: 'Çömlekçi dün en sevdiği testiyi kırdı.', key: ['broke'], note: 'break → broke.' },
    { en: 'Nasreddin Hodja once fell into a well.', tr: 'Nasreddin Hoca bir keresinde bir kuyuya düştü.', key: ['fell'], note: 'fall → fell.' },
    { en: 'The storks left the village in October.', tr: 'Leylekler ekimde köyü terk etti.', key: ['left'], note: 'leave → left.' },
    { en: 'My mother sewed my wedding dress herself.', tr: 'Annem gelinliğimi kendi eliyle dikti.', key: ['sewed'], note: 'Düzenli fiil: sew → sewed.' },
    { en: 'We visited the old castle last Friday.', tr: 'Geçen cuma eski kaleyi ziyaret ettik.', key: ['visited'], note: 'Belirli geçmiş zaman.' },
    { en: 'The children collected shells all afternoon.', tr: 'Çocuklar bütün öğleden sonra kabuk topladı.', key: ['collected'], note: 'Bitmiş bir geçmiş etkinlik.' },
    { en: 'My uncle caught a huge fish in the river.', tr: 'Amcam nehirde kocaman bir balık yakaladı.', key: ['caught'], note: 'catch → caught.' },
    { en: 'The band played until the sun rose.', tr: 'Grup güneş doğana kadar çaldı.', key: ['played', 'rose'], note: 'İki geçmiş olay art arda.' },
    { en: 'I broke my grandmother’s teapot by accident.', tr: 'Büyükannemin çaydanlığını kazara kırdım.', key: ['broke'], note: 'Tek, bitmiş bir olay.' },
    { en: 'We climbed the hill to watch the fireworks.', tr: 'Havai fişekleri izlemek için tepeye tırmandık.', key: ['climbed'], note: 'Düzenli fiil: climb → climbed.' },
    { en: 'The camel walked slowly through the sand.', tr: 'Deve kumun içinde yavaşça yürüdü.', key: ['walked'], note: 'Bitmiş, belirli bir hareket.' },
    { en: 'My father won a medal in wrestling when he was young.', tr: 'Babam gençken güreşte madalya kazandı.', key: ['won'], note: 'win → won.' },
    { en: 'The tailor finished the suit in three days.', tr: 'Terzi takım elbiseyi üç günde bitirdi.', key: ['finished'], note: 'Belirli bir sürede bitmiş iş.' },
    { en: 'We heard the good news from our neighbour.', tr: 'İyi haberi komşumuzdan duyduk.', key: ['heard'], note: 'hear → heard.' },
    { en: 'The old man sat by the fire and smiled.', tr: 'Yaşlı adam ateşin yanına oturdu ve gülümsedi.', key: ['sat', 'smiled'], note: 'sit → sat; iki ardışık geçmiş olay.' },
    { en: 'My grandmother wove that carpet by hand.', tr: 'Büyükannem o halıyı elle dokudu.', key: ['wove'], note: 'weave → wove.' },
    { en: 'We ran to the shore to see the ship.', tr: 'Gemiyi görmek için kıyıya koştuk.', key: ['ran'], note: 'run → ran.' }
  ];

  MORE['past-continuous'] = [
    { en: 'The wrestlers were competing when it started to rain.', tr: 'Yağmur başladığında güreşçiler yarışıyordu.', key: ['were', 'competing', 'started'], note: 'Süren iş + kısa olay.' },
    { en: 'I was carving wood when my father called me.', tr: 'Babam beni çağırdığında tahta oyuyordum.', key: ['was', 'carving', 'called'], note: 'Uzun iş: oyuyordum.' },
    { en: 'We were dancing when the music suddenly stopped.', tr: 'Müzik aniden durduğunda dans ediyorduk.', key: ['were', 'dancing', 'stopped'], note: 'Süren iş + ani olay.' },
    { en: 'The storks were building their nest on the chimney.', tr: 'Leylekler bacada yuvalarını yapıyordu.', key: ['were', 'building'], note: 'Geçmişte belirli bir anda süren iş.' },
    { en: 'My grandmother was telling a story when I fell asleep.', tr: 'Büyükannem hikâye anlatırken ben uyuyakaldım.', key: ['was', 'telling', 'fell'], note: 'Uzun iş + kısa olay.' },
    { en: 'The potter was shaping the clay when the wheel broke.', tr: 'Çıkrık kırıldığında çömlekçi kili şekillendiriyordu.', key: ['was', 'shaping', 'broke'], note: 'Süren iş + araya giren olay.' },
    { en: 'We were watching the wrestling match on television.', tr: 'Televizyonda güreş maçını izliyorduk.', key: ['were', 'watching'], note: 'Geçmişte süren bir eylem.' },
    { en: 'The camels were crossing the desert while the sun was setting.', tr: 'Güneş batarken develer çölü geçiyordu.', key: ['were', 'crossing', 'was', 'setting'], note: 'İki eş zamanlı geçmiş iş.' },
    { en: 'I was collecting wood when I heard a strange sound.', tr: 'Odun toplarken garip bir ses duydum.', key: ['was', 'collecting', 'heard'], note: 'Süren iş + kısa olay.' },
    { en: 'The children were singing while their grandmother was cooking.', tr: 'Büyükanneleri yemek pişirirken çocuklar şarkı söylüyordu.', key: ['were', 'singing', 'was', 'cooking'], note: 'İki iş aynı anda sürüyordu.' },
    { en: 'We were preparing the henna when the bride arrived.', tr: 'Gelin geldiğinde biz kınayı hazırlıyorduk.', key: ['were', 'preparing', 'arrived'], note: 'Süren iş + kısa olay.' },
    { en: 'My father was fixing the fence when it began to snow.', tr: 'Kar yağmaya başladığında babam çiti tamir ediyordu.', key: ['was', 'fixing', 'began'], note: 'Uzun iş + kısa olay.' },
    { en: 'The band was playing when the guests started to leave.', tr: 'Misafirler ayrılmaya başladığında grup çalıyordu.', key: ['was', 'playing', 'started'], note: 'Süren iş + kısa olay.' },
    { en: 'I was climbing the hill when I twisted my ankle.', tr: 'Tepeye tırmanırken ayak bileğimi burktum.', key: ['was', 'climbing', 'twisted'], note: 'Süren iş + kaza anı.' },
    { en: 'We were sitting by the fire when we heard the wolves.', tr: 'Kurtları duyduğumuzda ateşin yanında oturuyorduk.', key: ['were', 'sitting', 'heard'], note: 'Uzun iş + kısa olay.' },
    { en: 'My mother was sewing when the lights suddenly went out.', tr: 'Işıklar aniden söndüğünde annem dikiş dikiyordu.', key: ['was', 'sewing', 'went'], note: 'Süren iş + ani kesinti.' },
    { en: 'The tailor was measuring the suit when the customer left.', tr: 'Müşteri ayrıldığında terzi takım elbiseyi ölçüyordu.', key: ['was', 'measuring', 'left'], note: 'Süren iş + kısa olay.' },
    { en: 'We were walking through the bazaar when it started to rain.', tr: 'Çarşıdan geçerken yağmur başladı.', key: ['were', 'walking', 'started'], note: 'Süren iş + araya giren olay.' }
  ];

  MORE['past-perfect'] = [
    { en: 'By the time the wedding started, the guests had already arrived.', tr: 'Düğün başladığında misafirler çoktan gelmişti.', key: ['had', 'already', 'arrived'], note: 'Düğünden önce biten iş: had + V3.' },
    { en: 'The potter had already sold all his jugs before noon.', tr: 'Çömlekçi öğleden önce bütün testilerini çoktan satmıştı.', key: ['had', 'already', 'sold'], note: 'Öğleden önce biten iş.' },
    { en: 'We had never seen a real wrestling match before that day.', tr: 'O güne kadar hiç gerçek bir güreş maçı görmemiştik.', key: ['had', 'never', 'seen'], note: 'Belirli bir ana kadarki deneyim.' },
    { en: 'My grandmother had finished the kilim before the guests came.', tr: 'Misafirler gelmeden önce büyükannem kilimi bitirmişti.', key: ['had', 'finished', 'before'], note: 'Misafirlerden önce biten iş.' },
    { en: 'The storks had left before the first snow fell.', tr: 'İlk kar yağmadan önce leylekler gitmişti.', key: ['had', 'left', 'before'], note: 'Kardan önce biten olay.' },
    { en: 'I had never tasted manti before I visited Kayseri.', tr: 'Kayseri’yi ziyaret etmeden önce hiç mantı tatmamıştım.', key: ['had', 'never', 'tasted'], note: 'Ziyaretten önceki deneyimsizlik.' },
    { en: 'By the time we arrived, the band had already started playing.', tr: 'Biz vardığımızda grup çalmaya çoktan başlamıştı.', key: ['had', 'already', 'started'], note: 'Varıştan önce başlayan iş.' },
    { en: 'She had already prepared the henna before the bride came.', tr: 'Gelin gelmeden önce kınayı çoktan hazırlamıştı.', key: ['had', 'already', 'prepared'], note: 'Gelinden önce biten hazırlık.' },
    { en: 'We had packed the tent before the storm began.', tr: 'Fırtına başlamadan önce çadırı toplamıştık.', key: ['had', 'packed', 'before'], note: 'Fırtınadan önce biten iş.' },
    { en: 'My father had built the fence before winter came.', tr: 'Kış gelmeden önce babam çiti yapmıştı.', key: ['had', 'built', 'before'], note: 'Kıştan önce biten iş.' },
    { en: 'The children had gone to sleep before the fireworks started.', tr: 'Havai fişekler başlamadan önce çocuklar uyumuştu.', key: ['had', 'gone', 'before'], note: 'go → gone.' },
    { en: 'I realized I had forgotten the wedding gift at home.', tr: 'Düğün hediyesini evde unuttuğumu fark ettim.', key: ['had', 'forgotten', 'realized'], note: 'Fark etmeden önce olan iş.' },
    { en: 'By the time the doctor arrived, the fever had gone down.', tr: 'Doktor geldiğinde ateş düşmüştü.', key: ['had', 'gone', 'down'], note: 'Varıştan önce olan değişim.' },
    { en: 'We had never climbed such a high mountain before.', tr: 'Daha önce hiç bu kadar yüksek bir dağa tırmanmamıştık.', key: ['had', 'never', 'climbed'], note: 'Belirli bir ana kadarki deneyimsizlik.' },
    { en: 'My uncle had already caught three fish by breakfast.', tr: 'Amcam kahvaltıya kadar çoktan üç balık yakalamıştı.', key: ['had', 'already', 'caught'], note: 'Kahvaltıdan önce biten iş.' },
    { en: 'The tailor had finished the suit before the wedding day.', tr: 'Terzi düğün gününden önce takım elbiseyi bitirmişti.', key: ['had', 'finished', 'before'], note: 'Düğünden önce biten iş.' },
    { en: 'She had lived in the village for years before she moved to the city.', tr: 'Şehre taşınmadan önce köyde yıllarca yaşamıştı.', key: ['had', 'lived', 'before'], note: 'Taşınmadan önceki uzun süreç.' },
    { en: 'We had already lit the fire when it started to rain.', tr: 'Yağmur başladığında ateşi çoktan yakmıştık.', key: ['had', 'already', 'lit'], note: 'light → lit.' }
  ];

  MORE['past-perfect-continuous'] = [
    { en: 'The wrestlers had been training for months before the tournament.', tr: 'Turnuvadan önce güreşçiler aylardır antrenman yapıyordu.', key: ['had', 'been', 'training'], note: 'Turnuvaya kadar süren hazırlık.' },
    { en: 'We had been walking through the bazaar for an hour before we found the shop.', tr: 'Dükkânı bulmadan önce bir saattir çarşıda yürüyorduk.', key: ['had', 'been', 'walking'], note: 'Bulmadan önceki süreç.' },
    { en: 'My grandmother had been weaving that kilim for a year before she finished it.', tr: 'Bitirmeden önce büyükannem o kilimi bir yıldır dokuyordu.', key: ['had', 'been', 'weaving'], note: 'Bitirmeden önceki uzun süreç.' },
    { en: 'The storks had been flying for days before they reached the village.', tr: 'Köye varmadan önce leylekler günlerdir uçuyordu.', key: ['had', 'been', 'flying'], note: 'Varmadan önceki süreç.' },
    { en: 'I had been collecting wood for an hour when it started to rain.', tr: 'Yağmur başladığında bir saattir odun topluyordum.', key: ['had', 'been', 'collecting'], note: 'Yağmurdan önceki süreç.' },
    { en: 'The band had been playing for hours before the guests began to dance.', tr: 'Misafirler dans etmeye başlamadan önce grup saatlerdir çalıyordu.', key: ['had', 'been', 'playing'], note: 'Dans başlamadan önceki süreç.' },
    { en: 'We had been climbing since morning before we reached the top.', tr: 'Zirveye varmadan önce sabahtan beri tırmanıyorduk.', key: ['had', 'been', 'climbing'], note: 'Zirveye kadar süren çaba.' },
    { en: 'My father had been fixing the roof for days before he finished.', tr: 'Bitirmeden önce babam günlerdir çatıyı tamir ediyordu.', key: ['had', 'been', 'fixing'], note: 'Bitirmeden önceki uzun süreç.' },
    { en: 'She had been preparing the henna since the previous night.', tr: 'Kına için bir önceki geceden beri hazırlanıyordu.', key: ['had', 'been', 'preparing'], note: 'Bir önceki geceden beri süren hazırlık.' },
    { en: 'The camels had been walking across the desert for a week before they reached water.', tr: 'Suya ulaşmadan önce develer bir haftadır çölü geçiyordu.', key: ['had', 'been', 'walking'], note: 'Suya ulaşmadan önceki süreç.' },
    { en: 'We had been waiting by the fire for hours before the storm passed.', tr: 'Fırtına geçmeden önce saatlerdir ateşin yanında bekliyorduk.', key: ['had', 'been', 'waiting'], note: 'Fırtınadan önceki bekleyiş.' },
    { en: 'The potter had been working at his wheel since sunrise.', tr: 'Çömlekçi gün doğumundan beri çıkrığında çalışıyordu.', key: ['had', 'been', 'working'], note: 'Belirli bir geçmiş ana kadar süren iş.' },
    { en: 'I had been practising for the wrestling match for months.', tr: 'Güreş maçı için aylardır antrenman yapıyordum.', key: ['had', 'been', 'practising'], note: 'Maça kadar süren hazırlık.' },
    { en: 'My uncle had been fishing in that river since he was a boy.', tr: 'Amcam çocukluğundan beri o nehirde balık tutuyordu.', key: ['had', 'been', 'fishing', 'since'], note: 'Çok uzun süredir devam eden uğraş.' }
  ];

  MORE['future-simple'] = [
    { en: 'We will celebrate the wedding in the village square.', tr: 'Düğünü köy meydanında kutlayacağız.', key: ['will', 'celebrate'], note: 'Gelecekle ilgili bir plan.' },
    { en: 'My grandfather will tell us a new story tonight.', tr: 'Dedem bu gece bize yeni bir hikâye anlatacak.', key: ['will', 'tell'], note: 'Gelecekteki basit bir olay.' },
    { en: 'The storks will return in early spring.', tr: 'Leylekler ilkbaharın başında geri dönecek.', key: ['will', 'return'], note: 'Doğal bir gelecek olay.' },
    { en: 'I will buy a new kilim from the bazaar.', tr: 'Çarşıdan yeni bir kilim alacağım.', key: ['will', 'buy'], note: 'Anlık verilen bir karar.' },
    { en: 'Will the wrestlers compete this weekend?', tr: 'Güreşçiler bu hafta sonu yarışacak mı?', key: ['will', 'compete'], note: 'Soru: Will + özne + V1?' },
    { en: 'My mother will not sew that dress until next week.', tr: 'Annem o elbiseyi gelecek haftaya kadar dikmeyecek.', key: ['will', 'not', 'sew'], note: 'Olumsuz gelecek zaman.' },
    { en: 'We will watch the fireworks from the hill.', tr: 'Havai fişekleri tepeden izleyeceğiz.', key: ['will', 'watch'], note: 'Gelecekteki basit bir plan.' },
    { en: 'I think the tournament will be exciting this year.', tr: 'Sanırım bu yıl turnuva heyecanlı olacak.', key: ['will', 'be'], note: 'I think + will: kişisel tahmin.' },
    { en: 'My uncle will teach my son how to fish.', tr: 'Amcam oğluma balık tutmayı öğretecek.', key: ['will', 'teach'], note: 'Gelecekteki bir söz/plan.' },
    { en: 'The band will play until midnight.', tr: 'Grup gece yarısına kadar çalacak.', key: ['will', 'play'], note: 'Basit gelecek zaman.' },
    { en: 'We will visit the old castle next holiday.', tr: 'Gelecek bayramda eski kaleyi ziyaret edeceğiz.', key: ['will', 'visit'], note: 'Belirli bir gelecek tarih.' },
    { en: 'I promise I will finish the kilim by winter.', tr: 'Söz veriyorum kilimi kışa kadar bitireceğim.', key: ['will', 'finish'], note: 'Söz verme: promise + will.' },
    { en: 'The camels will rest by the well tonight.', tr: 'Develer bu gece kuyunun yanında dinlenecek.', key: ['will', 'rest'], note: 'Gelecekteki basit bir olay.' },
    { en: 'My father will plant new saplings in the spring.', tr: 'Babam ilkbaharda yeni fidanlar dikecek.', key: ['will', 'plant'], note: 'Gelecek için basit bir niyet.' },
    { en: 'Will you come to the wedding next month?', tr: 'Gelecek ay düğüne gelecek misin?', key: ['will', 'come'], note: 'Soru: Will you...?' },
    { en: 'The village will hold its festival in August.', tr: 'Köy festivalini ağustosta düzenleyecek.', key: ['will', 'hold'], note: 'Gelecekteki planlanmış bir olay.' },
    { en: 'We will not forget this wonderful wedding.', tr: 'Bu güzel düğünü unutmayacağız.', key: ['will', 'not', 'forget'], note: 'Olumsuz gelecek zaman.' },
    { en: 'My grandmother will weave a new kilim this winter.', tr: 'Büyükannem bu kış yeni bir kilim dokuyacak.', key: ['will', 'weave'], note: 'Gelecekteki basit bir plan.' }
  ];

  MORE['future-continuous'] = [
    { en: 'This time tomorrow, we will be dancing at the wedding.', tr: 'Yarın bu saatte düğünde dans ediyor olacağız.', key: ['will', 'be', 'dancing'], note: 'Gelecekte belirli bir anda süren iş.' },
    { en: 'At sunset, the storks will be flying over the village.', tr: 'Gün batımında leylekler köyün üzerinde uçuyor olacak.', key: ['will', 'be', 'flying'], note: 'Belirli bir gelecek anda süren iş.' },
    { en: 'Next week, the potter will be shaping new jugs.', tr: 'Gelecek hafta çömlekçi yeni testiler şekillendiriyor olacak.', key: ['will', 'be', 'shaping'], note: 'Gelecekteki bir dönem boyunca sürer.' },
    { en: 'At noon, the wrestlers will be competing in the square.', tr: 'Öğlen güreşçiler meydanda yarışıyor olacak.', key: ['will', 'be', 'competing'], note: 'Belirli saatte süren gelecek iş.' },
    { en: 'This time next month, we will be preparing for the festival.', tr: 'Gelecek ay bu saatlerde festival için hazırlanıyor olacağız.', key: ['will', 'be', 'preparing'], note: 'Gelecekte belirli bir anda süren iş.' },
    { en: 'My grandmother will be weaving all afternoon.', tr: 'Büyükannem bütün öğleden sonra dokuma yapıyor olacak.', key: ['will', 'be', 'weaving'], note: 'Uzun bir gelecek dönem boyunca süren iş.' },
    { en: 'At six o’clock, the band will be playing in the square.', tr: 'Saat altıda grup meydanda çalıyor olacak.', key: ['will', 'be', 'playing'], note: 'Belirli saatte süren iş.' },
    { en: 'We will be climbing the mountain this time tomorrow.', tr: 'Yarın bu saatte dağa tırmanıyor olacağız.', key: ['will', 'be', 'climbing'], note: '"this time tomorrow" belirli bir gelecek an.' },
    { en: 'My father will be fishing by the river all morning.', tr: 'Babam bütün sabah nehirde balık tutuyor olacak.', key: ['will', 'be', 'fishing'], note: 'Uzun süre boyunca sürecek iş.' },
    { en: 'Next Friday, the tailor will be finishing the wedding suit.', tr: 'Gelecek cuma terzi düğün takım elbisesini bitiriyor olacak.', key: ['will', 'be', 'finishing'], note: 'Belirli bir gelecek anda süren iş.' },
    { en: 'This time next year, we will be living in the new village.', tr: 'Gelecek yıl bu saatlerde yeni köyde yaşıyor olacağız.', key: ['will', 'be', 'living'], note: 'Uzak bir gelecekteki an.' },
    { en: 'At dawn, the camels will be crossing the desert.', tr: 'Şafakta develer çölü geçiyor olacak.', key: ['will', 'be', 'crossing'], note: 'Belirli bir gelecek anda süren iş.' },
    { en: 'We will be watching the fireworks by the sea.', tr: 'Havai fişekleri deniz kenarında izliyor olacağız.', key: ['will', 'be', 'watching'], note: 'Gelecekte belirli bir anda süren iş.' },
    { en: 'My mother will be cooking for the guests all day tomorrow.', tr: 'Annem yarın bütün gün misafirler için yemek pişiriyor olacak.', key: ['will', 'be', 'cooking'], note: '"all day tomorrow" uzun süreli gelecek iş.' }
  ];

  MORE['future-perfect'] = [
    { en: 'By the wedding day, the tailor will have finished the suit.', tr: 'Düğün gününe kadar terzi takım elbiseyi bitirmiş olacak.', key: ['will', 'have', 'finished'], note: 'by + son tarih.' },
    { en: 'By spring, the storks will have returned to the village.', tr: 'İlkbahara kadar leylekler köye dönmüş olacak.', key: ['will', 'have', 'returned'], note: 'Belirli bir tarihe kadar tamamlanan doğal olay.' },
    { en: 'By next month, my grandmother will have woven the whole kilim.', tr: 'Gelecek aya kadar büyükannem bütün kilimi dokumuş olacak.', key: ['will', 'have', 'woven'], note: 'weave → woven.' },
    { en: 'By the time the guests arrive, we will have prepared the henna.', tr: 'Misafirler geldiğinde kınayı hazırlamış olacağız.', key: ['will', 'have', 'prepared'], note: 'Varıştan önce tamamlanmış olacak.' },
    { en: 'By August, the village will have held its festival.', tr: 'Ağustosa kadar köy festivalini düzenlemiş olacak.', key: ['will', 'have', 'held'], note: 'hold → held.' },
    { en: 'By the end of the tournament, the wrestlers will have competed ten times.', tr: 'Turnuva sonuna kadar güreşçiler on kez yarışmış olacak.', key: ['will', 'have', 'competed'], note: 'Belirli bir tarihe kadar tamamlanan tekrar.' },
    { en: 'By tonight, my father will have caught enough fish for dinner.', tr: 'Bu geceye kadar babam akşam yemeği için yeterince balık yakalamış olacak.', key: ['will', 'have', 'caught'], note: 'catch → caught.' },
    { en: 'By next winter, we will have finished building the barn.', tr: 'Gelecek kışa kadar ahırı bitirmiş olacağız.', key: ['will', 'have', 'finished'], note: 'Belirli bir gelecek tarihe kadar tamamlanacak.' },
    { en: 'By the time you arrive, I will have decorated the whole hall.', tr: 'Sen vardığında bütün salonu süslemiş olacağım.', key: ['will', 'have', 'decorated'], note: 'Varıştan önce tamamlanmış olacak.' },
    { en: 'By next year, the potter will have sold a thousand jugs.', tr: 'Gelecek yıla kadar çömlekçi bin testi satmış olacak.', key: ['will', 'have', 'sold'], note: 'sell → sold.' },
    { en: 'By midnight, the band will have played every folk song they know.', tr: 'Gece yarısına kadar grup bildiği bütün halk şarkılarını çalmış olacak.', key: ['will', 'have', 'played'], note: 'Belirli bir saate kadar tamamlanacak.' },
    { en: 'By the time we return, the camels will have rested well.', tr: 'Biz dönene kadar develer iyice dinlenmiş olacak.', key: ['will', 'have', 'rested'], note: 'Dönüşten önce tamamlanan durum.' },
    { en: 'By next spring, we will have planted a hundred saplings.', tr: 'Gelecek ilkbahara kadar yüz fidan dikmiş olacağız.', key: ['will', 'have', 'planted'], note: 'Belirli bir tarihe kadar tamamlanacak iş.' },
    { en: 'By the end of the day, the children will have collected all the shells.', tr: 'Gün sonuna kadar çocuklar bütün kabukları toplamış olacak.', key: ['will', 'have', 'collected'], note: 'Gün sonuna kadar tamamlanan iş.' },
    { en: 'By the time the sun sets, we will have climbed the whole mountain.', tr: 'Güneş batana kadar bütün dağa tırmanmış olacağız.', key: ['will', 'have', 'climbed'], note: 'Gün batımına kadar tamamlanacak.' },
    { en: 'By next Friday, my mother will have finished sewing the dress.', tr: 'Gelecek cumaya kadar annem elbiseyi dikmeyi bitirmiş olacak.', key: ['will', 'have', 'finished'], note: 'Belirli bir tarihe kadar tamamlanacak.' }
  ];

  MORE['future-perfect-continuous'] = [
    { en: 'By the time the festival ends, the band will have been playing for six hours.', tr: 'Festival bittiğinde grup altı saattir çalıyor olacak.', key: ['will', 'have', 'been', 'playing'], note: 'Bitiş anına kadar biriken süre.' },
    { en: 'By next spring, my grandmother will have been weaving that kilim for a year.', tr: 'Gelecek ilkbahara kadar büyükannem o kilimi bir yıldır dokuyor olacak.', key: ['will', 'have', 'been', 'weaving'], note: 'Bir yıllık sürenin gelecekte tamamlanması.' },
    { en: 'By dawn, the camels will have been walking across the desert all night.', tr: 'Şafağa kadar develer bütün gece çölü geçiyor olacak.', key: ['will', 'have', 'been', 'walking'], note: 'Şafağa kadar biriken süre.' },
    { en: 'By the wedding day, my mother will have been sewing the dress for two months.', tr: 'Düğün gününe kadar annem elbiseyi iki aydır dikiyor olacak.', key: ['will', 'have', 'been', 'sewing'], note: 'Düğüne kadar biriken çalışma.' },
    { en: 'By next month, the potter will have been working at his wheel for thirty years.', tr: 'Gelecek aya kadar çömlekçi otuz yıldır çıkrığında çalışıyor olacak.', key: ['will', 'have', 'been', 'working'], note: 'Çok uzun bir sürenin gelecekte tamamlanması.' },
    { en: 'By noon, we will have been climbing for six hours.', tr: 'Öğlene kadar altı saattir tırmanıyor olacağız.', key: ['will', 'have', 'been', 'climbing'], note: 'Öğlene kadar biriken süre.' },
    { en: 'By the time the tournament ends, the wrestlers will have been competing for a week.', tr: 'Turnuva bittiğinde güreşçiler bir haftadır yarışıyor olacak.', key: ['will', 'have', 'been', 'competing'], note: 'Bitişe kadar biriken süre.' },
    { en: 'By next year, my uncle will have been fishing in that river for fifty years.', tr: 'Gelecek yıla kadar amcam o nehirde elli yıldır balık tutuyor olacak.', key: ['will', 'have', 'been', 'fishing'], note: 'Çok uzun bir alışkanlığın gelecekte de sürmesi.' },
    { en: 'By sunset, the storks will have been flying for twelve hours.', tr: 'Gün batımına kadar leylekler on iki saattir uçuyor olacak.', key: ['will', 'have', 'been', 'flying'], note: 'Gün batımına kadar biriken süre.' },
    { en: 'By the time we arrive, they will have been dancing for hours.', tr: 'Biz vardığımızda saatlerdir dans ediyor olacaklar.', key: ['will', 'have', 'been', 'dancing'], note: 'Varış anına kadar biriken süre.' },
    { en: 'By next winter, we will have been living in this village for a decade.', tr: 'Gelecek kışa kadar bu köyde on yıldır yaşıyor olacağız.', key: ['will', 'have', 'been', 'living'], note: 'On yıllık sürenin gelecekte tamamlanması.' },
    { en: 'By the end of the summer, my father will have been building the barn for six months.', tr: 'Yaz sonuna kadar babam ahırı altı aydır inşa ediyor olacak.', key: ['will', 'have', 'been', 'building'], note: 'Yaz sonuna kadar biriken inşaat süresi.' }
  ];

  /* ---- yukarıdaki cümlelerde geçen, sözlükte muhtemelen eksik kalan
     kelimeler; node tests/validate-content.js çıktısına göre güncellenir ---- */
  KI.glossary.addWords([
  'echo|yankılanmak, yankı|fiil', 'across|karşıya, boyunca|edat', 'potter|çömlekçi|isim',
  'national|ulusal|sıfat', 'parade|geçit töreni|isim', 'workshop|atölye|isim',
  'wrestler|güreşçi|isim', 'decorate|süslemek|fiil', 'jug|testi, sürahi|isim',
  'kite|uçurtma|isim', 'higher|daha yüksek|sıfat', 'tent|çadır|isim',
  'sapling|fidan|isim', 'bride|gelin|isim', 'henna|kına|isim',
  'such|bu kadar, böyle|sıfat', 'around|etrafında, çevresinde|edat', 'nest|yuva|isim',
  'compete|yarışmak|fiil', 'favourite|en sevilen|sıfat', 'herself|kendisi (kadın)|zamir',
  'firework|havai fişek|isim', 'asleep|uykuda; fall asleep: uyuyakalmak|sıfat', 'twist|burkmak|fiil',
  'ankle|ayak bileği|isim', 'wolf|kurt|isim', 'wolves|kurtlar|isim',
  'gift|hediye|isim', 'wonderful|harika|sıfat'
  ]);

  /* ---- her zamanın examples dizisine ekle ---- */
  if (KI.tenses && KI.tenses.list) {
    KI.tenses.list.forEach(function (t) {
      if (MORE[t.id]) t.examples = (t.examples || []).concat(MORE[t.id]);
    });
  }
})(window.KI);
