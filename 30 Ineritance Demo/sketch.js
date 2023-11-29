// Ineritance Demo
// Lukas Scrobe
// Nov/29/2023

// Globals
let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 10;i++){
    objects.push(new AnimatedObject(random(width),random(height)));
  }
  for(let i = 0; i<100;i++){
    objects.push(new CircleObj(random(width),random(height)));
  }
  for(let i = 0; i<100;i++){
    objects.push(new LineObject(random(width),random(height)));
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}

// Parent/Super class
class AnimatedObject{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 1;

  }

  move(){
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

  display(){
    strokeWeight(4);
    point(this.x,this.y);
  }
}

// Child clas
class CircleObj extends AnimatedObject{
  constructor(x,y){
    super(x,y);
    this.size = random(20,40);
  }

  display(){
    strokeWeight(2);
    circle(this.x,this.y,this.size);
  }
}

// Child class 2
class LineObject extends AnimatedObject{
  constructor(){
    super(random(width),random(height));
  }

  move(){
    super.move();
    this.x +=5;
    if(this.x>width){
      this.x = 0;
    }
    else{
      strokeWeight(2);
      line(this.x,this.y,this.x+15,this.y);
    }
  }
}