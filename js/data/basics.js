/* ============================================================
   Kolay İngilizce — basics.js
   Zamanlara geçmeden önce bilinmesi gereken en sade temeller.
   Blok türleri: text | list | table | examples | callout | verbs
   ============================================================ */
(function (KI) {
  'use strict';

  var B = [];

  B.push({
    id: 'sira',
    icon: KI.icons.html('puzzle'),
    title: 'Cümlenin Sırası',
    intro: 'İngilizcede sıra hemen hemen hiç değişmez. Türkçede fiil sona giderken İngilizcede ortadadır.',
    blocks: [
      { t: 'callout', kind: 'tip', title: 'Altın kural', text: 'ÖZNE + FİİL + NESNE + YER + ZAMAN' },
      { t: 'examples', items: [
        { en: 'My mother makes tea in the kitchen every morning.', tr: 'Annem her sabah mutfakta çay yapar.' },
        { en: 'We ate lahmacun at home yesterday.', tr: 'Dün evde lahmacun yedik.' }
      ] },
      { t: 'text', v: 'Türkçe: <b>Annem / mutfakta / çay / yapar.</b> İngilizce: <b>My mother / makes / tea / in the kitchen.</b> Fiil öznenin hemen arkasındadır.' }
    ]
  });

  B.push({
    id: 'zamirler',
    icon: KI.icons.html('person'),
    title: 'Kişi Zamirleri',
    intro: 'Her cümlenin bir öznesi olmalıdır. Türkçede "gidiyorum" yeterlidir; İngilizcede "I" yazılmak zorundadır.',
    blocks: [
      { t: 'table', head: ['Özne', 'Türkçe', 'Nesne', 'İyelik'], rows: [
        ['I', 'ben', 'me', 'my'],
        ['you', 'sen / siz', 'you', 'your'],
        ['he', 'o (erkek)', 'him', 'his'],
        ['she', 'o (kadın)', 'her', 'her'],
        ['it', 'o (nesne, hayvan)', 'it', 'its'],
        ['we', 'biz', 'us', 'our'],
        ['they', 'onlar', 'them', 'their']
      ] },
      { t: 'callout', kind: 'warn', title: 'Dikkat', text: 'he, she, it özneleri geniş zamanda fiile <b>-s</b> ekletir: he drink<b>s</b>.' }
    ]
  });

  B.push({
    id: 'tobe',
    icon: KI.icons.html('mirror'),
    title: 'Olmak Fiili: am / is / are',
    intro: 'Türkçede "-dir, -dır" ekiyle yaptığımız işi İngilizce ayrı bir kelimeyle yapar.',
    blocks: [
      { t: 'table', head: ['Özne', 'Şimdi', 'Geçmiş'], rows: [
        ['I', 'am', 'was'],
        ['he / she / it', 'is', 'was'],
        ['you / we / they', 'are', 'were']
      ] },
      { t: 'examples', items: [
        { en: 'I am a student.', tr: 'Ben öğrenciyim.' },
        { en: 'The mosque is very old.', tr: 'Cami çok eski.' },
        { en: 'We were at the wedding.', tr: 'Düğündeydik.' },
        { en: 'The children are not hungry.', tr: 'Çocuklar aç değil.' }
      ] },
      { t: 'callout', kind: 'tip', title: 'Kolay yol', text: 'Cümlede iş yapan bir fiil yoksa (öğrenciyim, güzeldir, evdeydi) <b>be</b> fiili gerekir.' }
    ]
  });

  B.push({
    id: 'have',
    icon: KI.icons.html('box'),
    title: 'Sahip Olmak: have / has',
    intro: 'Türkçede "var" ile söylediğimiz şeyleri İngilizce have / has ile söyler.',
    blocks: [
      { t: 'table', head: ['Özne', 'Şimdi', 'Geçmiş'], rows: [
        ['I / you / we / they', 'have', 'had'],
        ['he / she / it', 'has', 'had']
      ] },
      { t: 'examples', items: [
        { en: 'We have two cats.', tr: 'İki kedimiz var.' },
        { en: 'My grandfather has a small garden.', tr: 'Dedemin küçük bir bahçesi var.' },
        { en: 'They had many guests yesterday.', tr: 'Dün çok misafirleri vardı.' }
      ] },
      { t: 'callout', kind: '', title: 'İkinci görevi', text: 'have / has aynı zamanda Present Perfect’in yardımcısıdır: <b>have visited</b> = ziyaret etmişim.' }
    ]
  });

  B.push({
    id: 'artikel',
    icon: KI.icons.html('tag'),
    title: 'a / an / the',
    intro: 'Türkçede olmayan küçük kelimelerdir ama cümlenin doğal durması için gerekirler.',
    blocks: [
      { t: 'list', items: [
        '<b>a</b> = herhangi bir. Sessiz harfle başlayan kelimelerden önce: <b>a</b> mosque, <b>a</b> carpet.',
        '<b>an</b> = herhangi bir. Sesli harf sesiyle başlayanlardan önce: <b>an</b> apple, <b>an</b> imam.',
        '<b>the</b> = bilinen, belli olan şey: <b>the</b> Bosphorus, <b>the</b> mosque in our street.'
      ] },
      { t: 'examples', items: [
        { en: 'I bought a carpet. The carpet is from Hereke.', tr: 'Bir halı aldım. Halı Hereke işi.' },
        { en: 'The sun is very hot today.', tr: 'Güneş bugün çok sıcak.' }
      ] },
      { t: 'callout', kind: 'tip', title: 'Kolay yol', text: 'İlk kez söylüyorsan <b>a / an</b>, ikinci kez söylüyorsan <b>the</b>.' }
    ]
  });

  B.push({
    id: 'cogul',
    icon: KI.icons.html('plus'),
    title: 'Çoğul Yapmak',
    intro: 'İngilizcede çoğul eki neredeyse her zaman <b>-s</b>’tir.',
    blocks: [
      { t: 'table', head: ['Kural', 'Tekil', 'Çoğul'], rows: [
        ['Genel kural: +s', 'carpet', 'carpets'],
        ['s, sh, ch, x ile bitiyorsa: +es', 'dish', 'dishes'],
        ['Sessiz + y ise: y düşer, +ies', 'city', 'cities'],
        ['Düzensiz', 'child', 'children'],
        ['Düzensiz', 'man / woman', 'men / women']
      ] },
      { t: 'callout', kind: 'warn', title: 'Karıştırmayın', text: 'Fiildeki <b>-s</b> (he drinks) ile isimdeki <b>-s</b> (carpets) farklı işlerdir. Fiilde tekil, isimde çoğul demektir.' }
    ]
  });

  B.push({
    id: 'ekler',
    icon: KI.icons.html('pencil'),
    title: 'Ekler: -s, -ing, -ed',
    intro: 'Zamanların hepsi bu üç ekle çalışır. Yazımı birkaç küçük kurala bağlıdır.',
    blocks: [
      { t: 'table', head: ['Ek', 'Kural', 'Örnek'], rows: [
        ['-s', 'genel', 'read → reads'],
        ['-es', 'o, s, sh, ch, x sonrası', 'go → goes, watch → watches'],
        ['-ies', 'sessiz + y', 'study → studies'],
        ['-ing', 'genel', 'wait → waiting'],
        ['-ing', 'sondaki sessiz e düşer', 'make → making, weave → weaving'],
        ['-ing', 'tek heceli, sesli+sessiz ise harf ikilenir', 'sit → sitting, run → running'],
        ['-ed', 'genel (düzenli fiiller)', 'visit → visited'],
        ['-ed', 'sonu e ise sadece -d', 'live → lived'],
        ['-ied', 'sessiz + y', 'carry → carried']
      ] }
    ]
  });

  B.push({
    id: 'fiil-halleri',
    icon: KI.icons.html('repeat'),
    title: 'Fiilin Üç Hâli',
    intro: 'Zamanları kurmak için her fiilin üç hâlini bilmek gerekir: <b>V1</b> (yalın), <b>V2</b> (geçmiş), <b>V3</b> (-miş hâli).',
    blocks: [
      { t: 'callout', kind: 'tip', title: 'Nerede kullanılır?', text: '<b>V1</b>: Present Simple, will, do/does/did sonrası · <b>V2</b>: Past Simple · <b>V3</b>: have/has/had ve will have sonrası' },
      { t: 'text', v: 'Düzenli fiillerde V2 ve V3 aynıdır ve <b>-ed</b> ile yapılır: visit → visited → visited. Düzensiz fiiller ezberlenir:' },
      { t: 'verbs' }
    ]
  });

  B.push({
    id: 'soru',
    icon: KI.icons.html('help-circle'),
    title: 'Soru Kelimeleri',
    intro: 'Soru kelimesi en başa gelir, arkasından yardımcı fiil gelir.',
    blocks: [
      { t: 'table', head: ['Kelime', 'Türkçe', 'Örnek'], rows: [
        ['What', 'ne', 'What did you eat?'],
        ['Who', 'kim', 'Who built this mosque?'],
        ['Where', 'nerede', 'Where is the fountain?'],
        ['When', 'ne zaman', 'When will you come?'],
        ['Why', 'neden', 'Why are you waiting?'],
        ['How', 'nasıl', 'How do you make ashura?'],
        ['How long', 'ne kadar süredir', 'How long have you been here?'],
        ['How many', 'kaç tane', 'How many guests came?']
      ] },
      { t: 'callout', kind: 'tip', title: 'Kalıp', text: 'Soru kelimesi + yardımcı fiil + özne + fiil ?  →  <b>When did you arrive?</b>' }
    ]
  });

  B.push({
    id: 'going-to',
    icon: KI.icons.html('compass'),
    title: 'will mi, be going to mu?',
    intro: 'İkisi de geleceği anlatır ama niyetleri farklıdır.',
    blocks: [
      { t: 'table', head: ['Kalıp', 'Ne zaman', 'Örnek'], rows: [
        ['will + V1', 'O anda verilen karar, söz, tahmin', 'I will help you.'],
        ['am/is/are going to + V1', 'Önceden yapılmış plan', 'We are going to visit Bursa.'],
        ['am/is/are + V-ing', 'Ayarlanmış randevu, bilet, söz', 'We are leaving at six.']
      ] },
      { t: 'examples', items: [
        { en: 'The bag is heavy. I will carry it.', tr: 'Çanta ağır. Ben taşırım.' },
        { en: 'We are going to visit my grandmother next week.', tr: 'Gelecek hafta babaannemi ziyaret edeceğiz.' }
      ] }
    ]
  });

  KI.basics = B;
})(window.KI);
