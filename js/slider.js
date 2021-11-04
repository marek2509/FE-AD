const sliderBox = document.querySelector(".slider-box");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
const carouselImages = document.querySelectorAll(".slider-img");
const btnLookMoreWeeding = document.querySelector("#btnGaleryWeeding");
const btnLookMoreDaily = document.querySelector("#btnGaleryDaily");
const btnLookMoreEvening = document.querySelector("#btnGaleryEvening");
const btnClose = document.querySelector(".btn-close");
const gallery = document.querySelector(".slider");

let carouselWidth = window.innerWidth;
const carouselSpeed = 5000;
let index = 0;
let startCarousel; // = setInterval(handleCarousel, carouselSpeed);

const handleCarousel = () => {
  index++;
  changeImage();
};

const changeImage = () => {
  if (index > carouselImages.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = carouselImages.length - 1;
  }

  sliderBox.style.transform = `translateX(${
    -index * carouselWidth + window.innerWidth
  }px)`;
};

const handleRightArrow = () => {
  index++;
  resetInterval();
  console.log(index);
};

const handleLeftArrow = () => {
  index--;
  resetInterval();
  console.log(index);
};

const resetInterval = () => {
  changeImage();
  clearInterval(startCarousel);
  startCarousel = setInterval(handleCarousel, carouselSpeed);
};

const closeGallery = () => {
  gallery.style.display = "none";
  sliderBox.classList.remove("slider-weeding");
  sliderBox.classList.remove("slider-evening");
  sliderBox.classList.remove("slider-daily");
  clearInterval(startCarousel);
};

const openGallery = (galleryClass, altImgValue) => {
  carouselWidth = window.innerWidth;
  startCarousel = setInterval(handleCarousel, carouselSpeed);
  changeImage();
  gallery.style.display = "flex";
  sliderBox.classList.add(galleryClass);
  carouselImages.forEach((img) => img.setAttribute("alt", altImgValue));
};

rightBtn.addEventListener("click", handleRightArrow);
leftBtn.addEventListener("click", handleLeftArrow);

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

window.addEventListener("resize", () => {
  carouselWidth = window.innerWidth;
});
