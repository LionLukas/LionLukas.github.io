// Perlin Noise Project
// Lukas Scrobe
// Oct/4/2023
// make a hill through terrain generation using noise

// Globals
let rectWidth = 3;
let noiseShift = 0.001;
let noiseShiftTime = 7;
// weezerBlue = (0, 182, 213)
// jazzBerry = (176, 11, 105)

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(175);
  rectMode(CORNERS);
  generateTerrain();
}

function generateTerrain() {
  // usses loops to draw side-by-side rectangles
  for (let x = 0; x < width; x += rectWidth) {
    // All rects 100 pxls tall and Rand rect
    let rectHeight = noise(noiseShiftTime);
    rectHeight = map(rectHeight,0,1,1,500);
    noiseShiftTime += noiseShift;
    stroke(176, 11, 105);
    fill(176, 11, 105);
    rect(x, height, x + rectWidth, rectHeight);
  }
}

function keyPressed(){
  background(175);
  generateTerrain();
}