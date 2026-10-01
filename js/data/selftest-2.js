/* ============================================================
   Gramer Atlası - selftest-2.js
   "Kendini dene" havuzunun ikinci dalgası. Test artık her türden
   10 soru soruyor (10 boşluk doldurma + 10 doğru/yanlış + 10 cümle
   kurma + 1 hikâye); her girişte farklı bir set çıksın diye havuz
   her türde 10'un belirgin şekilde üstünde tutulur:
     - TF    : zaman başına +16 doğru/yanlış (toplam ~30)
     - BLANK : zaman başına +10 boşluk doldurma (tenses.quiz'e eklenir)
     - STORY : zaman başına +7 hikâye görevi (toplam 10)
   selftest.js'ten SONRA yüklenmelidir.
   ============================================================ */
(function (KI) {
  'use strict';

  var TF = {}, BLANK = {}, STORY = {};
  function tf(s, fix, why) { return fix ? { s: s, ok: false, fix: fix, why: why } : { s: s, ok: true, why: why || '' }; }
  function bl(q, options, answer, why) { return { q: q, options: options, answer: answer, why: why }; }
  function st(tr, hint) { return { tr: tr, hint: hint }; }

  /* ---------------- PRESENT SIMPLE ---------------- */
  TF['present-simple'] = [
    tf('My sister works in a hospital.', null, 'she → works.'),
    tf('The baby cry every night.', 'The baby cries every night.', 'it → cries (y → ies).'),
    tf('Cats do not like water.', null, 'Genel doğru; çoğul özne → do not.'),
    tf('My uncle watchs the news every evening.', 'My uncle watches the news every evening.', '-ch ile biten fiile -es eklenir.'),
    tf('How often do you visit your grandparents?', null, '"How often" sıklık sorar.'),
    tf('She studys English every day.', 'She studies English every day.', 'y ile biten fiil: study → studies.'),
    tf('The museum opens at ten.', null, 'Sabit program.'),
    tf('We doesn’t eat meat on Fridays.', 'We don’t eat meat on Fridays.', 'we ile don’t kullanılır.'),
    tf('He always brushes his teeth before bed.', null, '-sh ile biten fiil: brushes.'),
    tf('Where does your father works?', 'Where does your father work?', 'does’tan sonra fiil yalın kalır.'),
    tf('It snows a lot in Erzurum.', null, 'Genel bir durum: it → snows.'),
    tf('I am go to school by bus every day.', 'I go to school by bus every day.', 'Geniş zamanda am / is / are ile yalın fiil birlikte kullanılmaz.'),
    tf('My parents drink tea after dinner.', null, 'Çoğul özne: drink (eksiz).'),
    tf('Ali have two brothers.', 'Ali has two brothers.', 'Ali = he → has.'),
    tf('Does the bus stop here?', null, 'Soruda Does + yalın fiil.'),
    tf('They doesn’t live in this city.', 'They don’t live in this city.', 'they ile don’t kullanılır.')
  ];
  BLANK['present-simple'] = [
    bl('Annem her pazar börek yapar. → My mother ___ börek every Sunday.', ['make', 'makes', 'is making', 'made'], 1, 'she → makes.'),
    bl('Kardeşim futbol oynamayı sever. → My brother ___ playing football.', ['like', 'likes', 'is liking', 'liked'], 1, 'he → likes; like durum fiilidir.'),
    bl('___ they speak Turkish?', ['Does', 'Do', 'Are', 'Is'], 1, 'they ile soru Do ile kurulur.'),
    bl('The baby ___ a lot at night.', ['cry', 'crys', 'cries', 'is cry'], 2, 'y ile biten fiil: cry → cries.'),
    bl('Biz pazartesi günleri çalışmayız. → We ___ on Mondays.', ['don’t work', 'doesn’t work', 'aren’t work', 'not work'], 0, 'we → don’t + yalın fiil.'),
    bl('Hangisi doğru?', ['She wash the dishes every day.', 'She washes the dishes every day.', 'She washing the dishes every day.', 'She is wash the dishes every day.'], 1, '-sh ile biten fiile -es: washes.'),
    bl('How often ___ your sister call you?', ['do', 'does', 'is', 'has'], 1, 'your sister = she → does.'),
    bl('Okul saat sekizde başlar. → School ___ at eight.', ['start', 'starts', 'is starting', 'started'], 1, 'Sabit program.'),
    bl('My father ___ coffee; he prefers tea.', ['doesn’t drink', 'don’t drink', 'isn’t drink', 'not drinks'], 0, 'he → doesn’t + yalın fiil.'),
    bl('Hangisi yanlış?', ['I live in Bursa.', 'He live in Izmir.', 'We live in Konya.', 'They live in Rize.'], 1, 'he ile lives olmalı.')
  ];
  STORY['present-simple'] = [
    st('En sevdiğin yemeği ve onu ne zaman yediğini anlat.', 'My favourite food is… · I eat it… · My mother makes…'),
    st('Bir arkadaşını tanıt: ne yapar, neyi sever, neyi sevmez?', 'My friend… · She likes… · She doesn’t like…'),
    st('Okulda ya da işte sıradan bir gününü anlat.', 'I start at… · I usually… · After lunch I…'),
    st('Şehrini ya da köyünü anlat: insanlar orada ne yapar?', 'People in my town… · In summer we…'),
    st('Sevdiğin bir hayvanı anlat: ne yer, nerede yaşar?', 'Cats sleep… · My dog eats… · It likes…'),
    st('Hafta içi akşamlarını nasıl geçirirsin?', 'In the evening I… · I never… · I often…'),
    st('Ailende her yıl tekrarlanan bir geleneği anlat.', 'Every year we… · My grandmother cooks…')
  ];

  /* ---------------- PRESENT CONTINUOUS ---------------- */
  TF['present-continuous'] = [
    tf('My mother is talking on the phone right now.', null, '"right now" şu anı gösterir.'),
    tf('Look! It snowing.', 'Look! It is snowing.', 'is eksik: özne + is + V-ing.'),
    tf('We are not watching television now.', null, 'Olumsuz: are not + V-ing.'),
    tf('Why you are crying?', 'Why are you crying?', 'Soruda are özneden önce gelir.'),
    tf('The students are writing an exam at the moment.', null, '"at the moment" şu an.'),
    tf('He is swiming in the sea.', 'He is swimming in the sea.', 'swim → swimming (son harf ikilenir).'),
    tf('I am looking for my keys.', null, 'I → am + V-ing.'),
    tf('She is understanding the lesson now.', 'She understands the lesson now.', 'understand durum fiilidir, -ing almaz.'),
    tf('Is your brother sleeping?', null, 'Soruda Is başa gelir.'),
    tf('They are play cards in the garden.', 'They are playing cards in the garden.', 'are’dan sonra fiil -ing alır.'),
    tf('Be quiet! The baby is sleeping.', null, 'Şu anda süren iş.'),
    tf('I is drinking tea.', 'I am drinking tea.', 'I ile am kullanılır.'),
    tf('This week I am working from home.', null, 'Geçici durum: this week.'),
    tf('Are you hear that noise?', 'Do you hear that noise?', 'hear durum fiilidir; geniş zamanla sorulur.'),
    tf('The children are not doing their homework.', null, 'Olumsuz: are not + V-ing.'),
    tf('She is siting next to me.', 'She is sitting next to me.', 'sit → sitting (son harf ikilenir).')
  ];
  BLANK['present-continuous'] = [
    bl('Şu anda yağmur yağıyor. → It ___ now.', ['rains', 'is raining', 'rained', 'raining'], 1, 'Şu an süren olay: is + V-ing.'),
    bl('Listen! The birds ___.', ['sing', 'are singing', 'is singing', 'sang'], 1, 'Çoğul özne: are singing.'),
    bl('___ you waiting for the bus?', ['Do', 'Is', 'Are', 'Am'], 2, 'you ile Are.'),
    bl('Şu anda kitap okumuyorum. → I ___ a book now.', ['am not reading', 'don’t read', 'not reading', 'isn’t reading'], 0, 'I → am not + V-ing.'),
    bl('Hangisi doğru?', ['He is runing in the park.', 'He is running in the park.', 'He running in the park.', 'He are running in the park.'], 1, 'run → running.'),
    bl('Look! The cat ___ the fish.', ['eats', 'is eating', 'eat', 'are eating'], 1, '"Look!" şu anı gösterir.'),
    bl('Bu hafta babam geç saatlere kadar çalışıyor. → This week my father ___ late.', ['works', 'is working', 'worked', 'work'], 1, 'Geçici durum: is working.'),
    bl('Hangisi yanlış?', ['I am cooking.', 'She is cooking.', 'They is cooking.', 'We are cooking.'], 2, 'they ile are.'),
    bl('What ___ your sister doing now?', ['is', 'are', 'does', 'do'], 0, 'your sister = she → is.'),
    bl('I ___ this soup. It is delicious!', ['am loving', 'love', 'loving', 'am love'], 1, 'love durum fiili olarak geniş zamanda kullanılır.')
  ];
  STORY['present-continuous'] = [
    st('Pencereden dışarı bak: şu anda neler oluyor?', 'A car is… · Children are… · The sun is…'),
    st('Telefonda ailene şu anda ne yaptığını anlat.', 'I am sitting… · I am eating… · My brother is…'),
    st('Bir düğün ya da bayram sahnesi hayal et: insanlar ne yapıyor?', 'People are dancing… · My aunt is…'),
    st('Bu ay hangi yeni şeyleri öğreniyor ya da deniyorsun?', 'This month I am learning… · I am trying…'),
    st('Bir futbol maçını canlı anlatır gibi yaz.', 'Ali is running… · The players are…'),
    st('Mutfakta şu anda neler oluyor?', 'My mother is cooking… · The water is boiling…'),
    st('Şu anda hava nasıl, sokakta insanlar ne yapıyor?', 'It is raining… · People are carrying…')
  ];

  /* ---------------- PRESENT PERFECT ---------------- */
  TF['present-perfect'] = [
    tf('I have lost my phone.', null, 'Sonucu şimdi önemli: telefon hâlâ kayıp.'),
    tf('She has ate all the cake.', 'She has eaten all the cake.', 'eat → ate → eaten.'),
    tf('Have you finished your homework yet?', null, '"yet" soruda cümle sonunda.'),
    tf('We have went to Antalya twice.', 'We have been to Antalya twice.', 'have + V3; "gidip gelmek" için been to.'),
    tf('My parents have never seen snow.', null, '"never" have ile V3 arasına girer.'),
    tf('I have knew him for five years.', 'I have known him for five years.', 'know → knew → known.'),
    tf('She has just left the house.', null, '"just" az önce olanı gösterir.'),
    tf('He has visit his uncle.', 'He has visited his uncle.', 'has’ten sonra V3: visited.'),
    tf('We have already eaten lunch.', null, '"already" have ile V3 arasına girer.'),
    tf('They haven’t finish yet.', 'They haven’t finished yet.', 'haven’t’tan sonra V3.'),
    tf('Has your sister ever been to Trabzon?', null, 'Deneyim sorusu: Has + özne + ever + V3.'),
    tf('I have bought a car last year.', 'I bought a car last year.', '"last year" belli bir geçmiş: Past Simple.'),
    tf('The rain has stopped.', null, 'Sonucu şimdi görüyoruz.'),
    tf('She have lived here since 2010.', 'She has lived here since 2010.', 'she ile has kullanılır.'),
    tf('I have read this book three times.', null, 'Hayat boyu sayı: Present Perfect.'),
    tf('Have she called you?', 'Has she called you?', 'she ile soru Has ile kurulur.')
  ];
  BLANK['present-perfect'] = [
    bl('Anahtarlarımı kaybettim (hâlâ yok). → I ___ my keys.', ['lost', 'have lost', 'am losing', 'had lost'], 1, 'Sonucu şimdi önemli.'),
    bl('___ you ever ___ to Cappadocia?', ['Did / go', 'Have / been', 'Has / been', 'Are / going'], 1, 'Deneyim: Have you ever been to…'),
    bl('She ___ her homework yet.', ['hasn’t finished', 'didn’t finished', 'haven’t finished', 'isn’t finished'], 0, 'she → hasn’t + V3; yet olumsuzda.'),
    bl('Hangisi doğru?', ['I have saw that film.', 'I have seen that film.', 'I have see that film.', 'I has seen that film.'], 1, 'see → saw → seen.'),
    bl('We ___ here since 2015.', ['live', 'lived', 'have lived', 'are living'], 2, 'since + Present Perfect.'),
    bl('Öğle yemeğini zaten yedik. → We ___ lunch.', ['already ate', 'have already eaten', 'has already eaten', 'are already eating'], 1, 'already + have + V3.'),
    bl('He ___ his leg, so he can’t play today.', ['has broken', 'broke yesterday', 'is breaking', 'breaks'], 0, 'Sonucu bugün: has broken.'),
    bl('Hangisi yanlış?', ['They have arrived.', 'She has arrived.', 'He have arrived.', 'I have arrived.'], 2, 'he ile has.'),
    bl('How many times ___ you ___ this book?', ['have / read', 'did / reading', 'are / reading', 'has / read'], 0, 'Hayat boyu sayı: have + read (V3).'),
    bl('I ___ him since we were children.', ['know', 'knew', 'have known', 'am knowing'], 2, 'since + Present Perfect; know durum fiili.')
  ];
  STORY['present-perfect'] = [
    st('Hiç yaşamadığın ama yaşamak istediğin şeyleri anlat.', 'I have never… · I have always wanted…'),
    st('Bu hafta neler değişti? Yeni ne öğrendin?', 'This week I have learned… · I have started…'),
    st('Gittiğin şehirleri ve gördüğün yerleri anlat.', 'I have been to… · I have seen…'),
    st('Evinde son zamanlarda neler değişti?', 'We have painted… · My father has bought…'),
    st('Okuduğun kitapları ya da izlediğin filmleri anlat.', 'I have read… · I have watched… · I haven’t seen…'),
    st('Bir arkadaşını ne zamandır tanıyorsun, birlikte neler yaptınız?', 'I have known… since… · We have travelled…'),
    st('Bugün henüz yapmadığın işleri anlat.', 'I haven’t… yet · I have already…')
  ];

  /* ---------------- PRESENT PERFECT CONTINUOUS ---------------- */
  TF['present-perfect-continuous'] = [
    tf('She has been crying for an hour.', null, 'Bir saattir süren iş.'),
    tf('I have been waited for you all morning.', 'I have been waiting for you all morning.', 'been’den sonra V-ing gelir.'),
    tf('We have been walking since breakfast.', null, '"since" başlangıcı verir.'),
    tf('How long are you learning English?', 'How long have you been learning English?', 'Süre sorusu: How long have you been + V-ing.'),
    tf('My father has been working in the garden all day.', null, 'Gün boyu süren iş.'),
    tf('They has been building the bridge for two years.', 'They have been building the bridge for two years.', 'they ile have.'),
    tf('It has been snowing since Monday.', null, 'Pazartesiden beri süren olay.'),
    tf('She has been owning this car for years.', 'She has owned this car for years.', 'own durum fiilidir.'),
    tf('Have you been running? You look tired.', null, 'Şu anki görüntünün sebebi.'),
    tf('He been playing games since noon.', 'He has been playing games since noon.', 'has eksik.'),
    tf('I have been reading this book since Friday.', null, 'Cumadan beri süren iş.'),
    tf('We have been live here for ten years.', 'We have been living here for ten years.', 'been’den sonra V-ing.'),
    tf('The baby has been sleeping for three hours.', null, 'Üç saattir süren iş.'),
    tf('You have being working too hard.', 'You have been working too hard.', 'have’den sonra been gelir.'),
    tf('My grandmother has been cooking all week.', null, 'Hafta boyu süren iş.'),
    tf('It have been raining all morning.', 'It has been raining all morning.', 'it ile has.')
  ];
  BLANK['present-perfect-continuous'] = [
    bl('Bir saattir bekliyorum. → I ___ for an hour.', ['wait', 'am waiting', 'have been waiting', 'waited'], 2, 'for + süre: have been + V-ing.'),
    bl('She ___ English since 2019.', ['has been learning', 'is learning', 'learns', 'have been learning'], 0, 'since; she → has been learning.'),
    bl('How long ___ you ___ here?', ['have / been working', 'are / working', 'did / work', 'has / been working'], 0, 'you → have been working.'),
    bl('Hangisi doğru?', ['It has been rain all day.', 'It has been raining all day.', 'It have been raining all day.', 'It is been raining all day.'], 1, 'has been + V-ing.'),
    bl('Ellerin kirli. Ne yapıyordun? → Your hands are dirty. What ___?', ['have you been doing', 'did you do', 'are you doing', 'do you do'], 0, 'Şu anki sonucun sebebi.'),
    bl('They ___ football for three hours.', ['has been playing', 'have been playing', 'are play', 'have played been'], 1, 'they → have been.'),
    bl('Hangisi yanlış?', ['I have been reading.', 'She has been reading.', 'We has been reading.', 'They have been reading.'], 2, 'we ile have.'),
    bl('Sabahtan beri ders çalışıyoruz. → We ___ since morning.', ['study', 'are studying', 'have been studying', 'studied'], 2, 'since + have been + V-ing.'),
    bl('He is tired because he ___ all day.', ['has been working', 'works', 'is work', 'worked yesterday'], 0, 'Yorgunluğun sebebi.'),
    bl('I ___ this house for ten years.', ['have been owning', 'have owned', 'own been', 'am owning'], 1, 'own durum fiili: Present Perfect.')
  ];
  STORY['present-perfect-continuous'] = [
    st('Bugün sabahtan beri neler yapıyorsun?', 'Since this morning I have been…'),
    st('Ailende birinin uzun süredir yaptığı bir işi anlat.', 'My father has been working… for…'),
    st('Son günlerde hava nasıl? Ne zamandır böyle?', 'It has been raining for… · It has been getting…'),
    st('Uzun süredir izlediğin bir diziyi ya da okuduğun kitabı anlat.', 'I have been watching… since…'),
    st('Bir hobini anlat: ne zamandır yapıyorsun?', 'I have been playing… for…'),
    st('Neden ellerin kirli ya da nefes nefesesin? Açıkla.', 'I have been painting… · I have been running…'),
    st('Yaşadığın evde ne zamandır oturuyorsun?', 'We have been living here for…')
  ];

  /* ---------------- PAST SIMPLE ---------------- */
  TF['past-simple'] = [
    tf('We went to the beach last summer.', null, 'go → went; last summer.'),
    tf('She buyed a new dress.', 'She bought a new dress.', 'buy → bought (düzensiz).'),
    tf('I didn’t see Ali yesterday.', null, 'didn’t + yalın fiil.'),
    tf('Did they arrived on time?', 'Did they arrive on time?', 'did’den sonra fiil yalın.'),
    tf('My grandfather was a teacher.', null, 'he → was.'),
    tf('They was very tired after the trip.', 'They were very tired after the trip.', 'they ile were.'),
    tf('When did you wake up this morning?', null, 'Soruda did + yalın fiil.'),
    tf('He taked a photo of the sea.', 'He took a photo of the sea.', 'take → took.'),
    tf('She called me two hours ago.', null, '"ago" Past Simple ister.'),
    tf('We didn’t watched the match.', 'We didn’t watch the match.', 'didn’t’ten sonra yalın fiil.'),
    tf('The shop closed early yesterday.', null, 'close → closed.'),
    tf('I am born in 2005.', 'I was born in 2005.', 'Doğum geçmişte: was born.'),
    tf('Ali lost his wallet last week.', null, 'lose → lost.'),
    tf('Where you went last night?', 'Where did you go last night?', 'Soru: Where did + özne + yalın fiil.'),
    tf('They visited the old castle in the morning.', null, 'visit → visited.'),
    tf('Yesterday my mother cook rice.', 'Yesterday my mother cooked rice.', 'yesterday → V2: cooked.')
  ];
  BLANK['past-simple'] = [
    bl('Dün akşam film izledik. → We ___ a film last night.', ['watch', 'watched', 'have watched', 'are watching'], 1, 'last night → V2.'),
    bl('___ you see the match yesterday?', ['Do', 'Did', 'Have', 'Were'], 1, 'Geçmişte soru: Did.'),
    bl('She ___ to school yesterday because she was ill.', ['didn’t go', 'didn’t went', 'don’t go', 'wasn’t go'], 0, 'didn’t + yalın fiil.'),
    bl('Hangisi doğru?', ['I buyed bread.', 'I bought bread.', 'I buy bread yesterday.', 'I have bought bread yesterday.'], 1, 'buy → bought.'),
    bl('Geçen yıl Kapadokya’daydık. → We ___ in Cappadocia last year.', ['was', 'were', 'are', 'been'], 1, 'we → were.'),
    bl('My grandfather ___ in this village fifty years ago.', ['lives', 'lived', 'has lived', 'is living'], 1, 'ago → Past Simple.'),
    bl('Hangisi yanlış?', ['He came home late.', 'He comed home late.', 'He didn’t come home.', 'Did he come home?'], 1, 'come → came.'),
    bl('What time ___ you get up this morning?', ['do', 'did', 'have', 'were'], 1, 'Geçmiş soru: did + yalın fiil.'),
    bl('Telefon çaldı ve ben açtım. → The phone ___ and I answered it.', ['rings', 'rang', 'rung', 'has rung'], 1, 'ring → rang.'),
    bl('They ___ at home last weekend.', ['wasn’t', 'weren’t', 'didn’t', 'don’t'], 1, 'they → weren’t.')
  ];
  STORY['past-simple'] = [
    st('Son tatilini anlat: nereye gittin, neler yaptın?', 'Last summer we went… · We swam… · We ate…'),
    st('İlk okul gününü hatırla ve anlat.', 'On my first day… · I was… · My teacher…'),
    st('Dün akşam neler oldu?', 'Yesterday evening I… · Then I… · After dinner…'),
    st('Bir bayram sabahını anlat.', 'We woke up early… · We visited… · My grandmother gave…'),
    st('Bir şeyi kaybettiğin günü anlat.', 'One day I lost… · I looked… · Finally I found…'),
    st('Büyükanne ya da büyükbabanın gençliğini anlat.', 'My grandfather was… · He lived… · He worked…'),
    st('Geçen ay öğrendiğin yeni bir şeyi anlat.', 'Last month I learned… · I tried… · It was…')
  ];

  /* ---------------- PAST CONTINUOUS ---------------- */
  TF['past-continuous'] = [
    tf('At midnight, we were still talking.', null, 'Gece yarısı süren iş.'),
    tf('I was walk home when it started to rain.', 'I was walking home when it started to rain.', 'was’tan sonra V-ing.'),
    tf('What were they doing when you arrived?', null, 'Soru: were + özne + V-ing.'),
    tf('She were wearing a red dress.', 'She was wearing a red dress.', 'she ile was.'),
    tf('He was not listening to the teacher.', null, 'Olumsuz: was not + V-ing.'),
    tf('While we were eat, the lights went out.', 'While we were eating, the lights went out.', 'were’den sonra V-ing.'),
    tf('The sun was shining and the birds were singing.', null, 'Arka plan anlatımı.'),
    tf('They wasn’t sleeping at ten.', 'They weren’t sleeping at ten.', 'they ile weren’t.'),
    tf('I was cooking when my father came home.', null, 'Süren iş + kısa olay.'),
    tf('When the phone rang, I was have a shower.', 'When the phone rang, I was having a shower.', 'was’tan sonra V-ing.'),
    tf('Were you driving when the accident happened?', null, 'Soruda Were başa gelir.'),
    tf('At eight last night I watching television.', 'At eight last night I was watching television.', 'was eksik.'),
    tf('My brother was playing games all evening.', null, 'Akşam boyu süren iş.'),
    tf('She was owning a small shop then.', 'She owned a small shop then.', 'own durum fiilidir.'),
    tf('While I was reading, my sister was sleeping.', null, 'Aynı anda süren iki iş.'),
    tf('It were raining when we left.', 'It was raining when we left.', 'it ile was.')
  ];
  BLANK['past-continuous'] = [
    bl('Dün saat beşte futbol oynuyorduk. → We ___ football at five yesterday.', ['played', 'were playing', 'was playing', 'are playing'], 1, 'we → were + V-ing.'),
    bl('She ___ when I called her.', ['slept', 'was sleeping', 'were sleeping', 'sleeps'], 1, 'Arayınca süren iş.'),
    bl('What ___ you doing at nine last night?', ['was', 'were', 'did', 'are'], 1, 'you → were.'),
    bl('Hangisi doğru?', ['He was run in the park.', 'He was running in the park.', 'He were running in the park.', 'He running in the park.'], 1, 'was + V-ing.'),
    bl('While I ___ dinner, the phone rang.', ['cooked', 'was cooking', 'am cooking', 'were cooking'], 1, 'While + süren iş.'),
    bl('It ___ heavily when we left the house.', ['rained', 'was raining', 'rains', 'were raining'], 1, 'Çıktığımızda süren olay.'),
    bl('Hangisi yanlış?', ['They were waiting.', 'I was waiting.', 'We was waiting.', 'She was waiting.'], 2, 'we → were.'),
    bl('The children ___ TV when their father came home.', ['watched', 'were watching', 'was watching', 'watch'], 1, 'Süren iş + kısa olay.'),
    bl('O sırada ders çalışmıyordum. → I ___ at that time.', ['wasn’t studying', 'weren’t studying', 'didn’t studying', 'not studied'], 0, 'I → wasn’t + V-ing.'),
    bl('I ___ the answer at that moment.', ['was knowing', 'knew', 'were knowing', 'know'], 1, 'know durum fiili: knew.')
  ];
  STORY['past-continuous'] = [
    st('Bir sürpriz anında etrafındakiler ne yapıyordu?', 'When it happened, people were… · I was…'),
    st('Dün sabah yolda yürürken neler görüyordun?', 'While I was walking… · A man was…'),
    st('Elektrikler kesildiğinde evde herkes ne yapıyordu?', 'When the lights went out, my mother was…'),
    st('Bir bayram sofrasını anlat: o sırada kim ne yapıyordu?', 'My aunt was serving… · The children were…'),
    st('Geçen gece saat on birde ne yapıyordun?', 'At eleven I was… · My family was…'),
    st('Bir yolculuk sırasında pencereden neler görüyordun?', 'The sun was setting… · Cows were…'),
    st('Biri seni aradığında ne yapıyordun ve ne oldu?', 'I was cooking when… · While I was…')
  ];

  /* ---------------- PAST PERFECT ---------------- */
  TF['past-perfect'] = [
    tf('I had already eaten when they called me.', null, 'Aramadan önce yemiştim.'),
    tf('When I arrived, the bus has gone.', 'When I arrived, the bus had gone.', 'Geçmişteki andan önce: had + V3.'),
    tf('She had never flown before that trip.', null, 'fly → flown.'),
    tf('They had took the money before the police came.', 'They had taken the money before the police came.', 'take → taken.'),
    tf('Had you met him before the party?', null, 'Soruda Had başa gelir.'),
    tf('He had not saw the letter.', 'He had not seen the letter.', 'see → seen.'),
    tf('After she had finished her work, she went home.', null, 'Önce iş bitti, sonra eve gitti.'),
    tf('I had wrote three emails before lunch.', 'I had written three emails before lunch.', 'write → written.'),
    tf('The shop had closed by the time we got there.', null, 'Biz varmadan kapanmıştı.'),
    tf('We had leave before the storm started.', 'We had left before the storm started.', 'leave → left (V3).'),
    tf('My father had worked in a factory before he came back to our village.', null, 'Dönmeden önceki iş.'),
    tf('Had they eat before you came?', 'Had they eaten before you came?', 'eat → eaten.'),
    tf('I saw that I had forgotten my bag.', null, 'Unutma, fark etmeden önce oldu.'),
    tf('She was happy because she has passed the exam.', 'She was happy because she had passed the exam.', 'Geçmişteki sevinçten önce: had passed.'),
    tf('By eight, the guests had arrived.', null, 'Sekize kadar gelmişlerdi.'),
    tf('The film had already start when we sat down.', 'The film had already started when we sat down.', 'had’den sonra V3: started.')
  ];
  BLANK['past-perfect'] = [
    bl('Vardığımızda tren gitmişti. → When we arrived, the train ___.', ['left', 'had left', 'has left', 'was leaving'], 1, 'Önce gitti: had left.'),
    bl('She ___ never ___ the sea before she was twenty.', ['had / seen', 'has / seen', 'had / saw', 'did / see'], 0, 'had + V3.'),
    bl('After they ___ dinner, they watched a film.', ['had eaten', 'have eaten', 'had ate', 'eat'], 0, 'Önce yemek: had eaten.'),
    bl('Hangisi doğru?', ['He had went home.', 'He had gone home.', 'He has went home.', 'He had go home.'], 1, 'go → gone.'),
    bl('I couldn’t open the door because I ___ my key.', ['lost', 'had lost', 'have lost', 'was losing'], 1, 'Önceki olay: had lost.'),
    bl('___ you finished the work before he called?', ['Have', 'Had', 'Did', 'Were'], 1, 'Geçmişten önce: Had.'),
    bl('Hangisi yanlış?', ['She had left.', 'They had left.', 'We has left.', 'I had left.'], 2, 'Past Perfect’te her özneyle had.'),
    bl('Ödevimi bitirmemiştim. → I ___ my homework.', ['hadn’t finished', 'didn’t finished', 'haven’t finished', 'wasn’t finish'], 0, 'had not + V3.'),
    bl('By the time the doctor came, the patient ___ better.', ['will get', 'had got', 'has got', 'gets'], 1, 'Doktor gelmeden önce: had got.'),
    bl('The ground was wet because it ___ during the night.', ['rained', 'had rained', 'has rained', 'rains'], 1, 'Islaklığın sebebi daha önce oldu.')
  ];
  STORY['past-perfect'] = [
    st('Bir sınav gününü anlat: o güne kadar neler yapmıştın?', 'Before the exam I had… · I had studied…'),
    st('Bir arkadaşınla yıllar sonra karşılaştığın anı anlat.', 'I hadn’t seen him for… · He had changed…'),
    st('Tatile çıkmadan önce neler hazırlamıştın?', 'Before we left, we had packed… · My father had…'),
    st('Bir filme geç kaldığın günü anlat.', 'When I arrived, the film had already…'),
    st('Bir yemeği ilk kez tattığın anı anlat.', 'I had never eaten… before · My aunt had cooked…'),
    st('Bir sabah uyandığında dışarıda neler olmuştu?', 'When I woke up, it had snowed… · Someone had…'),
    st('Taşındığında eski evinde neler bırakmıştın?', 'We had left… · I had forgotten…')
  ];

  /* ---------------- PAST PERFECT CONTINUOUS ---------------- */
  TF['past-perfect-continuous'] = [
    tf('We had been driving for hours when we saw the sea.', null, 'Denizi görene kadar süren iş.'),
    tf('She had been cook all day, so she was tired.', 'She had been cooking all day, so she was tired.', 'been’den sonra V-ing.'),
    tf('His clothes were dirty because he had been working in the garden.', null, 'Kirin sebebi öncesinde süren iş.'),
    tf('They had being waiting for an hour.', 'They had been waiting for an hour.', 'had’den sonra been.'),
    tf('How long had she been living in Izmir before she married?', null, 'Evlenmeden önceki süre.'),
    tf('I have been sleeping for ten hours when the alarm rang.', 'I had been sleeping for ten hours when the alarm rang.', 'Geçmişteki ana kadar: had been.'),
    tf('It had been snowing for two days when the roads closed.', null, 'Yollar kapanana kadar süren kar.'),
    tf('He had been knowing her for years.', 'He had known her for years.', 'know durum fiili: had known.'),
    tf('I had been studying for three hours before I took a break.', null, 'Moladan önce süren iş.'),
    tf('We had been walk for an hour before we found a restaurant.', 'We had been walking for an hour before we found a restaurant.', 'been’den sonra V-ing.'),
    tf('Had you been waiting long when the bus arrived?', null, 'Soruda Had başa gelir.'),
    tf('The children had been play outside, so they were dirty.', 'The children had been playing outside, so they were dirty.', 'been’den sonra V-ing.'),
    tf('My mother had been working at the bank for twenty years before she left.', null, 'Ayrılmadan önceki toplam süre.'),
    tf('She had been cried, so her eyes were red.', 'She had been crying, so her eyes were red.', 'been’den sonra V-ing.'),
    tf('The phone had been ringing for a minute before I answered it.', null, 'Açana kadar süren çalma.'),
    tf('They had been argue for hours when we came in.', 'They had been arguing for hours when we came in.', 'been’den sonra V-ing.')
  ];
  BLANK['past-perfect-continuous'] = [
    bl('Otobüs geldiğinde yarım saattir bekliyorduk. → We ___ for half an hour when the bus came.', ['were waiting', 'had been waiting', 'have been waiting', 'waited'], 1, 'Geçmişteki ana kadar süren: had been + V-ing.'),
    bl('She was tired because she ___ all day.', ['had been working', 'has been working', 'works', 'was work'], 0, 'Yorgunluğun sebebi.'),
    bl('How long ___ they ___ there before they moved?', ['had / been living', 'have / been living', 'were / living', 'did / living'], 0, 'Taşınmadan önceki süre.'),
    bl('Hangisi doğru?', ['It had been rain all night.', 'It had been raining all night.', 'It have been raining all night.', 'It had raining all night.'], 1, 'had been + V-ing.'),
    bl('His eyes were red. He ___.', ['had been crying', 'has been crying', 'cries', 'had cried been'], 0, 'Geçmişteki görünümün sebebi.'),
    bl('Hangisi yanlış?', ['I had been running.', 'She had been running.', 'They has been running.', 'We had been running.'], 2, 'Her özneyle had.'),
    bl('The ground was wet. It ___ for hours.', ['had been raining', 'has rained', 'is raining', 'rains'], 0, 'Önceden süren yağmur.'),
    bl('We ___ for two hours before we stopped for lunch.', ['had been driving', 'have been driving', 'drove been', 'are driving'], 0, 'Durmadan önce süren iş.'),
    bl('Ali ___ English for five years before he moved to Istanbul.', ['had been learning', 'has been learning', 'learns', 'is learning'], 0, 'Taşınmadan önceki süre.'),
    bl('I ___ him for years before we became friends.', ['had been knowing', 'had known', 'have known', 'knew been'], 1, 'know durum fiili: had known.')
  ];
  STORY['past-perfect-continuous'] = [
    st('Uzun bir yolculuğun sonunu anlat: ne zamandır yoldaydınız?', 'We had been travelling for… when…'),
    st('Bir gün neden çok aç olduğunu anlat.', 'I was hungry because I had been working…'),
    st('Bir arkadaşının gözleri neden kırmızıydı? Hikâyesini yaz.', 'She had been crying… because…'),
    st('Yağmur dindiğinde ne zamandır yağıyordu, ortalık nasıldı?', 'It had been raining for… · The streets…'),
    st('Bir maçı kazanmadan önce ne zamandır çalışıyordun?', 'I had been training for…'),
    st('Telefon çaldığında ne kadar süredir uyuyordun?', 'I had been sleeping for… when the phone…'),
    st('Bir projeyi bitirmeden önce ne kadar uğraşmıştın?', 'We had been working on it for…')
  ];

  /* ---------------- FUTURE SIMPLE ---------------- */
  TF['future-simple'] = [
    tf('I think it will be sunny tomorrow.', null, 'Tahmin: will + be.'),
    tf('She will not comes to the meeting.', 'She will not come to the meeting.', 'will not + yalın fiil.'),
    tf('Will they visit us next summer?', null, 'Soruda Will başa gelir.'),
    tf('I will to help you.', 'I will help you.', 'will’den sonra "to" gelmez.'),
    tf('The film will start in ten minutes.', null, 'will + yalın fiil.'),
    tf('Will you can come tomorrow?', 'Will you be able to come tomorrow?', 'will ile can yan yana gelmez: will be able to.'),
    tf('I won’t forget your birthday.', null, 'Söz: won’t = will not.'),
    tf('He will is a doctor one day.', 'He will be a doctor one day.', 'will’den sonra be gelir.'),
    tf('Perhaps we will go to the cinema tonight.', null, 'Belirsiz plan: will.'),
    tf('Tomorrow I will went to school.', 'Tomorrow I will go to school.', 'will + yalın fiil.'),
    tf('The phone is ringing. I will answer it.', null, 'Anlık karar: will.'),
    tf('They wills arrive at six.', 'They will arrive at six.', 'will -s almaz.'),
    tf('Our teacher will give the results next week.', null, 'will + yalın fiil.'),
    tf('Will he helps me?', 'Will he help me?', 'will’den sonra fiil yalın.'),
    tf('One day people will travel to the moon.', null, 'Gelecek tahmini.'),
    tf('I am will call you later.', 'I will call you later.', 'am ile will birlikte kullanılmaz.')
  ];
  BLANK['future-simple'] = [
    bl('Yarın sana uğrayacağım. → I ___ you tomorrow.', ['visit', 'will visit', 'visited', 'am visit'], 1, 'will + yalın fiil.'),
    bl('Sanırım yağmur yağacak. → I think it ___.', ['rains', 'will rain', 'rained', 'will rains'], 1, 'Tahmin: will rain.'),
    bl('___ you help me with my homework?', ['Will', 'Do', 'Are', 'Did'], 0, 'Rica: Will you…?'),
    bl('Hangisi doğru?', ['She will comes.', 'She wills come.', 'She will come.', 'She will to come.'], 2, 'will + yalın fiil.'),
    bl('Merak etme, kimseye söylemeyeceğim. → Don’t worry, I ___ anyone.', ['won’t tell', 'don’t tell', 'will tells', 'am not tell'], 0, 'won’t = will not.'),
    bl('The shop ___ at nine tomorrow.', ['will open', 'opened', 'will opens', 'has opened'], 0, 'will + yalın fiil.'),
    bl('Hangisi yanlış?', ['We will win.', 'They will win.', 'He will wins.', 'I will win.'], 2, 'will’den sonra -s yok.'),
    bl('I’m cold. — I ___ the window.', ['close', 'will close', 'closed', 'am close'], 1, 'Anlık karar: will.'),
    bl('He ___ eighteen next year.', ['is', 'will be', 'was', 'will is'], 1, 'Gelecek: will be.'),
    bl('Maybe they ___ late.', ['will are', 'will be', 'are being', 'were'], 1, 'will + be.')
  ];
  STORY['future-simple'] = [
    st('Gelecek hafta sonu neler yapacaksın?', 'Next weekend I will… · We will…'),
    st('Ailene bir söz ver: bu yıl neleri değiştireceksin?', 'This year I will… · I won’t…'),
    st('Gelecekteki evini hayal et.', 'My house will be… · It will have…'),
    st('Yarın hava nasıl olacak, insanlar ne yapacak? Tahmin et.', 'Tomorrow it will… · People will…'),
    st('Bir arkadaşının doğum günü için neler yapacaksın?', 'I will buy… · We will…'),
    st('Beş yıl sonra ne iş yapacaksın?', 'In five years I will… · I will work…'),
    st('Okulun ya da işin bitince ilk ne yapacaksın?', 'When I finish, I will…')
  ];

  /* ---------------- FUTURE CONTINUOUS ---------------- */
  TF['future-continuous'] = [
    tf('At ten tomorrow, I will be sitting in the exam.', null, 'Yarın onda süren iş.'),
    tf('This time next year, she will be study in Ankara.', 'This time next year, she will be studying in Ankara.', 'will be + V-ing.'),
    tf('Will you be working on Saturday?', null, 'Kibar soru: Will you be + V-ing.'),
    tf('They will be travel all night.', 'They will be travelling all night.', 'will be + V-ing.'),
    tf('Don’t call at seven; we will be having dinner.', null, 'O saatte süren iş.'),
    tf('He will being sleeping at midnight.', 'He will be sleeping at midnight.', 'will’den sonra be.'),
    tf('Tomorrow evening, my parents will be watching the match.', null, 'Yarın akşam süren iş.'),
    tf('I will be wait for you at the door.', 'I will be waiting for you at the door.', 'will be + V-ing.'),
    tf('At noon tomorrow, the children will be playing in the park.', null, 'Belli bir gelecek an.'),
    tf('Will she be come to the meeting?', 'Will she be coming to the meeting?', 'be’den sonra V-ing.'),
    tf('This time tomorrow, we will be driving to Bursa.', null, 'Yarın bu saatte süren iş.'),
    tf('At eight, I will been working.', 'At eight, I will be working.', 'will’den sonra be, been değil.'),
    tf('Next week I will be staying with my grandmother.', null, 'Gelecek hafta süren durum.'),
    tf('They be will waiting for us.', 'They will be waiting for us.', 'Sıra: will + be + V-ing.'),
    tf('In an hour, the plane will be landing.', null, 'Bir saat sonra süren iş.'),
    tf('At six, he will be needing his car.', 'At six, he will need his car.', 'need durum fiilidir.')
  ];
  BLANK['future-continuous'] = [
    bl('Yarın bu saatte uçuyor olacağım. → This time tomorrow I ___.', ['will fly', 'will be flying', 'am flying', 'fly'], 1, 'Gelecekte belli anda süren iş.'),
    bl('At eight tonight, we ___ dinner.', ['will be having', 'will have been', 'are have', 'had'], 0, 'will be + V-ing.'),
    bl('___ you be using the computer this evening?', ['Will', 'Are', 'Do', 'Have'], 0, 'Kibar soru: Will you be…'),
    bl('Hangisi doğru?', ['She will be work.', 'She will working.', 'She will be working.', 'She be will working.'], 2, 'will be + V-ing.'),
    bl('Saat beşte ders çalışıyor olacağım. → At five I ___.', ['will study been', 'will be studying', 'am study', 'studied'], 1, 'will be studying.'),
    bl('Don’t visit at noon; they ___.', ['will be sleeping', 'will sleeping', 'sleeps', 'slept'], 0, 'O saatte süren iş.'),
    bl('Hangisi yanlış?', ['I will be waiting.', 'They will be waiting.', 'He will be waiting.', 'We will are waiting.'], 3, 'will’den sonra be.'),
    bl('This time next week, my father ___ in Germany.', ['will be working', 'works', 'worked', 'will works'], 0, 'Gelecek haftanın o anı.'),
    bl('Yarın akşam maçı izliyor olmayacağım. → I ___ the match tomorrow evening.', ['won’t be watching', 'will not watching', 'don’t watch', 'am not watch'], 0, 'will not be + V-ing.'),
    bl('At midnight, I ___ the answer.', ['will be knowing', 'will know', 'know', 'am knowing'], 1, 'know durum fiili.')
  ];
  STORY['future-continuous'] = [
    st('Gelecek pazar sabahı saat onda ne yapıyor olacaksın?', 'At ten on Sunday I will be…'),
    st('Bayram sabahı ailende kim ne yapıyor olacak?', 'My mother will be… · We will be…'),
    st('Bir sonraki tatilinde bu saatlerde ne yapıyor olacaksın?', 'This time next summer I will be…'),
    st('Gelecek yıl bu zamanda nerede yaşıyor olacaksın?', 'Next year I will be living…'),
    st('Yarın öğlen okulda ya da işte insanlar ne yapıyor olacak?', 'At noon my friends will be…'),
    st('Bir maç günü stadyumda neler oluyor olacak?', 'People will be singing… · The players will be…'),
    st('Yarın gece yarısı şehrinde neler oluyor olacak?', 'At midnight most people will be…')
  ];

  /* ---------------- FUTURE PERFECT ---------------- */
  TF['future-perfect'] = [
    tf('By tomorrow, I will have finished this book.', null, 'Yarına kadar bitmiş olacak.'),
    tf('By noon, they will have arrive.', 'By noon, they will have arrived.', 'will have + V3.'),
    tf('Will she have left by the time we get there?', null, 'Soruda Will başa gelir.'),
    tf('By next week, he will have went to Izmir.', 'By next week, he will have gone to Izmir.', 'go → gone.'),
    tf('By the end of the year, we will have saved enough money.', null, 'Yıl sonuna kadar tamamlanmış.'),
    tf('I will have finish my work by five.', 'I will have finished my work by five.', 'will have + V3.'),
    tf('By June, I will have lived here for ten years.', null, 'Haziran itibarıyla toplam süre.'),
    tf('By Friday, she will has written the report.', 'By Friday, she will have written the report.', 'will’den sonra have.'),
    tf('By the time you wake up, I will have made breakfast.', null, 'Sen uyanmadan bitmiş olacak.'),
    tf('By tonight, we will have ate all the cake.', 'By tonight, we will have eaten all the cake.', 'eat → eaten.'),
    tf('They will not have finished the bridge by summer.', null, 'Olumsuz: will not have + V3.'),
    tf('By next month, I will had learned to drive.', 'By next month, I will have learned to drive.', 'will’den sonra have.'),
    tf('By ten, the guests will have gone home.', null, 'go → gone.'),
    tf('Will you have finishing by six?', 'Will you have finished by six?', 'will have + V3.'),
    tf('By the end of the week, I will have read three books.', null, 'read → read (V3).'),
    tf('By then, she will have forget his name.', 'By then, she will have forgotten his name.', 'forget → forgotten.')
  ];
  BLANK['future-perfect'] = [
    bl('Yarına kadar ödevimi bitirmiş olacağım. → By tomorrow I ___ my homework.', ['will finish', 'will have finished', 'have finished', 'will finished'], 1, 'By + gelecek an: will have + V3.'),
    bl('By the time you arrive, we ___ dinner.', ['will have eaten', 'will eating', 'have eaten', 'will have ate'], 0, 'eat → eaten.'),
    bl('___ they have finished the house by May?', ['Will', 'Do', 'Have', 'Are'], 0, 'Soru: Will + özne + have + V3.'),
    bl('Hangisi doğru?', ['She will have write it.', 'She will have written it.', 'She will has written it.', 'She will written it.'], 1, 'will have + V3.'),
    bl('By 2030, I ___ university.', ['will have finished', 'will be finish', 'finish', 'have finished'], 0, 'Gelecekteki bir tarihe kadar bitmiş.'),
    bl('Akşama kadar gelmemiş olacaklar. → They ___ by the evening.', ['won’t have arrived', 'won’t arrived', 'haven’t arrived', 'will not arriving'], 0, 'will not have + V3.'),
    bl('Hangisi yanlış?', ['I will have gone.', 'He will have gone.', 'They will have went.', 'We will have gone.'], 2, 'go → gone.'),
    bl('By the end of this month, he ___ ten books.', ['will have read', 'will read been', 'reads', 'has read'], 0, 'will have + read (V3).'),
    bl('The film ___ by the time we get to the cinema.', ['will have started', 'will start been', 'starts', 'started'], 0, 'Biz varmadan başlamış olacak.'),
    bl('By next year, my parents ___ married for thirty years.', ['will have been', 'will be been', 'have been', 'will have be'], 0, 'be → been: will have been.')
  ];
  STORY['future-perfect'] = [
    st('Bu hafta sonuna kadar neleri yapmış olacaksın?', 'By Sunday I will have…'),
    st('Yaz bitene kadar neleri başarmış olacaksın?', 'By the end of summer I will have…'),
    st('Otuz yaşına geldiğinde hayatında neler olmuş olacak?', 'By the time I am thirty, I will have…'),
    st('Bu kursu bitirdiğinde neleri öğrenmiş olacaksın?', 'By the end of the course I will have learned…'),
    st('Misafirler gelene kadar evde neler hazırlanmış olacak?', 'By the time the guests arrive, we will have…'),
    st('Gelecek yıla kadar hangi yerleri görmüş olacaksın?', 'By next year I will have visited…'),
    st('Bu akşam yatana kadar neleri bitirmiş olacaksın?', 'By bedtime I will have…')
  ];

  /* ---------------- FUTURE PERFECT CONTINUOUS ---------------- */
  TF['future-perfect-continuous'] = [
    tf('By noon, I will have been studying for four hours.', null, 'Öğlene kadar dört saattir.'),
    tf('By June, she will have been work here for a year.', 'By June, she will have been working here for a year.', 'been’den sonra V-ing.'),
    tf('By the time you arrive, we will have been waiting for an hour.', null, 'Sen gelene kadar süre.'),
    tf('By six, they will be have been driving for ten hours.', 'By six, they will have been driving for ten hours.', 'Sıra: will + have + been + V-ing.'),
    tf('Next month, my father will have been working at this school for twenty years.', null, 'Gelecek ay itibarıyla süre.'),
    tf('By evening, he will have be sleeping for twelve hours.', 'By evening, he will have been sleeping for twelve hours.', 'have’den sonra been.'),
    tf('How long will you have been living here by next year?', null, '"How long" süre sorar.'),
    tf('By ten, I will has been reading for two hours.', 'By ten, I will have been reading for two hours.', 'will’den sonra have.'),
    tf('By the end of the day, the workers will have been building the wall for nine hours.', null, 'Gün sonuna kadarki süre.'),
    tf('By Friday, we will have been owning this house for a year.', 'By Friday, we will have owned this house for a year.', 'own durum fiilidir.'),
    tf('In May, she will have been learning Turkish for three years.', null, 'Mayıs itibarıyla süre.'),
    tf('By summer, they will been playing together for ten years.', 'By summer, they will have been playing together for ten years.', 'have eksik.'),
    tf('By midnight, it will have been snowing for a whole day.', null, 'Gece yarısına kadar süre.'),
    tf('By noon, the baby will have been cry for an hour.', 'By noon, the baby will have been crying for an hour.', 'been’den sonra V-ing.'),
    tf('By the time we land, we will have been flying for seven hours.', null, 'İnene kadar süre.'),
    tf('By next week, I will have been wait for this letter for a month.', 'By next week, I will have been waiting for this letter for a month.', 'been’den sonra V-ing.')
  ];
  BLANK['future-perfect-continuous'] = [
    bl('Saat altıya kadar üç saattir yürüyor olacağız. → By six, we ___ for three hours.', ['will be walking', 'will have been walking', 'have been walking', 'will have walked been'], 1, 'Gelecekteki ana kadar süre.'),
    bl('By June, she ___ here for ten years.', ['will have been teaching', 'will be teach', 'has been teaching', 'will teaching'], 0, 'will have been + V-ing.'),
    bl('How long ___ you ___ by the end of the year?', ['will / have been working', 'have / been working', 'are / working', 'will / working'], 0, 'How long will you have been working…'),
    bl('Hangisi doğru?', ['He will have been run.', 'He will have been running.', 'He will has been running.', 'He will been running.'], 1, 'will have been + V-ing.'),
    bl('Hangisi yanlış?', ['I will have been waiting.', 'They will have been waiting.', 'She will have been waiting.', 'We will have being waiting.'], 3, 'have’den sonra been.'),
    bl('By the time he arrives, I ___ for two hours.', ['will have been waiting', 'waited', 'am waiting', 'had been waiting'], 0, 'O gelene kadar süre.'),
    bl('Gelecek ay burada beş yıldır yaşıyor olacağız. → Next month we ___ here for five years.', ['will have been living', 'have been living', 'will live', 'lived'], 0, 'will have been living.'),
    bl('By ten tonight, the children ___ for three hours.', ['will have been sleeping', 'will sleep', 'slept', 'will have slept been'], 0, 'will have been sleeping.'),
    bl('By next year, I ___ him for ten years.', ['will have been knowing', 'will have known', 'will know been', 'have known'], 1, 'know durum fiili: will have known.'),
    bl('By the end of the match, they ___ for ninety minutes.', ['will have been playing', 'will play', 'played', 'have played'], 0, 'Maç sonuna kadar süre.')
  ];
  STORY['future-perfect-continuous'] = [
    st('Mezun olduğunda kaç yıldır okuyor olacaksın?', 'By the time I graduate, I will have been studying for…'),
    st('Yarın akşama kadar kaç saattir çalışıyor olacaksın?', 'By tomorrow evening I will have been working for…'),
    st('Bir yolculuğun sonunda kaç saattir yolda olacaksın?', 'By the time we arrive, we will have been travelling…'),
    st('Gelecek yıl İngilizceyi ne kadar süredir öğreniyor olacaksın?', 'By next year I will have been learning English for…'),
    st('Ailenin bir geleneği gelecek yıl kaç yıldır sürüyor olacak?', 'Next year my family will have been… for…'),
    st('Bir hobini gelecek yaz kaç yıldır yapıyor olacaksın?', 'By next summer I will have been playing…'),
    st('Bu akşam yatana kadar kaç saattir uyanık olacaksın?', 'By bedtime I will have been… for…')
  ];

  /* doğru/yanlış cümlelerinde geçip sözlükte olmayan kelimeler */
  KI.glossary.addWords(['marry|evlenmek|fiil']);

  /* ---------------- havuzlara ekle ---------------- */
  var base = KI.selftest;
  Object.keys(TF).forEach(function (id) { base._tf[id] = (base._tf[id] || []).concat(TF[id]); });
  Object.keys(STORY).forEach(function (id) { base._story[id] = (base._story[id] || []).concat(STORY[id]); });
  if (KI.tenses) {
    KI.tenses.list.forEach(function (t) {
      if (BLANK[t.id]) t.quiz = (t.quiz || []).concat(BLANK[t.id]);
    });
  }
})(window.KI);
