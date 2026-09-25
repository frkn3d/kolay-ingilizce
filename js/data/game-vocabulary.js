/* ============================================================
   Gramer Atlası - game-vocabulary.js
   Oyun Modu soru bankasında (game-questions.js / game-questions-2.js)
   geçen ama ana sözlükte henüz olmayan kelimeler. Oyun Modu'ndaki
   sorular tıklanabilir kelime kartı kullanmaz; bu dosya yalnızca
   Sözlük sekmesinin bu kelimeleri de içermesi için eklenmiştir.
   Türkçede zaten aynı yazılan özel isimler (şehir/kişi adları vb.)
   kasıtlı olarak eklenmedi - bkz. glossary.js "özel isimler" notu.
   ============================================================ */
(function (KI) {
  'use strict';
  KI.glossary.addWords([
  /* ofis / kurum / iş hayatı */
  'clerk|memur, katip|isim', 'technician|teknisyen|isim', 'assistant|asistan, yardımcı|isim',
  'repairman|tamirci|isim', 'shopkeeper|dükkân sahibi|isim', 'inspector|müfettiş|isim',
  'courier|kurye|isim', 'janitor|hademe, kapıcı|isim', 'gardener|bahçıvan|isim',
  'pharmacist|eczacı|isim', 'calligrapher|hattat|isim', 'seller|satıcı|isim',
  'council|konsey, meclis|isim', 'municipal|belediyeye ait|sıfat', 'internship|staj|isim',
  'part-time|yarı zamanlı|sıfat', 'shift|vardiya|isim', 'attendance|katılım, yoklama|isim',
  'cooperative|kooperatif|isim', 'volunteer|gönüllü|isim', 'session|oturum, seans|isim',

  /* ofis işleri: form, kayıt, yazdırma */
  'form|form, formül|isim', 'card|kart|isim', 'address|adres|isim',
  'identity|kimlik|isim', 'id|kimlik (belgesi)|isim', 'archive|arşiv|isim',
  'cataloging|kataloglama|fiil', 'cataloged|kataloglandı|fiil',
  'scanning|tarama|fiil', 'scanned|tarandı|fiil', 'scan|taramak|fiil', 'scanner|tarayıcı|isim',
  'printing|yazdırma, baskı|isim', 'printed|basıldı, yazdırıldı|fiil', 'print|yazdırmak|fiil',
  'sorting|ayırma, sıralama|fiil', 'sorted|ayrıldı, sıralandı|fiil',
  'reviewing|gözden geçirme|fiil', 'reviewed|gözden geçirildi|fiil',
  'submitted|gönderildi, teslim edildi|fiil', 'submit|göndermek, teslim etmek|fiil',
  'renewed|yenilendi|fiil', 'renewing|yenileme|fiil', 'renew|yenilemek|fiil', 'renews|yeniler|fiil',
  'subscription|abonelik|isim', 'payment|ödeme|isim', 'fee|ücret|isim',
  'reserve|ayırtmak, rezerve etmek|fiil', 'valid|geçerli|sıfat', 'entry|giriş|isim',
  'option|seçenek|isim', 'system|sistem|isim', 'modem|modem|isim', 'cable|kablo|isim',
  'terminal|terminal|isim', 'kiosk|büfe, kiosk|isim', 'poster|afiş|isim', 'ads|reklamlar|isim',

  /* şehir, ulaşım, mekan */
  'tram|tramvay|isim', 'metro|metro|isim', 'commuter|banliyö yolcusu|isim',
  'corridor|koridor|isim', 'elevator|asansör|isim', 'center|merkez|isim',
  'dormitory|yurt (öğrenci)|isim', 'roommate|oda arkadaşı|isim', 'cafeteria|kafeterya, yemekhane|isim',
  'canteen|kantin|isim', 'grocery|bakkaliye, market|isim', 'stationery|kırtasiye|isim',
  'playground|oyun bahçesi|isim',
  'cargo|kargo|isim', 'parcel|paket, koli|isim', 'parcels|paketler|isim',
  'doorbell|kapı zili|isim', 'shutters|kepenkler|isim', 'cabinet|dolap|isim',

  /* ev, gündelik yaşam */
  'siren|siren|isim', 'kid|çocuk|isim', 'kids|çocuklar|isim', 'stroller|puset, bebek arabası|isim',
  'bedtime|yatma vakti|isim', 'sleepy|uykulu|sıfat', 'stray|sokak (hayvanı), başıboş|sıfat',
  'copper|bakır|isim', 'heating|ısıtma|isim', 'cracked|çatladı|fiil', 'jammed|sıkıştı|fiil',
  'leak|sızıntı, sızmak|isim', 'muddy|çamurlu|sıfat', 'dusty|tozlu|sıfat',
  'swept|süpürüldü (sweep fiilinin 2/3. hâli)|fiil', 'fasten|bağlamak|fiil',
  'fastened|bağlandı, tutturuldu|fiil', 'fastens|bağlar|fiil', 'tying|bağlama|fiil',
  'thicker|daha kalın|sıfat', 'quieter|daha sessiz|sıfat', 'blocked|tıkandı, engellendi|fiil',
  'blocking|engelleme, tıkama|fiil', 'burst|patladı, aniden fışkırdı|fiil',
  'lantern|fener|isim', 'lanterns|fenerler|isim', 'bench|bank (oturma)|isim', 'benches|banklar|isim',
  'flag|bayrak|isim', 'flags|bayraklar|isim', 'box|kutu|isim', 'boxes|kutular|isim',
  'pomegranate|nar|isim', 'pomegranates|narlar|isim', 'sesame|susam|isim',
  'knead|yoğurmak|fiil', 'kneaded|yoğruldu|fiil', 'kneading|yoğurma|fiil',
  'rental|kiralık|sıfat', 'spare|yedek|sıfat', 'deck|güverte, iskambil destesi|isim',
  'youth|gençlik|isim', 'elderly|yaşlı|sıfat', 'parent|ebeveyn|isim', 'eyesight|görme (yetisi)|isim',
  'vaccination|aşı, aşılama|isim', 'dental|dişle ilgili|sıfat', 'inspection|denetim|isim',
  'clean-up|temizlik|isim', 'reusable|tekrar kullanılabilir|sıfat', 'regional|bölgesel|sıfat',
  'toward|-e doğru|edat', 'measurement|ölçüm|isim', 'measurements|ölçümler|isim',
  'duration|süre|isim', 'completion|tamamlanma|isim', 'event|etkinlik, olay|isim',
  'semester|dönem (akademik)|isim', 'part|parça, bölüm|isim', 'sewn|dikildi (sew fiilinin 3. hâli)|fiil',
  'wrapped|sarıldı, paketlendi|fiil', 'shortened|kısaltıldı|fiil', 'shortening|kısaltma|isim',
  'shorten|kısaltmak|fiil', 'interrupted|kesintiye uğradı|fiil', 'interrupt|sözünü kesmek|fiil',
  'observed|gözlemlendi|fiil', 'observe|gözlemlemek|fiil', 'observing|gözlemleme|fiil',
  'slowed|yavaşladı|fiil', 'group|grup|isim', 'action|eylem|isim',
  'photograph|fotoğraf|isim', 'photographed|fotoğraflandı|fiil', 'photographing|fotoğraflama|fiil',
  'visitor|ziyaretçi|isim', 'visitors|ziyaretçiler|isim', 'visible|görünür|sıfat',
  'clapped|alkışladı|fiil', 'dancer|dansçı|isim', 'dancers|dansçılar|isim',
  'joke|şaka, fıkra|isim', 'jokes|şakalar, fıkralar|isim', 'puppet|kukla|isim', 'puppets|kuklalar|isim',
  'projector|projektör|isim', 'proverb|atasözü|isim', 'mastic|sakız (ağaç reçinesi)|isim',
  'lemon|limon|isim', 'lemonade|limonata|isim', 'rush|acele, telaş|isim',
  'difference|fark|isim', 'lately|son zamanlarda|zarf', 'correctly|doğru şekilde|zarf',

  /* dilbilgisi terimleri (sorularda sık geçer) */
  'past|geçmiş (zaman)|isim', 'future|gelecek (zaman)|isim',
  'continuous|sürekli, süren (zaman)|sıfat', 'tense|zaman (gramer)|isim', 'tenses|zamanlar (gramer)|isim',
  'verb|fiil|isim', 'verbs|fiiller|isim', 'irregular|düzensiz|sıfat',
  'plural|çoğul|isim', 'plurals|çoğullar|isim', 'negative|olumsuz|sıfat',
  'grammar|dilbilgisi|isim', 'phrase|öbek, ifade|isim', 'phrasal|öbekle ilgili (phrasal verb)|sıfat',
  'comparison|karşılaştırma|isim', 'explanation|açıklama|isim', 'vocabulary|kelime bilgisi|isim',
  'pronunciation|telaffuz|isim', 'unit|ünite, birim|isim', 'units|üniteler, birimler|isim',
  'term|dönem, terim|isim', 'quiz|kısa sınav|isim', 'unnatural|doğal olmayan|sıfat',
  'oral|sözlü|sıfat', 'color|renk|isim',

  /* Türkçe kökenli, İngilizce cümlelerde olduğu gibi kullanılan kelimeler.
     "dolmuş" burada aksanlı hâliyle de eklendi çünkü game-questions.js
     bu kelimeyi Türkçe yazımıyla kullanıyor; vocabulary.js'teki eski
     "dolmus" (aksansız) girişi diğer örnek cümlelerle uyumluluk için duruyor. */
  'pide|pide|isim', 'börek|börek|isim', 'dolmuş|dolmuş|isim',

  /* kaçırılan birkaç temel kelime */
  'enter|girmek|fiil', 'block|blok, engellemek|isim', 'pad|yastıkçık, ped|isim',
  'eleven|on bir|sayı', 'cafe|kafe|isim', 'shelves|raflar|isim'
  ]);
})(window.KI);
