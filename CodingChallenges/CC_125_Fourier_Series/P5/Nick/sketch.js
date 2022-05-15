// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA
// https://editor.p5js.org/codingtrain/sketches/SJ02W1OgV

let time = 0;
let wave = []; //array
let timeWarpSpeed = 5;

let slider;

function setup() {
  createCanvas(600, 400);
  slider = createSlider(1, 10, 5);
}

function draw() {
  //set up the object properties
  background(0);
  translate(150, 200);
  stroke(255);
  noFill();


  let radius = 100;
  ellipse(0, 0, radius * 2);

  let x = radius * cos(time);
  let y = radius * sin(time);
  wave.unshift(y); //in javascript wave.push appends while wave.unshift puts it at the beginnig

  fill(255);
  ellipse(x, y, 8);
  line(0, 0, x, y)

  beginShape();
    translate(200, 0);
    line(x - 200, y, 0, wave[0]);
    noFill();
    for (let i = 0; i < wave.length; i++) {
      vertex(i, wave[i]);
    }
    if (wave.length >400){ wave.pop()}
  endShape();

  time = time + timeWarpSpeed * .01;


}
