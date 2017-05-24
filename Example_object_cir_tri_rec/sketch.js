var shapes = []; // Create empty array 


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0);
  
  // Loop 300 times
  for (var i = 0; i < 300; i++) { 
    if (i < 100) {

      shapes[i] = new Shape("cir"); // Create circle
      console.log("Created circles / Index: " + i);
    } else if (i < 200) {

      shapes[i] = new Shape("tri"); // Create triangle
      console.log("Created triangles / Index: " + i);
    } else {

      shapes[i] = new Shape("rec"); // Create rectangle
      console.log("Created rectangles / Index: " + i);
    }
  } 

}


function draw() {

  // Loop through shapes array
  for (var i = 0; i < shapes.length; i++) { 
    
    shapes[i].display(i); // value of i is passed into the display function as a parameter

    shapes[i].move();
    shapes[i].bounce();
  }
  
}






