import Swiper from "swiper/bundle";

let howWeWorkMenu = [
  "1",
  "2",
  "3",
  "4",
];

const swiperHowWeWork = new Swiper(".swiper-how-we-work", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        ' js-swiper-circle">' +
        howWeWorkMenu[index] +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});