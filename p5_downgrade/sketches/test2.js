
// GIF: Setup
let gif;
let canvas;
let framesToSkip = 3;
let makeGif = false;
let isGifExported = false;

function setupGif() {
    recordedFrames = 0;

    gif = new GIF({
        workers: 2,
        quality: 10,
        workerScript: 'gif.worker.js'
    });

    const uuid = parseInt(Math.random()*10000000);
    gif.on('finished', function(blob) {
        print('GIT: finished')
        rendering = false;
        window.open(URL.createObjectURL(blob));
        saveAs(blob, `bezier-${uuid}@2x.gif`);
        setupGif();
        recordedFrames = 0;
    });
}

// Make mousePress save gif
function mousePressed() {
    makeGif=true;
    console.log(`Gif will be made.`);
  }


function setup() {
	createCanvas(111, 111);
  setAttributes('antialias', true);
  setupGif();
}
let t = 0;
function draw() {
	background(220);


    circle(mouseX, mouseY, 40);

  // GIF: Add frame
  if (makeGif &&
    !isGifExported &&
    ((frameCount - 1) % framesToSkip == 0 || frameCount == 1)
    ) {
  console.log(`Added frame.`)
  gif.addFrame(canvas.elt, { delay: 30, copy: true });
  }
  
  // GIF: Render when done
  if (makeGif &&
      !isGifExported &&
      // replace with condition to render
      // e.g., frameCount >= 100
      frameCount >= 100
      ) {
    print('Exporting GIF...');
    gif.render();
    isGifExported = true;
  }
}
