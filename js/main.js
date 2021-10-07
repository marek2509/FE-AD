const burger = document.querySelector(".burger");
const burgerBtn = document.querySelector(".container-burger");
const navBar = document.querySelector(".nav-bar");
const containerBurger = document.querySelector(".container-burger");
const ulList = document.querySelector('.nav-bar ul')


const showMenu = () => {
    navBar.classList.toggle("visible-nav");
    navBar.classList.toggle("invisible-nav");
};

const addBurgerX = () => {
  if (window.innerWidth < 992) {
    burger.classList.toggle("burger-x");
    burger.classList.toggle("burger-x-b");
    showMenu();
  }
};

burgerBtn.addEventListener("click", addBurgerX);

const navItems = document.querySelectorAll(".under-line");

navItems.forEach((x) => x.addEventListener("click", addBurgerX));
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

      const activeSection = document.querySelector(
        `[href*="${sections[0].id}"]`
      );
      navItems.forEach((item) => item.classList.remove("active"));

      activeSection.classList.add("active");
    }

    /* if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
                const lastSection = document.querySelector('a:last-of-type')

                navItems.forEach(item => item.classList.remove('active'))

                lastSection.classList.add('active')
            }*/
  });
};

const checkClick= (e) =>{
  console.log(e.target)
  e.target.classList.add('active-click')
}

window.addEventListener("scroll", handleScrollSpy);
ulList.addEventListener('click', checkClick)
