import getElement from "./utils/getElement.js";
import getElements from "./utils/getElements.js";
import { carousel } from "./utils/carousel.js";

// Selections
const slides = getElements('.slide');
const prevBtn = getElement('.prev-btn');
const nextBtn = getElement('.next-btn');

slides.forEach(function (slide, index) {

    // Setting the 'left' property to index * 100
    slide.style.left = `${index * 100}%`;

});

let counter = 0;

nextBtn.addEventListener('click', function () {
    counter++;
    carousel(counter, slides);
});

prevBtn.addEventListener('click', function () {
    counter--;
    carousel(counter, slides);
});

// Hiding 'prevBtn' initally
// prevBtn.style.display = 'none';