var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	document.getElementById("volumeSlider").oninput = function() {
		volumeInputFunction();
	};
	document.getElementById("volume").innerHTML = (video.volume) * 100 + "%";


});

function volumeInputFunction(){
	var val = document.getElementById("volumeSlider").value;
	video.volume = val/100;
	document.getElementById("volume").innerHTML = (video.volume) * 100 + "%";
}



document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5;
	var videoDuration = video.duration;
	if(video.currentTime >= videoDuration){
		video.currentTime = 0;
		console.log("Going back to begining")
	}
	else
		console.log("Current location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	var status = document.getElementById("mute").innerHTML;
	if(status == "Mute"){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		document.getElementById("volume").innerHTML = "0%";

	}
	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		document.getElementById("volume").innerHTML = "100%";

	}
});


document.querySelector("#old").addEventListener("click", function() {
	var style = document.getElementById("myVideo").classList;
	style.add('oldTime');
});

document.querySelector("#original").addEventListener("click", function() {
	var style = document.getElementById("myVideo");
	if (style.classList.contains("oldTime")) {
		style.classList.remove("oldTime");

	}
});



