// Mouse Distance
// Lukas Scrobe
// Sept 20, 2023
//using arrays, maths, functions, + scroll wheel

//Globals
let colourArray = [];
let colourIndex = 0;

function createColours() {
  colourArray.push(color("red"));
  colourArray.push(color(200, 150, 100));
  colourArray.push(color("midnightblue"));
}

function mouseDistance(x1, y1, x2, y2) {
  let a = Math.abs(x1 - x2);
  let b = Math.abs(y1 - y2);
  let c = Math.sqrt(a * a + b * b);
  return c;
}

function drawNodes() {
  fill(colourArray[colourIndex]);
  stroke(colourArray[colourIndex]);
  circle(width / 2, height / 2, 20);
  circle(mouseX, mouseY, 20);
  line(width / 2, height / 2, mouseX, mouseY);
  let d = mouseDistance(mouseX, mouseY, width / 2, height / 2);
  textSize(30);
  textAlign(CENTER);
  text(round(d, 1), width / 2, height * 0, 6);
}

function mouseWheel(event) {
  // up is -, down is +
  print(event.delta);
  if (event.delta < 0) {
    colourIndex += 1;
    if (colourIndex > colourArray.length - 1) {
      colourIndex = 0;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createColours();
}

function draw() {
  background(220);
  drawNodes();
}
