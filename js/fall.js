const fadenLeftItems = document.querySelectorAll(`[data-fall='faden-left']`);
const fadenRightItems = document.querySelectorAll(`[data-fall='faden-right']`);

fadenLeftItems.forEach((x) => x.classList.add("appearNowSetLeft"));
fadenRightItems.forEach((x) => x.classList.add("appearNowSetRight"));

const options2 = {
  rootMargin: "-100px",
};

const launchStartCounterLeft = (counterItem) => {
  if (counterItem.classList.contains("appearNowLeft")) {
    return;
  }
  const startCounter = (entry) => {
    if (entry[0].isIntersecting) {
      counterItem.classList.add("appearNowLeft");
    }
  };
  const observer2 = new IntersectionObserver(startCounter);
  observer2.observe(counterItem);
};
fadenLeftItems.forEach((item) => launchStartCounterLeft(item));

const launchStartCounterRight = (counterItem) => {
  if (counterItem.classList.contains("appearNowRight")) {
    return;
  }
  const startCounter = (entry) => {
    if (entry[0].isIntersecting) {
      counterItem.classList.add("appearNowRight");
    }
  };
  const observer2 = new IntersectionObserver(startCounter);
  observer2.observe(counterItem);
};

fadenRightItems.forEach((item) => launchStartCounterRight(item));
