// document.getElementsByClassName(btn)[1].style.display = "none"

function openReadmore(para, butt) {
    if (document.getElementById(butt).innerHTML == "Read more") {
        document.getElementById(para).style.display = "block"
        document.getElementById(butt).innerHTML = "Read less";
        document.getElementById("hide").style.marginLeft = "0%";
    } else if (document.getElementById(butt).innerHTML == "Read less") {
        document.getElementById(para).style.display = "none"
        document.getElementById(butt).innerHTML = "Read more"
        document.getElementById("hide").style.marginLeft = "0%";
    }



}

function show(btn) {
    document.getElementById(btn).style.display = "flex";
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "block";

}

function hide(btn) {
    document.getElementById(btn).style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none";

}