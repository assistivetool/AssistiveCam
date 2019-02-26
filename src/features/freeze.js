var inFreeze = false;

function toggleFreeze(duration = -1){
    if(inFreeze == false){
        feed.pause();
        inFreeze = true;
        if(duration > 0){
            // Unfreeze in the given amount of milliseconds
            window.setTimeout(function(){
                // Only unfreeze when we're in freeze
                if(inFreeze == true){
                    toggleFreeze();
                }
            }, duration);
        }
    } else {
        feed.play();
        inFreeze = false;
    }
}

function saveSnapshot(){
    // Get the canvas content
    image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;

    var dlLink = document.createElement("a");
    dlLink.setAttribute("download", "snapshot.png");
    dlLink.setAttribute("href", image);
    dlLink.click();

    infoText.innerHTML = "Snapshot taken";
}