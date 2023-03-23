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
    carousel();
});

function carousel() {

    // Initial Logic: Resetting the counter
    // if (counter === slides.length) {
    //     counter = 0;
    // }
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    // Alternative: Working with buttons
    // Next Button
    if (counter < slides.length - 1) {

        // Showing the 'nextBtn' when counter is less than slides.length - 1
        nextBtn.style.display = 'block';

    } else {

        // Hiding the 'nextBtn'
        nextBtn.style.display = 'none';

    }

    // Prev Button
    if (counter > 0) {

        // Displaying 'prevBtn'
        prevBtn.style.display = 'block';

    }

    slides.forEach(function (slide) {

        // Setting the 'transfom' property
        slide.style.transform = `translateX(-${counter * 100}%)`;

    });

}

// Hiding the 'prev' button initally
prevBtn.style.display = 'none';