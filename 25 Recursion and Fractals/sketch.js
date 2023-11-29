// Recursion and Fractals
// Lukas Scrobe
// Nov/22/2023
// ?

// Globals
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  seed = random(100);
}

function draw() {
  background(220);
  randomSeed(seed);
  circleInCircle(width/2,height/2,width);
  cantor(width*0.1,height*0.3,width*0.8,10);
  circleFractal(width/2,height/2,height/2);
  squareFractal(width/2,height/2,width/2);
}

function squareFractal(x,y,len){
  rectMode(CENTER);
  if(len>10){
    push();
    translate(x,y);
    rotate(radians(frameCount));
    square(x,y,len);
    fill(random(255),random(255),random(255));
    squareFractal(x-len/2,y-len/2,len/2);
    squareFractal(x+len/2,y-len/2,len/2);
    squareFractal(x-len/2,y+len/2,len/2);
    squareFractal(x+len/2,y+len/2,len/2);
    pop();
  }
} 

function cantor(x,y,len,depth){
  if(depth>0){
    push();
    translate(x,y);
    rotate(radians(frameCount));
    line(x,y,x+len,y);
    let newY = y+20;
    cantor(x,newY,len/3,depth-1);
    cantor(x+len*(2/3),newY,len/3,depth-1);
    pop();
  }
}

function circleFractal(x,y,d){
  if(d>10){
    push();
    translate(x,y);
    rotate(radians(frameCount));
    fill(random(255),random(255),random(255));
    circle(x,y,d);
    circleFractal(x-d/2,y,d/2);
    circleFractal(x+d/2,y,d/2);
    circleFractal(x,y-d/2,d/2);
    circleFractal(x,y+d/2,d/2);
    pop();
  }
}

function circleInCircle(x,y,d){
  if(d > 10){
    push();
    translate(x,y);
    rotate(radians(frameCount));
    fill(random(255),random(255),random(255));
    circle(x,y,d);
    let den = map(mouseX,0,width,1.01,1.5);
    circleInCircle(x,y,d/den);
    pop();
  }
}