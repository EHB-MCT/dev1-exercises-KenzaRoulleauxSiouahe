"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRect();

function drawRect() {
	context.moveTo(50, 50);
	context.lineTo(150, 150);
	context.moveTo(150, 50);
	context.lineTo(50, 150);
	context.strokeStyle = "red";
	context.lineWidth = 5;
	context.stroke();

	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(50, 150);
	context.moveTo(50, 50);
	context.lineTo(150, 50);
	context.moveTo(150, 50);
	context.lineTo(150, 150);
	context.moveTo(50, 150);
	context.lineTo(150, 150);
	context.strokeStyle = "black";
	context.lineWidth = 5;
	context.stroke();
}
