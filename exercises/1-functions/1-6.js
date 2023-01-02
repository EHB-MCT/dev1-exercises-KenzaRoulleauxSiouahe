"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();
function drawBackground(){

    context.fillStyle="orange";
    context.rect(0,0,width,height)
    context.fill();
}
drawCircle();

function drawCircle(){
    context.beginPath();
    context.fillStyle="white";
    context.arc(0, 0, 300, 0, Math.PI,0);
    context.fill();

    context.beginPath();
    context.fillStyle="white";
    context.arc(0, height, 300, 0, Math.PI,0);
    context.fill();

    context.beginPath();
    context.fillStyle="white";
    context.arc(width, 0, 300, 0, Math.PI,0);
    context.fill();

    context.beginPath();
    context.fillStyle="white";
    context.arc(width, height, 300, 0, Math.PI,0);
    context.fill();

}



context.arc()