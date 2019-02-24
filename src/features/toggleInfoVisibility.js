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