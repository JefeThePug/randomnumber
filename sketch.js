var counter = 0;
var r;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(800);
  textAlign(CENTER, CENTER);
  strokeWeight(10);
}

function draw() {
  background(0);
  fill(255, 255, 0);
  stroke(255, 255, 0);

  if (counter <= 40) {
    fill(255, 255, 255);
    stroke(255, 255, 255);
    if (counter % 2 === 0) {
      r = round(random(1, 20));
    }
  }

  text(r, width / 2, height / 2)


  counter++;
}

function mousePressed() {
  counter = 0;
}