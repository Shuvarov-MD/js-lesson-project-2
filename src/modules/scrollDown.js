const scrollDown = () => {
	const btnScrollDown = document.querySelector('a[href="#service-block"]');

	btnScrollDown.addEventListener('click', event => {
		event.preventDefault();
		const linkID = btnScrollDown.getAttribute('href');
		document.querySelector(linkID).scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
};

export default scrollDown;
