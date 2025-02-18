console.log('code running');
$(document).ready(function (){
    // Declare Carousel jquery object
    var owl = $('.owl-carousel');
    var owlContent = $('#owl-content');
  
    // Carousel content initialization
    owlContent.owlCarousel({
        loop:true,
        margin:0,
        autoplaySpeed: 3000,
        navSpeed:3000,
        nav:false,
        autoplay: true,
        rewind: true,
        items:1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        
 
    });
    // Carousel initialization
    owl.owlCarousel({
        loop:true,
        margin:0,
        autoplaySpeed: 3000,
        navSpeed:3000,
        nav:true,
        autoplay: true,
        rewind: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items:1
    });
  
  });


    let NavTabLink = document.querySelectorAll('.nav-tabs .nav-link');

      NavTabLink.forEach(tab => {
        tab.addEventListener('click', function(){
          const tabContent = this.closest('.section-search').querySelector('.tab-content');
         if(tabContent){
          if(this.classList.contains('make')){

            tabContent.classList.add('show');
          } else tabContent.classList.remove('show');
         }
         
        })
      })
