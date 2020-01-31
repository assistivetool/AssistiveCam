var zoomLevel = 1.00;

function changeZoomLevel(level){
    level = Number(Number(level).toPrecision(2));

    event.emit("zoom", level);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width * 0.5, canvas.height * 0.5);
    ctx.scale(level, level);
    ctx.translate(-canvas.width * 0.5, -canvas.height * 0.5);
    zoomLevel = level;
    changeInfoText("Zoom level: " + zoomLevel);
}


// Safe features
function zoomIn(){
    var defaultLevel = config["defaults"]["in"];
    var newZoomLevel = zoomLevel + defaultLevel;
    // Increase the zoom only until a specified maximum level
    if(newZoomLevel <= config["defaults"]["max"]){
        changeZoomLevel(newZoomLevel);
    }
}

function zoomOut(){
    var defaultLevel = config["defaults"]["out"];
    var newZoomLevel = zoomLevel - defaultLevel;
    // Decrase the zoom only until a specified minimum level
    if(newZoomLevel >= 1){
        changeZoomLevel(newZoomLevel);
    }
}