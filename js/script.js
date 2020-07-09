window.addEventListener('DOMContentLoaded', () => {
	'use srtict';

	//Таймер
	const countTimer = deadline => {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		const getTimeRemaining = () => {
			const dataStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dataStop - dateNow) / 1000;
			let seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 3600);

			seconds = seconds < 10 ? '0' + seconds : seconds;
			minutes = minutes < 10 ? '0' + minutes : minutes;
			hours = hours < 10 ? '0' + hours : hours;
			return { timeRemaining, seconds, minutes, hours };
		};

		const updateClock = () => {
			const timer = getTimeRemaining();

			timerHours.textContent = timer.hours;
			timerMinutes.textContent = timer.minutes;
			timerSeconds.textContent = timer.seconds;

			if (timer.timeRemaining <= 0) {
				const stopInterval = setInterval(updateClock, 1000);
				clearInterval(stopInterval);
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
			}
		};

		setInterval(updateClock, 1000);
	};

	countTimer('10 july 2020');

	//Меню
	const toggleMenu = () => {
		const //btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		document.body.addEventListener('click', event => {
			let target = event.target;

			if (target.closest('.menu')) {
				handlerMenu();
			} else if (!target.closest('menu') && menu.classList.contains('active-menu')) {
				handlerMenu();
			} else if (target.closest('menu')) {
				if (target.classList.contains('close-btn')) {
					handlerMenu();
				} else {
					target = target.closest('li');

					//Плавная прокрутка до блока
					event.preventDefault();
					const menuLink = target.querySelector('a[href^="#"]'),
						linkID = menuLink.getAttribute('href');
					document.querySelector(linkID).scrollIntoView({ behavior: 'smooth', block: 'start' });
					handlerMenu();
				}
			}
		});
	};

	toggleMenu();

	//Модальное окно
	const togglePopup = () => {
		const popup = document.querySelector('.popup'),
			popupBtn = document.querySelectorAll('.popup-btn');


		//Анимация модального окна
		const popupContent = document.querySelector('.popup-content');
		popupContent.style.left = '0';
		let count = 0,
			popupInterval;
		const animatePopup = () => {
			popupInterval = requestAnimationFrame(animatePopup);
			count++;
			popupContent.style.left = count + '%';
			if (count === 38) {
				cancelAnimationFrame(popupInterval);
			}
		};


		popupBtn.forEach(item => {
			item.addEventListener('click', () => {
				popup.style.display = 'block';
				if (document.documentElement.clientWidth > 768) {
					popupInterval = requestAnimationFrame(animatePopup);
				} else {
					popupContent.removeAttribute('style');
				}
			});
		});

		popup.addEventListener('click', event => {
			let target = event.target;

			if (target.classList.contains('popup-close')) {
				popup.style.display = 'none';
				count = 0;
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popup.style.display = 'none';
					count = 0;
				}
			}
		});
	};

	togglePopup();

	//Скролл на один экран
	const scrollDown = () => {
		const btnScrollDown = document.querySelector('a[href="#service-block"]');

		btnScrollDown.addEventListener('click', event => {
			event.preventDefault();
			const linkID = btnScrollDown.getAttribute('href');
			document.querySelector(linkID).scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	};

	scrollDown();


	//Табы
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = document.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};

		tabHeader.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.service-header-tab');

			if (target) {
				tab.forEach((item, index) => {
					if (item === target) {
						toggleTabContent(index);
					}
				});
			}
		});
	};

	tabs();

	//Слайдер
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

	slider();

	//Блок с фотографиями
	const replacePhoto = () => {
		const command = document.getElementById('command');

		command.addEventListener('mouseover', event => {
			if (event.target.matches('.command__photo')) {
				const src = event.target.src;
				event.target.src = event.target.dataset.img;
				event.target.dataset.img = src;
			}
		});

		command.addEventListener('mouseout', event => {
			if (event.target.matches('.command__photo')) {
				const src = event.target.src;
				event.target.src = event.target.dataset.img;
				event.target.dataset.img = src;
			}
		});
	};

	replacePhoto();


	//Валидация калькулятора
	const validateCalc = () => {
		const calcBlock = document.querySelector('.calc-block');

		calcBlock.addEventListener('input', event => {
			if (event.target.matches('.calc-square') || event.target.matches('.calc-count') || event.target.matches('.calc-day')) {
				event.target.value = event.target.value.replace(/\D/g, '');
			}
		});
	};

	validateCalc();


	//Калькулятор
	const calc = (price = 100) => {
		const calcBlock = document.querySelector('.calc-block'),
			calcType = document.querySelector('.calc-type'),
			calcSquare = document.querySelector('.calc-square'),
			calcDay = document.querySelector('.calc-day'),
			calcCount = document.querySelector('.calc-count'),
			totalValue = document.getElementById('total');

		//Анимация итоговой суммы
		const animateTotal = ({ duration, draw, timing }) => {
			const start = performance.now();

			requestAnimationFrame(function animateTotal(time) {
				let timeFraction = (time - start) / duration;

				if (timeFraction > 1) timeFraction = 1;

				const progress = timing(timeFraction);
				draw(progress);

				if (timeFraction < 1) {
					requestAnimationFrame(animateTotal);
				}
			});
		};

		const countSum = () => {
			let total = 0,
				countValue = 1,
				dayValue = 1;
			const typeValue = calcType.options[calcType.selectedIndex].value,
				squareValue = +calcSquare.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}

			if (calcDay.value < 5 && calcDay.value) {
				dayValue *= 2;
			} else if (calcDay < 10 && calcDay.value) {
				dayValue *= 1.5;
			}

			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
			}

			animateTotal({
				duration: 1000,
				timing(timeFraction) {
					return timeFraction;
				},
				draw(progress) {
					totalValue.textContent = Math.floor(progress * total);
				}
			});
		};

		calcBlock.addEventListener('change', event => {
			const target = event.target;

			if (target.matches('select') || target.matches('input')) {
				countSum();
			}
		});
	};

	calc(100);


	//send-ajax-form
	const sendForm = () => {
		const errorMessage = 'Что-то пошло не так...',
			loadMessage = 'Загрузка...',
			successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
			forms = document.querySelectorAll('form'),
			statusMessage = document.createElement('div');

		statusMessage.style.cssText = 'font-size: 2rem; color: #fff';

		forms.forEach(item => {
			item.addEventListener('input', event => {
				if (event.target.matches('.form-phone')) {
					event.target.value = event.target.value.replace(/^[^+\d]*(\+|\d)|\D/g, '$1');
				} else if (event.target.matches('.mess') || event.target.matches('input[name="user_name"]')) {
					event.target.value = event.target.value.replace(/[^А-ЯЁа-яё\s]/, '');
				}
			});
		});


		const postData = (body, outputData, errorData) => {
			const request = new XMLHttpRequest();

			request.addEventListener('readystatechange', () => {
				if (request.readyState !== 4) {
					return;
				}

				if (request.status === 200) {
					outputData();
				} else {
					errorData(request.status);
				}
			});

			request.open('POST', './server.php');
			request.setRequestHeader('Content-Type', 'application/json');
			request.send(JSON.stringify(body));
		};


		forms.forEach(item => {
			item.addEventListener('submit', event => {
				event.preventDefault();
				item.appendChild(statusMessage);
				statusMessage.textContent = loadMessage;
				const formData = new FormData(item);

				const body = {};
				for (const value of formData.entries()) {
					body[value[0]] = value[1];
				}
				postData(body, () => {
					statusMessage.textContent = successMessage;
				}, error => {
					statusMessage.textContent = errorMessage;
					console.error(error);
				});
				const inputs = item.querySelectorAll('input');
				inputs.forEach(item => {
					item.value = '';
				});
			});
		});

	};

	sendForm();

});
