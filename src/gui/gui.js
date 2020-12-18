const gui = document.getElementById("gui");
var guiVisible = false;

// Utility variable for stepless gui elements
var mouseDown = false;

function createGUI(){
    // Create GUI elements dynamically
    gui.innerHTML = "";
    for(i = 0; i < guiConfig.length; i++){
        var item = guiConfig[i];
        event.emit("guiElementCreate", item);
        var button = document.createElement("button");
        // Set the image and label
        button.innerHTML = "<img src=\"" + item["picture"] + "\" alt=\"" + item["label"] + "\">";
        
        // Attach the configured command
        if(item["property"] != "stepless"){
            // Just activate once on click
            button.setAttribute("onmousedown", "mouseDown = true; executeCommand(\"" + item["command"] + "\");");    
        } else {
            // Continuously activate while pressed for e.g. stepless zoom
            button.setAttribute("onmousedown", "mouseDown = true; executeContinuousMouseCommand(\"" + item["command"] + "\");");
        }
        
        button.setAttribute("onmouseup", "mouseDown = false;");
        // Add the button to the GUI element
        gui.appendChild(button);
    }
    event.emit("guiCreate");
}

// Utility function that repeatedly executes commands while mouse is still pressed
function executeContinuousMouseCommand(command){
    executeCommand(command);
    var interval = setInterval(() => {
        // Run the command if mouse is still pressed
        if(mouseDown){
            executeCommand(command);
        } else {
            // Otherwise clear the interval
            clearInterval(interval);
        }
    }, 80);
}

// Create the GUI on startup
createGUI();

function toggleGUIVisibility(){
    if(guiVisible){
        gui.className = "invisible";
        guiVisible = false;
        event.emit("guiOff");
    } else {
        gui.className = "";
        guiVisible = true;
        event.emit("guiOn");
    }
}