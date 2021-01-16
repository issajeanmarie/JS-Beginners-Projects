
//Get the form data
let form = document.forms.namedItem('form');

//Listen to submit event
form.addEventListener('submit', e => {
	e.preventDefault();

	//Call function to add item
	add();
});

function add() {
	//Get value
	let dataField = form.toDo;

	//Check emptiness
	if (dataField.value !== '') {
		//Make a promise
		const promise = new Promise((resolve, reject) => {
			//Send data to be written
			writeDOM(dataField.value);
			resolve(true);
		})

		//Clean the input field as data has been taken
		.then(() => {
			dataField.value = '';
		})
	}
}


//Delete or check item
Actions();
let status = true;
function Actions() {

	let output = document.getElementById('ul');
	output.addEventListener('click', e => {
		if (e.target.classList.contains('icon_trash')) {
			//Call function to delete
			deleteDOM(e.target.parentElement.parentElement);
		} else if(e.target.classList.contains('icon_check_alt')) {
			//Call function to make it done
			verify(e.target);
		}
	});
}

//Delete DOM
function deleteDOM(element) {
	let parent = element.parentElement;
	parent.removeChild(element);
}

//Verify DOM
function verify(element) {
	//Get parent element
	let parent = element.parentElement.parentElement;
	let text = parent.textContent;

	//Check if unchecked
	if (status == true) {
		//Change opacity
		element.style.opacity = '0.3';
		status = false;

	} else{
		//Change opacity
		element.style.opacity = '1';
		status = true;
	}
}


//Write DOM
function writeDOM(data) {

	//Get ul
	let ul = document.getElementById('ul');

	//ADD PADDING AND MARGIN
	ul.className = 'pard-6 top-3';

		//List item
		let li = document.createElement('li');
		li.className = 'bg-white flex bottom-1 relative color-black pard-6';
		li.style.border = '1px solid rgb(230,230,230)';

			//Text value
			li.append(document.createTextNode(data));

			//Buttons
			let buttons = document.createElement('div');
			buttons.className = 'flex just-between absolute pos-right-2';
				let done = document.createElement('a');
				done.setAttribute('href', 'javascript:void(0)');
				done.className = 'icon_check_alt pointer';
				done.style.width = '26px';
				done.setAttribute('title', 'Check');

				//Delete btn
				let deleteBtn = document.createElement('div');
				deleteBtn.className = 'icon_trash pointer';
				deleteBtn.setAttribute('title', 'Delete');

			buttons.append(done);
			buttons.append(deleteBtn);

		li.append(buttons);
	ul.append(li);

}