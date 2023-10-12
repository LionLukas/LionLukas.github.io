// Perlin Noise Project
// Lukas Scrobe
// Oct/4/2023
// make a hill through terrain generation using noise

// Globals
let rectWidth = 1;
let noiseShift = 0.01;
let noiseShiftTime = 12;
let noiseShiftMove = 0;
let mountainTop;
// weezerBlue = (0, 182, 213)
// jazzBerry = (176, 11, 105)

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(175);
  rectMode(CORNERS);
  mountainTop = height;
}
let x;
function generateTerrain() {
  // usses loops to draw side-by-side rectangles
  keyPressed();
  noiseShiftTime = noiseShiftMove;
  for (x = 0; x < width; x += rectWidth) {
    // All rects 100 pxls tall and Rand rect
    let rectHeight = noise(noiseShiftTime);
    rectHeight = map(rectHeight,0,1,1,500);
    noiseShiftTime += noiseShift;
    stroke(176, 11, 105);
    fill(176, 11, 105);
    rect(x, height, x + rectWidth, rectHeight);
    if(rectHeight < mountainTop){
      mountainTop = rectHeight;
      //drawFlag(x,mountainTop);
    }

  }
  //drawFlag(x,mountainTop);
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    rectWidth -= 1;
  }
  if (keyCode === RIGHT_ARROW){
    rectWidth += 1;
  }
  if (rectWidth === 0){
    rectWidth += 1;
  }
}

function drawFlag(x,y){
  strokeWeight(8);
  stroke(0, 182, 213);
  fill(0, 182, 213);
  line(x,y,x,y + 10);
  triangle(x,y,x + 5,y - 5,x - 5,y - 5);
}

function draw(){
  background(175);
  noiseShiftMove += 0.05;
  generateTerrain();
  drawFlag(x,mountainTop);
}
