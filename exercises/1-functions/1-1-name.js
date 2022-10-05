"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();
function drawName() {
    context.beginPath();
    context.moveTo(10,10);
    context.lineTo(10, 100);
    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.stroke();

    context.beginPath();
    context.moveTo(10,55);
    context.lineTo(55,10);
    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.stroke();

    context.beginPath();
    context.moveTo(10,55);
    context.lineTo(55,100);
    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.stroke();

    context.beginPath();
    context.moveTo(65,10);
    context.lineTo(65,100);
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.stroke();

    context.beginPath();
    context.moveTo(65,10);
    context.lineTo(115,10);
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.stroke();

    context.beginPath();
    context.moveTo(65,50);
    context.lineTo(115, 50);
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.stroke();

    context.beginPath();
    context.moveTo(65,100);
    context.lineTo(115, 100);
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.stroke();

    context.beginPath();
    context.moveTo(130,10);
    context.lineTo(130, 100);
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.stroke();

    context.beginPath();
    context.moveTo(130,10);
    context.lineTo(170, 100);
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.stroke();

    context.beginPath();
    context.moveTo(170,10);
    context.lineTo(170, 100);
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.stroke();

    context.beginPath();
    context.moveTo(185,10);
    context.lineTo(250,10);
    context.lineWidth = 5;
    context.strokeStyle = 'pink';
    context.stroke();

    context.beginPath();
    context.moveTo(185,10);
    context.lineTo(250,10);
    context.lineWidth = 5;
    context.strokeStyle = 'pink';
    context.stroke();

    context.beginPath();
    context.moveTo(250,10);
    context.lineTo(185,100);
    context.lineWidth = 5;
    context.strokeStyle = 'pink';
    context.stroke();

    context.beginPath();
    context.moveTo(185,100);
    context.lineTo(250,100);
    context.lineWidth = 5;
    context.strokeStyle = 'pink';
    context.stroke();

    context.beginPath();
    context.moveTo(310,10);
    context.lineTo(270,100);
    context.lineWidth = 5;
    context.strokeStyle = 'purple';
    context.stroke();

    context.beginPath();
    context.moveTo(310,10);
    context.lineTo(350,100);
    context.lineWidth = 5;
    context.strokeStyle = 'purple';
    context.stroke();

    context.beginPath();
    context.moveTo(290,50);
    context.lineTo(330,50);
    context.lineWidth = 5;
    context.strokeStyle = 'purple';
    context.stroke();
}