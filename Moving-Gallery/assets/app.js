const form = document.querySelector(".form");
const login_btn = document.querySelector("#login_btn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector(".message");

login_btn.addEventListener("click", (e) => {
	e.preventDefault();

	if (email.value.trim() === "" && password.value.trim() !== "") {
		email.classList.toggle("shake", 1300);
		email.focus();
		removeAnimation(email, "shake", 1300);
	} else if (email.value.trim() !== "" && password.value.trim() === "") {
		password.classList.toggle("shake", 1300);
		password.focus();
		removeAnimation(password, "shake", 1300);
	} else if (email.value.trim() == "" || password.value.trim() === "") {
		form.classList.toggle("shake");
		email.focus();
		removeAnimation(form, "shake", 1300);
	} else {
		message.classList.add("show");
		removeAnimation(message, "show", 3000);
	}
});

const removeAnimation = (item, className, waitFor) =>
	setTimeout(() => item.classList.remove(className), waitFor);
