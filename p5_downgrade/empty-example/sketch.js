const { saveAs } = require("./FileSaver.min");

let h = 150;
let w = 100;

function setup() {
  canvas = createCanvas(300, 300);
}


function draw() {
	background(255);
  let rez = 0.06;
  let t = 0;
  let incr = 4;
	for (var x = 0; x < width; x += incr) {
		for (var y = 0; y < height; y +=incr) {
      
      // n = noise(i * rez, j * rez, t);
      var n = noise(x*rez, y*rez, t);
      
      strokeWeight(0.2);
      stroke(0);
      // Make a horizontal line if n < 0.5


      //x < width/ 2 && y < height/2  = top left corner 
      // Make bottom left corner
      //x > width/ 2 && y > height/2 = bottom right corner

      // Make top right corner
      //x < width/ 2 && y > height/2 = bottom left corner
      // or 
      if (n < 0.3) {
        line(x, y, x+incr-1, y+incr-1);
      }

      if (n > 0.3 && n < 0.6) {
        line(x, y, x+incr, y+incr);
      }
     
      // &&!(x < width/ 4 && y > height/4)
      if (n > 0.6) {
        line(x+incr-1, y, x, y+incr-1);
      }

      //point(x - 30*n, y - 30*n);

		}
	}
  t+=0.01;
}
