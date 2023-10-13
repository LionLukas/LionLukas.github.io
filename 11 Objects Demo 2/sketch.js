// Objects Demo 2
// Lukas Scrobe
// Oct/13/2023
//(spoooky) OOP recap + object on object interaction 
// + Perlin Noise

// Globals 
let points = [];
let reach = 150; // max line length

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  for (let p of points) {
    // don't know what the current index is
    p.display();
    p.move();
    p.connectPoints(points);
  }
}

function mouseClicked() {
  // triggers on a full press/release mouse interaction
  points.push(new MovingPoint(mouseX, mouseY));
}

class MovingPoint {
  // constructor(x,y,c,s)
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.s = 20;
    this.xTime = random(10);
    this.yTime = random(10);
    this.thimeShift = 0.01;
    this.maxSpeed = 5;
  }
  display() {
    fill(this.c);
    noStroke();
    let d = dist(mouseX, mouseY,this.x, this.y);
    if(d < reach){
      this.s = map(d, 0, reach, 60, 20);
    }
    else{
      this.s - 20;
    }
    circle(this.x, this.y, this.s);
  }
  connectPoints(pointArray) {
    // check if any points are nerby, if so
    // connect with a line
    stroke(this.c);
    for (let p of pointArray) {
      if (p !== this) {
        let d = dist(this.x,this.y,p.getX(),p.getY());
        if(d < reach){
          line(this.x,this.y,p.getX(),p.getY());
        }
      }
    }
  }

  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  
  move() {
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.thimeShift;
    this.x += xSpeed;
    // wrap around code
    if (this.x < 0) {
      this.x += width;
    }
    if (this.x > width) {
      this.x -= width;
    }
  }
}
