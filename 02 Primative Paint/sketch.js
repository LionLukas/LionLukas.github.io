// Primative Paint
// Lukas Scrobe
// Sept/15/2023
// Make a sandbox enviornment for the user to draw in

let overlay, ballX, ballY, xSpeed = 5, ballSize = 125, ySpeed = 5; // these are unchanging so that if something changes them in a function later they return to their original values

function setup() { // this creates the canvas and sets up some variables that will be used later
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width, height);
  ballX = width / 2;
  ballY = height / 2;
}

function keyPressShapes() { // if a specific key is pressed it produces that shape the the users mouse is
  if (keyIsPressed) {
    if (key === "a") { // if the "a" key is pressed it creates a rectangle where the mouse is
      overlay.rect(mouseX, mouseY, 50, 25);
      overlay.fill(random(0, 255), random(0, 255), random(0, 255));
    }
    if (key === "s") { // if the "s" key is pressed it creates a circle where the mouse is
      overlay.ellipse(mouseX, mouseY, 55, 55);
      overlay.fill(random(0, 255), random(0, 255), random(0, 255));
    }
    if (key === "d") { // if the "d" key is pressed it creates a semi-circle where the mouse is
      overlay.arc(mouseX, mouseY, 80, 80, 0, PI + TWO_PI, PIE);
      overlay.fill(random(0, 255), random(0, 255), random(0, 255));
    }
  }
  image(overlay, 0, 0);
}

function screenSaver() { // this ball acts like a screen saver where it bounces around the x and y-axis of the canvas
  ballX = ballX + xSpeed;
  ballY = ballY + ySpeed;
  if (ballX + ballSize / 2 >= windowWidth || ballX - ballSize / 2 <= 0) {
    xSpeed *= -1;
  }
  if (ballY + ballSize / 2 >= windowHeight || ballY - ballSize / 2 <= 0) {
    ySpeed *= -1;
  }
  fill(0);
  circle(ballX, ballY, ballSize);
}

function cleanSlate() { // if the space bar is pressed, it clears the canvas leaving it blank 
  if (keyIsPressed) {
    if (key === " ") {
      setup();
    }
  }
}

function draw() { // these call upon and draw the shapes in the functions above
  background(220);
  keyPressShapes();
  screenSaver();
  cleanSlate();
  textFont("wingdings", 24); // this changes the text font and pixel size for printed text on the canvas
  text("Lukas Scrobe", 5, 20); // this prints my name in the top corner of the canvas
}
