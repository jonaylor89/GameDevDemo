
class Drop {
  constructor() {
    this.pos = new createVector(random(width), random(-600, 0));
    this.vel = new createVector(0, random(6, 12));
    this.acc = new createVector(0, gravity);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);

    if (this.pos.y >= height) {
      this.vel.mult(0);
      this.pos = new createVector(random(width), 0);
      this.vel = new createVector(0, random(5, 12));
    }
  }

  show() {
    fill(255, 0, 255);
    noStroke();
    rect(this.pos.x, this.pos.y, 2, 10);
  }
}

let gravity;

let drops;
let numOfDrops;

function setup() {

    createCanvas(800, 800);


    gravity = 0.1;
    numOfDrops = 300;
    drops = []

    for (let i = 0; i < numOfDrops; i++) {
      drops[i] = new Drop(); 
    }
  
  }
  
  function draw() {
    background(255);


    for (let d of drops) {
      d.update();
      d.show();
    }
  
  }