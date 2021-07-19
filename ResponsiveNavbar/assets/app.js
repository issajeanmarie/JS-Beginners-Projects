const menu_button = document.querySelector(".menu_button");
const menu = document.querySelector("ul");
const close_button = document.querySelector(".close_button");

menu_button.addEventListener("click", () => {
	menu.style.height = "fit-content";
	menu.style.padding = "60px 16px";
});

close_button.addEventListener("click", () => {
	menu.style.height = "0";
	menu.style.padding = "0 0";
});
