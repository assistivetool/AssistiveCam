const feed = document.getElementById("videofeed");
const constraints = {
    video: {
        width: 1280,
        height: 720
    },
    audio: false
};

// Make sure UserMedia is supported
if(navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
        feed.srcObject = stream;
        video.play()
    })
    .catch(function(error) {
        console.error(error);
    });
} else {
    console.error("navigator.mediaDevices.getUserMedia doesn't seem to be supported by this browser.");
}