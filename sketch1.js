
function setup() {

  createCanvas(800, 800);
  background(50);

  colorMode(HSB);



  for (let i = 0;  i < 100; i++) {

    let x = random(0, width);
    let y = random(0, height);
    let radius = random(50, 200);

    let hu = random(0, 360);
  
    fill(hu, 255, 255);

    if (hu < 300 || hu > 330) {

      stroke(hu, 255, 255);
    } else {
      strokeWeight(5);
      stroke(0);
    }

    circle(x, y, radius);
  }

}


