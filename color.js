'use strict';
let context = document.querySelector("canvas").getContext("2d");
const rectSize = prompt("How big do you want it?", 5);
for (let i = 0; i < rectSize; i++) {
	for (let j = 0; j < rectSize; j++) {
		let min = 0;
		let max = 16777216;
		let random = Math.floor(Math.random()*(+max - +min) + +min);
		let hex_color = random.toString(16);
		context.fillStyle = "#" + hex_color;
		context.fillRect(i*10, j*10, 10, 10);
	}
}