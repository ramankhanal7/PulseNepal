
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector(".menu-close");
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    menuClose.addEventListener("click", function () {
        navbar.classList.remove("active");
    });

    document.addEventListener("click", function (event) {
        if (!navbar.contains(event.target) && navbar.classList.contains("active")) {
            navbar.classList.remove("active");
        }
    });

    const carouselSlide = document.querySelector(".carousel-slide");
    const slides = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 1;
    const totalSlides = slides.length;

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    firstClone.classList.add('clone');
    lastClone.classList.add('clone');

    carouselSlide.appendChild(firstClone);
    carouselSlide.insertBefore(lastClone, slides[0]);

    const updatedSlides = document.querySelectorAll(".carousel-item");
    const totalUpdatedSlides = updatedSlides.length;

    carouselSlide.style.transform = `translateX(-${100}%)`;

    function showNextSlide() {
        if (currentIndex >= totalUpdatedSlides - 1) {
            currentIndex = 1;
            carouselSlide.style.transition = 'none';
            carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else {
            currentIndex++;
            carouselSlide.style.transition = 'transform 0.5s ease-in-out';
            carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    function showPrevSlide() {
        if (currentIndex <= 0) {
            currentIndex = totalSlides;
            carouselSlide.style.transition = 'none';
            carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else {
            currentIndex--;
            carouselSlide.style.transition = 'transform 0.5s ease-in-out';
            carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    let autoSlideInterval = setInterval(showNextSlide, 5000);

    nextButton.addEventListener("click", function () {
        clearInterval(autoSlideInterval);
        showNextSlide();
        autoSlideInterval = setInterval(showNextSlide, 5000);
    });

    prevButton.addEventListener("click", function () {
        clearInterval(autoSlideInterval);
        showPrevSlide();
        autoSlideInterval = setInterval(showNextSlide, 5000);
    });

    carouselSlide.addEventListener('transitionend', () => {
        if (updatedSlides[currentIndex].classList.contains('clone')) {
            carouselSlide.style.transition = 'none';
            currentIndex = currentIndex === 0 ? totalSlides : 1;
            carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

    updatedSlides.forEach(slide => {
        const background = slide.getAttribute('data-background');
        slide.style.backgroundImage = `url(${background})`;
    });
});
