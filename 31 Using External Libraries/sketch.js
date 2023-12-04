// Using External Libraries
// Lukas Scrobe
// Dec/01/2023 !!!!!!!!!!!!
// scribley 2d objects

//Globals
let scribble;
let rW = 150;
let rH = 180;
let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble(); 
}

function draw() {
  background(220);
  rect(width/2,height/2,rW,rH);
  scribble.scribbleEllipse(mouseX,mouseY,120,80);
  hit = collidePointRect(mouseX, mouseY, 200, 200, 100, 150);
  stroke(hit ? color("red") : 0);
}
