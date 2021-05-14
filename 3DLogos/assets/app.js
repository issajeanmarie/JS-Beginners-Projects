const range = document.querySelector(".range");
const card_content = document.querySelector(".card_content");
const reload = document.querySelector(".reload");

range.addEventListener("input", () => {
	card_content.style.transform = `rotateY(${range.value}turn)`;
	card_content.style.transition = "0.025s";
});

reload.addEventListener("click", () => window.location.reload());
