"use strict"


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let round = document.getElementsByClassName("point");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < round.length; i++) {
        round[i].className = round[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    round[slideIndex - 1].className += " active";
}

// Ny kod för automatisk bildväxling
let autoSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
    let i;
    let autoSlides = document.getElementsByClassName("mySlides");
    let autoDots = document.getElementsByClassName("point");
    for (i = 0; i < autoSlides.length; i++) {
        autoSlides[i].style.display = "none";
    }
    autoSlideIndex++;
    if (autoSlideIndex > autoSlides.length) { autoSlideIndex = 1 }
    for (i = 0; i < autoDots.length; i++) {
        autoDots[i].className = autoDots[i].className.replace(" active", "");
    }
    autoSlides[autoSlideIndex - 1].style.display = "block";
    autoDots[autoSlideIndex - 1].className += " active";
    setTimeout(autoShowSlides, 3000); // Byt bild var 2 sekunder
}




// let earthIcon = document.getElementsByClassName("fa-light")[0];

// earthIcon.addEventListener('click', langShow);

// function langShow() {
//     let lang = document.getElementById("lang-switch");
//     let style = window.getComputedStyle(lang);
//     if (style.display === "none") {
//         lang.style.display = "block";
//     } else{
//         lang.style.display = "none";
//     }
// }