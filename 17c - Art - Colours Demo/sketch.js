// Colours Demo
// Lukas Scrobe
// Oct/25/2023

// Globals
let rectWidth = 50;
let rectHeight = 10;
let colours = ["#3FB8AF","#7FC7AF","#DAD8A7","#FF9E9D","#FF3D7F"]; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //RGB
  drawRGB(width*0.15);
  //HSB
  drawHSB(width*0.45);
  //Custom
  drawCustom(width*0.7);
}

function drawRGB(x){
  colorMode(RGB); //0-255 for RGB
  for(let y = 0; y < height; y += rectHeight){
    fill(random(255),random(255),random(255));
    rect(x,y,rectWidth,rectHeight);
  }
}

function drawHSB(x){
  colorMode(HSB); //0-360 in degrees
  for(let y = 0; y < height; y += rectHeight){
    fill(y % 360,360,360);
    rect(x,y,rectWidth,rectHeight);
  }
} 

function drawCustom(x){
  colorMode(RGB);
  let index = 0;
  for(let y = 0; y < height; y += rectHeight){
    // Option #1
    fill(colours[index%colours.length]);
    //option #2
    fill(colours[Math.floor(random(colours.length))]);
    rect(x,y,rectWidth,rectHeight);
    index++;
  }
}