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

export default countTimer;
