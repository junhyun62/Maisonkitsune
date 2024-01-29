$(document).ready(function(){
  const ww = $(window).width();

  if(ww >= 1160){
    var swiper = new Swiper(".firstSwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".secondSwiper", {
      slidesPerView: 2.5,
      spaceBetween: 20,
      // centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  

  }else{
    
  }

    
  

  var swiper = new Swiper(".thirdSwiper", {
    // centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },      
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1: {
        slidesPerView: 1.7,
        spaceBetween: 10
      },
      651:{
        slidesPerView: 2,
        spaceBetween: 10
      },
      749:{
        slidesPerView : 3,
        spaceBetween : 10
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // 1430: {
      //   slidesPerView: 3,
      //   spaceBetween: 0
      // }
    }
  });
  $('.main_menu .man,.main_menu .woman').mouseenter(function(){
    $('.sub_menu_box').addClass('active');
    $('.sub_menu').addClass('active');
  });

  $('.main_menu .show').mouseenter(function(){
    $('.sub_menu_box').removeClass('active');
  });

  $('.sub_menu_box').mouseleave(function(){
    $(this).removeClass('active');
  });


});