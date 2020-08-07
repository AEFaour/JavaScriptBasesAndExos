'use strict';
/*
	1- calculer le score de chaque joueur
	2- afficher le nom du gagnant
	3- affichage la moyenne de chaque joueur
*/
let joueur = ['Jason', 'Flavie', 'Florian', 'Nicolas', 'Oscar'];

let partie1 = [7, 75, 43, 26, 98];
let partie2 = [56, 7, 4, 78, 2];
let partie3 = [42, 17, 75, 58, 42];

let score = partie1.map((item, k) => item + partie2[k] + partie3[k]);
let moyen = score.map((item, l) => item = Math.round(score[l] / 3));
let scoreMax = Math.max(...score);
let indexScoreMax = score.indexOf(scoreMax);
let winner = joueur[indexScoreMax];

function tableCreate() {
    let body = document.getElementsByTagName('body')[0],
        myTable = document.createElement('table'),
        myThead = document.createElement('thead'),
        myTBody = document.createElement('tbody'),
        myTFoot = document.createElement('tfoot'),
        myTrThead = document.createElement('tr'),
        myTrFoot = document.createElement('tr'),
        thJoueur = document.createElement('th'),
        thPartie1 = document.createElement('th'),
        thPartie2 = document.createElement('th'),
        thPartie3 = document.createElement('th'),
        thScore = document.createElement('th'),
        thMoyen = document.createElement('th');

    myTable.style.width = '100%';
    myTable.setAttribute('border', '1');

        for (let i =0; i <=3; i++){
            let myTrBody = document.createElement('tr');
            let tdJoueur = document.createElement('td');
            let tdPartie1 = document.createElement('td');
            let tdPartie2 = document.createElement('td');
            let tdPartie3 = document.createElement('td');
            let tdScore = document.createElement('td');
            let tdMoyen = document.createElement('td');
            tdJoueur.appendChild(document.createTextNode(joueur[i]));
            tdPartie1.appendChild(document.createTextNode(partie1[i]));
            tdPartie2.appendChild(document.createTextNode(partie2[i]));
            tdPartie3.appendChild(document.createTextNode(partie3[i]));
            tdScore.appendChild(document.createTextNode(score[i]));
            tdMoyen.appendChild(document.createTextNode(moyen[i]));
            myTrBody.appendChild(tdJoueur);
            myTrBody.appendChild(tdPartie1);
            myTrBody.appendChild(tdPartie2);
            myTrBody.appendChild(tdPartie3);
            myTrBody.appendChild(tdScore);
            myTrBody.appendChild(tdMoyen);
            myTBody.appendChild(myTrBody);
        }

    thJoueur.appendChild(document.createTextNode('Joueur'));
    thPartie1.appendChild(document.createTextNode('Partie 1'));
    thPartie2.appendChild(document.createTextNode('Partie 2'));
    thPartie3.appendChild(document.createTextNode('Partie 3'));
    thScore.appendChild(document.createTextNode('Score'));
    thMoyen.appendChild(document.createTextNode('Moyen'));
    myTrThead.appendChild(thJoueur);
    myTrThead.appendChild(thPartie1);
    myTrThead.appendChild(thPartie2);
    myTrThead.appendChild(thPartie3);
    myTrThead.appendChild(thScore);
    myTrThead.appendChild(thMoyen);
    myTrFoot.appendChild(document.createTextNode(`le joueur gagnant de cette année est ${winner}: Bravo les ${scoreMax} poinnts pour ${winner}!`));
    myThead.appendChild(myTrThead);
    myTFoot.appendChild(myTrFoot);
    myTable.appendChild(myThead);
    myTable.appendChild(myTBody);
    myTable.appendChild(myTFoot);
    body.appendChild(myTable);
}

tableCreate();





