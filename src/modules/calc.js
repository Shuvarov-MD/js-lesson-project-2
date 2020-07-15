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

export default calc;
