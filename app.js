// Selections
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
console.log(slides, prevBtn, nextBtn);

slides.forEach(function (slide, index) {

    // Setting the 'left' property to index * 100
    slide.style.left = `${index * 100}%`;

});