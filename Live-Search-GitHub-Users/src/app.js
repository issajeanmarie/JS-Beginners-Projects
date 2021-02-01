//Get elements
let display = document.querySelector('#display');
let input = document.querySelector('#input');


//Get GitHub data
function getUser(username) {
	fetch('https://api.github.com/users/'+username)
	.then(result => {
		return result.json();
	})
	.then(data => {
		//Count repos
		let repos_url = data.repos_url;
		fetch(repos_url)
		.then(repos => {
			return repos.json();
		})
		.then(repo => {
			return repo;
		})
		//Write data finally
		.then(repo => {
			if (data.login !== undefined) {
				display.append(writeDOM(data, repo));
				return repo;
			}
		})
		.then((repo) => {
			console.log(data.id)
			let theRepos = document.querySelector(`[data-repos=theRepos-${data.id}]`);
			console.log(theRepos)

				repo.forEach(repo => {
					let singleRepo = document.createElement('div');
					singleRepo.className = 'single-repo';
						let aTheRepo = document.createElement('a');
						aTheRepo.setAttribute('href', `https://github.com/${data.login}/${repo.name}`);
						aTheRepo.setAttribute('target', '_blank');
						aTheRepo.innerHTML = repo.name;
					singleRepo.append(aTheRepo);

					theRepos.append(singleRepo);
				})

		})
		
	})
}



input.addEventListener('input', () => {

	//Animate the form
	document.forms.namedItem('searchForm').
	style.marginTop = '2%';

	//Clear the display area
	while(display.firstChild) {
		display.removeChild(display.firstChild);
	}

	//Search if the form is not empty
	if (input.value !== '') {
		//Then do search
		getUser(input.value);
	} else{
		//Animate the form
		document.forms.namedItem('searchForm').
		style.marginTop = '200px';
	}

})



//Write DOM
function writeDOM(data, repo) {

	let singleUser = document.createElement('div');
	singleUser.className = 'single-user';
	singleUser.style.marginTop = '3%';
	singleUser.style.borderRadius = '6px';
		let pro = document.createElement('div');
		pro.className = 'pro';
			let profile = document.createElement('div');
			profile.className = 'profile';
				let img = document.createElement('img');
				img.setAttribute('src', data.avatar_url);
			profile.append(img);
		pro.append(profile);
			let info = document.createElement('div');
			info.className = 'info';
				let p = document.createElement('p');
				p.innerHTML = data.login;
			info.append(p);
		pro.append(info);

		//Sub info
		let subInfo = document.createElement('div')
		subInfo.className = 'sub-info';
			//Followers
			let followers = document.createElement('div');
			followers.className = 'followers';
				let aFollowers = document.createElement('a');
				aFollowers.setAttribute('href', `https://github.com/${data.login}?tab=followers`);
				aFollowers.setAttribute('target', '_blank');
					let spanFollowers = document.createElement('span');
					spanFollowers.className = 'text-center block';
					spanFollowers.innerHTML = 'Followers';
				aFollowers.innerHTML = data.following;
				aFollowers.append(spanFollowers)
			followers.append(aFollowers);

			//Followers
			let following = document.createElement('div');
			following.className = 'following';
				let aFollowing = document.createElement('a');
				aFollowing.setAttribute('href', `https://github.com/${data.login}?tab=following`);
				aFollowing.setAttribute('target', '_blank');
					let spanFollowing = document.createElement('span');
					spanFollowing.className = 'text-center block';
					spanFollowing.innerHTML = 'Following';
				aFollowing.innerHTML = data.following;
				aFollowing.append(spanFollowing)
			following.append(aFollowing);

			//Rpos
			let repos = document.createElement('div');
			repos.className = 'repos';
				let aRepo = document.createElement('a');
				aRepo.setAttribute('href', `https://github.com/${data.login}?tab=repositories`);
				aRepo.setAttribute('target', '_blank');
					let spanRepo = document.createElement('span');
					spanRepo.className = 'text-center block';
					spanRepo.innerHTML = 'Repos';
				aRepo.innerHTML = repo.length;
				aRepo.append(spanRepo)
			repos.append(aRepo);

		subInfo.append(followers);
		subInfo.append(following);
		subInfo.append(repos);

		//Repo cont
		let repoCont = document.createElement('div');
		repoCont.className = 'repo-cont';
			let pRepo = document.createElement('p');
			pRepo.innerHTML = 'Repositories';

			let theRepos = document.createElement('div');
			theRepos.setAttribute('data-repos', 'theRepos-'+data.id);
			theRepos.className = 'theRepos';
			theRepos.id = data.id;

		repoCont.append(pRepo);
		repoCont.append(theRepos);

	singleUser.append(pro);
	singleUser.append(subInfo);
	singleUser.append(repoCont);

	return singleUser;
}

// function writeRepos(data, repos) {

// 	let theRepos = document.querySelector('#'+data.id);

	// let singleRepo = document.createElement('div');
	// 	singleRepo.className = 'single-repo';
	// 		let aTheRepo = document.createElement('a');
	// 		aTheRepo.setAttribute('href', '');
	// 		aTheRepo.setAttribute('target', '_blank');
	// 		aTheRepo.innerHTML = 'This is the repo';
	// 	singleRepo.append(aTheRepo);

// 	repo.forEach(repo => {
// 		aTheRepo.innerHTML = repo.name;
// 		theRepos.append(singleRepo);

// 	})
// }


// let user = `
	
// 	<div class="single-user">
// 		<div class="pro">
// 			<div class="profile">
// 				<img src="" alt="">
// 			</div>

// 			<div class="info">
// 				<p>IssaJeanMarie</p>
// 			</div>
// 		</div>

// 		<div class="sub-info">
// 			<div class="followers">
// 				<a href="" target="_blank">
// 					<span class="text-center block">890</span>Followers
// 				</a>
// 			</div>
// 			<div class="following">
// 				<a href="" target="_blank">
// 					<span class="text-center block">890</span>Following
// 				</a>
// 			</div>
// 			<div class="repos">
// 				<a href="" target="_blank">
// 					<span class="text-center block">890</span>Repos
// 				</a>
// 			</div>
// 		</div>

// 		<div class="repo-cont">
// 			<p>Repositories</p>
// 			<div class="theRepos">
// 				<div class="single-repo">
// 					<a href="" target="_blank">The one repo</a>
// 				</div>
// 			</div>
// 		</div>
// 	</div>

// `;
