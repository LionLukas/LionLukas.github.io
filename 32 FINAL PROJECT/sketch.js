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
let loadFinished = false;
let hitSong1;
let hitSong2;
let txtSizeA = 32;
let songOne;
let songTwo;
let hitSound;
let loaded = 0;
let position = 0;
//let timer = 0;
let menuIs = true;
const BPM = 57;
const SPB = 1.053;

function oneLoaded() {
  loaded += 100 / 3;
}


function setup() {
  createCanvas(windowWidth, windowHeight);
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
    loadTrack();
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

function loadTrack(){
  if (menuIs === true){
    menu();
  }
  else{
    scrollingBackground();
    for (let i = 0; i < songOneNotes.length; i++) {
      songOneNotes[i].display();
      songOneNotes[i].move();
    }
  }
}

function mouseClicked() {
  // if mouse clicks on song1 
  if (hitSong1) {
    menuIs = false;
    for (let i = 0; i < songOneNotes.length; i++) {
      songOneNotes[i].display();
      songOneNotes[i].move();
    }
    cueSongOne();
    songOne.play();
    songTwo.stop();
  }
  // if mouse clikcs on song2
  if (hitSong2) {
    scrollingBackground();
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
}

function cueSongOne(){
  songOne.addCue(0,createLane4);
  songOne.addCue(SPB*1,createLane4);
  songOne.addCue(SPB*2,createLane3);
  songOne.addCue(SPB*3,createLane3);
  songOne.addCue(SPB*4,createLane3);
  songOne.addCue(SPB*5,createLane3);
  songOne.addCue(SPB*6,createLane2);
  songOne.addCue(SPB*7,createLane2);
  songOne.addCue(SPB*8,createLane1);
  songOne.addCue(SPB*9,createLane1);
  songOne.addCue(SPB*10,createLane1);
  songOne.addCue(SPB*11,createLane1);
  songOne.addCue(SPB*12,createLane1);
  songOne.addCue(SPB*13,createLane1);
  songOne.addCue(SPB*14,createLane1);
  songOne.addCue(SPB*15,createLane1);
  songOne.addCue(SPB*16,createLane4);
  songOne.addCue(SPB*17,createLane4);
  songOne.addCue(SPB*18,createLane3);
  songOne.addCue(SPB*19,createLane3);
  songOne.addCue(SPB*20,createLane3);
  songOne.addCue(SPB*21,createLane3);
  songOne.addCue(SPB*22,createLane2);
  songOne.addCue(SPB*23,createLane2);
  songOne.addCue(SPB*24,createLane1);
  songOne.addCue(SPB*25,createLane1);
  songOne.addCue(SPB*26,createLane1);
  songOne.addCue(SPB*27,createLane1);
  songOne.addCue(SPB*28,createLane1);
  songOne.addCue(SPB*29,createLane1);
  songOne.addCue(SPB*30,createLane1);
  songOne.addCue(SPB*31,createLane1);
  songOne.addCue(SPB*32,createLane4);
  songOne.addCue(SPB*33,createLane4);
  songOne.addCue(SPB*34,createLane3);
  songOne.addCue(SPB*35,createLane3);
  songOne.addCue(SPB*36,createLane3);
  songOne.addCue(SPB*37,createLane3);
  songOne.addCue(SPB*38,createLane2);
  songOne.addCue(SPB*39,createLane2);
  songOne.addCue(SPB*40,createLane1);
  songOne.addCue(SPB*41,createLane1);
  songOne.addCue(SPB*42,createLane1);
  songOne.addCue(SPB*43,createLane1);
  songOne.addCue(SPB*44,createLane1);
  songOne.addCue(SPB*45,createLane1);
  songOne.addCue(SPB*46,createLane1);
  songOne.addCue(SPB*47,createLane1);
  songOne.addCue(SPB*47.25,createLane3);
  songOne.addCue(SPB*48,createLane4);
  songOne.addCue(SPB*49,createLane4);
  songOne.addCue(SPB*50,createLane3);
  songOne.addCue(SPB*51,createLane3);
  songOne.addCue(SPB*52,createLane3);
  songOne.addCue(SPB*53,createLane3);
  songOne.addCue(SPB*54,createLane2);
  songOne.addCue(SPB*55,createLane2);
  songOne.addCue(SPB*56,createLane1);
  songOne.addCue(SPB*57,createLane1);
  songOne.addCue(SPB*58,createLane1);
  songOne.addCue(SPB*59,createLane1);
  songOne.addCue(SPB*60,createLane1);
  songOne.addCue(SPB*61,createLane1);
  songOne.addCue(SPB*62,createLane1);
  songOne.addCue(SPB*63,createLane1);
  songOne.addCue(SPB*63.25,createLane3);
  songOne.addCue(SPB*63.5,createLane2);
  songOne.addCue(SPB*64,createLane4);
  songOne.addCue(SPB*65,createLane4);
  songOne.addCue(SPB*66,createLane3);
  songOne.addCue(SPB*67,createLane3);
  songOne.addCue(SPB*68,createLane3);
  songOne.addCue(SPB*69,createLane3);
  songOne.addCue(SPB*70,createLane2);
  songOne.addCue(SPB*71,createLane2);
  songOne.addCue(SPB*72,createLane1);
  songOne.addCue(SPB*73,createLane1);
  songOne.addCue(SPB*74,createLane1);
  songOne.addCue(SPB*75,createLane1);
  songOne.addCue(SPB*76,createLane1);
  songOne.addCue(SPB*77,createLane1);
  songOne.addCue(SPB*78,createLane1);
  songOne.addCue(SPB*79,createLane1);
  songOne.addCue(SPB*79.25,createLane3);
  songOne.addCue(SPB*79.5,createLane2);
}

function createLane1(){
  songOneNotes.push(new Game1(width * 0.155, 0));
  print("Lane 1 Cued");
}

function createLane2(){
  songOneNotes.push(new Game1(width * 0.265, 0));
  print("Lane 2 Cued");
}

function createLane3(){
  songOneNotes.push(new Game1(width * 0.375, 0));
  print("Lane 3 Cued");
}

function createLane4(){
  songOneNotes.push(new Game1(width * 0.485, 0));
  print("Lane 4 Cued");
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
            if(multiplier >= 4){
              multiplier = 4;
            }
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
            if(multiplier >= 4){
              multiplier = 4;
            }
            this.delete = true;
          }
        }
      }
      if (key === "k") {
        if (this.y >= height * 0.85 && width * 0.32 <= this.x && this.x <= width * 0.43) {
          if (this.hit === false) {
            hitSound.play();
            this.hit = true;
            floor(score += 25*multiplier);
            multiplier += 0.15;
            if(multiplier >= 4){
              multiplier = 4;
            }
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
            if(multiplier >= 4){
              multiplier = 4;
            }
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