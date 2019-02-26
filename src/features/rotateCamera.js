var imageRotation = 0;

function rotate90deg(){
    newRotation = imageRotation + 90;
    // Reset rotation if we're going too far
    if(newRotation >= 360){
        newRotation = 0;
    }

    canvas.style.transform = "rotate(" + newRotation + "deg)";
    imageRotation = newRotation;
}