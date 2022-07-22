let time = 0;
let wave = [];
let y = []; // my square wave
let fourierY; //transform of y

function setup() {
  createCanvas(600, 400);
  //square wave. 
  y = [100, 100, 100, -100, -100, -100, 100, 100, 100, -100, -100, -100, 100, 100, 100, -100, -100, -100]
  fourierY = dft(y);
}

function draw() {
  fill("black");
  background(0);
  translate(150, 200);

  let x = 0;
  let y = 0;

  //https://youtu.be/MY4luNgGfms?t=454
  for (let i = 0; i < fourierY.length; i++) {
    let prevx = x;
    let prevy = y;

    //https://youtu.be/MY4luNgGfms?t=1481
    let freq = fourierY[i].freq;  //time it takes to do one rotation around
    let radius = fourierY[i].amp; //radius is the amplitude
    let phase = fourierY[i].phase; //offset from origin
    x += radius * cos(freq * time + phase);
    y += radius * sin(freq * time + phase);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius *2);
    stroke(255);
    line(prevx, prevy, x, y);
  }
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


