// Generative Art Design
// Lukas Scrobe
// Oct/27/2023
// Making Art 

// Globals
let gridSpacing = 50;
let colours = ["#3FB8AF","#7FC7AF","#DAD8A7","#FF9E9D","#FF3D7F"];

function setup() {
  createCanvas(2000, 2000);
  blendMode(MULTIPLY);
  push();
  //translate(width*0.2,height*0.2);
  drawGrid();
  pop();
}

function drawGrid() {
  for (let x = width*0.2; x < width*0.8; x = x + gridSpacing) {
    for (let y = height*0.2; y < height*0.8; y = y + gridSpacing) {
      stroke(colours[Math.floor(random(colours.length))]);
      strokeWeight(5);
      square(x, y, gridSpacing);
    }
  }
}

function keyPressed(){
  if( key === " "){
    saveCanvas("Progress Image 4");
  }
}