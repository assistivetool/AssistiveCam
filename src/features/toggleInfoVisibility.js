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

// Allow users to change the background color of the info tooltip for better readability
function changeInfoTextBackgroundColor(color = "transparent"){
    infoText.style.backgroundColor = color;
}