// jelly.js - v0.2.0 \\
// global vars \\ 
const canvas = document.createElement("CANVAS");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
var canvasId;
canvas.id=canvasId;
canvas.width = 480;
canvas.height = 360;
// canvas styling (can be changed by use in main.js) \\ 
canvas.style.border="3px solid black";
function canvasColor(r, g, b, a){canvas.style.background=`rgba(${r},${g},${b},${a})`;}
function fillEllipse(x,y,radX,radY,rot,startAngle,endAngle,anticlockwise){
  ctx.beginPath();
  ctx.ellipse(x, y, radX, radY, rot, startAngle, endAngle,anticlockwise);
  fill();}
function strokeEllipse(x,y,radX,radY,rot,startAngle,endAngle) {
  beginPath();
  ctx.ellipse(x, y, radX, radY, rot, startAngle, endAngle);
  stroke();}
function strokeWeight(i){ctx.lineWidth = i;}
function beginPath(){ctx.beginPath();}
function stroke(){ctx.stroke();}
function strokeStyle(_r, _g, _b, _a){ctx.strokeStyle=`rgba(${_r}, ${_g}, ${_b}, ${_a})`;}
function fill(){ctx.fill();}
function fillStyle(r, g, b, a){ctx.fillStyle=`rgba(${r}, ${g}, ${b}, ${a})`;}
function strokeTri (x1, y1, x2, y2, x3, y3,) {
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.lineTo(x3,y3);
  ctx.lineTo(x1,y1);
  stroke();}
function fillTri(x1, y1, x2, y2, x3, y3,) {
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.lineTo(x3,y3);
  fill();}
function fillRect(x, y, w, h){ctx.fillRect(x,y,w,h);}
function strokeRect(x, y, w, h){ctx.strokeRect(x,y,w,h);}
function line(x1, y1, x2, y2,) {
  ctx.beginPath();       // Start a new path\\
  ctx.moveTo(x1, y1);    // Move the pen to (x1, y1)\\
  ctx.lineTo(x2, y2);  // Draw a line to (x2, y2)\\
  ctx.stroke();          // Render the path\\
}
// imported my simple mouse click and move listener\\
window.addEventListener('mousedown', e => {var mouseUp = false;mouseDown=true;/*log("mouse is down");*/});
window.addEventListener('mouseup', e => {var mouseUp = true;mouseDown=false;/*log("mouse is up");*/});
//random decimal\\
function randomDec(min,max,places) {
  var r=Math.random()*(max-min)+min;
  var power=Math.pow(10,places);
  return Math.floor(r*power)/power;
}
function randomInt(min, max) {return Math.floor(Math.random() * (max - min)) + min;}
function log(txt){console.log(txt);}

