/* ============================================================
   Gramer Atlası - help.js
   Giriş ekranındaki "Nasıl Kullanılır" rehberi: önce Oyun Modu'nu
   özetler, sonra kolaydan zora nasıl ilerleneceğini basitçe anlatır,
   en sonda uygulamadaki tüm bölümleri tek tek listeler.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  function sectionTitle(num, text) {
    return U.el('h2', { class: 'section__title' }, [
      U.el('span', { class: 'num', text: num }),
      document.createTextNode(text)
    ]);
  }

  function render() {
    var frag = document.createDocumentFragment();

    frag.appendChild(U.el('a', { class: 'crumb', href: '#/', 'data-sfx': 'back', text: '← Ana sayfa' }));
    frag.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('p', { class: 'eyebrow', text: 'Rehber' }),
      U.el('h1', { text: 'Nasıl Kullanılır' }),
      U.el('p', { style: 'font-size:.84rem', text: 'İki dakikada uygulamanın mantığını ve tüm bölümlerini öğren.' })
    ]));

    /* 1) Oyun Modu özeti */
    var s1 = U.el('section', { class: 'section' });
    s1.appendChild(sectionTitle('1', 'Önce Oyun Modu\'nu tanıyalım'));
    s1.appendChild(U.el('div', { class: 'card' }, [
      U.el('p', { style: 'margin-top:0', text: 'Oyun Modu, İngilizceyi bir "zaman haritası" üzerindeki küçük duraklarla öğretir. Her durak kısa bir sınav; doğru cevapladıkça sıradaki durak açılır.' }),
      U.el('ul', { class: 'disclose__list', style: 'margin-top:10px' }, [
        U.el('li', { html: '<b>Canlar:</b> Her gün 7 can verilir; yanlış cevapta bir can gider, kısa bir video izleyerek +3 can kazanılabilir.' }),
        U.el('li', { html: '<b>İleri Sar:</b> Haritadaki bazı duraklar bir "checkpoint" sınavı; onu geçince o noktaya kadarki her şey birden açılır.' }),
        U.el('li', { html: '<b>Kombo ve konfeti:</b> Üst üste doğru cevaplar konfeti ve özel bir kutlama sesi kazandırır.' }),
        U.el('li', { html: '<b>Başlangıç → Orta → İleri:</b> Harita üç seviyeye ayrılır; bir seviye bitince sıradaki açılır.' })
      ])
    ]));
    frag.appendChild(s1);

    /* 2) Kolaydan zora nasıl ilerlenir */
    var s2 = U.el('section', { class: 'section' });
    s2.appendChild(sectionTitle('2', 'Kolaydan zora nasıl ilerlersin'));
    var ol = U.el('ol', { class: 'disclose__list' });
    [
      ['Temeller\'den başla', 'Zaman kurmak için gereken en küçük bilgi seti burada: özne, yardımcı fiil, olumlu/olumsuz/soru mantığı.'],
      ['Zaman Haritası\'nda ilerle', 'Eğitim Modu\'ndaki 12 zaman Başlangıç, Orta ve İleri olarak gruplanır; sırayla çalışmak en hızlı yoldur.'],
      ['Alıştırma ile pekiştir', 'Karışık sorular, boşluk doldurma, cümle kurma ve artık Mini Test de var: zorluğunu seç, hızlıca kendini sına.'],
      ['Sözlük ve Hikayelerle bağlam kur', 'Kelimeleri hikayeler içinde, doğal cümlelerde gör; Zaman Yolculuğu\'nda aynı cümlenin 12 zamandaki hâlini karşılaştır.'],
      ['Düzenli tekrar et', 'Kelime defterine eklediklerin aralıklı tekrarla geri gelir; günlük seri ve İstatistikler ilerlemeni gösterir.']
    ].forEach(function (step) {
      ol.appendChild(U.el('li', { html: '<b>' + U.esc(step[0]) + ':</b> ' + U.esc(step[1]) }));
    });
    s2.appendChild(U.el('div', { class: 'card' }, [ol]));
    frag.appendChild(s2);

    /* 3) Uygulamadaki her şey */
    var s3 = U.el('section', { class: 'section' });
    s3.appendChild(sectionTitle('3', 'Uygulamadaki her şey'));
    var grid = U.el('div', { class: 'stack' });
    [
      ['map', 'Harita (Eğitim Modu)', '12 zamanın tamamı; bir karta dokunup anlatımı, örnekleri ve mini sınavı gör.'],
      ['wall', 'Temeller', 'Özne, yardımcı fiil, düzensiz fiiller gibi zaman kurmadan önce bilinmesi gerekenler.'],
      ['target', 'Alıştırma', 'Karışık, Zorlandıklarım, Bugünkü Tekrar, Cümleden/Çizgiden zaman bulma, Boşluk doldurma, Cümle kurma, Dinle-yaz, Kelime bilgisi, Düzensiz fiiller ve Mini Test - bir arada 11 farklı çalışma modu.'],
      ['book', 'Sözlük', 'Kelimeler (ara, dinle, defterine ekle), Hikayeler (halk hikayeleri) ve Zaman Yolculuğu (tek cümle, 12 zaman).'],
      ['flag', 'Oyun Modu', 'Harita üzerinde kısa sınavlarla ilerleme; canlar, başarımlar, konfeti.'],
      ['chart', 'İstatistikler', 'Ziyaret, seri, öğrenilen zaman, Oyun Modu ilerlemesi ve daha fazlasını tek panoda gör.'],
      ['trophy', 'Başarımlar', 'Üst çubuktaki kupa simgesinden açılır; ilerledikçe yeni rozetler kazanılır.'],
      ['sliders', 'Ayarlar', 'Tema, yazı boyutu, ses/titreşim, okuma hızı, hareketleri azaltma ve verini yedekleme/geri yükleme buradan.']
    ].forEach(function (row) {
      grid.appendChild(U.el('div', { class: 'card', style: 'display:flex;gap:12px;align-items:flex-start' }, [
        U.el('span', { style: 'flex:0 0 auto;color:var(--accent);margin-top:.15em', html: KI.icons.html(row[0]) }),
        U.el('div', { style: 'min-width:0' }, [
          U.el('b', { text: row[1] }),
          U.el('p', { class: 'soft', style: 'margin:.2em 0 0;font-size:.86rem', text: row[2] })
        ])
      ]));
    });
    s3.appendChild(grid);
    frag.appendChild(s3);

    frag.appendChild(U.el('div', { class: 'row', style: 'margin-top:18px;justify-content:center' }, [
      U.el('a', { class: 'btn btn--primary', href: '#/', 'data-sfx': 'nav', text: 'Hazırım, başlayalım →' })
    ]));

    return frag;
  }

  KI.viewHelp = { render: render };
})(window.KI);
