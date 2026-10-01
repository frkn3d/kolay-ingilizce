/* ============================================================
   Gramer Atlası - selftest.js
   Zaman sayfalarındaki "Kendini dene" bölümünün ek soru havuzu.
   Her zaman için havuz şunlardan oluşur (toplam en az 50):
     - boşluk doldurma : tenses.js + exercises*.js içindeki quiz
     - doğru / yanlış  : TF  (bu dosya)
     - cümle kurma     : o zamanın örnek cümlelerinden 12 tanesi
     - hikâyeni yaz    : STORY (bu dosya)
   Doğru/yanlış biçimi: { s, ok, fix?, why }
     ok:false ise fix = cümlenin doğru hâli.
   Hikâye biçimi: { tr: görev, hint: işe yarar kalıplar }
   ============================================================ */
(function (KI) {
  'use strict';

  var TF = {}, STORY = {};

  /* ---------------- PRESENT SIMPLE ---------------- */
  TF['present-simple'] = [
    { s: 'My mother makes tea every morning.', ok: true, why: 'she → makes; "every morning" alışkanlık bildirir.' },
    { s: 'He go to work by bus.', ok: false, fix: 'He goes to work by bus.', why: 'he / she / it ile fiile -s eklenir.' },
    { s: 'We do not watch television at night.', ok: true, why: 'Olumsuzda do not + yalın fiil.' },
    { s: 'She don’t like coffee.', ok: false, fix: 'She doesn’t like coffee.', why: 'she ile do değil does kullanılır.' },
    { s: 'Does your brother play football?', ok: true, why: 'Soruda Does + özne + yalın fiil.' },
    { s: 'Do he live in Ankara?', ok: false, fix: 'Does he live in Ankara?', why: 'he ile soru Does ile kurulur.' },
    { s: 'The shops close at seven on Sundays.', ok: true, why: 'Sabit düzen; çoğul özne → close.' },
    { s: 'My father never drink coffee.', ok: false, fix: 'My father never drinks coffee.', why: 'my father = he → drinks.' },
    { s: 'Water boils at 100 degrees.', ok: true, why: 'Bilimsel gerçek: Present Simple.' },
    { s: 'Does she speaks English?', ok: false, fix: 'Does she speak English?', why: 'does zaten -s’yi taşır; fiil yalın kalır.' },
    { s: 'I usually walk to school.', ok: true, why: 'I ile fiil eksiz: walk.' },
    { s: 'They goes to the park every Friday.', ok: false, fix: 'They go to the park every Friday.', why: 'they ile fiile -s eklenmez.' },
    { s: 'My grandmother lives in a small village.', ok: true, why: 'Kalıcı durum; she → lives.' },
    { s: 'The sun rise in the east.', ok: false, fix: 'The sun rises in the east.', why: 'the sun = it → rises.' }
  ];
  STORY['present-simple'] = [
    { tr: 'Sıradan bir gününü anlat: sabah ve akşam neler yaparsın?', hint: 'I get up at… · I usually… · every day' },
    { tr: 'Ailenden birini anlat: nerede yaşar, ne iş yapar, neyi sever?', hint: 'My father lives… · He works… · He likes…' },
    { tr: 'Hafta sonu alışkanlıklarını anlat.', hint: 'On Saturdays I… · We often… · I never…' }
  ];

  /* ---------------- PRESENT CONTINUOUS ---------------- */
  TF['present-continuous'] = [
    { s: 'Look! The children are playing in the garden.', ok: true, why: '"Look!" şu anı gösterir; are + playing.' },
    { s: 'She is cook dinner now.', ok: false, fix: 'She is cooking dinner now.', why: 'am / is / are’dan sonra fiil -ing alır.' },
    { s: 'I am reading a book at the moment.', ok: true, why: 'I → am; "at the moment" şimdiki zaman işareti.' },
    { s: 'They is waiting for the bus.', ok: false, fix: 'They are waiting for the bus.', why: 'they ile are kullanılır.' },
    { s: 'Are you listening to me?', ok: true, why: 'Soruda Are başa gelir.' },
    { s: 'He working in the garden right now.', ok: false, fix: 'He is working in the garden right now.', why: 'is eksik: özne + is + V-ing.' },
    { s: 'My father is not sleeping now.', ok: true, why: 'Olumsuz: is not + V-ing.' },
    { s: 'I am knowing the answer.', ok: false, fix: 'I know the answer.', why: 'know bir durum fiilidir, -ing almaz.' },
    { s: 'We are having dinner right now.', ok: true, why: 'have "yemek yemek" anlamında -ing alabilir.' },
    { s: 'Is they watching a film?', ok: false, fix: 'Are they watching a film?', why: 'they ile soru Are ile kurulur.' },
    { s: 'It is raining outside.', ok: true, why: 'Şu anda süren olay.' },
    { s: 'She are writing a letter.', ok: false, fix: 'She is writing a letter.', why: 'she ile is kullanılır.' },
    { s: 'Listen! Someone is singing.', ok: true, why: '"Listen!" şu anı gösterir.' },
    { s: 'I am wanting a glass of water.', ok: false, fix: 'I want a glass of water.', why: 'want durum fiilidir, -ing almaz.' }
  ];
  STORY['present-continuous'] = [
    { tr: 'Şu anda etrafında neler oluyor? Gördüklerini anlat.', hint: 'My brother is… · People are… · It is raining…' },
    { tr: 'Kalabalık bir parkı hayal et: insanlar şu anda ne yapıyor?', hint: 'A man is… · Two children are… · A dog is…' },
    { tr: 'Bu hafta neyle meşgulsün? Neler üzerinde çalışıyorsun?', hint: 'This week I am… · I am not… · We are…' }
  ];

  /* ---------------- PRESENT PERFECT ---------------- */
  TF['present-perfect'] = [
    { s: 'I have visited Istanbul three times.', ok: true, why: 'Hayat boyu deneyim: have + V3.' },
    { s: 'She has went to the market.', ok: false, fix: 'She has gone to the market.', why: 'has + V3: go → gone (went V2’dir).' },
    { s: 'We have just finished our lunch.', ok: true, why: '"just" az önce biten işi gösterir.' },
    { s: 'He have finished his homework.', ok: false, fix: 'He has finished his homework.', why: 'he ile has kullanılır.' },
    { s: 'Have you ever eaten baklava?', ok: true, why: '"ever" deneyim sorar; eat → eaten.' },
    { s: 'I have seen him yesterday.', ok: false, fix: 'I saw him yesterday.', why: '"yesterday" gibi belli bir geçmiş zaman Present Perfect ile kullanılmaz.' },
    { s: 'They have not arrived yet.', ok: true, why: '"yet" olumsuzda cümle sonunda.' },
    { s: 'Has she wrote the letter?', ok: false, fix: 'Has she written the letter?', why: 'write → wrote → written; has ile V3 gelir.' },
    { s: 'My brother has lost his keys.', ok: true, why: 'Sonucu şimdi önemli: anahtarlar hâlâ kayıp.' },
    { s: 'We has lived here for ten years.', ok: false, fix: 'We have lived here for ten years.', why: 'we ile have kullanılır.' },
    { s: 'She has already cleaned the kitchen.', ok: true, why: '"already" has ile V3 arasına girer.' },
    { s: 'I have finish my work.', ok: false, fix: 'I have finished my work.', why: 'have’den sonra V3 gelir: finished.' },
    { s: 'Ali has never been to Konya.', ok: true, why: '"never been to" = hiç gitmedi.' },
    { s: 'They have broke the window.', ok: false, fix: 'They have broken the window.', why: 'break → broke → broken.' }
  ];
  STORY['present-perfect'] = [
    { tr: 'Hayatında yaptığın ilginç şeyleri anlat. Hiç yapmadığın bir şeyi de ekle.', hint: 'I have visited… · I have never… · I have tried…' },
    { tr: 'Bu yıl şimdiye kadar neleri başardın?', hint: 'This year I have… · I have learned… · I have read…' },
    { tr: 'Bugün şimdiye kadar neler yaptın, neleri henüz yapmadın?', hint: 'Today I have… · I have already… · I have not… yet' }
  ];

  /* ---------------- PRESENT PERFECT CONTINUOUS ---------------- */
  TF['present-perfect-continuous'] = [
    { s: 'I have been waiting for an hour.', ok: true, why: 'Bir saattir süren iş: have been + V-ing.' },
    { s: 'She has been work here since morning.', ok: false, fix: 'She has been working here since morning.', why: 'been’den sonra fiil -ing alır.' },
    { s: 'It has been raining since morning.', ok: true, why: '"since" başlangıç noktasını verir.' },
    { s: 'They have be playing for two hours.', ok: false, fix: 'They have been playing for two hours.', why: 'have’den sonra be değil been gelir.' },
    { s: 'How long have you been learning English?', ok: true, why: '"How long" süre sorar.' },
    { s: 'He have been sleeping all day.', ok: false, fix: 'He has been sleeping all day.', why: 'he ile has kullanılır.' },
    { s: 'We have been living in this house for five years.', ok: true, why: '"for five years" süreyi verir.' },
    { s: 'I has been reading this book for a week.', ok: false, fix: 'I have been reading this book for a week.', why: 'I ile have kullanılır.' },
    { s: 'My mother has been cooking since noon.', ok: true, why: 'Öğleden beri süren iş.' },
    { s: 'She has been knowing him for years.', ok: false, fix: 'She has known him for years.', why: 'know durum fiilidir; sürerlik yerine Present Perfect kullanılır.' },
    { s: 'Have they been working all night?', ok: true, why: 'Soruda Have başa gelir.' },
    { s: 'It have been snowing since yesterday.', ok: false, fix: 'It has been snowing since yesterday.', why: 'it ile has kullanılır.' },
    { s: 'The children have been playing in the garden all afternoon.', ok: true, why: 'Öğleden sonra boyunca süren iş.' },
    { s: 'We has been studying since lunch.', ok: false, fix: 'We have been studying since lunch.', why: 'we ile have kullanılır.' }
  ];
  STORY['present-perfect-continuous'] = [
    { tr: 'Son zamanlarda neyle uğraşıyorsun ve ne zamandır?', hint: 'I have been… for… · since…' },
    { tr: 'Neden yorgunsun? Ne zamandır ne yapıyorsun?', hint: 'I am tired because I have been… · all day' },
    { tr: 'İngilizceyi ne zamandır öğreniyorsun, nasıl çalışıyorsun?', hint: 'I have been learning… · I have been reading…' }
  ];

  /* ---------------- PAST SIMPLE ---------------- */
  TF['past-simple'] = [
    { s: 'I visited my grandmother yesterday.', ok: true, why: 'Belli geçmiş zaman: yesterday + V2.' },
    { s: 'She go to the market yesterday.', ok: false, fix: 'She went to the market yesterday.', why: 'Geçmişte go → went.' },
    { s: 'We watched a film last night.', ok: true, why: '"last night" geçmiş işareti; düzenli fiil -ed alır.' },
    { s: 'Did you saw the news?', ok: false, fix: 'Did you see the news?', why: 'did’den sonra fiil yalın kalır.' },
    { s: 'He did not call me last week.', ok: true, why: 'Olumsuz: did not + yalın fiil.' },
    { s: 'He didn’t went to school.', ok: false, fix: 'He didn’t go to school.', why: 'didn’t’ten sonra fiil yalın: go.' },
    { s: 'My father bought a new car last year.', ok: true, why: 'buy → bought (düzensiz).' },
    { s: 'I have met him two days ago.', ok: false, fix: 'I met him two days ago.', why: '"ago" Past Simple ile kullanılır.' },
    { s: 'Did she finish her homework?', ok: true, why: 'Soruda Did + yalın fiil.' },
    { s: 'We was at home last night.', ok: false, fix: 'We were at home last night.', why: 'we ile were kullanılır.' },
    { s: 'They arrived in Izmir on Monday.', ok: true, why: 'Belli bir günde biten olay.' },
    { s: 'She write a letter yesterday.', ok: false, fix: 'She wrote a letter yesterday.', why: 'write → wrote.' },
    { s: 'The children played in the park.', ok: true, why: 'play → played.' },
    { s: 'I see a big dog yesterday.', ok: false, fix: 'I saw a big dog yesterday.', why: 'see → saw.' }
  ];
  STORY['past-simple'] = [
    { tr: 'Geçen hafta sonu neler yaptın?', hint: 'Last weekend I… · We went… · I did not…' },
    { tr: 'Çocukluğundan bir anını anlat.', hint: 'When I was a child… · One day… · We played…' },
    { tr: 'Dün ne yedin, kimlerle görüştün?', hint: 'Yesterday I ate… · I met… · We talked…' }
  ];

  /* ---------------- PAST CONTINUOUS ---------------- */
  TF['past-continuous'] = [
    { s: 'I was reading a book when the phone rang.', ok: true, why: 'Süren iş (was reading) + araya giren olay (rang).' },
    { s: 'They was playing football at five.', ok: false, fix: 'They were playing football at five.', why: 'they ile were kullanılır.' },
    { s: 'She was cooking dinner at seven.', ok: true, why: 'Geçmişte belli bir anda süren iş.' },
    { s: 'He were sleeping when I called.', ok: false, fix: 'He was sleeping when I called.', why: 'he ile was kullanılır.' },
    { s: 'What were you doing at nine last night?', ok: true, why: 'Soruda were başa gelir.' },
    { s: 'We were watch television when the lights went out.', ok: false, fix: 'We were watching television when the lights went out.', why: 'were’den sonra fiil -ing alır.' },
    { s: 'It was raining all evening.', ok: true, why: 'Akşam boyunca süren olay.' },
    { s: 'While I walking home, I met Ali.', ok: false, fix: 'While I was walking home, I met Ali.', why: 'was eksik: özne + was + V-ing.' },
    { s: 'The children were not sleeping at midnight.', ok: true, why: 'Olumsuz: were not + V-ing.' },
    { s: 'Was they working at noon yesterday?', ok: false, fix: 'Were they working at noon yesterday?', why: 'they ile soru Were ile kurulur.' },
    { s: 'My mother was making bread when we arrived.', ok: true, why: 'Biz vardığımızda süren iş.' },
    { s: 'I was knowing the answer.', ok: false, fix: 'I knew the answer.', why: 'know durum fiilidir, -ing almaz.' },
    { s: 'While she was driving, it started to snow.', ok: true, why: '"While" süren işi tanıtır.' },
    { s: 'She was cook when the guests arrived.', ok: false, fix: 'She was cooking when the guests arrived.', why: 'was’tan sonra fiil -ing alır.' }
  ];
  STORY['past-continuous'] = [
    { tr: 'Dün akşam saat sekizde ailende kim ne yapıyordu?', hint: 'At eight my mother was… · My brother was…' },
    { tr: 'Telefonun çaldığı bir anı anlat: o sırada ne yapıyordun?', hint: 'I was… when the phone rang · While I was…' },
    { tr: 'Yağmur başladığında sokakta insanlar ne yapıyordu?', hint: 'When the rain started, people were… · A man was…' }
  ];

  /* ---------------- PAST PERFECT ---------------- */
  TF['past-perfect'] = [
    { s: 'When we arrived, the film had already started.', ok: true, why: 'Biz varmadan önce başlamıştı: had + V3.' },
    { s: 'She had went home before the rain.', ok: false, fix: 'She had gone home before the rain.', why: 'had + V3: go → gone.' },
    { s: 'I had never seen the sea before that summer.', ok: true, why: 'O yaz öncesine kadar deneyim yoktu.' },
    { s: 'They has left when I called.', ok: false, fix: 'They had left when I called.', why: 'Geçmişteki bir andan önce: had + V3.' },
    { s: 'Had you finished your work before dinner?', ok: true, why: 'Soruda Had başa gelir.' },
    { s: 'He had finish the book before the class.', ok: false, fix: 'He had finished the book before the class.', why: 'had’den sonra V3: finished.' },
    { s: 'The train had left before we got to the station.', ok: true, why: 'Önce tren gitti, sonra biz vardık.' },
    { s: 'After we had ate, we went out.', ok: false, fix: 'After we had eaten, we went out.', why: 'eat → ate → eaten.' },
    { s: 'My father had not eaten anything all day.', ok: true, why: 'Olumsuz: had not + V3.' },
    { s: 'Had she wrote the letter before you came?', ok: false, fix: 'Had she written the letter before you came?', why: 'write → written.' },
    { s: 'She was tired because she had worked all day.', ok: true, why: 'Yorgunluğun sebebi daha önce olmuştu.' },
    { s: 'We had not saw that film before.', ok: false, fix: 'We had not seen that film before.', why: 'see → saw → seen.' },
    { s: 'They had sold the house before they moved to Ankara.', ok: true, why: 'Önce satış, sonra taşınma.' },
    { s: 'By the time we arrived, the guests have left.', ok: false, fix: 'By the time we arrived, the guests had left.', why: 'Geçmişteki bir andan önce biten iş: had left.' }
  ];
  STORY['past-perfect'] = [
    { tr: 'Bir yere geç kaldığın günü anlat: vardığında neler çoktan olmuştu?', hint: 'When I arrived, … had already… · I had missed…' },
    { tr: 'İlk kez yaptığın bir şeyi anlat: ondan önce hiç yapmamıştın.', hint: 'I had never… before · It was the first time…' },
    { tr: 'Bir akşam eve döndüğünde evde neler olmuştu?', hint: 'When I got home, my mother had… · Someone had…' }
  ];

  /* ---------------- PAST PERFECT CONTINUOUS ---------------- */
  TF['past-perfect-continuous'] = [
    { s: 'She had been waiting for an hour when the bus came.', ok: true, why: 'Otobüs gelene kadar bir saattir bekliyordu.' },
    { s: 'They had been play for two hours before it rained.', ok: false, fix: 'They had been playing for two hours before it rained.', why: 'been’den sonra fiil -ing alır.' },
    { s: 'I was tired because I had been working all day.', ok: true, why: 'Yorgunluğun sebebi öncesinde süren iş.' },
    { s: 'He had be sleeping for ten hours.', ok: false, fix: 'He had been sleeping for ten hours.', why: 'had’den sonra been gelir.' },
    { s: 'How long had you been living there before you moved?', ok: true, why: 'Taşınmadan önceki süre soruluyor.' },
    { s: 'We has been walking for an hour when we found the village.', ok: false, fix: 'We had been walking for an hour when we found the village.', why: 'Geçmişteki bir ana kadar süren iş: had been.' },
    { s: 'It had been raining all night, so the road was wet.', ok: true, why: 'Islak yolun sebebi: öncesinde süren yağmur.' },
    { s: 'She have been cooking all morning before the guests came.', ok: false, fix: 'She had been cooking all morning before the guests came.', why: 'Geçmişteki bir andan önce: had been.' },
    { s: 'The children had been playing outside, so they were hungry.', ok: true, why: 'Açlığın sebebi öncesinde süren oyun.' },
    { s: 'I had been wait for you for an hour.', ok: false, fix: 'I had been waiting for you for an hour.', why: 'been’den sonra fiil -ing alır.' },
    { s: 'Had they been working there long before the factory closed?', ok: true, why: 'Soruda Had başa gelir.' },
    { s: 'My eyes were red because I had been cry.', ok: false, fix: 'My eyes were red because I had been crying.', why: 'been’den sonra fiil -ing alır.' },
    { s: 'Ali had been studying English for three years before he moved to Istanbul.', ok: true, why: 'Taşınmadan önce üç yıldır sürüyordu.' },
    { s: 'They had been talked on the phone for an hour.', ok: false, fix: 'They had been talking on the phone for an hour.', why: 'been’den sonra V3 değil V-ing gelir.' }
  ];
  STORY['past-perfect-continuous'] = [
    { tr: 'Uzun süre beklediğin bir anı anlat.', hint: 'I had been waiting for… when… · finally' },
    { tr: 'Çok yorgun olduğun bir günü anlat. Öncesinde ne zamandır ne yapıyordun?', hint: 'I was tired because I had been… · for hours' },
    { tr: 'Bir yerden taşınmadan önce orada ne kadar süredir yaşıyordun?', hint: 'We had been living there for… before we moved…' }
  ];

  /* ---------------- FUTURE SIMPLE ---------------- */
  TF['future-simple'] = [
    { s: 'I will call you tomorrow.', ok: true, why: 'will + yalın fiil.' },
    { s: 'She will goes to the market.', ok: false, fix: 'She will go to the market.', why: 'will’den sonra fiil yalın kalır.' },
    { s: 'It will probably rain tomorrow.', ok: true, why: 'Tahmin: will + yalın fiil.' },
    { s: 'We will to visit our uncle.', ok: false, fix: 'We will visit our uncle.', why: 'will’den sonra "to" gelmez.' },
    { s: 'Will you help me with this bag?', ok: true, why: 'Rica: Will başa gelir.' },
    { s: 'He wills come tomorrow.', ok: false, fix: 'He will come tomorrow.', why: 'will hiçbir zaman -s almaz.' },
    { s: 'I think they will win the match.', ok: true, why: '"I think" ile tahmin.' },
    { s: 'Will she comes to the party?', ok: false, fix: 'Will she come to the party?', why: 'will’den sonra fiil yalın: come.' },
    { s: 'I will not tell anyone your secret.', ok: true, why: 'Olumsuz söz: will not.' },
    { s: 'They will are late.', ok: false, fix: 'They will be late.', why: 'will’den sonra be gelir.' },
    { s: 'Don’t worry, I will help you.', ok: true, why: 'Anında verilen söz.' },
    { s: 'I will calling you tonight.', ok: false, fix: 'I will call you tonight.', why: 'will + yalın fiil; -ing için "will be" gerekir.' },
    { s: 'The shop will open at nine tomorrow.', ok: true, why: 'will + yalın fiil.' },
    { s: 'My father will buys a new car next year.', ok: false, fix: 'My father will buy a new car next year.', why: 'will’den sonra fiil -s almaz.' }
  ];
  STORY['future-simple'] = [
    { tr: 'Gelecek yıl hayatında neler olacağını tahmin et.', hint: 'Next year I will… · I think… will… · I won’t…' },
    { tr: 'Bir arkadaşına söz ver: ona nasıl yardım edeceksin?', hint: 'I will help you… · I will call… · Don’t worry…' },
    { tr: 'Yirmi yıl sonra dünya nasıl olacak?', hint: 'In twenty years people will… · Cars will…' }
  ];

  /* ---------------- FUTURE CONTINUOUS ---------------- */
  TF['future-continuous'] = [
    { s: 'This time tomorrow, I will be flying to Izmir.', ok: true, why: 'Yarın bu saatte süren iş.' },
    { s: 'At eight tomorrow, she will be work.', ok: false, fix: 'At eight tomorrow, she will be working.', why: 'will be’den sonra fiil -ing alır.' },
    { s: 'Will you be using your car this evening?', ok: true, why: 'Kibar soru: Will + özne + be + V-ing.' },
    { s: 'They will been sleeping at midnight.', ok: false, fix: 'They will be sleeping at midnight.', why: 'will’den sonra be gelir, been değil.' },
    { s: 'We will be having dinner at seven.', ok: true, why: 'Gelecekte belli bir anda süren iş.' },
    { s: 'He will be play football at five tomorrow.', ok: false, fix: 'He will be playing football at five tomorrow.', why: 'will be + V-ing.' },
    { s: 'At noon tomorrow, my mother will be cooking.', ok: true, why: 'Yarın öğlen süren iş.' },
    { s: 'I will sleeping at eleven tonight.', ok: false, fix: 'I will be sleeping at eleven tonight.', why: 'be eksik: will be + V-ing.' },
    { s: 'Don’t call me at nine; I will be watching the match.', ok: true, why: 'O saatte süren iş.' },
    { s: 'Will she being working tomorrow?', ok: false, fix: 'Will she be working tomorrow?', why: 'will’den sonra be gelir.' },
    { s: 'This time next week, we will be lying on the beach.', ok: true, why: 'lie → lying; gelecek haftanın o anı.' },
    { s: 'They will are waiting for you at the station.', ok: false, fix: 'They will be waiting for you at the station.', why: 'will’den sonra are değil be gelir.' },
    { s: 'The children will not be sleeping at ten.', ok: true, why: 'Olumsuz: will not be + V-ing.' },
    { s: 'At midnight I will be knowing the result.', ok: false, fix: 'At midnight I will know the result.', why: 'know durum fiilidir, -ing almaz.' }
  ];
  STORY['future-continuous'] = [
    { tr: 'Yarın bu saatte ne yapıyor olacaksın?', hint: 'This time tomorrow I will be… · I won’t be…' },
    { tr: 'Gelecek yaz bu zamanlarda ailen ne yapıyor olacak?', hint: 'Next summer my family will be… · We will be…' },
    { tr: 'Yarın akşam sekizde şehrinde insanlar ne yapıyor olacak?', hint: 'At eight tomorrow people will be… · Children will be…' }
  ];

  /* ---------------- FUTURE PERFECT ---------------- */
  TF['future-perfect'] = [
    { s: 'By next year, I will have finished school.', ok: true, why: 'Gelecek yıla kadar bitmiş olacak: will have + V3.' },
    { s: 'By Friday, she will have finish the report.', ok: false, fix: 'By Friday, she will have finished the report.', why: 'will have’den sonra V3 gelir.' },
    { s: 'Will you have eaten by eight?', ok: true, why: 'Soruda Will başa gelir.' },
    { s: 'They will has left by noon.', ok: false, fix: 'They will have left by noon.', why: 'will’den sonra has değil have gelir.' },
    { s: 'By the time you arrive, we will have cooked dinner.', ok: true, why: 'Sen gelmeden önce bitmiş olacak.' },
    { s: 'By tomorrow, he will have wrote the letter.', ok: false, fix: 'By tomorrow, he will have written the letter.', why: 'write → written (V3).' },
    { s: 'By the end of the day, I will have read fifty pages.', ok: true, why: 'Gün sonuna kadar tamamlanmış olacak.' },
    { s: 'I will have finishing the book by Sunday.', ok: false, fix: 'I will have finished the book by Sunday.', why: 'will have + V3, -ing değil.' },
    { s: 'She will not have arrived by six.', ok: true, why: 'Olumsuz: will not have + V3.' },
    { s: 'By next month, we will finished the house.', ok: false, fix: 'By next month, we will have finished the house.', why: 'have eksik: will have + V3.' },
    { s: 'By the time the guests come, my mother will have made the cake.', ok: true, why: 'make → made (V3).' },
    { s: 'Will they have saw the film by then?', ok: false, fix: 'Will they have seen the film by then?', why: 'see → seen (V3).' },
    { s: 'By summer, my sister will have learned to swim.', ok: true, why: 'Yaza kadar öğrenmiş olacak.' },
    { s: 'By noon, the train will have arrive in Ankara.', ok: false, fix: 'By noon, the train will have arrived in Ankara.', why: 'arrive → arrived (V3).' }
  ];
  STORY['future-perfect'] = [
    { tr: 'Yıl sonuna kadar neleri bitirmiş olacaksın?', hint: 'By the end of the year I will have… · I will not have…' },
    { tr: 'On yıl sonra hayatında neler değişmiş olacak?', hint: 'In ten years I will have… · By then we will have…' },
    { tr: 'Bu akşama kadar bugün neleri tamamlamış olacaksın?', hint: 'By tonight I will have… · By the time I sleep…' }
  ];

  /* ---------------- FUTURE PERFECT CONTINUOUS ---------------- */
  TF['future-perfect-continuous'] = [
    { s: 'By next month, I will have been working here for two years.', ok: true, why: 'Gelecekteki bir ana kadar süren iş.' },
    { s: 'By six, she will have been wait for three hours.', ok: false, fix: 'By six, she will have been waiting for three hours.', why: 'been’den sonra fiil -ing alır.' },
    { s: 'By the time he arrives, we will have been driving for five hours.', ok: true, why: 'O gelene kadar beş saattir sürüyor olacak.' },
    { s: 'By summer, they will have be living here for a year.', ok: false, fix: 'By summer, they will have been living here for a year.', why: 'will have’den sonra been gelir.' },
    { s: 'How long will you have been studying by the exam?', ok: true, why: '"How long" süre sorar.' },
    { s: 'By noon, he will has been running for two hours.', ok: false, fix: 'By noon, he will have been running for two hours.', why: 'will’den sonra has değil have gelir.' },
    { s: 'By the end of the year, she will have been teaching for ten years.', ok: true, why: 'Yıl sonuna kadarki toplam süre.' },
    { s: 'By Friday, I will been working on this project for a month.', ok: false, fix: 'By Friday, I will have been working on this project for a month.', why: 'have eksik: will have been + V-ing.' },
    { s: 'By evening, it will have been raining for two days.', ok: true, why: 'Akşama kadar iki gündür yağıyor olacak.' },
    { s: 'By next week, we will have been knew each other for a year.', ok: false, fix: 'By next week, we will have known each other for a year.', why: 'know durum fiilidir; will have + V3 kullanılır.' },
    { s: 'By the time we finish, we will have been cooking all afternoon.', ok: true, why: 'Bitirene kadar süren iş.' },
    { s: 'By midnight, they will have been talked for hours.', ok: false, fix: 'By midnight, they will have been talking for hours.', why: 'been’den sonra V-ing gelir.' },
    { s: 'By summer, my father will have been running this shop for twenty years.', ok: true, why: 'run → running; toplam süre: for twenty years.' },
    { s: 'Next year we will have been live in Izmir for ten years.', ok: false, fix: 'Next year we will have been living in Izmir for ten years.', why: 'been’den sonra fiil -ing alır.' },
    { s: 'By eight, the children will have been sleeping for an hour.', ok: true, why: 'Sekize kadar bir saattir uyuyor olacaklar.' },
    { s: 'By then, she will have been reading the book for a month.', ok: true, why: '"By then" gelecekteki anı, "for a month" toplam süreyi verir.' }
  ];
  STORY['future-perfect-continuous'] = [
    { tr: 'Gelecek yıl bu zamanda neyi ne kadar süredir yapıyor olacaksın?', hint: 'By next year I will have been… for…' },
    { tr: 'Okulunda ya da işinde ne kadar süredir bulunuyor olacaksın?', hint: 'By June I will have been studying / working… for…' },
    { tr: 'Bu akşam olduğunda bugün kaç saattir neyle uğraşıyor olacaksın?', hint: 'By this evening I will have been… for… hours' }
  ];

  /* doğru/yanlış cümlelerinde geçip sözlükte olmayan kelimeler */
  KI.glossary.addWords([
    'secret|sır|isim',
    'lying|uzanıyor, yatıyor (lie fiilinin -ing hâli)|fiil'
  ]);

  KI.selftest = {
    tf: function (id) { return TF[id] || []; },
    stories: function (id) { return STORY[id] || []; },
    /* Cümle kurma havuzu: o zamanın örneklerinden 4-12 kelimelik ilk 12'si.
       Sabit seçim, havuzun her girişte aynı 50 sorudan oluşmasını sağlar. */
    build: function (t) {
      return (t && t.examples ? t.examples : []).filter(function (ex) {
        var n = ex.en.split(/\s+/).length;
        return n >= 4 && n <= 12;
      }).slice(0, 12);
    },
    _tf: TF,
    _story: STORY
  };
})(window.KI);
