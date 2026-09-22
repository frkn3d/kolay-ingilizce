/* ============================================================
   Kolay İngilizce — settings.js
   Ayarlar penceresi: ses, tema, okuma hızı, telaffuz sesi.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

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

    /* --- görünüm --- */
    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:16px', text: 'Görünüm' }));
    var themeRow = U.el('div', { class: 'row' });
    [['light', '☀︎ Açık'], ['dark', '☾ Koyu']].forEach(function (th) {
      var b = U.el('button', {
        class: 'btn btn--sm' + (KI.store.get('theme') === th[0] ? ' btn--primary' : ''),
        type: 'button', text: th[1]
      });
      b.addEventListener('click', function () {
        KI.setTheme(th[0]);
        KI.audio.play('toggle');
        build();
      });
      themeRow.appendChild(b);
    });
    body.appendChild(themeRow);

    /* --- ilerleme --- */
    body.appendChild(U.el('p', { class: 'eyebrow', style: 'margin-top:18px', text: 'İlerleme' }));
    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.88rem',
      text: KI.store.learnedCount() + ' zaman öğrenildi olarak işaretli, defterinde ' + KI.store.words().length + ' kelime var.' }));
    var reset = U.el('button', { class: 'btn btn--sm', type: 'button', html: '🗑 Tüm ilerlemeyi sıfırla' });
    reset.addEventListener('click', function () {
      if (!window.confirm('İşaretlenen zamanlar, test sonuçları ve kelime defteri silinecek. Devam edilsin mi?')) return;
      KI.store.reset();
      KI.audio.play('wrong');
      U.toast('Her şey sıfırlandı');
      build();
      KI.router.refresh();
    });
    body.appendChild(reset);

    body.appendChild(U.el('p', { class: 'soft', style: 'font-size:.78rem;margin-top:18px;border-top:1px dashed var(--line);padding-top:10px',
      html: 'Kolay İngilizce · açık kaynak · veriler yalnızca bu cihazda saklanır.' }));
  }

  KI.settings = { build: build };
})(window.KI);
