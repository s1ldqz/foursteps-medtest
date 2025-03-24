const swiper = new Swiper(".swiper", {
  effect: "fade",
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
});
// let menubtn = document.querySelector(".menu__btn");
// menubtn.onclick = function () {
//   menubtn.nextElementSibling.classList.toggle("menu__list--active");
// };
