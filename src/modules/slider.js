const slider = () => {
	const slider = document.querySelector('.portfolio-content'),
		slide = document.querySelectorAll('.portfolio-item');


	const createDot = () => {
		const portfolioDots = document.querySelector('.portfolio-dots');

		for (let i = 0; i < slide.length; i++) {
			const dot = document.createElement('li');
			dot.classList.add('dot');
			portfolioDots.append(dot);
		}
	};

	createDot();

	const dot = document.querySelectorAll('.dot');

	let currentSlide = 0,
		interval;

	const prevSlide = (elem, index, srtClass) => {
		elem[index].classList.remove(srtClass);
	};

	const nextSlide = (elem, index, srtClass) => {
		elem[index].classList.add(srtClass);
	};

	const autoPlaySlide = () => {
		prevSlide(slide, currentSlide, 'portfolio-item-active');
		prevSlide(dot, currentSlide, 'dot-active');
		currentSlide++;

		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}

		nextSlide(slide, currentSlide, 'portfolio-item-active');
		nextSlide(dot, currentSlide, 'dot-active');

	};

	const startSlide = (time = 2000) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	slider.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		if (!target.matches('.portfolio-btn, .dot')) {
			return;
		}

		prevSlide(slide, currentSlide, 'portfolio-item-active');
		prevSlide(dot, currentSlide, 'dot-active');

		if (target.matches('#arrow-right')) {
			currentSlide++;
		} else if (target.matches('#arrow-left')) {
			currentSlide--;
		} else if (target.matches('.dot')) {
			dot.forEach((item, index) => {
				if (item === target) {
					currentSlide = index;
				}
			});
		}

		if (currentSlide >= slide.length) {
			currentSlide = 0;
		} else if (currentSlide < 0) {
			currentSlide = slide.length - 1;
		}

		nextSlide(slide, currentSlide, 'portfolio-item-active');
		nextSlide(dot, currentSlide, 'dot-active');
	});

	slider.addEventListener('mouseover', event => {
		if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
			stopSlide();
		}
	});

	slider.addEventListener('mouseout', event => {
		if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
			startSlide();
		}
	});

	startSlide(1500);

};


export default slider;
