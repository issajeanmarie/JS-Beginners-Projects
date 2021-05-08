const blur = document.querySelector("#blur");
const opacity = document.querySelector("#opacity");
const cont_1 = document.querySelector(".cont_1");

const allElements = cont_1.children;

opacity.addEventListener("input", () => {
	for (let i = 0; i < allElements.length; i++) {
		allElements[i].style.background = `rgba(255,255,255,${opacity.value})`;
	}
});

blur.addEventListener("input", () => {
	for (let i = 0; i < allElements.length; i++) {
		allElements[i].style.backdropFilter = `blur(${blur.value}px)`;
	}
});
