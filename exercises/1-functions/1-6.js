"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();
drawCircle();
drawLines();
drawRectangle();

function drawBackground(){

    context.fillStyle="orange";
    context.rect(0,0,width,height)
    context.fill();
}

function drawCircle(){
    context.beginPath();
    context.fillStyle="white";
    context.arc(0, 0, 400, 0, Math.PI*2,0);
    context.fill();

    context.beginPath();
    context.fillStyle="white";
    context.arc(width, 0, 400, 0, Math.PI*2,0);
    context.fill();

    context.beginPath();
    context.fillStyle="white";
    context.arc(0, height, 400, 0, Math.PI*2,0);
    context.fill();

    context.beginPath();
    context.fillStyle="white";
    context.arc(width, height, 400, 0, Math.PI*2,0);
    context.fill();
}

function drawLines(){
    //midden
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(width, height);
    context.lineWidth = 15;
    context.strokeStyle = 'white';
    context.stroke();
    //rechtsboven
    context.beginPath();
    context.moveTo(100,0);
    context.lineTo(width, height-100);
    context.lineWidth = 15;
    context.strokeStyle = 'white';
    context.stroke();
    //lrechtsboven
    context.beginPath();
    context.moveTo(200,0);
    context.lineTo(width, height-200);
    context.lineWidth = 15;
    context.strokeStyle = 'white';
    context.stroke();
    //linksbeneden 
    context.beginPath();
    context.moveTo(-100,0);
    context.lineTo(width, height+100);
    context.lineWidth = 15;
    context.strokeStyle = 'white';
    context.stroke();
    //linksbeneden
    context.beginPath();
    context.moveTo(-200,0);
    context.lineTo(width, height+200);
    context.lineWidth = 15;
    context.strokeStyle = 'white';
    context.stroke();

    //midden
    context.beginPath();
    context.moveTo(0,height);
    context.lineTo(width, 0);
    context.lineWidth = 15;
    context.strokeStyle = 'white';
    context.stroke();

    //linksboven 
    context.beginPath();
    context.moveTo(0,height-100);
    context.lineTo(width-100, 0);
    context.lineWidth = 15;
    context.strokeStyle = 'white';
    context.stroke();
    //linksboven
    context.beginPath();
    context.moveTo(0,height-200);
    context.lineTo(width-200, 0);
    context.lineWidth = 15;
    context.strokeStyle = 'white';
    context.stroke();

    //rechtsbeneden 
    context.beginPath();
    context.moveTo(0,height+100);
    context.lineTo(width+100, 0);
    context.lineWidth = 15;
    context.strokeStyle = 'white';
    context.stroke();
    //rechtsbeneden
    context.beginPath();
    context.moveTo(0,height + 200);
    context.lineTo(width+200, 0);
    context.lineWidth = 15;
    context.strokeStyle = 'white';
    context.stroke();

}

function drawRectangle(){
    context.beginPath();
    context.rect(width/2,height/2,150,150);
    
    context.fillStyle="orange"
    context.fill();
    context.stroke();
}

