"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;

drawLines();


function drawLines(){
    context.moveTo(margin,50);
    context.lineTo(width-margin, 50);
    context.stroke();

    context.moveTo(width-margin,50);
    context.lineTo(margin,100);
    context.stroke();

    context.moveTo(margin,100);
    context.lineTo(width-margin, 100);
    context.stroke();

    context.moveTo(width-margin,100);
    context.lineTo(margin, 150);
    context.stroke();

    context.moveTo(margin,150);
    context.lineTo(width-margin, 150);
    context.stroke();

    context.moveTo(width-margin,150);
    context.lineTo(margin, 200);
    context.stroke();

    context.moveTo(margin,200);
    context.lineTo(width-margin, 200);
    context.stroke();
    
    context.moveTo(width-margin,200);
    context.lineTo(margin, 250);
    context.stroke();

    context.moveTo(margin,250);
    context.lineTo(width-margin, 250);
    context.stroke();

    context.moveTo(margin,50);
    context.lineTo(width-margin, 250);
    context.stroke();
}

