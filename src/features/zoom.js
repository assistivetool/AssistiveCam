var zoomLevel = 1;

function changeZoomLevel(level){
    canvas.width = feed.videoWidth / level;
    canvas.height = feed.videoHeight / level;
    zoomLevel = level;
    infoText.innerHTML = "Zoom level: " + zoomLevel;
}

function zoomIn(){
    var defaultLevel = config["defaults"]["in"];
    newZoomLevel = zoomLevel + defaultLevel;
    // Increase the zoom only until a specified maximum level
    if(newZoomLevel <= config["defaults"]["max"]){
        changeZoomLevel(newZoomLevel);
    }
}

function zoomOut(){
    var defaultLevel = config["defaults"]["out"];
    newZoomLevel = zoomLevel - defaultLevel;
    // Decrase the zoom only until a specified minimum level
    if(newZoomLevel >= 1){
        changeZoomLevel(newZoomLevel);
    }
}