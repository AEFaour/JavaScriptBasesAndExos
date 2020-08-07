'use strict';
let selectLang = document.getElementById('langue'),
    text = document.getElementById('text');

lang();
//onchange => select

selectLang.addEventListener('change', function () {
    console.dir(this);
    console.log(this.options[this.selectedIndex].value);
    //stockage de la valeur selectionnée
    let langSelected = this.options[this.selectedIndex].value;
    setCookie('langue', langSelected, 30);

    lang();
});

//nom, valeur,  expiration
function setCookie(cName, cValue, cExpDay) {
    //création de la date d'expiration
    let d = new Date();
    d.setTime(d.getTime() + (cExpDay * 24 * 3600 * 60));

    let formatDateCookie = `expires = ${d.toUTCString()}`;

    //format du cookie : nom=valeur; expiration
    document.cookie = `${cName} = ${cValue}; ${formatDateCookie}`
    //document.cookie = "username=John Doe; expires=Mon, 18 Dec 2023 12:00:00 UTC";

}

function getCookie(nameCookie) {

 /*   let name = `${nameCookie} =`;*/
    let splitCookie = document.cookie.split('=');
    console.log(document.cookie);
    console.dir(splitCookie);
    if (nameCookie == splitCookie[0]){
        console.log(splitCookie[1]);
        return splitCookie[1];

    } else{
        return "Erreur !";
    }
}

function lang() {
    let langue = getCookie('langue');

    switch (langue) {
        case 'Français':
            text.innerText = "Bienvenue !";
            break;
        case 'Allemand':
            text.innerText = "Willkommen !";
            break;
        case 'Anglais':
            text.innerText = "Welcome !";
            break;
        case 'Italien':
            text.innerText = "Benvenuto !";
            break;
        default:
            text.innerText = "Merci de séléctionner une langue !";
    }
}


