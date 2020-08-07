'use strict';
console.log('toto');
/*
alert()
confirm()
prompt()
 */
alert('Je suis une boite alert !');

//confirm()

let reponse = confirm('Cliquez sur ok ou annuler');
alert(reponse);
if (reponse) {
    console.log(`Vous venez de cliquer sur Ok`);
} else {
    console.log(`Vous venez de cliquer sur annuler`);
}

//prompt()

let age = prompt('Quel âge avez-vous ?');

alert(age);

function  addition(){
    let val1 = prompt("Indiquez la première valeur : ");
    let val2 = prompt("Indiquez la deuxième valeur : ");
    let result = parseFloat(val1) + parseFloat(val2);
    alert(result);
}

addition();