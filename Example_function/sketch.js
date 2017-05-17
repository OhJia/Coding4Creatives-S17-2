
function setup() {
 createCanvas(1200, 1400);

  background(255, 218, 185);
  noStroke();
  noLoop();
}

function draw() {

  for (var i = 0; i < 5; i++) {
    drawTarget(i * 200, height*0.5, i * 100, i * 2);
  }  

}


function drawTarget(xloc, yloc, size, num) {
  var grayvalues = 255/num;
  var steps = size/num;

  for (var i = 0; i < num; i++) {
    fill(i*grayvalues, 60, 200);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}