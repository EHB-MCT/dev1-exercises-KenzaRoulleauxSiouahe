"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRect();

function drawRect() {
	//links boven grote
	context.beginPath();
	context.rect(50, 50, 200, 200);
	context.strokeStyle = "red";
	context.stroke();

	//rechts boven middel rood
	context.beginPath();
	context.rect(350, 100, 50, 50);
	context.strokeStyle = "red";
	context.stroke();

	//rechts boven kleine zwarte
	context.beginPath();
	context.rect(400, 75, 25, 25);
	context.fill();

	//links onder midden rood
	context.beginPath();
	context.rect(100, 350, 50, 50);
	context.strokeStyle = "red";
	context.stroke();

	//links onder kleine zwarte
	context.beginPath();
	context.rect(75, 400, 25, 25);
	context.fill();

	//rechts onder grote rode
	context.beginPath();
	context.rect(250, 250, 200, 200);
	context.strokeStyle = "red";
	context.stroke();

	//midden zwarte
	context.beginPath();
	context.rect(150, 150, 200, 200);
	context.strokeStyle = "red";
	context.fill();
	context.stroke();
}
