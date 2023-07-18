"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();

function drawName() {
	context.moveTo(100, 100);
	context.lineTo(100, 300);
	context.moveTo(100, 200);
	context.lineTo(190, 100);
	context.moveTo(100, 200);
	context.lineTo(190, 300);
	context.strokeStyle = "red";
	context.lineWidth = 5;
	context.stroke();

	context.beginPath();
	context.moveTo(220, 100);
	context.lineTo(220, 300);
	context.moveTo(220, 100);
	context.lineTo(320, 100);
	context.moveTo(220, 200);
	context.lineTo(320, 200);
	context.moveTo(220, 300);
	context.lineTo(320, 300);
	context.strokeStyle = "blue";
	context.lineWidth = 5;
	context.stroke();

	context.beginPath();
	context.moveTo(340, 100);
	context.lineTo(340, 300);
	context.moveTo(340, 100);
	context.lineTo(450, 300);
	context.moveTo(450, 300);
	context.lineTo(450, 100);
	context.strokeStyle = "green";
	context.lineWidth = 5;
	context.stroke();

	context.beginPath();
	context.moveTo(490, 100);
	context.lineTo(620, 100);
	context.moveTo(620, 100);
	context.lineTo(490, 300);
	context.moveTo(490, 300);
	context.lineTo(620, 300);
	context.strokeStyle = "orange";
	context.lineWidth = 5;
	context.stroke();

	context.beginPath();
	context.moveTo(700, 100);
	context.lineTo(650, 300);
	context.moveTo(700, 100);
	context.lineTo(750, 300);
	context.moveTo(680, 190);
	context.lineTo(720, 190);
	context.strokeStyle = "purple";
	context.lineWidth = 5;
	context.stroke();
}
