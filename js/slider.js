const sliderBox = document.querySelector(".slider-box");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
const carouselImages = document.querySelectorAll(".slider-img");
let carouselWidth = window.innerWidth;
const carouselSpeed = 3000;
console.log(carouselImages);
const btnLookMoreWeeding = document.querySelector("#btnGaleryWeeding");
const btnLookMoreDaily = document.querySelector("#btnGaleryDaily");
const btnLookMoreEvening = document.querySelector("#btnGaleryEvening");

const galleryWeeding = document.querySelector(".slider-weeding");
const galleryDaily = document.querySelector(".slider-daily");
const galleryEvening = document.querySelector(".slider-evening");

const btnsClose = document.querySelectorAll(".btn-close");

let index = 0;
const handleCarousel = () => {
	index++;
	changeImage();
};

let startCarousel = setInterval(handleCarousel, carouselSpeed);

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
};

const handleLeftArrow = () => {
	index--;
	resetInterval();
};

const resetInterval = () => {
	changeImage();
	clearInterval(startCarousel);
	startCarousel = setInterval(handleCarousel, carouselSpeed);
};

rightBtn.addEventListener("click", handleRightArrow);
leftBtn.addEventListener("click", handleLeftArrow);

btnLookMoreWeeding.addEventListener("click", () => {
	carouselWidth = window.innerWidth;
	galleryWeeding.style.display = "flex";
});

const closeGallery = () => {
	galleryWeeding.style.display = "none";
};

btnsClose.forEach((btn) => {
	btn.addEventListener("click", closeGallery);
});

window.addEventListener("resize", () => {
	carouselWidth = window.innerWidth;
	// closeGallery();
});
//  btnLookMoreDaily
//  btnLookMoreEvening
