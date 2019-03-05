var commandEvents = config["events"];
var eventList = Object.keys(commandEvents);

function registerEventCommandListeners(){
    // Make sure events are registered
    if(eventList.length > 0){
        // Register corresponding listeners to catch the events
        for(i = 0; i < eventList.length; i++){
            var registerEvent = eventList[i];
            var registerCommands = commandEvents[registerEvent];

            // Attach the commands
            event.on(registerEvent, function(){
                executeCommand(registerCommands);
            });
        }
    }
}

// Run this on startup
registerEventCommandListeners();