// CARS CARS CARS!
// Lukas Scrobe
// Oct/18/2023
// have cars drive across the screen at varying speeds and 
// colours 

// Globals
let myVehicle;
let garage = [];

function setup() {
  // this function creates the background and calls the 
  // makeCar function
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  makeCar();
}

function draw() {
  // this function draws the background, the road, and the cars
  background(50);
  drawRoad();
  for (let g of garage) {
    g.action();
  }
}

function makeCar() {
  // this function puts cars in a variable to be displayed
  for (let i = 0; i < 20; i++) {
    myVehicle = new Vehicle(Math.floor(random(width)), Math.floor(random(0, 2)), Math.floor(random(0, 2)));
    append(garage, myVehicle);
  }
}

function drawRoad() {
  // this function draws the road that the cars are driving on
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
  constructor(x, t, d) {
    // this function defines variables that are mostly used
    // inside of the function
    this.x = x;
    this.t = t;
    this.d = d;
    this.colour = color(random(255), random(255), random(255));
    this.xSpeed = 5;
    this.percentChance = random(100);
    if (this.d === 0) {
      this.y = random(height * 0.55, height * 0.78);
    }
    if (this.d === 1) {
      this.y = random(height * 0.25, height * 0.4);
    }
  }

  display() {
    // this function makes and colours the cars at the top
    // or bottom of the screen
    strokeWeight(1);
    stroke(247, 181, 0);
    push();
    translate(this.x, this.y);
    if (this.d === 1) {
      rotate(radians(180));
    }
    if (this.t === 0) {
      fill("Black");
      rect(0 - 10, 0, 8, 35);
      rect(0 + 5, 0, 8, 35);
      fill(this.colour);
      rect(0, 0, 30, 20, 0, 10, 10, 0);
    }
    else if (this.t === 1) {
      fill("Black");
      rect(0, 0, 30, 50);
      fill(this.colour);
      rect(0, 0, 30, 25);
      rect(0 + 10, 0, 50, 10);
    }
    pop();
  }

  move() {
    // this function makes the car move:
    // left to right if the car is on the bottom of the screen
    // and right to left if the car is on the top of the screen
    if (this.d === 0) {
      this.x += this.xSpeed;
      if (this.x > width) {
        this.x = 0;
      }
    }
    else if (this.d === 1) {
      this.x -= this.xSpeed;
      if (this.x < 0) {
        this.x += width;
      }
    }
  }

  speedUp() {
    // this function makes the car speed up
    this.x += random(15);
  }

  speedDown() {
    // this function makes the car slow down
    this.x -= random(15);
  }

  changeColour() {
    // this function changes the colour of the car while it is 
    // on screen
    this.colour;
  }

  action() {
    // this function calls the previous functions so that they 
    // can all be displayed on the screen
    this.display();
    this.move();
    if (1 === Math.floor(this.percentChance)) {
      this.speedUp();
    }
    if (2 === Math.floor(this.percentChance)) {
      this.speedDown();
    }
    if (3 === Math.floor(this.percentChance)) {
      this.changeColour();
    }
  }
}
