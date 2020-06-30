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

	countTimer('2 july 2020');

	//Меню
	const toggleMenu = () => {
		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeMenu = menu.querySelector('.close-btn'),
			menuItems = menu.querySelectorAll('ul > li');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		btnMenu.addEventListener('click', handlerMenu);
		closeMenu.addEventListener('click', handlerMenu);
		menuItems.forEach(item => item.addEventListener('click', handlerMenu));
	};

	toggleMenu();

	//Модальное окно
	const togglePopup = () => {
		const popup = document.querySelector('.popup'),
			popupClose = document.querySelector('.popup-close'),
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

		popupClose.addEventListener('click', () => {
			popup.style.display = '';
			count = 0;
		});

	};

	togglePopup();

});
