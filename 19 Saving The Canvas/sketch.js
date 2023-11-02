// Saving The Canvas
// Lukas Scrobe
// Oct/27/2023
// saving the canvas as a png,
// maybe a little bit about resizing the canvas 

function setup() {
  createCanvas(2000,2000);
  background(0);
  art();
}


function art(){
  // gonna make a brilliant work of art
  noFill();
  stroke(255);
  rectMode(CENTER);
  strokeWeight(10);
  for(let d = 300; d < 1400; d += 50){
    square(width/2,height/2,d);
  }
}

function keyPressed(){
  if( key === " "){
    saveCanvas("CS30 Image");
  }
}