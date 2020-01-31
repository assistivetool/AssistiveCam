var inFreeze = false;

function toggleFreeze(duration = -1){
    if(inFreeze == false){
        event.emit("freezeOn");
        feed.pause();
        inFreeze = true;
        if(duration > 0){
            changeInfoText("Freeze view for " + (duration / 1000) + " seconds");
            // Unfreeze in the given amount of milliseconds
            window.setTimeout(function(){
                // Only unfreeze when we're in freeze
                if(inFreeze == true){
                    toggleFreeze();
                }
            }, duration);
        } else {
            changeInfoText("Freeze view");
        }
    } else {
        event.emit("freezeOff");
        feed.play();
        changeInfoText("Unfreeze");
        inFreeze = false;
    }
}

function saveSnapshot(){
    // Get the canvas content
    canvas.toBlob(function(blob){
        FileSaver.saveAs(blob, "snapshot.png");
        event.emit("snapshot", blob);
        changeInfoText("Snapshot taken");
    }, "image/png");
}