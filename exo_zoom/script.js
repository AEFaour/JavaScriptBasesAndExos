'use strict';
//alert();

const btn = document.getElementsByTagName('input'),
    img = document.getElementsByTagName('img')[0],
    widthImg = img.width,
    heightImg = img.height;

//-:
btn[0].addEventListener('click', function () {
    img.width += 20;
    img.height += 20;
});
btn[1].addEventListener('click', function () {
    img.width -= 20;
    img.height -= 20;
});
btn[2].addEventListener('click', function () {
    img.width *= 2;
    img.height *= 2;
});
btn[3].addEventListener('click', function () {
    img.width /= 2;
    img.height /= 2;
});
btn[4].addEventListener('click', function () {
    img.width = widthImg;
    img.height = heightImg;
});
