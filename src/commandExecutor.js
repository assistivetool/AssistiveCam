var commandBoxActive = false;

function executeCommand(command){
    // Parsing the command
    command = command.split(" ");
                        
    // Try to perform the action
    switch(command[0]){
        case "command":
            // Toggle the command box
            commandBox.value = ""; // Clear
            if(commandBoxActive){
                commandBoxActive = false;
                commandBox.className = "invisible";
                canvas.focus();
            } else {
                commandBoxActive = true;
                commandBox.className = "";
                commandBox.focus();
            }
        break;
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
        case "fr":
        case "freeze":
            toggleFreeze();
        break;
        case "snap":
        case "snapshot":
            saveSnapshot();
        break;
        case "rotate":
            rotate90deg();
        break;
        case "c":
        case "camera":
            switch(command[1]){
                case "c":
                case "cycle":
                    cycleCamera();
                break;
                default:
                    // TODO
                break;
            }
        break;
        case "i":
        case "toggleinfo":
            toggleInfoTextVisibility();
        break;
        case "f":
        case "filter":
            switch(command[1]){
                case "c":
                case "cycle":
                    cycleFilter();
                break;
                default:
                    // TODO
                break;
            }
        break;
        default:
            infoText.innerHTML = "Command " + command[0] + " not found!";
            console.error("Unknown command " + command[0]);
        break;
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
        if(event.key == "Escape"){
            commandBox.value = ""; // Clear the thing
            commandBoxActive = false;
            commandBox.className = "invisible";
            canvas.focus(); // Go out of focus!
        }

        if(event.key == "Enter"){
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