// Translations and Rotations
// Lukas Scrobe
// Oct/23/2023
//buiowwwwwwwebuio


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  translate(width/2,height/2);
  ellipse(0,0,500);
  for(let i = 0;i<360;i+=1){
    rect(0,i,2,50);
    rotate(30);
  }
}
