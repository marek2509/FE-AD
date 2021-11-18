const counterItems = document.querySelectorAll(".counter");
const counterBox = document.querySelector(".achivements__boxes");

const lastNumberIndexOfItems = counterItems.length - 1;

console.log("length " + lastNumberIndexOfItems);

const options = {
  rootMargin: "-180px",
};



const launchStartCounter = (counterItem) => {
	let i = 0;
  const startCounter = (entry) => {
    if (entry[0].isIntersecting) {

        const updateCounter = () => {
          i++;
          const finalNumber = counterItem.getAttribute("data-number");
          let speed = finalNumber / 250;
          const value = i * speed;
          if (value < finalNumber) {
            counterItem.textContent = `${Math.floor(value)}`;

            setTimeout(updateCounter, 2);
          } else {
            counterItem.textContent = finalNumber;
          }
        };

        updateCounter();
   
    }
  };

  const observer = new IntersectionObserver(startCounter, options);
  observer.observe(counterItem);
};

counterItems.forEach(item => launchStartCounter(item))
