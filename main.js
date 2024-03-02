let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideCounter = document.getElementById('slideCounter');
let slideInterval;

function generateSlideCounter() {
    for (let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        button.classList.add('slideButton');
        button.innerText = i + 1;
        button.addEventListener('click', () => {
            slideIndex = i;
            clearInterval(slideInterval);
            showSlide();
            slideInterval = setInterval(nextSlide, 3000);
        });
        slideCounter.appendChild(button);
    }
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('activeSlide');
        setTimeout(() => {
            slide.style.display = 'none';
        }, 500);
    }
}

function showSlide() {
    hideAllSlides();
    slides[slideIndex].classList.add('activeSlide');
    setTimeout(() => {
        slides[slideIndex].style.display = 'block';
    }, 500);
    updateSlideCounter();
}

function updateSlideCounter() {
    const buttons = slideCounter.querySelectorAll('button');
    buttons.forEach((button, index) => {
        if (index === slideIndex) {
            button.classList.add('activeBtn');
        } else {
            button.classList.remove('activeBtn');
        }
    });
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    showSlide();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide();
}

slideInterval = setInterval(nextSlide, 3000);

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

generateSlideCounter();
showSlide();