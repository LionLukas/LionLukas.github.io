// Puzzle Game Starter
// Lukas Scrobe
// Nov/6/2023
// make a game where you click tiles to colour the screen
// with black or white tiles

// Globals
let grid =
  [[0, 255, 0, 255, 255],
    [255, 255, 0, 255, 255],
    [255, 255, 255, 0, 255],
    [0, 0, 0, 255, 0]];

const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth = 50;
let rectHeight = 50;
let col;
let row;

function setup() {
  createCanvas(rectWidth * NUM_COLS, rectHeight * NUM_ROWS);
}

function draw() {
  background(220);
  renderGrid();
  col = getCurrentX();
  row = getCurrentY();
  print(col,row);
}

function mousePressed() {
  if(keyIsDown(SHIFT)){
    flip(col, row);
  }
  else{
    flip(col, row);
    if (row > 0) {
      flip(col, row - 1);
    }
    if (col < NUM_COLS - 1) {
      flip(col + 1, row);
    }
    if (col > 0) {
      flip(col - 1, row);
    }
    flip(col,row+1);
  }
}

function winCondition(x,y){
  
}

function flip(x, y) {
  if (grid[y][x] === 0) {
    grid[y][x] = 255;
  }
  else {
    grid[y][x] = 0;
  }
}

function getCurrentX() {
  let constrainX = constrain(mouseX, 0, width - 1);
  return int(constrainX / rectWidth);
}

function getCurrentY() {
  let constrainY = constrain(mouseY, 0, height - 1);
  return int(constrainY / rectHeight);
}

function renderGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      let fillValue = grid[y][x];
      fill(fillValue,);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}
