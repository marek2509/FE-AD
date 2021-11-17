const counterItems = document.querySelectorAll(".achivements__box-number");
const counterBox = document.querySelector(".achivements__boxes");

const options = {
	rootMargin: "-180px",
};

const startCounter = (entry) => {
	if (entry[0].isIntersecting) {
        let i=1;
		counterItems.forEach((counter) => {
			console.log(counter);

			const updateCounter = () => {
				const finalNumber = counter.getAttribute("data-number");
				let speed = finalNumber/300;
                const value = i++*speed;
				if (value < finalNumber) {
					counter.textContent = `${Math.floor(i++*speed)}`;

                    setTimeout(updateCounter, 20);
				} else {
					counter.textContent = finalNumber;
				}
			};
			updateCounter();
		});
	}
};

const observer = new IntersectionObserver(startCounter, options);
observer.observe(counterBox);

