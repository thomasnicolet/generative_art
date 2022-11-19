
// Print terrain to console
function makeTerrain() {
    var scl = 5;
    var w = 10;
    var h = 10;
    var flying = 0;
    cols = w / scl;
    rows = h / scl;

    var terrain = [];
      // Init a 2D array to store the terrain
      for (var x = 0; x < cols; x++) {
        terrain[x] = [];
        for (var y = 0; y < rows; y++) {
          terrain[x][y] = 0; 
        }
      }
  
      flying += 0.001; 
      var yoff = flying;
      for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
          // Add number to 2d array
          //terrain.push (random(-50, 50));
          terrain[x][y] = Math.random(-50, 50);
          xoff += 0.1;
        }
        yoff += 0.1;
      }
    return terrain;
  }
terrain = makeTerrain();
console.log(terrain[0][0]);
// Print terrain to console
console.log(terrain);