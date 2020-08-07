'use strict';
//alert();

/*
basic Event Model (1,2,3) <div onclick="calcul()">toto</div>
 */
/*
DOM 2 : gestionnaire d'événements
EventTargrt: 3 méthodes:
-addEventListner()
-removeEventListener()
-dispatchEvent()
 */
/*
addEventListener
-type : event => sans le préfixe on instruction
-type de propagation (useCapture) : activation des événements dans un ordre défini soit bubbles up || capturing
 
 */

console.dir(EventTarget);
//basic model 3 :
/*document.ondblclick = function () {
    console.log('double-clic sur le document !');
}*/

//DOM2
document.addEventListener('dblclick', function () {
    console.log('double-clic sur le document !');
}, false);

document.addEventListener('click', function () {
    console.log('appel 1 !');
}, false);
document.addEventListener('click', function () {
    console.log('appel 2 !');
}, true);
document.addEventListener('click', function () {
    console.log('appel 3 !');
}, true);
document.addEventListener('click', function () {
    console.log('appel 4!');
}, false);

let monH4 = document.getElementsByTagName('h4')[0];
function dbClickOnH4() {
    this.style.color = "blue";
}
monH4.addEventListener('dblclick', dbClickOnH4);

function mouseOverOnH4(param){
    console.dir(param);
    this.style.background = 'red';
}
monH4.addEventListener('mouseover', mouseOverOnH4);

function myFunction(param1, param2) {
    console.dir(`param1 : ${param1}`);
    console.dir(`param2 : ${param2}`);
    console.dir(`this : ${this}`);

    this.innerText = parseFloat(param1) + parseFloat(param2);
}
// ici le premier argument: this / le deuxième correspondra param1/ le troisièeme à param2
monH4.addEventListener('click', myFunction.bind(monH4,2, 4));
function click1() {
    console.log('click1');
}
function click2() {
    console.log('click2');
}

document.getElementsByTagName('h2')[0].onclick = click1;
document.getElementsByTagName('h2')[0].onclick = click1;
document.getElementsByTagName('h2')[1].addEventListener('click', click1);
document.getElementsByTagName('h2')[1].addEventListener('click', click2);