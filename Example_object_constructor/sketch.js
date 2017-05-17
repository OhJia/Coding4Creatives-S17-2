var arrayOfCircles = [];


function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
  background(0,0,0);

  // Create 6 new circles and add to array
  for (var i = 0; i < 6; i++) {
    var newCircle = new Circle(i + 100, i + 100, 500 + i * 10);   
    arrayOfCircles.push(newCircle);
  }
  
}


function draw(){
  background(51);
  
  // Loop through array and call function for each circle
  for (var i = 1; i < 6; i++) {
    arrayOfCircles[i].display();
    arrayOfCircles[i].move();
    arrayOfCircles[i].bounce();    
  }

}
