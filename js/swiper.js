const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["100%", 0, 0],
    },
  },

  on: {
    init: function () {},
  },
});

//My element
const btnLookMoreWeeding = document.querySelector("#btnGaleryWeeding");
const btnLookMoreDaily = document.querySelector("#btnGaleryDaily");
const btnLookMoreEvening = document.querySelector("#btnGaleryEvening");
const gallery = document.querySelector(".swiper");
const carouselImages = document.querySelectorAll(".slider-img");
const btnClose = document.querySelector(".swiper-button-close");

//timeline
const timeLineTop = document.querySelector(".swiper-time-line--top");
const timeLineBottom = document.querySelector(".swiper-time-line--bottom");

timelineRemove = () => {
  timeLineTop.classList.remove("swiper-time-line-horizontal--active");
  timeLineBottom.classList.remove("swiper-time-line-horizontal--active");
};
timelineAdd = () => {
  timeLineTop.classList.add("swiper-time-line-horizontal--active");
  timeLineBottom.classList.add("swiper-time-line-horizontal--active");
};

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

var style = document.createElement("style");
function HideScrollbar() {
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);
}
function VisibleScrollbar() {
  // var style = document.createElement("style");
  style.innerHTML = '';
  document.head.appendChild(style);
}

const openGallery = (galleryClass, altImgValue) => {
  HideScrollbar();
  gallery.style.display = "flex";
  gallery.classList.add(galleryClass);
  carouselImages.forEach((img) => img.setAttribute("alt", altImgValue));
  timelineAdd();
  disableScroll();
};

const closeGallery = () => {
  VisibleScrollbar();
  gallery.style.display = "none";
  gallery.classList.remove("slider-weeding");
  gallery.classList.remove("slider-evening");
  gallery.classList.remove("slider-daily");
  timelineRemove();
  enableScroll();
};

btnLookMoreDaily.addEventListener("click", () => {
  openGallery("slider-daily", "Młoda, piękna kobieta w makijażu dziennym");
});

btnLookMoreWeeding.addEventListener("click", () => {
  openGallery("slider-weeding", "Młoda, piękna kobieta w makijażu ślubnym");
});

btnLookMoreEvening.addEventListener("click", () => {
  openGallery("slider-evening", "Młoda, piękna kobieta w makijażu wieczorowym");
});

btnClose.addEventListener("click", closeGallery);

swiper.on("slideChangeTransitionStart", timelineRemove);

swiper.on("slideChangeTransitionEnd", timelineAdd);

swiper.on("touchStart", () => {
  timelineRemove();
  swiper.autoplay.stop();
});

swiper.on("touchEnd", () => {
  timelineAdd();
  swiper.autoplay.start();
});
