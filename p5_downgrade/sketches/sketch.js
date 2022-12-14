// https://editor.p5js.org/StevesMakerspace/sketches/EqPCvWdxa


let rez = 0.001;
let t = 0.01;
incr = 5;
size = incr;


function setup() {
  createCanvas(1000, 1000);
  let saveButton = createButton("save jpg");
  saveButton.position(10, height+10);
  saveButton.mousePressed(saveArt);
  noLoop();
}

function draw() {
  background(255);


  for (i = 0; i < width; i += incr) {
    for (j = 0; j < height; j += incr) {
      n = noise(i * rez, j * rez, t);
      //n = random(1);
      //stroke(n*255,n*255,n*255,255);
      stroke(0);
      //fill(n*255,n*255,n*255,255);
      strokeWeight(1);
      if (n < 0.5) {
        line(i, j, i + size, j + size);
      } else {
        line(i + size, j, i, j + size);
      }
    }
    t += 0.00002;
  }
}

function saveArt() {
  save("myCanvas.jpg");
}