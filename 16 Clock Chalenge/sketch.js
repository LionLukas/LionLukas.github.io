// Translations and Rotations
// Lukas Scrobe
// Oct/23/2023
//buiowwwwwwwebuio


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  rectMode(RADIUS);
}

function draw() {
  background(220);
  ellipse(width/2,height/2,300);
  for(let i = 0;i<360;i+=60){
    rect(460,i,2,50);
    rotate(5);
  }
}
