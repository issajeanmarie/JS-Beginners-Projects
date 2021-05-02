const modal = document.querySelector(".modal");
const open_button = document.querySelector(".open_button");
const close_overlay = document.querySelector(".close_overlay");

open_button.addEventListener("click", () => modal.classList.add("show"));
close_overlay.addEventListener("click", () => modal.classList.remove("show"));
