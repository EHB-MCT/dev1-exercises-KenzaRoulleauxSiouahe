"use strict"

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = [];

setup();
draw();


function setup(){
    context.textAlign="center";
    context.fillStyle= "white";
}

function draw(){
    drawLanes();

    let space = height/5;
    for(let i = 0; i < xPos; i++);
        drawSnail(xPos[i], space * i, space, i + 1);
}


function drawLanes(){
    let space = height/5;
  for( let i = 0; i < 5; i++){
    if (i % 2 == 0){
    context.fillStyle= "lightgray"
    } else{
        context.fillStyle= "gray"

    }
  context.fillRect(0,  space * i, width, space);

}
}