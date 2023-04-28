import getElement from "./utils/getElement.js";

// Selections
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

slides.forEach(function (slide, index) {

    // Setting the 'left' property to index * 100
    slide.style.left = `${index * 100}%`;

});

let counter = 0;

nextBtn.addEventListener('click', function () {
    counter++;
    carousel();
});

prevBtn.addEventListener('click', function () {
    counter--;
    carousel();
});

function carousel() {

    // Resetting the counter when it is equal to slides.length
    if (counter === slides.length) {
        counter = 0;
    }
    // Setting the counter to slides.length -1 when it is less that 0
    if (counter < 0) {
        counter = slides.length - 1;
    }

    // Alternative: Hiding and Showing buttons
    // Requires: Hiding 'prevBtn' initally
    // Next Button
    // if (counter < slides.length - 1) {

    //     // Showing the 'nextBtn' when counter is less than slides.length - 1
    //     nextBtn.style.display = 'block';

    // } else {

    //     // Hiding the 'nextBtn'
    //     nextBtn.style.display = 'none';

    // }

    // Prev Button
    // if (counter > 0) {

    //     // Displaying 'prevBtn'
    //     prevBtn.style.display = 'block';

    // } else {

    //     // Hiding 'prevBtn'
    //     prevBtn.style.display = 'none';

    // }

    slides.forEach(function (slide) {

        // Setting the 'transfom' property
        slide.style.transform = `translateX(-${counter * 100}%)`;

    });

}

// Hiding 'prevBtn' initally
// prevBtn.style.display = 'none';