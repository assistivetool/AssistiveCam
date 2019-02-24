const fs = require('fs');

const feed = document.getElementById("videofeed");
const infoText = document.getElementById("info");
const canvas = document.getElementById('manipulatedVideo');
const commandBox = document.getElementById('command');
const ctx = canvas.getContext('2d');
var mediaDeviceId = "";

// Project the video content onto the canvas
// Probably also a very inefficient way to handle this
feed.addEventListener('play', function() {
  var $this = this; //cache
  (function loop() {
    if (!$this.paused && !$this.ended) {
        ctx.drawImage($this, 0, 0);
        setTimeout(loop, 1000 / 30); // drawing at 30fps
    }
  })();
}, 0);

// Adjust canvas size when the video is loaded
feed.addEventListener('loadedmetadata', function() {
    canvas.width = feed.videoWidth;
    canvas.height = feed.videoHeight;
});

function startStream(device){
    // Make sure UserMedia is supported
    if(navigator.mediaDevices.getUserMedia){
        var constraints = {
            video: {
                width: 1280,
                height: 720,
                deviceId: device
            },
            audio: false
        };
        console.log(constraints);
        navigator.mediaDevices.getUserMedia(constraints)
        // Start thhe stream
        .then(function (stream){
            feed.srcObject = stream;
            feed.play();
        })
        // Tell the user about a possible error
        .catch(function (error){
            console.error(error);
            infoText.innerHTML = "Last error - " + error;
        });
    } else {
        console.error("navigator.mediaDevices.getUserMedia doesn't seem to be supported by this browser.");
    }
}