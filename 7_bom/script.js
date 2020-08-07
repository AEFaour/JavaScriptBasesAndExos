'use strict';
//alert();
console.dir(window);
console.dir(this);

document.getElementsByTagName('button')[1].onclick = function () {
    window.open('https://www.google.com', '_blank', 'width=500,height=500');
}

console.log(`largueur de l'écran ${window.screen.width}px`);
console.log(`largueur de l'écran ${window.screen.height}px`);
console.dir(window.screen);

//infos navigateur

console.dir(window.navigator);

const recupGeoloc = document.getElementById('recupGeoloc');
const localisationVisteur = navigator.geolocation;

//getCurrentPosition()

localisationVisteur.getCurrentPosition(coordonnees, callBackFalse);

function callBackFalse() {
    recupGeoloc.innerText = `Impossible de vous localiser !`;
}

function coordonnees(param) {
    recupGeoloc.innerText = `Lattitude :${param.coords.latitude} Longitude : ${param.coords.longitude}`;
}


//history :

console.dir(window.history);
window.history.go(-1);
