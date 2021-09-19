// Simple Pendulum Simulation
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/159-simple-pendulum-simulation.html
// https://youtu.be/NBWMtlbbOag
// https://editor.p5js.org/codingtrain/sketches/SN-39sHAC

float angle; //relative to the y axis

float angleV = 0;
float angleA = 0.001;

PVector bob;
float len;
PVector origin;

float gravity = 1;

void setup() {
  size(600, 800);  
  origin = new PVector(300, 0);
  angle = PI/4;
  bob = new PVector();
  len = 200;
}

void draw() {
  background(0); //black
  
  //angle = angle + PI/360;
  float force = gravity * sin(angle);
  
  angleA = (-1 * force) / len;
  
  //Newton's law says F=MA and we assume the M=1 of the Bob
  angleV += angleA;
  angle += angleV;
  
  //damper
  angleV *= 0.999;
  
  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;
  
  stroke(255); //white
  strokeWeight(8); //thickness
  fill(127); 
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
  
  //line(300,0,300,200);
  //circle(300,200,64);
}
