var commandBoxActive = false;

function executeCommand(action){
    // Parsing the command
    action = action.replace(":", "");

    // Split commands into multiple actions
    commands = action.split("&&");

    // Iterate through the different commands
    for(i = 0; i < commands.length; i++){
        command = commands[i];
        command = command.split(" ");
                            
        // Try to perform the action
        switch(command[0]){
            // Toggle the command box
            case "command":
                commandBoxActive = true;
                commandBox.className = "";
                commandBox.focus();
                commandBox.value = ""; // Clear
            break;
            // Zoom
            case "z":
            case "zoom":
                switch(command[1]){
                    case "i":
                    case "in":
                        zoomIn();
                    break;
                    case "o":
                    case "out":
                        zoomOut();
                    break;
                    default:
                        var newLevel = command[1];
                        changeZoomLevel(newLevel);
                    break;
                }
            break;
            // Freeze the image
            case "fr":
            case "freeze":
                if(command[1]){
                    toggleFreeze(command[1] * 1000);
                } else {
                    toggleFreeze(-1);
                }
            break;
            // Save a snapshot
            case "snap":
            case "snapshot":
                saveSnapshot();
            break;
            // Rotate the image by 90 degrees
            case "rotate":
                rotate90deg();
            break;
            // Cycle through the available cameras
            case "c":
            case "camera":
                switch(command[1]){
                    case "c":
                    case "cycle":
                        cycleCamera();
                    break;
                    default:
                        // The user can directly specify the camera to jump to
                        useCamera(command[2]);
                    break;
                }
            break;
            // Hide or show the info text
            case "i":
            case "toggleinfo":
                toggleInfoTextVisibility();
            break;
            // Apply a filter or cycle through the list
            case "f":
            case "filter":
                switch(command[1]){
                    case "c":
                    case "cycle":
                        cycleFilter();
                    break;
                    default:;
                        applyFilter(command[1]);
                    break;
                }
            break;
            // Show the alignment line
            case "l":
            case "line":
                switch(command[1]){
                    case "p":
                    case "position":
                        changeLinePosition(command[2]);
                    break;
                    case "t":
                    case "thickness":
                    case "h":
                    case "height":
                        changeLineThickness(command[2]);
                    break;
                    case "c":
                    case "color":
                    case "colour":
                        changeLineColor(command[2]);
                    break;
                    default:
                        toggleLineVisibility();
                    break;
                }
            break;
            // Change the appearance of the output image
            case "is":
            case "image-setting":
            case "image-style":
                imageStyleCommandHandler(command);
            break;
            // Hide/show the gui
            case "g":
            case "gui":
                toggleGUIVisibility();
            break;
            case "rec":
            case "record":
            case "recording":
                toggleVideoRecording();
            break;
            default:
                // Check if there's an alias set
                if(config["aliasCommands"][command[0]]){
                    // Run the function again with the alias
                    executeCommand(config["aliasCommands"][command[0]]);
                } else {
                    infoText.innerHTML = "Command " + command[0] + " not found!";
                    console.error("Unknown command " + command[0]);
                }
            break;
        }
    }
        
}

//Listen to key events
document.addEventListener("keydown", function(event){
    var keys = config["shortcuts"];
    // Check if a config entry exists and the command box is currently not active
    if(keys[event.key] && !commandBoxActive){
        var action = keys[event.key];
        
        // Send it to the listener
        executeCommand(action);
    }
});

// Key events on the command input
commandBox.addEventListener("keydown", function(event){
    // Only fire if we're currently active
    if(commandBoxActive){
        if(event.key == config["keys"]["abort"]){
            commandBox.value = ""; // Clear the thing
            commandBoxActive = false;
            commandBox.className = "invisible";
            canvas.focus(); // Go out of focus!
        }

        if(event.key == config["keys"]["send"]){
            var command = commandBox.value;
            commandBox.value = ""; // Clear the thing
            commandBoxActive = false;
            commandBox.className = "invisible";
            canvas.focus(); // Go out of focus!

            // Execute the command
            executeCommand(command);
        }
    }
});

// Execute startup commands
if(config["startupCommands"].length != 0){
    for(i = 0; i <= config["startupCommands"].length; i++){
        executeCommand(config["startupCommands"][i]);
    }
}