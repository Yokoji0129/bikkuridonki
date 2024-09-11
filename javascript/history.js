(() => {
    //画像更新関数
    function updateImage() {
        //キャッチコピーの画像ID
        let historyImage = document.getElementById('historyImage');
        //600px以下と600px以上で画像切り替え
        if (window.innerWidth <= 600) {
            //スマホサイズ
            historyImage.src = 'img/history/history.jpg';
        } else {
            //pcサイズ
            historyImage.src = 'img/history/history-1.jpg';
        }
    }

    window.onload = updateImage;
    //ウインドウサイズ変わるたびにupdateImage呼び出す
    window.addEventListener('resize', updateImage);
})();
