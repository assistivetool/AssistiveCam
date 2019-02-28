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

function changeLineThickness(height = "0.5"){
    line.style.height = height + "em";
}

function changeLinePosition(position = 50){
    line.style.top = position + "%";
}

function changeLineColor(color = "000"){
    line.style.backgroundColor = "#" + color;
}

function revertLineChanges(){
    line.style = null;
}