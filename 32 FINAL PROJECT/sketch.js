// Lukas' Super Awesome Amazing Beat Dash Rhythm Game 
// すごいかわいい
// Lukas Scrobe
// Dec/5/2023
// I am making a rhythm game that plays like guitar hero

// Globals
let loadFinished = false;
let txtSizeA = 32;

function preLoad(){
  loadSound();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  loadingScreen();
}

function loadingScreen(){
  background("#B00B69");
  textSize(txtSizeA);
  textAlign(CENTER,CENTER);
  text("𝓛𝓾𝓴𝓪𝓼' 𝓢𝓾𝓹𝓮𝓻 𝓐𝔀𝓮𝓼𝓸𝓶𝓮 𝓐𝓶𝓪𝔃𝓲𝓷𝓰",width/2,height/2-95);
  text("𝓑𝓮𝓪𝓽 𝓓𝓪𝓼𝓱 𝓡𝓱𝔂𝓽𝓱𝓶 𝓖𝓪𝓶𝓮",width/2,height/2-45);
  text("すごいかわいい",width/2,height/2+10);
  textAlign(CORNER);
  textFont("Comic Sans");
  textSize(12);
  text("Uday",width-20,5);
  text("waz here",width-20,15);
  if(txtSizeA > 39){
    txtSizeA = 32;
  }
  else{
    if(frameCount%10===0){
      txtSizeA++;
    }
  }
}