// Selections
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
console.log(slides, prevBtn, nextBtn);

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
});

function carousel() {

    // Setting the 'transfom' property
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });

}