# Kolay İngilizce — Zamanlarla Öğren

İngilizcenin temelini **zaman çizgisi** üzerinden anlatan, tamamen tarayıcıda çalışan ücretsiz bir öğrenme uygulaması. Her cümle, zaman çizgisinde tam olarak nereye düştüğü gösterilerek öğretilir. Bütün örnekler **Türk ve Osmanlı kültüründen** seçilmiştir: cami avlusu, iftar topu, Hereke halısı, ebru ustası, Mimar Sinan, Kapalıçarşı…

> Tek soru: **Bu iş zamanın neresinde duruyor?** Uygulamanın tamamı bu sorunun üstüne kuruludur.

## Ne yapar?

| Özellik | Açıklama |
|---|---|
| 🗺️ **Zaman haritası** | 12 zamanın hepsi 3 sütun (geçmiş / şimdi / gelecek) × 4 satır (basit / süren / tamamlanmış / tamamlanmış süren) hâlinde tek ekranda. Her kartta o zamanın küçük çizgi şeması var. |
| 📈 **Zaman çizgisi çizimi** | Her zaman için ayrı SVG çizgi: iş nokta mı, bant mı, bugüne uzanan ok mu — gözle görülür. |
| 🧠 **Mantık anlatımı** | Kural ezberi yerine "neden bu zaman" açıklaması, Türkçe karşılığıyla (-di, -yor, -mişti…). |
| 🧮 **Formül kartı** | Olumlu / olumsuz / soru kalıpları ve "altın kural" uyarısı. |
| 💬 **56 örnek cümle** | Kültürümüzden, kısa ve gündelik cümleler. |
| 🇹🇷 **Çevir düğmesi** | Cümlenin Türkçesi istendiğinde açılır; altında o cümlenin inceliğini anlatan bir not çıkar. |
| 👆 **Tıklanabilir kelimeler** | Cümledeki her kelimeye dokunulur; anlamı, türü ve çekimi (ör. *built → build fiilinin 2. hâli*) alttan açılan kartta görünür. |
| 🔊 **Sesli okuma** | Cihazın kendi konuşma motoruyla (Web Speech API). **Hiçbir internet servisi, hiçbir API anahtarı kullanılmaz.** Normal ve yavaş okuma, ayarlanabilir hız ve ses seçimi. |
| ⭐ **Kelime defteri** | Beğenilen kelimeler kaydedilir, topluca dinlenir. |
| 🎯 **4 alıştırma modu** | Cümleden zamanı bul · Çizgiden zamanı bul · Boşluğu doldur · Karışık. Her cevaptan sonra doğrusu ve nedeni gösterilir. |
| 🧱 **Temeller bölümü** | Cümle sırası, zamirler, am/is/are, have/has, a/an/the, çoğul, ekler, 54 düzensiz fiil tablosu, soru kelimeleri, will–going to farkı. |
| 🎨 **Retro yeşil tasarım** | Parşömen zemin, kalın çerçeveler, sert gölgeler; açık ve koyu tema. |
| 🔔 **Kısık ses efektleri** | Tüm tıklama ve doğru/yanlış sesleri tarayıcıda sentezlenir (Web Audio) — tek bir ses dosyası bile indirilmez. |
| 📱 **Mobil uyumlu** | Telefonda alt sekme çubuğu, masaüstünde üst menü. Ana ekrana eklenebilir (PWA manifest). |

Öğrenilen zamanlar, test sonuçları ve kelime defteri yalnızca **kendi cihazınızda** (localStorage) saklanır; hiçbir veri dışarı gönderilmez.

## Nasıl çalıştırılır?

**En kolayı:** GitHub Pages bağlantısını açmak (aşağıdaki *Yayına alma* bölümüne bakın).

**Bilgisayarda yerelden:**

```bash
git clone https://github.com/<kullanıcı-adı>/kolay-ingilizce.git
cd kolay-ingilizce
```

`index.html` dosyasına çift tıklamak yeterlidir — kurulum, derleme, paket gerektirmez. Dilerseniz küçük bir sunucuyla da açabilirsiniz:

```bash
python -m http.server 8080     # sonra: http://localhost:8080
```

**Telefonda:** Yayındaki adresi açın, tarayıcı menüsünden *Ana ekrana ekle* deyin; uygulama gibi tam ekran açılır ve çevrimdışı da çalışır.

## Sesli okuma hakkında

Okuma, cihazın işletim sistemindeki İngilizce sesi kullanır; internet bağlantısı ya da ücretli servis gerekmez.

- **Windows:** Ayarlar → Saat ve Dil → Konuşma → *Ses ekle* ile İngilizce ses yüklenir.
- **macOS / iOS:** Sistem Ayarları → Erişilebilirlik → Sözlü İçerik → *Sistem sesi*.
- **Android:** Ayarlar → Erişilebilirlik → Metin okuma çıkışı → Google Metin Okuma → İngilizce dil paketi.

Cihazda birden çok İngilizce ses varsa ⚙︎ **Ayarlar** penceresinden seçilebilir, okuma hızı 0,40× – 1,20× arasında ayarlanabilir.

## Proje düzeni

Tek dosyalık bir HTML yığını değil; her parça kendi dosyasında:

```
index.html                 uygulama iskeleti
manifest.webmanifest       ana ekrana ekleme bilgileri
css/
  base.css                 renk paleti, tipografi, koyu tema
  components.css           düğme, kart, çizgi, test, kelime kartı
  layout.css               üst çubuk, sekmeler, duyarlı yerleşim
js/
  core/
    utils.js               küçük yardımcılar (DOM, karıştırma, toast)
    store.js               localStorage: ayarlar, ilerleme, kelime defteri
    audio.js               Web Audio ile sentezlenen ses efektleri
    speech.js              cihaz üstü sesli okuma (Web Speech API)
  data/
    tenses.js              12 zaman: mantık, formül, çizgi, örnek, hata, test
    glossary.js            ~570 kelimelik sözlük + 54 düzensiz fiil + çekim çözücü
    basics.js              temel gramer bölümleri
  ui/
    timeline.js            zaman çizgisini SVG olarak çizer
    sentence.js            tıklanabilir cümle, çevir düğmesi, kelime kartı
    home.js                zaman haritası
    tense.js               tek zamanın sayfası
    practice.js            alıştırma motoru ve modları
    basics.js              temeller sayfası
    dictionary.js          sözlük ve kelime defteri
    settings.js            ayarlar penceresi
  app.js                   hash tabanlı yönlendirici ve başlatma
assets/                    SVG simgeler
```

Derleme adımı, paket yöneticisi ve dış bağımlılık **yoktur**. Dosyalar tarayıcıya doğrudan `<script>` ile yüklenir; bu sayede `index.html` çift tıklanarak da (file:// ile) çalışır.

### Yeni içerik eklemek

- **Örnek cümle:** `js/data/tenses.js` içinde ilgili zamanın `examples` dizisine `{ en, tr, key, note }` ekleyin. `key`, yeşil vurgulanacak yapı kelimeleridir.
- **Kelime:** `js/data/glossary.js` içindeki uygun `add([...])` bloğuna `'ingilizce|türkçe|tür|not'` satırı ekleyin. Çekimli hâller (*-s, -ing, -ed*, iyelik, kısaltmalar) kendiliğinden çözülür.
- **Soru:** aynı zamanın `quiz` dizisine `{ q, options, answer, why }` ekleyin; karışık moda kendiliğinden karışır.

## Yayına alma (GitHub Pages)

1. Depoyu GitHub'a gönderin.
2. Depo sayfasında **Settings → Pages** bölümüne girin.
3. *Source* olarak **Deploy from a branch**, dal olarak **main**, klasör olarak **/ (root)** seçin.
4. Bir iki dakika içinde `https://<kullanıcı-adı>.github.io/kolay-ingilizce/` adresi yayına girer.

Depoda bulunan `.nojekyll` dosyası, Pages'in dosyaları olduğu gibi yayımlamasını sağlar.

## Yol haritası

- [ ] Dinleyip yazma (dikte) alıştırması
- [ ] Zamanları karşılaştıran ikili sayfalar (*Past Simple ↔ Present Perfect*)
- [ ] Günlük tekrar (aralıklı tekrar) ile kelime defteri
- [ ] Android/iOS paketi (Capacitor ile aynı kaynak koddan)

## Lisans

MIT — bkz. [LICENSE](LICENSE). Serbestçe kullanılabilir, çoğaltılabilir, sınıfta dağıtılabilir.
