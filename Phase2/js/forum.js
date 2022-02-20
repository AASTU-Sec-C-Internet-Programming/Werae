document.onload = divhide();

function divshow() {
    document.getElementById('add-answer-popup').style.display = "flex";

    document.getElementById('add-answer-popup').style.position = "absolute";
    document.getElementById('add-answer-popup').style.top = 0;
    document.getElementById('add-answer-popup').style.right = 0;
    document.body.style.overflow = "hidden";
}

function divhide() {
    document.getElementById('add-answer-popup').style.display = "none";
    document.body.style.overflow = "visible";
}

function getInputValue() {
    var takeinput;
    takeinput = document.getElementById('input-question-add').value;
    alert(takeinput);
}

function addquestion() {
    const toBeCloned = document.getElementById("firstQuestion");
    const clone = toBeCloned.cloneNode(true);
    const c = clone.children;
    // c[0].style.backgroundColor = "yellow";
    // c[1].style.backgroundColor = "red";
    const accountdiv = c[0].children;
    // profile picture
    const avatar = accountdiv[0];
    // account info
    const accountinfo = accountdiv[1];

    const accountinfoarray = accountinfo.children;
    // account-name
    const accname = accountinfoarray[0];
    // paragraph in accountn name
    const para = accname.children;
    // para[0].style.backgroundColor = "yellow";
    // para[0].innerText = "Naol tamrat";

    // question-div
    const question_div = c[1].children;
    //question titlediv
    const questiontitle = question_div[0];
    // questioni content div
    const questionContent = question_div[1];
    // title paragraph
    const questionP = questiontitle.children;
    // questionP[0].style.backgroundColor = "pink";
    const title = document.getElementById("titleT").value;
    questionP[0].innerText = title;

    const DescriptionP = questionContent.children;
    // the paragraph
    // DescriptionP[0].style.backgroundColor = "blue";
    const inputdesc = document.getElementById("input-question-add").value;
    DescriptionP[0].innerText = inputdesc;


    // const trial = document.querySelector("self-desc");
    // const check = trial.children;
    // check.innerText = "bekele is bukkulu";


    const container = document.getElementById("qa-container");
    container.insertBefore(clone, container.firstChild);

}
var holder;

function divShow(tobeon) {
    holder = document.getElementById(tobeon);
    document.getElementById('add-answer-popup2').style.display = "flex";

    document.getElementById('add-answer-popup2').style.position = "absolute";
    document.getElementById('add-answer-popup2').style.top = 0;
    document.getElementById('add-answer-popup2').style.right = 0;
    document.body.style.overflow = "hidden";
}

function divHide() {
    document.getElementById('add-answer-popup2').style.display = "none";
    document.body.style.overflow = "visible";
}

function addanswer() {
    const answer = document.getElementById("input-answer-add").value;
    holder.innerText = answer;

}