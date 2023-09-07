const imageList = document.querySelector('.image-list');
const prevSlideButton = document.getElementById('prevSlide');
const nextSlideButton = document.getElementById('nextSlide');
const imageWidth = 360;
const autoScrollInterval = 10000;
let currentPosition = 0;
let visibleSlides = 1; //

function updateSliderPosition() {
  imageList.style.transform = `translateX(-${currentPosition * imageWidth}px)`;
}

function showNextSlide() {
  currentPosition =
    (currentPosition + visibleSlides) % imageList.children.length;
  updateSliderPosition();

  if (visibleSlides < 1) {
    visibleSlides++;
  }
}

function showPreviousSlide() {
  if (visibleSlides > 1) {
    visibleSlides--;
  }

  currentPosition =
    (currentPosition - 1 + imageList.children.length) %
    imageList.children.length;
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

updateSliderPosition();
