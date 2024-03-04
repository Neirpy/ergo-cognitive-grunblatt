let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideCounter = document.getElementById('slideCounter');
let slideInterval;

function generateSlideCounter() {
    const selectList = document.createElement('select');
    selectList.classList.add('slideSelectList');
    for (let i = 0; i < slides.length; i++) {
        const option = document.createElement('option');
        option.classList.add('slideOption');
        option.value = i;
        option.text = i + 1;
        selectList.appendChild(option);
    }
    selectList.addEventListener('change', () => {
        slideIndex = selectList.value;
        clearInterval(slideInterval);
        showSlide();
        slideInterval = setInterval(nextSlide, 3000);
    });

    // Create a new span element and set its text to the total number of slides
    const totalSlides = document.createElement('span');
    totalSlides.textContent = ` / ${slides.length}`;

    // Append the selectList and totalSlides to slideCounter
    slideCounter.appendChild(selectList);
    slideCounter.appendChild(totalSlides);
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('activeSlide');
        slide.classList.remove('slideRight');
        slide.classList.remove('slideLeft');
        slide.style.display = 'none';
    }
}

function showSlide(direction) {
    hideAllSlides();
    slides[slideIndex].classList.add('activeSlide');
    if (direction === 'right') {
        slides[slideIndex].classList.add('nextSlide');
    }
    if (direction === 'left') {
        slides[slideIndex].classList.add('prevSlide');
    }
    slides[slideIndex].style.display = 'block';
    const selectList = document.querySelector('.slideSelectList');
    selectList.value = slideIndex; // Set the value of selectList to slideIndex
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
    showSlide('right');
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide('left');
}

slideInterval = setInterval(nextSlide, 3000);

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

generateSlideCounter();
showSlide();