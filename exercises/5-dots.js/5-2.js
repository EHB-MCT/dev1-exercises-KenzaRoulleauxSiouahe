"use strict"

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"
 
let width = context.canvas.width;
let height = context.canvas.height;

let spacing = 10;

drawMaze();

 function drawMaze(){
    context.lineWidth= 5;

    Utils.drawLine(0, 0, spacing, spacing);

    
}
