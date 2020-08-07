'use strict';
//console.log('toto');
console.dir(document.body);


//onclick
const h4onClick = document.getElementById('h4onClick'),
    reponseClick = document.getElementById('reponseClick');


h4onClick.onclick = function () {
    let reponse = confirm('tu vas bien?');
    if (reponse) {
        reponseClick.innerText = "Vous allez bien !";
        reponseClick.style.color = "green";
    } else {
        reponseClick.innerText = "Vous n'allez pas bien !";
        reponseClick.style.color = "red";
    }
}

//ondblclick
const h4onDbClick = document.getElementById('h4onDbClick');

/*h4onDbClick.ondblclick = function () {
    console.dir(this.nextElementSibling);
    this.nextElementSibling.style.display ="block";
}*/

h4onDbClick.ondblclick = () => {

    h4onDbClick.nextElementSibling.style.display = "block";
}


//onload : chargement de la page

const myBody = document.body;
onload = function () {
    myBody.style.background = "#BF55EC";
    widthAndHeight();
}


function widthAndHeight() {
    let largueur = window.outerWidth,
        hauteur = window.outerHeight,
        inputLargueur = document.getElementById('largueur'),
        inputHauter = document.getElementById('hauteur');
    inputLargueur.value = `${largueur}px`;
    inputHauter.value = `${hauteur}px`;
}

onresize = function () {
    console.dir(this);
    widthAndHeight();
}

//onfocus & onbur

const mdp = document.getElementById('mdp');

mdp.onfocus = function () {
    console.log(this.value);
    this.type = "text";
}

mdp.onblur = function () {
    this.type = "password";
}

//onhover :

let div = document.createElement('div'),
    h4Hover = document.getElementsByTagName('h4')[4],
    h4HoverBrother = h4Hover.nextElementSibling;
console.dir(h4Hover);
div.className = "red";

document.body.insertBefore(div, h4HoverBrother);
//document.body.insertBefore(div, h4Hover);
/*h4Hover.addEventListener('hover', function () {
    alert();
})
h4Hover.onh = function () {
    alert()
}*/
h4HoverBrother.onmouseover = function () {
    //alert('over');
    div.style.visibility = "hidden";
}
h4HoverBrother.onmouseout = function () {
    div.style.visibility = "visible";
}

//nmouseup, onmousedown & onmousewheel

let loremPara = document.getElementById('loremPara');
loremPara.onmousedown = function () {
    this.style.color = "red";
}
loremPara.onmousedup = function () {
    this.style.color = "green";
}
loremPara.onmousewheel = function () {
    this.style.fontSize = '35px';
}

//oncopy, oncut & onpaste

let copyText = document.getElementById('copyText'),
    resultat = document.getElementById('resultat');

document.oncopy = function (event) {
    event.preventDefault(); // désactive le comportement natif d'un événement
}

copyText.oncopy = function (event) {
    console.dir(event);
    resultat.innerText = "Element copié";

}
copyText.oncut = function () {
    resultat.innerText = "Element coupé";
}
copyText.onpaste = function () {
    resultat.innerText = "Element collé";
}

//onkeypress :  onkeydown & onkeyup

let mpd2 = document.getElementById('mpd2');

mpd2.onkeypress = function () {
    console.log(this.value);
}

document.onkeypress = desactiveF12;
document.onkeydown = desactiveF12;
document.onkeyup = desactiveF12;

function desactiveF12(event){
    console.dir(event);
    if (event.keyCode == 123){
        event.preventDefault()
    }
}

/*
 mpd2.onkeypress = function (event) {
    if (event.which != 123){
        console.log(this.value);
    } else {
        event.which = 13;
        event.returnValue = false;
        event.cancelBubble = true;
        return false;
    }
}*/
