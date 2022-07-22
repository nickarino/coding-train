let time = 0;
let wave = [];
let y = []; // input
let fourierY; //transform of y
let x = []; // input
let fourierX; //transform of y


function setup() {
  createCanvas(600, 400);
  //square wave. 
  //y = [100, 100, 100, -100, -100, -100, 100, 100, 100, -100, -100, -100, 100, 100, 100, -100, -100, -100]
  let angle = 0;
  for(let i = 0; i<100;i++){
    angle = map(i,0,100,0,  TWO_PI);
    x[i] = 100 * cos(angle);
    y[i] = 100 * sin(angle);
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
  return createVector(x, y);
}


function draw() {
  fill("black");
  background(0);
  epiCycles(100,200, HALF_PI, fourierX);
  epiCycles(300,200,HALF_PI, fourierY);
  
  wave.unshift(y);

  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  //fourierY.length = number of frequency values I have
  const dt = TWO_PI/ fourierY.length //the length I move each cycle
  time += dt;

  if (wave.length > 250) {
    wave.pop();
  }
  
}


