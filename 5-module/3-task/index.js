function initCarousel() {

  let carouselSlides = document.querySelector('.carousel__inner');
  let leftButton = document.querySelector('.carousel__arrow_left');
  let rightButton = document.querySelector('.carousel__arrow_right');
  let size = carouselSlides.offsetWidth;
  let coordinates = 0;
  let currentSlide = 1;
  
  leftButton.style.display = 'none';
  
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