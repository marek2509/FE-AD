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
const carouselSpeed = 500000;
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

///////////////////////////
///////////////////////////
// GRAG TEST
///////////////////////////
///////////////////////////
/* events fired on the drop targets */
/*
let draggableSlider = function () {
  // DOM element(s)
  let slider = document.querySelector(".slider"),
    innerSlider = document.querySelector(".slider-inner");

  // Slider variables
  let pressed = false,
    startX,
    x;

  let myStart, mySliderStart;
  // Mousedown eventlistener
  slider.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    myStart = e.movementX;
    slider.style.cursor = "grabbing";

    mySliderStart = -index * carouselWidth + window.innerWidth;
  });

  // mouseneter
  slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab";
  });

  // mouseup
  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
  });

  // window
  window.addEventListener("mouseup", () => {
    pressed = false;
    let difference;

    for (let i = 0; i < carouselImages.length; i++) {
      let tmp = -i * carouselWidth + window.innerWidth;
      difference = mySliderStart - tmp;
      console.log("different", i, difference, Math.abs(difference));
    }

    if (Math.abs(difference) > window.innerWidth / 4) {
      if (difference > 0) {
        index++;
      } else {
        index--;
      }
    }
    changeImage();
  });

  // Slider mousemove event listener
  slider.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    // console.log(x, startX);
    // innerSlider.style.left = `${x - startX}px`;
    mySliderStart += e.movementX;
    sliderBox.style.transform = `translateX(${mySliderStart}px)`;

    console.log(mySliderStart, e.movementX);
    // checkBoundry();
  });

  // Check boundry of outer and inner sliders
  function checkBoundry() {
    let outer = slider.getBoundingClientRect(),
      inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
      // innerSlider.style.left = "0px";
    } else if (inner.right < outer.right) {
      // innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
  }
};

// Invoke code
draggableSlider();
*/
