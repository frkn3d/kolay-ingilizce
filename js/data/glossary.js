/* ============================================================
   Kolay İngilizce — glossary.js
   Kelime => Türkçe karşılık.  Biçim:  ingilizce|türkçe|tür|not
   Çekimli hâller (drinks, drinking, built...) otomatik çözülür.
   ============================================================ */
(function (KI) {
  'use strict';
  var RAW = [];
  function add(list) { RAW = RAW.concat(list); }

  /* --- zamirler ve iyelik --- */
  add([
  'i|ben|zamir', 'you|sen / siz|zamir', 'he|o (erkek)|zamir', 'she|o (kadın)|zamir',
  'it|o (nesne, hayvan)|zamir', 'we|biz|zamir', 'they|onlar|zamir',
  'me|beni, bana|zamir', 'him|onu, ona (erkek)|zamir', 'her|onu, onun (kadın)|zamir',
  'us|bizi, bize|zamir', 'them|onları, onlara|zamir',
  'my|benim|iyelik', 'your|senin, sizin|iyelik', 'his|onun (erkek)|iyelik',
  'its|onun (nesne)|iyelik', 'our|bizim|iyelik', 'their|onların|iyelik',
  'myself|kendim|zamir'
  ]);

  /* --- yardımcı fiiller --- */
  add([
  'am|-im (olmak)|yardımcı|I ile kullanılır',
  'is|-dir (olmak)|yardımcı|he, she, it ile',
  'are|-dir (olmak)|yardımcı|you, we, they ile',
  'was|-di (olmak)|yardımcı|I, he, she, it geçmişi',
  'were|-di (olmak)|yardımcı|you, we, they geçmişi',
  'be|olmak|fiil', 'been|olmuş (be fiilinin 3. hali)|fiil', 'being|oluyor|fiil',
  'do|yapmak, soru yardımcısı|yardımcı', 'does|yapar (o), soru yardımcısı|yardımcı',
  'did|yaptı, geçmiş soru yardımcısı|yardımcı', 'done|yapılmış|fiil',
  'have|sahip olmak, -miş yardımcısı|yardımcı', 'has|sahip (o), -miş yardımcısı|yardımcı',
  'had|sahipti, -mişti yardımcısı|yardımcı', 'having|sahip olarak|fiil',
  'will|-ecek|yardımcı', 'would|-erdi, -ecekti|yardımcı',
  'can|-ebilmek|yardımcı', 'could|-ebilirdi|yardımcı',
  'may|-ebilir (izin)|yardımcı', 'might|-ebilir (zayıf ihtimal)|yardımcı',
  'must|-meli (zorunluluk)|yardımcı', 'should|-meli (tavsiye)|yardımcı',
  'going|gidiyor, -ecek (be going to)|fiil'
  ]);

  /* --- olumsuz / soru --- */
  add([
  'not|değil, -me|olumsuz', 'no|hayır, hiç|belirteç', 'never|asla, hiç|zarf',
  'yes|evet|ünlem', 'what|ne|soru', 'where|nerede|soru', 'who|kim|soru',
  'why|neden|soru', 'how|nasıl|soru', 'which|hangi|soru', 'whose|kimin|soru',
  'when|ne zaman, -diğinde|soru'
  ]);

  /* --- bağlaç ve edatlar --- */
  add([
  'and|ve|bağlaç', 'but|ama|bağlaç', 'or|veya|bağlaç', 'so|bu yüzden|bağlaç',
  'because|çünkü|bağlaç', 'if|eğer|bağlaç', 'while|-irken|bağlaç',
  'until|-e kadar|edat', 'before|-den önce|edat', 'after|-den sonra|edat',
  'since|-den beri|edat|Başlangıç noktası: since 2010',
  'for|için, boyunca|edat|Süre: for two hours = iki saattir',
  'during|süresince|edat', 'by|-e kadar, tarafından|edat|by Friday = cumaya kadar',
  'at|-de (saat, nokta)|edat', 'in|içinde, -de (ay, yıl)|edat',
  'on|üzerinde, -de (gün)|edat', 'to|-e, -a|edat', 'from|-den|edat',
  'with|ile|edat', 'without|-sız|edat', 'of|-in|edat', 'about|hakkında|edat',
  'into|içine|edat', 'through|içinden|edat', 'over|üzerinden|edat',
  'under|altında|edat', 'between|arasında|edat', 'near|yakınında|edat',
  'together|birlikte|zarf', 'than|-den (karşılaştırma)|edat', 'as|kadar, olarak|edat'
  ]);

  /* --- tanımlık ve belirteçler --- */
  add([
  'the|belirli tanımlık|artikel|Bilinen bir şeyden söz ederken',
  'a|bir|artikel', 'an|bir|artikel|Sesli harfle başlayan kelimeden önce',
  'this|bu|işaret', 'that|şu, o, ki|işaret', 'these|bunlar|işaret', 'those|onlar|işaret',
  'some|biraz, bazı|belirteç', 'any|hiç, herhangi|belirteç', 'all|hepsi, bütün|belirteç',
  'many|çok (sayılabilir)|belirteç', 'much|çok (sayılamaz)|belirteç',
  'more|daha fazla|belirteç', 'most|çoğu|belirteç', 'few|az|belirteç',
  'little|az, küçük|sıfat', 'another|başka bir|belirteç', 'other|diğer|sıfat',
  'every|her|belirteç', 'each|her biri|belirteç', 'both|ikisi de|belirteç',
  'whole|bütün|sıfat', 'only|sadece|zarf', 'also|ayrıca|zarf', 'too|de, çok|zarf',
  'very|çok|zarf', 'quite|oldukça|zarf', 'almost|neredeyse|zarf', 'enough|yeterli|zarf'
  ]);

  /* --- zaman zarfları --- */
  add([
  'now|şimdi|zarf', 'today|bugün|zarf', 'tonight|bu gece|zarf', 'tomorrow|yarın|zarf',
  'yesterday|dün|zarf', 'ago|önce|zarf|four months ago = dört ay önce',
  'later|sonra|zarf', 'soon|yakında|zarf', 'already|çoktan|zarf',
  'yet|henüz|zarf|Olumsuz ve soru cümlelerinde', 'still|hâlâ|zarf',
  'just|az önce, sadece|zarf', 'ever|hiç (soruda)|zarf', 'always|her zaman|zarf',
  'usually|genellikle|zarf', 'often|sık sık|zarf', 'sometimes|bazen|zarf',
  'rarely|nadiren|zarf', 'once|bir kez, bir zamanlar|zarf', 'twice|iki kez|zarf',
  'again|tekrar|zarf', 'early|erken|zarf', 'late|geç|zarf',
  'then|sonra, o zaman|zarf', 'recently|son zamanlarda|zarf'
  ]);

  /* --- zaman isimleri ve sayılar --- */
  add([
  'time|zaman, kez|isim', 'times|kez, defa|isim', 'moment|an|isim',
  'minute|dakika|isim', 'minutes|dakika (çoğul)|isim',
  'hour|saat (süre)|isim', 'hours|saat (süre, çoğul)|isim', 'clock|saat (alet)|isim',
  'day|gün|isim', 'days|günler|isim', 'week|hafta|isim', 'weeks|haftalar|isim',
  'month|ay|isim', 'months|aylar|isim', 'year|yıl|isim', 'years|yıllar|isim',
  'century|yüzyıl|isim', 'morning|sabah|isim', 'afternoon|öğleden sonra|isim',
  'noon|öğle|isim', 'evening|akşam|isim', 'night|gece|isim', 'midnight|gece yarısı|isim',
  'spring|ilkbahar|isim', 'summer|yaz|isim', 'autumn|sonbahar|isim', 'winter|kış|isim',
  'season|mevsim|isim', 'monday|pazartesi|isim', 'tuesday|salı|isim',
  'wednesday|çarşamba|isim', 'thursday|perşembe|isim', 'friday|cuma|isim',
  'fridays|cuma günleri|isim', 'saturday|cumartesi|isim', 'sunday|pazar|isim',
  'sundays|pazar günleri|isim', 'weekend|hafta sonu|isim',
  'one|bir|sayı', 'two|iki|sayı', 'three|üç|sayı', 'four|dört|sayı', 'five|beş|sayı',
  'six|altı|sayı', 'seven|yedi|sayı', 'eight|sekiz|sayı', 'nine|dokuz|sayı',
  'ten|on|sayı', 'twelve|on iki|sayı', 'fifteen|on beş|sayı', 'twenty|yirmi|sayı',
  'thirty|otuz|sayı', 'forty|kırk|sayı', 'hundred|yüz|sayı', 'thousand|bin|sayı',
  'first|birinci|sıra', 'next|gelecek, sonraki|sıfat', 'last|geçen, son|sıfat'
  ]);

  /* --- kültürümüzden kelimeler --- */
  add([
  'mosque|cami|isim', 'minaret|minare|isim', 'muezzin|müezzin|isim',
  'imam|imam|isim', 'adhan|ezan|isim', 'prayer|namaz, dua|isim',
  'pray|namaz kılmak, dua etmek|fiil', 'iftar|iftar|isim', 'sahur|sahur|isim',
  'ramadan|Ramazan|isim', 'fast|oruç tutmak, hızlı|fiil',
  'sermon|hutbe|isim', 'courtyard|avlu|isim', 'fountain|şadırvan, çeşme|isim',
  'dervish|derviş|isim', 'hodja|hoca|isim', 'sultan|padişah, sultan|isim',
  'palace|saray|isim', 'bazaar|çarşı|isim', 'caravanserai|kervansaray|isim',
  'tile|çini|isim', 'motif|motif|isim', 'tulip|lale|isim',
  'calligraphy|hat sanatı|isim', 'ebru|ebru (kâğıt marbling)|isim',
  'carpet|halı|isim', 'kilim|kilim|isim', 'weave|dokumak|fiil',
  'loom|tezgâh|isim', 'craftsman|usta, zanaatkâr|isim', 'craftsmen|ustalar|isim',
  'master|usta|isim', 'apprentice|çırak|isim', 'marble|mermer|isim',
  'dome|kubbe|isim', 'arch|kemer|isim', 'stone|taş|isim', 'wood|ahşap|isim',
  'restoration|restorasyon|isim', 'architect|mimar|isim', 'conquer|fethetmek|fiil',
  'tea|çay|isim', 'coffee|kahve|isim', 'lahmacun|lahmacun|isim',
  'gozleme|gözleme|isim', 'kunefe|künefe|isim', 'baklava|baklava|isim',
  'ashura|aşure|isim', 'simit|simit|isim', 'ayran|ayran|isim',
  'soup|çorba|isim', 'bread|ekmek|isim', 'olive|zeytin|isim', 'cheese|peynir|isim',
  'grape|üzüm|isim', 'leaves|yapraklar|isim', 'stuffed|dolma, doldurulmuş|sıfat',
  'quilt|yorgan|isim', 'rug|kilim, seccade|isim', 'embroidery|nakış|isim',
  'poem|şiir|isim', 'poet|şair|isim', 'ney|ney|isim', 'instrument|çalgı|isim'
  ]);

  /* --- günlük isimler --- */
  add([
  'family|aile|isim', 'mother|anne|isim', 'father|baba|isim',
  'grandfather|dede|isim', 'grandmother|babaanne, anneanne|isim',
  'brother|erkek kardeş|isim', 'sister|kız kardeş|isim', 'son|oğul|isim',
  'daughter|kız evlat|isim', 'uncle|amca, dayı|isim', 'aunt|hala, teyze|isim',
  'child|çocuk|isim', 'children|çocuklar|isim', 'friend|arkadaş|isim',
  'guest|misafir|isim', 'neighbour|komşu|isim', 'people|insanlar|isim',
  'man|adam|isim', 'woman|kadın|isim', 'boy|oğlan|isim', 'girl|kız|isim',
  'teacher|öğretmen|isim', 'student|öğrenci|isim', 'name|isim, ad|isim',
  'house|ev|isim', 'home|ev, yuva|isim', 'room|oda|isim', 'door|kapı|isim',
  'window|pencere|isim', 'garden|bahçe|isim', 'kitchen|mutfak|isim',
  'table|masa, sofra|isim', 'chair|sandalye|isim', 'book|kitap|isim',
  'school|okul|isim', 'city|şehir|isim', 'town|kasaba|isim', 'village|köy|isim',
  'street|sokak|isim', 'road|yol|isim', 'market|pazar, çarşı|isim',
  'shop|dükkân|isim', 'bridge|köprü|isim', 'sea|deniz|isim', 'river|nehir|isim',
  'mountain|dağ|isim', 'tree|ağaç|isim', 'rose|gül|isim', 'bird|kuş|isim',
  'cat|kedi|isim', 'water|su|isim', 'rain|yağmur|isim', 'snow|kar|isim',
  'sun|güneş|isim', 'moon|ay (gökyüzü)|isim', 'weather|hava durumu|isim',
  'ferry|vapur|isim', 'ship|gemi|isim', 'pier|iskele|isim', 'journey|yolculuk|isim',
  'wedding|düğün|isim', 'holiday|bayram, tatil|isim', 'feast|ziyafet, bayram|isim',
  'meal|yemek (öğün)|isim', 'lunch|öğle yemeği|isim', 'dinner|akşam yemeği|isim',
  'breakfast|kahvaltı|isim', 'food|yemek|isim', 'cannon|top (silah)|isim',
  'dough|hamur|isim', 'pot|tencere|isim', 'cup|fincan, bardak|isim',
  'tradition|gelenek|isim', 'traditions|gelenekler|isim', 'word|kelime|isim',
  'words|kelimeler|isim', 'voice|ses|isim', 'story|hikâye|isim', 'letter|mektup, harf|isim',
  'picture|resim|isim', 'music|müzik|isim', 'song|şarkı|isim', 'game|oyun|isim',
  'work|iş, çalışmak|isim', 'life|hayat|isim', 'world|dünya|isim', 'country|ülke|isim',
  'place|yer|isim', 'way|yol, yöntem|isim', 'thing|şey|isim', 'side|taraf|isim',
  'heart|kalp|isim', 'hand|el|isim', 'eye|göz|isim', 'advice|öğüt|isim'
  ]);

  /* --- fiiller (1. hâl) --- */
  add([
  'go|gitmek|fiil', 'come|gelmek|fiil', 'eat|yemek|fiil', 'drink|içmek|fiil',
  'make|yapmak|fiil', 'cook|pişirmek|fiil', 'bake|fırında pişirmek|fiil',
  'read|okumak|fiil', 'write|yazmak|fiil', 'speak|konuşmak|fiil', 'talk|konuşmak|fiil',
  'say|söylemek|fiil', 'tell|anlatmak|fiil', 'ask|sormak|fiil', 'answer|cevaplamak|fiil',
  'listen|dinlemek|fiil', 'hear|duymak|fiil', 'see|görmek|fiil', 'look|bakmak|fiil',
  'watch|izlemek|fiil', 'show|göstermek|fiil', 'draw|çizmek|fiil', 'paint|boyamak|fiil',
  'play|oynamak, çalmak|fiil', 'sing|şarkı söylemek|fiil', 'work|çalışmak|fiil',
  'study|çalışmak (ders)|fiil', 'learn|öğrenmek|fiil', 'teach|öğretmek|fiil',
  'know|bilmek|fiil', 'think|düşünmek, sanmak|fiil', 'remember|hatırlamak|fiil',
  'forget|unutmak|fiil', 'understand|anlamak|fiil', 'believe|inanmak|fiil',
  'want|istemek|fiil', 'need|ihtiyaç duymak|fiil', 'like|sevmek, hoşlanmak|fiil',
  'love|sevmek|fiil', 'help|yardım etmek|fiil', 'give|vermek|fiil', 'take|almak|fiil',
  'bring|getirmek|fiil', 'buy|satın almak|fiil', 'sell|satmak|fiil', 'pay|ödemek|fiil',
  'open|açmak|fiil', 'close|kapatmak|fiil', 'start|başlamak|fiil', 'begin|başlamak|fiil',
  'finish|bitirmek|fiil', 'end|bitmek|fiil', 'stop|durmak|fiil', 'wait|beklemek|fiil',
  'stay|kalmak|fiil', 'live|yaşamak|fiil', 'move|taşınmak, hareket etmek|fiil',
  'travel|seyahat etmek|fiil', 'visit|ziyaret etmek|fiil', 'arrive|varmak|fiil',
  'leave|ayrılmak, bırakmak|fiil', 'return|dönmek|fiil', 'walk|yürümek|fiil',
  'run|koşmak|fiil', 'sail|yelken açmak, gemiyle gitmek|fiil', 'ride|binmek|fiil',
  'drive|araba sürmek|fiil', 'sleep|uyumak|fiil', 'wake|uyanmak|fiil',
  'sit|oturmak|fiil', 'stand|ayakta durmak|fiil', 'wash|yıkamak|fiil',
  'clean|temizlemek|fiil', 'wear|giymek|fiil', 'build|inşa etmek|fiil',
  'carve|oymak|fiil', 'knit|örmek|fiil', 'sew|dikmek|fiil', 'roll|açmak (hamur), yuvarlamak|fiil',
  'set|kurmak, hazırlamak|fiil', 'prepare|hazırlamak|fiil', 'call|çağırmak, aramak|fiil',
  'meet|buluşmak|fiil', 'invite|davet etmek|fiil', 'celebrate|kutlamak|fiil',
  'feel|hissetmek|fiil', 'taste|tatmak|fiil', 'smell|koklamak|fiil', 'grow|büyümek|fiil',
  'put|koymak|fiil', 'get|almak, olmak|fiil', 'keep|saklamak, sürdürmek|fiil',
  'send|göndermek|fiil', 'find|bulmak|fiil', 'lose|kaybetmek|fiil', 'win|kazanmak|fiil',
  'happen|olmak (gerçekleşmek)|fiil', 'change|değişmek|fiil', 'fire|ateşlemek|fiil',
  'value|önemsemek, değer vermek|fiil'
  ]);

  /* --- sıfatlar --- */
  add([
  'good|iyi|sıfat', 'bad|kötü|sıfat', 'big|büyük|sıfat', 'small|küçük|sıfat',
  'large|geniş|sıfat', 'long|uzun|sıfat', 'short|kısa|sıfat', 'high|yüksek|sıfat',
  'old|eski, yaşlı|sıfat', 'new|yeni|sıfat', 'young|genç|sıfat', 'famous|ünlü|sıfat',
  'beautiful|güzel|sıfat', 'pretty|hoş, güzel|sıfat', 'happy|mutlu|sıfat',
  'tired|yorgun|sıfat', 'hungry|aç|sıfat', 'ready|hazır|sıfat', 'busy|meşgul|sıfat',
  'hot|sıcak|sıfat', 'cold|soğuk|sıfat', 'warm|ılık|sıfat', 'cool|serin|sıfat',
  'sweet|tatlı|sıfat', 'quiet|sessiz|sıfat', 'strong|güçlü|sıfat', 'soft|yumuşak|sıfat',
  'full|dolu|sıfat', 'empty|boş|sıfat', 'true|doğru|sıfat', 'same|aynı|sıfat',
  'different|farklı|sıfat', 'important|önemli|sıfat', 'difficult|zor|sıfat',
  'easy|kolay|sıfat', 'green|yeşil|sıfat', 'white|beyaz|sıfat', 'blue|mavi|sıfat',
  'red|kırmızı|sıfat', 'golden|altın rengi|sıfat', 'silver|gümüş|sıfat',
  'traditional|geleneksel|sıfat', 'turkish|Türk, Türkçe|sıfat', 'ottoman|Osmanlı|sıfat',
  'slowly|yavaşça|zarf', 'carefully|dikkatlice|zarf', 'well|iyi (zarf)|zarf'
  ]);

  /* --- özel isimler --- */
  add([
  'istanbul|İstanbul|özel isim', 'bursa|Bursa|özel isim', 'konya|Konya|özel isim',
  'edirne|Edirne|özel isim', 'ankara|Ankara|özel isim', 'anatolia|Anadolu|özel isim',
  'bosphorus|Boğaziçi|özel isim', 'topkapi|Topkapı|özel isim',
  'suleymaniye|Süleymaniye|özel isim', 'selimiye|Selimiye|özel isim',
  'sinan|Sinan|özel isim', 'mimar|mimar|özel isim', 'fatih|Fatih|özel isim',
  'mehmet|Mehmet|özel isim', 'mehmed|Mehmed|özel isim', 'ayse|Ayşe|özel isim',
  'elif|Elif|özel isim', 'zeynep|Zeynep|özel isim', 'hasan|Hasan|özel isim',
  'ali|Ali|özel isim', 'fatma|Fatma|özel isim', 'yunus|Yunus|özel isim',
  'emre|Emre|özel isim', 'mevlana|Mevlânâ|özel isim', 'mesnevi|Mesnevî|özel isim',
  "qur'an|Kur'an|özel isim", 'quran|Kur\u2019an|özel isim',
  'hereke|Hereke (halı merkezi)|özel isim', 'eminonu|Eminönü|özel isim',
  'nasreddin|Nasreddin|özel isim', 'usta|usta (unvan)|özel isim',
  'grand|büyük|sıfat', 'eid|bayram|isim'
  ]);

  /* ============================================================
     Düzensiz fiiller:  1. hâl | 2. hâl (geçmiş) | 3. hâl (V3) | Türkçe
     Hem sözlük hem de "Temeller" bölümündeki tablo bunu kullanır.
     ============================================================ */
  var IRREGULAR = [
  'be|was, were|been|olmak', 'have|had|had|sahip olmak', 'do|did|done|yapmak',
  'go|went|gone|gitmek', 'come|came|come|gelmek', 'eat|ate|eaten|yemek',
  'drink|drank|drunk|içmek', 'make|made|made|yapmak', 'take|took|taken|almak',
  'give|gave|given|vermek', 'get|got|got|almak, olmak', 'see|saw|seen|görmek',
  'say|said|said|söylemek', 'tell|told|told|anlatmak', 'think|thought|thought|düşünmek',
  'know|knew|known|bilmek', 'find|found|found|bulmak', 'buy|bought|bought|satın almak',
  'bring|brought|brought|getirmek', 'teach|taught|taught|öğretmek',
  'build|built|built|inşa etmek', 'read|read|read|okumak', 'write|wrote|written|yazmak',
  'speak|spoke|spoken|konuşmak', 'sing|sang|sung|şarkı söylemek', 'run|ran|run|koşmak',
  'sleep|slept|slept|uyumak', 'sit|sat|sat|oturmak', 'stand|stood|stood|ayakta durmak',
  'leave|left|left|ayrılmak', 'feel|felt|felt|hissetmek', 'keep|kept|kept|saklamak',
  'send|sent|sent|göndermek', 'spend|spent|spent|harcamak', 'meet|met|met|buluşmak',
  'win|won|won|kazanmak', 'lose|lost|lost|kaybetmek', 'put|put|put|koymak',
  'cut|cut|cut|kesmek', 'set|set|set|kurmak', 'begin|began|begun|başlamak',
  'grow|grew|grown|büyümek', 'wear|wore|worn|giymek', 'wake|woke|woken|uyanmak',
  'hear|heard|heard|duymak', 'understand|understood|understood|anlamak',
  'forget|forgot|forgotten|unutmak', 'weave|wove|woven|dokumak',
  'sell|sold|sold|satmak', 'pay|paid|paid|ödemek', 'drive|drove|driven|araba sürmek',
  'ride|rode|ridden|binmek', 'become|became|become|olmak', 'break|broke|broken|kırmak'
  ];


  /* --- sonradan eklenenler --- */
  add([
  "o'clock|tam saat|zarf|at nine o'clock = saat dokuzda",
  'english|İngilizce|isim', 'turkish|Türkçe, Türk|isim',
  'january|ocak|isim', 'february|şubat|isim', 'march|mart|isim',
  'april|nisan|isim', 'may|mayıs|isim', 'june|haziran|isim',
  'july|temmuz|isim', 'august|ağustos|isim', 'september|eylül|isim',
  'october|ekim|isim', 'november|kasım|isim', 'december|aralık|isim',
  'right|doğru, hemen|zarf|right now = tam şu anda',
  'seriously|ciddiye alarak|zarf', 'television|televizyon|isim',
  'newspaper|gazete|isim', 'bus|otobüs|isim', 'answer|cevap|isim',
  'guests|misafirler|isim', 'brew|demlemek|fiil', 'fasting|oruç tutmak|fiil',
  'full|dolu|sıfat', 'sea|deniz|isim', 'garden|bahçe|isim'
  ]);

  /* ---------- sözlüğü kur ---------- */
  var DICT = {};
  RAW.forEach(function (row) {
    var p = row.split('|');
    if (!p[0]) return;
    DICT[p[0].toLowerCase()] = { en: p[0], tr: p[1] || '', pos: p[2] || '', note: p[3] || '' };
  });

  var FORMS = {};          // çekimli hâl -> {base, note}
  var VERBLIST = [];       // tablo için
  IRREGULAR.forEach(function (row) {
    var p = row.split('|');
    var base = p[0], v2 = p[1], v3 = p[2], tr = p[3];
    VERBLIST.push({ v1: base, v2: v2, v3: v3, tr: tr });
    if (!DICT[base]) DICT[base] = { en: base, tr: tr, pos: 'fiil', note: '' };
    v2.split(',').forEach(function (f) {
      f = f.trim().toLowerCase();
      if (f && f !== base) FORMS[f] = { base: base, note: base + ' fiilinin 2. hâli (geçmiş)' };
    });
    v3.split(',').forEach(function (f) {
      f = f.trim().toLowerCase();
      if (f && !FORMS[f] && f !== base) FORMS[f] = { base: base, note: base + ' fiilinin 3. hâli (V3, -miş)' };
    });
  });

  /* ---------- arama motoru ---------- */
  function clean(raw) {
    return String(raw || '')
      .toLowerCase()
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/^[^a-z']+|[^a-z']+$/g, '');
  }

  function hit(key, note, shown) {
    var d = DICT[key];
    if (!d) return null;
    /* -s eki: isimde çoğul, fiilde 3. tekil anlamına gelir */
    if (note && /çekimli hâl/.test(note)) {
      if (d.pos === 'isim' || d.pos === 'özel isim') note = 'çoğul hâli (-s)';
      else if (d.pos === 'fiil' || d.pos === 'yardımcı') note = 'geniş zaman 3. tekil: he, she, it';
    }
    return {
      en: shown || d.en,
      base: d.en,
      tr: d.tr,
      pos: d.pos,
      note: [note, d.note].filter(Boolean).join(' · ')
    };
  }

  function lookup(raw) {
    var w = clean(raw);
    if (!w) return null;

    var direct = hit(w, '');
    if (direct) return direct;

    /* kısaltmalar */
    var SHORT = {
      "don't": ['do', 'do not kısaltması'], "doesn't": ['does', 'does not kısaltması'],
      "didn't": ['did', 'did not kısaltması'], "isn't": ['is', 'is not kısaltması'],
      "aren't": ['are', 'are not kısaltması'], "wasn't": ['was', 'was not kısaltması'],
      "weren't": ['were', 'were not kısaltması'], "won't": ['will', 'will not kısaltması'],
      "haven't": ['have', 'have not kısaltması'], "hasn't": ['has', 'has not kısaltması'],
      "hadn't": ['had', 'had not kısaltması'], "can't": ['can', 'cannot kısaltması'],
      "i'm": ['am', 'I am kısaltması'], "it's": ['is', 'it is kısaltması'],
      "he's": ['is', 'he is kısaltması'], "she's": ['is', 'she is kısaltması'],
      "we're": ['are', 'we are kısaltması'], "they're": ['are', 'they are kısaltması'],
      "you're": ['are', 'you are kısaltması'], "i've": ['have', 'I have kısaltması'],
      "i'll": ['will', 'I will kısaltması'], "we'll": ['will', 'we will kısaltması'],
      "let's": ['let', 'let us kısaltması']
    };
    if (SHORT[w]) {
      var s = hit(SHORT[w][0], SHORT[w][1], w);
      if (s) return s;
    }

    /* düzensiz çekim */
    if (FORMS[w]) {
      var f = hit(FORMS[w].base, FORMS[w].note, w);
      if (f) return f;
    }

    /* iyelik: mother's -> mother */
    if (/'s$/.test(w)) {
      var po = hit(w.slice(0, -2), 'iyelik eki: -in, -nin', w);
      if (po) return po;
    }

    var tries = [];
    if (/ies$/.test(w))  tries.push([w.slice(0, -3) + 'y', 'çekimli hâl (-s)']);
    if (/ied$/.test(w))  tries.push([w.slice(0, -3) + 'y', '2. hâl (geçmiş, -ed)']);
    if (/es$/.test(w))   tries.push([w.slice(0, -2), 'çekimli hâl (-es): he, she, it']);
    if (/s$/.test(w))    tries.push([w.slice(0, -1), 'çekimli hâl (-s) ya da çoğul']);
    if (/ing$/.test(w)) {
      tries.push([w.slice(0, -3), '-ing hâli: sürüyor']);
      tries.push([w.slice(0, -3) + 'e', '-ing hâli: sürüyor (sondaki e düşer)']);
      if (/(.)\1ing$/.test(w)) tries.push([w.slice(0, -4), '-ing hâli: son harf ikilenir']);
    }
    if (/ed$/.test(w)) {
      tries.push([w.slice(0, -2), '2. hâl (geçmiş, -ed)']);
      tries.push([w.slice(0, -1), '2. hâl (geçmiş, -d)']);
      if (/(.)\1ed$/.test(w)) tries.push([w.slice(0, -3), '2. hâl: son harf ikilenir']);
    }
    for (var i = 0; i < tries.length; i++) {
      var r = hit(tries[i][0], tries[i][1], w);
      if (r) return r;
    }
    return null;
  }

  function search(q) {
    var needle = String(q || '').toLowerCase().trim();
    if (!needle) return [];
    var out = [], k;
    for (k in DICT) {
      if (k.indexOf(needle) === 0 || DICT[k].tr.toLowerCase().indexOf(needle) === 0) out.push(DICT[k]);
      if (out.length > 60) break;
    }
    if (out.length < 12) {
      for (k in DICT) {
        if (out.indexOf(DICT[k]) === -1 && (k.indexOf(needle) > 0 || DICT[k].tr.toLowerCase().indexOf(needle) > 0)) out.push(DICT[k]);
        if (out.length > 60) break;
      }
    }
    return out;
  }

  /* Başka veri dosyalarının sözlüğe kelime katması için:
     KI.glossary.addWords(['word|kelime|tür|not', ...])  */
  function addWords(list) {
    var added = 0, updated = 0;
    (list || []).forEach(function (row) {
      var p = String(row).split('|');
      var key = (p[0] || '').toLowerCase().trim();
      if (!key) return;
      if (DICT[key]) updated++; else added++;
      DICT[key] = { en: p[0].trim(), tr: (p[1] || '').trim(), pos: (p[2] || '').trim(), note: (p[3] || '').trim() };
    });
    return { added: added, updated: updated };
  }

  /* Düzensiz fiil listesine ekleme (V1|V2|V3|Türkçe) */
  function addIrregulars(list) {
    (list || []).forEach(function (row) {
      var p = String(row).split('|');
      var base = p[0].trim(), v2 = p[1].trim(), v3 = p[2].trim(), tr = (p[3] || '').trim();
      if (!base || VERBLIST.some(function (v) { return v.v1 === base; })) return;
      VERBLIST.push({ v1: base, v2: v2, v3: v3, tr: tr });
      if (!DICT[base]) DICT[base] = { en: base, tr: tr, pos: 'fiil', note: '' };
      v2.split(',').forEach(function (x) {
        x = x.trim().toLowerCase();
        if (x && x !== base) FORMS[x] = { base: base, note: base + ' fiilinin 2. hâli (geçmiş)' };
      });
      v3.split(',').forEach(function (x) {
        x = x.trim().toLowerCase();
        if (x && !FORMS[x] && x !== base) FORMS[x] = { base: base, note: base + ' fiilinin 3. hâli (V3, -miş)' };
      });
    });
  }

  KI.glossary = {
    lookup: lookup,
    search: search,
    addWords: addWords,
    addIrregulars: addIrregulars,
    dict: DICT,
    size: function () { return Object.keys(DICT).length; },
    irregularVerbs: VERBLIST
  };
})(window.KI);
