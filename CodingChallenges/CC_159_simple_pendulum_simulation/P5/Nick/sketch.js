// browser-sync start --server -f -w ; cd Nick
// https://www.myphysicslab.com/pendulum/pendulum-en.html?collection=col10279%2F1.33
/**
 * onenote
 * https://ourdecisions-my.sharepoint.com/personal/nick_ourdecisions_com/_layouts/OneNote.aspx?id=%2Fpersonal%2Fnick_ourdecisions_com%2FDocuments%2FNotebooks%2FNickSkriloffWorld&wd=target%28MathAndScience%2FMath.one%7C69226B9C-0E35-47F3-AB9A-D5CD0B5E05E6%2FThe%20Coding%20Train%7C859B5548-888B-654A-B6B5-4C364E57BB56%2F%29
onenote:https://ourdecisions-my.sharepoint.com/personal/nick_ourdecisions_com/Documents/Notebooks/NickSkriloffWorld/MathAndScience/Math.one#The%20Coding%20Train&section-id={69226B9C-0E35-47F3-AB9A-D5CD0B5E05E6}&page-id={859B5548-888B-654A-B6B5-4C364E57BB56}&object-id={4BF645B8-CF8D-8F4B-8758-A5DA0001A52A}&1C
 */

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
    // The particular force of gravity is some constant (9.8M/s^2).  In this case we are going to make gravity one. 
    //update the velocity based on the acceleration with its rate of change. 
    //Why because whatever its velocity is, that is affected by its acceleration
    angleFromYaxisToPendulumLineVelocity += angleFromYaxisToPendulumLineAcceleration;
    //update the angle based on the velocity. Whatever actual angle is is affected by how fast it is going. 
    angleFromYaxisToPendulumLine += angleFromYaxisToPendulumLineVelocity;
    //In order to simulate slowing down, we multiply by a damper value. 
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
  
