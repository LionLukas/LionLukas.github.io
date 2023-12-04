// Balloon Tree
// Lukas Scrobe
// Nov/24/2023
// making a tree with balloons on the ends of the branches

// Globals 
let treeScale = 15;

function setup() {
  // This function creates the canvas
  createCanvas(500, 500);
}

function draw() {
  // This function draws the tree
  background(255);
  randomSeed(99);
  drawTree(width/2, height*0.9, 90, 7);
}

function drawLine( x1, y1, x2, y2) {
  // This function draws the trunk 
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  // This function draws the branches
  // and the leaves on the branches
  let depthValue = depth;
  if(depth < 5){
    drawLeaf(x1,y1,random(25)-(depthValue-depth));
  }
  if (depth > 0) {
    let offset = map(mouseX,0,width,0,25);
    let x2 = x1 + cos(radians(angle))*depth*treeScale;
    let y2 = y1 - sin(radians(angle))*depth*treeScale;
    strokeWeight(depth-1);
    drawLine(x1, y1, x2, y2);
    drawTree(x2, y2, angle, depth-1);
    drawTree(x2, y2, angle-offset, depth-1);
    drawTree(x2, y2, angle+offset, depth-1);
  }
}

function drawLeaf(x1,y1,size){
  // This function draws the leaves
  strokeWeight(1);
  fill(random(255),random(255),random(255));
  circle(x1,y1,size);
}