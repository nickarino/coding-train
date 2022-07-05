// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA
// https://editor.p5js.org/codingtrain/sketches/SJ02W1OgV


/*

Links discussed in this video:
Fourier Series: https://en.wikipedia.org/wiki/Fourier_series
🔗 Purrier Series (Meow) and Making Images Speak: https://bilimneguzellan.net/en/purrier-series-meow-and-making-images-speak/
🔗 An Interactive Guide To The Fourier Transform by Better Explained: https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/

🎥 What is a Fourier Series? - Smarter Every Day 205: https://youtu.be/ds0cmAV-Yek
🎥 But what is the Fourier Transform? A visual introduction by 3Blue1Brown: https://youtu.be/spUNpyF58BY
🎥 Polar Coordinates: https://youtu.be/N633bLi_YCw
🎥 Fractal Spirograph: https://youtu.be/0dwJ-bkJwDI
*/

let time = 0; //unit = number of times it goes through "draw" method: clock speed
let wave = []; //array
let timeWarpSpeed = 5; //constant
let canvasWidth = 600; //pixels
let slider;
let xTranslate = 150; //pixels
let yTranslate = 200; //pixels
let radius = 75; // in pixels


function setup() {
  createCanvas(canvasWidth, 400);
  slider = createSlider(1, 10, 5);
  //common to all objects and can happen ONCE --does not have to be set up again. 
  stroke("white");

}

function draw() {

  //draw first circle
  beginShape();
  //set up the object properties that need to happen each time
  background("black");
  translate(xTranslate, yTranslate);
  noFill();
  //Pi = C/d = C/(2*r) => d = C/PI => r = C/(2*PI)
  //degree = PI/180
  ellipse(0, 0, radius * 2);
  endShape();

  //The angle of the arc = central angle = time
  // A unit circle cos(theta) = adjacent/hypotenuse = x/1 = x
  // A unit circl sin(theta) = opposite/hypotenuse = y/1 = y
  //normalize by radius: multiply. 

  let x = radius * cos(time);
  let y = radius * sin(time);

  wave.unshift(y); //in javascript wave.push appends while wave.unshift puts it at the beginnig

  //draw the rotating radius with a dot at the end. 
  beginShape();
  fill("white");
  //tiny 8 pixel ball at point (x,y) to better accent the circle
  ellipse(x, y, 8);
  line(0, 0, x, y); //vrom center of circle to (x,y)
  endShape();

  //draw the line from x,y to sine wave (really just a set of vertexes) 
  beginShape();
  let moveRight = 200;
  translate(moveRight, 0); //relative to the current translated shape
  line(x - moveRight, y, 0, wave[0]); //wave was unshifted so wave[0] is always latest value
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  // do not need the array to be longer than 400
  if (wave.length > 400) { wave.pop(); }
  endShape();

  time = time + timeWarpSpeed * .01;


}
