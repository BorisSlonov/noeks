import Swiper from "swiper/bundle";

const swiperMsk = new Swiper(".project-slider_msk", {
  slidesPerView: 1,
  spaceBetween: 8,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next-projects",
    prevEl: ".swiper-button-prev-projects",
  },
  breakpoints: {
    // when window width is >= 1240px
    1240: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});
