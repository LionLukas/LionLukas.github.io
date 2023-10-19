// CARS CARS CARS!
// Lukas Scrobe
// Oct/18/2023
// have cars drive across the screen at varying speeds and 
// colours 


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawRoad() {
  fill(82, 77, 80);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, height * 0.5, width, height * 0.6);
  for (let l = 0; l <= width; l += 25) {
    strokeWeight(2.5);
    stroke(247, 181, 0);
    line(l, height / 2, l + 15, height / 2);
  }
}

class Vehicle {
  constructor(x, y, t, d) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.d = d;
    this.colour = color(random(255), random(255), random(255));
    this.xSpeed = random(5 - 30);
    this.percentChance = 100;
  }

  display(){
    if(this.t === 1){
      fill(this.colour);
      rect(this.x,this.y,30,20,0,10,10,0);
    }
  }
}

function draw() {
  background(50);
  drawRoad();
}
