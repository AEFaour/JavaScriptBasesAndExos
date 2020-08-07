'use strict';
//console.log('toto');

//node => noeud : elementNode / textNode

console.dir(document);

//id
const para1 = document.getElementById('paraId');

console.dir(para1);
para1.style.background = 'gold';
console.log(para1.innerHTML);
// --sélection naturelle : l'élement doit être unique !
maSection.style.background = 'red';
maSection.innerHTML = para1.innerHTML;
document.title = "toto";

// --tagName :
const mesSpan = document.getElementsByTagName('span');
console.log(`span ${mesSpan}`);
console.dir(mesSpan);
console.table(mesSpan);
console.log(mesSpan[2].innerText);
console.log(`Il y a ${mesSpan.length} span dans mon document`);

const mesDiv = document.getElementsByTagName('div');
console.dir(mesDiv);
for (let i = 0; i < mesDiv.length; i++){
    mesDiv[i].style.color = "#BF55EC";
}

//  ClassName
const paraClass = document.getElementsByClassName('paraClass');
console.dir(paraClass);
console.log(paraClass[0].innerText);

//--querySelector

const voitureClass = document.querySelector('.voiture');
console.dir(voitureClass);
voitureClass.style.background = "green";

//--querySelectorAll

const avion = document.querySelectorAll('.avion');
console.dir(avion);
//avion.style.background = "green";
for (let k =0; k < avion.length; k++){
    avion[k].style.fontSize= '3rem';
}

console.dir(para1.nextElementSibling.children[0].href);
para1.nextElementSibling.children[0].href = "https://www.doranco.fr";

const voiture3 = document.getElementsByClassName('voiture')[2];
//console.dir(voiture3.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0]);
const spanP =voiture3.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0];
spanP.style.color= 'red';

// modification dans le DOM;

document.querySelector('h1').id = 'changeColor';
document.querySelector('h1').innerText = 'Hello world!';
document.querySelector('h1').className = "danger";

/*
appliquer la class danger à l'élement à Paragraphe 2
appliquer la class sucess à la dernier span
 */

console.log(paraClass[1].previousElementSibling);
paraClass[1].previousElementSibling.className = "danger";
maSection.nextElementSibling.className = "success";


//ajout des éléments dans le DOM

let monH3 = document.createElement('h3');

monH3.id = "changeColor";
let textH3 = document.createTextNode('Création d\'un h3');
monH3.appendChild(textH3);
//monH3.innerText = textH3;
document.body.appendChild(monH3);
document.body.insertBefore(monH3, paraId);

//suppression d'un élément

const para4 = paraClass[1].nextElementSibling;
console.dir(para4.innerText);
document.body.removeChild(para4);