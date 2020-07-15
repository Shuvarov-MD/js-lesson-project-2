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

export default replacePhoto;
