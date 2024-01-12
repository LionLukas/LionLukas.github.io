// Lukas' Super Awesome Amazing Beat Dash Rhythm Game 
// すごいかわいい
// Lukas Scrobe
// Dec/5/2023
// I am making a rhythm game that playns like guitar hero

// Globals
let songOneNotes = [];
let songTwoNotes = [];
let score = 0;
let multiplier = 1.0;
let bluredLine;
let loadFinished = false;
let hitSong1;
let hitSong2;
let txtSizeA = 32;
let songOne;
let songTwo;
let hitSound;
let loaded = 0;
let position = 0;
const BPM = 57;
const SPB = 1.053;

function oneLoaded() {
  loaded += 100 / 3;
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bluredLine = loadImage("assets/Blury_Line.png");
  songOne = loadSound("song assets/Like_Clockwork-QOTSA.mp3", oneLoaded);
  songTwo = loadSound("song assets/Kalopsia-QOTSA.mp3", oneLoaded);
  hitSound = loadSound("song assets/note_hit.mp3", oneLoaded);
  frameRate(57);
}

function draw() {
  if (loadFinished === false) {
    loadingScreen();
    if (loaded >= 100) {
      loadFinished = true;
    }
  }
  else {
    //menu();
    scrollingBackground();
    cueSongOne;
    songOne;
    for (let i = 0; i < songOneNotes.length; i++) {
      songOneNotes[i].display();
      songOneNotes[i].move();
    }
    
  }
}

function loadingScreen() {
  background("#B00B69");
  textSize(txtSizeA);
  textAlign(CENTER, CENTER);
  text("𝓛𝓾𝓴𝓪𝓼' 𝓢𝓾𝓹𝓮𝓻 𝓐𝔀𝓮𝓼𝓸𝓶𝓮 𝓐𝓶𝓪𝔃𝓲𝓷𝓰", width / 2, height / 2 - 95);
  text("𝓑𝓮𝓪𝓽 𝓓𝓪𝓼𝓱 𝓡𝓱𝔂𝓽𝓱𝓶 𝓖𝓪𝓶𝓮", width / 2, height / 2 - 45);
  text("すごいかわいい", width / 2, height / 2 + 10);
  textFont("Comic Sans");
  textSize(12);
  text("Uday", width - 20, 5);
  text("waz here", width - 20, 15);
  if (txtSizeA > 39) {
    txtSizeA = 32;
  }
  else {
    if (frameCount % 10 === 0) {
      txtSizeA++;
    }
  }
  fill(255);
  rect(width * 0.1, height * 0.7, width * 0.8, 50);
  fill("#189BCC");
  rect(width * 0.1, height * 0.7, map(loaded, 0, 100, 0, width * 0.8), 50);
  fill(0);
  textSize(32);
  text(floor(loaded) + "%", width / 2, height * 0.74);
}

function menu() {
  background("#0a0d36");
  hitSong1 = collidePointRect(mouseX, mouseY, width * 0.1, height * 0.1, width * 0.8, 75);
  stroke(hitSong1 ? 255 : 0);
  rect(width * 0.1, height * 0.1, width * 0.8, 75);
  hitSong2 = collidePointRect(mouseX, mouseY, width * 0.1, height * 0.25, width * 0.8, 75);
  stroke(hitSong2 ? 255 : 0);
  rect(width * 0.1, height * 0.25, width * 0.8, 75);
  stroke(255);
  text("Queens Of The Stone Age", width * 0.35, height * 0.125);
  text("...Like Clockwork", width * 0.275, height * 0.1751);
  text("5:24", width * 0.8, height * 0.153);
  text("Queens Of The Stone Age", width * 0.35, height * 0.275);
  text("Kalopsia", width * 0.2, height * 0.3251);
  text("4:38", width * 0.8, height * 0.305);
}

function mouseClicked() {
  // if mouse clicks on song1 
  if (hitSong1) {
    songOne.play();
    songTwo.stop();
  }
  // if mouse clikcs on song2
  if (hitSong2) {
    songTwo.play();
    songOne.stop();
  }
}

function scrollingBackground() {
  background(0);
  filter(BLUR);
  fill(175);
  rect(width * 0.1, 0, width * 0.441, height * 0.85);
  fill("#151922");
  rect(width * 0.1, height * 0.85, width * 0.111, height);
  text("s",width*0.155,height*0.95);
  rect(width * 0.21, height * 0.85, width * 0.111, height);
  text("d",width*0.265,height*0.95);
  rect(width * 0.32, height * 0.85, width * 0.111, height);
  text("k",width*0.375,height*0.95);
  rect(width * 0.43, height * 0.85, width * 0.111, height);
  text("l",width*0.485,height*0.95);
  stroke(200);
  strokeWeight(3);
  line(width * 0.21, 0, width * 0.21, height);
  line(width * 0.32, 0, width * 0.32, height);
  line(width * 0.43, 0, width * 0.43, height);
  line(width*0.1,position,width*0.54,position);
  position += height/BPM;
  if (position > height) {
    position = 0;
  }
  text(score, width * 0.75, height * 0.2);
  text(multiplier.toFixed(2),width*0.75,height*0.3);
  let songOneLength = songOne.duration()/60 - 0.17 ;
  text("Duration:" + songOneLength.toFixed(2),width*0.75,height*0.1);

  
  //songOne.addCue(0,songOneNotes.push(new Game1(width * 0.155, 0)));
  //songOne.addCue(0,songOneNotes.push(new Game1(width * 0.265, 0)));
  //songOne.addCue(0,songOneNotes.push(new Game1(width * 0.375, 0)));
  //songOne.addCue(0,songOneNotes.push(new Game1(width * 0.485, 0)));
}

function cueSongOne(){
  songOne.addCue(0,songOneNotes.push(new Game1(width * 0.485, 0)));
  songOne.addCue(SPB,songOneNotes.push(new Game1(width * 0.485, 0)));
  songOne.addCue(SPB*2,songOneNotes.push(new Game1(width * 0.375, 0)));
  songOne.addCue(SPB*3,songOneNotes.push(new Game1(width * 0.375, 0)));
  songOne.addCue(SPB*4,songOneNotes.push(new Game1(width * 0.375, 0)));
  songOne.addCue(SPB*5,songOneNotes.push(new Game1(width * 0.375, 0)));
  songOne.addCue(SPB*6,songOneNotes.push(new Game1(width * 0.265, 0)));
  songOne.addCue(SPB*7,songOneNotes.push(new Game1(width * 0.265, 0)));
  songOne.addCue(SPB*8,songOneNotes.push(new Game1(width * 0.155, 0)));
  songOne.addCue(SPB*9,songOneNotes.push(new Game1(width * 0.155, 0)));
  songOne.addCue(SPB*10,songOneNotes.push(new Game1(width * 0.155, 0)));
  songOne.addCue(SPB*11,songOneNotes.push(new Game1(width * 0.155, 0)));
  songOne.addCue(SPB*12,songOneNotes.push(new Game1(width * 0.155, 0)));
  songOne.addCue(SPB*13,songOneNotes.push(new Game1(width * 0.155, 0)));
  songOne.addCue(SPB*14,songOneNotes.push(new Game1(width * 0.155, 0)));
  songOne.addCue(SPB*15,songOneNotes.push(new Game1(width * 0.155, 0)));
}

class Game1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.s = height/BPM;
    this.hit = false;
    this.delete = false;
  }

  display() {
    ellipseMode(CENTER);
    fill("#87CEEB");
    ellipse(this.x, this.y, 45);
  }

  move() {
    this.y += this.s;
    if (this.y > height + +(45 / 2)) {
      this.delete = true;
      multiplier = 1.0;
    }
    if (keyIsPressed === true) {
      if (key === "s") {
        if (this.y >= height * 0.85 && width * 0.1 <= this.x && this.x <= width * 0.21) {
          if (this.hit === false) {
            hitSound.play();
            this.hit = true;
            floor(score += 25*multiplier);
            multiplier += 0.15;
            this.delete = true;
          }
        }
      }
      if (key === "d") {
        if (this.y >= height * 0.85 && width * 0.21 <= this.x && this.x <= width * 0.32) {
          if (this.hit === false) {
            hitSound.play();
            this.hit = true;
            floor(score += 25*multiplier);
            multiplier += 0.15;
            this.delete = true;
          }
        }
      }
      if (key === "k") {
        if (this.y >= height * 0.85 && width * 0.32 <= this.x && this.x <= width * 0.43) {
          if (this.hit === false) {
            //hitSound.play();
            this.hit = true;
            floor(score += 25*multiplier);
            multiplier += 0.15;
            this.delete = true;
          }
        }
      }
      if (key === "l") {
        if (this.y >= height * 0.85 && width * 0.43 <= this.x && this.x <= width * 0.54) {
          if (this.hit === false) {
            hitSound.play();
            this.hit = true;
            floor(score += 25*multiplier);
            multiplier += 0.15;
            this.delete = true;
          }
        }
      }
    }
    if (this.delete === true) {
      songOneNotes.shift(0);
    }
  }
}

// like clockwork is 57 bpm and 1.05263157895 spb
// addCue to songOne every 1.053 seconds
//Half note               =  120 / BPM
//Quarter note            =   60 / BPM
//Eighth note             =   30 / BPM
//Sixteenth note          =   15 / BPM
//Dotted-quarter note     =   90 / BPM
//Dotted-eighth note      =   45 / BPM
//Dotted-sixteenth note   = 22.5 / BPM
//Triplet-quarter note    =   40 / BPM
//Triplet-eighth note     =   20 / BPM
//Triplet-sixteenth note  =   10 / BPM