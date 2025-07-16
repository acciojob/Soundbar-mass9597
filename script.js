//your JS code here. If required.

let currentAudio = null;

function playSound(fileName){
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentAudio = 0;
	}

	currentAudio = new Audio('sound/${fileName}');
	currentAudio.play();
}

function stopSound(){
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
	}
}
