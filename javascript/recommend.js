(() => {
    const slideInner = document.querySelector('.slide-inner');
    const images = slideInner.querySelectorAll('img');
    let index = 0;

    //画像の幅とマージンを計算して移動幅を設定する関数
    function setImageWidth() {
        const imageWidth = images[0].clientWidth + 60; //画像幅 + マージン(60px)
        return imageWidth;
    }

    //初期位置を中央に設定する関数
    function setInitialPosition() {
        const imageWidth = setImageWidth();
        const initialOffset = -index * imageWidth;
        slideInner.style.transform = `translateX(${initialOffset}px)`;
    }

    //次の画像を表示する関数
    function showNextImage() {
        index++;
        const imageWidth = setImageWidth();
        const offset = -index * imageWidth;
        slideInner.style.transition = 'transform 1s';
        slideInner.style.transform = `translateX(${offset}px)`;

        //最後のクローン画像に到達したら、即座に最初の画像に移動
        if (index === images.length - 1) {
            setTimeout(() => {
                slideInner.style.transition = 'none';
                slideInner.style.transform = 'translateX(0)';
            }, 1000); //1秒待って最初の画像に移動
            index = 0; //indexを0にリセットして最初の画像が最初から表示されるようにする
        }
    }

    //ポップアップ表示All View
    const allViewButton = document.querySelector('.all-view');
    const popup = document.getElementById('popup');
    const popupImages = popup.querySelectorAll('img')
    const closeButton = document.querySelector('.close');
    const closeContentsButton = document.querySelector('.close-contents');

    //All Viewボタンがクリックされた時の処理
    allViewButton.addEventListener('click', () => {
        popup.style.display = 'block';
        document.body.classList.add('popup-open');
    });

    //ポップアップ内の要素
    const imageContents = [
        {
            imageUrl: 'img/recommend/2024_morning_PC_top.jpg',
            title: '一日の始まりはびっくりドンキーで。',
            description: 'しっかり食べたい朝も、軽めで済ませたい日も。びっくりドンキーではじまる朝はいかがですか？',
            menuUrl1: 'img/popupContents/menu_plate_t.jpg',
            menuTitleLeft: 'プレーントースト セット',
            menuExplanation1: '厚切りのトーストをオーブンで焼き上げ、外はサクッと、中はふんわり、パンの耳まで柔らかくいただけます。',
            menuUrl2: 'img/popupContents/menu_plate_l.jpg',
            menuTitleRight: 'ドンキースペシャルブレックファスト',
            menuExplanation2: '彩り鮮やかなサラダ、食べ応えのあるソーセージやベーコン、オーブンで焼き上げたトースト等をワンプレートに盛り付けました。目玉焼き・スクランブルエッグの２種類の卵料理からお好みのスタイルをお選びください。'
        },
        {
            imageUrl: 'img/recommend/2024_0529_menchi_pre_PC.jpg',
            title: 'びっくりドンキー揚げちゃいました！「ハンバーグ屋のメンチカツ」が今年も期間限定で登場！',
            description: '2024年5月29日（水）から期間限定で「メンチカツディッシュ」を販売します。好評につき今年で3年目となる本フェアでは、いつものハンバーグパティに生パン粉の衣をまとわせ、サクサクっとした食感とじゅわっと溢れる肉汁を愉しめるメンチカツディッシュ3種に加え、ハンバーグディッシュにメンチカツを盛り合わせた贅沢なディッシュメニュー3種が期間限定で登場します。また、焼きカリーライスにメンチカツをのせた「メンチカツ焼きカリーライス」が期間限定で登場します。メンチカツは気持ちも“あげて”食べるのがおすすめです。びっくりドンキーの「サクサク、じゅわっ」な美味しいメンチカツとハンバーグを一皿で味わえる楽しさをぜひお愉しみください。',
            menuUrl1: 'img/popupContents/4447_Menchikatsu_BurgDish.png',
            menuTitleLeft: 'メンチカツ＆ハンバーグディッシュ',
            menuExplanation1: 'びっくりドンキーといえばこれ！という人気のオリジナルハンバーグソースがかかったメンチカツディッシュ。醤油ベースのハンバーグソースがお肉とごはんと相性抜群です。',
            menuUrl2: 'img/popupContents/4449_MenchikatsuCurry_BurgDish.png',
            menuTitleRight: 'メンチカツカリー＆ハンバーグディッシュ',
            menuExplanation2: 'こだわりのスパイシーなカリーがメンチカツとの相性抜群で食べごたえも満点。ガッツリと食べたい方にもおすすめです。'
        },
        {
            imageUrl: 'img/recommend/2024_CherryBeer_PC.jpg',
            title: '自社醸造のここだけの味わいを。季節限定の「チェリールビー」登場',
            description: '⿊さくらんぼのフルーティーな⽢みと華やぐ香りを愉しめる「チェリールビー」が季節限定で登場します。また、ノンアルコールの「ドンキーフリー（チェリー）」もあわせてご用意します。ミニサイズのフライドポテトとビールを一緒に愉しめるビールセットも発売します。',
            menuUrl1: 'img/popupContents/40067_CherryBeer.png',
            menuTitleLeft: '期間限定　チェリールビー',
            menuExplanation1: '「チェリールビー」はビールの本場ベルギーに伝わる伝統的な製法で醸造し、⿊さくらんぼのフルーティーな⽢みとしゅわっとした喉越しを愉しめるお酒です。ビール好きにはもちろん、フルーツの香りを愉しみたい方に、特におすすめです。※「チェリールビー」のアルコール度数は4％です。(発泡酒)',
            menuUrl2: 'img/popupContents/40091_DonkeyFreeCherry.png',
            menuTitleRight: '期間限定　ドンキーフリー（チェリー）',
            menuExplanation2: '「ドンキーフリー（チェリー）」は、様々なシーンでより多くの人に「チェリールビー」の風味や味わいを愉しんでいただきたいと開発したノンアルコールドリンクです。※ドンキーフリー（チェリー）はビールではありません。ビールテイスト飲料です。　ビールテイスト飲料は20歳未満の方へのご提供をお断りしております。 ※ドンキーフリー（チェリー）は「瓶」でご提供させていただきます。'
        },
        {
            imageUrl: 'img/recommend/2024_coffee_PC_TOP2.jpg',
            title: 'コーヒー豆を自社調達・自社焙煎するハンバーグレストラン。びっくりドンキーのスペシャルティコーヒー',
            description: 'いつもの一杯、いつもの時間を、もっとお楽しみいただけるように。びっくりドンキーのお店では、コーヒー豆から厳選した2種のスペシャルティコーヒーをご用意しています。自分たちが「いい」と信じられるものを、できるだけたくさんのお客様へご提供したいから。この一杯に、大切なこと、一つずつ。',
            menuUrl1: 'img/popupContents/41132_HotCoffee_SingleOrigine.webp',
            menuTitleLeft: 'ホットコーヒー(シングルオリジン)',
            menuExplanation1: 'ひとつの産地の豆だけを使用するため、特徴が際立つ味わいに。時期により産地が変わる“旬”なコーヒーをご提供します。',
            menuUrl2: 'img/popupContents/41133_HotCoffee_Blend.webp',
            menuTitleRight: 'ホットコーヒー(ブレンド)',
            menuExplanation2: '年や季節によって各地の豆の品質を見極め、最適な味わいに。深煎り特有の香ばしさが楽しめるオリジナルブレンドです。'
        }
    ];

    //画像をクリックしたときにポップアップの内容を更新する関数
    function updatePopupContent(imgIndex) {
        const imgContent = imageContents[imgIndex];
        const popupImage = document.getElementById('popupImage');
        const popupTitle = document.getElementById('popupTitle');
        const popupDescription = document.getElementById('popupDescription');
        const popupMeenuImage1 = document.getElementById('popupMeenuImage1');
        const popupMenuTitle1 = document.getElementById('popupMenuTitle1')
        const popupMenuExplnation1 = document.getElementById('popupMenuExplnation1')
        const popupMeenuImage2 = document.getElementById('popupMeenuImage2');
        const popupMenuTitle2 = document.getElementById('popupMenuTitle2')
        const popupMenuExplnation2 = document.getElementById('popupMenuExplnation2')

        popupImage.src = imgContent.imageUrl;
        popupTitle.textContent = imgContent.title;
        popupDescription.textContent = imgContent.description;
        popupMeenuImage1.src = imgContent.menuUrl1;
        popupMenuTitle1.textContent = imgContent.menuTitleLeft;
        popupMenuExplnation1.textContent = imgContent.menuExplanation1
        popupMeenuImage2.src = imgContent.menuUrl2;
        popupMenuTitle2.textContent = imgContent.menuTitleRight
        popupMenuExplnation2.textContent = imgContent.menuExplanation2
    }

    const popupContents = document.getElementById('popupContents');

    //おすすめの画像（ポップアップ内）押されたときの詳しい内容ポップアップ表示
    popupImages.forEach(function (img, index) {
        img.addEventListener('click', function () {
            console.log(img, index)
            popupContents.style.display = "block";
            popup.style.display = 'none';
            document.body.classList.add('popup-open');
            updatePopupContent(index); //クリックされた画像に関連するポップアップの内容を表示
        });
    });
    //おすすめの画像（ポップアップ外）押されたときの詳しい内容ポップアップ表示
    images.forEach(function (img, index) {
        img.addEventListener('click', function () {
            console.log(img, index)
            popupContents.style.display = "block";
            document.body.classList.add('popup-open');
            updatePopupContent(index); //クリックされた画像に関連するポップアップの内容を表示
        });
    });

    //閉じるボタンがクリックされた時の処理
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
        document.body.classList.remove('popup-open');
    });
    closeContentsButton.addEventListener('click', () => {
        popupContents.style.display = 'none';
        document.body.classList.remove('popup-open');
    });
    //ポップアップの外側がクリックされた時の処理
    window.addEventListener('click', (event) => {
        if (event.target === popup || event.target === popupContents) {
            popup.style.display = 'none';
            popupContents.style.display = 'none';
            document.body.classList.remove('popup-open');
        }
    });

    // ウィンドウサイズに応じて画像を更新する関数
    function updateImage() {
        //画像要素
        let slide1 = document.getElementById('slide1');
        let slide1Clone = document.getElementById('slide1-clone');
        let slide2 = document.getElementById('slide2');
        let slide3 = document.getElementById('slide3');
        let slide4 = document.getElementById('slide4');

        //画像要素（All Viewポップアップ内の画像）
        let popup1 = document.getElementById('popup-1');
        let popup2 = document.getElementById('popup-2');
        let popup3 = document.getElementById('popup-3');
        let popup4 = document.getElementById('popup-4');

        //600px以下と600px以上で画像を切り替え
        if (window.innerWidth <= 600) {
            //スマホサイズ
            slide1.src = 'img/recommend/2024_morning_SP_top.jpg';
            slide1Clone.src = 'img/recommend/2024_morning_SP_top.jpg';
            slide2.src = 'img/recommend/2024_0529_menchi_pre_SP.jpg';
            slide3.src = 'img/recommend/2024_CherryBeer_SP.jpg';
            slide4.src = 'img/recommend/2024_coffee_SP_TOP.jpg';
        } else {
            //PCサイズ
            slide1.src = 'img/recommend/2024_morning_PC_top.jpg';
            slide1Clone.src = 'img/recommend/2024_morning_PC_top.jpg';
            slide2.src = 'img/recommend/2024_0529_menchi_pre_PC.jpg';
            slide3.src = 'img/recommend/2024_CherryBeer_PC.jpg';
            slide4.src = 'img/recommend/2024_coffee_PC_TOP2.jpg';
        }
        popup1.src = slide1.src
        popup2.src = slide2.src
        popup3.src = slide3.src
        popup4.src = slide4.src
        //おすすめ内容の画像切り替え
        imageContents[0].imageUrl = slide1.src;
        imageContents[1].imageUrl = slide2.src;
        imageContents[2].imageUrl = slide3.src;
        imageContents[3].imageUrl = slide4.src;
    }

    //ページがロードされたときに画像を更新
    window.onload = updateImage;
    //ウィンドウサイズが変更されたときに画像を更新
    window.addEventListener('resize', updateImage);
    //ウィンドウサイズが変更されたときに初期位置を設定
    window.addEventListener('resize', setInitialPosition);
    //初期位置を設定
    setInitialPosition();
    //3秒ごとに次の画像を表示
    setInterval(showNextImage, 3000);
})()