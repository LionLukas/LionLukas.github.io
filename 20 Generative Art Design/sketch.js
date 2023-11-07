// Generative Art Design
// Lukas Scrobe
// Oct/27/2023
// Making Art 

// Globals
let gridSpacing = 50;

function setup() {
  createCanvas(2000, 2000);
  push();
  //translate(width*0.2,height*0.2);
  drawGrid();
  pop();
}

function drawGrid() {
  for (let x = width*0.2; x < width*0.8; x = x + gridSpacing) {
    for (let y = height*0.2; y < height*0.8; y = y + gridSpacing) {
      stroke(0);
      strokeWeight(5);
      square(x, y, gridSpacing);
    }
  }
}

function keyPressed(){
  if( key === " "){
    saveCanvas("Progress Image 1");
  }
}