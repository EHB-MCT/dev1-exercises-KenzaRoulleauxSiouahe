"use strict"

import context from "./context.js";

export function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

export function rgb(){
    let rgb="rgb("+ r + "," + g + "," + b +")";
    return rgb; 
}
export function rgba(){
    let rgb="rgba("+ r + "," + g + "," + b + a + ")";
    return rgba; 
}
export function drawCircle (x,y,radius){    
    context.beginPath();
    context.ellipse(x,y,radius, radius, 0, 0, (Math.PI)*2)
    context.fill();
}

export function hsla (h, s, l, a){
    return "hsl("+ h + "," + s + "," + l + "," + a + ")";
    
}