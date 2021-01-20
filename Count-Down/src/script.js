
//Get the form data
let form = document.forms.namedItem('form');

//Listen to submit event
form.addEventListener('submit', e => {
	e.preventDefault();
	let inputSeconds = form.time.value;

	//Clear message
	document.querySelector('#overMessage').
	style.display = 'none';

	//Check emptiness
	if (inputSeconds == '') {
		return;
	} else{

		//Clear field
		form.time.value = '';

		startCountDown(inputSeconds);
	}
});


function startCountDown(inputSeconds) {

	//Make promise to get data and write DOM
	new Promise((resolve, reject) => {
		let outputGoes = document.querySelector('#countResult');
		outputGoes.innerHTML = writeDOM();

		resolve(true);
	})
	.then(result => {
		//Get the elements to write in data
		let secondsTo = document.querySelector('#seconds');
		let minutesTo = document.querySelector('#minutes');
		let hoursTo = document.querySelector('#hours');

		const Interval = setInterval(() => {
			inputSeconds--;

			//Get seconds, minutes, and hours from input
			let seconds = Math.floor(inputSeconds % 60);
			let minutes = Math.floor((inputSeconds / 60) % 60);
			let hours = Math.floor((inputSeconds / 60) / 60);

			let result = {
				seconds : seconds,
				minutes : minutes,
				hours : hours
			};

			secondsTo.innerHTML = result.seconds < 10 ? '0'+result.seconds : result.seconds;
			minutesTo.innerHTML = result.minutes < 10 ? '0'+result.minutes : result.minutes;
			hoursTo.innerHTML = result.hours < 10 ? '0'+result.hours : result.hours;

			//Check if count down is over
			if (inputSeconds == 0) {
				clearInterval(Interval);
				//Write message
				document.querySelector('#overMessage').
				style.display = 'block';
			}

		}, 1000);

		return inputSeconds;
	})

}

//Function to write the DOM
function writeDOM () {
	let output = `
		<div class="bg-white radius-6" style="width: 130px; border: 1px solid #cacaca;">
			<div class="pard-6 color-primary text-center"><span class=" icon_hourglass"></span> Hours</div>
			<div id="hours" style="line-height: 30px; font-size: 1.6em;" class="bg-black pard-12 text-lg color-white text-center bold">
				00
			</div>
		</div>

		<div class="bg-white radius-6" style="width: 130px; border: 1px solid #cacaca;">
			<div class="pard-6 color-primary text-center"><span class=" icon_hourglass"></span> Minutes</div>
			<div id="minutes" style="line-height: 30px; font-size: 1.6em;" class="bg-black pard-12 text-lg color-white text-center bold">
				00
			</div>
		</div>

		<div class="bg-white radius-6" style="width: 130px; border: 1px solid #cacaca;">
			<div class="pard-6 color-primary text-center"><span class=" icon_hourglass"></span> Seconds</div>
			<div id="seconds" style="line-height: 30px; font-size: 1.6em;" class="bg-black pard-12 text-lg color-white text-center bold">
				00
			</div>
		</div>
	`;

	return output;
}