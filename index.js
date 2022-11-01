window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header__title").style.fontSize = "20px";
        document.getElementById("header__title").style.width = "99px";
        document.getElementById("header__title").style.position = "fixed";

    } else {
        document.getElementById("header__title").style.fontSize = "50px";
        document.getElementById("header__title").style.width = "320px";
        document.getElementById("header__title").style.position = "fixed";
    }
}