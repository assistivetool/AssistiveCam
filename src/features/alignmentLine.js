var lineVisible = false;
var linePosition = 50;

function toggleLineVisibility(){
    // Toggle the visibility of the line
    if(lineVisible == true){
        line.className = "invisible";
        lineVisible = false;
        event.emit("line", false);
    } else {
        line.className = "";
        lineVisible = true;
        event.emit("line", true);
    }
}

function changeLineThickness(height = "0.5"){
    line.style.height = height + "em";
    event.emit("line-thickness", height);
}

function changeLinePosition(position = 50){
    line.style.top = position + "%";
    linePosition = position;
    event.emit("line-position", position);
}

function changeLineColor(color = "000"){
    line.style.backgroundColor = "#" + color;
    event.emit("line-color", color);
}

function revertLineChanges(){
    line.style = null;
}