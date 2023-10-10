// Working With Images
// Lukas Scrobe
// Oct/10/2023
// working with images in variables and arrays

//Globals
let lionL, lionR; // stroe image object in each
let facingLeft = true;
let pinImages = []; // to hold all of our pinwheel images
let pinIndex = 0;

function preload(){
  // happens before setup(), waits for loading to finish
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let i=0; i<9; i++){
    pinImages.push(loadImage("assets/pin-0"+i+".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  drawLion();
  drawPin();
}

function drawPin(){
  // animate our pinwheel images
  image(pinImages[pinIndex],width/2,height/2);
  if(frameCount % 2 === 0){
    pinIndex++;
  }
  if(pinIndex > 8){
    pinIndex = 0;
  }
}

function drawLion(){
  // draw lion in direction mouse moves
  // update the position
  if (movedX < 0) {
    facingLeft = true;
  }
  else if (movedX > 0){
    facingLeft = false;
  }
  // changes the position
  if(facingLeft){
    image(lionL,mouseX,mouseY, lionL.width * 0.6, lionL.hieght * 0.6);
  }
  else{
    image(lionR,mouseX,mouseY, lionR.width * 2.7,lionR.hieght * 2.7);
  }
}