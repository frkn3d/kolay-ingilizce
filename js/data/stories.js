/* ============================================================
   Gramer Atlası - stories.js
   Anonim halk hikâyeleri: Nasreddin Hoca fıkraları ve diğer yerel
   anonim hikâyeler. Basit, kısa cümlelerle - okuma alıştırması ve
   kelime tıklama için uygun. Her hikâye cümle cümle dizilir; her
   cümlenin İngilizcesi ve Türkçesi birlikte tutulur.
   ============================================================ */
(function (KI) {
  'use strict';

  var S = [];

  S.push({
    id: 'ay-mi-gunes-mi',
    cat: 'nasreddin',
    title: 'Is the Moon More Useful, or the Sun?',
    tr: 'Ay mı Faydalı, Güneş mi?',
    summary: 'Hoca, ay ile güneşten hangisinin daha faydalı olduğunu şaşırtıcı bir şekilde açıklar.',
    sentences: [
      { en: 'One night, some friends were sitting together in the garden.', tr: 'Bir gece, birkaç arkadaş bahçede bir arada oturuyordu.' },
      { en: 'Nasreddin Hodja, said one friend, which is more useful, the moon or the sun?', tr: 'Nasreddin Hoca, dedi arkadaşlarından biri, ay mı daha faydalı, güneş mi?' },
      { en: 'Hodja thought for a moment.', tr: 'Hoca bir an düşündü.' },
      { en: 'The moon is much more useful, he said.', tr: 'Ay çok daha faydalıdır, dedi.' },
      { en: 'Why is that, Hodja? asked his friend.', tr: 'Neden öyle Hoca? diye sordu arkadaşı.' },
      { en: 'Because the moon shines at night, when we truly need the light, said Hodja.', tr: 'Çünkü ay geceleri, ışığa gerçekten ihtiyacımız olduğunda parlar, dedi Hoca.' },
      { en: 'But the sun shines during the day, when we already have plenty of light.', tr: 'Ama güneş, zaten bol ışığımız olan gündüz vakti parlar.' },
      { en: 'Everyone laughed, but no one could disagree with him.', tr: 'Herkes güldü ama kimse ona itiraz edemedi.' }
    ]
  });

  S.push({
    id: 'kazan-dogurdu',
    cat: 'nasreddin',
    title: 'The Cauldron That Gave Birth',
    tr: 'Doğuran Kazan',
    summary: 'Hoca, komşusundan ödünç aldığı kazanla ders veren bir oyun oynar.',
    sentences: [
      { en: 'One day, Hodja borrowed a big cauldron from his neighbour.', tr: 'Bir gün Hoca, komşusundan büyük bir kazan ödünç aldı.' },
      { en: 'He put a small pot inside the cauldron and returned it the next morning.', tr: 'Kazanın içine küçük bir tencere koydu ve ertesi sabah geri götürdü.' },
      { en: 'What is this small pot? asked the neighbour, surprised.', tr: 'Bu küçük tencere de ne? diye sordu komşusu şaşırarak.' },
      { en: 'Your cauldron gave birth to a baby pot last night, said Hodja with a smile.', tr: 'Kazanınız dün gece bir yavru tencere doğurdu, dedi Hoca gülümseyerek.' },
      { en: 'The neighbour was very happy and took both the cauldron and the little pot.', tr: 'Komşu çok sevindi ve hem kazanı hem de küçük tencereyi aldı.' },
      { en: 'A few weeks later, Hodja borrowed the same cauldron again.', tr: 'Birkaç hafta sonra Hoca aynı kazanı yine ödünç aldı.' },
      { en: 'But this time, he never returned it.', tr: 'Ama bu sefer hiç geri götürmedi.' },
      { en: 'The neighbour finally went to Hodja’s house and asked for his cauldron.', tr: 'Sonunda komşu, Hoca’nın evine gidip kazanını istedi.' },
      { en: 'I am very sorry, said Hodja, but your cauldron died last week.', tr: 'Çok üzgünüm, dedi Hoca, ama kazanınız geçen hafta öldü.' },
      { en: 'A cauldron cannot die! shouted the neighbour angrily.', tr: 'Bir kazan ölemez! diye bağırdı komşu öfkeyle.' },
      { en: 'Well, said Hodja, you believed me when I said it gave birth. Why not believe me now?', tr: 'Peki, dedi Hoca, doğurduğunu söylediğimde bana inandın. Şimdi neden inanmıyorsun?' }
    ]
  });

  S.push({
    id: 'kaybolan-yuzuk',
    cat: 'nasreddin',
    title: 'The Lost Ring',
    tr: 'Kaybolan Yüzük',
    summary: 'Hoca, yüzüğünü kaybettiği yerde değil, ışığın olduğu yerde arar.',
    sentences: [
      { en: 'One evening, Hodja was searching for something under a street lamp.', tr: 'Bir akşam Hoca, sokak lambasının altında bir şey arıyordu.' },
      { en: 'A neighbour saw him and asked, what are you looking for, Hodja?', tr: 'Bir komşusu onu görüp sordu, ne arıyorsun Hoca?' },
      { en: 'I lost my ring, said Hodja, still searching on the ground.', tr: 'Yüzüğümü kaybettim, dedi Hoca, hâlâ yerde ararken.' },
      { en: 'The neighbour got down and began to search too.', tr: 'Komşu da eğilip aramaya başladı.' },
      { en: 'After a long time, he asked, where exactly did you lose it?', tr: 'Uzun bir süre sonra sordu, tam olarak nerede kaybettin?' },
      { en: 'I lost it inside my house, answered Hodja calmly.', tr: 'Evimin içinde kaybettim, diye cevap verdi Hoca sakince.' },
      { en: 'Then why are we searching out here? asked the neighbour in surprise.', tr: 'O zaman neden burada arıyoruz? diye sordu komşu şaşkınlıkla.' },
      { en: 'Because there is much more light out here, said Hodja.', tr: 'Çünkü burada çok daha fazla ışık var, dedi Hoca.' }
    ]
  });

  S.push({
    id: 'ikiniz-de-haklisiniz',
    cat: 'nasreddin',
    title: 'You Are Right, Too',
    tr: 'Sen de Haklısın',
    summary: 'İki komşu bir anlaşmazlığı çözmesi için Hoca’ya gelir.',
    sentences: [
      { en: 'Two neighbours came to Hodja with a difficult problem.', tr: 'İki komşu, zor bir sorunla Hoca’ya geldi.' },
      { en: 'They wanted him to decide who was right.', tr: 'Kimin haklı olduğuna karar vermesini istediler.' },
      { en: 'The first man explained his side of the story.', tr: 'İlk adam kendi tarafını anlattı.' },
      { en: 'You are right, said Hodja.', tr: 'Sen haklısın, dedi Hoca.' },
      { en: 'Then the second man explained his side of the story.', tr: 'Sonra ikinci adam kendi tarafını anlattı.' },
      { en: 'You are right, too, said Hodja.', tr: 'Sen de haklısın, dedi Hoca.' },
      { en: 'Hodja’s wife, who was listening nearby, said, they cannot both be right!', tr: 'Yakında dinleyen Hoca’nın karısı, ikisi de haklı olamaz! dedi.' },
      { en: 'Hodja turned to her and said, you are right, too, my dear.', tr: 'Hoca ona döndü ve dedi ki, sen de haklısın canım.' }
    ]
  });

  S.push({
    id: 'ters-binmek',
    cat: 'nasreddin',
    title: 'Riding the Donkey Backwards',
    tr: 'Eşeğe Ters Binmek',
    summary: 'Hoca eşeğine ters biner, çocuklar güler ama Hoca’nın güzel bir açıklaması vardır.',
    sentences: [
      { en: 'One day, Hodja rode his donkey through the village, sitting backwards.', tr: 'Bir gün Hoca, ters oturarak eşeğiyle köyden geçti.' },
      { en: 'The children began to laugh and point at him.', tr: 'Çocuklar gülmeye ve onu göstermeye başladı.' },
      { en: 'Hodja, you are sitting the wrong way! they shouted.', tr: 'Hoca, yanlış tarafa oturmuşsun! diye bağırdılar.' },
      { en: 'No, said Hodja, the donkey is going the wrong way.', tr: 'Hayır, dedi Hoca, yanlış giden eşek.' },
      { en: 'But why don’t you just turn around? asked a boy.', tr: 'Peki neden dönüp doğru oturmuyorsun? diye sordu bir çocuk.' },
      { en: 'If I turn around, said Hodja, I will have my back to all of you, and that would be rude.', tr: 'Dönersem, dedi Hoca, hepinize sırtımı dönmüş olurum, bu da kabalık olur.' },
      { en: 'The children laughed even more, but they understood his kindness.', tr: 'Çocuklar daha da çok güldü ama onun inceliğini anladılar.' }
    ]
  });

  S.push({
    id: 'corba-kokusu',
    cat: 'nasreddin',
    title: 'The Smell of Soup and the Sound of Money',
    tr: 'Çorba Kokusu ve Para Sesi',
    summary: 'Fakir bir yolcu, çorba kokusunu koklamanın bedelini Hoca’nın adaletiyle öder.',
    sentences: [
      { en: 'A poor traveller stopped outside a small restaurant.', tr: 'Fakir bir yolcu, küçük bir lokantanın önünde durdu.' },
      { en: 'He had no money, but he stood near the door and enjoyed the smell of the soup.', tr: 'Parası yoktu ama kapının yanında durup çorbanın kokusunu içine çekti.' },
      { en: 'The restaurant owner saw him and became very angry.', tr: 'Lokantanın sahibi onu gördü ve çok sinirlendi.' },
      { en: 'You are enjoying my soup without paying! he shouted. Pay me now!', tr: 'Çorbamdan para ödemeden faydalanıyorsun! diye bağırdı. Şimdi öde!' },
      { en: 'The poor traveller had no money, so people called Hodja to solve the problem.', tr: 'Fakir yolcunun parası yoktu, bu yüzden insanlar sorunu çözmesi için Hoca’yı çağırdı.' },
      { en: 'Hodja listened carefully to both men.', tr: 'Hoca her iki adamı da dikkatle dinledi.' },
      { en: 'Then he took a few coins from his pocket and shook them near the owner’s ear.', tr: 'Sonra cebinden birkaç madeni para çıkarıp sahibin kulağının yanında salladı.' },
      { en: 'What are you doing? asked the owner, confused.', tr: 'Ne yapıyorsun? diye sordu sahip, şaşkın bir şekilde.' },
      { en: 'You gave this man the smell of your soup, said Hodja, so I am giving you the sound of my money.', tr: 'Sen bu adama çorbanın kokusunu verdin, dedi Hoca, ben de sana paramın sesini veriyorum.' },
      { en: 'Now you are both paid, and no one owes anyone anything.', tr: 'Artık ikiniz de ödendi, kimse kimseye borçlu değil.' },
      { en: 'Everyone in the street laughed, and the owner walked away without another word.', tr: 'Sokaktaki herkes güldü ve sahip tek kelime etmeden uzaklaştı.' }
    ]
  });

  S.push({
    id: 'keloglan-bilge-cevap',
    cat: 'halk',
    title: 'Keloğlan and the Wise Answer',
    tr: 'Keloğlan ve Bilge Cevap',
    summary: 'Fakir ama zeki bir çocuk olan Keloğlan, kralın zor sorusuna en akıllıca cevabı verir.',
    sentences: [
      { en: 'Long ago, in a small village, there lived a poor but clever boy named Keloğlan.', tr: 'Uzun zaman önce, küçük bir köyde, Keloğlan adında fakir ama zeki bir çocuk yaşardı.' },
      { en: 'Keloğlan lived with his old mother in a very small house.', tr: 'Keloğlan, yaşlı annesiyle çok küçük bir evde yaşardı.' },
      { en: 'One day, the king announced a difficult question for the whole village.', tr: 'Bir gün kral, bütün köy için zor bir soru duyurdu.' },
      { en: 'Whoever gives the wisest answer will receive a bag of gold, said the king’s messenger.', tr: 'En bilge cevabı veren bir torba altın kazanacak, dedi kralın habercisi.' },
      { en: 'The question was, what is heavier, a mountain or a feather?', tr: 'Soru şuydu: hangisi daha ağırdır, bir dağ mı, bir tüy mü?' },
      { en: 'Many rich men gave long, complicated answers, but the king was not satisfied.', tr: 'Birçok zengin adam uzun, karmaşık cevaplar verdi ama kral tatmin olmadı.' },
      { en: 'Then Keloğlan stepped forward and said, a feather is heavier, if it belongs to someone who has nothing else.', tr: 'Sonra Keloğlan öne çıktı ve dedi ki, başka hiçbir şeyi olmayan birine aitse bir tüy daha ağırdır.' },
      { en: 'The king smiled and said, this is the wisest answer of all.', tr: 'Kral gülümsedi ve dedi ki, bu, hepsinin içinde en bilge cevap.' },
      { en: 'Keloğlan received the bag of gold and happily returned home to his mother.', tr: 'Keloğlan altın torbasını aldı ve mutlu bir şekilde annesinin yanına döndü.' }
    ]
  });

  S.push({
    id: 'aydan-yogurt',
    cat: 'nasreddin',
    title: 'Yogurt from the Moon',
    tr: 'Ay’dan Yoğurt',
    summary: 'Hoca, gölde yüzen ayın yansımasını yoğurt sanıp yakalamaya çalışır.',
    sentences: [
      { en: 'One night, Hodja was walking beside a quiet lake.', tr: 'Bir gece Hoca, sessiz bir gölün kenarında yürüyordu.' },
      { en: 'He looked down and saw a round, white shape floating on the water.', tr: 'Aşağı baktı ve suda yüzen yuvarlak, beyaz bir şekil gördü.' },
      { en: 'That looks like a big bowl of yogurt! he said to himself.', tr: 'Bu büyük bir kase yoğurda benziyor! dedi kendi kendine.' },
      { en: 'He ran home and brought back a long rake to pull it out of the water.', tr: 'Eve koşup onu sudan çıkarmak için uzun bir tırmık getirdi.' },
      { en: 'He reached down carefully and pulled the rake through the water again and again.', tr: 'Dikkatlice eğildi ve tırmığı suda tekrar tekrar çekti.' },
      { en: 'Suddenly, he lost his balance and fell into the lake with a splash.', tr: 'Birden dengesini kaybetti ve bir çığlıkla göle düştü.' },
      { en: 'He climbed out, wet and cold, and looked up at the sky.', tr: 'Islak ve üşümüş bir şekilde çıktı ve gökyüzüne baktı.' },
      { en: 'There, he saw the moon shining brightly above him.', tr: 'Orada, ayın tepesinde parlak bir şekilde parladığını gördü.' },
      { en: 'Ah, said Hodja, so that is where you belong. I nearly drowned trying to catch you.', tr: 'Ah, dedi Hoca, demek ait olduğun yer orası. Seni yakalamaya çalışırken az kalsın boğuluyordum.' }
    ]
  });

  S.push({
    id: 'kurkum-ye',
    cat: 'nasreddin',
    title: 'Eat, My Coat, Eat!',
    tr: 'Ye Kürküm Ye!',
    summary: 'Hoca, eski kıyafetiyle görmezden gelindiği bir yemeğe bu kez kürküyle gelir.',
    sentences: [
      { en: 'One evening, Hodja was invited to a rich man’s dinner party.', tr: 'Bir akşam Hoca, zengin bir adamın yemek davetine çağrıldı.' },
      { en: 'He arrived wearing his old, simple coat, and no one greeted him warmly.', tr: 'Eski, sade paltosuyla geldi ve kimse onu sıcak karşılamadı.' },
      { en: 'The servants gave him a seat far from the table and ignored him all evening.', tr: 'Hizmetkârlar ona masadan uzak bir yer verdi ve bütün akşam onu görmezden geldi.' },
      { en: 'Hodja quietly went home, put on his best fur coat, and returned to the party.', tr: 'Hoca sessizce eve gitti, en güzel kürkünü giydi ve partiye geri döndü.' },
      { en: 'This time, everyone stood up and welcomed him with great respect.', tr: 'Bu sefer herkes ayağa kalktı ve onu büyük bir saygıyla karşıladı.' },
      { en: 'They gave him the best seat and served him the finest food first.', tr: 'Ona en iyi yeri verdiler ve önce en güzel yemekleri sundular.' },
      { en: 'Hodja took a piece of meat and pushed it into his coat sleeve.', tr: 'Hoca bir parça et alıp kürkünün koluna soktu.' },
      { en: 'Eat, my coat, eat! he said loudly.', tr: 'Ye kürküm, ye! dedi yüksek sesle.' },
      { en: 'The other guests were confused and asked him why he was feeding his coat.', tr: 'Diğer misafirler şaşırdı ve neden kürkünü beslediğini sordu.' },
      { en: 'It seems this dinner was invited for my coat, not for me, said Hodja, so my coat should enjoy it.', tr: 'Görünüşe göre bu yemeğe ben değil kürküm davet edilmiş, dedi Hoca, o zaman yesin.' }
    ]
  });

  S.push({
    id: 'on-uc-esek',
    cat: 'nasreddin',
    title: 'The Thirteenth Donkey',
    tr: 'On Üçüncü Eşek',
    summary: 'Hoca eşeklerini sayarken, üzerinde oturduğu eşeği saymayı unutur.',
    sentences: [
      { en: 'One day, Hodja was riding one donkey and leading twelve others behind him.', tr: 'Bir gün Hoca bir eşeğe biniyor, arkasında on iki tanesini daha götürüyordu.' },
      { en: 'Before crossing a river, he decided to count his donkeys.', tr: 'Bir nehri geçmeden önce eşeklerini saymaya karar verdi.' },
      { en: 'He counted the twelve donkeys walking beside him, but forgot to count the one under him.', tr: 'Yanında yürüyen on iki eşeği saydı ama altındakini saymayı unuttu.' },
      { en: 'Only twelve! he cried. I have lost one of my donkeys!', tr: 'Sadece on iki! diye bağırdı. Eşeklerimden birini kaybettim!' },
      { en: 'He searched everywhere along the road, but he could not find the missing donkey.', tr: 'Yol boyunca her yeri aradı ama kayıp eşeği bulamadı.' },
      { en: 'A young boy saw him searching and asked what was wrong.', tr: 'Genç bir çocuk onu ararken gördü ve neyin yanlış olduğunu sordu.' },
      { en: 'Hodja explained that he had thirteen donkeys but could only count twelve.', tr: 'Hoca, on üç eşeği olduğunu ama sadece on iki tanesini sayabildiğini anlattı.' },
      { en: 'The boy laughed and said, Hodja, you are sitting on the thirteenth one!', tr: 'Çocuk güldü ve dedi ki, Hoca, on üçüncüsünün üstünde oturuyorsun!' },
      { en: 'Hodja looked down, laughed at himself, and rode home with all thirteen donkeys.', tr: 'Hoca aşağı baktı, kendine güldü ve on üç eşeğiyle evine döndü.' }
    ]
  });

  S.push({
    id: 'esek-evde-yok',
    cat: 'nasreddin',
    title: 'The Donkey Is Not Home',
    tr: 'Eşek Evde Yok',
    summary: 'Hoca, eşeğini ödünç vermemek için yalan söyler ama eşek kendini ele verir.',
    sentences: [
      { en: 'A neighbour came to Hodja’s house and asked to borrow his donkey for the day.', tr: 'Bir komşu, Hoca’nın evine gelip eşeğini bir günlüğüne ödünç istedi.' },
      { en: 'Hodja did not want to lend it, so he said, I am sorry, the donkey is not home today.', tr: 'Hoca ödünç vermek istemedi ve dedi ki, üzgünüm, eşek bugün evde değil.' },
      { en: 'At that exact moment, the donkey began to bray loudly from behind the house.', tr: 'Tam o anda eşek, evin arkasından yüksek sesle anırmaya başladı.' },
      { en: 'The neighbour looked confused and said, but Hodja, I can hear your donkey right there!', tr: 'Komşu şaşırdı ve dedi ki, ama Hoca, eşeğini tam orada duyabiliyorum!' },
      { en: 'Hodja became a little angry and said, who do you believe, an old man like me or a donkey?', tr: 'Hoca biraz sinirlendi ve dedi ki, benim gibi yaşlı bir adama mı yoksa bir eşeğe mi inanıyorsun?' },
      { en: 'The neighbour did not know what to say and walked away, shaking his head.', tr: 'Komşu ne diyeceğini bilemedi ve başını sallayarak uzaklaştı.' },
      { en: 'Later, Hodja’s friends asked him why he had said such a strange thing.', tr: 'Daha sonra Hoca’nın arkadaşları neden böyle garip bir şey söylediğini sordu.' },
      { en: 'A man who tells one lie must be ready to defend it with another, said Hodja with a smile.', tr: 'Bir yalan söyleyen adam, onu başka bir yalanla savunmaya hazır olmalı, dedi Hoca gülümseyerek.' }
    ]
  });

  S.push({
    id: 'ne-diyecegimi-biliyor-musunuz',
    cat: 'nasreddin',
    title: 'Do You Know What I Am Going to Say?',
    tr: 'Ne Diyeceğimi Biliyor musunuz?',
    summary: 'Hoca, camide üç farklı cuma günü aynı soruyu sorar ve her seferinde farklı bir cevap verir.',
    sentences: [
      { en: 'One Friday, Hodja was asked to give a sermon at the mosque.', tr: 'Bir cuma günü Hoca’dan camide bir vaaz vermesi istendi.' },
      { en: 'He stood up and asked the people, do you know what I am going to say?', tr: 'Ayağa kalktı ve halka sordu, ne diyeceğimi biliyor musunuz?' },
      { en: 'No, we do not know, answered everyone together.', tr: 'Hayır, bilmiyoruz, diye cevap verdi herkes birlikte.' },
      { en: 'Well then, said Hodja, there is no point talking to people who understand nothing.', tr: 'O zaman, dedi Hoca, hiçbir şey anlamayan insanlarla konuşmanın anlamı yok.' },
      { en: 'He stepped down and left without saying another word.', tr: 'Aşağı indi ve tek kelime etmeden ayrıldı.' },
      { en: 'The next Friday, he was asked to try again, and he asked the same question.', tr: 'Ertesi cuma tekrar denemesi istendi ve aynı soruyu sordu.' },
      { en: 'This time, everyone answered, yes, we know what you are going to say!', tr: 'Bu sefer herkes cevap verdi, evet, ne diyeceğini biliyoruz!' },
      { en: 'Well then, said Hodja, there is no need for me to say it at all.', tr: 'O zaman, dedi Hoca, onu hiç söylememe gerek yok.' },
      { en: 'He stepped down again, and the people were left even more confused.', tr: 'Yine aşağı indi ve insanlar daha da şaşkın kaldı.' },
      { en: 'On the third Friday, half of the people said yes, and half said no.', tr: 'Üçüncü cuma, insanların yarısı evet dedi, yarısı hayır dedi.' },
      { en: 'Well then, said Hodja calmly, let those who know tell those who do not.', tr: 'O zaman, dedi Hoca sakince, bilenler bilmeyenlere anlatsın.' },
      { en: 'And with that, he left the mosque for the third time.', tr: 'Ve böylece camiden üçüncü kez ayrıldı.' }
    ]
  });

  S.push({
    id: 'keloglan-dev-tasi',
    cat: 'halk',
    title: 'Keloğlan and the Giant’s Stone',
    tr: 'Keloğlan ve Devin Taşı',
    summary: 'Keloğlan, köyü rahatsız eden bir devi bir parça peynirle akıllıca korkutur.',
    sentences: [
      { en: 'Long ago, a giant lived in the mountains near Keloğlan’s village.', tr: 'Uzun zaman önce, Keloğlan’ın köyünün yakınındaki dağlarda bir dev yaşardı.' },
      { en: 'The giant often bothered the villagers and demanded food from them.', tr: 'Dev sık sık köylüleri rahatsız eder ve onlardan yiyecek isterdi.' },
      { en: 'One day, Keloğlan decided to visit the giant and put an end to the trouble.', tr: 'Bir gün Keloğlan, devi ziyaret edip bu soruna son vermeye karar verdi.' },
      { en: 'He hid a piece of soft white cheese in his pocket before he left.', tr: 'Gitmeden önce cebine bir parça yumuşak beyaz peynir sakladı.' },
      { en: 'When Keloğlan arrived, the giant picked up a small stone and squeezed it hard.', tr: 'Keloğlan vardığında dev küçük bir taş alıp sertçe sıktı.' },
      { en: 'Water dripped from the stone, and the giant said, look how strong I am!', tr: 'Taştan su damladı ve dev dedi ki, bak ne kadar güçlüyüm!' },
      { en: 'Keloğlan calmly took the cheese from his pocket and squeezed it in his hand.', tr: 'Keloğlan sakince cebinden peyniri çıkardı ve elinde sıktı.' },
      { en: 'Water and milk dripped from the cheese, and the giant’s eyes grew wide with fear.', tr: 'Peynirden su ve süt damladı, devin gözleri korkuyla büyüdü.' },
      { en: 'If a young man like me is this strong, thought the giant, I should leave this village alone.', tr: 'Benim gibi biri bu kadar güçlüyse, diye düşündü dev, bu köyü rahat bırakmalıyım.' },
      { en: 'From that day on, the giant never bothered the villagers again.', tr: 'O günden sonra dev, köylüleri bir daha hiç rahatsız etmedi.' }
    ]
  });

  S.push({
    id: 'keloglan-konusan-balik',
    cat: 'halk',
    title: 'Keloğlan and the Talking Fish',
    tr: 'Keloğlan ve Konuşan Balık',
    summary: 'Keloğlan’ın küçük bir balığa gösterdiği iyilik, köyünü kuraklıktan kurtarır.',
    sentences: [
      { en: 'One morning, Keloğlan went to the river to catch fish for his poor mother.', tr: 'Bir sabah Keloğlan, fakir annesi için balık tutmaya nehre gitti.' },
      { en: 'After a long wait, he caught a small golden fish in his net.', tr: 'Uzun bir bekleyişten sonra ağına küçük altın bir balık takıldı.' },
      { en: 'To his surprise, the fish spoke to him in a soft, clear voice.', tr: 'Şaşırtıcı bir şekilde balık ona yumuşak, net bir sesle konuştu.' },
      { en: 'Please let me go, said the fish, and I will help you when you need it most.', tr: 'Lütfen beni bırak, dedi balık, en çok ihtiyacın olduğunda sana yardım edeceğim.' },
      { en: 'Keloğlan felt sorry for the little fish and gently placed it back in the water.', tr: 'Keloğlan küçük balığa acıdı ve onu nazikçe suya geri bıraktı.' },
      { en: 'He did not ask for gold or treasure; he simply wanted to help.', tr: 'Altın ya da hazine istemedi; sadece yardım etmek istedi.' },
      { en: 'Years later, a terrible drought came, and the village river dried up completely.', tr: 'Yıllar sonra korkunç bir kuraklık geldi ve köyün nehri tamamen kurudu.' },
      { en: 'Keloğlan sat sadly by the dry riverbed, remembering the golden fish.', tr: 'Keloğlan kuru nehir yatağının yanında üzgün bir şekilde oturdu, altın balığı hatırladı.' },
      { en: 'Suddenly, the same fish appeared in a small pool of water and spoke to him again.', tr: 'Birden aynı balık küçük bir su birikintisinde belirdi ve ona tekrar konuştu.' },
      { en: 'Because you were kind to me, said the fish, I will show you where fresh water flows underground.', tr: 'Bana iyi davrandığın için, dedi balık, sana yer altında temiz suyun nereden aktığını göstereceğim.' },
      { en: 'Keloğlan followed the fish’s directions and found a spring that saved the whole village.', tr: 'Keloğlan balığın gösterdiği yönü izledi ve bütün köyü kurtaran bir kaynak buldu.' }
    ]
  });

  S.push({
    id: 'keloglan-pasa',
    cat: 'halk',
    title: 'Keloğlan Outwits the Pasha',
    tr: 'Keloğlan Paşayı Alt Ediyor',
    summary: 'Kibirli bir paşa Keloğlan’ı küçümser, ama akıllı bir cevapla haksız çıkar.',
    sentences: [
      { en: 'A proud pasha once visited Keloğlan’s village and mocked the poor villagers.', tr: 'Kibirli bir paşa bir keresinde Keloğlan’ın köyünü ziyaret etti ve fakir köylülerle alay etti.' },
      { en: 'He announced a contest: whoever could answer his riddle would receive a bag of silver.', tr: 'Bir yarışma duyurdu: bilmecesini kim cevaplarsa bir torba gümüş kazanacaktı.' },
      { en: 'Many clever men tried and failed to answer the pasha’s difficult riddle.', tr: 'Birçok zeki adam denedi ve paşanın zor bilmecesini cevaplayamadı.' },
      { en: 'Keloğlan, wearing his simple, worn clothes, stepped forward to try.', tr: 'Sade, eskimiş kıyafetleriyle Keloğlan, denemek için öne çıktı.' },
      { en: 'The pasha laughed and said, what could a poor, bald boy like you possibly know?', tr: 'Paşa güldü ve dedi ki, senin gibi fakir, kel bir çocuk ne bilebilir ki?' },
      { en: 'Keloğlan smiled and said, a full sack stands quietly, but an empty one makes a lot of noise.', tr: 'Keloğlan gülümsedi ve dedi ki, dolu bir çuval sessizce durur, ama boş bir çuval çok gürültü yapar.' },
      { en: 'The pasha did not understand, so Keloğlan explained, a wise man listens more than he speaks.', tr: 'Paşa anlamadı, bunun üzerine Keloğlan açıkladı, akıllı bir adam konuşmaktan çok dinler.' },
      { en: 'But a foolish one, like you today, talks and mocks without thinking, he added calmly.', tr: 'Ama bugünkü gibi aptal biri, düşünmeden konuşur ve alay eder, diye ekledi sakince.' },
      { en: 'The villagers laughed, and even the pasha had to admit that Keloğlan was right.', tr: 'Köylüler güldü ve paşa bile Keloğlan’ın haklı olduğunu kabul etmek zorunda kaldı.' },
      { en: 'Ashamed but fair, the pasha gave Keloğlan the bag of silver and left the village quietly.', tr: 'Utanmış ama adil bir şekilde paşa, Keloğlan’a gümüş torbasını verdi ve köyden sessizce ayrıldı.' }
    ]
  });

  /* ---- Nasreddin Hoca ve Keloğlan dışında, Anadolu masal motiflerinden
     esinlenerek hazırlanmış özgün, yerelleşmiş anonim hikayeler ---- */
  S.push({
    id: 'karganin-dikeni',
    cat: 'halk',
    title: 'The Thorn in the Crow\'s Foot',
    tr: 'Ayağına Diken Batan Karga',
    summary: 'Ayağına diken batan bir karga, kendisine yardım eden yaşlı kadına küçük bir iyilikle karşılık verir.',
    sentences: [
      { en: 'A crow landed on a mulberry tree beside the village fountain, and a thin thorn stuck into its foot.', tr: 'Bir karga, köy çeşmesinin yanındaki dut ağacına konarken ayağına ince bir diken batırdı.' },
      { en: 'At first, it cried loudly, but then it became quiet when it saw that no one understood it.', tr: 'Önce bağırıp çağırdı, sonra kimsenin onu anlamadığını görünce susup düşündü.' },
      { en: 'An old woman came to the fountain and noticed that the crow was walking with difficulty.', tr: 'Çeşmeye gelen yaşlı bir kadın, karganın sekerek yürüdüğünü fark etti.' },
      { en: 'She took a small cloth from her basket, came close without frightening the bird, and removed the thorn.', tr: 'Sepetinden küçük bir bez çıkardı, kargayı ürkütmeden yanına yaklaştı ve dikeni çıkardı.' },
      { en: 'After that day, the crow began to collect bread crumbs around the fountain.', tr: 'Karga o günden sonra çeşmenin çevresinde yere düşen ekmek kırıntılarını toplamaya başladı.' },
      { en: 'When children made the fountain dirty, it flapped its wings and warned them.', tr: 'Çocuklar çeşmenin başını kirletince kanat çırpıp onları uyardı.' },
      { en: 'The villagers started to say, "One kindness can last longer than the shade of a tree."', tr: 'Köylüler, "Bir iyilik bazen bir ağacın gölgesinden daha uzun sürer," demeye başladı.' }
    ]
  });

  S.push({
    id: 'tencerecik',
    cat: 'halk',
    title: 'The Little Pot',
    tr: 'Tencerecik',
    summary: 'Kirli iade edilen bir tencere, sessiz ama etkili bir dille komşuya ders verir.',
    sentences: [
      { en: 'In a village, there was a small copper pot.', tr: 'Bir köyde küçük, bakır bir tencere varmış.' },
      { en: 'Its owner was an old woman who lent it to every neighbor, but always wanted it back clean.', tr: 'Sahibi yaşlı bir kadınmış; tencereyi her komşusuna ödünç verir ama geri gelince mutlaka temiz istermiş.' },
      { en: 'One day, a hurried neighbor returned the pot dirty.', tr: 'Bir gün aceleci bir komşu tencereyi kirli getirmiş.' },
      { en: 'The woman said nothing; she only placed the pot by the window.', tr: 'Kadın hiçbir şey dememiş, sadece tencereyi pencerenin önüne koymuş.' },
      { en: 'At night, the wind rose, and the pot made a soft clattering sound.', tr: 'Gece rüzgar çıkmış, tencere tıkır tıkır ses etmiş.' },
      { en: 'The neighbor heard it and felt ashamed, so early in the morning she came back and washed the pot carefully.', tr: 'Komşu bu sesi duyunca utanmış; sabah erkenden gelip tencereyi güzelce yıkamış.' },
      { en: 'The old woman smiled and said, "We think objects have no voice, but a borrowed thing always makes itself heard."', tr: 'Yaşlı kadın gülümsemiş: "Eşyanın dili yok sanırız, ama emanetin sesi vardır," demiş.' },
      { en: 'From that day on, everything borrowed in the village was checked twice before it was returned.', tr: 'O günden sonra köyde ödünç alınan her şey iki kez kontrol edilerek geri verilmiş.' }
    ]
  });

  S.push({
    id: 'tik-sopam',
    cat: 'halk',
    title: 'My Tapping Stick',
    tr: 'Tık Sopam',
    summary: 'Bir çobanın bulduğu esrarengiz sopa, aslında yol göstereninin sopa değil niyet olduğunu öğretir.',
    sentences: [
      { en: 'A shepherd was looking for his lost lambs on the highland when he found a thin stick under an old juniper tree.', tr: 'Bir çoban, yaylada kaybolan kuzularını ararken eski bir ardıç ağacının altında ince bir sopa buldu.' },
      { en: 'There were small marks on it.', tr: 'Sopanın üstünde küçük çizikler vardı.' },
      { en: 'When the shepherd tapped the stick on the ground, it made a clear "tap" sound and bent as if it were showing the way.', tr: 'Çoban sopayı yere vurunca sopa "tık" diye ses verdi ve kuzuların gittiği tarafı gösterir gibi eğildi.' },
      { en: 'The shepherd found the lambs, but he did not use the stick to become rich.', tr: 'Çoban kuzuları buldu, ama sopayı zengin olmak için kullanmadı.' },
      { en: 'Whenever someone in the village lost a path or a cow ran into the hills, he took the stick and helped.', tr: 'Köyde kimin yolu kaybolsa, kimin ineği dağa kaçsa, sopayı alıp yardım etti.' },
      { en: 'One day, a greedy man tried to steal it.', tr: 'Bir gün açgözlü biri sopayı çalmak istedi.' },
      { en: 'In his hand, the stick made no sound at all.', tr: 'Sopa onun elinde hiç ses çıkarmadı.' },
      { en: 'The shepherd smiled and said, "It was not the stick that showed the way, but the intention."', tr: 'Çoban gülüp, "Yol gösteren şey sopa değil, niyetmiş," dedi.' }
    ]
  });

  S.push({
    id: 'balikci-guzeli',
    cat: 'halk',
    title: 'The Fisherman\'s Fair Girl',
    tr: 'Balıkçı Güzeli',
    summary: 'Genç bir balıkçı kızı, yırtık bir ağı onararak ve en küçük balıkları serbest bırakarak gerçek bereketi öğretir.',
    sentences: [
      { en: 'A young girl lived by the sea and collected fishing nets with her father every morning.', tr: 'Deniz kıyısında yaşayan genç bir kız, babasıyla her sabah ağları toplarmış.' },
      { en: 'People in the town called her "the fisherman\'s fair girl" because her words were as clear as her face was bright.', tr: 'Kasabadakiler ona "Balıkçı Güzeli" dermiş; çünkü yüzü kadar sözü de temizmiş.' },
      { en: 'One morning, the nets came back empty.', tr: 'Bir sabah ağlar bomboş çıkmış.' },
      { en: 'Her father was sad, but the girl did not get angry at the sea.', tr: 'Babası üzülmüş, ama kız denize kızmamış.' },
      { en: 'That day, she found a small torn net on the shore.', tr: 'O gün kıyıda yırtılmış küçük bir ağ bulmuş.' },
      { en: 'She sat for hours and repaired it.', tr: 'Saatlerce oturup ağı onarmış.' },
      { en: 'The next morning, they cast the repaired net into the sea.', tr: 'Ertesi sabah onardığı ağı denize bırakmışlar.' },
      { en: 'It came back full, but the girl released the smallest fish back into the water.', tr: 'Ağ dolu gelmiş, fakat kız balıkların en küçüklerini tekrar suya salmış.' },
      { en: 'Her father said, "Blessing is not only knowing how to take, but also knowing how to let life continue."', tr: 'Babası, "Bereket sadece almak değil, yaşatmayı da bilmektir," demiş.' }
    ]
  });

  S.push({
    id: 'can-kusu',
    cat: 'halk',
    title: 'The Bird Inside the Heart',
    tr: 'Can Kuşu',
    summary: 'Genç bir demirci, öfkesini yenip sakin kalınca içindeki kuşun ne kadar güzel öttüğünü keşfeder.',
    sentences: [
      { en: 'In a village, people believed that an invisible bird lived in every heart.', tr: 'Bir köyde herkesin kalbinde görünmez bir kuş yaşadığına inanılırmış.' },
      { en: 'When a person became angry, the bird beat its wings, and when a person did something kind, the bird sang.', tr: 'İnsan öfkelendiğinde kuş kanat çırpar, insan iyilik yaptığında kuş şarkı söylermiş.' },
      { en: 'A young blacksmith became very angry at a man who treated him unfairly in the market.', tr: 'Genç bir demirci, çarşıda kendisine haksızlık eden adama çok kızmış.' },
      { en: 'Just before shouting, he felt a small flutter in his chest.', tr: 'Tam bağıracakken göğsünde küçük bir çırpınma duymuş.' },
      { en: 'The blacksmith went home and sat silently by the fire for a long time.', tr: 'Demirci eve dönmüş, ateşin başında uzun süre susmuş.' },
      { en: 'The next day, he visited the man and spoke calmly.', tr: 'Ertesi gün adama gidip sakin konuşmuş.' },
      { en: 'The man accepted his mistake.', tr: 'Adam hatasını kabul etmiş.' },
      { en: 'That evening, the bird inside the blacksmith sang so beautifully that he understood he should listen to the voice inside him more than his loudest words.', tr: 'O akşam demircinin içindeki kuş ilk kez öyle güzel ötmüş ki demirci, kendi sesinden çok içindeki sesi dinlemesi gerektiğini anlamış.' }
    ]
  });

  S.push({
    id: 'cor-kusu',
    cat: 'halk',
    title: 'The Bird That Warned the Village',
    tr: 'Çor Kuşu',
    summary: 'Uğursuz sanılan bir kuşun sesi, aslında köyü büyük bir tehlikeden kurtaran bir uyarıymış.',
    sentences: [
      { en: 'In a mountain village, everyone feared a small gray bird that sang at night.', tr: 'Dağ köylerinden birinde, gece öten küçük gri bir kuştan herkes korkarmış.' },
      { en: 'They called it the "Çor Bird" and closed their doors tightly when they heard its voice.', tr: 'Ona "Çor Kuşu" der, sesini duyunca kapıları sıkıca kapatırlarmış.' },
      { en: 'One winter night, the bird sang again.', tr: 'Bir kış gecesi kuş yine ötmüş.' },
      { en: 'The villagers were afraid, but a young girl noticed that the bird always flew in the same direction.', tr: 'Köylüler korkmuş, ama genç bir kız kuşun hep aynı yöne uçtuğunu fark etmiş.' },
      { en: 'She woke her father.', tr: 'Kız babasını uyandırmış.' },
      { en: 'Together, they followed the bird.', tr: 'Birlikte kuşun peşinden gitmişler.' },
      { en: 'On the roof of the old storehouse, snow had piled up, and the roof was about to collapse.', tr: 'Eski ambarın çatısında kar birikmiş, çatı çökmek üzereymiş.' },
      { en: 'The villagers came and cleared the snow in time.', tr: 'Köylüler yetişip karı temizlemiş.' },
      { en: 'The next morning, everyone understood: the bird did not bring bad luck; it warned them of danger.', tr: 'Ertesi sabah herkes anlamış: Kuş uğursuzluk getirmiyor, tehlikeyi haber veriyormuş.' },
      { en: 'After that day, every strange sound in the village was first listened to and only then judged.', tr: 'O günden sonra köyde her garip ses önce dinlenmiş, sonra yargılanmış.' }
    ]
  });

  S.push({
    id: 'ilik-sultan',
    cat: 'halk',
    title: 'İlik Sultan',
    tr: 'İlik Sultan',
    summary: 'Sarayı ve tacı olmayan sessiz bir genç kız, herkese yardım ettiği için gerçek bir sultan olarak anılır.',
    sentences: [
      { en: 'In a distant town, there lived a quiet young woman named İlik Sultan.', tr: 'Uzak bir kasabada İlik Sultan adında sessiz bir genç kız yaşarmış.' },
      { en: 'No one knew why people called her "sultan," because she had no palace and no golden crown.', tr: 'Kimse onun neden "sultan" diye çağrıldığını bilmezmiş; çünkü ne sarayı varmış ne de altın tacı.' },
      { en: 'Yet when two people argued, they went to her first; lost children were found with her directions, and she knew which soup would help a sick neighbor.', tr: 'Fakat kasabada iki kişi kavga etse önce ona gider, kaybolan çocuk onun tarifleriyle bulunur, hasta komşuya hangi çorbanın iyi geleceğini o bilirmiş.' },
      { en: 'One day, a stranger came to the town and said, "A real sultan should look grand."', tr: 'Bir gün kasabaya yabancı bir bey gelmiş ve "Sultan dediğin gösterişli olur," demiş.' },
      { en: 'İlik Sultan did not answer.', tr: 'İlik Sultan cevap vermemiş.' },
      { en: 'She only cleaned the stones of the dry fountain and opened the blocked water channel.', tr: 'Sadece kurumuş çeşmenin taşlarını temizlemiş, su yolunu açmış.' },
      { en: 'By evening, the fountain began to flow again.', tr: 'Akşama doğru çeşme akmaya başlamış.' },
      { en: 'Then the stranger understood: some people\'s crowns are not on their heads, but in the work they do.', tr: 'Bey o zaman anlamış: Bazı insanların tacı başında değil, yaptığı iştedir.' }
    ]
  });

  S.push({
    id: 'zengin-hamami',
    cat: 'halk',
    title: 'The Rich Man\'s Bathhouse',
    tr: 'Zengin Hamamı',
    summary: 'Süslü ama soğuk bir hamamla eski ama sıcak bir hamam karşılaştırılır; asıl değerin süsten değil içtenlikten geldiği anlaşılır.',
    sentences: [
      { en: 'A new and fancy bathhouse opened in a town.', tr: 'Bir kasabada yeni ve süslü bir hamam açılmış.' },
      { en: 'It had colored glass at the door and decorated bowls inside.', tr: 'Kapısında renkli camlar, içinde işlemeli taslar varmış.' },
      { en: 'Its owner said, "Everyone who enters this bathhouse leaves like a rich person."', tr: 'Sahibi, "Bu hamama giren herkes zengin gibi çıkar," dermiş.' },
      { en: 'But the water often stopped, and the workers treated tired people harshly.', tr: 'Fakat hamamın suyu sık sık kesilir, çalışanlar yorgun insanlara sert davranırmış.' },
      { en: 'At the other end of the town, there was an old bathhouse.', tr: 'Kasabanın öbür ucunda eski bir hamam daha varmış.' },
      { en: 'Its stones were cracked, but its water was warm, and its workers were kind.', tr: 'Taşları çatlakmış ama suyu sıcak, çalışanları güler yüzlüymüş.' },
      { en: 'One day, a tired craftsman visited both bathhouses.', tr: 'Bir gün yol yorgunu bir usta iki hamama da gitmiş.' },
      { en: 'When he came out, he said, "In one place, the marble shone, but in the other, my heart felt clean."', tr: 'Çıkınca, "Birinde mermer parladı, ötekinde içim ferahladı," demiş.' },
      { en: 'After that, the townspeople did not forget that true cleanliness comes before decoration.', tr: 'Bundan sonra kasabalılar, temizliğin süsten önce geldiğini unutmamış.' }
    ]
  });

  S.push({
    id: 'helvaci-guzeli',
    cat: 'halk',
    title: 'The Halva Maker\'s Daughter',
    tr: 'Helvacı Güzeli',
    summary: 'Genç bir helvacı kızı, herkese aynı dürüst ölçüyle davranarak çarşının en saygın ustasının takdirini kazanır.',
    sentences: [
      { en: 'In the old bazaar, there lived the daughter of a halva maker.', tr: 'Eski çarşıda bir helvacının kızı yaşarmış.' },
      { en: 'When her father became ill, she took care of the stall.', tr: 'Babası hastalanınca tezgahın başına o geçmiş.' },
      { en: 'Some people tried to deceive her because she was young: some gave less money, others asked for more halva.', tr: 'Bazıları genç diye onu kandırmak istemiş; eksik para veren olmuş, fazla helva isteyen olmuş.' },
      { en: 'She did not get angry, but placed the scale in the middle and served everyone with the same measure.', tr: 'Kız hiçbirine kızmamış, teraziyi ortaya koymuş ve herkese aynı ölçüyle helva vermiş.' },
      { en: 'One day, an old man came and said, "Give me your sweetest halva."', tr: 'Bir gün yaşlı bir adam gelip "Bana en tatlı helvandan ver," demiş.' },
      { en: 'The girl replied, "The sweetest part is not in the sugar, but in the honest measure," and adjusted the scale carefully.', tr: 'Kız, "En tatlısı şekerde değil, helal ölçüdedir," deyip teraziyi dikkatle ayarlamış.' },
      { en: 'The man smiled; he was the oldest master in the bazaar.', tr: 'Adam gülümsemiş; meğer çarşının en eski ustasıymış.' },
      { en: 'After that, people said they bought not only halva from her stall, but also honesty.', tr: 'O günden sonra herkes helvacı kızın tezgahından sadece helva değil, doğruluk da aldığını söylemiş.' }
    ]
  });

  S.push({
    id: 'tasa-kusu',
    cat: 'halk',
    title: 'The Worry Birds',
    tr: 'Tasa Kuşu',
    summary: 'Derdini içine atan bir kadın, komşusuyla konuşup paylaşınca omzundaki görünmez yükün hafiflediğini fark eder.',
    sentences: [
      { en: 'In a town, when people told no one about their troubles, small black birds landed on the roofs of their houses.', tr: 'Bir kasabada insanlar dertlerini kimseye söylemeyince evlerin saçaklarına küçük siyah kuşlar konarmış.' },
      { en: 'These birds were called "worry birds."', tr: 'Bu kuşlara "Tasa Kuşu" denirmiş.' },
      { en: 'At one woman\'s house, three birds waited every morning.', tr: 'Bir kadının evinde her sabah üç kuş bekler olmuş.' },
      { en: 'She stayed silent because she did not want to upset anyone, but the more she stayed silent, the more the birds gathered.', tr: 'Kadın kimseyi üzmemek için susarmış, ama sustukça kuşlar çoğalırmış.' },
      { en: 'One day, her neighbor brought her warm soup and simply said, "You can tell me if you want."', tr: 'Bir gün komşusu ona sıcak çorba getirmiş ve sadece, "İstersen anlat," demiş.' },
      { en: 'The woman began to speak slowly, sharing her debt, her tiredness, and her fear.', tr: 'Kadın azar azar konuşmuş; borcunu, yorgunluğunu, korkusunu paylaşmış.' },
      { en: 'As she spoke, one bird flew away, then the second, then the third.', tr: 'Konuştukça kuşlardan biri uçmuş, sonra ikincisi, sonra üçüncüsü.' },
      { en: 'That day, the townspeople learned this: when a trouble is shared, it may not disappear, but it becomes lighter to carry.', tr: 'Kasabalılar o gün öğrenmiş: Dert paylaşıldığında yok olmayabilir, ama omuzdaki ağırlığı azalır.' }
    ]
  });

  /* ---- yukarıdaki 10 yeni hikayede geçen, sözlükte eksik kelimeler ---- */
  KI.glossary.addWords([
    'mulberry|dut (ağacı)|isim', 'difficulty|zorluk|isim', 'cloth|bez, kumaş|isim',
    'frighten|korkutmak|fiil', 'crumb|kırıntı|isim', 'flap|çırpmak (kanat)|fiil',
    'wing|kanat|isim', 'longer|daha uzun|sıfat', 'clatter|tıkırdamak, tıkırtı|fiil',
    'object|nesne, eşya|isim', 'itself|kendisi (cansız/hayvan için)|zamir', 'lamb|kuzu|isim',
    'juniper|ardıç|isim', 'bent|eğildi, büktü (bend fiilinin geçmiş hâli)|fiil', 'path|yol, patika|isim',
    'intention|niyet|isim', 'release|serbest bırakmak|fiil', 'smallest|en küçük|sıfat',
    'invisible|görünmez|sıfat', 'blacksmith|demirci|isim', 'unfairly|haksızca|zarf',
    'flutter|çırpınma, titreşim|isim', 'silently|sessizce|zarf', 'loudest|en yüksek sesli|sıfat',
    'gray|gri|sıfat', 'tightly|sıkıca|zarf', 'storehouse|ambar, depo|isim',
    'pile|yığmak, yığın|fiil', 'luck|şans, talih|isim', 'distant|uzak|sıfat',
    'crown|taç|isim', 'fancy|süslü, gösterişli|sıfat', 'bathhouse|hamam|isim',
    'harshly|sert bir şekilde|zarf', 'townspeople|kasaba halkı|isim', 'cleanliness|temizlik|isim',
    'decoration|süsleme|isim', 'halva|helva|isim', 'maker|yapan, üretici|isim',
    'deceive|kandırmak, aldatmak|fiil', 'less|daha az|sıfat', 'sweetest|en tatlı|sıfat',
    'adjust|ayarlamak|fiil', 'oldest|en yaşlı, en eski|sıfat', 'honesty|dürüstlük|isim',
    'tiredness|yorgunluk|isim', 'disappear|kaybolmak|fiil',
    'copper|bakır|isim', 'block|engellemek, tıkamak|fiil', 'colored|renkli|sıfat',
    'enter|girmek|fiil', 'crack|çatlamak, çatlak|fiil', 'part|parça, bölüm|isim'
  ]);

  /* ---- hikayelerde geçen, sözlükte eksik kalan kelimeler ---- */
  KI.glossary.addWords([
  'cauldron|kazan|isim', 'birth|doğum (give birth: doğurmak)|isim', 'sorry|üzgün|sıfat',
  'cannot|yapamaz (can not)|yardımcı', 'angrily|öfkeyle|zarf', 'something|bir şey|zamir',
  'calmly|sakince|zarf', 'second|ikinci|sıfat', 'dear|canım, sevgili|sıfat',
  'backwards|ters, geriye doğru|zarf', 'traveller|yolcu|isim', 'anything|hiçbir şey, herhangi bir şey|zamir',
  'whoever|her kim ki|zamir', 'wisest|en bilge|sıfat', 'gold|altın|isim',
  'messenger|haberci|isim', 'heavier|daha ağır|sıfat', 'feather|tüy|isim',
  'step|adım atmak, adım|fiil', 'forward|ileri, öne|zarf', 'nothing|hiçbir şey|zamir',
  'else|başka|zarf', 'happily|mutlu bir şekilde|zarf',

  'beside|yanında|edat', 'float|yüzmek (su üstünde)|fiil', 'himself|kendisi (erkek)|zamir',
  'rake|tırmık|isim', 'balance|denge|isim', 'splash|şapırtı (su sesi)|isim',
  'brightly|parlak bir şekilde|zarf', 'ah|ah|ünlem', 'drown|boğulmak|fiil',
  'party|parti, davet|isim', 'warmly|sıcak bir şekilde|zarf', 'servant|hizmetkâr|isim',
  'seat|koltuk, yer|isim', 'far|uzak|sıfat', 'fur|kürk|isim',
  'welcome|karşılamak, hoş geldin|fiil', 'great|büyük, harika|sıfat', 'finest|en güzel, en iyi|sıfat',
  'behind|arkasında|edat', 'everywhere|her yerde|zarf', 'thirteen|on üç|sayı',
  'thirteenth|on üçüncü|sıfat', 'bray|anırmak|fiil', 'third|üçüncü|sayı',
  'bother|rahatsız etmek|fiil', 'trouble|sorun, dert|isim', 'squeeze|sıkmak|fiil',
  'drip|damlamak|fiil', 'clear|net, açık|sıfat', 'gently|nazikçe|zarf',
  'treasure|hazine|isim', 'sadly|üzgün bir şekilde|zarf', 'riverbed|nehir yatağı|isim',
  'pool|su birikintisi, havuz|isim', 'flow|akmak|fiil', 'underground|yer altında|zarf',
  'pasha|paşa|isim', 'mock|alay etmek|fiil', 'contest|yarışma|isim',
  'riddle|bilmece|isim', 'bald|kel|sıfat', 'sack|çuval|isim',
  'foolish|aptal, akılsız|sıfat'
  ]);

  KI.stories = S;
})(window.KI);
