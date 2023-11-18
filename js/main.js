/********************************* FILE JS ****************************************/
// linguaggio restrittivo js
'use strict'; 

//variabili
const imagesLands = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

const items = document.querySelector('.items');

let currentImage = 0;

const elementPrev = document.querySelector('.prev');
const elementNext = document.querySelector('.next');

//ciclo
for(let i = 0; i < imagesLands.length; i++) {

    const elementBoxImage = document.createElement('div');
    elementBoxImage.classList.add('item');

    if (i === currentImage) {
        elementBoxImage.classList.add('active');
    };

    const elementImg = document.createElement('img');
    elementImg.src = `img/${imagesLands[i]}`;
    elementImg.alt = `Landscape ${i}`;
    
    elementBoxImage.append(elementImg);
    items.append(elementBoxImage);
};

// NodeList elementi 
const elementBoxesImagesDom = document.querySelectorAll('.item');
console.log(elementBoxesImagesDom);

elementNext.addEventListener('click', function () {
elementBoxesImagesDom[currentImage].classList.remove('active');

    if (currentImage === elementBoxesImagesDom.length - 1) {
        currentImage = 0; 
    } else {
        currentImage++;
    }
    elementBoxesImagesDom[currentImage].classList.add('active');
    });

elementPrev.addEventListener('click', function () {
    elementBoxesImagesDom[currentImage].classList.remove('active');

    if (currentImage === 0) {
        currentImage = elementBoxesImagesDom.length-1; 
    } else {
        currentImage--;
    }

    elementBoxesImagesDom[currentImage].classList.add('active');
});

