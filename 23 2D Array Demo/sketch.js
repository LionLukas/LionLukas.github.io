// Puzzle Game Starter
// Lukas Scrobe
// Nov/6/2023
// make a game where you click tiles to colour the screen
// with black or white tiles

// Globals
let grid =[];
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth = 50;
let rectHeight = 50;
let col;
let row;
let shiftSquare = 0;

function setup() {
  createCanvas(rectWidth * NUM_COLS, rectHeight * NUM_ROWS);
  randomStart();
}

function draw() {
  background(220);
  renderGrid();
  overlay();
  col = getCurrentX();
  row = getCurrentY();
  winCondition();
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
  let result = 0;
  for(let x = 0; x<5;x++){
    for(let y = 0;y<4;y++){
      if (grid[y][x] === 0){
        result += 1;
      }
      else{
        result -=1;
      }
    }
  }
  if (result === 20 || result === -20){
    for(let x = 0; x<5;x++){
      for(let y = 0;y<4;y++){
        grid[y][x] = 0;
      }
    }
    winText();
  }
}

function winText(){
  textSize(24);
  fill(176,11,105);
  text("You Win",NUM_COLS*15,NUM_ROWS*25);
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

function overlay(){
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      if(x===col && y===row && keyIsDown(SHIFT)){
        fill(0, 182, 213,100);
        rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
      }
      if (!keyIsDown(SHIFT)){
        if(x===col && y===row){
          fill(0, 182, 213,100);
          rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
          rect((x+1) * rectWidth, y * rectHeight, rectWidth, rectHeight);
          rect(x * rectWidth, (y+1) * rectHeight, rectWidth, rectHeight);
          rect((x-1) * rectWidth, y * rectHeight, rectWidth, rectHeight);
          rect(x * rectWidth, (y-1) * rectHeight, rectWidth, rectHeight);
        }
      }
      if(shiftSquare === 1){
        if(x===col && y===row && shiftSquare === 1){
          rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
          rect((x+1) * rectWidth, (y+1) * rectHeight, rectWidth, rectHeight);
          rect(x * rectWidth, (y-1) * rectHeight, rectWidth, rectHeight);
          rect((x+1) * rectWidth, y * rectHeight, rectWidth, rectHeight);
        }
      }
    }
  }
}

function randomStart(){
  for (let x = 0; x < NUM_ROWS;x++){
    let tempGrid = [];
    for (let y = 0; y < NUM_COLS;y++){
      let r = floor(random(2));
      if(r === 0){
        tempGrid.push(0);
      }
      else if (r === 1){
        tempGrid.push(255);
      }
    }
    grid.push(tempGrid);
  }   
}

function keyPressed(){
  if (key === " " && shiftSquare === 0){
    shiftSquare += 1;
  }
  else if (key === " " && shiftSquare === 1){
    shiftSquare -= 1;
  }
}