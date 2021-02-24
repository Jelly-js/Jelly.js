// jelly.js - v0.1.3 \\
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function fill() {
  ctx.fill();
}

function fillStyle(r, b, g, a) {
  ctx.fillStyle = `rgba(${r}, ${b}, ${g}, ${a})`; 
}

function spawnTri (x,y, x1, y1, x2, y2, x3, y3) {
  fillStyle(randomInt(0, 255),randomInt(0, 255),randomInt(0, 255),randomDec(0.5,1,1));
  ctx.beginPath();ctx.moveTo(randomInt(0, 360),randomInt(0, 360));
  ctx.lineTo(randomInt(0, 480),randomInt(0, 360));
  ctx.lineTo(randomInt(0, 480),randomInt(0, 360));
  fill();}

function rect(x, y, w, h) {
  ctx.fillRect(x,y,w,h);
}

function line(x1, y1, x2, y2,) {
  // WIP
  ctx.beginPath();       // Start a new path
  ctx.moveTo(30, 50);    // Move the pen to (30, 50)
  ctx.lineTo(150, 100);  // Draw a line to (150, 100)
  ctx.stroke();          // Render the path
}

/*************************************/
// imported my simple mouse click listener
window.addEventListener('mousedown', e => {
  var mouseUp = false;
  var mouseDown = true;
  console.log("mouse is down");
});

window.addEventListener('mouseup', e => {
  var mouseUp = true;
  var mouseDown = false;
  console.log("mouse is up");
});

window.addEventListener('mousemove', function (e) {
    var mouseMoving = true;
    var mouseX = e.x;
    var mouseY = e.y;
    console.log(`mouseX: ${mouseX} | mouseY: ${mouseY}`);
});

/****************************************/
// keys pressed \\
document.addEventListener('keydown', function(e) {
// Arrow keys \\
  if (e.code === 'ArrowLeft') {
    console.log('left          | key pressed');
    var arrowLeft = true;
  } else {
    var arrowLeft = false;
  }

  if (e.code === 'ArrowUp') {
    console.log('up            | key pressed');
    var arrowUp = true;
  } else {
    var arrowUp = false;
  } 
  
  if (e.code === 'ArrowRight') {
    console.log('right         | key pressed');
    var arrowRight = true;
  } else {
    var arrowRight = false;
  }

  if (e.code === 'ArrowDown') {
    console.log('down          | key pressed');
    var arrowDown = true;
  } else {
    var arrowDown = false;
  }
  //contol right\\
  if (e.code === 'ControlRight') {
    console.log('controlRight  | key pressed');
    var controlRight = true;
  } else {
    var controlRight = false;
  }
  //alt right\\
  if (e.code === 'AltRight') {
    console.log('altRight      | key pressed');
    var altRight = true;        
  } else {                          
    var altRight = false;
  }  
  //space key\\
  if (e.code === 'Space') {
    console.log('space         | key pressed');
    var space = true;
  } else {
    var space = false;
  }  
});
  
//////////////////////////////////////////
function main() {
  spawnTri();
}
/* 
use update function for any kind of animation with 
the code you want to run in the main() function. 
*/
function update() {
  main();
  requestAnimationFrame(update);
}
update();

//////////////////////////////////////////////////
/////////////////random int and dec /////////////

function randomDec(min,max,places) {
  var r=Math.random()*(max-min)+min;
  var power=Math.pow(10,places);
  return Math.floor(r*power)/power;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


/////////////////////////// CODE ARCHIVE DON'T DELETE /////////////////////////////
/* 
random fillstyle:  fillStyle(randomInt(0, 255),randomInt(0, 255),randomInt(0, 255),randomDec(0.5,1,1));
 */


/* random triangle filler this code must be in Tri which is inside of main() 
  
  fillStyle(randomInt(0, 255),randomInt(0, 255),randomInt(0, 255),randomDec(0.5,1,1));
  ctx.beginPath();ctx.moveTo(randomInt(0, 360),randomInt(0, 360));
  ctx.lineTo(randomInt(0, 480),randomInt(0, 360));
  ctx.lineTo(randomInt(0, 480),randomInt(0, 360));
  fill();}

*/
/////////////////////////////////////////////////////////////////////////////
