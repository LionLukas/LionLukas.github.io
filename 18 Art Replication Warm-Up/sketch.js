// Art Replication Warm-Up
// Lukas Scrobe
// Oct/26/2023
// 

// Globals
let xValue;
let yValue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xValue = width*0.1;
  yValue = height*0.2;
  strokeWeight(1);
  //warpedSheet();
}

function draw(){
  noLoop();
  background(220);
  warpedSheet();
}

function warpedSheet(){
  let x = 0;
  let y = 0;
  translate(xValue,yValue);
  for(let i = 0;i<90;i++){
    curve(x+25,y+i,x,y,x+30,y-10,x+50,y-i);
    x += i;
    //y += i; 
  }
}
