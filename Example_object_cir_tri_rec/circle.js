/******************************************************

  Used as reference: 
  This file is NOT linked in index.html. 

  Constructor for Circle object. 
  Used to create the constructor for Shape object. 
  
******************************************************/

function Circle() {
  this.x = 100;
  this.y = 100;
  this.speedx = 7;
  this.speedy = 10;

  this.display = function(value) {
    var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

    fill (random (0, 100), clr[index] + value , clr[index] + 100 + value);
    ellipse (this.x + value, this.y + value, d, d);

    console.log("Diameter: " + d);
  }

  this.move = function() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
  }

  this.bounce = function() {
    if (this.x > windowWidth || this.x < 0)  {
      this.speedx = this.speedx * -1;
    }   
    if (this.y > windowHeight || this.y < 0) {
      this.speedy = this.speedy * -1;
    }
  }

}