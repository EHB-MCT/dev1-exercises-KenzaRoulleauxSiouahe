"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;
drawbars();

function drawbars() {
    context.fillStyle= "rgba(234,158,36,255)";
    context.fillRect(0, 0, width, height/4);
    context.fillStyle = "rgba(252,112,27,255)";
    context.fillRect(0, height /4, width,height /4);
    context.fillStyle = "rgba(165,31,2,255)";
    context.fillRect(0, 2 * height /4, width,height /4);
    
    //draw sun behind the sea
    drawSun();

    context.fillStyle = "rgba(0,25,140,255)";
    context.fillRect(0, 3 * height / 4, width, height /4);
}


function drawSun(){
    context.fillStyle = "yellow";
    context.ellipse(width/2, 3 * height/4, width/4, width/4, 0, Math.PI,0);
    context.fill();
}

window.onresize = drawbars;