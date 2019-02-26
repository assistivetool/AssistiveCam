const gui = document.getElementById("gui");

// Create GUI elements dynamically
for(i = 0; i < guiConfig.length; i++){
    var button = document.createElement("button");
    // Set the image and label
    button.innerHTML = "<img src=\"" + guiConfig[i]["picture"] + "\" alt=\"" + guiConfig[i]["label"] + "\">";
    // Attach the configured command
    button.setAttribute("onclick", "executeCommand(\"" + guiConfig[i]["command"] + "\");");    

    // Add the button to the GUI element
    gui.appendChild(button);
}