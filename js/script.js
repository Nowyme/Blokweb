//Navbar menu slide in

var menuButton = document.querySelector("header > button:first-of-type");
var menuSLuitButton = document.querySelector("header nav button");
var menu = document.querySelector("header nav");

menuButton.addEventListener("click", toggleMenu);
menuSLuitButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    menu.classList.toggle("menuOpen");
}

//Taal list popup

var globeButton = document.querySelector("header > button:last-of-type");
var menuGlobe = document.querySelector("header > ul:last-of-type");

globeButton.addEventListener("click", toggleTaalMenu);

function toggleTaalMenu(){
    menuGlobe.classList.toggle("menuTaal");
}


//Observer item list

var listItems = document.querySelectorAll("main section:nth-of-type(2) > ul li");
let IOObserverListItems;

let IOOptionsListItems = {
	threshold: .5
};

IOObserverListItems = new IntersectionObserver(IOFunctionListItems, IOOptionsListItems);

for (listItem of listItems) {
	IOObserverListItems.observe(listItem);
}

function IOFunctionListItems(entries) {
	for (entry of entries) {
		if(entry.isIntersecting) {
            entry.target.classList.add("inBeeld");
            
		}
	}
}


//Audio button en link click

var soundButton = document.querySelector("main section:first-of-type button");
var audioClick = document.querySelector("audio");
var soundLink = document.querySelectorAll("a");

function play() {
	audioClick.play();
	console.log(play);
}

soundLink.forEach(soundLink => {
	soundLink.addEventListener("click", play) 
});

soundButton.addEventListener("click", play);

 

