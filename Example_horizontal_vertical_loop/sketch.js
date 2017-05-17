function setup() {
  createCanvas(1920,1080);
  background(60, 20, 90);
}

function draw() {

  for (var i = 0; i < 10; i++) {
    // loop horizontally 
    for (var j = 0; j < 10; j++) {
      // loop vertically
      var xpos = i * 50;
      var ypos = j * 50;
      ellipse(xpos, ypos, 20, 20);
      console.log(xpos, ypos);
    }
    
  }
      
} 