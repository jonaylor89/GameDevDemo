const inc = 0.1;
const scl = 10;

let cols, rows;
let zoff = 0;
let particles = [];
let flowField = [];

function Particle(){

    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 2;

    this.update = function(){
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.acc.mult(0);

      this.edges();
    }

    this.follow = function(vectors){
      let x = floor(this.pos.x / scl);
      let y = floor(this.pos.y / scl);
      let index = x + y * cols;
      let force = vectors[index];
      this.applyForce(force);

    }

    this.applyForce = function(force){
      this.acc.add(force);
    }

    this.show = function(){
      stroke(0, 5);
      strokeWeight(7);
      point(this.pos.x, this.pos.y);
    }

    this.edges = function(){
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;

    }

}

function setup(){

  createCanvas(500, 500);
  pixelDensity(1);
  background(255);

  cols = floor(width/scl);
  rows = floor(height/scl);

  for(let a = 0; a < 200; a++){
    particles[a] = new Particle();
  }
}

function draw(){

  let yoff = 0;
  for(let y = 0; y < rows; y++){
    let xoff = 0;
    for(let x = 0; x < cols; x++){
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.5);
      flowField[index] = v;

      // push();
      //
      // translate(x*scl, y*scl);
      // rotate(v.heading());
      // stroke(0);
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      //
      // pop();

    xoff += inc;
    }
    yoff += inc;
    zoff += 0.0001;
  }

  for(let i = 0; i < particles.length; i++){
    particles[i].follow(flowField);
    particles[i].update();
    particles[i].show();
  }

}