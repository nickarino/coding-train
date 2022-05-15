// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA
// https://editor.p5js.org/codingtrain/sketches/SJ02W1OgV

let time = 0;
let wave = []; //array
let timeWarpSpeed = 5;
let canvasWidth = 600;
let slider;
let xTranslate = 150;
let yTranslate = 200;


function setup() {
  createCanvas(canvasWidth, 400);
  slider = createSlider(1, 10, 5);
}

function draw() {
  //set up the object properties
  background(0);
  translate(xTranslate, yTranslate);
  stroke("white");
  noFill();


  let radius = xTranslate -50; //a little distance from left edge
  ellipse(0, 0, radius * 2);

  //The angle of the arc = central angle = time
  // A unit circle cos(theta) = adjacent/hypotenuse = x/1 = x
  // A unit circl sin(theta) = opposite/hypotenuse = y/1 = y
  //normalize by radius: multiply. 
  let x = radius * cos(time);
  let y = radius * sin(time);
  wave.unshift(y); //in javascript wave.push appends while wave.unshift puts it at the beginnig

  fill("white");
  ellipse(x, y, 8);
  line(0, 0, x, y)

  beginShape();
    let moveRight = 200;
    translate(moveRight, 0);
    line(x - moveRight, y, 0, wave[0]);
    noFill();
    for (let i = 0; i < wave.length; i++) {
      vertex(i, wave[i]);
    }
    // do not need the array to belonger than 
    if (wave.length > 400) { wave.pop(); }
  endShape();

  time = time + timeWarpSpeed * .01;


}
