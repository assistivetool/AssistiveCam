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

    startStream(availableDevices[0]);
});

function useCamera(camera = 0){
    // Get the new device and restart the stream
    var newDevice = availableDevices[camera];
    activeDevice = camera;
    startStream(newDevice);
}

function cycleCamera(){
    var nextDevice = activeDevice;
    // Get the next available camera
    if(nextDevice >= availableDevices.length){
        nextDevice = 0;
    } else {
        nextDevice += 1;
    }

    useCamera(nextDevice);
}