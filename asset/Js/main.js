

$(document).ready(function () {


  $('#btnTheme').click(function () {
    $('#btnTheme').toggleClass('ri-sun-line');
    $('#btnTheme').toggleClass('ri-moon-line');
    $('html').attr('data-bs-theme', function (index, attr) {
      return attr == 'light' ? 'dark' : 'light';
    });
    
  });


  $(window).scroll(function(){
    if(scrollY > 50){
       $('.header').addClass('scroll-header');
      //  $('.animate__animated').addClass('animate__fadeInUp');
    }
    else{
       $('.header').removeClass('scroll-header');
      //  $('.animate__animated').removeClass('animate__fadeInUp');
    }

 });

 var sectionIds = $('a.nav-link');

    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active-link');
            } else{
                $(this).removeClass('active-link');
            }
    
    
        });
    });
});


var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 2,
  // spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    }}
});
