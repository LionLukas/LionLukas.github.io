// Drawing with loops single and nested
// Lukas Scrobe
// Sept/25/2023
// Generating a single image with loops

let numSegments = 215;
let segmentHeight;
const GRID_SPACING = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height / numSegments;
}

function drawGrid() {
  for (let x = 0; x < width; x = x + GRID_SPACING) {
    for (let y = 0; y < height; y = y + GRID_SPACING) {
      if(dist(x,y,mouseX,mouseY)<50){
        fill(255,0,0);
      }
      else{
        fill(0);
      }
      fill(0);
      circle(x, y, 10);
    }
  }
}

function gardiant() {
  for (let i = 0; i < numSegments; i++) {
    let y = i * segmentHeight;
    let fillValue = map(y, 0, height, 0, 255);
    fill(fillValue, 255 - fillValue, fillValue);
    rect(0, y, width, segmentHeight);
  }
  stroke(0);
}

function draw() {
  gardiant();
  drawGrid();
}
