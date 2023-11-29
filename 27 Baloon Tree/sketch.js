// Balloon Tree
// Lukas Scrobe
// Nov/24/2023
// making a tree with balloons on the ends of the branches

// Globals 
//let scale = 15;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  drawTree(width/2, height*0.9, 90, 6);
}

function drawLine( x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale);
    let y2 = y1 - (sin(radians(angle))*depth*scale);
    drawLine(x1, y1, x2, y2, depth);
    drawTree(x2, y2, angle-18, depth-1);
    drawTree(x2, y2, angle+18, depth-1);
  }
}
