/* ============================================================
   Gramer Atlası — settings.js
   Ayarlar penceresi: ses, tema, okuma hızı, telaffuz sesi.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  var APP_VERSION = '0.7.4';
  KI.appVersion = APP_VERSION;  // gate.js gibi başka modüller de okuyabilsin diye
  var CHANGELOG = [
    { v: '0.7.4', d: 'Oyun Modu\'ndaki "cümle kurma" alıştırmasında bir hata düzeltildi: kelime havuzundan bir kelimeye dokununca aşağıdaki/sağdaki diğer kelimeler yerinden oynuyor, bu yüzden art arda dokunuşlar yanlış kelimeye denk gelebiliyordu. Artık seçilen kelime yerini koruyor, diğer kelimeler hiç kaymıyor.' },
    { v: '0.7.3', d: 'Harita sekmesindeki kural gösterimi tek tek kartlardan alındı; artık en üstteki ana zaman çizgisine dokununca bütün kartların Türkçe adı birlikte, kısaca yer değiştirerek o zamanın olumlu/olumsuz/soru kuralını gösteriyor. Sürekli "nefes alma" animasyonu da tek tek kartlardan bu ana çizgiye taşındı.' },
    { v: '0.7.2', d: 'Zaman Yolculuğu\'nda ince ayar: ŞİMDİ çizgisi artık kalın, hafif parlamalı ve dolgulu bir rozet ile çok daha belirgin. Sağ ve sol uçlara, kaydırma pozisyonundan bağımsız hep sabit kalan "← Geçmiş" / "Gelecek →" yön etiketleri eklendi. Dokunmatik ekranlarda parmağın doğal titremesi yüzünden bazı dokunuşlar sürükleme sanılıp cümle hiç açılmıyordu; dokunma toleransı artırıldı ve bir cümle seçilince Türkçe/açıklama kutusu gerekirse otomatik görünüme kaydırılıyor.' },
    { v: '0.7.1', d: 'Harita sekmesindeki zaman çizgileri artık sürekli hafifçe "nefes alıyor"; birine dokununca altındaki Türkçe ad kısaca yer değiştirip o zamanın olumlu kuralını gösteriyor, tekrar dokununca olumsuz, tekrar dokununca soru kuralını gösteriyor (kart boyu değişmiyor). Servis çalışanı artık her istekte sunucuyla mutlaka doğrulama yapıyor — GitHub Pages\'in 10 dakikalık tarayıcı önbelleği yüzünden bir güncellemeden sonra bazen eski dosyaların görünmesi ihtimalini ortadan kaldırır. Oyun Modu\'nda bir cümle çevirisindeki eksiklik (balkon çiçekleri) düzeltildi.' },
    { v: '0.7.0', d: 'Sözlük\'e üçüncü bir bölüm eklendi: Zaman Yolculuğu. Aynı cümle ("Mehmet büyükannesine mektup yazıyor") 12 zamanın hepsinde, tek ve uzun bir zaman çizgisi üzerinde gösteriliyor. Çizgi iki parmakla yakınlaştırılıp uzaklaştırılabiliyor, sürükleyerek gezilebiliyor; masaüstünde fare tekerleğiyle imlecin altındaki noktayı sabit tutarak yakınlaşılıyor, sürükleyerek gezilebiliyor. Alta bir yakınlaştırma çubuğu ve "Tümünü gör" düğmesi eklendi. Bir cümleye dokununca Türkçesi ve o zamanın neden kullanıldığını açıklayan kısa bir not beliriyor. Klavyeyle gezinirken de odaklanılan cümle otomatik olarak görünüme kayıyor.' },
    { v: '0.6.6', d: 'Giriş ekranındaki logo büyütüldü.' },
    { v: '0.6.5', d: 'Üst çubuktaki canlar/başarımlar/ayarlar düğmeleri ve pencere kapatma düğmeleri 40-36px\'ten 44×44px\'e büyütüldü — Apple/Android\'in önerdiği en küçük dokunma hedefine (44×44) uysun diye, özellikle küçük telefonlarda yanlışlıkla komşu düğmeye basmayı azaltır.' },
    { v: '0.6.4', d: 'Görülebilirlik ve erişilebilirlik turu: Ayarlar/Başarımlar/Canlar/Sıfırlama pencereleri artık açılınca odağı içine alıyor, Tab tuşuyla pencere dışına çıkılamıyor, kapanınca odak açan düğmeye geri dönüyor. Bildirim baloncukları (toast) artık ekran okuyuculara da duyuruluyor. Oyun Modu\'nun mor vurgu rengi biraz koyulaştırıldı (kontrast standardını geçmesi için). Sayfa daha hızlı açılsın diye script dosyaları artık paralel yükleniyor. Oyun Modu haritasına ilk girişte ve haritanın en altında, ilerlemenin yalnızca bu cihazda saklandığını hatırlatan küçük bir not eklendi. Giriş ekranının en altına küçük bir "Logspace" ve sürüm notu eklendi.' },
    { v: '0.6.3', d: 'Oyun Modu haritasındaki patika artık düz bir çizgi yerine düzensiz, sağa sola kıvrılan eğrilerle ilerliyor: her durak farklı genlikte bir yöne kayıyor ve aralarındaki bağlantı da buna göre yumuşak bir eğri çiziyor — hiçbir zaman yatay kaydırma gerektirmeyecek şekilde sınırlandırıldı.' },
    { v: '0.6.2', d: 'Oyun Modu\'nun arka planı yeniden tasarlandı: kağıt/defter kimliğinden tamamen ayrışan, açık/koyu tema tercihinden bağımsız koyu lacivert-mor bir "gece haritası" gradyanı geldi (yeşilden bilerek uzak duruldu). Kartlar, soru şıkları, düğmeler gibi Oyun Modu\'ndaki her şey bu yeni palete göre yeniden renklendirildi ki her ekran tutarlı ve göze yorucu gelmeyen bir bütün oluştursun. Ayarlar\'daki "Tüm ilerlemeyi sıfırla" düğmesi artık tek tıkla çalışmıyor: düğmeyi 3 saniye basılı tutmak gerekiyor, ardından açılan onay penceresindeki "Evet, hepsini sil" düğmesi de 3 saniye daha bekleyip aktifleşiyor — yanlışlıkla tüm ilerlemenin silinmesi zorlaştırıldı.' },
    { v: '0.6.1', d: 'Oyun Modu haritasında ince ayar: kilitli duraklar artık koyu gri, kilit simgesi beyaz. Haritanın en üstündeki "Oyun Modu / Zaman Haritası" başlığı ve açıklama yazısı kaldırıldı, gereksiz yer kaplıyordu. Yazı tipi eğlenceli ama daha belirgin bir sans-serif olan Quicksand’a çevrildi. Arka plandaki defter (kareli) dokusu Oyun Modu’nda kaldırıldı; yerine noktalardan oluşan, kaydırmalı geometrik bir doku geldi — diğer sekmelerdeki defter dokusu değişmedi.' },
    { v: '0.6.0', d: 'Oyun Modu’nda büyük bir güncelleme: haritadaki 90 ders artık hiç tekrarsız, günlük hayattan farklı bir başlığa ve simgeye sahip (Çay Saati, Ofis Toplantısı, Sinema Gecesi, Tren İstasyonu…). Günlük can hakkı 7’ye çıktı, video izleyince +3 can veriyor (yine 7’yi geçmiyor). Üst üste 3/5/7 doğru cevapta ekranda konfeti patlıyor ve ayrı bir "kombo" sesi çalıyor; bir durağı 10/10 bitirince konfeti daha uzun sürüyor ve daha büyük bir kutlama sesi çalıyor. Oyun Modu’na özel 7 yeni başarım eklendi (İlk Adım, 10 Durak, Tüm Haritayı Gezdim, İlk İleri Sar, Kusursuz Sınav, 7’li Kombo, Video İzleyici). Oyun Modu ekranları artık eğlenceli bir başlık yazı tipi (Baloo 2, çevrimdışı çalışsın diye uygulamayla birlikte gönderiliyor) kullanıyor ve arka planı diğer sekmelere göre %20 daha koyu. Sözlükten "Ankara" gibi Türkçesi zaten kendisiyle aynı olan özel isimler kaldırıldı; Oyun Modu sorularında geçen ~200 yeni kelime (clerk, dormitory, technician, cargo…) sözlüğe eklendi.' },
    { v: '0.5.5', d: 'Bir dizi düzeltme ve ince ayar: Orta/İleri seviyelerinin en sonuna gelen mantıksız İleri Sar sınavı kaldırıldı. Üst çubuktaki tema düğmesi kaldırıldı (Ayarlar → Görünüm’de zaten var). Giriş ekranının arka planı artık koyu, sıcak bir radyal gradyan (defter dokusu yok, tema tercihinden bağımsız); logo ve isim büyütüldü; Oyun Modu sağda, Eğitim Modu solda. Oyun Modu’nda sınav sırasındaki geri dönüş, üstünde "Geri dön" yazan belirgin bir düğmeye çevrildi. Haritadaki ders adları artık aynı zaman isimlerini tekrar etmek yerine günlük hayattan farklı temalar (Çay Saati, Simit Arabası, Dolmuş Durağı…) ve onlara özel yeni simgeler kullanıyor; gerçek zaman adı sınav sayfasında hâlâ görünüyor.' },
    { v: '0.5.4', d: 'Giriş ekranı (mod seçimi) yeniden tasarlandı: üst çubuk ve alt sekme çubuğu tamamen kaldırıldı, her şey tek bir ekrana sığacak şekilde sıkılaştırıldı — hiçbir telefon boyutunda kaydırma gerekmiyor artık. Oyun Modu ve Eğitim Modu’na girince üst/alt çubuklar normal şekilde geri geliyor.' },
    { v: '0.5.3', d: 'İleri Sar düzeltmesi: bir sınavı geçince artık yalnız hemen önceki durak değil, o noktaya kadarki bütün durakları açılıyor — mantıken olması gerektiği gibi. Sonraki ilk durak zaten olduğu gibi açılmaya devam ediyor.' },
    { v: '0.5.2', d: 'Oyun Modu haritası büyütüldü: her seviyede en az 24 durak var artık (Başlangıç 28, Orta ve İleri 27’şer; konular birden çok tur olarak tekrar geziliyor). Her 8 durakta bir "İleri Sar" sınavı eklendi: bu sınavlar her zaman açık, o seviyenin en zor (cümle kurma) sorularından oluşuyor; 10 üzerinden en az 7 yaparsan hemen önceki ve sonraki ilk durak da açılıyor, sırayı beklemeden ileri atlayabiliyorsun. Yeni İleri Sar simgesi eklendi. Ayrıca ikinci bir soru bankası (720 soru daha) eklendi; Oyun Modu’nun toplam soru sayısı 1440’a çıktı, dersler artık çok daha az tekrarla geliyor.' },
    { v: '0.5.1', d: 'Oyun Modu düzeltmesi: soru bankasında doğru şık çoğunlukla A ya da B’de kalıyordu (kaynak metnin yapısından); artık her soru gösterildiğinde şıklar karıştırılıyor ve doğru cevap A/B/C/D arasında eşit olasılıkla dağılıyor. Sorular zaten havuzdan rastgele seçiliyordu (her durakta 10/60), tekrar oynadıkça farklı sorular geliyor.' },
    { v: '0.5.0', d: 'Büyük güncelleme: uygulama artık "Gramer Atlası" ismini taşıyor, yeni bir logo ve animasyonlu simgeler eklendi. Açılışta Oyun Modu / Eğitim Modu seçim ekranı geldi (logoya her zaman buradan dönülür). Eğitim Modu bugüne kadarki her şeyi (harita, temeller, alıştırma, sözlük, hikayeler) içeriyor. Yeni Oyun Modu: 3 zorluk seviyesi (Başlangıç yeşil, Orta mustard, İleri terra) için aşağı doğru uzanan bir harita, her seviyenin kendi renginde 4-5 durağı, her durakta 720 özgün sorudan (Türk kültüründen örneklerle) rastgele seçilen 10 soruluk kısa sınavlar. Günlük 5 can hakkı: yanlış cevap bir can eksiltir, video izleyerek veya Premium’a geçerek can kazanılır (şimdilik deneme modunda, gerçek reklam/ödeme sonra eklenecek); duraklar sırayla açılır.' },
    { v: '0.4.5', d: 'Sekmelerin arka planına çok hafif, birbirinden farklı tonlar eklendi (Temeller, Alıştırma, Sözlük); koyuluk aynı kalıyor, sadece renk hafifçe kayıyor. Karanlık modda daha da belli belirsiz. Harita sekmesi değişmedi.' },
    { v: '0.4.4', d: 'Üst çubuktaki ses açma/kapama düğmesi kaldırıldı; aynı ayar zaten Ayarlar → Ses altında duruyor, tekrarı gereksizdi.' },
    { v: '0.4.3', d: 'Hikayeler bölümüne 8 yeni anonim hikaye eklendi: 5 yeni Nasreddin Hoca fıkrası (Ay’dan Yoğurt, Ye Kürküm Ye, On Üçüncü Eşek, Eşek Evde Yok, Ne Diyeceğimi Biliyor musunuz) ve 3 yeni Keloğlan hikayesi. Toplam hikaye sayısı 15’e çıktı.' },
    { v: '0.4.2', d: 'Sözlük sekmesi ikiye ayrıldı: Sözlük ve yeni Hikayeler bölümü. Hikayeler’de anonim halk hikayeleri var (Nasreddin Hoca fıkraları ve bir Keloğlan hikayesi); her hikaye cümle cümle sesli okunabiliyor (okunan cümle vurgulanır), herhangi bir kelimeye dokunup Türkçe anlamını görebiliyorsun, isteğe bağlı olarak bütün çevirileri de açabiliyorsun.' },
    { v: '0.4.1', d: 'Zaman sayfalarındaki örnek cümle sayısı 148’den 1000’in üzerine çıktı (yerel kültürden yeni temalarla); artık her girişte örnekler ve "Kendini dene" soruları havuzdan rastgele seçiliyor, aynı sorular tekrar etmiyor. Üst bant sadeleştirildi (alt yazı kaldırıldı). Alıştırma ekranı sıkılaştırıldı: mod kısayol şeridi kaldırıldı, başlık ve şıklar daraltıldı — bir soruyu cevapladıktan sonra aşağı kaydırmaya neredeyse hiç gerek kalmıyor.' },
    { v: '0.4', d: 'Başarım sistemi eklendi: el çizimi rozetlerle 15 başarım, kazanınca sesli/titreşimli kutlama kutusu (uygulama çubuğundaki kupa simgesinden erişilir). Dokunsal geri bildirim (titreşim): tıklamalarda minik, yanlış cevapta belirgin titreşim; ayarlardan kapatılabilir. İlerlemeyi bir dosyaya kaydedip başka bir cihazda geri yükleme (dışa/içe aktar).' },
    { v: '0.3', d: 'Emoji kaldırıldı, tüm ikonlar elle çizilmiş SVG’ye taşındı. Sözlük 3000’ün üzerine çıktı, alıştırma sayısı 327’ye ulaştı. Mobil zaman çizgileri yeniden tasarlandı (renk kontrastı, ince çizgiler, çakışan işaretlerin ayrılması). Aralıklı tekrar (Leitner kutusu) ve "Bugünkü Tekrar" modu, modal fiiller ve "used to" bölümleri, 6. karşılaştırma sayfası, sıklığa göre ayrılmış düzensiz fiiller, gerçek çevrimdışı çalışma. Ana sayfa sadeleştirildi: tek okla zaman şeridi, kaydırdıkça beliren animasyonlar.' },
    { v: '0.2', d: 'Sözlük B2 seviyesine genişletildi, alıştırma sayısı artırıldı. Karanlık modda okunabilirlik düzeltmeleri (baştan başla butonu, seçili cevap kontrastı). Dede Korkut ve Keloğlan gibi halk hikâyelerinden, günlük hayattan yeni örnek cümleler.' },
    { v: '0.1', d: 'İlk sürüm: 12 zamanın tam haritası ve zaman çizgisi görselleştirmesi, günlük hayattan ve yerel kültürden örnek cümleler, tıklanabilir sözlük, cihaz üstü sesli okuma, kısık ses efektleri.' }
  ];

  function switchRow(label, hint, key, onChange) {
    var input = U.el('input', { type: 'checkbox' });
    input.checked = !!KI.store.get(key);
    input.addEventListener('change', function () {
      KI.store.set(key, input.checked);
      KI.audio.play('toggle');
      if (onChange) onChange(input.checked);
    });
    var lbl = U.el('label', { style: 'display:flex;align-items:center;gap:10px;cursor:pointer' }, [
      input, U.el('span', {}, [
        U.el('b', { text: label }),
        hint ? U.el('div', { class: 'soft', style: 'font-size:.82rem', text: hint }) : null
      ])
    ]);
    return U.el('div', { class: 'switchrow' }, [lbl]);
  }

  function build() {
    var body = document.getElementById('settings-body');
    if (!body) return;
    U.clear(body);

    /* --- ses --- */
    body.appendChild(U.el('p', { class: 'eyebrow', text: 'Ses' }));
    body.appendChild(switchRow('Buton ses efektleri', 'Kısık, kısa tıklama sesleri.', 'sound'));
    body.appendChild(switchRow('Kelimeye dokununca oku', 'Kelime kartı açılınca telaffuzu otomatik duyulur.', 'autoSpeakWord'));
    if (KI.haptics && KI.haptics.available()) {
      body.appendChild(switchRow('Titreşim', 'Tıklamalarda minik, yanlış cevapta biraz daha uzun titreşim (yalnızca destekleyen cihazlarda).', 'haptics'));
    }

    /* --- okuma hızı --- */
    var rateVal = U.el('span', { class: 'quiz__score', text: Number(KI.store.get('speechRate')).toFixed(2) + '×' });
    var rate = U.el('input', { type: 'range', min: '0.4', max: '1.2', step: '0.05', value: KI.store.get('speechRate') });
    rate.addEventListener('input', function () {
      KI.store.set('speechRate', Number(rate.value));
      rateVal.textContent = Number(rate.value).toFixed(2) + '×';
    });
    rate.addEventListener('change', function () {
      KI.speech.speak('My grandfather drinks tea after the morning prayer.');
    });
    body.appendChild(U.el('div', { class: 'field', style: 'margin-top:14px' }, [
      U.el('div', { class: 'field__lbl' }, [U.el('span', { text: 'Okuma hızı' }), rateVal]),
      rate,
      U.el('div', { class: 'soft', style: 'font-size:.82rem', text: 'Kolu bırakınca örnek cümle okunur.' })
    ]));

    /* --- ses seçimi --- */
    var voices = KI.speech.voices();
    var sel = U.el('select');
    sel.appendChild(U.el('option', { value: '', text: 'Cihazın seçtiği ses' }));
    voices.forEach(function (v) {
      sel.appendChild(U.el('option', { value: v.voiceURI, text: v.name + '  (' + v.lang + ')' }));
    });
    sel.value = KI.store.get('speechVoice') || '';
    sel.addEventListener('change', function () {
      KI.store.set('speechVoice', sel.value);
      KI.speech.speak('Good morning. This is your new voice.');
    });
    body.appendChild(U.el('div', { class: 'field' }, [
      U.el('div', { class: 'field__lbl' }, [U.el('span', { text: 'Telaffuz sesi' })]),
      sel,
      U.el('div', { class: 'soft', style: 'font-size:.82rem', html: voices.length
        ? 'Cihazında ' + voices.length + ' İngilizce ses bulundu. Hiçbir internet servisi kullanılmaz.'
        : 'Cihazında İngilizce ses bulunamadı. Windows’ta Ayarlar → Saat ve Dil → Konuşma bölümünden, Android’de Ayarlar → Erişilebilirlik → Metin okuma bölümünden İngilizce ses eklenebilir.' })
    ]));

    /* --- okuma --- */
    body.appendChild(U.el('p', { class: 'eyebrow', text: 'Okuma' }));
    body.appendChild(switchRow('Çeviriler açık gelsin', 'Örnek cümlelerin Türkçesi baştan görünür.', 'autoTranslate'));

    /* --- alıştırma --- */
    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:16px', text: 'Alıştırma' }));
    body.appendChild(switchRow('Sadece öğrendiğim zamanlardan sor', 'Açıkken sorular yalnız "Öğrendim" işaretlediğin zamanlardan gelir. Hiçbir zaman işaretli değilse hepsinden sorulur.', 'onlyLearned'));

    /* --- görünüm --- */
    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:16px', text: 'Görünüm' }));
    var themeRow = U.el('div', { class: 'row' });
    [['light', 'sun', 'Açık'], ['dark', 'moon', 'Koyu']].forEach(function (th) {
      var b = U.el('button', {
        class: 'btn btn--sm' + (KI.store.get('theme') === th[0] ? ' btn--primary' : ''),
        type: 'button', html: KI.icons.html(th[1]) + ' ' + th[2]
      });
      b.addEventListener('click', function () {
        KI.setTheme(th[0]);
        KI.audio.play('toggle');
        build();
      });
      themeRow.appendChild(b);
    });
    body.appendChild(themeRow);

    /* --- okunaklılık --- */
    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:16px', text: 'Okunaklılık' }));
    var fontRow = U.el('div', { class: 'row' });
    [['small', 'Küçük'], ['normal', 'Normal'], ['large', 'Büyük']].forEach(function (o) {
      var b = U.el('button', {
        class: 'btn btn--sm' + ((KI.store.get('fontSize') || 'normal') === o[0] ? ' btn--primary' : ''),
        type: 'button', text: o[1]
      });
      b.addEventListener('click', function () {
        KI.store.set('fontSize', o[0]);
        KI.applyPrefs();
        KI.audio.play('toggle');
        build();
      });
      fontRow.appendChild(b);
    });
    body.appendChild(U.el('div', { class: 'field' }, [
      U.el('div', { class: 'field__lbl' }, [U.el('span', { text: 'Yazı boyutu' })]),
      fontRow
    ]));
    body.appendChild(switchRow('Animasyonları azalt', 'Geçiş ve belirme hareketlerini kapatır.', 'lessMotion', function () {
      KI.applyPrefs();
    }));

    /* --- ilerleme --- */
    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:18px', text: 'İlerleme' }));
    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.88rem',
      text: KI.store.learnedCount() + ' zaman öğrenildi olarak işaretli, defterinde ' + KI.store.words().length +
            ' kelime var (' + KI.store.dueWordCount() + ' tanesinin bugün tekrar zamanı geldi). Zorlandıklarım listesinde ' +
            KI.store.troubleCount() + ' kayıt bulunuyor.' }));
    var reset = U.el('button', { class: 'btn btn--sm holdbtn', type: 'button', title: '3 saniye basılı tut' }, [
      U.el('span', { class: 'holdbtn__fill', 'aria-hidden': 'true' }),
      U.el('span', { class: 'holdbtn__label', html: KI.icons.html('trash') + ' Tüm ilerlemeyi sıfırla' })
    ]);
    var holdTimer = null;
    function holdStart(e) {
      if (e.button !== undefined && e.button !== 0) return;
      if (holdTimer) return;
      reset.classList.add('is-holding');
      holdTimer = setTimeout(function () {
        holdTimer = null;
        reset.classList.remove('is-holding');
        openResetConfirm(reset);
      }, 3000);
    }
    function holdCancel() {
      clearTimeout(holdTimer);
      holdTimer = null;
      reset.classList.remove('is-holding');
    }
    reset.addEventListener('pointerdown', holdStart);
    reset.addEventListener('pointerup', holdCancel);
    reset.addEventListener('pointerleave', holdCancel);
    reset.addEventListener('pointercancel', holdCancel);
    reset.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') holdStart(e); });
    reset.addEventListener('keyup', holdCancel);
    reset.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    body.appendChild(reset);
    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.78rem;margin-top:6px',
      text: 'Yanlışlıkla silinmesin diye: düğmeyi 3 saniye basılı tutman, sonra da açılan onay penceresinde 3 saniye daha beklemen gerekiyor.' }));

    /* --- veri: cihaz değişince ilerlemeyi taşımak için --- */
    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:18px', text: 'Veri' }));
    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.88rem',
      text: 'İlerlemeni bir dosyaya kaydedip başka bir cihazda geri yükleyebilirsin. Hiçbir veri dışarıya gönderilmez.' }));
    var dataRow = U.el('div', { class: 'row' });
    var exportBtn = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('download') + ' Dışa aktar' });
    exportBtn.addEventListener('click', function () {
      KI.audio.play('tap');
      var blob = new Blob([KI.store.exportData()], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = U.el('a', { href: url, download: 'kolay-ingilizce-yedek-' + new Date().toISOString().slice(0, 10) + '.json' });
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      U.toast('Yedek dosyası indirildi');
    });
    var importInput = U.el('input', { type: 'file', accept: 'application/json,.json', style: 'display:none' });
    var importBtn = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('upload') + ' İçe aktar' });
    importBtn.addEventListener('click', function () { KI.audio.play('tap'); importInput.click(); });
    importInput.addEventListener('change', function () {
      var file = importInput.files && importInput.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        if (!window.confirm('Mevcut ilerleme bu dosyadaki verilerle değiştirilecek. Devam edilsin mi?')) { importInput.value = ''; return; }
        var ok = KI.store.importData(String(reader.result));
        if (ok) {
          KI.audio.play('correct');
          U.toast('Veriler geri yüklendi');
          build();
          KI.router.refresh();
        } else {
          KI.audio.play('wrong');
          U.toast('Dosya okunamadı: geçerli bir yedek değil');
        }
        importInput.value = '';
      };
      reader.readAsText(file);
    });
    dataRow.appendChild(exportBtn);
    dataRow.appendChild(importBtn);
    dataRow.appendChild(importInput);
    body.appendChild(dataRow);

    /* --- hakkında --- */
    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:18px;border-top:1px dashed var(--line);padding-top:14px', text: 'Hakkında' }));
    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.88rem',
      text: 'Gramer Atlası · Zaman çizgisiyle gramer · ' + KI.tenses.list.length + ' zaman · ' + KI.glossary.size() + ' kelime.' }));
    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.82rem',
      text: 'Bu bir Logspace uygulamasıdır. Sesler cihazınızın kendi konuşma motoruyla üretilir; hiçbir veri dışarı gönderilmez, her şey yalnızca bu cihazda saklanır.' }));
    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.8rem;font-family:var(--font-mono)', text: 'Sürüm ' + APP_VERSION }));

    var changelog = U.el('details', { class: 'disclose', style: 'margin-top:8px' });
    changelog.appendChild(U.el('summary', { html: '<span>Sürüm notları</span>' }));
    var clBody = U.el('div', { class: 'disclose__body' });
    var clList = U.el('ul', { class: 'disclose__list' });
    CHANGELOG.forEach(function (c) {
      clList.appendChild(U.el('li', { html: '<b>v' + c.v + '</b> — ' + c.d }));
    });
    clBody.appendChild(clList);
    changelog.appendChild(clBody);
    body.appendChild(changelog);
  }

  /* Sıfırlama onayı: onay düğmesi 3 saniye devre dışı kalır ve geri sayım
     gösterir; bu süre boyunca ekranın dışına tıklamak veya Escape'e basmak
     app.js'teki closeResetModal üzerinden cancelResetTimers'ı çağırıp geri
     sayımı temizler. */
  function openResetConfirm(triggerEl) {
    var modal = document.getElementById('reset-confirm-modal');
    var card = document.getElementById('reset-confirm-card');
    if (!modal || !card) return;
    U.clear(card);

    var icoHtml = KI.icons.html('trash');
    var confirmBtn = U.el('button', { class: 'btn btn--sm', type: 'button', disabled: true });
    var cancelBtn = U.el('button', { class: 'btn btn--sm btn--ghost', type: 'button', text: 'Vazgeç' });

    var remaining = 3;
    function paintConfirm() {
      confirmBtn.innerHTML = icoHtml + ' ' + (remaining > 0 ? ('Bekle… ' + remaining + ' sn') : 'Evet, hepsini sil');
    }
    paintConfirm();
    var tick = setInterval(function () {
      remaining--;
      if (remaining <= 0) {
        clearInterval(tick);
        confirmBtn.disabled = false;
        confirmBtn.classList.add('btn--primary');
      }
      paintConfirm();
    }, 1000);

    function cleanup() { clearInterval(tick); }
    KI.settings.cancelResetTimers = cleanup;

    function close() {
      cleanup();
      KI.util.closeModal(modal);
      KI.audio.play('close');
    }
    cancelBtn.addEventListener('click', close);
    confirmBtn.addEventListener('click', function () {
      if (confirmBtn.disabled) return;
      cleanup();
      KI.util.closeModal(modal);
      KI.store.reset();
      KI.audio.play('wrong');
      U.toast('Her şey sıfırlandı');
      build();
      KI.router.refresh();
    });

    card.appendChild(U.el('div', { class: 'modal__head' }, [U.el('h2', { text: 'Emin misin?' })]));
    card.appendChild(U.el('p', { class: 'soft', style: 'font-size:.92rem',
      text: 'İşaretlenen zamanlar, test sonuçların, kelime defterin ve Oyun Modu ilerlemen (canlar, başarımlar, harita) kalıcı olarak silinecek. Bu işlem geri alınamaz.' }));
    card.appendChild(U.el('div', { class: 'row', style: 'margin-top:16px;justify-content:flex-end' }, [cancelBtn, confirmBtn]));

    KI.util.openModal(modal, triggerEl);
    KI.audio.play('open');
  }

  KI.settings = { build: build };
})(window.KI);
