var imageRotation = 0;
var mirrored = false;

function rotateView(rotation = 90){
    newRotation = imageRotation + rotation;
    // Reset rotation if we're going too far
    if(newRotation >= 360){
        newRotation = 0;
    }

    changeInfoText("Rotated by " + newRotation + " degrees");
    canvas.style.transform = "rotate(" + newRotation + "deg)";
    imageRotation = newRotation;

    event.emit("rotate", imageRotation);

    // Reset rotation properties on zero
    if(imageRotation == 0 && !mirrored){
        canvas.style.transform = "inherit";
    }
}

function mirrorView(){
    // Keep the view rotated
    rotateView(0);

	if(mirrored == false){
        canvas.style.transform = "scale(-1, 1)";
        event.emit("flip", true);
        mirrored = true;
	} else {
        canvas.style.transform = "scale(1, 1)";
        event.emit("flip", false);
        mirrored = false;
    }

    changeInfoText("View flipped");
}