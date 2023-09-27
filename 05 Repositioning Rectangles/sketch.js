// Repositioning Rectangles
// Lukas Scrobe
// sept/27/2023
// simple GUI creation / Gemoetry practice

//glbl
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let mouseOver = false;
let pickedUp = false;
let xOff, yOff;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width / 2, y = height / 2;
  rWidth = 200, rHeight = 100;
}

function updateEdgePositions() {
  rLeft = x - rWidth / 2; rRight = x + rWidth / 2; rTop = y - rHeight / 2; rBottom = y + rHeight / 2;
}

function drawRectangle() {
  updateEdgePositions();
  if (mouseX > rLeft && mouseX < rRight && mouseY > rTop && mouseY < rBottom) {
    mouseOver = true;
    fill(170, 100, 50);
  }
  else {
    fill(35, 70, 125);
    mouseOver = false;
  }
  if (pickedUp){
    x = mouseX + xOff;
    y = mouseY + yOff;
  }
  rect(x, y, rWidth, rHeight);
}

function mousePressed(){
  if (mouseOver){
    pickedUp = true;
    xOff = x - mouseX;
    yOff = y - mouseY;
  }
}

function mouseReleased(){
  pickedUp = false;
}

function draw() {
  background(220);
  drawRectangle();
}
