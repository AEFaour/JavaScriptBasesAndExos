// Convert from degree celsius to degree fahrenheit
function celsiusToFahrenheit(celsiusDegree) {
    if (typeof celsiusDegree === "number") {
        return (celsiusDegree * (9 / 5)) + 32;
    } else {
        return "Veuillez entrer la dégree en Celsuis, svp!";
    }
};

console.log(celsiusToFahrenheit(5));
console.log(typeof (celsiusToFahrenheit(5)));
console.log(celsiusToFahrenheit("abcd"));
console.log(celsiusToFahrenheit(true));
console.log(celsiusToFahrenheit([]));
console.log(celsiusToFahrenheit({}));

//Reverse a sentence

function sentenceReverse(str) {
    return str.split('').reverse('').join('');
}

console.log(sentenceReverse("Welcome to you!"));

function factorization(num) {
    let i;
    for (i = 1; num > 1; num--) {
        i = num * i;
    }
    return i;
}

console.log(factorization(5));


function sameFin(str, final) {
    if (str.slice(str.length - final.length) === final) {
        return `La chaîne de caractère "${final}" correspond la fin de chaîne de caractère "${str}"`;
    } else {
        return `La chaîne de caractère "${final}" ne correspond pas la fin de chaîne de caractère "${str}"`;
    }


}

console.log(sameFin("school", "ool"));


function fusingArr(arr) {

    for (i = 1; i <= arr.length; i++) {
        Array.prototype.push.apply(arr[0], arr[i]);
    }

    return arr[0];
}

console.log(fusingArr([
    [10, 5, 8, 88],
    [15, 47, 18, 26],
    [32, 35, 107, 92],
    [800, 1071, 527, 8]
]));

function biggestNumber(arr) {

    var results = [];

    for (var i = 0; i < arr.length; i++) {

        var maxiN = arr[i][0];

        for (var j = 1; j < arr[i].length; j++) {

            if (arr[i][j] > maxiN) {
                maxiN = arr[i][j];
            }
        }
        results.push(maxiN);

    }
    return results;
}


console.log(biggestNumber([
    [10, 5, 8, 88],
    [15, 47, 18, 26],
    [32, 35, 107, 92],
    [800, 1071, 527, 8]
]));

function firstCapLet(str) {
    var words = str.split(' ');
    var newStr = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        ;
    }).join(' ');

    return newStr;

}

console.log(firstCapLet("Ich liebe dich..."));

function tallestWord(str) {

    var words = str.split(' ');

    var wordTall = words[0];
    for (i = 0; i < words.length; i++) {
        if (words[i].length > wordTall.length) {
            wordTall = words[i];
        }
    }
    return wordTall.length;
}

console.log(tallestWord("Il me dit que je suis belle."));

function tallestLeng(str) {
    var words = str.split(' ');
    var arrWordLeng = words.map(word => word.length);
    const reducer = (prev, curr) => Math.max(prev, curr);
    var tallWord = arrWordLeng.reduce(reducer);
    return tallWord;
}

console.log(tallestLeng("Il me dit que je suis belle."));

function tallestLengss(str) {
    var words = str.split(' ');

    var itemMax = words[0];
    var arrWordLeng = words.map(word => word.length);
    for (i = 0; i < words.length; i++) {
        if (words[i].length > itemMax.length) {
            itemMax = words[i];
            var mostLenW = arrWordLeng.slice(i, i + 1).join();
        }
    }
    return mostLenW;
}

console.log(tallestLengss("Il me dit que je suis belle."));

function insereNum(arr, num) {

    var arrInsert = arr.push(num);

    var arrSort = arr.sort();

    return arrSort.indexOf(num);

}

console.log(insereNum([30, 45, 87, 96, 54, 29], 60));

function memeLettres(arr) {

    var test = arr[1].toLowerCase();
    var cible = arr[0].toLowerCase();

    for (i = 0; i < test.length; i++) {
        if (cible.indexOf(test[i]) === -1) {
            return false
        } else {
            return true;
        }
    }

}

console.log(memeLettres(["concupiscence", "cup"]));

function additionner(arr) {

    var maxNum = Math.max(...arr);
    var minNum = Math.min(...arr);
    var result = 0
    for (i = minNum; i <= maxNum; i++) {

        result += i;
    }
    return result;

}

console.log(additionner([0, 1000]));

function difTab(arr1, arr2) {
    var rep = [];

    function checkDiff(premier, second) {

        for (var i = 0; i < premier.length; i++) {
            if (second.indexOf(premier[i]) === -1) {
                rep.push(premier[i]);
            }
        }

    }

    checkDiff(arr1, arr2);
    checkDiff(arr2, arr1);
    return rep;

}

console.log(difTab([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function trouverLaPersonne(data, source) {

    var srcKeys = Object.keys(source);
    //console.log(srcKeys);

    // filtrer notre tableau, cad notre premier parametre
    return data.filter(function (obj) {

        for (var i = 0; i < srcKeys.length; i++) {

            if (obj.hasOwnProperty(srcKeys[i]) === false || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }

        }
        return true;
    })
}

console.log(
    trouverLaPersonne(
        [
            {prenom: "Tom", nom: "Durand"},
            {prenom: "Juliette", nom: "Garcia"},
            {prenom: "Jean", nom: "Lafite"},
            {prenom: "Lucien", nom: "Lafite"},
            {prenom: "Lucien", abc: "Lafite"}
        ],
        {nom: "Lafite"}
    ));

function regexTime(str) {
    var regex = /[%-/0-9]/g;

    return str.replace(regex, '');
}


console.log(regexTime('I4l est te-mp///s de %sav/oir u845til85iser 6le re%gex !'));

function fonctionParam(arr, func) {

    var arr1 = arr.sort();

    var newArr = [];

    for (var i = 0; i < arr1.length; i++) {

        if (func(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}

console.log(fonctionParam([1, 7, 2, 3, 90, 4], function (n) {
    return n >= 3;
}));

function repete(str, num) {
    var final = '';
    while (num > 0) {
        final += str;
        num--;
    }
    return final;
}

console.log(repete('abc', 4));


function repete2(str, num) {

    return num > 0 ? str.repeat(num) : '';


}

console.log(repete2('abc', 4));

function repete3(str, num) {

    if (num < 1) {
        return "";
    } else {
        return str + repete3(str, num - 1);
    }

}

console.log(repete3('abc', 4));

function meilleurInvestissement(arr) {

    var meilleurProfit = 0;
    var test = 0;
    var pos = 0;
    var date = [];
    var jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

    for (var i = 0; i < arr.length; i++) {
        test = arr[i];

        for (var j = pos; j < arr.length; j++) {

            if (arr[j] - test > meilleurProfit) {
                meilleurProfit = arr[j] - test;

                date.push([test, arr[j]]);
                if (date.length > 1) {
                    date.shift();
                }
            }
        }
        pos++;
    }
    return "Le meilleur coup à faire cette semaine était d'investir le " +
        jours[arr.indexOf(date[0][0])] +
        "  et de revendre le " + jours[arr.indexOf(date[0][1])] + " pour un bénéfice de " +
        meilleurProfit;
}

console.log(meilleurInvestissement([50, 10, 20, 2, 80, 60, 20]));

function telephoneCheck(str) {

    var reg = /^0[1-9]([-. ]?[0-9]{2}){4}$/;

    return reg.test(str);

}

console.log(telephoneCheck("06 44 64 90 21"));

function aplatisCeTableau(arr) {

    var tableauAplati = [];

    function aplatir(arg) {

        if (Array.isArray(arg)) {
            for (var i = 0; i < arg.length; i++) {
                aplatir(arg[i]);
            }
        } else {
            tableauAplati.push(arg);

        }

    };
    arr.forEach(aplatir);
    return tableauAplati;

}

console.log(aplatisCeTableau([1, {}, [3, [[4]]]]));

var convertisseurRomain = function (num) {

    var valeurDecimale = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var chiffreRomains =
        ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var chiffreRomain = '';

    for (var index = 0; index < valeurDecimale.length; index++) {
        while (num >= valeurDecimale[index]) {
            chiffreRomain += chiffreRomains[index];
            num -= valeurDecimale[index];
        }
    }
    return chiffreRomain;
}

console.log(convertisseurRomain(5648));


function additioneNbPremiers(num) {

    function testPremier(number) {
        for (i = 2; i <= number; i++) {
            if (number % i === 0 && number != i) {
                return false;
            }
        }
        return  true;
    }

    if(num === 1){
        return 0;
    }

    if(testPremier(num) === false){
        return additioneNbPremiers(num - 1);
    }
    if(testPremier(num) === true){
        return num + additioneNbPremiers(num - 1);
    }

}

console.log(additioneNbPremiers(10));

