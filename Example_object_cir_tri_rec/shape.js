var clr = [10, 50, 100, 150, 200, 230, 255]; // Create array of color values

function Shape(type) {
  this.x = 100;
  this.y = 100;
  this.z = 100;
  this.speedx = 7;
  this.speedy = 10;
  this.speedz = 7;

  this.type = type; // Assign type parameter to this.type

  this.display = function(value) {
    var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

    // Check if shape type is triangle
    if (this.type == "tri") { 

      fill (clr[index] + value, clr[index] + value + 100, random (0, 100));
      triangle (this.x + value, this.y + value, mouseX+d, this.x+d, this.y+d, mouseY+d); 

    // If type is circle
    } else if (this.type == "cir") {

      fill (random (0, 100), clr[index] + value , clr[index] + 100 + value);
      ellipse (this.x + value, this.y + value, d, d);

    // If type is rectangle
    } else if (this.type == "rec"){

      fill (clr[index] + value + 100, random (0, 100), clr[index] + value);
      rect (this.x + value, this.y + value, d, d); 

    // If doesn't match any of the types, log error message
    } else {
      console.log("ERROR! NO TYPE FOUND");
    }

  }

  this.move = function() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
    this.z = this.z + this.speedz;
  }

  this.bounce = function() {
    if (this.x > windowWidth || this.x < 0)  {
      this.speedx = this.speedx * -1;
    }   
    if (this.y > windowHeight || this.y < 0) {
      this.speedy = this.speedy * -1;
    }
    if (this.z > windowHeight || this.z < 0) {
      this.speedz = this.speedz * -1;
    }

  }

}



