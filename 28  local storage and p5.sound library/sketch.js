//local storage and p5.sound library
//Lukas Scrobe
//Nov 27, 2023

//Global Variables
let ball;   let totalBounces = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width2,height2);
}

function draw() {
  textSize(30);  textAlign(CENTER);
 
  background(220);
  ball.move();   ball.display();

  text(totalBounces, width2, height2);
}

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-6,6), random(-6,6));
  }
  display(){
    circle(this.pos.x, this.pos.y, 30);
  }
  move(){
    this.pos.add(this.vel);
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x = -1;
      totalBounces++;
    }
    if(this.pos.y0this.pos.yheight){
      this.vel.y = -1;
      totalBounces++;
    }
  }
}