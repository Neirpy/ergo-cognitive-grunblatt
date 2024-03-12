let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesBook = document.querySelectorAll('.slideBook');
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
        slide.classList.remove('slide-left');
        slide.style.display = 'none';
    }
}

function showSlide() {
    hideAllSlides();
    // met un condition si l'ecran est en portrait affiche qu'un seul slide
    if (window.matchMedia("(orientation: portrait)").matches) {
        slides[slideIndex].classList.add('activeSlide');
        slides[slideIndex].style.display = 'flex';
        const selectList = document.querySelector('.slideSelectList');
        selectList.value = slideIndex;
        updateSlideCounter();
        return;
    }
    slides[slideIndex].classList.add('activeSlide');
    slides[slideIndex].classList.add('flip');
    slides[(slideIndex + 1) % slides.length].classList.add('activeSlide');
    slides[(slideIndex + 2) % slides.length].classList.add('activeSlide');
    slides[slideIndex].style.display = 'flex';
    slides[(slideIndex + 1) % slides.length].style.display = 'flex';
    slides[(slideIndex + 2) % slides.length].style.display = 'flex';

    // Set the value of selectList to slideIndex
    const selectList = document.querySelector('.slideSelectList');
    selectList.value = slideIndex;
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

if (document.querySelector('.slider')){
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
    generateSlideCounter();
    showSlide();
}


let slideBookIndex = 0;
const slideBookCounter = document.getElementById('slideBookCounter');
let slideBookInterval;

function generateSlideBookCounter() {
    const selectList = document.createElement('select');
    selectList.classList.add('slideBookSelectList');
    for (let i = 0; i < slidesBook.length; i++) {
        const option = document.createElement('option');
        option.classList.add('slideBookOption');
        option.value = i;
        option.text = i + 1;
        selectList.appendChild(option);
    }
    selectList.addEventListener('change', () => {
        slideBookIndex = selectList.value;
        clearInterval(slideBookInterval);
        showSlideBook();
        slideBookInterval = setInterval(nextSlideBook, 3000);
    });

    const totalSlidesBook = document.createElement('span');
    totalSlidesBook.textContent = ` / ${slidesBook.length}`;

    slideBookCounter.appendChild(selectList);
    slideBookCounter.appendChild(totalSlidesBook);
}

function hideAllSlideBooks() {
    for (let slide of slidesBook) {
        slide.classList.remove('activeSlideBook');
        slide.classList.remove('slideBook-left');
        slide.style.display = 'none';
    }
}

function showSlideBook() {
    hideAllSlideBooks();
    slidesBook[slideBookIndex].classList.add('activeSlideBook');
    slidesBook[slideBookIndex].style.display = 'flex';

    const selectList = document.querySelector('.slideBookSelectList');
    selectList.value = slideBookIndex;
    updateSlideBookCounter();
}

function updateSlideBookCounter() {
    const buttons = slideBookCounter.querySelectorAll('button');
    buttons.forEach((button, index) => {
        if (index === slideBookIndex) {
            button.classList.add('activeBtn');
        } else {
            button.classList.remove('activeBtn');
        }
    });
}

function nextSlideBook() {
    slideBookIndex++;
    if (slideBookIndex >= slidesBook.length) slideBookIndex = 0;
    showSlideBook();
}

function prevSlideBook() {
    slideBookIndex--;
    if (slideBookIndex < 0) slideBookIndex = slidesBook.length - 1;
    showSlideBook();
}

if (document.querySelector('.sliderBook')){
    document.querySelector('.nextBook').addEventListener('click', nextSlideBook);
    document.querySelector('.prevBook').addEventListener('click', prevSlideBook);
    generateSlideBookCounter();
    showSlideBook();
}


/**
 * partie menu burger
 */

// Ajoutez ce code dans votre fichier JavaScript

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('header nav');
  const navLinks = document.querySelectorAll('header nav ul li');

  burger.addEventListener('click', () => {
    // bascule Nav
    nav.classList.toggle('nav-active');

    // Animation des liens
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    // Animation du burger
    burger.classList.toggle('toggle');
  });
}

navSlide();