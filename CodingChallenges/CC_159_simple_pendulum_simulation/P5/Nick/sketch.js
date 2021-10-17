//browser-sync start --server -f -w
/// <reference path="global.d.ts" />

// https://youtu.be/NBWMtlbbOag?t=233
let angleFromYaxisToPendulumLine;
let pendulumBobCenterPoint;
let pendulumBobRadius;
let pendulumOriginPoint;
let pendulumLen;
let angleV = 0;
let angleA = 0.0;

function setup() {
    createCanvas(600, 400);
    background('black');
    stroke('blue');
    strokeWeight(4);

    angleFromYaxisToPendulumLine  = PI/4;
    pendulumOriginPoint = createVector(300,0);
    pendulumBobCenterPoint = createVector();
    pendulumLen = 200;
    pendulumBobRadius = 50;

  }
  
  function draw() {
    //if we do not do this then it would sweep out the stroke color
    background('black');

    //want the angle to fluctuate between PI/4 and -PI/4
    //start on Angular velocity at https://youtu.be/NBWMtlbbOag?t=404
    angleFromYaxisToPendulumLine += .01;
    //sin(angleFromYaxisToPendulumLine) = x/pendulumLen; and you must add from the origin because angle is from (0,0) origin
    pendulumBobCenterPoint.x = pendulumLen * sin(angleFromYaxisToPendulumLine) + pendulumOriginPoint.x;
    pendulumBobCenterPoint.y = pendulumLen * cos(angleFromYaxisToPendulumLine) + pendulumOriginPoint.y;
    //line info
    line(pendulumOriginPoint.x, pendulumOriginPoint.y, pendulumBobCenterPoint.x, pendulumBobCenterPoint.y);   
    circle(pendulumBobCenterPoint.x, pendulumBobCenterPoint.y, pendulumBobRadius);
    // console.log('x is ' + mouseX);
    // console.log('y is '+ mouseY);
 
  }
  
