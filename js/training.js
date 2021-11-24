const burger = document.querySelector(".container-nav__burger");
const burgerBtn = document.querySelector(".container-nav__burger-box");
const navBar = document.querySelector(".container-nav__nav-bar");
const arrayNavItems = document.querySelectorAll(".container-nav__nav-bar-list-item-link");


const showMenu = () => {
  navBar.classList.toggle("visible-nav");
};

const toggleBurgerX = () => {
    burger.classList.toggle("burger-x");
    showMenu();
    handleNavItemsAnimation();
  };

  const deleteAnimation = () => {
    arrayNavItems.forEach((item) => item.classList.remove("nav-items-animation"));
  };

  const handleNavItemsAnimation = () => {
    let delayTime = 0;
    navBar.style.animationDelay = "." + delayTime++ + "s";
    arrayNavItems.forEach((item) => {
      item.classList.toggle("nav-items-animation");
      item.style.animationDelay = "." + delayTime++ + "s";
    });
  };
  

  burgerBtn.addEventListener("click", toggleBurgerX);