let time = 0;
let wave = [];
let y = []; // input
let fourierY; //transform of y
let x = []; // input
let fourierX; //transform of y
let path = [];

function setup() {
  createCanvas(600, 400);
  for(let i = 0; i<100;i++){
    x[i] = 150 * noise(i/50);
    y[i] = 150 * noise(i/50 + 1000);
  }
  fourierY = dft(y);
  fourierX = dft(x);

}

function epiCycles(x, y, rotation, fourier) {
  for (let i = 0; i < fourier.length; i++) {
    let prevx = x;
    let prevy = y;
    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    stroke(255);
    line(prevx, prevy, x, y);
  }
  //last x and y
  return createVector(x, y);
}

function draw() {
  fill("black");
  background(0);
  let vx = epiCycles(300,100, 0, fourierX);
  let vy = epiCycles(70,200,HALF_PI, fourierY);
  let v = createVector(vx.x, vy.y);
  path.unshift(v);
  line(vx.x, vx.y, v.x, v.y);
  line(vy.x, vy.y, v.x, v.y);

  beginShape();
  noFill();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

  //fourierY.length = number of frequency values I have
  const dt = TWO_PI/ fourierY.length //the length I move each cycle
  time += dt;

  //https://georgeyu.cn/viz/fourier-transform/  
  //https://www.myfourierepicycles.com/ and https://github.com/trozler/myFourierEpicycles
  //https://contra.medium.com/drawing-anything-with-fourier-series-using-blender-and-python-c0881e1b738c
  //https://olgaritme.com/posts/drawing-with-the-fourier-series/index.html
  // SVG creator use only black and white
  // others https://caricaturer.io/  and https://imagetocartoon.com/

/*
https://twitter.com/messages/16655601-1694860814

Hey! Let's say you have a SVG file containing a single continuous <path>, you should be able to extract the coordinates with something like this:

const path = document.querySelector('path');
const length = path.getTotalLength();
const step = length / 100;
for (let i = length - 1; i >= 0; i -= step) {
    console.log(path.getPointAtLength(i)):
}
*/
}


