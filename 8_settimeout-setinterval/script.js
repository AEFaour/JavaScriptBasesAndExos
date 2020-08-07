'use strict';

let premierH1 = document.getElementsByTagName('h1')[0];

//miniteur
setTimeout(function () {
    console.log('toto');

    premierH1.innerHTML = "<div style='background:green;padding:2%'> </div>";
}, 1000);

setInterval(function () {
    console.log('tutu');

}, 1500);

let myButton = document.getElementsByTagName('button')[0];

myButton.addEventListener('click', move);

function move() {
    let carreRouge = document.getElementById('carreRouge'),
        incrementVal = 0,
        lancementAnim = setInterval(animate, 5);

    function animate() {
        if (incrementVal == carreRouge.parentNode.clientWidth) {
            window.clearInterval(lancementAnim); // stop l'animation
        } else {
            carreRouge.style.width = `${incrementVal}px`;
            carreRouge.style.height = `${incrementVal}px`;
            incrementVal++;
        }

    }

}