# Kolay İngilizce — Zamanlarla Öğren

İngilizcenin temelini **zaman çizgisi** üzerinden anlatan, tamamen tarayıcıda çalışan ücretsiz bir öğrenme uygulaması. Her cümle, zaman çizgisinde tam olarak nereye düştüğü gösterilerek öğretilir.

Örnekler **Türkiye’deki günlük hayattan** seçilmiştir: zeytin hasadı, çatıda salça, Diyarbakır karpuzu, dolmuş beklemek, Fethiye’nin turkuaz denizi, kıraathanede tavla, bayram şekeri, Kapadokya balonları… Aralarında Dede Korkut, Keloğlan, Nasreddin Hoca ve Karagöz-Hacivat’tan birkaç cümle ile Mimar Sinan, Kapalıçarşı gibi kültür ögeleri de var.

> Tek soru: **Bu iş zamanın neresinde duruyor?** Uygulamanın tamamı bu sorunun üstüne kuruludur.

## Ne yapar?

| Özellik | Açıklama |
|---|---|
| 🗺️ **Zaman haritası** | 12 zamanın hepsi 3 sütun (geçmiş / şimdi / gelecek) × 4 satır (basit / süren / tamamlanmış / tamamlanmış süren) hâlinde tek ekranda. Her kartta o zamanın küçük çizgi şeması var. |
| 📈 **Zaman çizgisi çizimi** | Her zaman için ayrı SVG çizgi: iş nokta mı, bant mı, bugüne uzanan ok mu — gözle görülür. |
| 🧠 **Mantık anlatımı** | Kural ezberi yerine "neden bu zaman" açıklaması, Türkçe karşılığıyla (-di, -yor, -mişti…). |
| 🧮 **Formül kartı** | Olumlu / olumsuz / soru kalıpları ve "altın kural" uyarısı. |
| 💬 **148 örnek cümle + 327 soru** | Günlük hayattan kısa cümleler; her zaman için 8-16 örnek ve elle yazılmış 20-23 alıştırma sorusu (12 zaman + 6 karşılaştırma sayfası). |
| 🇹🇷 **Çevir düğmesi** | Cümlenin Türkçesi istendiğinde açılır; altında o cümlenin inceliğini anlatan bir not çıkar. |
| 👆 **Tıklanabilir kelimeler** | Cümledeki her kelimeye dokunulur; anlamı, türü ve çekimi (ör. *built → build fiilinin 2. hâli*) alttan açılan kartta görünür. |
| 📚 **3.000+ kelimelik sözlük** | A1’den B2’ye: aile, duygular, ev, yemek, şehir, doğa, sağlık, iş, teknoloji, hukuk, bilim, sanat, spor, din, askeriye ve daha fazlası; akademik sıfat/zarf/fiiller; bağlaçlar (*however, although, therefore*); 50+ öbek fiil (*give up, look after*); deyimler; 99 düzensiz fiil. |
| 🔊 **Sesli okuma** | Cihazın kendi konuşma motoruyla (Web Speech API). **Hiçbir internet servisi, hiçbir API anahtarı kullanılmaz.** Normal ve yavaş okuma, ayarlanabilir hız ve ses seçimi. |
| ⭐ **Kelime defteri** | Beğenilen kelimeler kaydedilir, topluca dinlenir. Sözlük türe göre süzülebilir (isim, fiil, sıfat, zarf, öbek fiil, düzensiz fiil, defterim) ve her kelime kartında o kelimenin geçtiği bir örnek cümle gösterilir. |
| 🎯 **9 alıştırma modu** | Karışık · Zorlandıklarım · Cümleden zamanı bul · Çizgiden zamanı bul · Boşluğu doldur · Cümleyi kur · Dinle ve yaz · Kelime bilgisi · Düzensiz fiiller. Tur uzunluğu 5/10/20 soru seçilebilir. |
| 🩹 **Zorlandıklarım** | Yanlış yaptığın sorular ve karıştırdığın kelimeler kaydedilir; ayrı bir modda yalnız onlar sorulur. Doğru bildiğinde listeden düşer. |
| 🎧 **Dinle ve yaz (dikte)** | Cümle cihazın sesiyle okunur, sen yazarsın; sonra kelime kelime karşılaştırılır. |
| ↔ **Karışan zamanlar** | Türkçe konuşanların en çok karıştırdığı 6 çift yan yana: iki zaman çizgisi, ne zaman hangisi tablosu, aynı durumun iki cümlesi ve ayırt etme testi. |
| 🧩 **Cümle kurma** | Türkçesi verilir, kelimelere dokunarak İngilizce cümleyi sen dizersin; yanlışsa doğru sıra gösterilir ve okunur. |
| ♿ **Okunaklılık** | Açık ve koyu temanın tamamı WCAG kontrast ölçümünden geçirildi; her metin en az 4.5:1 oranında. Ayarlardan yazı boyutu ve animasyon azaltma seçilebilir. |
| 🧱 **Temeller bölümü** | Cümle sırası, zamirler, am/is/are, have/has, a/an/the, çoğul, ekler, 54 düzensiz fiil tablosu, soru kelimeleri, will–going to farkı. |
| 🎨 **Retro yeşil tasarım** | Parşömen zemin, kalın çerçeveler, sert gölgeler; açık ve koyu tema. |
| 🔔 **Kısık ses efektleri** | Tüm tıklama ve doğru/yanlış sesleri tarayıcıda sentezlenir (Web Audio) — tek bir ses dosyası bile indirilmez. |
| 📱 **Mobil uyumlu** | Telefonda alt sekme çubuğu, masaüstünde üst menü. Ana ekrana eklenebilir (PWA manifest). |
| ✏️ **Emojisiz, tek stil ikonlar** | Uygulamada hiçbir platform emojisi yok; tüm ikonlar `js/core/icons.js` içinde elle çizilmiş, tema renklerine uyan SVG'lerdir. |
| 📡 **Gerçek çevrimdışı çalışma** | `sw.js` service worker'ı bir kez ziyaret edildikten sonra tüm dosyaları önbelleğe alır; internetsizken (uçak, metro) uygulama tam çalışır durumda kalır. |

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
sw.js                      service worker: dosyaları önbelleğe alır, çevrimdışı çalıştırır
css/
  base.css                 renk paleti, tipografi, koyu tema
  components.css           düğme, kart, çizgi, test, kelime kartı
  layout.css               üst çubuk, sekmeler, duyarlı yerleşim
js/
  core/
    utils.js               küçük yardımcılar (DOM, karıştırma, toast)
    icons.js               emojisiz tek stil SVG ikon kütüphanesi
    store.js               localStorage: ayarlar, ilerleme, kelime defteri
    audio.js               Web Audio ile sentezlenen ses efektleri
    speech.js              cihaz üstü sesli okuma (Web Speech API)
  data/
    tenses.js              12 zaman: mantık, formül, çizgi, örnek, hata, test
    examples-extra.js      günlük hayattan ek örnek cümleler
    examples-extra-2.js    ikinci örnek dalgası (148 cümleye tamamlar)
    compare.js             karışan zaman çiftlerinin karşılaştırması
    glossary.js            sözlük çekirdeği + çekim çözücü (-s, -ing, -ed, iyelik)
    vocabulary.js          A1-B2 kelime dağarcığı, temalara ayrılmış
    vocabulary-b2.js       B2 seviyesine çıkaran ek kelime dalgası
    vocabulary-b2-plus.js  3000 kelimeyi tamamlayan ikinci dalga
    exercises.js           zamanlara ait ek alıştırma soruları
    exercises-2.js         ikinci soru dalgası (317 soruya tamamlar)
    basics.js              temel gramer bölümleri
  ui/
    timeline.js            zaman çizgisini SVG olarak çizer
    compare.js             karşılaştırma sayfası
    sentence.js            tıklanabilir cümle, çevir düğmesi, kelime kartı
    home.js                zaman haritası
    tense.js               tek zamanın sayfası
    practice.js            alıştırma motoru ve modları
    basics.js              temeller sayfası
    dictionary.js          sözlük ve kelime defteri
    settings.js            ayarlar penceresi
  app.js                   hash tabanlı yönlendirici ve başlatma
assets/                    SVG simgeler
tests/                     içerik doğrulama ve duman testi (bkz. tests/README.md)
```

Derleme adımı, paket yöneticisi ve dış bağımlılık **yoktur**. Dosyalar tarayıcıya doğrudan `<script>` ile yüklenir; bu sayede `index.html` çift tıklanarak da (file:// ile) çalışır.

### Yeni içerik eklemek

- **Örnek cümle:** `js/data/examples-extra.js` içinde ilgili zamanın dizisine `{ en, tr, key, note }` ekleyin. `key`, yeşil vurgulanacak yapı kelimeleridir. Cümledeki her kelimenin sözlükte bulunmasına dikkat edin.
- **Kelime:** `js/data/vocabulary.js` (veya `vocabulary-b2.js` / `vocabulary-b2-plus.js`) içindeki uygun temaya `'ingilizce|türkçe|tür|not'` satırı ekleyin. Çekimli hâller (*-s, -ing, -ed*, iyelik, kısaltmalar) kendiliğinden çözülür. Düzensiz fiil için aynı dosyanın sonundaki `addIrregulars` listesine `'V1|V2|V3|Türkçe'` yazın.
- **Soru:** `js/data/exercises.js` içinde ilgili zamanın dizisine `{ q, options, answer, why }` ekleyin; hem o zamanın mini testine hem karışık moda kendiliğinden girer.
- **İkon:** `js/core/icons.js` içindeki `SHAPES` nesnesine yeni bir anahtar ekleyin (24×24 viewBox, `currentColor`); sonra `KI.icons.html('ad')` ile her yerde kullanın. Emoji kullanılmaz.

## Yayına alma (GitHub Pages)

1. Depoyu GitHub'a gönderin.
2. Depo sayfasında **Settings → Pages** bölümüne girin.
3. *Source* olarak **Deploy from a branch**, dal olarak **main**, klasör olarak **/ (root)** seçin.
4. Bir iki dakika içinde `https://<kullanıcı-adı>.github.io/kolay-ingilizce/` adresi yayına girer.

Depoda bulunan `.nojekyll` dosyası, Pages'in dosyaları olduğu gibi yayımlamasını sağlar.

## Yol haritası

- [x] Dinleyip yazma (dikte) alıştırması
- [x] Zamanları karşılaştıran ikili sayfalar (*Past Simple ↔ Present Perfect*)
- [ ] Günlük tekrar (aralıklı tekrar) ile kelime defteri
- [ ] Android/iOS paketi (Capacitor ile aynı kaynak koddan)

## Lisans

MIT — bkz. [LICENSE](LICENSE). Serbestçe kullanılabilir, çoğaltılabilir, sınıfta dağıtılabilir.

---

Bu bir **Logspace** uygulamasıdır.
