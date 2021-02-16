const input = document.querySelector('input');
const span = document.querySelector('span');

let status = true;
span.addEventListener('click', () => {
	if (status) {
		//Show password
		input.setAttribute('type', 'text');
		span.className = 'fas fa-eye-slash';
		status = false;
	} else{
		//Hide password
		input.setAttribute('type', 'password');
		span.className = 'fas fa-eye';
		status = true;
	}
})