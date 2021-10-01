var menuButton = document.querySelector("header > button:first-of-type");
var menuSLuitButton = document.querySelector("header nav button");
var menu = document.querySelector("header nav");

menuButton.addEventListener("click", toggleMenu);
menuSLuitButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    menu.classList.toggle("menuOpen");
}


var globeButton = document.querySelector("header > button:last-of-type");
var menuGlobe = document.querySelector("header > ul:last-of-type");

globeButton.addEventListener("click", toggleTaalMenu);

function toggleTaalMenu(){
    menuGlobe.classList.toggle("menuTaal");
}










