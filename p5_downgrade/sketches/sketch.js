// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/IKB1hWWedMk
// https://thecodingtrain.com/CodingChallenges/011-perlinnoiseterrain.html

// Edited by SacrificeProductions


function init2DArray() {
  var terrain = [];
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; 
    }
  }
  return terrain
}


function makeTerrain(cols, rows, flying) {
  terrain = init2DArray();
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -30, 30);
      xoff += 0.05;
    }
    yoff += 0.05;
  }
  return terrain;
}

  var cols, rows;
  var scl = 6;
  var w = 300;
  var h = 300;
  cols = w / scl;
  rows = h / scl;
  var flying = 0;
  flyingSpeed = 0.005;
function setup() {
  createCanvas(w, h, WEBGL);
  terrain = makeTerrain(cols, rows, 2);
}


function draw() {

  background(55);
  translate(0, -50);
  rotateX(PI / 5);
  fill(188, 155, 155, 255);
  translate(-w / 2, -h / 2);

  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl,  y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
  flying -= flyingSpeed;
  terrain = makeTerrain(cols, rows, flying);
}