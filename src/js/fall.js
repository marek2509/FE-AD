let fadenLeftItems = document.querySelectorAll(`[data-fall='faden-left']`);
let fadenRightItems = document.querySelectorAll(`[data-fall='faden-right']`);

fadenLeftItems.forEach((x) => x.classList.add("appearNowSetLeft"));
fadenRightItems.forEach((x) => x.classList.add("appearNowSetRight"));

// const options2 = {
//   rootMargin: "-200px",
// };

// const launchStartCounterLeft = (counterItem) => {
//   if (counterItem.classList.contains("appearNowLeft")) {
//     return;
//   }
//   const startCounter = (entry) => {
//     if (entry[0].isIntersecting) {
//       counterItem.classList.add("appearNowLeft");
//     }
//   };
//   const observer2 = new IntersectionObserver(startCounter);
//   observer2.observe(counterItem);
// };
// fadenLeftItems.forEach((item) => launchStartCounterLeft(item));

// const launchStartCounterRight = (counterItem) => {

//   if (counterItem.classList.contains("appearNowRight")) {
//     // return;
//   }

//   const startCounter = (entry) => {
//    console.log(entry.top);
//     if (entry[0].isIntersecting) {
//       counterItem.classList.add("appearNowRight");
//     }
//   };
//   const observer2 = new IntersectionObserver(startCounter, options2);
//   observer2.observe(counterItem);
// };

// fadenRightItems.forEach((item) => launchStartCounterRight(item));

//////////////////////////////////////

const handleScrollAnimation = () => {
	fadenRightItems.forEach((itemAnim) => {
		if (itemAnim.classList.contains("appearNowRight")) return;
		// if (window.scrollY >= (itemAnim.offsetTop + itemAnim.offsetHeight)) {
		if (0 > itemAnim.getBoundingClientRect().top - window.innerHeight * 0.7) {
			itemAnim.classList.add("appearNowRight");
		}
	});

	fadenLeftItems.forEach((itemAnim) => {
		if (itemAnim.classList.contains("appearNowRight")) return;
		// if (window.scrollY >= (itemAnim.offsetTop + itemAnim.offsetHeight)) {
		if (0 > itemAnim.getBoundingClientRect().top - window.innerHeight * 0.7) {
			itemAnim.classList.add("appearNowLeft");
		}
	});

};

window.addEventListener("scroll", handleScrollAnimation);
