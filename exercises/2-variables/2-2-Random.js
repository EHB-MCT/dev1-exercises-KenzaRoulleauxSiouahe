"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

drawRect(50,50,450);
drawRect(80,80,390);
drawRect(110,110,330);
drawRect(140,140,270);
drawRect(170,170,210);
drawRect(200,200,150);
drawRect(230,230,90);
drawRect(260,260,30);

function drawRect(x, y, size) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb("+ r + "," + g + "," + b +")";
    
context.fillStyle = color;
context.fillRect(x, y , size, size);
}

