var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;

//var array = ["Leidy", "Charlie", "Artem", "Hortense", 5, 6];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);
  // console.log(array.length);
  // console.log(array[4]);
  // for ( var i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  //   array.push(i);
    
  // }
  // console.log(array);
}

function draw() {

	//distance from center of the screen
	var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);


	fill (random(200, 250), random(200, 250), random(200, 250));
	ellipse (x, y, d, d);



  //bouncing horizontally
 	x = x + xspeed;
  	
	if (x > windowWidth || x < 0)  {
   	xspeed = -xspeed;
	}

	//bouncing veritcally
	y = y + yspeed;

	if (y > windowHeight || y < 0) {
 	  yspeed = -yspeed;
	}

}