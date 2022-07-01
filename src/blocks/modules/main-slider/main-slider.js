import Swiper from "swiper/bundle";

const swiper = new Swiper(".main-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

swiper.on("slideChange", function () {
  let slideCounter = document.querySelectorAll(".js-swiper-controls__num");
  slideCounter.forEach((item) => {
    item.textContent = swiper.activeIndex + 1;
  });
});
