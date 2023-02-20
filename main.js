const year = document.querySelector('.year');
const addresInput = document.querySelector('.address');
const error = document.querySelector('.error');
const btn = document.querySelector('.btn');

let regex =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const countYear = () => {
	const newDate = new Date();
	const currentYear = newDate.getFullYear();
	year.textContent = currentYear;
};

const testEmail = () => {
	if (addresInput.value.match(regex)) {
		console.log('ok');
		addresInput.value = '';
		addresInput.classList.remove('error-info');
		error.classList.remove('active');
	} else {
		addresInput.classList.add('error-info');
		error.classList.add('active');
	}
};

countYear();

btn.addEventListener('click', testEmail);
