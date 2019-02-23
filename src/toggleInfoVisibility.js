var infoVisible = true;

function toggleInfoTextVisibility(){
    // Toggle the visibility of the info tooltip
    if(infoVisible == true){
        infoText.className = "invisible";
        infoVisible = false;
    } else {
        infoText.className = "";
        infoVisible = true;
    }
}

// Listen for key presses in order to react to them
document.addEventListener('keydown', function(event){
    if(event.keyCode == 73){ // i, for info
        toggleInfoTextVisibility();
    }
});