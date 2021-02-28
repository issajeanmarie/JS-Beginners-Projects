const menuBtn = document.querySelector('.menu');
let menuStatus = true;

menuBtn.addEventListener('click', () => {
	if (menuStatus) {
		menuBtn.classList.add('open');
		menuStatus =false;
	} else{
		menuBtn.classList.remove('open');
		menuStatus =true;
	}
});