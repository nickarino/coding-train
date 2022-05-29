// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA
// https://editor.p5js.org/codingtrain/sketches/SJ02W1OgV

let time = 0;
let wave = [];
let canvasWidth = 600;
let canvasHeight = 400;
let radius = 100;

let slider;

function setup() {
  //square canvas and slider
  createCanvas(canvasWidth, canvasHeight);
  slider = createSlider(1, 10, 5);
  background('red');
}

function draw() {


//draw a circle
beginShape();
  translate(canvasWidth/3,canvasHeight/3);
  //PI = C/d => C = Pi * d = PI * 2 * r  
  noFill();
  stroke("white");
  strokeWeight(2);
  ellipse(0, 0, 2 * radius);
  //line(0, 0, radius, 5 )
  line(0, 0, 5, radius );

  //The angle of the arc = central angle = time
  // On a unit circle, cos(theta) = adjacent/hypotenuse = adj/radius = x/1 = x.  So a circle of r radius x = r cos(theta)
  // On a unit circle sin(theta) = opposite/hypotenuse = opp/radius = y/1 = y.  So a circle of r radius y = r sin(theta)
  //normalize by radius: multiply. 
  let x = radius * cos(19);
  let y = radius * sin(19);
  line(0, 0, x, y);

  x = radius * cos(20);
  y = radius * sin(20);
  line(0, 0, x, y);

  x = radius * cos(21);
  y = radius * sin(21);
  line(0, 0, x, y);



endShape();

//draw the rotating radius with a dot at the end. 
beginShape();
  fill("white");
  //line(0, 0, radius, radius)
endShape();

}