// scripts.js

function smoothScroll(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

  let currentSlide = 0;
  const carouselStack = document.querySelector('.carousel-container .carousel-stack');


function showSlide(slideIndex) {
  // Hide all carousel images except the one at slideIndex
  const carouselImages = carouselStack.querySelectorAll('.carousel-image');
  carouselImages.forEach((image, index) => {
    image.style.display = index === slideIndex ? 'block' : 'none';
  });
}

function changeSlide(direction) {
  const carouselImages = carouselStack.querySelectorAll('.carousel-image');
  currentSlide += direction;

  // Ensure the carousel wraps around the images
  if (currentSlide < 0) {
    currentSlide = carouselImages.length - 1;
  } else if (currentSlide >= carouselImages.length) {
    currentSlide = 0;
  }

  // Show the current slide
  showSlide(currentSlide);
}

// Show the initial slide
showSlide(currentSlide);
