var shapes = [];

function Shape(x, y, color) {
  this.x = x;
  this.y = y;
  this.width = 60; 
  this.color = color;
  this.count = 0;

  this.display = function() {
    if(this.count == 0) {
      this.showRect();
      this.count = 1;
    } else if (this.count == 1) {
      this.showEllipse();
      this.count = 0;
    }
  };

  this.showRect = function() {
    rectMode(CENTER);
    noFill();
    stroke(0);

    translate(this.width/2, this.width/2);
    rotate(PI/3.0);
    rect(this.x, this.y, this.width, this.width);
  }

  this.showEllipse = function() {
    ellipseMode(CENTER);
    noFill();
    stroke(0);

    ellipse(this.x, this.y, this.width, this.width);
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255);
  shapes[0] = new Shape(mouseX, mouseY, color(255, 0, 0));
}

function draw() {
  
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].display();
  }

}

function mouseMoved() {
  var nShape = new Shape(mouseX, mouseY, color(255, 0, 0));
  shapes.push(nShape);
  
}

