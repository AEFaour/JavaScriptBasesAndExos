'use strict';
console.log('toto');

/*
const myOption = document.getElementsByTagName('option'),
    myInput = document.getElementsByTagName('input'),
    myButton = document.getElementsByTagName('button'),
    mySelect = document.getElementsByTagName('select');

console.table(myInput);

myButton[0].onclick = function () {
    let num1 = myInput[0].value;
    let num2 = myInput[1].value;
    let operateur = mySelect[0].value
    myInput[2].value = eval(num1 + operateur + num2);
    this.style.visibility = "hidden";
    myInput[3].setAttribute('id', 'resultatAffichage');
    document.getElementById('resultatAffichage').innerText = "";

}*/

const showOrHide = document.getElementById('showOrHide'),
    myForm = document.getElementsByTagName('form')[0],
    submitBtn = document.getElementsByClassName('btn')[1];
//submitBtn = document.querySelector('input[type="submit"]');
console.dir(submitBtn);

myForm.style.display = 'block';

showOrHide.onclick = function () {
    if (myForm.style.display === 'block') {
        myForm.style.display = 'none';
        this.innerText = 'Afficher la calculatrice';
    } else {
        myForm.style.display = 'block';
        this.innerText = 'Cacher la calculatrice';
    }
}

submitBtn.onclick = function (event) {//déactivation du comportement natif du submit
    event.preventDefault();
    calcul();
}

function calcul() {
    let saisie1 = document.getElementsByName('saisie1')[0].value,
        saisie2 = document.getElementsByName('saisie2')[0].value,
        operateur = document.getElementsByName('operateur')[0].value,
        resultat = document.getElementsByName('resultat')[0];
    resultat.style.borderColor = '#cecece';


    console.dir(operateur);
    console.log(`avec espaces : ${saisie1}`);

    saisie1 = saisie1.trim();
    saisie2 = saisie2.trim();

    console.log(`sans espaces : ${saisie1}`);

    if ((saisie1 !== "" || saisie2 !== "")) {
        if ((!isNaN(saisie1)) && (!isNaN(saisie2))) {
            switch (operateur) {
                case'+':
                    resultat.setAttribute('value', parseInt(saisie1) + parseInt(saisie2));
                    break;
                case'-':
                    resultat.setAttribute('value', parseInt(saisie1) - parseInt(saisie2));
                    break;
                case'*':
                    resultat.setAttribute('value', parseInt(saisie1) * parseInt(saisie2));
                    break;
                case'/':
                    (saisie2 == 0) ? resultat.setAttribute('value', 'Division par 0 impossible!')
                    :resultat.setAttribute('value', parseInt(saisie1) / parseInt(saisie2));
                    break;
                default:

                    resultat.setAttribute('value', 'ERREUR! Résultat impossible ... ');

            }
        } else {
            resultat.style.borderColor = 'red';
            resultat.setAttribute('value', 'Résultat impossible ... ');
        }
        console.log(`remplis`);
    } else {
        resultat.style.borderColor = 'red';
        resultat.setAttribute('value', 'Merci de remplir tous les champs !');
    }
}

