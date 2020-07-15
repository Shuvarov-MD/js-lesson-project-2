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

export default toggleMenu;
