/******************************************************

	Example from p5.speech library
	http://ability.nyu.edu/p5.js-speech/

******************************************************/

var myVoice = new p5.Speech(); // new P5.Speech object

var menuLoaded = 0;
var label, input, checkbox, speakbutton, vslider, rslider, pslider; // UI

function setup(){
	// input dialog:
	input = createInput("yeah, baby!!!");
	input.style("width", 400);
		input.position(20, 65);
	// checkbox:
	checkbox = createInput(0, 1, 0);
	checkbox.attribute("type", "checkbox");
	checkbox.style("width", "15px");
	checkbox.style("height", "15px");
		checkbox.position(100, 100);
	// button:
	speakbutton = createButton('Speak');
		speakbutton.position(20, 100);
		speakbutton.mousePressed(doSpeak);
		// sliders:
		vslider = createSlider(0., 100., 100.);
		vslider.position(20, 140);
		vslider.mouseReleased(setVolume);
		rslider = createSlider(10., 200., 100.);
		rslider.position(20, 160);
		rslider.mouseReleased(setRate);
		pslider = createSlider(1., 200., 100.);
		pslider.position(20, 180);
		pslider.mouseReleased(setPitch);
	// labels:
	label = createDiv("say something:");
	label.position(20, 40);
	label = createDiv("interrupt?");
	label.position(125, 100);
	label = createDiv("volume");
	label.position(160, 140);
	label = createDiv("rate");
	label.position(160, 160);
	label = createDiv("pitch");
	label.position(160, 180);

		// say hello:
	myVoice.speak(input.value());

}

function setVolume(){
	myVoice.setVolume(vslider.value()/100.);
}

function setRate(){
	myVoice.setRate(rslider.value()/100.);
}

function setPitch(){
	myVoice.setPitch(pslider.value()/100.);
}

function draw(){
	// why draw when you can click?
}

function doSpeak(){
	myVoice.interrupt = checkbox.elt.checked;
	myVoice.speak(input.value()); // debug printer for voice options
}
