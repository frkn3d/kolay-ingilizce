/* ============================================================
   Kolay İngilizce — icons.js
   Uygulamadaki tüm ikonlar. Emoji kullanılmaz; platforma göre
   değişen, renkli emoji yerine tek stil, çizgisel SVG ikonlar.
   Kullanım: KI.icons.html('star') -> '<svg ...>...</svg>'
   ============================================================ */
window.KI = window.KI || {};

(function (KI) {
  'use strict';

  var SHAPES = {
    map: '<polygon points="3,6 9,3.3 15,6 21,3.3 21,18 15,20.7 9,18 3,20.7"/><line x1="9" y1="3.3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="20.7"/>',

    play: '<polygon points="6,4 20,12 6,20" fill="currentColor" stroke="none"/>',

    wall: '<rect x="3" y="4" width="18" height="16" rx="1.2"/><line x1="3" y1="9.3" x2="21" y2="9.3"/><line x1="3" y1="14.7" x2="21" y2="14.7"/><line x1="9" y1="4" x2="9" y2="9.3"/><line x1="15" y1="9.3" x2="15" y2="14.7"/><line x1="9" y1="14.7" x2="9" y2="20"/>',

    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/>',

    book: '<path d="M12 6.2c-1.8-1.4-4.2-2-7.3-2v13.6c3.1 0 5.5.6 7.3 2 1.8-1.4 4.2-2 7.3-2V4.2c-3.1 0-5.5.6-7.3 2Z"/><line x1="12" y1="6.2" x2="12" y2="19.8"/>',

    bell: '<path d="M6.5 9.2a5.5 5.5 0 0 1 11 0c0 4.3 1.4 5.6 1.9 6.6H4.6c.5-1 1.9-2.3 1.9-6.6Z"/><path d="M10.2 18.6a1.9 1.9 0 0 0 3.6 0"/>',
    'bell-off': '<path d="M6.5 9.2a5.5 5.5 0 0 1 11 0c0 4.3 1.4 5.6 1.9 6.6H4.6c.5-1 1.9-2.3 1.9-6.6Z"/><path d="M10.2 18.6a1.9 1.9 0 0 0 3.6 0"/><line x1="3.5" y1="3.5" x2="20.5" y2="20.5"/>',

    sun: '<circle cx="12" cy="12" r="4"/><line x1="12" y1="2.5" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="21.5"/><line x1="4.2" y1="4.2" x2="6" y2="6"/><line x1="18" y1="18" x2="19.8" y2="19.8"/><line x1="2.5" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="21.5" y2="12"/><line x1="4.2" y1="19.8" x2="6" y2="18"/><line x1="18" y1="6" x2="19.8" y2="4.2"/>',

    moon: '<path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2Z"/>',

    sliders: '<line x1="4" y1="6" x2="20" y2="6"/><circle cx="14" cy="6" r="2.1"/><line x1="4" y1="12" x2="20" y2="12"/><circle cx="9" cy="12" r="2.1"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="16" cy="18" r="2.1"/>',

    close: '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>',

    speaker: '<path d="M4 9.5v5h3.6l4.7 3.6V5.9L7.6 9.5H4Z"/><path d="M16.2 8.6a4.6 4.6 0 0 1 0 6.8"/><path d="M18.7 6a8.2 8.2 0 0 1 0 12"/>',

    star: '<path d="M12 3.6l2.5 5.1 5.6.6-4.2 3.8 1.1 5.5L12 15.9l-5 2.7 1.1-5.5-4.2-3.8 5.6-.6L12 3.6Z" fill="currentColor"/>',
    'star-outline': '<path d="M12 3.6l2.5 5.1 5.6.6-4.2 3.8 1.1 5.5L12 15.9l-5 2.7 1.1-5.5-4.2-3.8 5.6-.6L12 3.6Z"/>',

    compass: '<circle cx="12" cy="12" r="8.6"/><polygon points="15.5,8.5 13.2,13.2 8.5,15.5 10.8,10.8" fill="currentColor" stroke="none"/>',

    search: '<circle cx="10.3" cy="10.3" r="6.3"/><line x1="15" y1="15" x2="20.3" y2="20.3"/>',

    notebook: '<rect x="4.5" y="3" width="15" height="18" rx="2"/><line x1="8.3" y1="3" x2="8.3" y2="21"/><line x1="4.5" y1="8" x2="6.3" y2="8"/><line x1="4.5" y1="12" x2="6.3" y2="12"/><line x1="4.5" y1="16" x2="6.3" y2="16"/>',

    trash: '<line x1="4" y1="7" x2="20" y2="7"/><path d="M9.5 7V4.6h5V7"/><path d="M6.2 7l1 12.4a2 2 0 0 0 2 1.9h5.6a2 2 0 0 0 2-1.9l1-12.4"/><line x1="10.2" y1="11" x2="10.2" y2="17"/><line x1="13.8" y1="11" x2="13.8" y2="17"/>',

    'check-circle': '<circle cx="12" cy="12" r="8.6"/><path d="M8 12.3l2.6 2.6 5.4-5.8"/>',
    circle: '<circle cx="12" cy="12" r="8.6"/>',

    flag: '<line x1="5.5" y1="3" x2="5.5" y2="21"/><path d="M5.5 4.2h12.7l-3 3.9 3 3.9H5.5"/>',

    dice: '<rect x="4" y="4" width="16" height="16" rx="3.2"/><circle cx="8.3" cy="8.3" r="1.25" fill="currentColor" stroke="none"/><circle cx="15.7" cy="8.3" r="1.25" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none"/><circle cx="8.3" cy="15.7" r="1.25" fill="currentColor" stroke="none"/><circle cx="15.7" cy="15.7" r="1.25" fill="currentColor" stroke="none"/>',

    chat: '<rect x="3.5" y="5" width="17" height="11" rx="2.4"/><path d="M8 16v3.4l4-3.4"/>',

    chart: '<polyline points="4,17.5 9.2,11 13.2,14 20,6"/><polyline points="14.6,6 20,6 20,11.2"/>',

    pencil: '<path d="M4 20l.9-3.9L15.9 5.1l3 3L8 19.1 4 20Z"/><line x1="14" y1="6.1" x2="17" y2="9.1"/>',

    puzzle: '<path d="M9 4.2h4v2.1a2 2 0 1 0 0 4v2.1h4a2 2 0 1 1 0 4h-4v3.4H9v-3.4a2 2 0 1 1 0-4H5V8.3h4V4.2Z"/>',

    headphones: '<path d="M4.5 14.5v-2a7.5 7.5 0 0 1 15 0v2"/><rect x="3.2" y="14.5" width="4" height="5.6" rx="1.4"/><rect x="16.8" y="14.5" width="4" height="5.6" rx="1.4"/>',

    repeat: '<polyline points="17,2.5 20.5,6 17,9.5"/><path d="M3.5 12.4v-1.9a4 4 0 0 1 4-4H20.5"/><polyline points="7,21.5 3.5,18 7,14.5"/><path d="M20.5,11.6v1.9a4 4 0 0 1-4 4H3.5"/>',

    trophy: '<path d="M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4a3 3 0 0 0 3 5"/><path d="M17 5h3a3 3 0 0 1-3 5"/><line x1="12" y1="13" x2="12" y2="17"/><line x1="8.5" y1="20" x2="15.5" y2="20"/><line x1="12" y1="17" x2="12" y2="20"/>',

    thumbsup: '<path d="M7 11v9H4.5A1.5 1.5 0 0 1 3 18.5v-6A1.5 1.5 0 0 1 4.5 11H7Z"/><path d="M7 11l4-7c1 0 2 .9 2 2v3.6h4.3A1.7 1.7 0 0 1 19 11.7l-1.4 6.6a2 2 0 0 1-2 1.7H7"/>',

    sprout: '<line x1="12" y1="21" x2="12" y2="11.5"/><path d="M12 11.5c0-4-3-6.3-7-6.3 0 4 3 6.8 7 6.8Z"/><path d="M12 14.3c0-3.6 2.8-5.7 6.3-5.7 0 3.6-2.7 6.1-6.3 6.1Z"/>',

    turtle: '<path d="M12 8.3c-4 0-7.2 2.3-7.2 5.7S8 19.6 12 19.6s7.2-2.3 7.2-5.6S16 8.3 12 8.3Z"/><path d="M9.3 8.3c-1-1.6-1-3.2 0-4.4M14.7 8.3c1-1.6 1-3.2 0-4.4"/><line x1="5.8" y1="12.7" x2="2.8" y2="12.7"/><line x1="21.2" y1="12.7" x2="18.2" y2="12.7"/><line x1="7.8" y1="18.5" x2="6" y2="20.6"/><line x1="16.2" y1="18.5" x2="18" y2="20.6"/>',

    bulb: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/>',

    person: '<circle cx="12" cy="8" r="3.4"/><path d="M5 20c0-3.6 3.1-6.4 7-6.4s7 2.8 7 6.4"/>',

    mirror: '<rect x="7" y="3" width="10" height="15" rx="5"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="12" y1="18" x2="12" y2="21"/>',

    box: '<path d="M4 8l8-4 8 4-8 4-8-4Z"/><path d="M4 8v8l8 4 8-4V8"/><line x1="12" y1="12" x2="12" y2="20"/>',

    tag: '<path d="M11 4h6a1 1 0 0 1 1 1v6l-8.5 8.5a1.4 1.4 0 0 1-2 0L4 17a1.4 1.4 0 0 1 0-2L11 4Z"/><circle cx="15.3" cy="8.7" r="1.1" fill="currentColor" stroke="none"/>',

    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',

    'help-circle': '<circle cx="12" cy="12" r="8.6"/><path d="M9.5 9.3a2.5 2.5 0 1 1 3.6 2.3c-.8.5-1.1.9-1.1 1.9"/><circle cx="12" cy="16.6" r=".15" fill="currentColor" stroke="none"/>',

    key: '<circle cx="7" cy="12" r="4"/><line x1="11" y1="12" x2="21" y2="12"/><line x1="17" y1="12" x2="17" y2="16"/><line x1="20.5" y1="12" x2="20.5" y2="15"/>',
    history: '<path d="M3.5 12a8.5 8.5 0 1 0 2.8-6.3"/><polyline points="3.2 4.5 3.5 9 8 8.3"/><polyline points="12 8 12 12.3 15.2 14.2"/>',

    calendar: '<rect x="3.2" y="5" width="17.6" height="15.5" rx="2"/><line x1="3.2" y1="9.3" x2="20.8" y2="9.3"/><line x1="7.8" y1="3" x2="7.8" y2="7"/><line x1="16.2" y1="3" x2="16.2" y2="7"/><circle cx="8.3" cy="13.6" r="1.05" fill="currentColor" stroke="none"/><circle cx="12" cy="13.6" r="1.05" fill="currentColor" stroke="none"/>',

    eye: '<path d="M2 12C4 7 8 4.5 12 4.5S20 7 22 12C20 17 16 19.5 12 19.5S4 17 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    'eye-off': '<path d="M2 12C4 7 8 4.5 12 4.5S20 7 22 12C20 17 16 19.5 12 19.5S4 17 2 12Z"/><circle cx="12" cy="12" r="3"/><line x1="3" y1="3" x2="21" y2="21"/>',

    formula: '<rect x="5" y="3" width="14" height="18" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="12" x2="8.01" y2="12"/><line x1="12" y1="12" x2="12.01" y2="12"/><line x1="16" y1="12" x2="16.01" y2="12"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="12" y1="16" x2="12.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/>',

    logic: '<circle cx="9" cy="12" r="5.4"/><circle cx="15" cy="12" r="5.4"/><line x1="12" y1="6.8" x2="12" y2="17.2"/>',

    upload: '<path d="M12 15V4"/><polyline points="7,8.5 12,3.5 17,8.5"/><path d="M4.5 15v3.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V15"/>',
    download: '<path d="M12 4v11"/><polyline points="7,10.5 12,15.5 17,10.5"/><path d="M4.5 15v3.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V15"/>',

    /* --- başarım ikonları: her biri tek bir başarımı temsil eder --- */
    'ach-step': '<circle cx="5.5" cy="18.5" r="1.6" fill="currentColor" stroke="none"/><line x1="7" y1="17" x2="16.5" y2="7.5"/><polyline points="12,7.5 16.5,7.5 16.5,13"/>',
    'ach-half': '<circle cx="12" cy="12" r="8.4"/><path d="M12 3.6a8.4 8.4 0 0 1 0 16.8Z" fill="currentColor" stroke="none"/>',
    'ach-crown': '<polyline points="4,17.5 4,9.5 8.5,13 12,6.5 15.5,13 20,9.5 20,17.5"/><line x1="4" y1="17.5" x2="20" y2="17.5"/>',
    'ach-clipboard': '<rect x="5" y="4.2" width="14" height="16.8" rx="1.6"/><rect x="9" y="2.6" width="6" height="3" rx="1"/><path d="M8.3 12.4l2.3 2.3 5-5.4"/>',
    'ach-stopwatch': '<circle cx="12" cy="13.5" r="7.8"/><line x1="12" y1="13.5" x2="12" y2="9"/><line x1="12" y1="13.5" x2="14.8" y2="15"/><line x1="9.5" y1="2.6" x2="14.5" y2="2.6"/><line x1="12" y1="2.6" x2="12" y2="5.2"/>',
    'ach-medal': '<line x1="7.5" y1="2.6" x2="10.8" y2="9.8"/><line x1="16.5" y1="2.6" x2="13.2" y2="9.8"/><circle cx="12" cy="15.2" r="6"/><polygon points="12,11.8 12.9,14.1 15.3,14.4 13.5,16 14,18.4 12,17.1 10,18.4 10.5,16 8.7,14.4 11.1,14.1" fill="currentColor" stroke="none"/>',
    'ach-gem': '<polygon points="7,4 17,4 21,9.5 12,20.5 3,9.5"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="9.5" y1="4" x2="12" y2="9.5"/><line x1="14.5" y1="4" x2="12" y2="9.5"/>',
    'ach-gems': '<polygon points="12,3.2 15.2,7.4 12,12.4 8.8,7.4"/><polygon points="4.3,10.4 6.8,13.6 4.3,17.6 1.8,13.6"/><polygon points="19.7,10.4 22.2,13.6 19.7,17.6 17.2,13.6"/>',
    'ach-bookmark': '<path d="M6 3.4h12v17.2l-6-4-6 4V3.4Z"/><line x1="9.3" y1="9.6" x2="14.7" y2="9.6"/><line x1="12" y1="6.9" x2="12" y2="12.3"/>',
    'ach-stack': '<rect x="4" y="15.6" width="16" height="3.4" rx="0.7"/><rect x="5" y="11.4" width="14" height="3.4" rx="0.7"/><rect x="6" y="7.2" width="12" height="3.4" rx="0.7"/>',
    'ach-shelf': '<line x1="3" y1="20.4" x2="21" y2="20.4"/><rect x="4.5" y="6.4" width="3" height="14"/><rect x="8.6" y="9.2" width="3" height="11.2"/><rect x="12.7" y="4.6" width="3" height="15.8"/><rect x="16.8" y="7.8" width="3" height="12.6"/>',
    'ach-brain': '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/><path d="M9.7 8.7l1.7 1.7 2.9-3.1"/>',
    'ach-heart': '<path d="M12 19.5s-7-4.3-9.1-8.8C1.1 7.2 3.2 4.2 6.4 4.2c2 0 3.4 1.1 5.6 3.3 2.2-2.2 3.6-3.3 5.6-3.3 3.2 0 5.3 3 3.5 6.5-2.1 4.5-9.1 8.8-9.1 8.8Z"/>',
    'ach-flame': '<path d="M12 21c-4 0-6.4-2.5-6.4-5.8 0-2.9 1.9-4.6 2.5-7.2.3 1.3 1.1 2.3 2 2.5-.4-2.9.8-5.9 3.2-7.5-.6 2.5.4 3.9 1.7 5.3 1.7 1.7 3.1 3.5 3.1 6.9 0 3.3-2.4 5.8-6.1 5.8Z"/>',
    'ach-flame-star': '<path d="M10.3 21c-3.3 0-5.4-2.2-5.4-5.1 0-2.5 1.6-4 2.1-6.1.3 1.1 1 1.9 1.7 2.1-.3-2.5.7-5 2.7-6.3-.5 2.1.3 3.3 1.5 4.5 1.4 1.4 2.6 3 2.6 5.8 0 2.9-2.1 5.1-5.2 5.1Z"/><polygon points="18.3,3 19.2,4.9 21.2,5.2 19.7,6.5 20.1,8.5 18.3,7.5 16.5,8.5 16.9,6.5 15.4,5.2 17.4,4.9" fill="currentColor" stroke="none"/>'
  };

  function html(name, cls) {
    var inner = SHAPES[name];
    if (!inner) return '';
    var full = 'icon icon--' + name + (cls ? ' ' + cls : '');
    return '<svg class="' + full + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      inner + '</svg>';
  }

  KI.icons = { html: html, has: function (name) { return Object.prototype.hasOwnProperty.call(SHAPES, name); } };
})(window.KI);
