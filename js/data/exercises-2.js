/* ============================================================
   Kolay İngilizce — exercises-2.js
   Alıştırma sayısını 300'ün üzerine çıkaran ikinci soru dalgası.
   Biçim: { q, options, answer (0'dan başlar), why }
   ============================================================ */
(function (KI) {
  'use strict';

  var EXTRA = {};

  EXTRA['present-simple'] = [
    { q: 'Babam her sabah erken kalkar. → My father ___ up early every morning.', options: ['get', 'gets', 'is getting', 'got'], answer: 1, why: 'he → gets (3. tekil şahıs -s eki).' },
    { q: 'Su 0 derecede donar. → Water ___ at 0 degrees.', options: ['freeze', 'freezes', 'is freezing', 'froze'], answer: 1, why: 'Değişmeyen bilimsel bir gerçek.' },
    { q: 'Tren saat dokuzda kalkar. → The train ___ at nine.', options: ['leave', 'leaves', 'is leaving', 'left'], answer: 1, why: 'Sabit tarife: Present Simple.' },
    { q: 'Hangisi yanlış?', options: ['She works in a bank.', 'He go to school by bus.', 'They live in Ankara.', 'It rains a lot here.'], answer: 1, why: 'he ile "goes" olmalı.' },
    { q: 'Kardeşim hiç kahve içmez. → My brother ___ coffee.', options: ['never drinks', 'drinks never', 'is never drinking', 'never drink'], answer: 0, why: '"never" fiilden önce gelir; he → drinks.' },
    { q: 'Dükkân pazar günleri kapalı olur. → The shop ___ on Sundays.', options: ['close', 'closes', 'is closing', 'closed'], answer: 1, why: 'Değişmeyen düzen.' },
    { q: 'Onlar her yaz Karadeniz’e gider. → They ___ to the Black Sea every summer.', options: ['goes', 'go', 'are going', 'went'], answer: 1, why: 'they → go (çoğul, -s almaz).' },
    { q: 'Hangisi doğru?', options: ['Cats sleeps a lot.', 'Cats sleep a lot.', 'Cats is sleeping a lot.', 'Cats slept a lot.'], answer: 1, why: 'Çoğul özne: sleep (eksiz).' },
    { q: 'Ben genellikle işe yürüyerek giderim. → I usually ___ to work.', options: ['walk', 'walks', 'am walking', 'walked'], answer: 0, why: 'I → walk (eksiz).' },
    { q: 'Annem asla televizyon izlemez. → My mother ___ television.', options: ['doesn’t watch', 'don’t watch', 'isn’t watching', 'didn’t watch'], answer: 0, why: 'she → doesn’t + yalın fiil.' },
    { q: 'Güneş doğudan doğar. → The sun ___ in the east.', options: ['rise', 'rises', 'is rising', 'rose'], answer: 1, why: 'Genel doğru.' },
    { q: 'Hangisi yanlış?', options: ['Does she speak English?', 'Does she speaks English?', 'She doesn’t speak French.', 'Do you like tea?'], answer: 1, why: 'does’tan sonra fiil yalın kalır: speak.' },
    { q: 'Biz her cuma camiye gideriz. → We ___ to the mosque every Friday.', options: ['goes', 'go', 'are going', 'went'], answer: 1, why: 'we → go.' },
    { q: 'Köpek genelde bahçede uyur. → The dog usually ___ in the garden.', options: ['sleep', 'sleeps', 'is sleeping', 'slept'], answer: 1, why: 'it/dog → sleeps.' },
    { q: 'Hangisi doğru bir soru?', options: ['Where he lives?', 'Where does he live?', 'Where he does live?', 'Where lives he?'], answer: 1, why: 'Soru kalıbı: soru kelimesi + does + özne + fiil.' },
    { q: 'Ekmekçi her gün taze ekmek pişirir. → The baker ___ fresh bread every day.', options: ['bake', 'bakes', 'is baking', 'baked'], answer: 1, why: 'the baker (he/she) → bakes.' }
  ];

  EXTRA['present-continuous'] = [
    { q: 'Şu anda yemek pişiriyorum. → I ___ dinner right now.', options: ['cook', 'cooks', 'am cooking', 'cooked'], answer: 2, why: 'I → am + fiil-ing.' },
    { q: 'Bak! Çocuklar bahçede oynuyor. → Look! The children ___ in the garden.', options: ['play', 'plays', 'are playing', 'played'], answer: 2, why: '"Look!" şu anı gösterir.' },
    { q: 'Hangisi doğru?', options: ['She is work now.', 'She working now.', 'She is working now.', 'She works now already.'], answer: 2, why: 'be + fiil-ing kalıbı.' },
    { q: 'Şu sıralar İngilizce öğreniyorum. → I ___ English these days.', options: ['learn', 'learns', 'am learning', 'learned'], answer: 2, why: '"these days" geçici süreci gösterir.' },
    { q: 'Annem şu anda telefonda konuşuyor. → My mother ___ on the phone right now.', options: ['talk', 'talks', 'is talking', 'talked'], answer: 2, why: 'she → is + fiil-ing.' },
    { q: 'Hangisi yanlış?', options: ['Are you listening to me?', 'Is he coming tomorrow?', 'They is watching TV.', 'I am not sleeping.'], answer: 2, why: 'they → are watching olmalı.' },
    { q: 'Dinle! Biri kapıyı çalıyor. → Listen! Someone ___ the door.', options: ['knock', 'knocks', 'is knocking', 'knocked'], answer: 2, why: 'Şu anda olan iş.' },
    { q: 'Bu ay yeni bir proje üzerinde çalışıyoruz. → We ___ on a new project this month.', options: ['work', 'works', 'are working', 'worked'], answer: 2, why: '"this month" geçici bir dönem.' },
    { q: 'Hangisi doğru soru?', options: ['What you are doing?', 'What are you doing?', 'What do you doing?', 'What you doing?'], answer: 1, why: 'Soru kelimesi + be + özne + fiil-ing.' },
    { q: 'Şu anda yağmur yağmıyor. → It ___ right now.', options: ['isn’t raining', 'doesn’t rain', 'wasn’t raining', 'hasn’t rained'], answer: 0, why: 'it → isn’t + fiil-ing.' },
    { q: 'Babam şu anda arabayı tamir ediyor. → My father ___ the car at the moment.', options: ['fix', 'fixes', 'is fixing', 'fixed'], answer: 2, why: '"at the moment" şu anı gösterir.' },
    { q: 'Hangisi yanlış?', options: ['I am reading a book.', 'She is not coming.', 'We is having lunch.', 'They are waiting.'], answer: 2, why: 'we → are having olmalı.' },
    { q: 'Bu günlerde çok çalışıyorum. → I ___ a lot these days.', options: ['study', 'studies', 'am studying', 'studied'], answer: 2, why: 'Geçici günlük durum.' },
    { q: 'Komşular şu anda taşınıyor. → The neighbours ___ right now.', options: ['move', 'moves', 'are moving', 'moved'], answer: 2, why: 'the neighbours (çoğul) → are moving.' },
    { q: 'Neden bu kadar hızlı yürüyorsun? → Why ___ so fast?', options: ['do you walk', 'are you walking', 'you are walking', 'did you walk'], answer: 1, why: 'Şu anda süren bir eylem hakkında soru.' },
    { q: 'Hangisi doğru?', options: ['He’s cooking dinner now.', 'He cooking dinner now.', 'He is cook dinner now.', 'He cooks dinner now already.'], answer: 0, why: 'he’s = he is + fiil-ing.' }
  ];

  EXTRA['present-perfect'] = [
    { q: 'Daha önce hiç deve görmedim. → I ___ a camel before.', options: ['never saw', 'have never seen', 'didn’t see', 'am not seeing'], answer: 1, why: 'Hayat boyu deneyim: have never + V3.' },
    { q: 'Annem daha yeni geldi. → My mother ___ arrived.', options: ['has just', 'just has', 'is just', 'was just'], answer: 0, why: '"just" have/has ile fiil arasına gelir.' },
    { q: 'Hangisi doğru?', options: ['I have seen him yesterday.', 'I saw him yesterday.', 'I have saw him yesterday.', 'I was seen him yesterday.'], answer: 1, why: '"yesterday" ile Present Perfect kullanılmaz.' },
    { q: 'Bulaşıkları henüz yıkamadım. → I ___ the dishes yet.', options: ['didn’t wash', 'haven’t washed', 'don’t wash', 'wasn’t washing'], answer: 1, why: '"yet" Present Perfect ile kullanılır.' },
    { q: 'Hiç İstanbul’a gittin mi? → ___ you ever ___ to Istanbul?', options: ['Have / been', 'Did / go', 'Are / going', 'Do / go'], answer: 0, why: 'Deneyim sorusu: Have you ever been to...?' },
    { q: 'Kardeşim şimdiye kadar üç kez Umre’ye gitti. → My brother ___ to Umrah three times.', options: ['went', 'has been', 'is going', 'goes'], answer: 1, why: 'Zaman belirtilmeyen tekrarlanan deneyim.' },
    { q: 'Hangisi yanlış?', options: ['She has finished her homework.', 'She has finish her homework.', 'Have you finished?', 'I haven’t finished yet.'], answer: 1, why: 'has’tan sonra 3. hâl gelir: finished.' },
    { q: 'Onlarla beş yıldır arkadaşız. → We ___ friends for five years.', options: ['are', 'were', 'have been', 'had been'], answer: 2, why: 'Geçmişte başladı, hâlâ sürüyor: have been.' },
    { q: 'Bu filmi şimdiye kadar üç kez izledim. → I ___ this film three times.', options: ['watched', 'have watched', 'was watching', 'watch'], answer: 1, why: 'Zaman belirtilmeyen tekrar sayısı.' },
    { q: 'Hangisi doğru?', options: ['Has she ever visited Paris?', 'Has she ever visit Paris?', 'Does she ever visited Paris?', 'She has ever visited Paris?'], answer: 0, why: 'has’tan sonra 3. hâl: visited.' },
    { q: 'Param bitti (şu an param yok). → I ___ all my money.', options: ['spent', 'have spent', 'was spending', 'spend'], answer: 1, why: 'Sonucu şu anda görülüyor.' },
    { q: 'Kaç kere Kapadokya’ya gittin? → How many times ___ you ___ to Cappadocia?', options: ['did / go', 'have / been', 'do / go', 'are / going'], answer: 1, why: 'Toplam deneyim sayısı sorusu.' },
    { q: 'Hangisi yanlış?', options: ['I have never eaten sushi.', 'I have ever eaten sushi.', 'Have you ever eaten sushi?', 'She has never eaten sushi.'], answer: 1, why: 'Olumlu cümlede "ever" değil "never" kullanılır.' },
    { q: 'Anahtarlarımı kaybettim (hâlâ bulamadım). → I ___ my keys.', options: ['lost', 'have lost', 'was losing', 'lose'], answer: 1, why: 'Sonucu şu anda geçerli: anahtar hâlâ kayıp.' },
    { q: 'Mektubu henüz göndermedi. → He ___ the letter yet.', options: ['didn’t send', 'hasn’t sent', 'doesn’t send', 'wasn’t sending'], answer: 1, why: '"yet" olumsuzda da Present Perfect ister.' },
    { q: 'Bugün ona iki kez telefon ettim. → I ___ him twice today.', options: ['called', 'have called', 'was calling', 'call'], answer: 1, why: '"today" henüz bitmemiş bir zaman dilimi.' }
  ];

  EXTRA['present-perfect-continuous'] = [
    { q: 'Ne zamandır İngilizce öğreniyorsun? → How long ___ English?', options: ['have you been learning', 'do you learn', 'are you learning', 'did you learn'], answer: 0, why: 'Süre sorusu: how long + have been + fiil-ing.' },
    { q: 'Annem sabahtan beri yemek pişiriyor. → My mother ___ since morning.', options: ['has been cooking', 'has cooked', 'is cooking', 'cooked'], answer: 0, why: '"since morning" ile süregelen iş.' },
    { q: 'Hangisi doğru?', options: ['I have been waiting for an hour.', 'I have being waiting for an hour.', 'I am been waiting for an hour.', 'I have been wait for an hour.'], answer: 0, why: 'have been + fiil-ing kalıbı.' },
    { q: 'Üç saattir çalışıyorum, yorgunum. → I am tired; I ___ for three hours.', options: ['work', 'have worked', 'have been working', 'worked'], answer: 2, why: 'Süre vurgusu: for three hours.' },
    { q: 'Ne zamandır burada bekliyorsun? → How long ___ here?', options: ['have you been waiting', 'do you wait', 'are you waiting', 'did you wait'], answer: 0, why: 'Süregelen eylemin süresini sorar.' },
    { q: 'Hangisi yanlış?', options: ['She has been studying all day.', 'She has been study all day.', 'Has she been studying long?', 'They have been working hard.'], answer: 1, why: 'has been’den sonra fiil-ing gelir.' },
    { q: 'Sabahtan beri yağmur yağıyor. → It ___ since morning.', options: ['has been raining', 'rains', 'is raining', 'rained'], answer: 0, why: 'since ile süregelen durum.' },
    { q: 'Gözlerin kırmızı, ne zamandır ağlıyorsun? → Your eyes are red. How long ___?', options: ['have you been crying', 'do you cry', 'are you crying', 'did you cry'], answer: 0, why: 'Görünen kanıt + süre sorusu.' },
    { q: 'Hangisi doğru?', options: ['We have been living here since 2015.', 'We have been live here since 2015.', 'We has been living here since 2015.', 'We live here since 2015.'], answer: 0, why: 'we → have been living.' },
    { q: 'Dedem bu dükkânda uzun zamandır çalışıyor. → My grandfather ___ in this shop for a long time.', options: ['has been working', 'works', 'worked', 'is working'], answer: 0, why: 'Geçmişten bugüne süren iş.' },
    { q: 'Hangisi yanlış?', options: ['I have been reading this book for a week.', 'I have been reading this book since a week.', 'How long have you been reading it?', 'She has not been feeling well lately.'], answer: 1, why: '"a week" bir süre olduğu için "for" gerekir, "since" değil.' },
    { q: 'Elin neden kirli? Ne yapıyordun? → What ___ you ___? Your hands are dirty.', options: ['have / been doing', 'do / do', 'are / doing', 'did / do'], answer: 0, why: 'Görünen sonuç + süregelen soru.' },
    { q: 'Bütün gün telefonla konuşuyor. → He ___ on the phone all day.', options: ['has been talking', 'talks', 'is talking', 'talked'], answer: 0, why: '"all day" ile süregelen eylem.' },
    { q: 'Hangisi doğru?', options: ['They haven’t been sleeping well.', 'They haven’t being sleeping well.', 'They hasn’t been sleeping well.', 'They aren’t been sleeping well.'], answer: 0, why: 'they → haven’t been sleeping.' },
    { q: 'Saatlerdir bu bulmacayı çözmeye çalışıyorum. → I ___ to solve this puzzle for hours.', options: ['try', 'have tried', 'have been trying', 'tried'], answer: 2, why: 'Süre + hâlâ devam eden çaba.' },
    { q: 'Ne zamandır bu mahallede yaşıyorsunuz? → How long ___ in this neighbourhood?', options: ['have you been living', 'do you live', 'are you living', 'did you live'], answer: 0, why: 'Süregelen ikamet süresi.' }
  ];

  EXTRA['past-simple'] = [
    { q: 'Dün akşam erken yattım. → I ___ to bed early last night.', options: ['go', 'went', 'have gone', 'was going'], answer: 1, why: '"last night" belirli geçmiş zaman.' },
    { q: 'Hangisi doğru?', options: ['She goed to school.', 'She went to school.', 'She has went to school.', 'She go to school yesterday.'], answer: 1, why: 'go → went (düzensiz fiil).' },
    { q: 'İki yıl önce Konya’ya taşındık. → We ___ to Konya two years ago.', options: ['move', 'moved', 'have moved', 'were moving'], answer: 1, why: '"two years ago" belirli geçmiş.' },
    { q: 'Dün pazara gitmedik. → We ___ to the market yesterday.', options: ['didn’t go', 'don’t go', 'haven’t gone', 'weren’t going'], answer: 0, why: 'Olumsuz Past Simple: didn’t + yalın fiil.' },
    { q: 'Hangisi yanlış?', options: ['He bought a new car last month.', 'He buyed a new car last month.', 'Did you see him yesterday?', 'They didn’t come to the party.'], answer: 1, why: 'buy → bought.' },
    { q: 'Ustalar çiniyi ne zaman bitirdi? → When ___ the masters ___ the tiles?', options: ['did / finish', 'have / finished', 'do / finish', 'were / finishing'], answer: 0, why: 'Belirli geçmiş zaman sorusu.' },
    { q: 'Geçen yaz Karadeniz’e gittik. → We ___ to the Black Sea last summer.', options: ['go', 'went', 'have gone', 'are going'], answer: 1, why: '"last summer" belirli geçmiş.' },
    { q: 'Hangisi doğru?', options: ['Did she called you?', 'Did she call you?', 'Does she called you?', 'She did call you?'], answer: 1, why: 'did’den sonra fiil yalın kalır.' },
    { q: 'Babam dün akşam bize bir hikâye anlattı. → My father ___ us a story last night.', options: ['tell', 'told', 'has told', 'was telling'], answer: 1, why: 'tell → told.' },
    { q: 'Nasreddin Hoca eşeğini kaybetti. → Nasreddin Hodja ___ his donkey.', options: ['lose', 'lost', 'has lost', 'was losing'], answer: 1, why: 'lose → lost.' },
    { q: 'Hangisi yanlış?', options: ['I didn’t see him at the mosque.', 'I not saw him at the mosque.', 'Did you eat breakfast?', 'She didn’t call me.'], answer: 1, why: 'Olumsuzluk didn’t ile kurulur.' },
    { q: 'Geçen hafta hava çok soğuktu. → The weather ___ very cold last week.', options: ['is', 'was', 'has been', 'will be'], answer: 1, why: 'be fiilinin geçmişi: was.' },
    { q: 'Ne zaman İstanbul’a taşındınız? → When ___ you ___ to Istanbul?', options: ['did / move', 'have / moved', 'do / move', 'were / moving'], answer: 0, why: 'Belirli geçmiş zaman sorusu.' },
    { q: 'Hangisi doğru?', options: ['We didn’t went to the wedding.', 'We didn’t go to the wedding.', 'We not went to the wedding.', 'We haven’t went to the wedding.'], answer: 1, why: 'didn’t’ten sonra fiil yalın kalır.' },
    { q: 'Dükkân sahibi dükkânı erken kapattı. → The shopkeeper ___ the shop early.', options: ['close', 'closed', 'has closed', 'was closing'], answer: 1, why: 'Bitmiş tek bir olay.' },
    { q: 'Geçen bayram büyükannemi ziyaret ettik. → We ___ my grandmother last Eid.', options: ['visit', 'visited', 'have visited', 'were visiting'], answer: 1, why: '"last Eid" belirli geçmiş zaman.' }
  ];

  EXTRA['past-continuous'] = [
    { q: 'Ben eve gelirken yağmur yağıyordu. → It ___ when I came home.', options: ['rains', 'rained', 'was raining', 'has rained'], answer: 2, why: 'Süren iş: was raining.' },
    { q: 'Hangisi doğru?', options: ['She was cook when I called.', 'She was cooking when I called.', 'She cooking when I called.', 'She is cooking when I called.'], answer: 1, why: 'was + fiil-ing kalıbı.' },
    { q: 'Onlar tavla oynarken ben çay demliyordum. → I ___ tea while they ___ backgammon.', options: ['was brewing / were playing', 'brewed / played', 'am brewing / are playing', 'have brewed / have played'], answer: 0, why: 'İki iş aynı anda sürüyordu.' },
    { q: 'Saat sekizde ne yapıyordun? → What ___ you ___ at eight o’clock?', options: ['were / doing', 'did / do', 'are / doing', 'have / done'], answer: 0, why: 'Belirli bir geçmiş anda süren iş sorusu.' },
    { q: 'Hangisi yanlış?', options: ['They were watching TV at nine.', 'They was watching TV at nine.', 'Were you sleeping?', 'I wasn’t listening.'], answer: 1, why: 'they → were olmalı.' },
    { q: 'Dün bu saatte otobüs bekliyorduk. → We ___ for the bus at this time yesterday.', options: ['wait', 'waited', 'were waiting', 'have waited'], answer: 2, why: 'Geçmişte belirli bir anda süren iş.' },
    { q: 'O konuşurken telefon çaldı. → The phone rang while he ___.', options: ['talks', 'talked', 'was talking', 'has talked'], answer: 2, why: 'Süren iş + araya giren kısa olay.' },
    { q: 'Hangisi doğru?', options: ['I was walk to school.', 'I walking to school.', 'I was walking to school.', 'I am walking to school yesterday.'], answer: 2, why: 'was + fiil-ing.' },
    { q: 'Ezan okunurken bahçedeydim. → I was in the garden while the muezzin ___.', options: ['calls', 'called', 'was calling', 'has called'], answer: 2, why: 'while ile süren iki iş.' },
    { q: 'Uyurken bir gürültü duydum. → I heard a noise while I ___.', options: ['sleep', 'slept', 'was sleeping', 'have slept'], answer: 2, why: 'Süren iş: was sleeping.' },
    { q: 'Hangisi yanlış?', options: ['We were having dinner at seven.', 'We were having dinner at seven o’clock yesterday.', 'We was having dinner.', 'She was reading a book.'], answer: 2, why: 'we → were olmalı.' },
    { q: 'Ben yemek pişirirken çocuklar oyun oynuyordu. → The children ___ while I ___ dinner.', options: ['were playing / was cooking', 'played / cooked', 'play / cook', 'have played / have cooked'], answer: 0, why: 'İki süren iş aynı anda.' },
    { q: 'Dükkân sahibi tam kapatırken bir müşteri geldi. → A customer arrived while the shopkeeper ___ the shop.', options: ['closes', 'closed', 'was closing', 'has closed'], answer: 2, why: 'Süren iş + araya giren olay.' },
    { q: 'Hangisi doğru?', options: ['Was you sleeping at midnight?', 'Were you sleeping at midnight?', 'Did you sleeping at midnight?', 'Are you sleeping at midnight yesterday?'], answer: 1, why: 'you → were.' },
    { q: 'Ben dışarı çıktığımda kar yağıyordu. → It ___ when I went outside.', options: ['snows', 'snowed', 'was snowing', 'has snowed'], answer: 2, why: 'Süren hava durumu.' },
    { q: 'Bütün gece rüzgâr esiyordu. → The wind ___ all night.', options: ['blows', 'blew', 'was blowing', 'has blown'], answer: 2, why: 'Uzun süre devam eden iş.' }
  ];

  EXTRA['past-perfect'] = [
    { q: 'Biz vardığımızda misafirler gitmişti. → The guests ___ before we arrived.', options: ['left', 'have left', 'had left', 'were leaving'], answer: 2, why: 'İki geçmişten önce olanı: had + V3.' },
    { q: 'Hangisi doğru?', options: ['He had went home.', 'He had gone home.', 'He has gone home already.', 'He had go home.'], answer: 1, why: 'had’dan sonra 3. hâl: gone.' },
    { q: 'Yemeği yemeden önce ellerini yıkamıştı. → She ___ her hands before she ate.', options: ['washed', 'has washed', 'had washed', 'was washing'], answer: 2, why: 'Önce olan iş: had washed.' },
    { q: 'Ben gelmeden önce çayı demlemişti. → She ___ the tea before I arrived.', options: ['made', 'has made', 'had made', 'was making'], answer: 2, why: 'Önce olan iş.' },
    { q: 'Hangisi yanlış?', options: ['I had never seen snow before that day.', 'I had never saw snow before that day.', 'Had you finished before he came?', 'She hadn’t eaten before the meeting.'], answer: 1, why: 'had’dan sonra 3. hâl: seen.' },
    { q: 'Otobüs kalktığında biz henüz varmamıştık. → We ___ arrived when the bus left.', options: ['didn’t', 'hadn’t', 'haven’t', 'weren’t'], answer: 1, why: 'İki geçmiş olaydan önceki olumsuzluk.' },
    { q: 'Eve vardığımda babam çoktan uyumuştu. → When I got home, my father ___ already ___.', options: ['had / slept', 'has / slept', 'was / sleeping', 'did / sleep'], answer: 0, why: 'Vardığımdan önce olan iş.' },
    { q: 'Hangisi doğru?', options: ['They had finish the work by five.', 'They had finished the work by five.', 'They have finished the work by five yesterday.', 'They finished had the work by five.'], answer: 1, why: 'had + 3. hâl.' },
    { q: 'Ders başlamadan önce her şeyi hazırlamıştı. → He ___ everything before the lesson started.', options: ['prepared', 'has prepared', 'had prepared', 'was preparing'], answer: 2, why: 'İki geçmişten önce olan iş.' },
    { q: 'Dükkâna vardığımda kapanmıştı bile. → By the time I got to the shop, it ___ already ___.', options: ['had / closed', 'has / closed', 'was / closing', 'did / close'], answer: 0, why: '"by the time" + had + V3.' },
    { q: 'Hangisi yanlış?', options: ['I had lost my keys before I noticed.', 'I had lose my keys before I noticed.', 'Had she left before you called?', 'We hadn’t met before that party.'], answer: 1, why: 'had’dan sonra 3. hâl: lost.' },
    { q: 'O gelene kadar biz yemeği bitirmiştik. → We ___ dinner by the time she came.', options: ['finished', 'have finished', 'had finished', 'were finishing'], answer: 2, why: 'Önce olan iş: had finished.' },
    { q: 'Daha önce hiç deve görmemişti. → He ___ a camel before.', options: ['never saw', 'had never seen', 'has never seen', 'was never seeing'], answer: 1, why: 'Geçmişteki bir andan önceki deneyim.' },
    { q: 'Hangisi doğru?', options: ['Had you eaten before you left?', 'Did you had eaten before you left?', 'Have you had eaten before you left?', 'Was you eaten before you left?'], answer: 0, why: 'Soru: had + özne + 3. hâl.' },
    { q: 'Düğünden önce ev çoktan hazırlanmıştı. → The house ___ already ___ before the wedding.', options: ['had / been prepared', 'has / been prepared', 'was / prepared', 'is / prepared'], answer: 0, why: 'Düğünden önce olan iş.' },
    { q: 'Toplantı başlamadan önce herkes gelmişti. → Everyone ___ before the meeting started.', options: ['arrived', 'has arrived', 'had arrived', 'was arriving'], answer: 2, why: 'İki geçmiş olaydan önce olanı.' }
  ];

  EXTRA['past-perfect-continuous'] = [
    { q: 'Uyuyakalmadan önce saatlerdir kitap okuyordu. → He ___ for hours before he fell asleep.', options: ['read', 'has been reading', 'had been reading', 'was reading'], answer: 2, why: 'Uykuya dalmadan önce süren iş.' },
    { q: 'Hangisi doğru?', options: ['She had been study all night.', 'She had been studying all night.', 'She has been studying all night before.', 'She was been studying all night.'], answer: 1, why: 'had been + fiil-ing.' },
    { q: 'Emekli olmadan önce kırk yıldır o fabrikada çalışıyordu. → He ___ in that factory for forty years before he retired.', options: ['worked', 'has been working', 'had been working', 'was working'], answer: 2, why: 'Emekli olmadan önce süren iş.' },
    { q: 'Yağmur başlamadan önce ne kadar süredir bekliyordun? → How long ___ before it started to rain?', options: ['had you been waiting', 'have you been waiting', 'were you waiting', 'did you wait'], answer: 0, why: 'Geçmişteki bir andan önceki süre sorusu.' },
    { q: 'Hangisi yanlış?', options: ['They had been playing for two hours before dinner.', 'They had being playing for two hours before dinner.', 'She had been working there since 2010.', 'We had been waiting a long time.'], answer: 1, why: 'had been (being değil) + fiil-ing.' },
    { q: 'O gelmeden önce çocuklar saatlerdir oynuyordu. → The children ___ for hours before she arrived.', options: ['played', 'had been playing', 'have been playing', 'were playing'], answer: 1, why: 'Gelmeden önce süren iş.' },
    { q: 'Gözleri kırmızıydı çünkü saatlerdir ağlıyordu. → Her eyes were red because she ___ for hours.', options: ['cried', 'had been crying', 'has been crying', 'was crying'], answer: 1, why: 'Sonucun sebebi: had been crying.' },
    { q: 'Hangisi doğru?', options: ['He had been driving all day when the car broke down.', 'He had been drive all day when the car broke down.', 'He has been driving all day when the car broke down.', 'He was been driving all day.'], answer: 0, why: 'had been + fiil-ing.' },
    { q: 'Sınav başlamadan önce ne kadar zamandır ders çalışıyordu? → How long ___ before the exam started?', options: ['had she been studying', 'has she been studying', 'was she studying', 'did she study'], answer: 0, why: 'Geçmişteki bir andan önceki süre.' },
    { q: 'Toplantıya geldiğinde iki saattir bekliyorduk. → We ___ for two hours when he came to the meeting.', options: ['waited', 'have been waiting', 'had been waiting', 'were waiting'], answer: 2, why: 'Onun gelişinden önce süren bekleyiş.' },
    { q: 'Hangisi yanlış?', options: ['I had been feeling tired all week.', 'I had been feel tired all week.', 'She had been coughing for days.', 'They had been living there for years.'], answer: 1, why: 'had been + fiil-ing (feeling).' },
    { q: 'Bebek uyumadan önce iki saattir ağlıyordu. → The baby ___ for two hours before she fell asleep.', options: ['cried', 'had been crying', 'has been crying', 'was crying'], answer: 1, why: 'Uyumadan önce süren iş.' },
    { q: 'Hangisi doğru?', options: ['We had been waiting since morning when the doctor called us.', 'We had being waiting since morning.', 'We have been waiting since morning when the doctor called us.', 'We was waiting since morning.'], answer: 0, why: 'had been + fiil-ing, geçmişte bir olaydan önce.' },
    { q: 'Elektrik kesilmeden önce ne yapıyorlardı (uzun süredir)? → What ___ before the electricity went out?', options: ['had they been doing', 'have they been doing', 'were they doing', 'did they do'], answer: 0, why: 'Kesilmeden önce süren eylem sorusu.' },
    { q: 'Kitap bitmeden önce iki haftadır okuyordu. → She ___ the book for two weeks before she finished it.', options: ['read', 'had been reading', 'has been reading', 'was reading'], answer: 1, why: 'Bitirmeden önce süren okuma.' },
    { q: 'Misafirler gelmeden önce annem saatlerdir yemek pişiriyordu. → My mother ___ for hours before the guests arrived.', options: ['cooked', 'had been cooking', 'has been cooking', 'was cooking'], answer: 1, why: 'Misafirlerden önce süren iş.' }
  ];

  EXTRA['future-simple'] = [
    { q: 'Bence yarın hava soğuk olacak. → I think it ___ cold tomorrow.', options: ['is', 'will be', 'was', 'has been'], answer: 1, why: 'Tahmin: will be.' },
    { q: 'Hangisi doğru?', options: ['I will to call you later.', 'I will call you later.', 'I am will call you later.', 'I will calling you later.'], answer: 1, why: 'will + yalın fiil.' },
    { q: 'Merak etme, sana yardım edeceğim. → Don’t worry, I ___ you.', options: ['help', 'will help', 'am helping', 'helped'], answer: 1, why: 'Yerinde verilen söz.' },
    { q: 'Kapı çaldı — ben açarım. → The door rang. I ___ it.', options: ['open', 'will open', 'am opening', 'opened'], answer: 1, why: 'Anlık karar: will.' },
    { q: 'Hangisi yanlış?', options: ['She will arrive at six.', 'She wills arrive at six.', 'Will you help me?', 'They will not come.'], answer: 1, why: 'will hiçbir özneyle -s almaz.' },
    { q: 'Yarın yağmur yağacağını sanmıyorum. → I don’t think it ___ tomorrow.', options: ['rains', 'will rain', 'is raining', 'rained'], answer: 1, why: 'Gelecekle ilgili tahmin.' },
    { q: 'Gelecek yıl kırk yaşında olacak. → He ___ forty next year.', options: ['is', 'will be', 'was', 'has been'], answer: 1, why: 'Gelecekle ilgili basit bilgi.' },
    { q: 'Hangisi doğru?', options: ['Will she comes tomorrow?', 'Will she come tomorrow?', 'Does she will come tomorrow?', 'She will comes tomorrow?'], answer: 1, why: 'will’den sonra yalın fiil.' },
    { q: 'Bavulları ben taşırım (o anda karar). → I ___ the bags.', options: ['carry', 'will carry', 'am carrying', 'carried'], answer: 1, why: 'Anlık karar/teklif.' },
    { q: 'Sanırım bu maçı kazanacağız. → I think we ___ this match.', options: ['win', 'will win', 'are winning', 'won'], answer: 1, why: 'Kişisel tahmin: I think + will.' },
    { q: 'Hangisi yanlış?', options: ['I promise I will not tell anyone.', 'I promise I not will tell anyone.', 'She will probably be late.', 'We will see you soon.'], answer: 1, why: 'Olumsuzluk: will not, not will değil.' },
    { q: 'Bu hafta sonu tatile çıkmayacağız. → We ___ on holiday this weekend.', options: ['don’t go', 'won’t go', 'aren’t going to go', 'didn’t go'], answer: 1, why: 'won’t = will not.' },
    { q: 'Dükkân yarın açık olacak mı? → ___ the shop ___ open tomorrow?', options: ['Will / be', 'Is / be', 'Does / be', 'Was / be'], answer: 0, why: 'Soru: Will + özne + be...?' },
    { q: 'Hangisi doğru?', options: ['I’m sure it will snow tonight.', 'I’m sure it wills snow tonight.', 'I’m sure it will snows tonight.', 'I’m sure it will to snow tonight.'], answer: 0, why: 'will + yalın fiil.' },
    { q: 'Onlara söz veriyorum, geç kalmayacağım. → I promise I ___ late.', options: ['am not', 'won’t be', 'don’t be', 'wasn’t'], answer: 1, why: 'Söz verme: won’t be.' },
    { q: 'Belki yarın seni ziyaret ederim. → Maybe I ___ you tomorrow.', options: ['visit', 'will visit', 'am visiting', 'visited'], answer: 1, why: 'Belirsiz gelecek planı/tahmini.' }
  ];

  EXTRA['future-continuous'] = [
    { q: 'Yarın bu saatte tatilde olacağız. → We ___ on holiday this time tomorrow.', options: ['are', 'will be', 'were', 'have been'], answer: 1, why: 'will be + fiil-ing kalıbının be hâli.' },
    { q: 'Hangisi doğru?', options: ['I will be work at nine.', 'I will be working at nine.', 'I will working at nine.', 'I am will be working at nine.'], answer: 1, why: 'will be + fiil-ing.' },
    { q: 'Sen geldiğinde biz yemek yiyor olacağız. → We ___ dinner when you arrive.', options: ['will have', 'will be having', 'are having', 'had'], answer: 1, why: 'Belirli bir gelecek anında süren iş.' },
    { q: 'Yarın bu saatte anneannem çay demliyor olacak. → My grandmother ___ tea this time tomorrow.', options: ['will make', 'will be making', 'makes', 'made'], answer: 1, why: '"this time tomorrow" süren geleceği gösterir.' },
    { q: 'Hangisi yanlış?', options: ['She will be sleeping at midnight.', 'She will be sleep at midnight.', 'They will be traveling next week.', 'I will be waiting for you.'], answer: 1, why: 'will be + fiil-ing (sleeping).' },
    { q: 'Gelecek ay bu vakitler ders anlatıyor olacak. → He ___ classes this time next month.', options: ['will teach', 'will be teaching', 'teaches', 'taught'], answer: 1, why: 'Belirli bir gelecek anında süren iş.' },
    { q: 'Hangisi doğru?', options: ['At noon, we will be eating lunch.', 'At noon, we be will eating lunch.', 'At noon, we will eating lunch.', 'At noon, we will be eat lunch.'], answer: 0, why: 'will be + fiil-ing.' },
    { q: 'Yarın bu saatte uçakla seyahat ediyor olacağım. → I ___ by plane this time tomorrow.', options: ['will travel', 'will be traveling', 'travel', 'traveled'], answer: 1, why: 'Belirli bir gelecek anı.' },
    { q: 'Onlar yarın akşam bu saatlerde maç izliyor olacaklar. → They ___ the match this time tomorrow evening.', options: ['will watch', 'will be watching', 'watch', 'watched'], answer: 1, why: 'Süren gelecek eylemi.' },
    { q: 'Hangisi yanlış?', options: ['We will be waiting outside the mosque.', 'We will be wait outside the mosque.', 'He will be driving to work.', 'I will be studying tonight.'], answer: 1, why: 'will be + fiil-ing (waiting).' },
    { q: 'Bu vakitlerde bahçede çalışıyor olacak. → He ___ in the garden at this time.', options: ['will work', 'will be working', 'works', 'worked'], answer: 1, why: 'Belirli bir gelecek anında süren iş.' },
    { q: 'Hangisi doğru?', options: ['Will you be using the car tomorrow?', 'Will you using the car tomorrow?', 'Do you will be using the car tomorrow?', 'Are you will be using the car tomorrow?'], answer: 0, why: 'Soru: Will + özne + be + fiil-ing?' },
    { q: 'Yarın bu saatte hâlâ toplantıda olacağız. → We ___ still in the meeting this time tomorrow.', options: ['will be', 'will being', 'are', 'were'], answer: 0, why: 'will be (being değil).' },
    { q: 'O sırada çocuklar okuldan dönüyor olacak. → The children ___ home from school at that time.', options: ['will walk', 'will be walking', 'walk', 'walked'], answer: 1, why: 'Belirli bir gelecek anında süren iş.' },
    { q: 'Hangisi yanlış?', options: ['She will be cooking when we arrive.', 'She will be cook when we arrive.', 'He will be waiting for us.', 'They will be sleeping by then.'], answer: 1, why: 'will be + fiil-ing (cooking).' },
    { q: 'Yarın bu saatlerde denizde yüzüyor olacaklar. → They ___ in the sea this time tomorrow.', options: ['will swim', 'will be swimming', 'swim', 'swam'], answer: 1, why: 'Belirli bir gelecek anında süren iş.' }
  ];

  EXTRA['future-perfect'] = [
    { q: 'Akşama kadar sofrayı hazırlamış olacağım. → By the evening, I ___ the table.', options: ['will prepare', 'will have prepared', 'prepare', 'prepared'], answer: 1, why: '"by" ile belirli bir tarihe kadar tamamlanmış iş.' },
    { q: 'Hangisi doğru?', options: ['They will have finish by noon.', 'They will have finished by noon.', 'They will finished by noon.', 'They have will finished by noon.'], answer: 1, why: 'will have + 3. hâl.' },
    { q: 'Sen gelene kadar yemeği pişirmiş olacağım. → I ___ dinner by the time you come.', options: ['will cook', 'will have cooked', 'cook', 'cooked'], answer: 1, why: 'Gelmenden önce tamamlanacak iş.' },
    { q: 'Gelecek yıla kadar üniversiteyi bitirmiş olacak. → By next year, she ___ university.', options: ['will finish', 'will have finished', 'finishes', 'finished'], answer: 1, why: 'Belirli bir gelecek tarihe kadar bitmiş iş.' },
    { q: 'Hangisi yanlış?', options: ['We will have arrived by six.', 'We will have arrive by six.', 'Will you have finished by Friday?', 'He will not have left yet.'], answer: 1, why: 'will have + 3. hâl (arrived).' },
    { q: 'Bayrama kadar yorganı bitirmiş olacak. → She ___ the quilt by Eid.', options: ['will finish', 'will have finished', 'finishes', 'finished'], answer: 1, why: '"by Eid" son tarih.' },
    { q: 'Bu saate kadar kaç kitap okumuş olacaksın? → How many books ___ you ___ by then?', options: ['will / have read', 'do / read', 'are / reading', 'did / read'], answer: 0, why: 'Belirli bir ana kadar tamamlanan iş sayısı.' },
    { q: 'Hangisi doğru?', options: ['By ten, he will have left.', 'By ten, he will has left.', 'By ten, he has will left.', 'By ten, he will had left.'], answer: 0, why: 'will have + 3. hâl.' },
    { q: 'Yıl sonuna kadar evi boyamış olacağız. → We ___ the house by the end of the year.', options: ['will paint', 'will have painted', 'paint', 'painted'], answer: 1, why: '"by the end of the year" son tarih.' },
    { q: 'Sen uyanana kadar kahvaltıyı hazırlamış olacağım. → I ___ breakfast by the time you wake up.', options: ['will make', 'will have made', 'make', 'made'], answer: 1, why: 'Uyanmadan önce tamamlanacak iş.' },
    { q: 'Hangisi yanlış?', options: ['She will have graduated by June.', 'She will have graduate by June.', 'Will they have moved by then?', 'We will have saved enough money.'], answer: 1, why: 'will have + 3. hâl (graduated).' },
    { q: 'Akşama kadar bütün ödevlerimi bitirmiş olacağım. → By tonight, I ___ all my homework.', options: ['will finish', 'will have finished', 'finish', 'finished'], answer: 1, why: 'Belirli bir ana kadar tamamlanan iş.' },
    { q: 'Kırkına geldiğinde otuz ülke gezmiş olacak. → By the time he turns forty, he ___ thirty countries.', options: ['will visit', 'will have visited', 'visits', 'visited'], answer: 1, why: 'Belirli bir yaşa kadar tamamlanmış iş.' },
    { q: 'Hangisi doğru?', options: ['By 2030, prices will have doubled.', 'By 2030, prices will has doubled.', 'By 2030, prices has will doubled.', 'By 2030, prices will doubled.'], answer: 0, why: 'will have + 3. hâl.' },
    { q: 'Toplantı başlayana kadar raporu bitirmiş olacağım. → I ___ the report by the time the meeting starts.', options: ['will finish', 'will have finished', 'finish', 'finished'], answer: 1, why: 'Toplantıdan önce tamamlanacak iş.' },
    { q: 'Sabaha kadar kar yağmayı bitirmiş olacak. → By morning, it ___ snowing.', options: ['will stop', 'will have stopped', 'stops', 'stopped'], answer: 1, why: '"by morning" son tarih.' }
  ];

  EXTRA['future-perfect-continuous'] = [
    { q: 'Gelecek yıl kırk yıldır ebru yapıyor olacak. → Next year he ___ ebru for forty years.', options: ['will make', 'will have been making', 'makes', 'made'], answer: 1, why: 'Süregelen iş belirli bir geleceğe kadar devam ediyor.' },
    { q: 'Hangisi doğru?', options: ['By June, I will have been working here for ten years.', 'By June, I will have been work here for ten years.', 'By June, I will has been working here for ten years.', 'By June, I will been working here for ten years.'], answer: 0, why: 'will have been + fiil-ing.' },
    { q: 'Akşama kadar sekiz saattir çalışıyor olacağım. → By evening, I ___ for eight hours.', options: ['will work', 'will have been working', 'work', 'worked'], answer: 1, why: 'Belirli bir ana kadar süren iş.' },
    { q: 'Mezun olana kadar beş yıldır bu şehirde yaşıyor olacak. → By the time she graduates, she ___ in this city for five years.', options: ['will live', 'will have been living', 'lives', 'lived'], answer: 1, why: 'Mezuniyete kadar süren ikamet.' },
    { q: 'Hangisi yanlış?', options: ['They will have been traveling for a month by then.', 'They will have been travel for a month by then.', 'She will have been studying for six hours by noon.', 'We will have been waiting for an hour by five.'], answer: 1, why: 'will have been + fiil-ing (traveling).' },
    { q: 'Yıl sonuna kadar bu projede iki yıldır çalışıyor olacağız. → By the end of the year, we ___ on this project for two years.', options: ['will work', 'will have been working', 'work', 'worked'], answer: 1, why: 'Belirli bir ana kadar süren iş.' },
    { q: 'Hangisi doğru?', options: ['By ten, he will have been sleeping for two hours.', 'By ten, he will has been sleeping for two hours.', 'By ten, he will have being sleeping for two hours.', 'By ten, he has been sleeping for two hours.'], answer: 0, why: 'will have been + fiil-ing.' },
    { q: 'Ağustosa kadar otuz yıldır bu dükkânı işletiyor olacak. → By August, he ___ this shop for thirty years.', options: ['will run', 'will have been running', 'runs', 'ran'], answer: 1, why: 'Belirli bir ana kadar süren iş.' },
    { q: 'Gelecek ay bu vakitler on saattir uçakta olacağız. → By this time next month, we ___ on the plane for ten hours.', options: ['will be', 'will have been', 'are', 'were'], answer: 1, why: 'Süregelen durum.' },
    { q: 'Hangisi yanlış?', options: ['She will have been teaching for twenty years by 2030.', 'She will have been teach for twenty years by 2030.', 'They will have been living here for a decade.', 'We will have been waiting since noon.'], answer: 1, why: 'will have been + fiil-ing (teaching).' },
    { q: 'Emekli olana kadar otuz beş yıldır öğretmenlik yapıyor olacak. → By the time he retires, he ___ for thirty-five years.', options: ['will teach', 'will have been teaching', 'teaches', 'taught'], answer: 1, why: 'Emekliliğe kadar süren iş.' },
    { q: 'Hangisi doğru?', options: ['By midnight, we will have been driving for twelve hours.', 'By midnight, we will has been driving for twelve hours.', 'By midnight, we will have been drive for twelve hours.', 'By midnight, we have been driving for twelve hours.'], answer: 0, why: 'will have been + fiil-ing.' },
    { q: 'Bu proje bitene kadar altı aydır bu ekiple çalışıyor olacağım. → By the time this project ends, I ___ with this team for six months.', options: ['will work', 'will have been working', 'work', 'worked'], answer: 1, why: 'Bitişe kadar süren iş.' },
    { q: 'Kırkıncı yaş gününe kadar yirmi yıldır evli olacaklar. → By his fortieth birthday, they ___ married for twenty years.', options: ['will be', 'will have been', 'are', 'were'], answer: 1, why: 'Belirli bir ana kadar süren durum.' },
    { q: 'Hangisi yanlış?', options: ['By then, I will have been waiting for three hours.', 'By then, I will have been wait for three hours.', 'By then, she will have been cooking all day.', 'By then, they will have been playing for two hours.'], answer: 1, why: 'will have been + fiil-ing (waiting).' },
    { q: 'Bu ay sonuna kadar altı haftadır bu kitabı yazıyor olacak. → By the end of this month, she ___ this book for six weeks.', options: ['will write', 'will have been writing', 'writes', 'wrote'], answer: 1, why: 'Belirli bir ana kadar süren iş.' }
  ];

  /* ---- zamanların soru dizilerine ekle ---- */
  if (KI.tenses && KI.tenses.list) {
    KI.tenses.list.forEach(function (t) {
      if (EXTRA[t.id]) t.quiz = (t.quiz || []).concat(EXTRA[t.id]);
    });
  }

  /* ---- karışan zaman sayfalarının kendi testlerine ekle ---- */
  var CEXTRA = {};

  CEXTRA['past-simple-present-perfect'] = [
    { q: 'Dün gece yemek yedik. → We ___ dinner last night.', options: ['have eaten', 'ate', 'have ate', 'was eating'], answer: 1, why: '"last night" ile Past Simple kullanılır.' },
    { q: 'Şimdiye kadar üç kez Umre’ye gitti. → He ___ to Umrah three times.', options: ['went', 'has been', 'is going', 'goes'], answer: 1, why: 'Zaman belirtilmeyen tekrarlanan deneyim.' },
    { q: 'Hangisi doğru?', options: ['I have seen that film last week.', 'I saw that film last week.', 'I have saw that film last week.', 'I was seeing that film last week.'], answer: 1, why: '"last week" ile Past Simple kullanılır.' },
    { q: 'Param bitti (şu an yok). → I ___ all my money.', options: ['spent', 'have spent', 'was spending', 'spend'], answer: 1, why: 'Sonucu şu an geçerli.' },
    { q: 'On yıl önce burada yaşadık (artık yaşamıyoruz). → We ___ here ten years ago.', options: ['have lived', 'lived', 'have been living', 'live'], answer: 1, why: 'Bitmiş bir dönem, tarih belirtilmiş.' },
    { q: 'Hangisi doğru?', options: ['She has finished her homework an hour ago.', 'She finished her homework an hour ago.', 'She has finish her homework an hour ago.', 'She was finished her homework an hour ago.'], answer: 1, why: '"an hour ago" ile Past Simple kullanılır.' },
    { q: 'Bu hafta ona iki kez telefon ettim (hafta bitmedi). → I ___ him twice this week.', options: ['called', 'have called', 'was calling', 'call'], answer: 1, why: '"this week" henüz bitmemiş bir dönem.' },
    { q: 'Hangisi yanlış?', options: ['I have never been to Japan.', 'I never went to Japan.', 'I have never went to Japan.', 'Have you ever been to Japan?'], answer: 2, why: 'have never’den sonra 3. hâl: gone (went değil).' }
  ];

  CEXTRA['present-perfect-continuous'] = [
    { q: 'Kitabı bitirdim (sonuç önemli). → I ___ the book.', options: ['have finished', 'have been finishing', 'finished', 'was finishing'], answer: 0, why: 'Sonuç/tamamlanma vurgusu.' },
    { q: 'İki saattir bu kitabı okuyorum (süre önemli). → I ___ this book for two hours.', options: ['have read', 'have been reading', 'read', 'was reading'], answer: 1, why: 'Süre vurgusu.' },
    { q: 'Hangisi doğru?', options: ['I’ve written five letters this morning.', 'I’ve been writing five letters this morning.', 'I am writing five letters this morning already.', 'I write five letters this morning.'], answer: 0, why: 'Sayı belirtilince Present Perfect tercih edilir.' },
    { q: 'Saatlerdir yazı yazıyorum (hâlâ bitmedi, yorgunum). → I ___ for hours; I’m tired.', options: ['have written', 'have been writing', 'wrote', 'was writing'], answer: 1, why: 'Süregelen yorucu eylem.' },
    { q: 'Elleri neden boyalı? Ne yapıyordu? → Why are her hands paint-stained? What ___?', options: ['has she done', 'has she been doing', 'did she do', 'was she doing'], answer: 1, why: 'Görünen kanıt + süregelen soru.' },
    { q: 'Hangisi yanlış?', options: ['I have cleaned the whole house.', 'I have been cleaning the whole house for hours.', 'I have been clean the house.', 'Have you cleaned your room?'], answer: 2, why: 'have been’den sonra fiil-ing gelir.' },
    { q: 'Bardağı kırdı (sonuç: bardak kırık). → He ___ the glass.', options: ['has broken', 'has been breaking', 'broke', 'was breaking'], answer: 0, why: 'Sonuç şu anda görülüyor.' },
    { q: 'Ne zamandır İngilizce çalışıyorsun? → How long ___ English?', options: ['have you studied', 'have you been studying', 'are you studying', 'did you study'], answer: 1, why: 'Süregelen eylemin süresi sorulur.' }
  ];

  CEXTRA['will-going-to'] = [
    { q: 'Bak, bulutlar kararıyor, yağmur yağacak (kanıt var). → Look at those clouds! It ___ rain.', options: ['will', 'is going to', 'is', 'was'], answer: 1, why: 'Görünen kanıta dayalı tahmin: going to.' },
    { q: 'Söz veriyorum sana yardım edeceğim (anlık karar). → I promise I ___ help you.', options: ['am going to', 'will', 'am', 'was'], answer: 1, why: 'Söz verme: will.' },
    { q: 'Hangisi doğru?', options: ['I’ve decided, I’m going to learn Arabic.', 'I’ve decided, I will learn Arabic.', 'I’ve decided, I am learn Arabic.', 'I’ve decided, I going to learn Arabic.'], answer: 0, why: 'Önceden verilmiş karar: going to.' },
    { q: 'Kapı çaldı, ben açarım (anlık karar). → The doorbell rang. I ___ get it.', options: ['am going to', 'will', 'am', 'was going to'], answer: 1, why: 'O anda verilen karar.' },
    { q: 'Bu yaz Antalya’ya gitmeyi planlıyoruz (önceden karar). → We ___ to Antalya this summer.', options: ['will go', 'are going', 'are going to go', 'go'], answer: 2, why: 'Önceden yapılmış plan.' },
    { q: 'Hangisi yanlış?', options: ['She’s going to have a baby; look at her!', 'She will have a baby; look at her!', 'I think it will rain tomorrow.', 'I’m going to visit my aunt this weekend.'], answer: 1, why: 'Görünen kanıtla "will" değil "going to" doğal olur.' },
    { q: 'Bütçe hazır, gelecek ay projeye başlayacağız (plan). → We ___ the project next month.', options: ['will start', 'are going to start', 'start', 'started'], answer: 1, why: 'Önceden hazırlanmış plan.' },
    { q: 'Sanırım bu maçı kazanacaklar (kişisel fikir). → I think they ___ this match.', options: ['are going to win', 'will win', 'win', 'won'], answer: 1, why: 'Kişisel tahmin: I think + will.' }
  ];

  CEXTRA['past-continuous-past-simple'] = [
    { q: 'O uyurken telefon çaldı. → The phone rang while she ___.', options: ['sleeps', 'slept', 'was sleeping', 'has slept'], answer: 2, why: 'Süren iş + araya giren kısa olay.' },
    { q: 'Dün akşam yemek yedik. → We ___ dinner last night.', options: ['were eating', 'ate', 'have eaten', 'eat'], answer: 1, why: 'Tek, bitmiş bir olay.' },
    { q: 'Hangisi doğru?', options: ['I was walking home when I saw him.', 'I walked home when I was seeing him.', 'I was walking home when I was seeing him.', 'I walk home when I saw him.'], answer: 0, why: 'Süren iş + kısa olay.' },
    { q: 'Ben kitap okurken elektrik kesildi. → The electricity went out while I ___ a book.', options: ['read', 'was reading', 'have read', 'reads'], answer: 1, why: 'Süren iş: was reading.' },
    { q: 'Dün pazara gittik. → We ___ to the market yesterday.', options: ['were going', 'went', 'have gone', 'go'], answer: 1, why: 'Belirli, bitmiş geçmiş olay.' },
    { q: 'Hangisi yanlış?', options: ['They were playing football at five.', 'They played football at five o’clock yesterday.', 'They was playing football at five.', 'Were they playing football at five?'], answer: 2, why: 'they → were olmalı.' },
    { q: 'Ben dışarı çıktığımda kar yağıyordu. → It ___ when I went outside.', options: ['snowed', 'was snowing', 'has snowed', 'snows'], answer: 1, why: 'Süren hava durumu.' },
    { q: 'Annem yemek pişirirken ben masayı kurdum. → I set the table while my mother ___ dinner.', options: ['cooked', 'was cooking', 'has cooked', 'cooks'], answer: 1, why: 'Süren iş: was cooking.' }
  ];

  CEXTRA['future-perfect-continuous'] = [
    { q: 'Akşama kadar raporu bitirmiş olacağım (sonuç önemli). → By evening, I ___ the report.', options: ['will finish', 'will have finished', 'will have been finishing', 'finish'], answer: 1, why: 'Tamamlanmış iş vurgusu.' },
    { q: 'Akşama kadar sekiz saattir çalışıyor olacağım (süre önemli). → By evening, I ___ for eight hours.', options: ['will work', 'will have worked', 'will have been working', 'work'], answer: 2, why: 'Süre vurgusu.' },
    { q: 'Hangisi doğru?', options: ['By June, she will have graduated.', 'By June, she will have been graduating.', 'By June, she will graduate already.', 'By June, she has graduated.'], answer: 0, why: 'Tek seferlik olay: will have + V3.' },
    { q: 'Yıl sonuna kadar üç yıldır burada çalışıyor olacağım. → By the end of the year, I ___ here for three years.', options: ['will have worked', 'will have been working', 'will work', 'work'], answer: 1, why: 'Süre vurgusu.' },
    { q: 'Sabaha kadar kar yağmayı bitirmiş olacak. → By morning, it ___ snowing.', options: ['will have stopped', 'will have been stopping', 'will stop', 'stops'], answer: 0, why: '"stop" anlık bir olaydır, süreklilik değil.' },
    { q: 'Hangisi yanlış?', options: ['By ten, he will have left.', 'By ten, he will have been leaving.', 'By ten, he will have arrived.', 'Will you have finished by Friday?'], answer: 1, why: '"leave" anlık bir olaydır; -ing hâli burada doğal değildir.' },
    { q: 'Mezun olana kadar dört yıldır İngilizce çalışıyor olacak. → By the time she graduates, she ___ English for four years.', options: ['will have studied', 'will have been studying', 'will study', 'studies'], answer: 1, why: 'Süre vurgusu: for four years.' },
    { q: 'Toplantı başlayana kadar raporu bitirmiş olacağım. → By the time the meeting starts, I ___ the report.', options: ['will finish', 'will have finished', 'will have been finishing', 'finish'], answer: 1, why: 'Tamamlanmış sonuç vurgusu.' }
  ];

  if (KI.compare && KI.compare.list) {
    KI.compare.list.forEach(function (c) {
      if (CEXTRA[c.id]) c.quiz = (c.quiz || []).concat(CEXTRA[c.id]);
    });
  }
})(window.KI);
