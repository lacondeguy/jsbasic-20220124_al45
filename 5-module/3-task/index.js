function initCarousel() {

<<<<<<< HEAD
  let carouselSlides = document.querySelector('.carousel__inner');
  let leftButton = document.querySelector('.carousel__arrow_left');
  let rightButton = document.querySelector('.carousel__arrow_right');
  let size = carouselSlides.offsetWidth;
  let coordinates = 0;
  let currentSlide = 1;
=======

let carouselSlides = document.querySelector('.carousel__inner');
let leftButton = document.querySelector('.carousel__arrow_left');
let rightButton = document.querySelector('.carousel__arrow_right');
let size = carouselSlides.offsetWidth;
let coordinates = 0;
let currentSlide = 1;

leftButton.style.display = 'none';

rightButton.addEventListener('click', () => {
>>>>>>> 0e379cd37e602be1cdf682673176f1c70c364255
  
  leftButton.style.display = 'none';
<<<<<<< HEAD
  
  rightButton.addEventListener('click', () => {
    
    currentSlide += 1;
    coordinates = coordinates + size;
    carouselSlides.style.transform = 'translateX(-' + coordinates + 'px)';
  
    if (currentSlide == 4){
    rightButton.style.display = 'none';
    } else {
    rightButton.style.display = '';
    leftButton.style.display = '';
    }
  
  });
  
  
  leftButton.addEventListener('click', () => {
    
    currentSlide = currentSlide - 1;
    coordinates = coordinates - size;
    carouselSlides.style.transform = 'translateX(-' + coordinates + 'px)';
  
    if (currentSlide == 1) {
    leftButton.style.display = 'none';
    } else {
    rightButton.style.display = '';
    leftButton.style.display = '';
    }
  
  });
  
  }
=======
  } else {
  rightButton.style.display = '';
  leftButton.style.display = '';
  }

});
}
>>>>>>> 0e379cd37e602be1cdf682673176f1c70c364255
