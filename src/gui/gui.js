const gui = document.getElementById("gui");
var guiVisible = false;

function createGUI(){
    // Create GUI elements dynamically
    gui.innerHTML = "";
    for(i = 0; i < guiConfig.length; i++){
        event.emit("guiElementCreate", guiConfig[i]);
        var button = document.createElement("button");
        // Set the image and label
        button.innerHTML = "<img src=\"" + guiConfig[i]["picture"] + "\" alt=\"" + guiConfig[i]["label"] + "\">";
        // Attach the configured command
        button.setAttribute("onmousedown", "executeCommand(\"" + guiConfig[i]["command"] + "\");");    

        // Add the button to the GUI element
        gui.appendChild(button);
    }
    event.emit("guiCreate");
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