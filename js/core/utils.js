/* ============================================================
   Kolay İngilizce — utils.js
   Küçük yardımcılar. Her modül window.KI altında yaşar.
   ============================================================ */
window.KI = window.KI || {};

(function (KI) {
  'use strict';

  var U = {};

  U.qs  = function (sel, root) { return (root || document).querySelector(sel); };
  U.qsa = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* Etiket oluşturucu: el('div', {class:'x'}, [child, 'metin']) */
  U.el = function (tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') node.className = v;
        else if (k === 'html') node.innerHTML = v;
        else if (k === 'text') node.textContent = v;
        else if (k.indexOf('on') === 0 && typeof v === 'function') node.addEventListener(k.slice(2), v);
        else if (v === true) node.setAttribute(k, '');
        else node.setAttribute(k, v);
      });
    }
    U.append(node, children);
    return node;
  };

  U.append = function (node, children) {
    if (children === null || children === undefined) return node;
    if (!Array.isArray(children)) children = [children];
    children.forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      node.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
    });
    return node;
  };

  U.clear = function (node) { while (node && node.firstChild) node.removeChild(node.firstChild); return node; };

  U.esc = function (s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  U.on = function (node, type, sel, fn) {
    node.addEventListener(type, function (e) {
      var t = e.target.closest ? e.target.closest(sel) : null;
      if (t && node.contains(t)) fn.call(t, e, t);
    });
  };

  U.shuffle = function (arr) {
    var a = arr.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  U.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };

  U.debounce = function (fn, ms) {
    var t;
    return function () {
      var self = this, args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, ms || 200);
    };
  };

  /* Türkçe duyarlı küçük harf (İ/I sorunlarını çözer) */
  U.lower = function (s) {
    return String(s || '').replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase();
  };

  /* Arama için sadeleştirme: aksanları at */
  U.fold = function (s) {
    return U.lower(s)
      .replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u')
      .replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/ı/g, 'i')
      .replace(/[^a-z0-9 ]/g, '');
  };

  var toastTimer = null;
  U.toast = function (msg, ms) {
    var box = document.getElementById('toast');
    if (!box) return;
    box.textContent = msg;
    box.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { box.hidden = true; }, ms || 1900);
  };

  U.scrollTop = function () {
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); }
    catch (e) { window.scrollTo(0, 0); }
  };

  KI.util = U;
})(window.KI);
