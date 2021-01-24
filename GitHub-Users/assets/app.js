fetch('https://api.github.com/users')
.then(response => {
	return response.text();
})

.then(text => {
	results = JSON.parse(text);

	let output = '';
	results.forEach(result => {
		output += `
			<li class="single-user">
				<div class="img-cont">
					<img src="${result.avatar_url}">
				</div>

				<div class="names">
					<p>${result.login}</p>
					<span>${result.login}</span>
				</div>

				<a href="https://github.com/${result.login}" target="_blank" class="btn">
					VIEW
				</a>
			</li>
		`;
	});

	document.querySelector('#results').
	innerHTML = output;
})




