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

export default togglePopup;
