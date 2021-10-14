const arrayNavItems = document.querySelectorAll(".link-nav");

const checClick = (e) => {
  e.preventDefault();
  const actualClickLink = e.target.parentElement.getAttribute("href");
  const getYSection = document.querySelector(actualClickLink).offsetTop;

  console.log(getYSection);

  window.scroll({
    top: getYSection - 80,
    left: 0,
    behavior: "smooth",
  });
};

arrayNavItems.forEach((x) => x.addEventListener("click", checClick));
