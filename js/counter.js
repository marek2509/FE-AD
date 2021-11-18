const counterItems = document.querySelectorAll(".achivements__box-number");
const counterBox = document.querySelector(".achivements__boxes");

const options = {
  rootMargin: "-150px",
};



const launchStartCounter = (counterItem) => {
	let i = 0;
  const startCounter = (entry) => {
    if (entry[0].isIntersecting) {

        const updateCounter = () => {
          i++;
          const finalNumber = counterItem.getAttribute("data-number");
		  let suffix = counterItem.getAttribute("data-suffix");
		  suffix = suffix == null ? '' : suffix;
          let speed = finalNumber / 250;
          const value = i * speed;
          if (value < finalNumber) {
            counterItem.textContent = `${Math.floor(value)}${suffix}`;

            setTimeout(updateCounter, 2);
          } else {
            counterItem.textContent = finalNumber + suffix;
          }
        };

        updateCounter();
   
    }
  };

  const observer = new IntersectionObserver(startCounter, options);
  observer.observe(counterItem);
};

counterItems.forEach(item => launchStartCounter(item))
