const sendForm = () => {
	const errorMessage = 'Что-то пошло не так...',
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
		forms = document.querySelectorAll('form'),
		statusMessage = document.createElement('div');

	statusMessage.style.cssText = 'font-size: 2rem; color: #fff';

	forms.forEach(item => {
		item.querySelector('.form-phone').setAttribute('maxlength', 15);
		item.addEventListener('input', event => {
			if (event.target.matches('.form-phone')) {
				event.target.value = event.target.value.replace(/^[^+\d]*(\+|\d)|\D/g, '$1');
			} else if (event.target.matches('.mess') || event.target.matches('input[name="user_name"]')) {
				event.target.value = event.target.value.replace(/[^А-ЯЁа-яё\s]/, '');
			}
		});
	});


	const createAnimationStyle = () => {
		const style = document.createElement('style');
		style.textContent = `
    .sk-rotating-plane {
      width: 2rem;
      height: 2rem;
      margin: auto;
      margin-top: 10px;
      background-color: #19b5fe;
      animation: sk-rotating-plane 1.2s infinite ease-in-out;
    }

    @keyframes sk-rotating-plane {
      0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      }
      50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      }
      100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      }
    }


    input:invalid {
      box-shadow: none;
    }
    `;
		document.head.appendChild(style);
	};


	const postData = formData => fetch('./server.php', { method: 'POST', headers: { 'Content-Type': 'multipart/form-data' }, body: formData._blob ? formData._blob() : formData });

	forms.forEach(item => {
		item.addEventListener('submit', event => {
			event.preventDefault();
			if (item.querySelector('.form-phone').value.length >= 11) {
				item.querySelector('.form-phone').style.boxShadow = 'none';
				item.appendChild(statusMessage);
				createAnimationStyle();
				statusMessage.textContent = '';
				statusMessage.classList.add('sk-rotating-plane');
				const formData = new FormData(item);

				postData(formData).then(response => {
					if (response.status !== 200) {
						throw new Error('status network not 200');
					}
					statusMessage.classList.remove('sk-rotating-plane');
					statusMessage.textContent = successMessage;
					setTimeout(() => {
						statusMessage.textContent = '';
					}, 4000);
				}).catch(error => {
					statusMessage.classList.remove('sk-rotating-plane');
					statusMessage.textContent = errorMessage;
					console.error(error);
					setTimeout(() => {
						statusMessage.textContent = '';
					}, 4000);
				});

				const inputs = item.querySelectorAll('input');
				inputs.forEach(item => {
					item.value = '';
				});
			} else {
				item.querySelector('.form-phone').style.boxShadow = 'inset 0 0 5px red';
			}
		});
	});
};

export default sendForm;
