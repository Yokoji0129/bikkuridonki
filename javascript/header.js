const menuOverlay = document.getElementById("menuOverlay");
const menuItems = document.querySelectorAll("#menuOverlay .li");
const menuItemsSns = document.querySelectorAll("#menuOverlay li")
const header = document.querySelector("header");
let menuOpen = false

//メニュー開いた状態
function navOpen() {
    menuOpen = true
    menuOverlay.style.height = "100vh";
    menuOverlay.style.borderRadius = "0";
    header.style.borderRadius = "0";
    //メニュー項目を順番に表示する
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.classList.add("bounceAnimation");
        }, 150 * index);
    });
    // sns項目をすべてまとめて表示
    setTimeout(() => {
        menuItemsSns.forEach((item) => {
            item.style.opacity = 1;
            item.classList.add("bounceAnimation");
        });
    }, 150 * menuItems.length); //SNS以外のメニューが全部表示されたらSNSメニューをまとめて表示
}

//メニュー閉じた状態
function navClose() {
    menuOpen = false
    menuOverlay.style.height = "0";
    menuOverlay.style.borderRadius = "0 0 50% 50%";
    header.style.borderRadius = "0 0 90px 90px";
    //メニューを閉じるときに項目を非表示にする
    menuItems.forEach((item) => {
        item.style.opacity = 0;
        item.classList.remove("bounceAnimation");
    });
    menuItemsSns.forEach((item) => {
        item.style.opacity = 0;
        item.classList.remove("bounceAnimation");
    });
}

//ハンバーガメニューアイコンクリック処理
document.getElementById("menu-btn").addEventListener("click", function () {
    if (!menuOpen) {
        navOpen();
    }
    else {
        navClose();
    }
});

const menuBtn = document.getElementById("menu-btn");
//800px以下でメニューが開いている場合は閉じる
window.addEventListener("resize", function () {
    if (window.innerWidth > 800) {
        if (menuOpen) {
            navClose()
        }

        //800px以上になったときにハンバーガメニューアイコンをリセット
        if (menuBtn.checked) {
            menuBtn.checked = false;
        }
    }
});

//headerのsnsページ飛んだ時にcheckを外す
document.getElementById("twitter").addEventListener("click", function () {
    menuBtn.checked = false
})
document.getElementById("youtube").addEventListener("click", function () {
    menuBtn.checked = false
})
document.getElementById("instagram").addEventListener("click", function () {
    menuBtn.checked = false
})
document.getElementById("line").addEventListener("click", function () {
    menuBtn.checked = false
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//ヘッダーから上に戻るとき
document.getElementById('headerImage').addEventListener('click', function () {
    scrollToTop();
    navClose();
    menuBtn.checked = false
});
//画面右下の上に戻るアイコン
document.getElementById('back-top').addEventListener('click', scrollToTop);




//指定したところにスクロールする関数
function scrollToSection(sectionId, offset) {
    //飛ぶ要素の位置ID
    const section = document.getElementById(sectionId);
    //何px離すかの調整
    const y = section.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
}

//メニューヘッダー
document.getElementById("menuLink").addEventListener("click", function () {
    scrollToSection("menuSection", -100);//上から100px離す
});

//メニューヘッダーハンバーガメニュー内
document.getElementById("menuLinkOverlay").addEventListener("click", function () {
    scrollToSection("menuSection", -65);//上から65px離す
    navClose();
    menuBtn.checked = false;
});

//おすすめヘッダー
document.getElementById("recommendLink").addEventListener("click", function () {
    scrollToSection("recommendSection", -100);//上から100px離す
})

//おすすめヘッダーハンバーガメニュー内
document.getElementById("recommendLinkOverlay").addEventListener("click", function () {
    scrollToSection("recommendSection", -65);//上から65px離す
    navClose();
    menuBtn.checked = false;
});

//店舗情報ヘッダー
document.getElementById("storeLink").addEventListener("click", function () {
    scrollToSection("storeSection", -100);//上から100px離す
})

//店舗情報ヘッダーハンバーガメニュー内
document.getElementById("storeLinkOverlay").addEventListener("click", function () {
    scrollToSection("storeSection", -65);//上から65px離す
    navClose();
    menuBtn.checked = false;
});