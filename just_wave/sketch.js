var x=0;
var speed = 3;
var mic;


function setup(){
  createCanvas(500, 500);
  background(240, 240, 240);
  noFill();
  stroke(247, 197, 186);
  strokeWeight(10);
  textFont("Courier New");
  textSize(140);
  text("SOUND", 50, 200);
  text("WAVES", 50, 330);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  
  var vol = mic.getLevel();

  
  background(240,240,240);
  stroke(247, 197, 186);
  strokeWeight(10);
  textFont("Courier New");
  textSize(140);
  text("SOUND", 50, 200);
  text('WAVES', 50, 330);
	
	resetMatrix();
  
  //bouncingBall
  strokeWeight(2);
  fill(178, 198, 196);
  ellipse(x, 225, vol*200, vol*200);
  stroke(248, 221, 0);
  console.log(vol);
  
  if (x > width) {
    speed = -3;
    
  }

  if (x < 0){
    speed = 3;
  }
 
  x = x + speed;
  
    // point()
  // Sine wave
  drawSineWave(450, mouseY, mouseX, 30, 500);
  stroke(88,191,197);
  drawSineWave(150, 5, 20, mouseX, mouseY);
  
}

  
function drawSineWave(length, height, frequency, startX, startY) {

  var prevY = undefined;
  
  for(var i = 0; i < length; i++) {
    var angle = radians(i);
    var y = sin(angle * frequency);
    y = y * height;
    
    if(prevY !== undefined) {
      line(i + startX, y + startY, (i - 1) + startX, prevY + startY);
    }
    
    prevY = y;
  }
}
