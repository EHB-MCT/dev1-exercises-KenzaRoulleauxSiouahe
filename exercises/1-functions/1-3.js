"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

colorBox();
function colorBox() {
context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50, 200);
    context.moveTo(50,50);
    context.lineTo(200, 50);
    context.moveTo(200,50);
    context.lineTo(200, 200);
    context.moveTo(50,200);
    context.lineTo(200, 200);
    context.strokeStyle = 'red';
    context.stroke();

    context.beginPath();
    context.moveTo(125,125);
    context.lineTo(125, 275);
    context.moveTo(125,125);
    context.lineTo(275, 125);
    context.moveTo(125,275);
    context.lineTo(275, 275);
    context.moveTo(275,125);
    context.lineTo(275, 275);
    
   
    context.fill();
    context.strokeStyle = 'red';
    context.stroke();
    
}