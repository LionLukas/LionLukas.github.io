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
let x;
let average;
let mountainX = 0;
// weezerBlue = (0, 182, 213)
// jazzBerry = (176, 11, 105)

function setup() {
  // Draws a background and sets up stuff for later
  createCanvas(windowWidth, windowHeight);
  background(175);
  rectMode(CORNERS);
  mountainTop = height;
}

function generateTerrain() {
  // Creates the pink hill and draws a line where the average
  // height is 
  keyPressed();
  mountainTop = 0;
  mountainX = 0;
  noiseShiftTime = noiseShiftMove;
  average=0;
  let count=0;
  for (x = 0; x < width; x += rectWidth) {
    let rectHeight = noise(noiseShiftTime);
    rectHeight = map(rectHeight,0,1,1,1000);
    noiseShiftTime += noiseShift;
    stroke(176, 11, 105);
    fill(176, 11, 105);
    rect(x, height, x + rectWidth, height - rectHeight);
    if(rectHeight > mountainTop){
      mountainTop = rectHeight;
      mountainX = x;
    }
    average+=rectHeight;
    count++;
  }
  average/=count;
  stroke(0, 182, 213);
  line(0, height-average, width, height-average);
}

function keyPressed(){
  // Lets the user control how big the width of th rectangles
  // are 
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
  // Draws a flag that appears at the top of the tallest hill
  // on screen
  strokeWeight(5);
  stroke(0, 182, 213);
  fill(0, 182, 213);
  line(x,y,x,y - 10);
  triangle(x,y - 10,x + 10,y - 15,x,y - 20);
}

function draw(){
  // Draws the functions bellow
  background(175);
  noiseShiftMove += 0.05;
  generateTerrain();
  drawFlag(mountainX,height - mountainTop);
}
