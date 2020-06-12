function checkyes() {
    alert("I love you, too");
}

function checkno() {
    let left = Math.round(Math.random()*100);
    let top = Math.round(Math.random()*500);
    document.getElementById("NoButton").style.left = left+"px";
    document.getElementById("NoButton").style.top = top+"px";
}