var lineVisible = false;

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

function changeLinePosition(position = 50){
    line.style = "bottom: " + position + "%";
}