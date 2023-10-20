// CARS CARS CARS!
// Lukas Scrobe
// Oct/18/2023
// have cars drive across the screen at varying speeds and 
// colours 

// Globals
let myVehicle;
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  myVehicle = new Vehicle(0,height/2,Math.floor(random(0,2)),Math.floor(random(0,2)));
}

function draw() {
  background(50);
  drawRoad();
  myVehicle.action();
  //print(myVehicle.x);
}

function drawRoad() {
  fill(82, 77, 80);
  noStroke();
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
    this.xSpeed = 5;
    this.percentChance = 100;
  }

  display() {
    strokeWeight(1);
    stroke(247, 181, 0);
    if (this.t === 0) {
      fill("Black");
      rect(this.x - 10, this.y, 8, 35);
      rect(this.x + 5, this.y, 8, 35);
      fill(this.colour);
      rect(this.x, this.y, 30, 20, 0, 10, 10, 0);
    }
    else if (this.t === 1) {
      fill("Black");
      rect(this.x, this.y, 30, 50);
      fill(this.colour);
      rect(this.x, this.y, 30, 25);
      rect(this.x + 10, this.y, 50, 10);

    }
  }

  move() {
    this.x += this.xSpeed;
  }

  speedUp(){

  }

  speedDown(){

  }

  changeColour(){

  }

  action(){
    this.display();
    this.move();
  }

}
