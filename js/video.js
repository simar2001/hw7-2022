var video;

/*
	Initialize the video element and turn off autoplay and turn off looping.
*/
window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
	video.load();
});

/*
	Play the video and update the volume information.
*/
document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video = document.querySelector('#player1')
	video.play();
	volume = document.querySelector('#volume')
	volume.innerHTML = document.querySelector('#slider').value + "%"
	console.log("Volume info: " + volume.innerHTML)
});

/*
	Pause the video.
*/
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video = document.querySelector('#player1')
	video.pause();
});

/*
	Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
*/
document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow Down Video");
	video = document.querySelector('#player1')
	video.playbackRate = video.playbackRate - .1;
	console.log("Current Video Playback Rate: " + video.playbackRate);
});

/*
	Increase the current video speed each time the button is clicked and log the new speed to the console. 
	Change it by an amount proportional to the slow down. CHECK THIS!!  
	If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
*/
document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed Up Video");
	video = document.querySelector('#player1')
	video.playbackRate = video.playbackRate + .1;
	console.log("Current Video Playback Rate: " + video.playbackRate);
});

/*
	Advance the current video by 10 seconds.  
	If the video length has been exceeded go back to the start of the video - no farther.   
	Log the current location of the video.
*/
document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Ahead in Video");
	video = document.querySelector('#player1')
	video.currentTime += 10;

	if (video.currentTime >= video.duration) {
		console.log("Going back to start of video here!")
		video.currentTime = 0;
		video.pause()
	}

	console.log("Current Video Time: " + video.currentTime);
});

/*
	Mute/unmute the video and update the text in the button.
*/
document.querySelector("#mute").addEventListener("click", function () {
	video = document.querySelector('#player1');
	button = document.querySelector('#mute');

	if (video.muted === true) {
		video.muted = false;
		button.innerHTML = "Mute";
	}
	else {
		video.muted = true;
		button.innerHTML = "Unmute"
	}
});

/*
	Change the volume based on the slider and update the volume information.
*/
document.querySelector("#slider").addEventListener("click", function () {
	video = document.querySelector('#player1');
	slider = document.querySelector('#slider');

	video.volume = slider.value * .01;

	volume = document.querySelector('#volume')
	volume.innerHTML = document.querySelector('#slider').value + "%"
	console.log("Volume info: " + volume.innerHTML)
});

/*
	Utilize the existing oldSchool class on the video element.
*/
document.querySelector("#vintage").addEventListener("click", function () {
	video = document.querySelector('#player1');
	video.className = 'video oldSchool';
	console.log("Video Class: " + video.className);
});

/*
	Remove the oldSchool class from the video.
*/
document.querySelector("#orig").addEventListener("click", function () {
	video = document.querySelector('#player1');
	video.className = 'video';
	console.log("Video Class: " + video.className);
});
