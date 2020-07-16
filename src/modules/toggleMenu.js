const toggleMenu = () => {
	const menu = document.querySelector('menu');

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
				if (target.closest('a[href^="#"]')) {
					target = target.closest('a[href^="#"]');

					//Плавная прокрутка до блока
					event.preventDefault();
					const linkID = target.getAttribute('href');
					document.querySelector(linkID).scrollIntoView({ behavior: 'smooth', block: 'start' });
					handlerMenu();
				}
			}
		}
	});
};

export default toggleMenu;
