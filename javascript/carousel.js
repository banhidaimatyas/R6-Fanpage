let currentSlide = 0;
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;

let isTransitioning = false;

function showSlide(index) {
    if (isTransitioning) return;

    isTransitioning = true;

    // Disable smooth transition during the "wrap-around" between the last and first slides
    const carousel = document.querySelector('.carousel');
    if (index >= totalSlides) {
        // Smoothly loop back to slide 1
        currentSlide = 0;
        carousel.style.transition = 'none';  // Disable transition during loop-back
        updateCarouselPosition();

        setTimeout(() => {
            // Re-enable the smooth transition for the next movement
            carousel.style.transition = 'transform 0.5s ease';
            isTransitioning = false;
        }, 50);  // Small delay to prevent immediate jump
    } else if (index < 0) {
        // Smoothly loop to the last slide
        currentSlide = totalSlides - 1;
        carousel.style.transition = 'none';  // Disable transition during loop-back
        updateCarouselPosition();

        setTimeout(() => {
            // Re-enable the smooth transition for the next movement
            carousel.style.transition = 'transform 0.5s ease';
            isTransitioning = false;
        }, 50);  // Small delay to prevent immediate jump
    } else {
        // Normal transition for other cases
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