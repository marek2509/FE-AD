const burger = document.querySelector(".container-nav__burger");
const burgerBtn = document.querySelector(".container-nav__burger-box");
const navBar = document.querySelector(".container-nav__nav-bar");
const showCircleShadowCard = document.querySelector("#showCircleShadowCard");
const cardTextShadow = document.querySelector(".card-shadow .text");
const arrayNavItems = document.querySelectorAll(
  ".container-nav__nav-bar-list-item-link"
);
const arrowBounceDown = document.querySelector("i.arrow-down");
const scrollSpySections = document.querySelectorAll(".section");

const showMenu = () => {
  navBar.classList.toggle("visible-nav");
};

const toggleBurgerX = () => {
  burger.classList.toggle("burger-x");
  showMenu();
  handleNavItemsAnimation();
};

const handleScrollSpy = () => {
  const sections = [];
  scrollSpySections.forEach((section) => {
    // console.log(window.scrollY);
    // wartość scrolla
    // console.log(section.offsetTop);
    // odległośc danej sekcji od górnej krawędzi przeglądarki
    // console.log(section.offsetHeight);
    // wysokość każdej z sekcji

    if (
      window.scrollY >=
      scrollSpySections[scrollSpySections.length - 1].offsetTop -
        window.innerHeight +
        100
    ) {
      if (section.id == "contact") {
        sections.push(section);

        const activeSection = document
          .querySelector(`[href*="${sections[0].id}"]`)
          .querySelector("p");
        arrayNavItems.forEach((item) =>
          item.querySelector("p").classList.remove("active")
        );
        activeSection.classList.add("active");
      }
    } else if (
      window.scrollY <=
      section.offsetTop + section.offsetHeight - 81
    ) {
      sections.push(section);

      const activeSection = document
        .querySelector(`[href*="${sections[0].id}"]`)
        .querySelector("p");

      arrayNavItems.forEach((item) =>
        item.querySelector("p").classList.remove("active")
      );
      activeSection.classList.add("active");
    }
  });
};

//////////////////////
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

///////////////////////////

const checClick = (e) => {
  e.preventDefault();
  const actualClickLink = e.target.parentElement.getAttribute("href");
  const getYSection = document.querySelector(actualClickLink).offsetTop;
  window.scroll({
    top: getYSection - 80,
    left: 0,
    behavior: "smooth",
  });
  deleteAnimation();
  navBar.classList.remove("visible-nav");
  burger.classList.remove("burger-x");
};

arrayNavItems.forEach((x) => x.addEventListener("click", checClick));
arrowBounceDown.addEventListener("click", checClick);
window.addEventListener("scroll", handleScrollSpy);

burgerBtn.addEventListener("click", toggleBurgerX);

