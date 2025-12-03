const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1280: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
  },
  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },
});
