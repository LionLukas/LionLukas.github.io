// Multi-Coloured Grid
// Lukas Scrobe
// Sept/26/2023
// a random mosaic changing on key press

let gridSpacing = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
  drawGrid();
}

function drawGrid() {
  for (let x = 0; x < width; x = x + gridSpacing) {
    for (let y = 0; y < height; y = y + gridSpacing) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      square(x, y, gridSpacing);
    }
  }
}

function keyPressed() {
  drawGrid();
  mouseisPressed();
}

function mouseisPressed(){
  if(gridSpacing === 0){
    gridSpacing + 2;
  }
  if(mouseButton === LEFT){
    gridSpacing = gridSpacing - 2;
  }
  if(mouseButton === RIGHT){
    gridSpacing = gridSpacing + 2;
  }
}

function draw() {
}
