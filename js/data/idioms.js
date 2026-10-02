/* ============================================================
   Gramer Atlası - idioms.js
   Sözlük > Deyimler: Türkçe atasözü / deyim / kalıp sözlerin
   İngilizcede KALIPLAŞMIŞ karşılıkları.

   Seçim kuralı: yalnız İngilizcede gerçekten yerleşik, anadili
   İngilizce olanların tanıyacağı bir karşılığı olanlar alındı.
   Kelimesi kelimesine çeviri ya da uydurma karşılık yok. Karşılığı
   olmayanlar (ör. "aç ayı oynamaz") bilerek listede değil.

   Biçim: d(tür, tr, en, anlam, benzerlik, not, örnekEN, örnekTR)
     tür       : 'atasozu' | 'deyim' | 'kalip'
     benzerlik : 'birebir' - aynı imge (ateş/duman, balık/baş...)
                 'anlam'   - imge farklı, anlam aynı
   ============================================================ */
(function (KI) {
  'use strict';

  var L = [];
  function d(cat, tr, en, mean, match, note, ex, exTr) {
    L.push({ cat: cat, tr: tr, en: en, mean: mean, match: match, note: note || '', ex: ex || '', exTr: exTr || '' });
  }

  /* ======================= ATASÖZLERİ ======================= */
  d('atasozu', 'Haydan gelen huya gider.', 'Easy come, easy go.',
    'Emeksiz, kolay kazanılan şey kolayca elden çıkar.', 'anlam', '',
    'He won the money in a game and lost it the next day. Easy come, easy go.',
    'Parayı bir oyunda kazandı, ertesi gün kaybetti. Haydan gelen huya gider.');
  d('atasozu', 'Ateş olmayan yerden duman çıkmaz.', 'There’s no smoke without fire.',
    'Hakkında söylenti çıkan şeyde mutlaka bir gerçek payı vardır.', 'birebir', '',
    'Everyone says the shop is closing. There’s no smoke without fire.',
    'Herkes dükkânın kapanacağını söylüyor. Ateş olmayan yerden duman çıkmaz.');
  d('atasozu', 'Dost kara günde belli olur.', 'A friend in need is a friend indeed.',
    'Gerçek dost, zor zamanında yanında olandır.', 'anlam', 'Kelimesi kelimesine: "İhtiyaç anındaki dost, gerçek dosttur."',
    'When I was ill, Ali brought me soup every day. A friend in need is a friend indeed.',
    'Hastayken Ali bana her gün çorba getirdi. Dost kara günde belli olur.');
  d('atasozu', 'Her işte bir hayır vardır.', 'Every cloud has a silver lining.',
    'Kötü görünen her olayın bir iyi yanı vardır.', 'anlam', 'Kelimesi kelimesine: "Her bulutun gümüş bir kenarı vardır."',
    'I missed the bus, but I met an old friend at the stop. Every cloud has a silver lining.',
    'Otobüsü kaçırdım ama durakta eski bir arkadaşıma rastladım. Her işte bir hayır vardır.');
  d('atasozu', 'Ne ekersen onu biçersin.', 'You reap what you sow.',
    'Yaptıklarının sonucunu er geç görürsün.', 'birebir');
  d('atasozu', 'Sabreden derviş muradına ermiş.', 'Good things come to those who wait.',
    'Sabırlı olan sonunda istediğine kavuşur.', 'anlam');
  d('atasozu', 'Acele işe şeytan karışır.', 'Haste makes waste.',
    'Aceleyle yapılan iş hatalı olur.', 'anlam', 'Kelimesi kelimesine: "Acele israf yaratır."');
  d('atasozu', 'Söz gümüşse sükût altındır.', 'Speech is silver, silence is golden.',
    'Bazen konuşmamak, konuşmaktan daha değerlidir.', 'birebir', 'Kısaca "Silence is golden." da denir.');
  d('atasozu', 'Bugünün işini yarına bırakma.', 'Never put off till tomorrow what you can do today.',
    'Yapabileceğin işi erteleme.', 'birebir');
  d('atasozu', 'Ayağını yorganına göre uzat.', 'Cut your coat according to your cloth.',
    'Harcamanı gelirine göre ayarla.', 'anlam', 'Kelimesi kelimesine: "Ceketini kumaşına göre kes." Günlük dilde "Live within your means." da kullanılır.');
  d('atasozu', 'Her yiğidin bir yoğurt yiyişi vardır.', 'Different strokes for different folks.',
    'Herkesin bir işi yapma biçimi farklıdır.', 'anlam', '"Each to their own." da aynı anlamda kullanılır.');
  d('atasozu', 'Tencere yuvarlanmış kapağını bulmuş.', 'Birds of a feather flock together.',
    'Benzer huydaki insanlar birbirini bulur.', 'anlam', 'Türkçedeki iğneleyici ton İngilizcede de var; genelde olumsuz kişiler için söylenir.');
  d('atasozu', 'Kedi uzanamadığı ciğere mundar der.', 'Sour grapes.',
    'Elde edemediği şeyi kötüleyerek kendini avutmak.', 'anlam', 'Ezop’un tilki ve üzüm masalından gelir: "That’s just sour grapes."',
    'He says the job was boring, but that’s just sour grapes.',
    'İşin sıkıcı olduğunu söylüyor ama bu, kedi uzanamadığı ciğere mundar der durumu.');
  d('atasozu', 'Kaptanı çok olan gemi batar.', 'Too many cooks spoil the broth.',
    'Bir işe çok kişi karışırsa iş bozulur.', 'anlam', 'Kelimesi kelimesine: "Çok aşçı çorbayı bozar."');
  d('atasozu', 'Atı alan Üsküdar’ı geçti.', 'It’s like shutting the stable door after the horse has bolted.',
    'Önlem için artık çok geç.', 'birebir', 'İki dilde de at kaçtıktan sonrası anlatılıyor.');
  d('atasozu', 'Dereyi görmeden paçaları sıvama.', 'Don’t count your chickens before they hatch.',
    'Sonucu kesinleşmeden sevinme, plan yapma.', 'anlam', 'Kelimesi kelimesine: "Civcivleri yumurtadan çıkmadan sayma."');
  d('atasozu', 'Ağlamayan çocuğa meme vermezler.', 'The squeaky wheel gets the grease.',
    'Derdini dile getirmeyen, istediğini alamaz.', 'anlam', 'Kelimesi kelimesine: "Gıcırdayan tekerlek yağlanır."');
  d('atasozu', 'Balık baştan kokar.', 'A fish rots from the head down.',
    'Bir kurumdaki bozulma yöneticilerden başlar.', 'birebir');
  d('atasozu', 'Erken kalkan yol alır.', 'The early bird catches the worm.',
    'Erken davranan fırsatı yakalar.', 'anlam', 'Kelimesi kelimesine: "Erken kalkan kuş solucanı yakalar."');
  d('atasozu', 'Ak akçe kara gün içindir.', 'Save for a rainy day.',
    'Zor günler için para biriktir.', 'anlam', 'İngilizcede "kara gün" yerine "yağmurlu gün" denir.');
  d('atasozu', 'Boş teneke çok tıngırdar.', 'Empty vessels make the most noise.',
    'Bilgisi az olan çok konuşur.', 'birebir', 'İki dilde de içi boş kap çok ses çıkarır.');
  d('atasozu', 'Bugünkü tavuk yarınki kazdan iyidir.', 'A bird in the hand is worth two in the bush.',
    'Eldeki az ama kesin şey, belirsiz büyük şeyden iyidir.', 'anlam');
  d('atasozu', 'Gözden ırak olan gönülden de ırak olur.', 'Out of sight, out of mind.',
    'Görmediğin kişiyi ya da şeyi zamanla unutursun.', 'birebir');
  d('atasozu', 'Hatasız kul olmaz.', 'To err is human.',
    'Herkes hata yapabilir.', 'anlam', 'Günlük dilde "Nobody’s perfect." daha sık duyulur.');
  d('atasozu', 'Komşunun tavuğu komşuya kaz görünür.', 'The grass is always greener on the other side.',
    'Başkasının sahip olduğu şey insana hep daha iyi görünür.', 'anlam');
  d('atasozu', 'Körle yatan şaşı kalkar.', 'If you lie down with dogs, you get up with fleas.',
    'Kötü insanlarla düşüp kalkan onların huyunu kapar.', 'anlam');
  d('atasozu', 'Lafla peynir gemisi yürümez.', 'Talk is cheap.',
    'Yalnız konuşmakla iş olmaz.', 'anlam');
  d('atasozu', 'Ayinesi iştir kişinin lafa bakılmaz.', 'Actions speak louder than words.',
    'Kişiyi sözleri değil, yaptıkları gösterir.', 'anlam');
  d('atasozu', 'Rüzgâr eken fırtına biçer.', 'Sow the wind and reap the whirlwind.',
    'Kötülük yapan, daha büyük kötülükle karşılaşır.', 'birebir', 'Kökeni Kitab-ı Mukaddes’tir; iki dilde de aynı imge.');
  d('atasozu', 'Tatlı dil yılanı deliğinden çıkarır.', 'You catch more flies with honey than with vinegar.',
    'Kibar ve tatlı konuşarak her şey elde edilir.', 'anlam');
  d('atasozu', 'Yalancının mumu yatsıya kadar yanar.', 'Truth will out.',
    'Yalan uzun sürmez, gerçek er geç ortaya çıkar.', 'anlam', 'Bu kalıpta "out" fiil gibi kullanılır: gerçek dışarı çıkar.');
  d('atasozu', 'Yuvarlanan taş yosun tutmaz.', 'A rolling stone gathers no moss.',
    'Sürekli yer ya da iş değiştiren bir şey biriktiremez.', 'birebir');
  d('atasozu', 'Sütten ağzı yanan yoğurdu üfleyerek yer.', 'Once bitten, twice shy.',
    'Kötü bir deneyim yaşayan, sonra çok temkinli olur.', 'anlam', 'Kelimesi kelimesine: "Bir kez ısırılan, iki kez çekingen olur."');
  d('atasozu', 'Kol kırılır yen içinde.', 'Don’t wash your dirty linen in public.',
    'Aile ya da grup içi sorunlar dışarıya taşınmaz.', 'anlam', 'Kelimesi kelimesine: "Kirli çamaşırlarını herkesin önünde yıkama."');
  d('atasozu', 'Ucuz etin yahnisi yavan olur.', 'You get what you pay for.',
    'Ucuz şeyin kalitesi de düşük olur.', 'anlam');
  d('atasozu', 'Her horoz kendi çöplüğünde öter.', 'Every cock crows on its own dunghill.',
    'Herkes kendi alanında güçlü ve gürültülüdür.', 'birebir', 'Eski ama yerleşik bir atasözü; iki dilde de aynı horoz ve çöplük.');
  d('atasozu', 'Bir musibet bin nasihatten yeğdir.', 'Experience is the best teacher.',
    'İnsan en iyi başına gelenden ders alır.', 'anlam');
  d('atasozu', 'İşleyen demir ışıldar.', 'Use it or lose it.',
    'Kullanılan beceri ve araç canlı kalır; kullanılmayan körelir.', 'anlam');
  d('atasozu', 'Can çıkmayınca huy çıkmaz.', 'A leopard can’t change its spots.',
    'İnsanın temel huyu değişmez.', 'anlam', 'Kelimesi kelimesine: "Leopar beneklerini değiştiremez."');
  d('atasozu', 'İt ürür, kervan yürür.', 'The dogs bark, but the caravan moves on.',
    'Boş eleştiriler işi durdurmaz.', 'birebir', 'Doğu kökenli bu söz İngilizceye de aynı imgeyle geçmiştir.');
  d('atasozu', 'Kötü haber tez duyulur.', 'Bad news travels fast.',
    'Kötü haber çabuk yayılır.', 'birebir');
  d('atasozu', 'Gelen gideni aratır.', 'Better the devil you know than the devil you don’t.',
    'Tanıdığın kötü, tanımadığın yeniden iyidir.', 'anlam');
  d('atasozu', 'Bin ölç bir biç.', 'Measure twice, cut once.',
    'Bir işe başlamadan önce iyice düşün ve kontrol et.', 'birebir', 'Türkçede "bin", İngilizcede "iki" kez ölçülür; imge aynı.');
  d('atasozu', 'Son gülen iyi güler.', 'He who laughs last laughs best.',
    'Erken sevinme; sonunda kazanan asıl kazanandır.', 'birebir');
  d('atasozu', 'Vakit nakittir.', 'Time is money.',
    'Zaman değerlidir, boşa harcanmamalı.', 'birebir');
  d('atasozu', 'Ümit kesilmez.', 'While there’s life, there’s hope.',
    'Yaşadıkça umut vardır.', 'anlam');
  d('atasozu', 'Her şeyin başı sağlık.', 'Health is better than wealth.',
    'Sağlık her şeyden önemlidir.', 'anlam', '"Health is wealth." biçimi de yaygındır.');
  d('atasozu', 'Kervan yolda düzülür.', 'We’ll cross that bridge when we come to it.',
    'Sorunla zamanı gelince ilgileniriz, şimdiden dert etme.', 'anlam');
  d('atasozu', 'Sabah ola, hayır ola.', 'Sleep on it.',
    'Karar vermeden önce bir gece bekle, sabah daha iyi düşünürsün.', 'anlam', 'Daha çok öneri olarak kullanılır: "Why don’t you sleep on it?"');
  d('atasozu', 'Bir elin nesi var, iki elin sesi var.', 'Many hands make light work.',
    'Birlikte çalışınca iş kolaylaşır.', 'anlam');
  d('atasozu', 'Akıl akıldan üstündür.', 'Two heads are better than one.',
    'Birlikte düşünmek tek başına düşünmekten iyidir.', 'anlam');
  d('atasozu', 'Mum dibine ışık vermez.', 'The shoemaker’s children go barefoot.',
    'İnsan en yakınlarına kendi işinden yarar sağlamaz.', 'anlam', 'Kelimesi kelimesine: "Ayakkabıcının çocukları yalınayak gezer."');
  d('atasozu', 'Sakla samanı, gelir zamanı.', 'Waste not, want not.',
    'Bugün israf etmezsen yarın sıkıntı çekmezsin.', 'anlam');
  d('atasozu', 'Damlaya damlaya göl olur.', 'Every little helps.',
    'Küçük birikimler zamanla büyük bir şey olur.', 'anlam', '"Little by little" ve "Many a little makes a mickle." da aynı fikri taşır.');
  d('atasozu', 'Gülü seven dikenine katlanır.', 'Take the rough with the smooth.',
    'Bir şeyi seviyorsan zorluklarını da kabul edersin.', 'anlam', 'Gül-diken imgesi "Every rose has its thorn." sözünde de vardır.');
  d('atasozu', 'Ağaç yaşken eğilir.', 'You can’t teach an old dog new tricks.',
    'Alışkanlıklar küçükken kazanılır; büyüyünce değiştirmek zordur.', 'anlam', 'Aynı fikri ters taraftan söyler: "Yaşlı köpeğe yeni numara öğretilmez."');
  d('atasozu', 'Su testisi su yolunda kırılır.', 'The pitcher goes so often to the well that it is broken at last.',
    'Tehlikeli işi sürekli yapan, sonunda o işte zarar görür.', 'birebir', 'Eski bir İngiliz atasözü; testi ve kuyu imgesi aynı.');
  d('atasozu', 'Görünen köy kılavuz istemez.', 'It’s as plain as day.',
    'Apaçık olan şey için kanıt ya da açıklama gerekmez.', 'anlam');
  d('atasozu', 'Her şey olacağına varır.', 'What will be, will be.',
    'Olacak olan olur.', 'birebir', 'İspanyolca "Que sera, sera" olarak da bilinir.');
  d('atasozu', 'Sona kalan dona kalır.', 'First come, first served.',
    'Önce gelen önce alır; geç kalan eli boş döner.', 'anlam');
  d('atasozu', 'Çivi çiviyi söker.', 'Fight fire with fire.',
    'Bir şeye onun kendi yöntemiyle karşılık vermek.', 'anlam');
  d('atasozu', 'Damdan düşen halinden anlar.', 'Only the wearer knows where the shoe pinches.',
    'Bir derdi en iyi, aynı derdi yaşamış olan anlar.', 'anlam', 'Kelimesi kelimesine: "Ayakkabının nereyi sıktığını yalnız giyen bilir."');
  d('atasozu', 'Eşek hoşaftan ne anlar?', 'Cast pearls before swine.',
    'Değerli bir şeyi kıymetini bilmeyene sunmak.', 'anlam', 'İngilizcede genelde "Don’t cast pearls before swine." biçiminde kullanılır.');
  d('atasozu', 'Dimyat’a pirince giderken evdeki bulgurdan olmak.', 'Go for wool and come home shorn.',
    'Daha fazlasını isterken elindekini de kaybetmek.', 'anlam', 'Kelimesi kelimesine: "Yün almaya gidip kırkılmış dönmek." Eski ama yerleşik bir söz.');

  /* ========================= DEYİMLER ========================= */
  d('deyim', 'Bir taşla iki kuş vurmak', 'kill two birds with one stone',
    'Tek hamlede iki işi birden halletmek.', 'birebir', '',
    'I visited my aunt and bought bread on the way. I killed two birds with one stone.',
    'Teyzemi ziyaret ettim, yolda ekmek de aldım. Bir taşla iki kuş vurdum.');
  d('deyim', 'Ateşe benzin dökmek', 'add fuel to the fire',
    'Zaten kötü olan durumu daha da kızıştırmak.', 'birebir', '',
    'Don’t shout at him. You will only add fuel to the fire.',
    'Ona bağırma. Yalnızca ateşe benzin dökersin.');
  d('deyim', 'Pireyi deve yapmak', 'make a mountain out of a molehill',
    'Küçük bir sorunu çok büyütmek.', 'anlam', 'Kelimesi kelimesine: "Köstebek tepesinden dağ yapmak."',
    'It’s only a small scratch. Don’t make a mountain out of a molehill.',
    'Sadece küçük bir çizik. Pireyi deve yapma.');
  d('deyim', 'Ağzı kulaklarına varmak', 'grin from ear to ear',
    'Çok sevinip kocaman gülümsemek.', 'birebir', '',
    'When she saw her results, she was grinning from ear to ear.',
    'Sonuçlarını görünce ağzı kulaklarına vardı.');
  d('deyim', 'Dilinin ucunda olmak', 'be on the tip of your tongue',
    'Bir şeyi hatırlamak üzere olup söyleyememek.', 'birebir', '',
    'His name is on the tip of my tongue.',
    'Adı dilimin ucunda.');
  d('deyim', 'Kafa kafaya vermek', 'put our heads together',
    'Bir sorunu birlikte düşünüp çözmek.', 'birebir', '',
    'If we put our heads together, we can find a solution.',
    'Kafa kafaya verirsek bir çözüm buluruz.');
  d('deyim', 'Yüreği ağzına gelmek', 'have your heart in your mouth',
    'Çok korkmak, heyecandan nefesi kesilmek.', 'birebir', '',
    'When the car slid on the ice, I had my heart in my mouth.',
    'Araba buzda kayınca yüreğim ağzıma geldi.');
  d('deyim', 'Etekleri zil çalmak', 'be over the moon',
    'Çok sevinmek.', 'anlam', 'Kelimesi kelimesine: "Ayın üstünde olmak."',
    'She was over the moon when she heard the news.',
    'Haberi duyunca etekleri zil çaldı.');
  d('deyim', 'Göz yummak', 'turn a blind eye',
    'Bir yanlışı bilerek görmezden gelmek.', 'birebir', '',
    'The teacher turned a blind eye to his mistake.',
    'Öğretmen onun hatasına göz yumdu.');
  d('deyim', 'Sudan çıkmış balığa dönmek', 'be like a fish out of water',
    'Alışık olmadığı bir ortamda rahatsız ve yabancı hissetmek.', 'birebir', '',
    'At the big wedding I felt like a fish out of water.',
    'O büyük düğünde sudan çıkmış balığa döndüm.');
  d('deyim', 'Kılı kırk yarmak', 'split hairs',
    'Çok küçük ayrıntılar üzerinde aşırı titizlikle durmak.', 'birebir', 'İki dilde de kıl bölünür.',
    'Stop splitting hairs. The plan is good enough.',
    'Kılı kırk yarmayı bırak. Plan yeterince iyi.');
  d('deyim', 'Çam devirmek', 'put your foot in it',
    'Farkında olmadan yersiz, kırıcı bir şey söylemek.', 'anlam', '',
    'I asked about her husband, but they had divorced. I really put my foot in it.',
    'Kocasını sordum ama boşanmışlar. Resmen çam devirdim.');
  d('deyim', 'Ayvayı yemek', 'be in hot water',
    'Başı büyük belada olmak.', 'anlam', '',
    'If Dad sees the broken window, we’re in hot water.',
    'Babam kırık camı görürse ayvayı yedik.');
  d('deyim', 'Kulağına küpe olmak', 'learn your lesson',
    'Yaşanan kötü bir olaydan ders almak.', 'anlam', '',
    'I forgot my umbrella and got soaked. I’ve learned my lesson.',
    'Şemsiyemi unuttum ve sırılsıklam oldum. Bu bana kulağıma küpe oldu.');
  d('deyim', 'Ağzından baklayı çıkarmak', 'spill the beans',
    'Saklanan bir şeyi sonunda söylemek.', 'anlam', 'İki dilde de bir baklagil var: bakla / fasulye.',
    'Come on, spill the beans! Who is your new friend?',
    'Hadi, çıkar ağzındaki baklayı! Yeni arkadaşın kim?');
  d('deyim', 'Gözüne girmek', 'get into someone’s good books',
    'Birinin beğenisini, sevgisini kazanmak.', 'anlam', '',
    'He helps the manager a lot to get into her good books.',
    'Müdürün gözüne girmek için ona çok yardım ediyor.');
  d('deyim', 'Ağzı sıkı olmak', 'keep your lips sealed',
    'Sır tutmak, kimseye söylememek.', 'anlam', 'Söz olarak: "My lips are sealed." (Ağzım sıkıdır.)',
    'Don’t worry, my lips are sealed.',
    'Merak etme, ağzım sıkıdır.');
  d('deyim', 'Bir eli yağda bir eli balda olmak', 'live in clover',
    'Bolluk ve rahatlık içinde yaşamak.', 'anlam', 'Kelimesi kelimesine: "Yoncada yaşamak."',
    'Since he got the new job, he has been living in clover.',
    'Yeni işe girdiğinden beri bir eli yağda bir eli balda.');
  d('deyim', 'Dört gözle beklemek', 'wait with bated breath',
    'Bir şeyi büyük bir heyecanla beklemek.', 'anlam', 'Günlük dilde "can’t wait for" ya da "look forward to" da kullanılır.',
    'We are waiting with bated breath for the results.',
    'Sonuçları dört gözle bekliyoruz.');
  d('deyim', 'Havadan sudan konuşmak', 'make small talk',
    'Önemsiz, gündelik konulardan sohbet etmek.', 'anlam', 'Daha samimi biçimi: "shoot the breeze".',
    'We made small talk about the weather.',
    'Havadan sudan konuştuk.');
  d('deyim', 'Taşı gediğine koymak', 'hit the nail on the head',
    'Tam yerinde, isabetli bir söz söylemek.', 'anlam', 'Kelimesi kelimesine: "Çiviyi tam başından vurmak."',
    'You hit the nail on the head. That is exactly the problem.',
    'Taşı gediğine koydun. Sorun tam olarak bu.');
  d('deyim', 'İki dirhem bir çekirdek', 'dressed to the nines',
    'Çok şık giyinmiş.', 'anlam', '',
    'She came to the party dressed to the nines.',
    'Partiye iki dirhem bir çekirdek geldi.');
  d('deyim', 'Her telden çalmak', 'be a jack of all trades',
    'Her işten biraz anlamak.', 'anlam', 'Tam hâli "Jack of all trades, master of none." hiçbirinde usta olmamayı da vurgular.',
    'My uncle can fix cars, cook and paint. He’s a jack of all trades.',
    'Amcam araba tamir eder, yemek yapar, boya yapar. Her telden çalar.');
  d('deyim', 'Lafı dolandırmak', 'beat around the bush',
    'Asıl konuya gelmeden lafı uzatmak.', 'anlam', '',
    'Stop beating around the bush and tell me what happened.',
    'Lafı dolandırmayı bırak da ne olduğunu anlat.');
  d('deyim', 'Alnının akıyla çıkmak', 'come through with flying colours',
    'Bir sınavdan ya da zor işten başarıyla, yüz akıyla çıkmak.', 'anlam', 'Amerikan yazımı: "colors". "pass with flying colours" da yaygındır.',
    'She passed the exam with flying colours.',
    'Sınavdan alnının akıyla çıktı.');
  d('deyim', 'Bıçak kemiğe dayanmak', 'be at the end of your tether',
    'Dayanma gücü tükenmek.', 'anlam', 'Amerikan İngilizcesinde "at the end of your rope".',
    'After three sleepless nights, I was at the end of my tether.',
    'Üç uykusuz geceden sonra bıçak kemiğe dayanmıştı.');
  d('deyim', 'Bardağı taşıran son damla', 'the last straw',
    'Sabrı tüketen son olay.', 'anlam', 'Uzun hâli: "the straw that broke the camel’s back" (devenin belini kıran saman çöpü).',
    'He was late again. That was the last straw.',
    'Yine geç kaldı. Bu, bardağı taşıran son damla oldu.');
  d('deyim', 'Ateş pahası', 'cost an arm and a leg',
    'Çok pahalı olmak.', 'anlam', 'Kelimesi kelimesine: "Bir kola ve bir bacağa mal olmak."',
    'This phone cost an arm and a leg.',
    'Bu telefon ateş pahasıydı.');
  d('deyim', 'Buz dağının görünen kısmı', 'the tip of the iceberg',
    'Büyük bir sorunun yalnızca küçük, görünen bölümü.', 'birebir', '',
    'These complaints are just the tip of the iceberg.',
    'Bu şikâyetler buz dağının yalnızca görünen kısmı.');
  d('deyim', 'Bir çuval inciri berbat etmek', 'upset the apple cart',
    'Küçük bir hatayla iyi giden işi bozmak.', 'anlam', 'İki dilde de meyve var: incir / elma arabası.',
    'Everything was ready, but his angry email upset the apple cart.',
    'Her şey hazırdı ama onun öfkeli e-postası bir çuval inciri berbat etti.');
  d('deyim', 'Yağmurdan kaçarken doluya tutulmak', 'out of the frying pan into the fire',
    'Bir beladan kurtulayım derken daha büyüğüne düşmek.', 'anlam', 'Kelimesi kelimesine: "Tavadan çıkıp ateşe düşmek."',
    'I left that job for a worse one. Out of the frying pan into the fire!',
    'O işten daha kötüsü için ayrıldım. Yağmurdan kaçarken doluya tutuldum!');
  d('deyim', 'İşten bile değil', 'a piece of cake',
    'Çok kolay.', 'anlam', 'Kelimesi kelimesine: "Bir dilim kek."',
    'The test was a piece of cake.',
    'Sınav işten bile değildi.');
  d('deyim', 'Kılını kıpırdatmamak', 'not lift a finger',
    'Hiç yardım etmemek, hiçbir şey yapmamak.', 'anlam', '',
    'We cleaned the house, and he didn’t lift a finger.',
    'Evi biz temizledik, o kılını kıpırdatmadı.');
  d('deyim', 'Başı göğe ermek', 'be on cloud nine',
    'Çok mutlu olmak.', 'anlam', 'Kelimesi kelimesine: "Dokuzuncu bulutta olmak."',
    'When the baby was born, they were on cloud nine.',
    'Bebek doğunca başları göğe erdi.');
  d('deyim', 'Nabza göre şerbet vermek', 'tell people what they want to hear',
    'Karşısındakinin hoşuna gidecek şekilde konuşmak.', 'anlam', 'Deyimden çok kalıplaşmış bir ifade; anlamı birebir aynı.',
    'Politicians often tell people what they want to hear.',
    'Politikacılar sık sık nabza göre şerbet verir.');
  d('deyim', 'Gözü doymamak (yemekte)', 'your eyes are bigger than your stomach',
    'Yiyebileceğinden çok fazlasını tabağına almak.', 'anlam', '',
    'You can’t finish all that! Your eyes are bigger than your stomach.',
    'Onun hepsini bitiremezsin! Gözün doymuyor.');
  d('deyim', 'Yerin dibine girmek', 'wish the ground would swallow you up',
    'Çok utanmak.', 'birebir', 'İki dilde de yer yarılıp insanı içine alır.',
    'When I fell on the stage, I wished the ground would swallow me up.',
    'Sahnede düştüğümde yerin dibine girdim.');
  d('deyim', 'Kapıda olmak / eli kulağında', 'be just around the corner',
    'Çok yakında olmak.', 'anlam', '',
    'Summer is just around the corner.',
    'Yaz kapıda.');
  d('deyim', 'Akıntıya kürek çekmek', 'swim against the tide',
    'Boşuna, sonuçsuz bir çaba göstermek; genel akıma karşı gitmek.', 'anlam', '"fight a losing battle" (kaybedilecek bir savaş vermek) da aynı anlamda.',
    'Trying to change his mind is like swimming against the tide.',
    'Onun fikrini değiştirmeye çalışmak akıntıya kürek çekmek gibi.');
  d('deyim', 'Aklı bir karış havada olmak', 'have your head in the clouds',
    'Hayalperest, dalgın olmak.', 'birebir', 'İki dilde de akıl / kafa havada.',
    'He forgets everything. His head is in the clouds.',
    'Her şeyi unutuyor. Aklı bir karış havada.');
  d('deyim', 'Taban tabana zıt', 'poles apart',
    'Birbirinin tam tersi.', 'anlam', 'Kelimesi kelimesine: "Kutuplar kadar uzak."',
    'The two brothers are poles apart.',
    'İki kardeş taban tabana zıt.');
  d('deyim', 'Damarına basmak', 'touch a nerve',
    'Birinin hassas noktasına dokunup onu kızdırmak.', 'anlam', '',
    'My question about his job touched a nerve.',
    'İşiyle ilgili sorum onun damarına bastı.');
  d('deyim', 'Kulak asmamak', 'turn a deaf ear',
    'Söyleneni bilerek dinlememek.', 'birebir', '',
    'He turned a deaf ear to my advice.',
    'Tavsiyeme kulak asmadı.');
  d('deyim', 'Gözünü dört açmak', 'keep your eyes peeled',
    'Çok dikkatli bakmak, tetikte olmak.', 'birebir', 'İki dilde de göz kocaman açılır.',
    'Keep your eyes peeled for a parking space.',
    'Park yeri için gözünü dört aç.');
  d('deyim', 'Meteliğe kurşun atmak', 'be flat broke',
    'Hiç parası olmamak.', 'anlam', '',
    'I can’t come to the cinema. I’m flat broke.',
    'Sinemaya gelemem. Meteliğe kurşun atıyorum.');
  d('deyim', 'İpe un sermek', 'drag your feet',
    'Bir işi yapmamak için ağırdan almak, bahaneler bulmak.', 'anlam', '',
    'The company is dragging its feet about paying us.',
    'Şirket bize ödeme yapmamak için ipe un seriyor.');
  d('deyim', 'Yaraya tuz biber ekmek', 'rub salt in the wound',
    'Zaten üzgün olan birini daha da üzmek.', 'birebir', '',
    'He lost the match, and then his friends laughed. That rubbed salt in the wound.',
    'Maçı kaybetti, sonra arkadaşları güldü. Bu, yarasına tuz biber ekti.');
  d('deyim', 'Kaşla göz arasında', 'in the blink of an eye',
    'Çok çabuk, bir anda.', 'birebir', 'İki dilde de göz kırpacak kadar kısa bir süre.',
    'The thief took the bag in the blink of an eye.',
    'Hırsız çantayı kaşla göz arasında aldı.');
  d('deyim', 'Çantada keklik', 'in the bag',
    'Kazanılması kesin.', 'anlam', 'İki dilde de av çantada.',
    'With a three-goal lead, the match is in the bag.',
    'Üç gol öndeyiz, maç çantada keklik.');
  d('deyim', 'İnce eleyip sık dokumak', 'go over something with a fine-tooth comb',
    'Bir şeyi en küçük ayrıntısına kadar incelemek.', 'anlam', 'İki dilde de çok ince bir araç (elek / sık dişli tarak).',
    'The police went over the room with a fine-tooth comb.',
    'Polis odayı ince eleyip sık dokudu.');
  d('deyim', 'Dananın kuyruğu kopmak', 'the moment of truth',
    'Her şeyin belli olacağı kritik an.', 'anlam', '',
    'Here are the results. This is the moment of truth.',
    'İşte sonuçlar. Dananın kuyruğu şimdi kopacak.');
  d('deyim', 'Kabak birinin başına patlamak', 'take the fall',
    'Başkalarının da suçlu olduğu bir işin cezasını tek başına çekmek.', 'anlam', 'İngiliz İngilizcesinde "carry the can" da denir.',
    'Everyone made mistakes, but he took the fall.',
    'Herkes hata yaptı ama kabak onun başında patladı.');
  d('deyim', 'Eline su dökememek', 'can’t hold a candle to',
    'Biriyle kıyaslanamayacak kadar ondan aşağı olmak.', 'anlam', 'Kelimesi kelimesine: "Ona mum bile tutamaz." İki dilde de hizmet imgesi var.',
    'No singer can hold a candle to her.',
    'Hiçbir şarkıcı onun eline su dökemez.');
  d('deyim', 'Bir kulağından girip öbüründen çıkmak', 'go in one ear and out the other',
    'Söyleneni hemen unutmak, dikkate almamak.', 'birebir', '',
    'I tell him to tidy his room, but it goes in one ear and out the other.',
    'Ona odasını toplamasını söylüyorum ama bir kulağından girip öbüründen çıkıyor.');
  d('deyim', 'Ağzının payını vermek', 'put someone in their place',
    'Haddini aşan birine gereken cevabı vermek.', 'anlam', '',
    'He was rude, so she put him in his place.',
    'Kaba davrandı, o da ağzının payını verdi.');
  d('deyim', 'Abayı yakmak', 'fall head over heels',
    'Birine sırılsıklam âşık olmak.', 'anlam', 'Tam hâli: "fall head over heels in love".',
    'He fell head over heels for her at first sight.',
    'İlk görüşte ona abayı yaktı.');
  d('deyim', 'Kuş uçmaz kervan geçmez', 'in the middle of nowhere',
    'Issız, çok uzak bir yer.', 'anlam', '',
    'Their house is in the middle of nowhere.',
    'Evleri kuş uçmaz kervan geçmez bir yerde.');
  d('deyim', 'Ateşle oynamak', 'play with fire',
    'Tehlikeli bir işe girişmek.', 'birebir', '',
    'Driving that fast is playing with fire.',
    'O kadar hızlı araba sürmek ateşle oynamaktır.');
  d('deyim', 'Buzları kırmak', 'break the ice',
    'İlk tanışmadaki gerginliği, soğukluğu gidermek.', 'birebir', '',
    'He told a funny story to break the ice.',
    'Buzları kırmak için komik bir hikâye anlattı.');
  d('deyim', 'Kafayı yemek', 'lose your marbles',
    'Aklını kaçırmak.', 'anlam', 'Şakacı bir ifade; kelimesi kelimesine "bilyelerini kaybetmek".',
    'He talks to his car. I think he’s lost his marbles.',
    'Arabasıyla konuşuyor. Bence kafayı yemiş.');
  d('deyim', 'Ayakları yere basmak', 'have your feet on the ground',
    'Gerçekçi ve aklı başında olmak.', 'birebir', '',
    'Despite her success, she still has her feet on the ground.',
    'Başarısına rağmen ayakları hâlâ yere basıyor.');
  d('deyim', 'Kanadı altına almak', 'take someone under your wing',
    'Birini korumak, yol göstermek.', 'birebir', '',
    'The old master took the boy under his wing.',
    'Yaşlı usta çocuğu kanadı altına aldı.');
  d('deyim', 'Yeşil ışık yakmak', 'give the green light',
    'Bir işe izin vermek, onay vermek.', 'birebir', '',
    'The manager gave the green light to the project.',
    'Müdür projeye yeşil ışık yaktı.');
  d('deyim', 'Kara koyun', 'the black sheep',
    'Bir ailede ya da grupta ötekilerden farklı, sorunlu görülen kişi.', 'birebir', '',
    'He was always the black sheep of the family.',
    'Hep ailenin kara koyunuydu.');
  d('deyim', 'Timsah gözyaşları', 'crocodile tears',
    'Sahte, yapmacık üzüntü.', 'birebir', '',
    'Don’t believe her. Those are crocodile tears.',
    'Ona inanma. Bunlar timsah gözyaşları.');
  d('deyim', 'Köprüleri atmak', 'burn your bridges',
    'Geri dönüş yolunu tamamen kapatmak.', 'birebir', 'Türkçede köprü atılır (yıkılır), İngilizcede yakılır.',
    'Don’t insult your boss when you leave. Never burn your bridges.',
    'Ayrılırken patronuna hakaret etme. Asla köprüleri atma.');
  d('deyim', 'Aynı gemide olmak', 'be in the same boat',
    'Aynı zor durumu paylaşmak.', 'birebir', '',
    'Don’t worry, we’re all in the same boat.',
    'Merak etme, hepimiz aynı gemideyiz.');
  d('deyim', 'Dili tutulmak', 'be tongue-tied',
    'Heyecan ya da şaşkınlıktan konuşamamak.', 'birebir', 'Benzer ifade: "be lost for words".',
    'When I met my favourite actor, I was completely tongue-tied.',
    'En sevdiğim oyuncuyla tanışınca dilim tutuldu.');
  d('deyim', 'Ağzını bıçak açmamak', 'be down in the dumps',
    'Çok üzgün, keyifsiz olmak.', 'anlam', '',
    'She has been down in the dumps since her cat died.',
    'Kedisi öldüğünden beri ağzını bıçak açmıyor.');
  d('deyim', 'Gece gündüz demeden', 'round the clock',
    'Durmadan, gece gündüz.', 'anlam', '',
    'The doctors worked round the clock.',
    'Doktorlar gece gündüz demeden çalıştı.');
  d('deyim', 'Gözden düşmek', 'fall out of favour',
    'Bir kişinin ya da çevrenin gözündeki değerini yitirmek.', 'anlam', '',
    'The old singer fell out of favour with young people.',
    'Yaşlı şarkıcı gençlerin gözünden düştü.');
  d('deyim', 'Elini çabuk tutmak', 'get a move on',
    'Acele etmek.', 'anlam', '',
    'Get a move on, or we’ll miss the bus!',
    'Elini çabuk tut, yoksa otobüsü kaçıracağız!');
  d('deyim', 'Başını taştan taşa vurmak', 'kick yourself',
    'Yaptığı ya da yapmadığı bir şey için çok pişman olmak.', 'anlam', '',
    'I sold the house too cheaply. I could kick myself.',
    'Evi çok ucuza sattım. Başımı taştan taşa vuruyorum.');
  d('deyim', 'Zararın neresinden dönülse kârdır', 'cut your losses',
    'Kötü giden bir işi daha fazla zarar etmeden bırakmak.', 'anlam', 'Türkçede atasözü, İngilizcede deyim olarak kullanılır.',
    'The shop wasn’t making money, so we cut our losses and closed it.',
    'Dükkân para kazanmıyordu; zararın neresinden dönülse kârdır deyip kapattık.');
  d('deyim', 'Kaş yapayım derken göz çıkarmak', 'make matters worse',
    'Düzeltmeye çalışırken durumu daha da bozmak.', 'anlam', 'Durum daha belirginse: "The cure is worse than the disease."',
    'I tried to fix the tap, but I only made matters worse.',
    'Musluğu tamir etmeye çalıştım ama kaş yapayım derken göz çıkardım.');
  d('deyim', 'Burnundan solumak', 'see red',
    'Çok öfkelenmek.', 'anlam', 'Kelimesi kelimesine: "Kırmızı görmek."',
    'When he saw the broken window, he saw red.',
    'Kırık camı görünce burnundan solumaya başladı.');
  d('deyim', 'Gözünü budaktan sakınmamak', 'throw caution to the wind',
    'Tehlikeyi umursamadan cesurca davranmak.', 'anlam', '',
    'She threw caution to the wind and started her own business.',
    'Gözünü budaktan sakınmadı ve kendi işini kurdu.');
  d('deyim', 'Bir yastıkta kocamak', 'grow old together',
    'Bir çiftin ömür boyu birlikte yaşaması.', 'anlam', 'Deyimden çok kalıplaşmış bir ifade.',
    'My grandparents grew old together in the same village.',
    'Dedemle ninem aynı köyde bir yastıkta kocadı.');
  d('deyim', 'Tuzu kuru olmak', 'be sitting pretty',
    'Başkaları zorlanırken rahat ve kaygısız olmak.', 'anlam', '',
    'Prices are rising, but he is sitting pretty with his savings.',
    'Fiyatlar artıyor ama birikimleriyle onun tuzu kuru.');
  d('deyim', 'Hapı yutmak', 'be done for',
    'Kurtuluşu olmayan bir duruma düşmek.', 'anlam', '',
    'If the teacher finds out, we’re done for.',
    'Öğretmen öğrenirse hapı yuttuk.');
  d('deyim', 'Gözünde büyütmek', 'blow something out of proportion',
    'Bir şeyi olduğundan çok daha önemli ya da korkunç görmek.', 'anlam', '',
    'It was a small mistake. Don’t blow it out of proportion.',
    'Küçük bir hataydı. Gözünde büyütme.');
  d('deyim', 'Kendi kendine gelin güvey olmak', 'count your chickens',
    'Gerçekleşmemiş bir şeyi olmuş gibi sayıp sevinmek.', 'anlam', 'Genelde olumsuz kullanılır: "Don’t count your chickens."',
    'He is already spending the prize money. He’s counting his chickens.',
    'Ödül parasını şimdiden harcıyor. Kendi kendine gelin güvey oluyor.');
  d('deyim', 'Fil hafızalı olmak', 'have a memory like an elephant',
    'Hiçbir şeyi unutmamak.', 'birebir', '',
    'My grandmother remembers every birthday. She has a memory like an elephant.',
    'Ninem her doğum gününü hatırlar. Fil hafızalıdır.');

  /* ======================= KALIP SÖZLER ======================= */
  d('kalip', 'İşini çok iyi yapıyorsun.', 'You really know your stuff.',
    'Birinin işinde ne kadar bilgili ve becerikli olduğunu övmek.', 'anlam', 'Daha genel bir övgü: "You’re doing a great job." Ustalık vurgusu için: "You’ve got it down to a fine art."',
    'Your report is excellent. You really know your stuff.',
    'Raporun mükemmel. İşini çok iyi yapıyorsun.');
  d('kalip', 'Geçmiş olsun.', 'Get well soon.',
    'Hasta birine iyileşme dileği.', 'anlam', 'Kötü bir olay yaşayan biri için: "I’m sorry to hear that."',
    'I heard you were ill. Get well soon!',
    'Hasta olduğunu duydum. Geçmiş olsun!');
  d('kalip', 'Ellerine sağlık.', 'Compliments to the chef!',
    'Güzel bir yemek için yapana teşekkür.', 'anlam', 'Ev ortamında daha doğal: "That was delicious, thank you!"',
    'This soup is wonderful. Compliments to the chef!',
    'Bu çorba harika. Ellerine sağlık!');
  d('kalip', 'Başın sağ olsun.', 'I’m sorry for your loss.',
    'Bir yakınını kaybeden kişiye taziye.', 'anlam');
  d('kalip', 'Boş ver.', 'Never mind.',
    'Önemli değil, unut gitsin.', 'anlam', 'Sakinleştirmek için: "Forget about it." / "Don’t worry about it."');
  d('kalip', 'Kusura bakma.', 'Sorry about that.',
    'Küçük bir hata için özür dilemek.', 'anlam');
  d('kalip', 'Afiyet olsun.', 'Enjoy your meal.',
    'Yemek yiyenlere iyi dilek.', 'anlam', 'Fransızcadan geçme "Bon appétit!" İngilizcede de çok kullanılır.');
  d('kalip', 'Elinden geleni yapmak', 'do your best',
    'Bütün gücüyle çalışmak.', 'birebir', '"Elinden geleni ardına koymamak" için: "go all out".');
  d('kalip', 'Neyse ne.', 'It is what it is.',
    'Durum değiştirilemez, kabul etmek gerek.', 'anlam');
  d('kalip', 'Lafı mı olur?', 'Don’t mention it.',
    'Teşekküre karşılık: önemli değil, ne demek.', 'anlam', 'Benzerleri: "No problem." / "You’re welcome."');

  KI.idioms = {
    list: L,
    cats: [
      { id: 'all', t: 'Tümü' },
      { id: 'atasozu', t: 'Atasözleri' },
      { id: 'deyim', t: 'Deyimler' },
      { id: 'kalip', t: 'Kalıp sözler' },
      { id: 'birebir', t: 'Aynı imge' }
    ]
  };
})(window.KI);
