// Generative Art Design
// Lukas Scrobe
// Oct/27/2023
// Making Art 

// Globals
// This states how big the circles and squares are, as well as,
// stating the colours used to draw the shapes
let gridSpacing = 50;
let colours = ["#3FB8AF","#7FC7AF","#DAD8A7","#FF9E9D","#FF3D7F"];

function setup() {
  // This blends the colours together and calls he function
  // that draws the image
  createCanvas(2000, 2000);
  blendMode(MULTIPLY);
  drawGrid();
}

function drawGrid() {
  // This function draws,rotates, colours, decides wether it is
  //  a circle or a square, and if it should be bigger or not 
  for (let x = width*0.2; x < width*0.8; x = x + gridSpacing) {
    for (let y = height*0.2; y < height*0.8; y = y + gridSpacing) {
      stroke(colours[floor(random(colours.length))]);
      strokeWeight(5);
      push();
      let gValue = floor(random(-4,4));
      let rValue = floor(random(2));
      translate(x,y);
      rotate(radians(random(-12,12)));
      if(rValue === 0){
        square(0, 0, gridSpacing+gValue);
      }
      if(rValue === 1){
        ellipseMode(CENTER);
        circle(0,0,gridSpacing+gValue);
      }
      pop();
    }
  }
}

function keyPressed(){
  // This takes a screenshot of the canvas
  if( key === " "){
    saveCanvas("Final Image");
  }
}