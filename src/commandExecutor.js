var commandBoxActive = false;

function executeCommand(command){
    // Parsing the command
    command = command.split(" ");
                        
    // Try to perform the action
    switch(command[0]){
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
            console.error("Unknown command " + command[0]);
        break;
    }    
}

//Listen to key events
document.addEventListener("keydown", function(event){
    var keys = config["shortcuts"];
    // Check if a config entry exists
    if(keys[event.key] && !commandBoxActive){
        var action = keys[event.key];
        
        // Send it to the listener
        executeCommand(action);
    }
});