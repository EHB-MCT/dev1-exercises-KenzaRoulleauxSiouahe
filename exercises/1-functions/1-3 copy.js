"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

colorBox();
function colorBox() {

//links boven groot
context.beginPath();
    context.rect(50,50,150,150)
    context.strokeStyle = 'red';
    context.stroke();

//links onder gemideld  
context.beginPath();
    context.rect(75,275,50,50)
    context.strokeStyle = 'red';
    context.stroke();

//links onder klein
context.beginPath();
    context.rect(50,325,25,25)
    context.strokeStyle = 'black';
    context.fill();
    context.stroke();

//rechts boven gemmideld
context.beginPath();
    context.rect(275,75,50,50)
    context.strokeStyle = 'red';
    context.stroke();

//rechts boven klein
context.beginPath();
    context.rect(325,50,25,25)
    context.strokeStyle = 'black';
    context.fill();
    context.stroke();

//rechts onder groot
context.beginPath();
    context.rect(200,200,150,150)
    context.strokeStyle = 'red';
    context.stroke();

//midden groot
context.beginPath();
    context.rect(125,125,150,150)
    context.strokeStyle = 'red';
    context.fill();
    context.stroke();










    
}