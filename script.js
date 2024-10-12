const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop to the first slide
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the last slide
    showSlide(currentSlide);
}

function toggleMenu() {
    const nav = document.querySelector('.nav');
    const closeIcon = document.querySelector('.close-icon');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    nav.classList.toggle('open');

    // Toggle icon visibility
    if (nav.classList.contains('open')) {
        closeIcon.style.display = 'block';
        hamburgerIcon.style.display = 'none';
    } else {
        closeIcon.style.display = 'none';
        hamburgerIcon.style.display = 'block';
    }
}


