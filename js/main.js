$(document).ready(function() {
    $('.header__menu-burger').click(function() {
        $('.header__menu').addClass('open__menu');
        $('.header__instagram').addClass('d-none');
        $('.header__menu-burger__remove').addClass('d-block');
        $('.header__menu-burger').addClass('d-none');
        $('.header__instagram-mob').addClass('d-flex');
    });
    $('.header__menu-burger__remove').click(function() {
      $('.header__menu').removeClass('open__menu');
      $('.header__menu-burger__remove').removeClass('d-block');
      $('.header__instagram').removeClass('d-none');
      $('.header__menu-burger').removeClass('d-none');
      $('.header__instagram-mob').removeClass('d-flex');
    });
});





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,     
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    990: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1240: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 40,     
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});