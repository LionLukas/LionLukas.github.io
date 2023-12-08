// Lukas' Super Awesome Amazing Beat Dash Rhythm Game 
// すごいかわいい
// Lukas Scrobe
// Dec/5/2023
// I am making a rhythm game that plays like guitar hero

// Globals
let loadFinished = false;
let txtSizeA = 32;
let songOne;
let songTwo;
let hit;
let loaded=0;

function oneLoaded(){
  loaded +=33.4;
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  songOne = loadSound("song assets/Like_Clockwork-QOTSA.mp3", oneLoaded);
  songTwo = loadSound("song assets/Kalopsia-QOTSA.mp3",oneLoaded);
  hit = loadSound("song assets/note_hit.mp3",oneLoaded);
}

function draw() {
  if(loadFinished === false){
    loadingScreen();
    if(loaded>=100){
      loadFinished = true;
    }
  }
  else{
    menu();
  }
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
  fill(255);
  rect(width*0.1,height*0.7,width*0.8,50);
  fill(175);
  rect(width*0.1,height*0.7,map(loaded,0,100,0,width*0.8),50);
  fill(0);
  textSize(32);
  text(floor(loaded) + "%",width/2,height*0.74);
}

function menu(){
  background("#0a0d36");
  function mouseIsClicked(){
    if ( mouseX>width/2 && mouseY>height/2){
      songOne.play();
    }
  }
}