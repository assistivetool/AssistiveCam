// Handle configuration changes
function configChangeCommand(command){
    switch(command[1]){
        case "value":
            config[command[2]] = command[3];
            changeInfoText("Changed '" + command[2] + "' to '" + config[command[2]] + "'");
        break;
        default:
            changeInfoText("Unknown operation " + command[1]);
        break;
    }
}