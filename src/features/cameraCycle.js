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

function cycleCamera(){
    // Get the next available camera
    if(activeDevice >= availableDevices.length){
        activeDevice = 0;
    } else {
        activeDevice += 1;
    }

    // Get the new device and restart the stream
    newDevice = availableDevices[activeDevice];
    startStream(newDevice);
}