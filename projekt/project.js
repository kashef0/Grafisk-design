"use strict";



let openBtn = document.getElementById("carBtn");
// let closeBtn = document.getElementById("search");


openBtn.addEventListener('click', toggleMenu);
// closeBtn.addEventListener('click', toggleMenu);



function toggleMenu() {
    let navMenuEl = document.querySelector(".cart");

    let style = window.getComputedStyle(navMenuEl);

    if (style.display === "none") {
        navMenuEl.style.display = "flex";
    } else {
        navMenuEl.style.display = "none";
    }
}

