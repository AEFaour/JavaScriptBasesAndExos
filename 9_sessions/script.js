'use strict';
//affectation d'informations
console.dir(sessionStorage);
sessionStorage.setItem('couleur', 'vert');
sessionStorage.setItem('prenom', 'julien');

//récupération
let valueSession = sessionStorage.getItem('couleur');

//affichage
console.log(sessionStorage.couleur);
console.log(valueSession);

//suppression
sessionStorage.removeItem('couleur');

//suppression en totalité
//sessionStorage.clear();

console.log(sessionStorage.couleur);

