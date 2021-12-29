$(document).ready(function(){
    $('.slider').slick({
          variableWidth: true,
//          autoplay: true,
          waitForAnimate: false,
          autoplaySpeed: 3000,
          speed: 1000,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
    });
});