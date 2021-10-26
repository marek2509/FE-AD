const burger = document.querySelector(".container-nav__burger");
const burgerBtn = document.querySelector(".container-nav__burger-box");
const navBar = document.querySelector(".container-nav__nav-bar");
const showCircleShadowCard = document.querySelector("#showCircleShadowCard");
const cardTextShadow = document.querySelector(".card-shadow .text");

const showMenu = () => {
  navBar.classList.toggle("visible-nav");
};

const toggleBurgerX = () => {
  if (window.innerWidth < 992) {
    burger.classList.toggle("burger-x");
    showMenu();
  }
};

burgerBtn.addEventListener("click", toggleBurgerX);

const navItems = document.querySelectorAll(".container-nav__nav-bar-list-item-link");

navItems.forEach((x) => x.addEventListener("click", toggleBurgerX));

const scrollSpySections = document.querySelectorAll(".section");

const handleScrollSpy = () => {
  const sections = [];

  scrollSpySections.forEach((section) => {
    // console.log(window.scrollY);
    // wartość scrolla
    // console.log(section.offsetTop);
    // odległośc danej sekcji od górnej krawędzi przeglądarki
    // console.log(section.offsetHeight);
    // wysokość każdej z sekcji

    if (window.scrollY <= section.offsetTop + section.offsetHeight - 81) {
      sections.push(section);

      const activeSection = document
        .querySelector(`[href*="${sections[0].id}"]`)
        .querySelector("p");
      navItems.forEach((item) =>
        item.querySelector("p").classList.remove("active")
      );
      activeSection.classList.add("active");
    }

    /* if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
                const lastSection = document.querySelector('a:last-of-type')

                navItems.forEach(item => item.classList.remove('active'))

                lastSection.classList.add('active')
            }*/
  });
};

const toggleShowCardShadow = () => {
  if( cardTextShadow.classList.contains('shadow-show')){
    cardTextShadow.classList.remove("shadow-show");
    cardTextShadow.classList.add("shadow-hidden");
  }else{
    cardTextShadow.classList.add("shadow-show");
    cardTextShadow.classList.remove("shadow-hidden");
  }


}


window.addEventListener("scroll", handleScrollSpy);

showCircleShadowCard.addEventListener("click",toggleShowCardShadow);
