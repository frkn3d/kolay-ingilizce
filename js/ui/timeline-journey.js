/* ============================================================
   Gramer Atlası — timeline-journey.js
   "Zaman Yolculuğu": tek bir cümlenin 12 zamandaki hâli, pan/zoom
   yapılabilen tek bir uzun zaman çizgisi üzerinde (bkz.
   js/data/timeline-journey.js). Üçüncü parti bir kütüphane
   kullanılmaz — projenin "bağımlılıksız" ilkesiyle tutarlı olarak
   Pointer Events ile elle yazılmış basit bir pan/zoom denetleyicisi.
   ============================================================ */
(function (KI) {
  'use strict';
  var U = KI.util;

  /* "Dünya" koordinatları: 12 öğe + ŞİMDİ çizgisi bu sabit piksel
     ızgarasına yerleştirilir, sonra tamamı transform: translate/scale
     ile taşınır/yakınlaştırılır. */
  var STAGE_W = 2500, STAGE_H = 320, CENTER_X = 1250, AXIS_Y = 160, PX_PER_X = 380;
  var SCALE_MIN = 0.35, SCALE_MAX = 2.6, COMPACT_AT = 0.68, OVERVIEW_SCALE = 0.42;
  /* Parmakla dokunuşta ekranda birkaç piksellik doğal titreme oluyor;
     fare için yeterli olan eşik dokunmada gerçek dokunmaları "sürükleme"
     sayıp sessizce yok sayıyordu (seçim hiç açılmıyordu). */
  var DRAG_THRESHOLD_MOUSE = 6, DRAG_THRESHOLD_TOUCH = 16;

  function worldX(x) { return CENTER_X + x * PX_PER_X; }

  /* ---------- pan/zoom denetleyicisi ---------- */
  function createPanZoom(viewport, stage, onScaleChange, onTap) {
    var scale = 1, tx = 0, ty = 0;
    var pointers = {};
    var pinchBase = null;
    var moved = 0;
    var multiTouch = false;
    var downClientX = 0, downClientY = 0;

    function apply() {
      stage.style.transform = 'translate(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px) scale(' + scale.toFixed(3) + ')';
      viewport.classList.toggle('is-compact', scale < COMPACT_AT);
      if (onScaleChange) onScaleChange(scale);
    }

    function setScale(next, anchorX, anchorY) {
      next = Math.max(SCALE_MIN, Math.min(SCALE_MAX, next));
      var rect = viewport.getBoundingClientRect();
      var ax = (anchorX === undefined) ? rect.width / 2 : anchorX - rect.left;
      var ay = (anchorY === undefined) ? rect.height / 2 : anchorY - rect.top;
      var wx = (ax - tx) / scale, wy = (ay - ty) / scale;
      scale = next;
      tx = ax - wx * scale;
      ty = ay - wy * scale;
      apply();
    }

    function panBy(dx, dy) { tx += dx; ty += dy; apply(); }

    function centerOn(worldXpx, worldYpx) {
      var rect = viewport.getBoundingClientRect();
      tx = rect.width / 2 - worldXpx * scale;
      ty = rect.height / 2 - worldYpx * scale;
      apply();
    }

    function pinchInfo() {
      var ids = Object.keys(pointers);
      var a = pointers[ids[0]], b = pointers[ids[1]];
      return {
        dist: Math.hypot(a.x - b.x, a.y - b.y),
        mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2
      };
    }

    var gesturePointerType = 'mouse';
    viewport.addEventListener('pointerdown', function (e) {
      if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
      try { viewport.setPointerCapture(e.pointerId); } catch (err) { /* yoksay */ }
      if (Object.keys(pointers).length === 0) {
        /* yeni bir hareketin başlangıcı */
        moved = 0;
        multiTouch = false;
        gesturePointerType = e.pointerType || 'mouse';
        downClientX = e.clientX; downClientY = e.clientY;
      }
      pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      if (Object.keys(pointers).length >= 2) { pinchBase = pinchInfo(); multiTouch = true; }
    });

    viewport.addEventListener('pointermove', function (e) {
      if (!pointers[e.pointerId]) return;
      var prev = pointers[e.pointerId];
      var dx = e.clientX - prev.x, dy = e.clientY - prev.y;
      moved += Math.abs(dx) + Math.abs(dy);
      pointers[e.pointerId] = { x: e.clientX, y: e.clientY };

      var ids = Object.keys(pointers);
      if (ids.length === 1) {
        panBy(dx, dy);
      } else if (ids.length >= 2) {
        var info = pinchInfo();
        if (pinchBase && pinchBase.dist > 0) {
          setScale(scale * (info.dist / pinchBase.dist), info.mx, info.my);
        }
        pinchBase = info;
      }
    });

    function endPointer(e) {
      delete pointers[e.pointerId];
      var ids = Object.keys(pointers);
      pinchBase = ids.length >= 2 ? pinchInfo() : null;
      /* Pointer capture aktifken tarayıcının kendi ürettiği 'click' olayı
         .tj__item düğmesine değil, capture'ı üstlenen bu viewport'a gelir
         (bkz. Pointer Events spec) — bu yüzden "dokunma" seçimini burada,
         gerçek ekran koordinatından kendimiz buluyoruz. Hareketin tamamı
         (pointerdown'dan beri) tek parmakla oldu ve eşiği aşmadıysa tıklama
         sayılır; iki parmakla pinch yapılıp bırakılırken yanlışlıkla bir
         öğe seçilmesin diye multiTouch bayrağı gerekiyor. */
      var threshold = gesturePointerType === 'touch' ? DRAG_THRESHOLD_TOUCH : DRAG_THRESHOLD_MOUSE;
      if (ids.length === 0 && !multiTouch && moved <= threshold && onTap) onTap(downClientX, downClientY);
    }
    viewport.addEventListener('pointerup', endPointer);
    viewport.addEventListener('pointercancel', endPointer);

    viewport.addEventListener('wheel', function (e) {
      e.preventDefault();
      setScale(scale * Math.exp(-e.deltaY * 0.0015), e.clientX, e.clientY);
    }, { passive: false });

    apply();

    return {
      setScale: setScale,
      panBy: panBy,
      centerOn: centerOn,
      getScale: function () { return scale; }
    };
  }

  /* ---------- ekran ---------- */
  function render() {
    var frag = document.createDocumentFragment();

    frag.appendChild(U.el('p', { class: 'eyebrow', text: 'Sözlük · Zaman Yolculuğu' }));
    frag.appendChild(U.el('h1', { text: 'Aynı cümle, 12 zaman' }));
    frag.appendChild(U.el('p', { class: 'soft', style: 'margin-bottom:14px',
      text: 'Aynı cümlenin 12 zamandaki hâli, tek bir çizgi üzerinde. Yakınlaşıp gezerek karşılaştır; bir cümleye dokunarak Türkçesini ve neden o zamanın kullanıldığını gör.' }));

    var viewport = U.el('div', { class: 'tj' });
    var stage = U.el('div', { class: 'tj__stage', style: 'width:' + STAGE_W + 'px;height:' + STAGE_H + 'px' });

    stage.appendChild(U.el('div', { class: 'tj__axis' }));
    stage.appendChild(U.el('div', { class: 'tj__now', style: 'left:' + CENTER_X + 'px' }));
    stage.appendChild(U.el('div', { class: 'tj__now-lbl', style: 'left:' + CENTER_X + 'px', text: 'ŞİMDİ' }));

    var detail = U.el('div', { class: 'card tj__detail', 'aria-live': 'polite' }, [
      U.el('p', { class: 'tj__detail-hint', text: 'Bir cümleye dokun; Türkçesini ve neden o zamanın kullanıldığını gör.' })
    ]);

    function selectEntry(entry, tense) {
      U.clear(detail);
      detail.appendChild(U.el('span', { class: 'badge badge--' + tense.group, text: tense.tr }));
      var ex = U.el('div', { class: 'example example--accent' });
      var head = U.el('div', { style: 'display:flex;align-items:flex-start;gap:8px' }, [
        U.el('p', { class: 'sentence', style: 'flex:1;margin:0', text: entry.en })
      ]);
      var speakBtn = U.el('button', { class: 'btn btn--icon', type: 'button', 'aria-label': 'Cümleyi oku', html: KI.icons.html('speaker') });
      speakBtn.addEventListener('click', function () { KI.audio.play('tap'); KI.speech.speak(entry.en); });
      head.appendChild(speakBtn);
      ex.appendChild(head);
      ex.appendChild(U.el('p', { class: 'example__tr', text: entry.tr }));
      ex.appendChild(U.el('p', { class: 'example__note', text: entry.note }));
      detail.appendChild(ex);
      /* Detay kutusu haritanın hemen altında ama telefonda ekran dışında
         kalmış olabilir; sonucu görmek için aşağı kaydırmak gerektiğini
         fark etmeyen kullanıcı "Türkçesi çıkmadı" sanabiliyordu. */
      detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    var pz = null;
    KI.timelineJourney.forEach(function (entry, i) {
      var tense = KI.tenses.get(entry.tenseId);
      var group = tense ? tense.group : 'present';
      var above = (i % 2 === 0);
      var btn = U.el('button', {
        class: 'tj__item tj__item--' + group + (above ? ' tj__item--above' : ' tj__item--below'),
        type: 'button',
        style: 'left:' + worldX(entry.x) + 'px',
        /* Görsel yapıda etiket ve cümle ayrı <span>'ler olduğu için
           textContent araya boşluk koymadan birleşiyor (“Geniş ZamanMehmet…”
           gibi okunuyordu); erişilebilir ad burada temiz bir cümleyle
           açıkça belirtiliyor. */
        'aria-label': (tense ? tense.tr + ': ' : '') + entry.en
      }, [
        U.el('span', { class: 'tj__item-dot', 'aria-hidden': 'true' }),
        U.el('span', { class: 'tj__item-tag', text: tense ? tense.tr : '' }),
        U.el('span', { class: 'tj__item-sentence', text: entry.en })
      ]);
      /* Fare/dokunma ile seçim createPanZoom'un onTap'i üzerinden gelir
         (bkz. aşağısı) — pointer capture aktifken tarayıcının 'click'i bu
         düğmeye değil, capture'ı üstlenen .tj'ye gider. Bu click dinleyici
         yalnızca klavye (Enter/Boşluk) etkinleştirmesi için kalıyor; o
         durumda pointer capture söz konusu olmadığından normal çalışır. */
      btn.addEventListener('click', function () {
        KI.audio.play('tap');
        selectEntry(entry, tense || { group: 'present', tr: '' });
      });
      btn.addEventListener('focus', function () {
        if (!pz) return;
        if (pz.getScale() < 0.9) pz.setScale(1);
        pz.centerOn(worldX(entry.x), AXIS_Y);
      });
      stage.appendChild(btn);
    });

    function onTap(clientX, clientY) {
      var el = document.elementFromPoint(clientX, clientY);
      var item = el && el.closest ? el.closest('.tj__item') : null;
      if (!item) return;
      var idx = Array.prototype.indexOf.call(stage.querySelectorAll('.tj__item'), item);
      var entry = KI.timelineJourney[idx];
      if (!entry) return;
      KI.audio.play('tap');
      selectEntry(entry, KI.tenses.get(entry.tenseId) || { group: 'present', tr: '' });
    }

    viewport.appendChild(stage);
    viewport.appendChild(U.el('div', { class: 'tj__edge tj__edge--l', 'aria-hidden': 'true', text: '← Geçmiş' }));
    viewport.appendChild(U.el('div', { class: 'tj__edge tj__edge--r', 'aria-hidden': 'true', text: 'Gelecek →' }));
    frag.appendChild(viewport);

    /* ---- zoom çubuğu ---- */
    var range = U.el('input', { type: 'range', min: '35', max: '260', value: '100', 'aria-label': 'Yakınlaştırma seviyesi' });
    var zoomOut = U.el('button', { class: 'btn btn--icon', type: 'button', 'aria-label': 'Uzaklaştır', text: '−' });
    var zoomIn = U.el('button', { class: 'btn btn--icon', type: 'button', 'aria-label': 'Yakınlaştır', text: '+' });
    var fitBtn = U.el('button', { class: 'btn btn--sm', type: 'button', html: KI.icons.html('map') + ' Tümünü gör' });
    var zoombar = U.el('div', { class: 'tj__zoombar' }, [zoomOut, range, zoomIn, fitBtn]);
    frag.appendChild(zoombar);
    frag.appendChild(detail);

    zoomOut.addEventListener('click', function () { if (pz) pz.setScale(pz.getScale() - 0.2); });
    zoomIn.addEventListener('click', function () { if (pz) pz.setScale(pz.getScale() + 0.2); });
    range.addEventListener('input', function () { if (pz) pz.setScale(Number(range.value) / 100); });
    fitBtn.addEventListener('click', function () {
      if (!pz) return;
      pz.setScale(OVERVIEW_SCALE);
      pz.centerOn(CENTER_X, AXIS_Y);
    });

    /* Görüntü ilk açıldığında ŞİMDİ ortada, okunur bir yakınlıkta
       başlasın diye — viewport DOM'a eklenmeden genişliği ölçülemez,
       bu yüzden bir sonraki animasyon karesinde kurulur (bkz. app.js
       paint(): render()'ın döndürdüğü fragment hemen, senkron olarak
       #view'a ekleniyor). */
    requestAnimationFrame(function () {
      pz = createPanZoom(viewport, stage, function (s) { range.value = String(Math.round(s * 100)); }, onTap);
      pz.centerOn(CENTER_X, AXIS_Y);
    });

    return frag;
  }

  KI.viewTimelineJourney = { render: render };
})(window.KI);
