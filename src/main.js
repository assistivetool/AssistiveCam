const feed = document.getElementById("videofeed");
const errorDisplay = document.getElementById("info");
var mediaURL = "";
var mediaDeviceId = "";

// First, get all the available video capture devices
navigator.mediaDevices.enumerateDevices().then(function(devices){
    for(var i = 0; i < devices.length; i++){
        var device = devices[i];
        if(device.kind == "videoinput"){
            console.log("Will use device " + device.label);
            mediaDeviceId = device.deviceId;
            break; // We currently only need one
        }
    }

    startStream(mediaDeviceId);
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
            //mediaURL = window.URL.createObjectURL(stream);
            //console.log("Using " + mediaURL + " as stream URL");
            //feed.src = mediaURL;
            feed.srcObject = stream;
            feed.play();
        })
        // Tell the user about a possible error
        .catch(function (error){
            console.error(error);
            errorDisplay.innerHTML = "Last error - " + error;
        });
    } else {
        console.error("navigator.mediaDevices.getUserMedia doesn't seem to be supported by this browser.");
    }
}