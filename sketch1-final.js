
function setup() {

  createCanvas(800, 600);
  background(50);
  
  colorMode(HSB);

  let x = 0;
  let y = 0;
  let radius = 0;
  let hu = 0;

  for (let i = 0; i < 150; i++) {


    x = random(0, width)
    y = random(0, height)
    radius = random(50, 100);
    hu = random(0, 255);

    stroke(hu, 255, 255);
    fill(hu, 255, 255);

    ellipse(x, y, radius + random(10, 20), radius + random(10, 20));
  }
}

// function draw() {

// }
