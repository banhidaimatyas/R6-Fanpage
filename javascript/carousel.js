let currentSlide = 0;
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;

let isTransitioning = false;

function showSlide(index) {
    if (isTransitioning) return;

    isTransitioning = true;

    const carousel = document.querySelector('.carousel');
    if (index >= totalSlides) {
        currentSlide = 0;
        carousel.style.transition = 'none';
        updateCarouselPosition();

        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
            isTransitioning = false;
        }, 50);
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
        carousel.style.transition = 'none';
        updateCarouselPosition();

        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
            isTransitioning = false;
        }, 50);
    } else {
        currentSlide = index;
        updateCarouselPosition();
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    showSlide(currentSlide);
}

function updateCarouselPosition() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 4000);

showSlide(currentSlide);