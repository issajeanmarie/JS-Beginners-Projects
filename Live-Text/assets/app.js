const text = document.querySelector('textarea');
const display = document.querySelector('.show');

text.addEventListener('input', () => {
	display.classList.add('text-view');
	display.innerHTML = text.value;
})