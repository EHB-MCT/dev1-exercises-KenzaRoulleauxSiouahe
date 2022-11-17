"use strict"

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = followMouse;

//let frameCount= 0;
let moveLeft= Utils.randomNumber(0, width/2);
let moveRight= Utils.randomNumber(width/2, width);
let moveUp=Utils.randomNumber(0, height/2);
let moveDown=Utils.randomNumber(height/2, height);

function followMouse(){
if(followMouse< width/2){
    drawLine(moveLeft,y1,moveDown,y2);
}else{
    drawLine(moveRight,y1,moveRight,y2)
}
if(followMouse<height/2){
    drawLine(x1,moveUp,x2,y2)
}else{
    drawLine(x1,moveDown,x2,y2)
}
}

drawLine(width/2,0,width/2,height);
drawLine(0,height/2,width,height/2);


function drawLine(x1,y1,x2,y2) {
    context.strokeStyle ="red";
    context.lineWidth= 10;
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}