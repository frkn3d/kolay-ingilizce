/* ============================================================
   Gramer Atlası — vocabulary.js
   A1'den B2'ye günlük ve akademik kelime dağarcığı.
   Biçim:  ingilizce|türkçe|tür|not
   Yeni kelime eklemek için uygun temaya bir satır yazmanız yeterli.
   ============================================================ */
(function (KI) {
  'use strict';
  var A = KI.glossary.addWords;

  /* ---------- 1. İnsan, aile, kişilik ---------- */
  A([
  'person|kişi|isim', 'people|insanlar|isim', 'human|insan|isim', 'adult|yetişkin|isim',
  'baby|bebek|isim', 'teenager|ergen, genç|isim', 'couple|çift|isim', 'relative|akraba|isim',
  'husband|koca|isim', 'wife|eş (kadın)|isim', 'parents|ebeveynler|isim', 'grandparents|büyükanne ve büyükbaba|isim',
  'nephew|erkek yeğen|isim', 'niece|kız yeğen|isim', 'cousin|kuzen|isim', 'twin|ikiz|isim',
  'neighbour|komşu|isim', 'neighbor|komşu|isim', 'stranger|yabancı|isim', 'guest|misafir|isim',
  'host|ev sahibi|isim', 'owner|sahip|isim', 'member|üye|isim', 'colleague|meslektaş|isim',
  'partner|ortak, eş|isim', 'crowd|kalabalık|isim', 'generation|kuşak|isim', 'society|toplum|isim',
  'community|topluluk|isim', 'population|nüfus|isim', 'citizen|vatandaş|isim',
  'kind|nazik, tür|sıfat', 'polite|kibar|sıfat', 'rude|kaba|sıfat', 'honest|dürüst|sıfat',
  'generous|cömert|sıfat', 'selfish|bencil|sıfat', 'patient|sabırlı|sıfat', 'lazy|tembel|sıfat',
  'hardworking|çalışkan|sıfat', 'clever|zeki|sıfat', 'wise|bilge|sıfat', 'brave|cesur|sıfat',
  'shy|utangaç|sıfat', 'confident|kendine güvenen|sıfat', 'friendly|arkadaş canlısı|sıfat',
  'cheerful|neşeli|sıfat', 'serious|ciddi|sıfat', 'funny|komik|sıfat', 'strict|sert, katı|sıfat',
  'humble|alçakgönüllü|sıfat', 'proud|gururlu|sıfat', 'loyal|sadık|sıfat', 'curious|meraklı|sıfat',
  'careful|dikkatli|sıfat', 'careless|dikkatsiz|sıfat', 'quiet|sessiz|sıfat', 'talkative|konuşkan|sıfat',
  'respectful|saygılı|sıfat', 'grateful|minnettar|sıfat', 'behaviour|davranış|isim',
  'character|karakter|isim', 'habit|alışkanlık|isim', 'manners|görgü kuralları|isim',
  'age|yaş|isim', 'name|ad|isim', 'surname|soyad|isim'
  ]);

  /* ---------- 2. Duygular ve zihin ---------- */
  A([
  'feeling|duygu|isim', 'emotion|duygu|isim', 'mood|ruh hâli|isim', 'joy|sevinç|isim',
  'sadness|üzüntü|isim', 'fear|korku|isim', 'anger|öfke|isim', 'hope|umut|isim',
  'worry|endişe|isim', 'stress|gerginlik|isim', 'surprise|sürpriz|isim', 'shame|utanç|isim',
  'pride|gurur|isim', 'trust|güven|isim', 'love|sevgi|isim', 'peace|huzur, barış|isim',
  'sad|üzgün|sıfat', 'angry|kızgın|sıfat', 'afraid|korkmuş|sıfat', 'scared|korkmuş|sıfat',
  'worried|endişeli|sıfat', 'nervous|gergin|sıfat', 'calm|sakin|sıfat', 'relaxed|rahatlamış|sıfat',
  'excited|heyecanlı|sıfat', 'bored|sıkılmış|sıfat', 'boring|sıkıcı|sıfat', 'interested|ilgili|sıfat',
  'interesting|ilginç|sıfat', 'surprised|şaşırmış|sıfat', 'disappointed|hayal kırıklığına uğramış|sıfat',
  'satisfied|memnun|sıfat', 'upset|keyfi kaçmış|sıfat', 'lonely|yalnız|sıfat', 'jealous|kıskanç|sıfat',
  'guilty|suçlu|sıfat', 'comfortable|rahat|sıfat', 'uncomfortable|rahatsız|sıfat',
  'feel|hissetmek|fiil', 'enjoy|keyif almak|fiil', 'prefer|tercih etmek|fiil', 'hate|nefret etmek|fiil',
  'miss|özlemek, kaçırmak|fiil', 'care|önemsemek|fiil', 'worry|endişelenmek|fiil', 'relax|rahatlamak|fiil',
  'suffer|acı çekmek|fiil', 'smile|gülümsemek|fiil', 'laugh|gülmek|fiil', 'cry|ağlamak|fiil',
  'think|düşünmek|fiil', 'believe|inanmak|fiil', 'guess|tahmin etmek|fiil', 'suppose|varsaymak|fiil',
  'realize|fark etmek|fiil', 'notice|fark etmek|fiil', 'imagine|hayal etmek|fiil', 'consider|göz önünde bulundurmak|fiil',
  'decide|karar vermek|fiil', 'doubt|şüphe etmek|fiil', 'expect|beklemek, ummak|fiil',
  'mean|anlamına gelmek|fiil', 'agree|katılmak|fiil', 'disagree|katılmamak|fiil',
  'mind|zihin, aldırmak|isim', 'idea|fikir|isim', 'opinion|görüş|isim', 'thought|düşünce|isim',
  'memory|hafıza, anı|isim', 'dream|rüya, hayal|isim', 'reason|sebep|isim', 'purpose|amaç|isim'
  ]);

  /* ---------- 3. Ev ve günlük hayat ---------- */
  A([
  'flat|daire|isim', 'apartment|daire|isim', 'building|bina|isim', 'floor|kat, zemin|isim',
  'roof|çatı|isim', 'wall|duvar|isim', 'ceiling|tavan|isim', 'stairs|merdiven|isim',
  'lift|asansör|isim', 'balcony|balkon|isim', 'basement|bodrum|isim', 'attic|çatı katı|isim',
  'living room|oturma odası|isim', 'bedroom|yatak odası|isim', 'bathroom|banyo|isim',
  'hall|hol|isim', 'yard|avlu, bahçe|isim', 'furniture|mobilya|isim', 'sofa|kanepe|isim',
  'armchair|koltuk|isim', 'shelf|raf|isim', 'cupboard|dolap|isim', 'drawer|çekmece|isim',
  'mirror|ayna|isim', 'carpet|halı|isim', 'curtain|perde|isim', 'cushion|minder|isim',
  'blanket|battaniye|isim', 'pillow|yastık|isim', 'sheet|çarşaf|isim', 'towel|havlu|isim',
  'soap|sabun|isim', 'key|anahtar|isim', 'lock|kilit|isim', 'lamp|lamba|isim',
  'candle|mum|isim', 'clock|saat|isim', 'basket|sepet|isim', 'bucket|kova|isim',
  'broom|süpürge|isim', 'rubbish|çöp|isim', 'tool|alet|isim', 'ladder|merdiven (portatif)|isim',
  'tidy|düzenli, toplamak|sıfat', 'messy|dağınık|sıfat', 'dirty|kirli|sıfat', 'clean|temiz|sıfat',
  'tidy up|toplamak|fiil', 'sweep|süpürmek|fiil', 'dust|toz almak|fiil', 'iron|ütülemek|fiil',
  'repair|tamir etmek|fiil', 'fix|onarmak|fiil', 'build|inşa etmek|fiil', 'paint|boyamak|fiil',
  'rent|kira, kiralamak|isim', 'bill|fatura|isim', 'housework|ev işi|isim', 'chore|angarya iş|isim',
  'routine|günlük düzen|isim', 'daily|günlük|sıfat', 'weekly|haftalık|sıfat', 'monthly|aylık|sıfat'
  ]);

  /* ---------- 4. Yemek ve mutfak ---------- */
  A([
  'meat|et|isim', 'chicken|tavuk|isim', 'fish|balık|isim', 'egg|yumurta|isim',
  'milk|süt|isim', 'butter|tereyağı|isim', 'yoghurt|yoğurt|isim', 'honey|bal|isim',
  'sugar|şeker|isim', 'salt|tuz|isim', 'pepper|biber|isim', 'spice|baharat|isim',
  'oil|yağ|isim', 'flour|un|isim', 'rice|pirinç|isim', 'bulgur|bulgur|isim',
  'bean|fasulye|isim', 'lentil|mercimek|isim', 'onion|soğan|isim', 'garlic|sarımsak|isim',
  'tomato|domates|isim', 'potato|patates|isim', 'carrot|havuç|isim', 'cucumber|salatalık|isim',
  'aubergine|patlıcan|isim', 'parsley|maydanoz|isim', 'mint|nane|isim', 'salad|salata|isim',
  'fruit|meyve|isim', 'apple|elma|isim', 'pear|armut|isim', 'apricot|kayısı|isim',
  'cherry|kiraz|isim', 'fig|incir|isim', 'melon|kavun|isim', 'watermelon|karpuz|isim',
  'walnut|ceviz|isim', 'almond|badem|isim', 'raisin|kuru üzüm|isim', 'date|hurma, tarih|isim',
  'pastry|hamur işi|isim', 'pilaf|pilav|isim', 'dessert|tatlı|isim', 'syrup|şerbet|isim',
  'dish|yemek, tabak|isim', 'plate|tabak|isim', 'bowl|kâse|isim', 'spoon|kaşık|isim',
  'fork|çatal|isim', 'knife|bıçak|isim', 'glass|bardak|isim', 'tray|tepsi|isim',
  'oven|fırın|isim', 'stove|ocak|isim', 'fridge|buzdolabı|isim', 'kettle|çaydanlık|isim',
  'recipe|tarif|isim', 'taste|tat, tatmak|isim', 'flavour|lezzet|isim', 'portion|porsiyon|isim',
  'boil|kaynatmak|fiil', 'fry|kızartmak|fiil', 'roast|fırında kızartmak|fiil', 'grill|ızgara yapmak|fiil',
  'chop|doğramak|fiil', 'stir|karıştırmak|fiil', 'pour|dökmek|fiil', 'serve|servis etmek|fiil',
  'feed|beslemek|fiil', 'swallow|yutmak|fiil', 'delicious|lezzetli|sıfat', 'tasty|lezzetli|sıfat',
  'salty|tuzlu|sıfat', 'sour|ekşi|sıfat', 'bitter|acı (tat)|sıfat', 'spicy|baharatlı, acı|sıfat',
  'fresh|taze|sıfat', 'raw|çiğ|sıfat', 'hungry|aç|sıfat', 'thirsty|susamış|sıfat'
  ]);

  /* ---------- 5. Şehir, ulaşım, seyahat ---------- */
  A([
  'capital|başkent|isim', 'district|ilçe, semt|isim', 'square|meydan|isim', 'avenue|cadde|isim',
  'pavement|kaldırım|isim', 'corner|köşe|isim', 'crossing|geçit|isim', 'traffic|trafik|isim',
  'station|istasyon|isim', 'stop|durak|isim', 'platform|peron|isim', 'airport|havalimanı|isim',
  'port|liman|isim', 'harbour|liman|isim', 'railway|demiryolu|isim', 'bridge|köprü|isim',
  'tunnel|tünel|isim', 'castle|kale|isim', 'tower|kule|isim', 'museum|müze|isim',
  'library|kütüphane|isim', 'theatre|tiyatro|isim', 'cinema|sinema|isim', 'stadium|stadyum|isim',
  'hospital|hastane|isim', 'pharmacy|eczane|isim', 'bakery|fırın (dükkân)|isim', 'butcher|kasap|isim',
  'grocer|bakkal|isim', 'restaurant|lokanta|isim', 'hotel|otel|isim', 'bank|banka|isim',
  'post office|postane|isim', 'police station|karakol|isim', 'factory|fabrika|isim',
  'office|ofis|isim', 'farm|çiftlik|isim', 'field|tarla, alan|isim', 'fountain|çeşme|isim',
  'car|araba|isim', 'bus|otobüs|isim', 'train|tren|isim', 'plane|uçak|isim',
  'boat|kayık|isim', 'bicycle|bisiklet|isim', 'motorbike|motosiklet|isim', 'taxi|taksi|isim',
  'ticket|bilet|isim', 'fare|yol ücreti|isim', 'luggage|bagaj|isim', 'suitcase|bavul|isim',
  'passport|pasaport|isim', 'map|harita|isim', 'route|güzergâh|isim', 'direction|yön|isim',
  'distance|mesafe|isim', 'destination|varış yeri|isim', 'departure|kalkış|isim', 'arrival|varış|isim',
  'delay|gecikme|isim', 'traffic jam|trafik sıkışıklığı|isim', 'tourist|turist|isim',
  'sightseeing|gezme, görme|isim', 'accommodation|konaklama|isim', 'booking|rezervasyon|isim',
  'catch|yakalamak, yetişmek|fiil', 'miss|kaçırmak|fiil', 'board|binmek|fiil',
  'get off|inmek|fiil', 'get on|binmek|fiil', 'set off|yola çıkmak|fiil',
  'abroad|yurt dışında|zarf', 'nearby|yakında|zarf', 'straight|dümdüz|zarf', 'ahead|ileride|zarf',
  'left|sol|isim', 'right|sağ|isim', 'north|kuzey|isim', 'south|güney|isim',
  'east|doğu|isim', 'west|batı|isim', 'crowded|kalabalık|sıfat', 'busy|yoğun, meşgul|sıfat'
  ]);

  /* ---------- 6. Doğa, hava, hayvanlar ---------- */
  A([
  'nature|doğa|isim', 'earth|dünya, toprak|isim', 'ground|yer, zemin|isim', 'soil|toprak|isim',
  'sand|kum|isim', 'rock|kaya|isim', 'hill|tepe|isim', 'valley|vadi|isim',
  'forest|orman|isim', 'wood|orman, ahşap|isim', 'lake|göl|isim', 'stream|dere|isim',
  'coast|kıyı|isim', 'beach|plaj|isim', 'island|ada|isim', 'wave|dalga|isim',
  'sky|gökyüzü|isim', 'cloud|bulut|isim', 'star|yıldız|isim', 'wind|rüzgâr|isim',
  'storm|fırtına|isim', 'thunder|gök gürültüsü|isim', 'lightning|şimşek|isim', 'fog|sis|isim',
  'ice|buz|isim', 'flood|sel|isim', 'earthquake|deprem|isim', 'drought|kuraklık|isim',
  'climate|iklim|isim', 'temperature|sıcaklık|isim', 'degree|derece|isim', 'shade|gölge|isim',
  'plant|bitki|isim', 'flower|çiçek|isim', 'seed|tohum|isim', 'root|kök|isim',
  'branch|dal|isim', 'leaf|yaprak|isim', 'grass|çim, ot|isim', 'harvest|hasat|isim',
  'animal|hayvan|isim', 'dog|köpek|isim', 'horse|at|isim', 'donkey|eşek|isim',
  'sheep|koyun|isim', 'goat|keçi|isim', 'cow|inek|isim', 'camel|deve|isim',
  'rabbit|tavşan|isim', 'mouse|fare|isim', 'wolf|kurt|isim', 'bear|ayı|isim',
  'eagle|kartal|isim', 'stork|leylek|isim', 'pigeon|güvercin|isim', 'bee|arı|isim',
  'ant|karınca|isim', 'butterfly|kelebek|isim', 'snake|yılan|isim', 'insect|böcek|isim',
  'sunny|güneşli|sıfat', 'cloudy|bulutlu|sıfat', 'rainy|yağmurlu|sıfat', 'windy|rüzgârlı|sıfat',
  'snowy|karlı|sıfat', 'foggy|sisli|sıfat', 'wet|ıslak|sıfat', 'dry|kuru|sıfat',
  'grow|yetişmek, büyümek|fiil', 'plant|dikmek|fiil', 'water|sulamak|fiil', 'blow|esmek|fiil',
  'shine|parlamak|fiil', 'freeze|donmak|fiil', 'melt|erimek|fiil', 'pollute|kirletmek|fiil',
  'pollution|kirlilik|isim', 'environment|çevre|isim', 'nature reserve|doğa koruma alanı|isim',
  'recycle|geri dönüştürmek|fiil', 'waste|israf, atık|isim', 'energy|enerji|isim'
  ]);

  /* ---------- 7. Beden ve sağlık ---------- */
  A([
  'body|vücut|isim', 'head|baş|isim', 'face|yüz|isim', 'hair|saç|isim',
  'forehead|alın|isim', 'ear|kulak|isim', 'nose|burun|isim', 'mouth|ağız|isim',
  'tooth|diş|isim', 'teeth|dişler|isim', 'tongue|dil (organ)|isim', 'lip|dudak|isim',
  'neck|boyun|isim', 'shoulder|omuz|isim', 'arm|kol|isim', 'elbow|dirsek|isim',
  'finger|parmak|isim', 'thumb|başparmak|isim', 'chest|göğüs|isim', 'back|sırt|isim',
  'stomach|mide|isim', 'leg|bacak|isim', 'knee|diz|isim', 'foot|ayak|isim',
  'feet|ayaklar|isim', 'skin|deri|isim', 'bone|kemik|isim', 'blood|kan|isim',
  'brain|beyin|isim', 'lung|akciğer|isim', 'breath|nefes|isim', 'health|sağlık|isim',
  'illness|hastalık|isim', 'disease|hastalık|isim', 'pain|ağrı|isim', 'headache|baş ağrısı|isim',
  'fever|ateş (hastalık)|isim', 'cough|öksürük|isim', 'cold|soğuk algınlığı|isim', 'flu|grip|isim',
  'wound|yara|isim', 'injury|yaralanma|isim', 'treatment|tedavi|isim', 'medicine|ilaç|isim',
  'pill|hap|isim', 'doctor|doktor|isim', 'nurse|hemşire|isim', 'dentist|diş hekimi|isim',
  'patient|hasta|isim', 'appointment|randevu|isim', 'operation|ameliyat|isim', 'exercise|egzersiz|isim',
  'diet|beslenme düzeni|isim', 'sleep|uyku|isim', 'rest|dinlenme|isim', 'breathe|nefes almak|fiil',
  'hurt|acıtmak|fiil', 'ache|ağrımak|fiil', 'cure|iyileştirmek|fiil', 'recover|iyileşmek|fiil',
  'injure|yaralamak|fiil', 'bleed|kanamak|fiil', 'sneeze|hapşırmak|fiil', 'shiver|titremek|fiil',
  'healthy|sağlıklı|sıfat', 'ill|hasta|sıfat', 'sick|hasta|sıfat', 'weak|zayıf|sıfat',
  'painful|acı veren|sıfat', 'serious|ciddi|sıfat', 'dangerous|tehlikeli|sıfat', 'safe|güvenli|sıfat'
  ]);

  /* ---------- 8. Okul, iş, para ---------- */
  A([
  'education|eğitim|isim', 'university|üniversite|isim', 'college|yüksekokul|isim',
  'classroom|sınıf|isim', 'lesson|ders|isim', 'subject|ders, konu|isim', 'homework|ev ödevi|isim',
  'exam|sınav|isim', 'test|test|isim', 'mark|not|isim', 'grade|not, sınıf|isim',
  'result|sonuç|isim', 'degree|diploma, derece|isim', 'certificate|belge|isim',
  'knowledge|bilgi|isim', 'skill|beceri|isim', 'ability|yetenek|isim', 'talent|yetenek|isim',
  'experience|deneyim|isim', 'practice|alıştırma, pratik|isim', 'mistake|hata|isim',
  'example|örnek|isim', 'question|soru|isim', 'answer|cevap|isim', 'topic|konu|isim',
  'note|not|isim', 'page|sayfa|isim', 'dictionary|sözlük|isim', 'notebook|defter|isim',
  'pen|kalem|isim', 'pencil|kurşun kalem|isim', 'board|tahta|isim', 'desk|sıra, masa|isim',
  'job|iş|isim', 'career|kariyer|isim', 'profession|meslek|isim', 'employee|çalışan|isim',
  'employer|işveren|isim', 'manager|yönetici|isim', 'boss|patron|isim', 'staff|personel|isim',
  'meeting|toplantı|isim', 'project|proje|isim', 'task|görev|isim', 'deadline|son teslim tarihi|isim',
  'salary|maaş|isim', 'wage|ücret|isim', 'income|gelir|isim', 'profit|kâr|isim',
  'loss|zarar|isim', 'cost|maliyet|isim', 'price|fiyat|isim', 'discount|indirim|isim',
  'debt|borç|isim', 'loan|kredi|isim', 'savings|birikim|isim', 'account|hesap|isim',
  'cash|nakit|isim', 'coin|madenî para|isim', 'change|bozuk para, değişim|isim',
  'receipt|fiş|isim', 'customer|müşteri|isim', 'service|hizmet|isim', 'product|ürün|isim',
  'quality|kalite|isim', 'business|iş, ticaret|isim', 'company|şirket|isim', 'trade|ticaret|isim',
  'study|çalışmak|fiil', 'revise|tekrar etmek|fiil', 'explain|açıklamak|fiil',
  'describe|tarif etmek|fiil', 'discuss|tartışmak|fiil', 'solve|çözmek|fiil', 'succeed|başarmak|fiil',
  'fail|başarısız olmak|fiil', 'apply|başvurmak|fiil', 'earn|kazanmak|fiil', 'spend|harcamak|fiil',
  'save|biriktirmek, kurtarmak|fiil', 'afford|gücü yetmek|fiil', 'borrow|ödünç almak|fiil',
  'lend|ödünç vermek|fiil', 'owe|borçlu olmak|fiil', 'cost|mal olmak|fiil', 'hire|işe almak|fiil',
  'expensive|pahalı|sıfat', 'cheap|ucuz|sıfat', 'free|ücretsiz, özgür|sıfat', 'rich|zengin|sıfat',
  'poor|yoksul|sıfat', 'worth|değerinde|sıfat', 'useful|faydalı|sıfat', 'useless|işe yaramaz|sıfat'
  ]);

  /* ---------- 9. Teknoloji ve iletişim ---------- */
  A([
  'computer|bilgisayar|isim', 'laptop|dizüstü bilgisayar|isim', 'screen|ekran|isim',
  'keyboard|klavye|isim', 'mouse|fare (bilgisayar)|isim', 'printer|yazıcı|isim',
  'file|dosya|isim', 'folder|klasör|isim', 'program|program|isim', 'software|yazılım|isim',
  'device|cihaz|isim', 'machine|makine|isim', 'battery|pil|isim', 'charger|şarj aleti|isim',
  'phone|telefon|isim', 'message|mesaj|isim', 'call|arama|isim', 'network|ağ|isim',
  'internet|internet|isim', 'website|web sitesi|isim', 'page|sayfa|isim', 'link|bağlantı|isim',
  'password|parola|isim', 'account|hesap|isim', 'data|veri|isim', 'information|bilgi|isim',
  'news|haber|isim', 'newspaper|gazete|isim', 'magazine|dergi|isim', 'channel|kanal|isim',
  'radio|radyo|isim', 'camera|fotoğraf makinesi|isim', 'photo|fotoğraf|isim', 'video|video|isim',
  'record|kayıt|isim', 'advertisement|reklam|isim', 'technology|teknoloji|isim',
  'invention|icat|isim', 'research|araştırma|isim', 'science|bilim|isim', 'scientist|bilim insanı|isim',
  'engineer|mühendis|isim', 'discovery|keşif|isim', 'experiment|deney|isim', 'progress|ilerleme|isim',
  'download|indirmek|fiil', 'upload|yüklemek|fiil', 'search|aramak|fiil', 'click|tıklamak|fiil',
  'type|yazmak (klavyede)|fiil', 'connect|bağlanmak|fiil', 'share|paylaşmak|fiil',
  'contact|iletişime geçmek|fiil', 'reply|yanıtlamak|fiil', 'invent|icat etmek|fiil',
  'develop|geliştirmek|fiil', 'improve|iyileştirmek|fiil', 'repair|onarmak|fiil',
  'modern|çağdaş|sıfat', 'digital|dijital|sıfat', 'electric|elektrikli|sıfat',
  'automatic|otomatik|sıfat', 'available|mevcut|sıfat', 'popular|yaygın, sevilen|sıfat'
  ]);

  /* ---------- 10. Toplum, kültür, sanat, inanç ---------- */
  A([
  'history|tarih|isim', 'empire|imparatorluk|isim', 'republic|cumhuriyet|isim',
  'government|hükümet|isim', 'law|kanun|isim', 'right|hak|isim', 'duty|görev|isim',
  'freedom|özgürlük|isim', 'justice|adalet|isim', 'peace|barış|isim', 'war|savaş|isim',
  'army|ordu|isim', 'soldier|asker|isim', 'leader|önder|isim', 'king|kral|isim',
  'queen|kraliçe|isim', 'election|seçim|isim', 'vote|oy|isim', 'crime|suç|isim',
  'court|mahkeme|isim', 'judge|hâkim|isim', 'prison|hapishane|isim', 'rule|kural|isim',
  'culture|kültür|isim', 'custom|görenek|isim', 'ceremony|tören|isim', 'festival|şenlik|isim',
  'religion|din|isim', 'faith|inanç|isim', 'belief|inanış|isim', 'worship|ibadet|isim',
  'charity|hayır işi|isim', 'blessing|bereket, dua|isim', 'soul|ruh|isim', 'spirit|ruh, coşku|isim',
  'art|sanat|isim', 'artist|sanatçı|isim', 'painting|resim|isim', 'sculpture|heykel|isim',
  'design|tasarım|isim', 'pattern|desen|isim', 'style|üslup|isim', 'craft|el sanatı|isim',
  'architecture|mimari|isim', 'literature|edebiyat|isim', 'novel|roman|isim', 'author|yazar|isim',
  'writer|yazar|isim', 'reader|okur|isim', 'chapter|bölüm|isim', 'verse|beyit, dize|isim',
  'theatre|tiyatro|isim', 'actor|oyuncu|isim', 'stage|sahne|isim', 'audience|seyirci|isim',
  'concert|konser|isim', 'melody|ezgi|isim', 'rhythm|ritim|isim', 'dance|dans|isim',
  'century|yüzyıl|isim', 'period|dönem|isim', 'ancient|kadim, antik|sıfat', 'historical|tarihî|sıfat',
  'traditional|geleneksel|sıfat', 'modern|modern|sıfat', 'famous|ünlü|sıfat', 'sacred|kutsal|sıfat',
  'celebrate|kutlamak|fiil', 'respect|saygı duymak|fiil', 'protect|korumak|fiil',
  'destroy|yıkmak|fiil', 'rule|yönetmek|fiil', 'found|kurmak|fiil', 'defend|savunmak|fiil',
  'inherit|miras almak|fiil', 'preserve|korumak, saklamak|fiil'
  ]);

  /* ---------- 11. Sık kullanılan fiiller (B1-B2) ---------- */
  A([
  'accept|kabul etmek|fiil', 'achieve|başarmak, elde etmek|fiil', 'add|eklemek|fiil',
  'admit|itiraf etmek|fiil', 'advise|öğüt vermek|fiil', 'allow|izin vermek|fiil',
  'announce|duyurmak|fiil', 'appear|görünmek|fiil', 'argue|tartışmak|fiil', 'arrange|düzenlemek|fiil',
  'attend|katılmak|fiil', 'attract|çekmek|fiil', 'avoid|kaçınmak|fiil', 'beat|yenmek, vurmak|fiil',
  'behave|davranmak|fiil', 'belong|ait olmak|fiil', 'blame|suçlamak|fiil', 'borrow|ödünç almak|fiil',
  'cancel|iptal etmek|fiil', 'cause|neden olmak|fiil', 'choose|seçmek|fiil', 'claim|iddia etmek|fiil',
  'collect|toplamak|fiil', 'compare|karşılaştırmak|fiil', 'complain|şikâyet etmek|fiil',
  'complete|tamamlamak|fiil', 'confuse|karıştırmak|fiil', 'contain|içermek|fiil',
  'continue|devam etmek|fiil', 'control|denetlemek|fiil', 'copy|kopyalamak|fiil',
  'count|saymak|fiil', 'cover|örtmek, kapsamak|fiil', 'create|yaratmak|fiil', 'cross|geçmek|fiil',
  'damage|zarar vermek|fiil', 'deal|ilgilenmek, uğraşmak|fiil', 'deliver|teslim etmek|fiil',
  'deny|inkâr etmek|fiil', 'depend|bağlı olmak|fiil', 'deserve|hak etmek|fiil',
  'destroy|yok etmek|fiil', 'divide|bölmek|fiil', 'doubt|kuşku duymak|fiil', 'earn|kazanmak|fiil',
  'encourage|yüreklendirmek|fiil', 'escape|kaçmak|fiil', 'exist|var olmak|fiil',
  'expand|genişlemek|fiil', 'explore|keşfetmek|fiil', 'express|ifade etmek|fiil',
  'face|yüzleşmek|fiil', 'fill|doldurmak|fiil', 'follow|takip etmek|fiil', 'force|zorlamak|fiil',
  'gather|toplanmak|fiil', 'hide|saklamak|fiil', 'hold|tutmak|fiil', 'hurry|acele etmek|fiil',
  'include|içermek|fiil', 'increase|artmak|fiil', 'decrease|azalmak|fiil', 'influence|etkilemek|fiil',
  'inform|bilgilendirmek|fiil', 'insist|ısrar etmek|fiil', 'introduce|tanıtmak|fiil',
  'join|katılmak|fiil', 'judge|yargılamak|fiil', 'jump|zıplamak|fiil', 'kick|tekmelemek|fiil',
  'knock|vurmak (kapıya)|fiil', 'lead|önderlik etmek|fiil', 'lie|yalan söylemek, uzanmak|fiil',
  'manage|başarmak, yönetmek|fiil', 'mention|söz etmek|fiil', 'obey|itaat etmek|fiil',
  'offer|sunmak|fiil', 'order|sipariş etmek, emretmek|fiil', 'organize|düzenlemek|fiil',
  'own|sahip olmak|fiil', 'permit|izin vermek|fiil', 'plan|planlamak|fiil', 'pick|seçmek, toplamak|fiil',
  'point|işaret etmek|fiil', 'praise|övmek|fiil', 'prepare|hazırlamak|fiil', 'prevent|engellemek|fiil',
  'promise|söz vermek|fiil', 'prove|kanıtlamak|fiil', 'provide|sağlamak|fiil', 'pull|çekmek|fiil',
  'push|itmek|fiil', 'realise|fark etmek|fiil', 'receive|almak|fiil', 'recognize|tanımak|fiil',
  'recommend|tavsiye etmek|fiil', 'reduce|azaltmak|fiil', 'refuse|reddetmek|fiil',
  'regret|pişman olmak|fiil', 'remain|kalmak|fiil', 'remind|hatırlatmak|fiil', 'remove|kaldırmak|fiil',
  'repeat|tekrarlamak|fiil', 'replace|değiştirmek|fiil', 'report|bildirmek|fiil',
  'require|gerektirmek|fiil', 'rescue|kurtarmak|fiil', 'respond|yanıtlamak|fiil', 'result|sonuçlanmak|fiil',
  'reveal|açığa çıkarmak|fiil', 'rise|yükselmek|fiil', 'search|aramak|fiil', 'seem|görünmek|fiil',
  'separate|ayırmak|fiil', 'shake|sallamak|fiil', 'share|paylaşmak|fiil', 'shout|bağırmak|fiil',
  'sign|imzalamak|fiil', 'solve|çözmek|fiil', 'sound|kulağa gelmek|fiil', 'spread|yaymak|fiil',
  'suggest|önermek|fiil', 'support|desteklemek|fiil', 'survive|hayatta kalmak|fiil',
  'throw|atmak|fiil', 'touch|dokunmak|fiil', 'translate|çevirmek|fiil', 'treat|davranmak, tedavi etmek|fiil',
  'trust|güvenmek|fiil', 'try|denemek|fiil', 'turn|dönmek|fiil', 'warn|uyarmak|fiil',
  'waste|israf etmek|fiil', 'whisper|fısıldamak|fiil', 'wonder|merak etmek|fiil', 'worth|değmek|fiil'
  ]);

  /* ---------- 12. Sıfatlar ve zarflar (B1-B2) ---------- */
  A([
  'able|muktedir, -ebilen|sıfat', 'active|etkin|sıfat', 'actual|gerçek|sıfat',
  'alive|canlı|sıfat', 'alone|yalnız|sıfat', 'amazing|şaşırtıcı|sıfat', 'ancient|antik|sıfat',
  'annual|yıllık|sıfat', 'anxious|kaygılı|sıfat', 'attractive|çekici|sıfat', 'average|ortalama|sıfat',
  'aware|farkında|sıfat', 'basic|temel|sıfat', 'brief|kısa|sıfat', 'bright|parlak|sıfat',
  'broad|geniş|sıfat', 'broken|kırık|sıfat', 'certain|kesin, belirli|sıfat', 'cheerful|neşeli|sıfat',
  'close|yakın|sıfat', 'common|yaygın|sıfat', 'complex|karmaşık|sıfat', 'complete|tam|sıfat',
  'correct|doğru|sıfat', 'crazy|çılgın|sıfat', 'creative|yaratıcı|sıfat', 'cruel|zalim|sıfat',
  'current|güncel|sıfat', 'deep|derin|sıfat', 'detailed|ayrıntılı|sıfat', 'direct|doğrudan|sıfat',
  'double|çift|sıfat', 'eager|istekli|sıfat', 'early|erken|sıfat', 'effective|etkili|sıfat',
  'elegant|zarif|sıfat', 'entire|bütün|sıfat', 'equal|eşit|sıfat', 'essential|gerekli|sıfat',
  'exact|tam, kesin|sıfat', 'excellent|mükemmel|sıfat', 'exciting|heyecan verici|sıfat',
  'fair|adil|sıfat', 'faithful|sadık|sıfat', 'false|yanlış|sıfat', 'familiar|tanıdık|sıfat',
  'fantastic|harika|sıfat', 'final|son|sıfat', 'flat|düz|sıfat', 'foreign|yabancı|sıfat',
  'former|eski, önceki|sıfat', 'frequent|sık|sıfat', 'further|daha ileri|sıfat',
  'general|genel|sıfat', 'gentle|nazik, yumuşak|sıfat', 'giant|dev|sıfat', 'global|küresel|sıfat',
  'gradual|kademeli|sıfat', 'heavy|ağır|sıfat', 'helpful|yardımsever|sıfat', 'hollow|içi boş|sıfat',
  'huge|kocaman|sıfat', 'ideal|ideal|sıfat', 'immediate|hemen olan|sıfat', 'incredible|inanılmaz|sıfat',
  'independent|bağımsız|sıfat', 'individual|bireysel|sıfat', 'initial|ilk|sıfat',
  'intelligent|akıllı|sıfat', 'internal|iç|sıfat', 'legal|yasal|sıfat', 'light|hafif, aydınlık|sıfat',
  'likely|olası|sıfat', 'local|yerel|sıfat', 'loose|gevşek|sıfat', 'loud|gürültülü|sıfat',
  'lucky|şanslı|sıfat', 'main|başlıca|sıfat', 'major|büyük, önemli|sıfat', 'minor|küçük|sıfat',
  'mental|zihinsel|sıfat', 'narrow|dar|sıfat', 'natural|doğal|sıfat', 'nearby|yakındaki|sıfat',
  'necessary|gerekli|sıfat', 'normal|olağan|sıfat', 'obvious|apaçık|sıfat', 'official|resmî|sıfat',
  'ordinary|sıradan|sıfat', 'original|özgün|sıfat', 'particular|belirli|sıfat', 'perfect|kusursuz|sıfat',
  'personal|kişisel|sıfat', 'physical|fiziksel|sıfat', 'plain|sade|sıfat', 'pleasant|hoş|sıfat',
  'possible|mümkün|sıfat', 'powerful|güçlü|sıfat', 'practical|kullanışlı|sıfat', 'precious|değerli|sıfat',
  'previous|önceki|sıfat', 'private|özel|sıfat', 'probable|muhtemel|sıfat', 'proper|uygun|sıfat',
  'public|kamuya ait|sıfat', 'pure|saf|sıfat', 'rare|nadir|sıfat', 'real|gerçek|sıfat',
  'recent|yakın zamandaki|sıfat', 'regular|düzenli|sıfat', 'relevant|ilgili|sıfat',
  'reliable|güvenilir|sıfat', 'responsible|sorumlu|sıfat', 'rough|pürüzlü, kaba|sıfat',
  'round|yuvarlak|sıfat', 'rural|kırsal|sıfat', 'sensitive|duyarlı|sıfat', 'separate|ayrı|sıfat',
  'sharp|keskin|sıfat', 'silent|sessiz|sıfat', 'similar|benzer|sıfat', 'simple|basit|sıfat',
  'single|tek|sıfat', 'slight|hafif|sıfat', 'smooth|pürüzsüz|sıfat', 'social|toplumsal|sıfat',
  'solid|katı, sağlam|sıfat', 'special|özel|sıfat', 'specific|belirli|sıfat', 'steady|istikrarlı|sıfat',
  'straight|düz|sıfat', 'strange|tuhaf|sıfat', 'successful|başarılı|sıfat', 'sudden|ani|sıfat',
  'suitable|uygun|sıfat', 'sure|emin|sıfat', 'thick|kalın|sıfat', 'thin|ince|sıfat',
  'tight|sıkı|sıfat', 'tiny|minicik|sıfat', 'typical|tipik|sıfat', 'unique|benzersiz|sıfat',
  'urban|kentsel|sıfat', 'urgent|acil|sıfat', 'valuable|değerli|sıfat', 'various|çeşitli|sıfat',
  'violent|şiddetli|sıfat', 'wealthy|varlıklı|sıfat', 'wide|geniş|sıfat', 'willing|istekli|sıfat',
  'wooden|ahşap|sıfat', 'wrong|yanlış|sıfat'
  ]);

  /* ---------- 13. Zarflar ---------- */
  A([
  'absolutely|kesinlikle|zarf', 'actually|aslında|zarf', 'anyway|her neyse|zarf',
  'apparently|görünüşe göre|zarf', 'badly|kötü biçimde|zarf', 'barely|ancak, zar zor|zarf',
  'certainly|kuşkusuz|zarf', 'clearly|açıkça|zarf', 'completely|tamamen|zarf',
  'definitely|kesinlikle|zarf', 'easily|kolayca|zarf', 'especially|özellikle|zarf',
  'eventually|sonunda|zarf', 'exactly|tam olarak|zarf', 'extremely|son derece|zarf',
  'fairly|oldukça|zarf', 'finally|sonunda|zarf', 'fortunately|neyse ki|zarf',
  'generally|genellikle|zarf', 'hardly|neredeyse hiç|zarf', 'honestly|dürüstçe|zarf',
  'immediately|hemen|zarf', 'indeed|gerçekten|zarf', 'instead|onun yerine|zarf',
  'luckily|şansa|zarf', 'mainly|çoğunlukla|zarf', 'meanwhile|bu arada|zarf',
  'mostly|çoğunlukla|zarf', 'nearly|neredeyse|zarf', 'obviously|belli ki|zarf',
  'occasionally|ara sıra|zarf', 'particularly|özellikle|zarf', 'perfectly|kusursuzca|zarf',
  'perhaps|belki|zarf', 'possibly|muhtemelen|zarf', 'probably|büyük olasılıkla|zarf',
  'quickly|hızlıca|zarf', 'quietly|sessizce|zarf', 'rather|oldukça, tercihen|zarf',
  'really|gerçekten|zarf', 'seriously|ciddi biçimde|zarf', 'simply|basitçe|zarf',
  'slowly|yavaşça|zarf', 'suddenly|aniden|zarf', 'surely|elbette|zarf',
  'totally|tamamen|zarf', 'truly|gerçekten|zarf', 'unfortunately|maalesef|zarf',
  'usually|genellikle|zarf', 'widely|geniş ölçüde|zarf'
  ]);

  /* ---------- 14. Bağlaçlar ve söylem ifadeleri (B2) ---------- */
  A([
  'although|-mesine rağmen|bağlaç', 'though|gerçi, -e rağmen|bağlaç',
  'even though|her ne kadar|bağlaç', 'however|ancak, ne var ki|bağlaç',
  'therefore|bu nedenle|bağlaç', 'thus|böylece|bağlaç', 'moreover|üstelik|bağlaç',
  'furthermore|ayrıca|bağlaç', 'besides|bunun yanında|bağlaç', 'nevertheless|yine de|bağlaç',
  'otherwise|aksi hâlde|bağlaç', 'whereas|oysa|bağlaç', 'unless|-mezse|bağlaç',
  'as soon as|-er ermez|bağlaç', 'as long as|-diği sürece|bağlaç', 'in order to|-mek için|bağlaç',
  'so that|-sin diye|bağlaç', 'due to|-den dolayı|edat', 'because of|-den dolayı|edat',
  'according to|-e göre|edat', 'instead of|-mek yerine|edat', 'apart from|-in dışında|edat',
  'in spite of|-e rağmen|edat', 'thanks to|sayesinde|edat', 'such as|gibi, örneğin|edat',
  'for example|örneğin|ifade', 'for instance|örneğin|ifade', 'in fact|aslında|ifade',
  'on the other hand|öte yandan|ifade', 'in my opinion|bana göre|ifade',
  'first of all|her şeyden önce|ifade', 'in conclusion|sonuç olarak|ifade',
  'at least|en azından|ifade', 'at last|nihayet|ifade', 'of course|tabii ki|ifade',
  'as a result|sonuç olarak|ifade', 'in addition|ayrıca|ifade', 'by the way|bu arada|ifade',
  'no longer|artık değil|ifade', 'as usual|her zamanki gibi|ifade', 'in general|genel olarak|ifade'
  ]);

  /* ---------- 15. Sık öbek fiiller (phrasal verbs) ---------- */
  A([
  'get up|kalkmak|öbek fiil', 'wake up|uyanmak|öbek fiil', 'stand up|ayağa kalkmak|öbek fiil',
  'sit down|oturmak|öbek fiil', 'lie down|uzanmak|öbek fiil', 'go out|dışarı çıkmak|öbek fiil',
  'come back|geri dönmek|öbek fiil', 'go on|devam etmek|öbek fiil', 'carry on|sürdürmek|öbek fiil',
  'give up|vazgeçmek|öbek fiil', 'look for|aramak|öbek fiil', 'look after|bakmak, ilgilenmek|öbek fiil',
  'look forward to|dört gözle beklemek|öbek fiil', 'find out|öğrenmek|öbek fiil',
  'put on|giymek|öbek fiil', 'take off|çıkarmak, kalkmak|öbek fiil', 'turn on|açmak|öbek fiil',
  'turn off|kapatmak|öbek fiil', 'turn up|çıkagelmek, sesi açmak|öbek fiil',
  'pick up|almak, kaldırmak|öbek fiil', 'put off|ertelemek|öbek fiil', 'call off|iptal etmek|öbek fiil',
  'set up|kurmak|öbek fiil', 'grow up|büyümek|öbek fiil', 'bring up|yetiştirmek|öbek fiil',
  'run out of|tükenmek|öbek fiil', 'get on with|iyi geçinmek|öbek fiil',
  'get over|atlatmak|öbek fiil', 'deal with|başa çıkmak|öbek fiil', 'take care of|bakmak|öbek fiil',
  'point out|belirtmek|öbek fiil', 'work out|çözmek, spor yapmak|öbek fiil',
  'break down|bozulmak|öbek fiil', 'cut down|azaltmak|öbek fiil', 'fill in|doldurmak|öbek fiil',
  'hand in|teslim etmek|öbek fiil', 'hold on|beklemek|öbek fiil', 'keep on|devam etmek|öbek fiil',
  'make up|uydurmak, barışmak|öbek fiil', 'show up|ortaya çıkmak|öbek fiil',
  'take part in|katılmak|öbek fiil', 'get along|geçinmek|öbek fiil', 'come across|rastlamak|öbek fiil'
  ]);

  /* ---------- 16. Ölçü, miktar, biçim ---------- */
  A([
  'size|boyut|isim', 'length|uzunluk|isim', 'width|genişlik|isim', 'height|yükseklik|isim',
  'depth|derinlik|isim', 'weight|ağırlık|isim', 'speed|hız|isim', 'amount|miktar|isim',
  'number|sayı|isim', 'quantity|nicelik|isim', 'half|yarım|isim', 'quarter|çeyrek|isim',
  'pair|çift|isim', 'piece|parça|isim', 'slice|dilim|isim', 'bunch|demet|isim',
  'metre|metre|isim', 'kilometre|kilometre|isim', 'centimetre|santimetre|isim',
  'kilo|kilo|isim', 'gram|gram|isim', 'litre|litre|isim', 'percent|yüzde|isim',
  'total|toplam|isim', 'rest|geri kalan|isim', 'shape|biçim|isim', 'circle|daire|isim',
  'line|çizgi|isim', 'row|sıra|isim', 'level|seviye|isim', 'top|üst|isim',
  'bottom|alt|isim', 'middle|orta|isim', 'edge|kenar|isim', 'centre|merkez|isim',
  'colour|renk|isim', 'yellow|sarı|sıfat', 'orange|turuncu|sıfat', 'purple|mor|sıfat',
  'brown|kahverengi|sıfat', 'grey|gri|sıfat', 'black|siyah|sıfat', 'pink|pembe|sıfat',
  'enough|yeterli|belirteç', 'plenty|bol|belirteç', 'several|birkaç|belirteç',
  'a few|birkaç (sayılabilir)|belirteç', 'a little|biraz (sayılamaz)|belirteç',
  'none|hiçbiri|belirteç', 'either|ikisinden biri|belirteç', 'neither|hiçbiri|belirteç'
  ]);

  /* ---------- 17. Ek düzensiz fiiller (V1 | V2 | V3 | Türkçe) ---------- */
  KI.glossary.addIrregulars([
  'catch|caught|caught|yakalamak', 'choose|chose|chosen|seçmek', 'fall|fell|fallen|düşmek',
  'fly|flew|flown|uçmak', 'forgive|forgave|forgiven|affetmek', 'hang|hung|hung|asmak',
  'hit|hit|hit|vurmak', 'hold|held|held|tutmak', 'hurt|hurt|hurt|acıtmak',
  'lead|led|led|önderlik etmek', 'lend|lent|lent|ödünç vermek', 'let|let|let|izin vermek',
  'light|lit|lit|yakmak', 'mean|meant|meant|anlamına gelmek', 'rise|rose|risen|yükselmek',
  'seek|sought|sought|aramak', 'shake|shook|shaken|sallamak', 'shine|shone|shone|parlamak',
  'shoot|shot|shot|ateş etmek', 'show|showed|shown|göstermek', 'shut|shut|shut|kapatmak',
  'sink|sank|sunk|batmak', 'steal|stole|stolen|çalmak', 'stick|stuck|stuck|yapışmak',
  'strike|struck|struck|vurmak', 'swim|swam|swum|yüzmek', 'swear|swore|sworn|yemin etmek',
  'throw|threw|thrown|atmak', 'bite|bit|bitten|ısırmak', 'blow|blew|blown|esmek',
  'burn|burnt|burnt|yanmak', 'dig|dug|dug|kazmak', 'draw|drew|drawn|çizmek',
  'dream|dreamt|dreamt|rüya görmek', 'feed|fed|fed|beslemek', 'fight|fought|fought|savaşmak',
  'freeze|froze|frozen|donmak', 'hide|hid|hidden|saklamak', 'hurry|hurried|hurried|acele etmek',
  'ring|rang|rung|çalmak (zil)', 'rid|rid|rid|kurtulmak', 'spend|spent|spent|harcamak',
  'spread|spread|spread|yaymak', 'stand|stood|stood|ayakta durmak', 'tear|tore|torn|yırtmak',
  'wake|woke|woken|uyanmak', 'bear|bore|borne|katlanmak', 'beat|beat|beaten|yenmek'
  ]);

})(window.KI);

/* ============================================================
   Günlük hayat örneklerinin kelimeleri
   (examples-extra.js içindeki cümlelerde geçenler)
   ============================================================ */
(function (KI) {
  'use strict';
  KI.glossary.addWords([
  /* yer adları (Türkçede zaten aynı yazılan/okunan şehir adları
     kaldırıldı; yalnız gerçekten farklı yazılan kaldı) */
  'cappadocia|Kapadokya|özel isim',

  /* halk hikâyeleri */
  'oghuz|Oğuz|özel isim',
  'shadow|gölge|isim', 'tale|masal|isim', 'folk|halk|sıfat', 'legend|efsane|isim',
  'hero|kahraman|isim', 'wisdom|bilgelik|isim',

  /* günlük hayat */
  'tarhana|tarhana|isim', 'paste|salça, macun|isim', 'pickle|turşu|isim',
  'pickles|turşular|isim', 'jar|kavanoz|isim', 'grove|koru, ağaçlık|isim',
  'olive grove|zeytinlik|isim', 'harvest|hasat, hasat etmek|isim',
  'villager|köylü|isim', 'teahouse|kıraathane, çay ocağı|isim',
  'backgammon|tavla|isim', 'dolmus|dolmuş|isim', 'minibus|minibüs|isim',
  'truck|kamyon|isim', 'balloon|balon|isim', 'dawn|şafak|isim',
  'sunrise|gün doğumu|isim', 'sunset|gün batımı|isim', 'turquoise|turkuaz|sıfat',
  'front|ön|isim', 'in front of|önünde|edat', 'out of|içinden, -den dışarı|edat',
  'out|dışarı|zarf', 'climb|tırmanmak|fiil', 'reach|ulaşmak, varmak|fiil',
  'pick|toplamak, seçmek|fiil', 'shake|silkelemek, sallamak|fiil',
  'grill|ızgarada pişirmek|fiil', 'snow|kar, kar yağmak|isim',
  'men|adamlar|isim', 'women|kadınlar|isim', 'ring|yüzük, çalmak (zil)|isim',
  'sweets|şekerler, tatlılar|isim', 'holiday sweets|bayram şekeri|isim',
  'market day|pazar günü (kurulan pazar)|isim', 'picnic|piknik|isim',
  'seaside|deniz kenarı|isim', 'countryside|kırsal, taşra|isim',
  'highland|yayla|isim', 'vineyard|bağ|isim', 'orchard|meyve bahçesi|isim',
  'greengrocer|manav|isim', 'stall|tezgâh|isim', 'bargain|pazarlık etmek|fiil',
  'queue|sıra, kuyruk|isim', 'ferryboat|vapur|isim', 'seagull|martı|isim'
  ]);
})(window.KI);
