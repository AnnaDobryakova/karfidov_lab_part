document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slidesContainer = document.querySelector('.slider__container');
    const slides = document.querySelectorAll('.slider__slide');
    const totalSlides = slides.length;
    const nextButton = document.querySelector('.slider__button_next');
    const prevButton = document.querySelector('.slider__button_prev');
    const indicators = document.querySelectorAll('.slider__indicator');
    
    slidesContainer.style.transition = 'transform 0.5s ease';
    
    function updateSlider() {
      const offset = -currentSlide * 100;
      slidesContainer.style.transform = `translateX(${offset}%)`;
      
      if (indicators && indicators.length) {
        indicators.forEach((indicator, index) => {
          if (index === currentSlide) {
            indicator.classList.add('slider__indicator_active');
          } else {
            indicator.classList.remove('slider__indicator_active');
          }
        });
      }
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    }
    
    if (nextButton) {
      nextButton.addEventListener('click', nextSlide);
    }
    
    if (prevButton) {
      prevButton.addEventListener('click', prevSlide);
    }
    
    if (indicators && indicators.length) {
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          currentSlide = index;
          updateSlider();
        });
      });
    }
    
    let slideInterval = setInterval(nextSlide, 5000);
    

    updateSlider();
  });