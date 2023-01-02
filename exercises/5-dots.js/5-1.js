"use strict"

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"
 
let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();
drawDots();


function drawBackground(){
    context.fillStyle= "black";
    context.fillRect(0, 0, width, height);
}
function drawDots(){

    for(let i = 0;i < 10000;i++){
        let y = Math.random()*height;
        if (y < height / 3 ){
            context.fillStyle= 'blue';
        } else if (y > (height /3)*2)
        {context.fillStyle= 'red'

        } else{
            context.fillStyle= 'white';
        }
        
            
        Utils.fillCircle(Math.random()*width, y,2);
    }
}
