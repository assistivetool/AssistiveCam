var recorder = null;

function startRecording(){
    if(!recorder){
        // Start a new recording
        recorder = RecordRTC(mediaStream);
        recorder.startRecording();

        event.emit("recording", true);

        changeInfoText("Recording started");
    } else {
        changeInfoText("Already recording");
    }
}

function stopRecording(){
    // Check if we're recording and then save the stream
    if(recorder && recorder.state == "recording"){
        recorder.stopRecording(function(blob){
            recorder.save("recording.webm", blob);
            changeInfoText("Recording stopped");
            // Unset the recorder
            recorder = null;
            
            event.emit("recording", false);
        });
    }
}

function toggleVideoRecording(){
    if(!recorder){
        startRecording();
    } else {
        stopRecording();
    }
}