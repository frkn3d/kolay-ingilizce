/* ============================================================
   Kolay İngilizce — settings.js
   Ayarlar penceresi: ses, tema, okuma hızı, telaffuz sesi.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  var APP_VERSION = '0.3';
  var CHANGELOG = [
    { v: '0.3', d: 'Emoji kaldırıldı, tüm ikonlar elle çizilmiş SVG’ye taşındı. Sözlük 3000’ün üzerine çıktı, alıştırma sayısı 327’ye ulaştı. Mobil zaman çizgileri yeniden tasarlandı (renk kontrastı, ince çizgiler, çakışan işaretlerin ayrılması). Aralıklı tekrar (Leitner kutusu) ve "Bugünkü Tekrar" modu, modal fiiller ve "used to" bölümleri, 6. karşılaştırma sayfası, sıklığa göre ayrılmış düzensiz fiiller, gerçek çevrimdışı çalışma. Ana sayfa sadeleştirildi: tek okla zaman şeridi, kaydırdıkça beliren animasyonlar.' },
    { v: '0.2', d: 'Sözlük B2 seviyesine genişletildi, alıştırma sayısı artırıldı. Karanlık modda okunabilirlik düzeltmeleri (baştan başla butonu, seçili cevap kontrastı). Dede Korkut ve Keloğlan gibi halk hikâyelerinden, günlük hayattan yeni örnek cümleler.' },
    { v: '0.1', d: 'İlk sürüm: 12 zamanın tam haritası ve zaman çizgisi görselleştirmesi, Türk ve Osmanlı kültüründen örnek cümleler, tıklanabilir sözlük, cihaz üstü sesli okuma, kısık ses efektleri.' }
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
    var reset = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('trash') + ' Tüm ilerlemeyi sıfırla' });
    reset.addEventListener('click', function () {
      if (!window.confirm('İşaretlenen zamanlar, test sonuçları ve kelime defteri silinecek. Devam edilsin mi?')) return;
      KI.store.reset();
      KI.audio.play('wrong');
      U.toast('Her şey sıfırlandı');
      build();
      KI.router.refresh();
    });
    body.appendChild(reset);

    /* --- hakkında --- */
    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:18px;border-top:1px dashed var(--line);padding-top:14px', text: 'Hakkında' }));
    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.88rem',
      text: 'Kolay İngilizce · Zaman çizgisiyle gramer · ' + KI.tenses.list.length + ' zaman · ' + KI.glossary.size() + ' kelime.' }));
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

  KI.settings = { build: build };
})(window.KI);
