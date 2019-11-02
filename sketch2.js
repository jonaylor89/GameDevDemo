
const gravity = 0.2;

class Drop {

  constructor() {
    this.pos = createVector(random(0, width), random(-600, 0));
    this.vel = createVector(0, random(6, 12));
    this.acc = createVector(0, gravity);

    this.height = random(2, 25);

  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);

    if (this.pos.y > height) {
      this.pos.y = random(-600, 0);
      this.vel.y = random(6, 12);
    }

  }

  show() {
    noStroke();
    // fill(255, 209, 220);
    fill(random(0, 255), random(0, 255), random(0, 255))
    rect(this.pos.x, this.pos.y, 5, this.height);
  }

}

let drops = []
let numOfDrops = 300

function setup() {

    createCanvas(800, 800);

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
  