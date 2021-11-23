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
});