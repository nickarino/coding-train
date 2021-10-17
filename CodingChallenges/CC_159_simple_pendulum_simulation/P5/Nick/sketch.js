// browser-sync start --server -f -w
// cd Nick

/// <reference path="global.d.ts" />

// https://youtu.be/NBWMtlbbOag?t=233
let angleFromYaxisToPendulumLine;
let pendulumBobCenterPoint;
let pendulumBobRadius;
let pendulumOriginPointOnXaxis;
let pendulumLen;
let angleFromYaxisToPendulumLineVelocity = 0;
let angleFromYaxisToPendulumLineAcceleration = 0.000;
let gravity;
let damperValue;

function setup() {
    createCanvas(600, 400);
    background('black');
    stroke('blue');
    strokeWeight(4);

    angleFromYaxisToPendulumLine  = PI/4;
    pendulumOriginPointOnXaxis = createVector(300,0);
    pendulumBobCenterPoint = createVector();
    pendulumLen = 200;
    pendulumBobRadius = 50;
    gravity =1; //for argument sake
    damperValue = .995;

  }
  
  function draw() {
    //if we do not do this then it would sweep out the stroke color
    background('black');

    //want the angle to fluctuate between PI/4 and -PI/4
    //start on Angular velocity at https://youtu.be/NBWMtlbbOag?t=404
    //F=MA and for argument sake, M=1
    //used for simple rotation angleFromYaxisToPendulumLine += .01;
    //The longer the arm length the less the angle needs to change to travel a certain distance
    let forceOfPendulum = gravity * sin(angleFromYaxisToPendulumLine); 
    angleFromYaxisToPendulumLineAcceleration = (-1 * forceOfPendulum)/pendulumLen; //M = 1. so, Acceleration = Force
    //update the velocity based on the acceleration with its rate of change. 
    angleFromYaxisToPendulumLineVelocity += angleFromYaxisToPendulumLineAcceleration;
    //update the angle based on the velocity
    angleFromYaxisToPendulumLine += angleFromYaxisToPendulumLineVelocity;
     
    angleFromYaxisToPendulumLineVelocity *= damperValue;

    //sin(angleFromYaxisToPendulumLine) = x/pendulumLen; and you must add from the origin because angle is from (0,0) origin
    pendulumBobCenterPoint.x = pendulumLen * sin(angleFromYaxisToPendulumLine) + pendulumOriginPointOnXaxis.x;
    pendulumBobCenterPoint.y = pendulumLen * cos(angleFromYaxisToPendulumLine) + pendulumOriginPointOnXaxis.y;
    //line info
    line(pendulumOriginPointOnXaxis.x, pendulumOriginPointOnXaxis.y, pendulumBobCenterPoint.x, pendulumBobCenterPoint.y);   
    circle(pendulumBobCenterPoint.x, pendulumBobCenterPoint.y, pendulumBobRadius);
    // console.log('x is ' + mouseX);
    // console.log('y is '+ mouseY);
 
  }
  
