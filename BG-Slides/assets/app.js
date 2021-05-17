const right = document.querySelector("#right");
const left = document.querySelector("#left");
const body = document.querySelector("body");

const images = [
	"/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8",
	"/id/765/600/600.jpg?hmac=cT9rq7ds283bPJEm5jsfUfgi_MDQJZTtoDbIR1uMPTA",
	"/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ",
	"/id/514/600/600.jpg?grayscale&hmac=i9xPqJCag2jL5EHPIb9VLwPzSAxw6Q1jqIXaqCRQFOc",
	"/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE",
	"/id/1008/5616/3744.jpg?hmac=906z84ml4jhqPMsm4ObF9aZhCRC-t2S_Sy0RLvYWZwY",
	"/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA",
	"/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
	"/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE",
	"/id/1083/5472/3648.jpg?hmac=CtOxgXc6Oe3TQvKBXtPsKVT9Z2Yg7SJKWVlgWPeMBUs",
	"/id/1067/5760/3840.jpg?hmac=gO_V7rUFdM8YddyLysCQet4CS0CzSvUcfAtHI1ismLM",
	"/id/1063/4867/3215.jpg?hmac=-ksdmOruOUma2z6ENQo9Yqp9T7lsnokLo8SFfAt-UNU",
];

let index = 0;
body.style.backgroundImage = `url('https://i.picsum.photos${images[0]}')`;

right.addEventListener("click", () => {
	if (index === images.length - 1) return;
	body.style.backgroundImage = `url('https://i.picsum.photos${
		images[index + 1]
	}')`;
	index++;
});

left.addEventListener("click", () => {
	if (index === 0) return;
	body.style.backgroundImage = `url('https://i.picsum.photos${
		images[index - 1]
	}')`;
	index--;
});
