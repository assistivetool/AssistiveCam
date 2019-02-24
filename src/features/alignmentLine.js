var lineVisible = true;

function toggleLineVisibility(){
    // Toggle the visibility of the line
    if(lineVisible == true){
        line.className = "invisible";
        lineVisible = false;
    } else {
        line.className = "";
        lineVisible = true;
    }
}