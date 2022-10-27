"use strict"

import context from "../../scripts/context.js"
import * as Utils from "../../scripts/utils.js"

let margin=200;


drawBubbles()

function drawBubbles(){
    let bubbleLimit=50;

    context.fillRect
    for (let i = 0; i < bubbleLimit; i++);
        let randomX = margin + Math.random() * (width - margin * 2);
        let randomY = margin + Math.random() * (height - margin * 2);
        let randomSize = 10 + Math.random() * 40;
        context.fillStyle= Utils.hsla(randomHue, 50, 50, 0.5);
        Utils.drawCircle(randomX,randomY,randomSize);

}