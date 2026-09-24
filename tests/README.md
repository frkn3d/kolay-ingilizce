# Testler

Uygulamanın kendisi hiçbir paket bağımlılığı gerektirmez; bu klasördeki
testler yalnızca **geliştirme sırasında** elle çalıştırılır, sitede yer almaz.

## İçerik doğrulama (bağımlılık gerektirmez)

```bash
node tests/validate-content.js
```

Her alıştırma sorusunun doğru cevap indeksinin sınırlar içinde olduğunu,
her örnek cümledeki her kelimenin sözlükte bulunduğunu ve temel sayaçları
(kelime, örnek, soru sayısı) kontrol eder. Yeni kelime/soru/örnek eklerken
bunu çalıştırmak, yayınlamadan önce eksik bir sözlük kaydını ya da yanlış
bir `answer` indeksini yakalar.

## Uçtan uca duman testi (jsdom gerekir)

```bash
npm install --no-save jsdom
node tests/smoke.js
```

`index.html`'i gerçek bir tarayıcı gibi dosyadan yükler, tüm sekmeleri ve
9 alıştırma modunu gezer, konsol hatası ya da boş kalan bir ikon olup
olmadığını raporlar. `npm install --no-save` paketi `package.json`'a
yazmadan geçici olarak indirir; proje yine bağımlılıksız kalır.

## Oyun Modu mantık testleri (jsdom gerekir)

```bash
npm install --no-save jsdom
node tests/unit-game.js
```

Haritanın kilit/açma mantığını (`isNodeUnlocked`, checkpoint geçişi,
seviye kilidi) render edilen DOM üzerinden sınar. Bu proje üzerinde daha
önce gerçekten yaşanmış 4 hatayı regresyona karşı kilitler — bkz. dosyanın
başındaki yorum. Oyun Modu'nun kilit/açma mantığına dokunan her
değişiklikten sonra çalıştırılmalı.
