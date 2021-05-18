const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
	card.addEventListener("click", () => {
		// Stop if already active
		const classes = card.classList;
		classes.forEach((cl) => {
			if (cl === "active") return;
		});

		// Remove active class from current one
		cards.forEach((card2) => {
			card2.classList.remove("active");
		});

		card.classList.add("active");
	});
});
