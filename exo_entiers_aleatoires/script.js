'use strict';
console.log('toto');
let mybutton = document.getElementsByTagName('button'),
    myDiv = document.getElementById('liste');



mybutton[0].onclick = function () {

    let myUl = document.createElement('ul');
    for (let i = 1; i <= 10; i++) {

        myDiv.appendChild(myUl);
        let oneLi = document.createElement('li');
        myUl.appendChild(oneLi);
        oneLi.innerHTML = Math.round(Math.random() * 1000);

    }
}




