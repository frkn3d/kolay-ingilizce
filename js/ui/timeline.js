/* ============================================================
   Kolay İngilizce — timeline.js
   Zaman çizgisini SVG olarak çizer.
   x değerleri: -1 (uzak geçmiş) … 0 (ŞİMDİ) … +1 (uzak gelecek)
   ============================================================ */
(function (KI) {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';
  var W = 1000, CX = 500, SPAN = 430;   // merkez ve yarı genişlik

  function n(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    return e;
  }
  function px(x) { return CX + x * SPAN; }
  function txt(x, y, s, cls, anchor) {
    var t = n('text', { x: x, y: y, 'text-anchor': anchor || 'middle', class: cls || 'tl-mark-lbl' });
    t.textContent = s;
    return t;
  }

  /* Dalgalı çizgi: süren işi anlatır */
  function wavePath(x1, x2, y, amp, steps) {
    var d = '', i, x, dx = (x2 - x1) / steps;
    for (i = 0; i <= steps; i++) {
      x = x1 + dx * i;
      var yy = y + Math.sin(i / steps * Math.PI * steps / 2.2) * amp;
      d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + yy.toFixed(1);
    }
    return d;
  }

  /* --------------------------------------------------------
     render(tense, opts) -> <svg>
     opts.mini : kart içindeki küçük gösterim
     -------------------------------------------------------- */
  function render(tense, opts) {
    opts = opts || {};
    var mini = !!opts.mini;
    var H = mini ? 62 : 215;
    var AY = mini ? 34 : 108;            // eksenin y konumu
    var color = 'var(--' + tense.group + ')';

    var svg = n('svg', {
      class: 'tl', viewBox: '0 0 ' + W + ' ' + H,
      preserveAspectRatio: 'xMidYMid meet', role: 'img',
      'aria-label': tense.en + ' zaman çizgisi'
    });
    svg.style.setProperty('--tlc', color);

    /* ok uçları */
    var defs = n('defs');
    var mk = n('marker', { id: 'ah-' + tense.id, viewBox: '0 0 10 10', refX: '8', refY: '5',
      markerWidth: '5', markerHeight: '5', orient: 'auto-start-reverse' });
    mk.appendChild(n('path', { d: 'M0 0 L10 5 L0 10 z', fill: 'var(--tlc)' }));
    defs.appendChild(mk);
    var mkA = n('marker', { id: 'ax-' + tense.id, viewBox: '0 0 10 10', refX: '9', refY: '5',
      markerWidth: '6', markerHeight: '6', orient: 'auto-start-reverse' });
    mkA.appendChild(n('path', { d: 'M0 0 L10 5 L0 10 z', fill: 'currentColor' }));
    defs.appendChild(mkA);
    svg.appendChild(defs);

    /* geçmiş / gelecek bölgeleri */
    if (!mini) {
      svg.appendChild(n('rect', { x: 0, y: AY - 46, width: CX, height: 92, class: 'tl-zone-past', opacity: '.5', rx: 8 }));
      svg.appendChild(n('rect', { x: CX, y: AY - 46, width: W - CX, height: 92, class: 'tl-zone-future', opacity: '.5', rx: 8 }));
    }

    /* ana eksen */
    var axis = n('line', {
      x1: 26, y1: AY, x2: W - 26, y2: AY, class: 'tl-axis',
      'stroke-linecap': 'round',
      'marker-end': 'url(#ax-' + tense.id + ')',
      'marker-start': 'url(#ax-' + tense.id + ')'
    });
    svg.appendChild(axis);

    /* ŞİMDİ çizgisi */
    svg.appendChild(n('line', { x1: CX, y1: AY - (mini ? 18 : 44), x2: CX, y2: AY + (mini ? 18 : 44), class: 'tl-now' }));

    if (!mini) {
      svg.appendChild(txt(CX, AY - 54, 'ŞİMDİ', 'tl-nowlbl'));
      svg.appendChild(txt(70, AY - 54, 'GEÇMİŞ', 'tl-lbl', 'start'));
      svg.appendChild(txt(W - 70, AY - 54, 'GELECEK', 'tl-lbl', 'end'));
    }

    /* işaretler */
    (tense.timeline.marks || []).forEach(function (m, i) {
      var g = n('g', { class: 'tl-pop', style: 'animation-delay:' + (0.08 * i + 0.1) + 's' });

      if (m.t === 'dot') {
        g.appendChild(n('circle', { cx: px(m.x), cy: AY, r: mini ? 7 : 13, fill: 'var(--tlc)', stroke: 'var(--surface)', 'stroke-width': mini ? 2 : 3 }));
        if (!mini && m.l) g.appendChild(txt(px(m.x), AY + 40, m.l));

      } else if (m.t === 'dots') {
        (m.xs || []).forEach(function (x) {
          g.appendChild(n('circle', { cx: px(x), cy: AY, r: mini ? 5 : 11, fill: 'var(--tlc)', stroke: 'var(--surface)', 'stroke-width': mini ? 2 : 3 }));
        });
        if (!mini && m.l) g.appendChild(txt(CX, AY + 40, m.l));

      } else if (m.t === 'span') {
        var x1 = px(m.x), x2 = px(m.x2);
        if (m.style === 'wave' && !mini) {
          g.appendChild(n('path', { d: wavePath(x1, x2, AY, 9, 26), fill: 'none', stroke: 'var(--tlc)', 'stroke-width': 7, 'stroke-linecap': 'round' }));
        } else {
          g.appendChild(n('line', { x1: x1, y1: AY, x2: x2, y2: AY, stroke: 'var(--tlc)', 'stroke-width': mini ? 8 : 14, 'stroke-linecap': 'round', opacity: '.95' }));
        }
        g.appendChild(n('line', { x1: x1, y1: AY - (mini ? 9 : 17), x2: x1, y2: AY + (mini ? 9 : 17), stroke: 'var(--tlc)', 'stroke-width': mini ? 3 : 5, 'stroke-linecap': 'round' }));
        g.appendChild(n('line', { x1: x2, y1: AY - (mini ? 9 : 17), x2: x2, y2: AY + (mini ? 9 : 17), stroke: 'var(--tlc)', 'stroke-width': mini ? 3 : 5, 'stroke-linecap': 'round' }));
        if (!mini && m.l) g.appendChild(txt((x1 + x2) / 2, AY + 42, m.l));

      } else if (m.t === 'arrow') {
        var ay = AY - (mini ? 14 : 34);
        g.appendChild(n('path', {
          d: 'M' + px(m.x) + ' ' + ay + ' L' + px(m.x2) + ' ' + ay,
          stroke: 'var(--tlc)', 'stroke-width': mini ? 3 : 4, 'stroke-dasharray': '9 7',
          fill: 'none', 'marker-end': 'url(#ah-' + tense.id + ')'
        }));
        if (!mini && m.l) g.appendChild(txt((px(m.x) + px(m.x2)) / 2, ay - 12, m.l));

      } else if (m.t === 'flag') {
        var fx = px(m.x), fy = AY - (mini ? 20 : 46);
        g.appendChild(n('line', { x1: fx, y1: fy, x2: fx, y2: AY, stroke: 'var(--tlc)', 'stroke-width': mini ? 3 : 4 }));
        g.appendChild(n('path', { d: 'M' + fx + ' ' + fy + ' l' + (mini ? 22 : 40) + ' ' + (mini ? 6 : 11) + ' l' + (mini ? -22 : -40) + ' ' + (mini ? 6 : 11) + ' z', fill: 'var(--tlc)' }));
        if (!mini && m.l) g.appendChild(txt(fx, fy - 10, m.l));
      }

      svg.appendChild(g);
    });

    return svg;
  }

  /* Başlık + çizgi + açıklama içeren kutu */
  function box(tense) {
    var U = KI.util;
    var wrap = U.el('div', { class: 'tl-wrap' });
    wrap.appendChild(render(tense));
    if (tense.timeline.caption) {
      wrap.appendChild(U.el('p', { class: 'tl-caption', text: tense.timeline.caption }));
    }
    return wrap;
  }

  KI.timeline = { render: render, box: box };
})(window.KI);
