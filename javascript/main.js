const imageList = document.querySelector('.image-list');
const prevSlideButton = document.getElementById('prevSlide');
const nextSlideButton = document.getElementById('nextSlide');
const imageWidth = 360; 
const visibleSlides = 3; 
const autoScrollInterval = 5000; 
let currentPosition = 0;

function updateSliderPosition() {
  imageList.style.transform = `translateX(-${currentPosition * imageWidth}px)`;
}

function showNextSlide() {
  currentPosition = (currentPosition + 1) % imageList.children.length;
  updateSliderPosition();
}

function showPreviousSlide() {
  currentPosition = (currentPosition - 1 + imageList.children.length) % imageList.children.length;
  updateSliderPosition();
}

nextSlideButton.addEventListener('click', showNextSlide);
prevSlideButton.addEventListener('click', showPreviousSlide);

window.addEventListener('resize', () => {
  currentPosition = 0;
  updateSliderPosition();
});

function autoScroll() {
  showNextSlide();
}

setInterval(autoScroll, autoScrollInterval);

// Налаштування розміщення слайдера
updateSliderPosition();
