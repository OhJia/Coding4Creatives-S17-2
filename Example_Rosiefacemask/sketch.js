/***********************************************************

	Facetracker sketch using p5.js, p5.dom.js, 
	and clmtracker.js. Code example from: 
	https://gist.github.com/lmccart/2273a047874939ad8ad1

***********************************************************/

var ctracker;
var mask;

var w, h;

function preload() {
	mask = loadImage("imgs/mask.png");
}

function setup() {

	// setup camera capture
	var videoInput = createCapture();
	videoInput.size(400, 300);
	videoInput.position(windowWidth/2-200, windowHeight/2-150); // center video frame 

	// setup canvas
	var cnv = createCanvas(400, 300);
	cnv.position(windowWidth/2-200, windowHeight/2-150); // center canvas

	// setup tracker
	ctracker = new clm.tracker();
	ctracker.init(pModel);
	ctracker.start(videoInput.elt);

	noStroke();

}

function draw() {
	clear();

	// get array of face marker positions [x, y] format
	// positions is an array of all the points of the face tracked
	var positions = ctracker.getCurrentPosition();
	
	

	// loop through all positions of the face and draw an ellipse on that position
	for (var i=0; i<positions.length; i++) {
		
		// set the color of the ellipse based on position on screen
		//fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
		// draw ellipse at each position point
		//ellipse(positions[i][0], positions[i][1], 15, 15);

		// fill(0);
		// textSize(7);
		// text(i, positions[i][0], positions[i][1]);

		w = dist(positions[0][0], positions[0][1], positions[14][0], positions[14][1])+150;
		h = dist(positions[22][0], positions[22][1], positions[37][0], positions[37][1])+100;
		//h = w / 1.5;

		imageMode(CENTER);
		image(mask, positions[33][0], positions[33][1], w, h);	  
	 
	}

}
