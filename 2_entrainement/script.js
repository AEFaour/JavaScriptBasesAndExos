'use strict';
//commntaire monligne
/*
commentaire
multilignes
 */
// Les variables
//déclaration + affectation
let toto = "toto";
console.log(toto);
console.log(`${toto}`);//ES6

//déclaration
let maVar;
console.log(maVar);

// déclaration :

var maVar1 = "Bienvenue !";
console.log(maVar1);

//différence entre let et var
console.log(window);
console.log(window.maVar1);
console.log(window.toto);

let prenom = "Brice", nom = "Halimi", genre = "masculin";
console.log(`Il s'appelle ${prenom} ${nom}, le genre est ${genre}`);
console.log("Il s'appelle " + prenom + " " + nom);
console.log('Il s\'appelle ' + prenom + " " + nom);

prenom = "Thomas";
console.log(`Il s'appelle ${prenom} ${nom}, le genre est ${genre}`);
let nouveauPrenom = prenom;
console.log(`Il s'appelle ${nouveauPrenom} ${nom}, le genre est ${genre}`);
let e = 4 + 5;
console.log(e);
let f = 4 + '5';
console.log(f);
let g = 4 + 8 + 5 + '6' + 2 + 1;
console.log(g);

let centre = 'Doranco : ';
//concaténation par affectation
centre += "entre de formation";
console.log(centre);

//le typage

let chaine = "chaine de caractères";
let boolean = true;
let entier1 = 2020;
let entier2 = -2020;
let decimal = 3.14;
let nan = NaN;
let val1 = null;
let tableau = [1,2];
let objet = {s: 1, v: 2};
console.log(typeof chaine);
console.log(typeof boolean);
console.log(typeof entier1);
console.log(typeof entier2);
console.log(typeof decimal);
console.log(typeof nan);
console.log(typeof val1);
console.log(typeof tableau);
console.log(typeof objet);

console.log(98 / 'Batman');
console.log(typeof (98 / 'Batman'));
console.log(typeof doranco);

/*
types primitifs: string /number / boolean
types spéciaux : null/ undefined
types objects globaux : regExp / Date /
Object / Array /String / Numer ...
*/

// Les constantes
const MACONST = "Valeur non modifiable";

console.log(MACONST);
const maConst2 = "Convention JS";

console.log( maConst2 );
/*
- ne pas débuter par un entier
-ne pas comporter d'espace ni de caractères spéciaux
-convention camalCase
 */

// opérateurs arithmétiques :

let resultArtith = 10 + 5;
console.log('Addition', resultArtith );
console.log(`Addition ${resultArtith}`);

resultArtith = 10 - 5;
console.log('Soutraction', resultArtith );
console.log(`Soutraction ${resultArtith}`);

resultArtith = 10 * 5;
console.log('Multiplication', resultArtith );
console.log(`Multiplication ${resultArtith}`);

resultArtith = 10 / 5;
console.log('Division', resultArtith );
console.log(`Division ${resultArtith}`);

resultArtith = 10 % 5;
console.log('Modulo', resultArtith );
console.log(`Modulo ${resultArtith}`);

let nb1 = 10, nb2 = 5;
console.log(nb1 + nb2 );

nb1 += nb2;

console.log(nb1);

//ordres de priorité :

let x = 5, y = 10, z = -2;

let priorite = x + y / (4 + z) % 3;

console.log(priorite);

// structurrs conditionnelles :

/*
is(condition)
    alore..
sinon
    instruction

is(tout le monde porte son masque)
    alore : plus de virus
sinon
    on est en danger ...
 */

let a  = 10, b = 5, c = 2;

if (a > b){
    console.log(`a, v ${a}, est plus grand que b, de valeur = ${b}`);
} else  {
    console.log(`a, de valeur = ${a}, n'est pas plus grand que b, de valeur = ${b}`);
}

// opérateurs de logique : && ||

if (a > b && b > c){
    console.log(`Les deux conditions sont vraies`);
}

if (a == 9 || b > c){
    console.log(`Au moins l'une des deux conditions est vraies`);
}

/*
= affectation
== égalité mathématiques (valeur)
== égalité au niveau de la valeur et du type
!= différent de
 */

if (a === '10'){
    console.log(`a, de valeur ${a}, est égale stictement  à  '10' en valeur et en type`);
} else if (a == 10 ) {
    console.log(`a, de valeur ${a}, est égale  à  '10'`);
} else {
    console.log(`a, de valeur ${a}, est différent  à  '10'`);
}

let val2 = 3 < 1;
if (!val2) {
    console.log(`la condition est vraie`);
}

let voiture = "bm";

console.log((voiture == 'bm') ? 'Jolie voiture' : 'voiture dégueu !');

if (voiture == 'bm') {
    console.log('Jolie voiture');
} else {
    console.log('Jolie dégueu !');
}
let heure = 9;
 if (typeof(heure) == 'number' == true) {
if (heure < 12 ) console.log(`Il est ${heure} de matin`);
else if (heure < 13 ) console.log(`Il est ${heure} de midi`);
else if (heure < 18 ) console.log(`Il est ${heure} d'après-midi'`);
else console.log(`Il est ${heure} de soir'`);
 } else {
     console.log('Merci de renseigner un chiffre');
 }
/*switch() :
*/

let couleur = 'jeune';
switch (couleur) {
    case "bleu":
        console.log(`Vous aimez le bleu`);
        break;
    case "rouge":
        console.log(`Vous aimez le rouge`);
        break;
    case "mauve":
        console.log(`Vous aimez le mauve`);
        break;
    default:
        console.log(`Vous n'aimez ni le bleu ni le rouge ni le mauve`);
}
// Convertir cette condition switch en structure conditionnelle classique (if/ else if /else
if (couleur === "bleu" ) {console.log(`Vous aimez le bleu`);}
else if (couleur === "rouge") {console.log(`Vous aimez le rouge`);}
else if (couleur === "mauve") {console.log(`Vous aimez le rouge`);}
else {console.log(`Vous n'aimez ni le bleu ni le rouge ni le mauve`);}

// structure itératives: les boucles
//while / for / do while()
document.write('<select>');
let i = 1900
while (i <= 2020)
{

    document.write(`<option> ${i} </option>`);
    i++;
}
document.write('</select>');

// for() : initialisation, condtion, décrémentation
document.write('<select>');
for (let j = 2020; j >= 1900; j--) {
    document.write(`<option> ${j} </option>`);
}
document.write('</select>');

//do while

document.write('<select>');

let k = 1900;
do {
    document.write(`<option> ${k} </option>`);
    k++;
} while (k <= 2020)

document.write('</select>');

/*
<!--
- appliquez les bonnes pratiques vues dans le cadre du cours.
- faites en sorte d'obtenir des tables de multiplication de 1 à 10. cf.table_multi.PNG
- exceptionnellement, utilisez le document.write() pour afficher le résultat sur la page html ;)
-->

 */
document.write('<section>');

for (let x = 1; x <=10; x++){
    document.write(`<p>Table de multiplication ${x}</p>`);
    for (let y= 0; y <= 10; y++) {

        let result = x * y;
        document.write(`<p>${y} * ${x} = ${result}</p>`);
    }
    document.write(`<hr/>`);
}

document.write('</section>');

maFonction();
// expression de fonction
function maFonction(){
    return console.log(`Javascript c'est cool :)`);
}
let maFonction2 = function (){
    return console.log(`Javascript c'est trop cool :)`);
}
//exécution des fonctions :

maFonction();
maFonction2();

function  multiplication(x,y){
    return x * y;
}
console.log(multiplication(5, 4))
let resltat = multiplication(10, 2);
resltat += 2;
console.log(resltat);

function  direBonjour(prenom){
    let message = console.log(`Bonjour ${prenom}. Comment vas-tu`);
    return message;
}

direBonjour('Alexis');
direBonjour('Nabil');
direBonjour('Sonia');

function meteo(saison, temparature){

    let maSaison = (saison === "printemps")? `au`: `en`;
    let monNom = (temparature > 1 || temparature < -1)? "s": "";
    return `Nous somme ${maSaison} ${saison} et il fait ${temparature} degré${monNom}`;
}
console.log(meteo("hiver", -1));
console.log(meteo("printemps", 18));
console.log(meteo("été", 30));
console.log(meteo("automne", 17));

const maFunction3 = (num1, str1) => {
    var arr = {id: num1, description: str1};
    return `<p> ${arr.description} </p>`
}
document.write('<section>');
document.write(maFunction3(1, "Hello"));
document.write('</section>');

//fonction fléchée : ES6
const multiplication2 = (x,y) => {
    return x * y;
}
console.log(multiplication2(55, 44));

function  maFonction4(){
    return function (){
        console.log(`Fonction à l'intérieur d'une autre fonction`);
    }
}
maFonction4()();

console.groupCollapsed('Espace global et espace local');

//espace global et espace local
let maVarLet = "Variable let scope global";
var maVarVar = "Variable var scope global";
const maVarConst = "Variable const scope global";

//var:

console.log(maVarLet);
console.log(window.maVarLet);
console.log(this.maVarLet);

//let

console.log(maVarVar);
console.log(window.maVarVar);
console.log(this.maVarVar);

//const

console.log(maVarConst);
console.log(window.maVarConst);
console.log(this.maVarConst);
console.groupEnd()
//console.clear();

console.dir(function (){})

function fonction11(){
    let maVarLet = 'intern à la fonction';
    return maVarLet;
}
console.log(maVarLet);
console.log(fonction11());
console.log(maVarLet);

if (true){
    let maVarLet = 'LET intern à la structure conditionnelle';
    var maVarVar = 'VAR intern à la structure conditionnelle';
    const maVarConst = 'VAR intern à la structure conditionnelle';
}

console.log(maVarLet);
console.log(maVarVar);
console.log(maVarConst);

function titi(){
    for (var o = 1; o < 5 ; o++)
    {
        console.log(o);
    }
    console.log(o);
}
titi();

// console
console.log();
//console.clear();
console.dir('toto');
console.log('toto');
console.info('toto');

let monH1 = document.getElementById('monH1');
console.log(monH1);
console.dir(monH1);

let tab = new Array('tutu', 'toto', 'titi');
console.table(tab);

console.log(typeof tab);

console.warn('Meassage warning');
console.error('Meassage warning');

console.group("Les tableaux de données Array");

let tab1 = ['fraises', 'bananes', 'kiwis', 'framboises', 'abricots'];
console.table(tab1);
console.log(`${tab1[2]} ${tab1[3]}`);
console.log(typeof tab1);
console.dir(tab1);

console.log(`Longueur du tableau ${tab1.length}`);
tab1.forEach(item => console.log(item));
tab1.map(item => console.log(item));
for (let ac =0 ; ac <tab1.length; ac++){
    console.log(tab1[ac]);
}

for(let keys in tab1)
{
    console.log(tab1[keys]);
}

['test1', 'test2'].forEach((valeurs, indices)=> console.log(`${valeurs} ${indices}`));

let tab2 = [true, 'toto', 3.14, ['toto', 'titi']];
console.table(tab2);
console.log(tab2[3][1]);

let prix = [125, 25.8, 99, 203, 107, 494.5];

let lgTab = prix.length, total = 0;
for (let ad = 0; ad <lgTab; ad++){
    total +=prix[ad];
}

console.log(`Le total est de ${total}`);

let total2 = 0;
prix.forEach((val, key) => total2 +=val);

console.log(`Le total est de ${total2}`);

let total3 = 0

prix.map(e => total3 += e);
console.log(`Le total est de ${total3}`);

console.groupEnd();

console.group("Introduction aux maps");

let map1 = new Map();
console.dir(map1);

map1.set('Paul', 14);
map1.set('Aurélie', 18);
map1.set('Fréderic', 13);
map1.set('Sonia', 19);

for(let [keys, values] of map1){
    console.log(`${keys} => ${values}`);
}
console.groupEnd();
console.group("Les objets");
//objets globaux

let chaine1 = new String('Ceci est une chaine de caractèrs');
//objet globat
let chaine2 = 'Ceci est une chaine de caractèrs';
console.dir(chaine1);
console.dir(chaine2);

let num1 = new Number(3.14);
let num2 = 3.14;

console.dir(num1);
console.dir(num2);

let obj1 = new Object();
// déclration des propriétés
obj1.prenom = "John";
obj1.nom = "Snow";
obj1.age = 25;

console.dir(obj1);
// objets littéraux : méthode recommandé

let spongeBob = {
    firstName : 'Bob',
    lastName : 'l\'éponge',
    agePersonne : 'inconnu',
    identite : function (){
        return `Prénom : ${this.firstName}, Nom : ${this.lastName}, Age: ${this.agePersonne}`
    }
}

console.log(`${spongeBob.firstName} ${spongeBob.lastName}`);
console.log(`${spongeBob.identite()}`);

spongeBob.firstName = 'Patrick',
spongeBob.lastName = 'L\'étoile de mer',
spongeBob.lieuHabitation = 'Ananas';
console.dir(spongeBob);
console.log(`${spongeBob.identite()}`);

//autre façon d'écrire un objet littéral

let perso = {};
perso.prenom = 'Timmy';
perso.nom = 'Legend';
console.dir(perso);
console.log(`${perso.nom}`);

console.groupEnd();

//ES6 :

class Identite{
  constructor(nom, prenom, age) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
  }
  info() {
      return `${etudiant.prenom} ${etudiant.nom}`;
  }
}
//debugger;
let etudiant = new Identite('Depuis', 'Julien', 34);

console.log(etudiant);
console.log(`${etudiant.prenom} ${etudiant.nom}`);
console.log(etudiant.info());

//un objet à partir d'un constructeur

function Identitte2(nom, prenom, age){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
}
let simon = new Identitte2('Cottet', 'Simon', 42);
connsole.dir(simon);
connsole.log(`${simon.prenom}`);

document.write(`<p> ${simon.prenom} ${simon.nom} a ${simon.age} ans</p>`)

