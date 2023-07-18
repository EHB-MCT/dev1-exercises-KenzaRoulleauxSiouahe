"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

drawRect();

function drawRect() {
	context.rect(50, 50, 350, 350);
	context.rect(50, 50, 290, 290);
	context.rect(105, 50, 235, 235);
	context.rect(160, 100, 180, 185);
	context.rect(160, 160, 125, 125);

	context.fillStyle = "lightblue";
	context.lineWidth = 2.5;
	context.fill();
	context.stroke();
}
