$(document).ready(function() {
    // Set up variables
    var $slider = $('#slider');
    var $slides = $slider.find('img');
    var slideCount = $slides.length;
    var currentIndex = 0;
    var nextIndex = 0;
    var counter = 1;

    if(counter == 1) {
        for(let i = counter; i < slideCount; i++) {
            $slides.eq(counter).fadeOut(1);
            counter++;
        }
    }
  
    // Function to show the next slide
    function showNextSlide() {
      nextIndex = (currentIndex + 1) % slideCount;
      fadeSlide('next');
    }
  
    // Function to show the previous slide
    function showPreviousSlide() {
      nextIndex = (currentIndex - 1 + slideCount) % slideCount;
      fadeSlide('prev');
    }
  
    // Function to fade the slides
    function fadeSlide(direction) {
      if (direction == 'next') {
        // Could add extra animations here to make the transition more interesting
        $slides.eq(nextIndex).fadeIn(1000);
        $slides.eq(currentIndex).fadeOut(1000);
        currentIndex = nextIndex;
      } else if (direction == 'prev') {
        // Could add extra animations here to make the transition more interesting
        $slides.eq(nextIndex).fadeIn(1000);
        $slides.eq(currentIndex).fadeOut(1000);
        currentIndex = nextIndex;
      }
    }
  
    // Event handlers for next and previous buttons
    $('#next').on('click', function() {
      showNextSlide();
    });
  
    $('#prev').on('click', function() {
      showPreviousSlide();
    });
});