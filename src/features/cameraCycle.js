var availableDevices = [];
var activeDevice = 0;

// First, get all the available video capture devices
navigator.mediaDevices.enumerateDevices().then(function(devices){
    for(var i = 0; i < devices.length; i++){
        var device = devices[i];
        if(device.kind == "videoinput"){
            console.log("Will use device " + device.label);
            availableDevices.push(device.deviceId);
        }
    }

    // Start up with the last device from the list
    // This is especially useful for laptop users who
    // have multiple cameras and don't want to see
    // themselves or a black screen when the software starts
    useCamera(availableDevices.length - 1);
});

function useCamera(camera = 0){
    // Get the new device and restart the stream
    var newDevice = availableDevices[camera];
    activeDevice = camera;
    changeInfoText("Camera " + (camera + 1) + " of " + availableDevices.length);
    startStream(newDevice);
    resetZoom(); // Reset the zoom

    event.emit("camera", camera, availableDevices.length);
}

function cycleCamera(){
    var nextDevice = activeDevice;
    // Get the next available camera
    if(nextDevice >= availableDevices.length - 1){
        nextDevice = 0;
    } else {
        nextDevice += 1;
    }

    useCamera(nextDevice);
}