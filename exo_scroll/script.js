'use strict';

let buttonPlay = document.getElementById('play'),
    buttonStop = document.getElementById('stop'),
    startReading;

buttonPlay.addEventListener('click', scrollPlay);
buttonStop.addEventListener('click', scrollStop);

function scrollPlay() {
     startReading = setInterval(scrolling, 10);
}
function scrollStop() {
    window.clearInterval(startReading);
}
function scrolling() {
        window.scrollBy(0, 1);
}

