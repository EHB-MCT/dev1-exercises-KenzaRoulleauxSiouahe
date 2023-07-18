"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

drawRect();
function drawRect(){

    context.fillStyle="orange";
    context.rect(0,0,width,height)
    context.fill();
}

drawCircle();
function drawCircle(){
    context.beginPath();
    context.fillStyle="yellow";
    context.arc(width/2 , 2*(height/3), 200, 0, (Math.PI)*2, 0);
    context.fill();
}
drawRect2();
function drawRect2(){
    context.beginPath();
    context.fillStyle="blue";
    context.rect(0, 2*(height/3), width, 3*(height/3));
    context.fill();
}