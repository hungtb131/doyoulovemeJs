function checkyes() {
    alert("I love you, too");
}

function checkno() {
    let left = Math.round(Math.random()*100);
    let top = Math.round(Math.random()*500);
    //A Hoà cho e hỏi xíu, khi kéo file.css vào HTML sau đó đến đoạn này (.style) thì phải có <style></style> trong html
    // vậy trong 2 câu dưới đây thì (.style) thay bằng gì? để chạy đc chương trình
    document.getElementById("NoButton").style.left = left+"px";
    document.getElementById("NoButton").style.top = top+"px";
}