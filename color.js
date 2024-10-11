// カラーピッカーで選択した色を適用
document.getElementById("applyColor").addEventListener("click", function() {
    const hexColor = document.getElementById("hexColor").value.trim();

    // 16進数カラーコードが正しいかどうかをチェック
    if (/^#([0-9A-Fa-f]{6})$/.test(hexColor)) {
        document.body.style.backgroundColor = hexColor;
        document.getElementById("colorCode").textContent = hexColor;
    } else {
        alert("正しい16進数カラーコードを入力してください。例: #ffffff");
    }
});

// ランダムな色に切り替える
document.getElementById("randomColorButton").addEventListener("click", function() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    // 生成されたカラーコードが正しいかどうかを再確認
    if (/^#[0-9A-Fa-f]{6}$/.test(randomColor)) {
        document.body.style.backgroundColor = randomColor;
        document.getElementById("colorCode").textContent = randomColor;
    } else {
        alert("色の生成に失敗しました。");
    }
});

// 現在のカラーコードをクリップボードにコピー
document.getElementById("copyColorCode").addEventListener("click", function() {
    const colorCode = document.getElementById("colorCode").textContent;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(colorCode).then(function() {
            alert("カラーコードがコピーされました: " + colorCode);
        }).catch(function(err) {
            alert("コピーに失敗しました: " + err);
        });
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = colorCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("カラーコードがコピーされました: " + colorCode);
    }
});

// RGBで色を適用
document.getElementById("applyRGB").addEventListener("click", function() {
    const red = document.getElementById("red").value;
    const green = document.getElementById("green").value;
    const blue = document.getElementById("blue").value;

    // RGB値がすべて空白でないことを確認
    if (red === "" || green === "" || blue === "") {
        alert("RGBの各値を入力してください。");
        return;
    }

    // RGB値が正しい範囲にあるかどうかを確認
    if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        document.body.style.backgroundColor = rgbColor;

        // 現在のRGB値を16進数に変換して表示
        const hexColor = '#' + ((1 << 24) + (parseInt(red) << 16) + (parseInt(green) << 8) + parseInt(blue)).toString(16).slice(1).padStart(6, '0');
        document.getElementById("colorCode").textContent = hexColor;
    } else {
        alert("RGB値は0〜255の範囲で指定してください。");
    }
});
