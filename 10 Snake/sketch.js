// Snake Mechanics?
// Lukas Scrobe
// Oct/11/2023
// practice in working with classes and arrays (snake)

//Globals
let points = [];
let speed = 6;
let snakeLength = 10;
let snakeLocation;

function setup() {
  createCanvas(windowWidth, windowHeight);
  snakeLocation = new Point(width / 2, height / 2);
  strokeWeight(15);
  initSnake();
}

function initSnake() {
  for (let i = 0; i < snakeLength; i++) {
    points.push(createPoint());
  }
}

function createPoint() {
  if (keyCode === UP_ARROW) {
    snakeLocation.y -= speed;
  }
  else if (keyCode === DOWN_ARROW) {
    snakeLocation.y += speed;
  }
  else if (keyCode === LEFT_ARROW) {
    snakeLocation.x -= speed;
  }
  else if (keyCode === RIGHT_ARROW) {
    snakeLocation.x += speed;
  }
  return new Point(snakeLocation.x, snakeLocation.y);
}

function draw() {
  background(220);
  moveAndDisplay();
}

function moveAndDisplay() {
  for (let i = 0; i < points.length - 1; i++) {
    let cur = points[i];
    let next = points[1 + i];
    let alpha = map(i, 0, points.length - 1, 0, 150);
    stroke(0, alpha);
    line(cur.x, cur.y, next.x, next.y);
  }
  points.splice(0, 1);
  points.push(createPoint());
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}