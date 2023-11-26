"use strict"

let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");


openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");

    let style = window.getComputedStyle(navMenuEl);

    if (style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}



function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Läs mer...";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Läs mindre.";
        moreText.style.display = "inline";
    }
}






let dots1 = document.getElementById("dots1");
let moreText1 = document.getElementById("more1");
let btnText1 = document.getElementById("myBtn1");

readMore.addEventListener('click', readMoreText);
readLess.addEventListener('click', readMoreText);

function readMoreText() {

    if (dots1.style.display === "none") {
        dots1.style.display = "inline";
        btnText1.innerHTML = "Läs mer...";
        moreText1.style.display = "none";
    } else {
        dots1.style.display = "none";
        btnText1.innerHTML = "Läs mindre.";
        moreText1.style.display = "inline";
    }
}


let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}