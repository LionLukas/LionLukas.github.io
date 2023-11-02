// Art Replication Warm-Up
// Lukas Scrobe
// Oct/26/2023
// draw a wave using sin and curveVertex()

// Globals
let xValue;
let yValue;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xValue = width*0.1;
  yValue = height*0.8;
  strokeWeight(1);
  
}

function draw(){
  noLoop();
  background(220);
  translate(xValue,yValue);
  for(let y = 0; y > -450; y-=5){
    noFill();
    beginShape();
    curveVertex(x,y);
    curveVertex(x,y);
    curveVertex(x+100,y+10);
    curveVertex(x+175,y-30);
    curveVertex(x+275,y+10);
    curveVertex(x+350,y-30);
    curveVertex(x+375,y+10);
    curveVertex(x+387.5,y-30);
    curveVertex(x+393.75,y+10);
    curveVertex(x+396.875,y-30);
    curveVertex(x+396.875,y-30);
    endShape();
  }
}

function warpedSheet(){
  translate(xValue,yValue);
  for(let i = 0; i > -90; i--){
    point(x,i);
    point(x+100,i+10);
    point(x+175,i-30);
    point(x+275,i+10);
    point(x+350,i-30);
    point(x+375,i+10);
    point(x+387.5,i-30);
    point(x+393.75,i+10);
    point(x+396.875,i-30);
  }
}
