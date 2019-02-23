var zoomLevel = 1;

function changeZoomLevel(level){
    canvas.width = feed.videoWidth / level;
    canvas.height = feed.videoHeight / level;
    zoomLevel = level;
    infoText.innerHTML = "Zoom level: " + zoomLevel;
}

function zoomIn(){
    newZoomLevel = zoomLevel + 0.25;
    // Increase the zoom only until a specified maximum level
    if(newZoomLevel <= 6){
        changeZoomLevel(newZoomLevel);
    }
}

function zoomOut(){
    newZoomLevel = zoomLevel - 0.25;
    // Decrase the zoom only until a specified minimum level
    if(newZoomLevel >= 1){
        changeZoomLevel(newZoomLevel);
    }
}

// Listen for key presses in order to react to them
document.addEventListener('keydown', function(event){
    if(event.keyCode == 187){ // +, for zooming in
        zoomIn();
    }

    if(event.keyCode == 189){ // -, for zooming out
        zoomOut();
    }
});