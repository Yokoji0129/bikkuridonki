(() => {
    //メニュータイトル切り替え
    function adjustMenuDisplay() {
        let menuTitle = document.querySelector('.menu-title h1');
        let menuTitleMini = document.querySelector('.menu-title-mini h1');
        let menuTitleSide = document.querySelector('.menu-title.side h1');
        let menuTitleMiniSide = document.querySelector('.menu-title-mini.side h1');
        let menuTitleSalad = document.querySelector('.menu-title.salad h1');
        let menuTitleMiniSalad = document.querySelector('.menu-title-mini.salad h1');

        if (window.innerWidth <= 1250) {
            menuTitle.style.display = 'none'; //1250px以下ではタイトルを表示する
            menuTitleMini.style.display = 'block';
            menuTitleSide.style.display = 'none';
            menuTitleMiniSide.style.display = 'block';
            menuTitleSalad.style.display = 'none';
            menuTitleMiniSalad.style.display = 'block';
        } else {
            menuTitle.style.display = 'block'; //1250pxより大きい場合はタイトルを非表示にする
            menuTitleMini.style.display = 'none';
            menuTitleSide.style.display = 'block';
            menuTitleMiniSide.style.display = 'none';
            menuTitleSalad.style.display = 'block';
            menuTitleMiniSalad.style.display = 'none';
        }
    }

    //最初に読み込みしたときにサイズ切り替えさせる
    document.addEventListener('DOMContentLoaded', adjustMenuDisplay);
    //ウインドウサイズ変わるたびにadjustMenuDisplay呼び出す
    window.addEventListener('resize', adjustMenuDisplay);


    //ハンバーグ
    const burgerList = [
        {
            src: "img/menu/1_RegularBurgDish.webp",
            name: "レギュラーバーグディッシュ",
            explanation: "創業初期からのロングセラー。和風ベースのオリジナルハンバーグソースは秘伝の味です。ぜひお召し上がりください。ハンバーグはドンキー独自の厳格な安全基準のもと、自然に近い環境で育てたビーフとポークの合挽肉を使用しています。"
        },
        {
            src: "img/menu/2_EggBurgDish.webp",
            name: "エッグバーグディッシュ",
            explanation: "半熟に仕上げた目玉焼きと和風ベースのオリジナルハンバーグソースは抜群の組み合わせ！たまごをたっぷりからめてお召し上がりください。ハンバーグはドンキー独自の厳格な安全基準のもと、自然に近い環境で育てたビーフとポークの合挽肉を使用しています。"
        },
        {
            src: "img/menu/10_RadishBurgDish.webp",
            name: "おろしバーグディッシュ",
            explanation: "大根おろし＆青じその爽やかな組み合わせで、旨味たっぷりのハンバーグをさっぱりと。ハンバーグはドンキー独自の厳格な安全基準のもと、自然に近い環境で育てたビーフとポークの合挽肉を使用しています。"
        },
        {
            src: "img/menu/3_CheeseBurgDish.webp",
            name: "チーズバーグディッシュ",
            explanation: "不動の人気！コクのある濃厚なチーズは、独自開発した特製ブレンド。和風ベースのオリジナルハンバーグソースによく合います。ハンバーグはドンキー独自の厳格な安全基準のもと、自然に近い環境で育てたビーフとポークの合挽肉を使用しています。"
        },
        {
            src: "img/menu/4_PineBurgDish.webp",
            name: "パインバーグディッシュ",
            explanation: "完熟パイナップルのジューシーな甘酸っぱさが、ハンバーグの旨味と絶妙な相性です。ハンバーグはドンキー独自の厳格な安全基準のもと、自然に近い環境で育てたビーフとポークの合挽肉を使用しています。"
        }
    ]

    //サイド
    const sideList = [
        {
            src: "img/menu/5112_frenchflys.webp",
            name: "びっくりフライドポテト",
            explanation: " あつあつ・ホクホクのフライドポテトは、びっくりドンキー定番のアラカルトメニュー。 オリジナルマヨネーズタイプとトマトソースでどうぞ。"
        },
        {
            src: "img/menu/35003_ika_hakobune.webp",
            name: "イカの箱舟",
            explanation: "びっくりドンキー人気のロングセラー。オリジナル和風ソースをたっぷりかけて、こんがりと焼き上げました。おかずとしても、ビールのおつまみとしてもお楽しみいただける一品です。"
        },
        {
            src: "img/menu/5130_FriedSquid.webp",
            name: "さくさくイカ唐揚げ",
            explanation: "新鮮なイカを使用してカラッとあつあつに香ばしく揚げました。おかずとしても、ビールのおつまみとしてもお楽しみいただける一品です。"
        },
        {
            src: "img/menu/35032_BroccoliMayonnaiseGrill.webp",
            name: "ブロッコリーの箱舟",
            explanation: "素揚げしたブロッコリーをオーブンで香ばしく焼き上げました。生姜の風味が香る特製醤油だれと自家製和風マヨソースでお召し上がりください。"
        },
        {
            src: "img/menu/5122_Margherita.webp",
            name: "薪窯マルゲリータ",
            explanation: "「薪窯」で香ばしく焼き上げたイタリア直輸入のピザです。天然発酵させた、ふっくら弾力のある生地に、トマトソース、バジルソース、チーズをトッピングしました。"
        },
    ]

    const saladList = [
        {
            src: "img/menu/20005g_MermaidSalad.webp",
            name: "マーメイドサラダ",
            explanation: "イカ唐揚げ、トマト、キュウリ、エビ、赤のりを使った彩り豊かな海をイメージさせるサラダ。多彩な具材を和風ドレッシングで。ケール入り。"
        },
        {
            src: "img/menu/20133g_CaesarSalad.webp",
            name: "シーザーサラダ",
            explanation: "ベーコンの旨味をたっぷり楽しめるサラダ。パルミジャーノチーズが香る濃厚なシーザードレッシングの味わいです。ぜひお楽しみください。ケール入り。"
        },
        {
            src: "img/menu/20166g_DonkeyClassicSalad.webp",
            name: "ドンキークラシックサラダ",
            explanation: "クリーミーな醤油ベースのドレッシングを使用したサラダ。トマト・カニカマの旨味に紫キャベツのピクルスがアクセントです。ケール入り。"
        },
        {
            src: "img/menu/20172g_BigDishSalad.webp",
            name: "ディッシュサラダ",
            explanation: "シャキシャキ食感の大根をメインにしたサラダ。野菜の味を引き立てるのは、オリジナルのマヨネーズタイプドレッシングです。"
        },
    ]

    let count = -1;
    function picChange() {
        count++;



        if (count == burgerList.length) count = 0;
        document.getElementById("changePic").src = burgerList[count].src;
        document.getElementById("changeTitle").innerText = burgerList[count].name;
        document.getElementById("changeTitleMini").innerText = burgerList[count].name;
        document.getElementById("burgerExplanation").innerText = burgerList[count].explanation;


        if (count == sideList.length) count = 0;
        document.getElementById("changePicSide").src = sideList[count].src;
        document.getElementById("changeSideTitle").innerText = sideList[count].name;
        document.getElementById("changeSideTitleMini").innerText = sideList[count].name;
        document.getElementById("sideExplanation").innerText = sideList[count].explanation;

        if (count == saladList.length) count = 0;
        document.getElementById("changePicSalad").src = saladList[count].src;
        document.getElementById("changeSaladTitle").innerText = saladList[count].name;
        document.getElementById("changeSaladTitleMini").innerText = saladList[count].name;
        document.getElementById("saladExplanation").innerText = saladList[count].explanation;
        setTimeout(picChange, 4000);
    }
    picChange();
})();