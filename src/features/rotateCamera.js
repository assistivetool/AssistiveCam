var imageRotation = 0;

function rotate90deg(){
    newRotation = imageRotation + 90;
    // Reset rotation if we're going too far
    if(newRotation >= 360){
        newRotation = 0;
    }

    changeInfoText("Rotated by " + newRotation + " degrees");
    canvas.style.transform = "rotate(" + newRotation + "deg)";
    imageRotation = newRotation;

    event.emit("rotate", imageRotation);
}

function mirrorView(){
	if(canvas.className == "viewer default mirrored"){
        canvas.className = "viewer default";
        event.emit("flip", true);
	} else {
        canvas.className = "viewer default mirrored";
        event.emit("flip", false);
	}
    changeInfoText("View flipped");
}