# Yapılacak Tavsiyeler

Bu not, uygulamanın mevcut durumuna göre önerilen geliştirme fikirlerini içerir.

## En Etkili Geliştirmeler

1. **Kişiselleştirilmiş tekrar sistemi**

   Uygulamada ilerleme ve test sonuçları var, ancak kullanıcıya hangi konuyu ne zaman tekrar etmesi gerektiğini söyleyen bir sistem yok. Kelime defteri ve yanlış yapılan sorular için aralıklı tekrar eklenirse öğrenme etkisi ciddi şekilde artar.

2. **Yanlışlardan öğrenme ekranı**

   Kullanıcı testte yanlış yapınca açıklama görüyor, fakat geçmiş yanlışlarını sonradan topluca çalışamıyor. “Zorlandıklarım” benzeri bir bölüm eklenebilir:

   - yanlış yapılan zamanlar
   - karıştırılan iki zaman
   - yanlış bilinen kelimeler
   - tekrar çöz butonu

3. **Zaman karşılaştırma sayfaları**

   Türk öğrenciler için özellikle şu karşılaştırmalar çok faydalı olur:

   - Past Simple ↔ Present Perfect
   - Present Perfect ↔ Present Perfect Continuous
   - will ↔ going to
   - Past Continuous ↔ Past Simple
   - Future Perfect ↔ Future Perfect Continuous

4. **Dikte / dinleyip yazma modu**

   Mevcut sesli okuma altyapısı kullanılarak yeni bir alıştırma modu eklenebilir. Cümle okunur, kullanıcı yazar, ardından doğru cümleyle farklar gösterilir. Bu mod dinleme, yazım ve grameri birlikte çalıştırır.

5. **Seviye yolu: A1 → A2 → B1**

   İçerik güçlü, fakat yeni başlayan kullanıcı için nereden başlanacağı daha net gösterilebilir. Önerilen bir öğrenme yolu eklenebilir:

   - Başlangıç: Temeller, Present Simple, Present Continuous
   - Orta: geçmiş zamanlar ve perfect yapılar
   - İleri: future perfect, perfect continuous, karma pratik

## İçerik Önerileri

- Her zaman için “Türkçeden gelen tipik hata” bölümü daha da büyütülebilir.
- Kültürel örnekler korunup modern günlük bağlamlar eklenebilir: WhatsApp mesajı, online sipariş, okul, iş görüşmesi, navigasyon, banka, hastane.
- Sözlükte kelimelere örnek cümle eklenebilir.
- Düzensiz fiiller “çok kullanılanlar”, “orta seviye”, “nadiren kullanılanlar” diye ayrılabilir.

## Görsellik Önerileri

- Retro yeşil/parşömen kimliği korunarak daha fazla öğrenme materyali hissi verilebilir: küçük defter çizgileri, mini etiketler, konu rozetleri, seviye işaretleri.
- Zaman çizgileri daha büyük ve etkileşimli olabilir. Kullanıcı çizgideki nokta veya bant üzerine dokununca kısa açıklamalar çıkabilir.
- Haritadaki 12 zaman için başlangıç görünümü eklenebilir. Önce temel zamanlar gösterilir, ileri zamanlar daha soluk veya kilitli görünebilir.
- Emoji kullanımı daha tutarlı hale getirilebilir. Ya mevcut sevimli emoji dili bilinçli şekilde korunur ya da tek stil ikon sistemine geçilir.

## UI / Kullanılabilirlik Önerileri

- Alıştırma modlarına oturum ayarı eklenebilir: 5 soru, 10 soru, 20 soru, sadece yanlışlarım, sadece öğrendiğim zamanlar.
- Test sonunda sadece skor değil, “şimdi ne yapmalıyım?” önerisi gösterilebilir.
- Sözlükte filtreler eklenebilir: isim, fiil, sıfat, düzensiz fiil, kelime defterim, A1/A2/B1.
- Cümle kurma modunda yanlış cevapta kelime kelime fark gösterilebilir.
- Ayarlar bölümüne daha büyük yazı, animasyonları azalt, sadece İngilizce göster / Türkçeyi gizle gibi seçenekler eklenebilir.

## Öncelik Sırası

1. Yanlışlardan öğrenme + aralıklı tekrar
2. Zaman karşılaştırma sayfaları
3. Dikte modu
4. Seviye yolu / önerilen rota
5. Sözlük filtreleri ve örnek cümleler

## Kısa Özet

Uygulamanın temeli güçlü. En büyük sıçrama, uygulamayı sadece konu anlatan bir yapıdan çıkarıp kullanıcının yanlışlarını takip eden, tekrar ettiren ve öğrenme yolunu kişiselleştiren bir öğrenme aracına dönüştürmek olur.
