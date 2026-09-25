/* ============================================================
   Gramer Atlası - timeline-journey.js
   "Zaman Yolculuğu": tek bir cümlenin (Mehmet büyükannesine mektup
   yazıyor) 12 zamandaki hâli, tek bir uzun zaman çizgisi üzerinde.
   Amaç: özne/fiil/nesne hep aynı kalsın, yalnızca zaman değişsin -
   böylece "zaman" kavramı tek bir sahne üzerinden somutlaşsın.

   x: -2.75 (en uzak geçmiş) … 0 (ŞİMDİ) … +2.75 (en uzak gelecek). Aralık
   bilerek geniş tutuldu ki 176px genişliğindeki kartlar (iki sıra halinde,
   üst/alt dönüşümlü) hiçbir zaman üst üste binmesin.
   tenseId, js/data/tenses.js'teki gerçek id'lerle eşleşir; renk ve
   Türkçe zaman adı oradan (KI.tenses.byId) okunur, burada tekrarlanmaz.
   ============================================================ */
(function (KI) {
  'use strict';

  KI.timelineJourney = [
    { tenseId: 'past-perfect-continuous', x: -2.75,
      en: 'Mehmet had been writing a letter to his grandmother for an hour before he fell asleep.',
      tr: 'Mehmet, uykuya dalmadan önce bir saattir büyükannesine mektup yazıyordu.',
      note: 'Geçmişte bir andan (uykuya dalmadan) hemen önce süregelen bir iş; ne kadar süredir yaptığı vurgulanır.' },

    { tenseId: 'past-perfect', x: -2.20,
      en: 'Mehmet had written a letter to his grandmother before he left for school.',
      tr: 'Mehmet, okula gitmeden önce büyükannesine bir mektup yazmıştı.',
      note: 'Geçmişteki başka bir olaydan (okula gitmeden) önce tamamlanmış bir iş.' },

    { tenseId: 'past-continuous', x: -1.65,
      en: 'Mehmet was writing a letter to his grandmother when the phone rang.',
      tr: 'Telefon çaldığında Mehmet büyükannesine mektup yazıyordu.',
      note: 'Geçmişte bir anda devam eden iş; başka bir olay (telefonun çalması) onu böler.' },

    { tenseId: 'past-simple', x: -1.10,
      en: 'Mehmet wrote a letter to his grandmother yesterday.',
      tr: 'Mehmet dün büyükannesine bir mektup yazdı.',
      note: 'Geçmişte, belirli bir anda tamamlanmış tek bir iş.' },

    { tenseId: 'present-perfect-continuous', x: -0.55,
      en: 'Mehmet has been writing a letter to his grandmother for twenty minutes.',
      tr: 'Mehmet yirmi dakikadır büyükannesine mektup yazıyor.',
      note: 'Geçmişte başlayıp hâlâ süren bir iş; ne kadar süredir yaptığı önemlidir.' },

    { tenseId: 'present-perfect', x: -0.20,
      en: 'Mehmet has written a letter to his grandmother this week.',
      tr: 'Mehmet bu hafta büyükannesine bir mektup yazdı.',
      note: 'Geçmişte olmuş ama sonucu şimdiyi ilgilendiren bir iş; tam an belirtilmez.' },

    { tenseId: 'present-simple', x: 0.20,
      en: 'Mehmet writes a letter to his grandmother every Sunday.',
      tr: 'Mehmet her pazar büyükannesine bir mektup yazar.',
      note: 'Tekrar eden bir alışkanlık; her zaman geçerli bir düzen.' },

    { tenseId: 'present-continuous', x: 0.55,
      en: 'Mehmet is writing a letter to his grandmother right now.',
      tr: 'Mehmet şu anda büyükannesine mektup yazıyor.',
      note: 'Tam da konuştuğumuz anda devam eden iş.' },

    { tenseId: 'future-continuous', x: 1.10,
      en: 'Mehmet will be writing a letter to his grandmother at nine o’clock tonight.',
      tr: 'Mehmet bu akşam saat dokuzda büyükannesine mektup yazıyor olacak.',
      note: 'Gelecekte belirli bir anda devam ediyor olacak bir iş.' },

    { tenseId: 'future-simple', x: 1.65,
      en: 'Mehmet will write a letter to his grandmother tomorrow.',
      tr: 'Mehmet yarın büyükannesine bir mektup yazacak.',
      note: 'Gelecekle ilgili basit bir karar ya da tahmin.' },

    { tenseId: 'future-perfect', x: 2.20,
      en: 'Mehmet will have written a letter to his grandmother by next Sunday.',
      tr: 'Mehmet gelecek pazara kadar büyükannesine bir mektup yazmış olacak.',
      note: 'Gelecekteki bir ana kadar tamamlanmış olacak bir iş.' },

    { tenseId: 'future-perfect-continuous', x: 2.75,
      en: 'Mehmet will have been writing a letter to his grandmother for two hours by the time she calls.',
      tr: 'Mehmet, büyükannesi aradığında ona iki saattir mektup yazıyor olacak.',
      note: 'Gelecekteki bir ana kadar ne kadar süredir devam ediyor olacağının vurgusu.' }
  ];
})(window.KI);
