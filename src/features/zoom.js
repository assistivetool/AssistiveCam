var zoomLevel = 1.00;

// Zoom into the center by default
var horizontalOffset = 0.5;
var verticalOffset = 0.5;

// Centerzoom by default
function changeZoomLevel(level = zoomLevel){
    level = Number(Number(level).toPrecision(2));

    event.emit("zoom", level);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width * horizontalOffset, canvas.height * verticalOffset);
    ctx.scale(level, level);
    ctx.translate(-canvas.width * horizontalOffset, -canvas.height * verticalOffset);
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

// Change the offset while zoomed, enlarge different parts
function moveHorizontal(left = true){
    // Determine the destination to move into
    if(left){
        var newValue = horizontalOffset - 0.1;
    } else {
        var newValue = horizontalOffset + 0.1;
    }
    
    newValue = Number(Number(newValue).toPrecision(1));

    // Make sure it stays in the natural bounds
    if(newValue >= 0.0 && newValue <= 1.0){
        // Perform the action
        horizontalOffset = newValue;
        changeZoomLevel(zoomLevel);
    }
}

function moveVertical(key = false, up = true){
    // Ignore if the line is visible, move that instead
    if(key && lineVisible){
        return;
    }
    
    if(up){
        var newValue = verticalOffset - 0.1;
    } else {
        var newValue = verticalOffset + 0.1;
    }

    newValue = Number(Number(newValue).toPrecision(1));

    // Make sure it stays in the natural bounds
    if(newValue >= 0.0 && newValue <= 1.0){
        // Perform the action
        verticalOffset = newValue;
        changeZoomLevel(zoomLevel);
    }
}

// Easily reset zoom properties
function resetZoom(){
    zoomLevel = 1.0;
    horizontalOffset = 0.5;
    verticalOffset = 0.5;
    changeZoomLevel();
}