function Circle(x, y, diameter) {
  this.x = x; 
  this.y = y;
  this.xvel = 5;
  this.yvel = 3;
  this.diameter = diameter;

  this.display = function() {
    noFill();
    stroke(255);
    ellipse(this.x, this.y, this.diameter);
  }

  this.move = function() {
    this.x += this.xvel;
    this.y += this.yvel;
  }

  this.bounce = function() {
    if ((this.x >= windowWidth) || (this.x <= 0)){
      this.xvel = -this.xvel;
    }
    if ((this.y >= windowHeight) || (this.y <= 0)){
      this.yvel = -this.yvel;
    }
  }
} 