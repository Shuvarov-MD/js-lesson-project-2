window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	//Таймер
	function countTimer(deadline) {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		function getTimeRemaining() {
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
		}

		function updateClock() {
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
		}

		setInterval(updateClock, 1000);
	}

	countTimer('3 july 2020');

	//Меню
	const toggleMenu = () => {
		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		btnMenu.addEventListener('click', handlerMenu);
		menu.addEventListener('click', event => {
			let target = event.target;

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
});
