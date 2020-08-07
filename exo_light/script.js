'use strict';
//console.log('toto');

let myImage = document.getElementById('myImage'),
    outPrint = document.getElementById('outPrint');

myImage.onclick = function () {
    if (outPrint.innerText == "off"){
        outPrint.innerText = "on";
        myImage.setAttribute("src", "on.png");
        document.body.style.background = "red";

    } else {
        outPrint.innerText = "off";
        myImage.setAttribute("src", "off.png");
        document.body.style.background = "green";

    }

}

/*function lighten(outPrintValue, bgBody, attrImg){
    outPrint.innerText = "off";
    document.body.style.background = "green";
    myImage.setAttribute("src", "off.png");
}*/
/*
myImage.ondblclick= function () {
    outPrint.innerText = "off";
    myImage.setAttribute("src", "off.png");
    document.body.style.background = "green";
}*/
