// Loading from Files
// Lukas Scrobe
// Nov/28/2023
// Load strings and split() method as well as spread syntax

// Globals
// let textFile;
let grid;
let img;
let rows;
let cols;
let colourMap;

function preload(){
  // textFile = loadStrings("assets/info.txt");
  //img = loadStrings("assets/image.txt");
  img = loadStrings("assets/colorimage.txt");
}

function setup() {
  cols = img[0].length;
  rows = img.length;
  createCanvas(windowWidth, windowHeight);
  // processText();
  grid = [];
  for(let i = 0;i<rows;i++){
    grid.push([...img[i]]);
  }
  colourMap = new Map([
    ["b", "black"],
    ["w","white"],
    ["r","sienna"],
    ["l","peru"],
    ["p", color(150,150,255)]
  ]);
}

function draw() {
  renderGrid();
}

function renderGrid(){
  let cellWidth = width/cols;
  let cellHeight = height/rows;
  for(let x = 0;x<cols;x++){
    for(let y = 0;y<rows;y++){
      let currentKey = grid[y][x];
      fill(colourMap.get(currentKey));
      rect(x*cellWidth,y*cellHeight,cellWidth,cellHeight);
    }
  }
}

function windowResized(){
  createCanvas(windowWidth,windowHeight);
}

//function processText(){
//  print("SPLIT INTO WORDS");
//  let splitWords = textFile[0].split("");
//  print(splitWords);
//  //
//  print("SPLIT INTO CHARACTERS");
//  let splitChars = textFile[1].split("");
//  print(splitChars);
//  // 
//  print("SPREAD INTO CHARS");
//  let spreadChars = [...textFile[2]];
//  print(spreadChars);
//}