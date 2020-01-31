// All available filters
var selectedFilter = 0;

function applyFilter(filter){
    // Make sure the filter exists
    if(profiles[filter]){
        // Apply the filter to the canvas
        setStyling(filter);
        updateStyling();
        selectedFilter = filter;

        // Show the filter name in infoText
        changeInfoText("Profile: " + profiles[filter]["name"]);
    } else {
        changeInfoText("Unknown profile");
    }
}

function cycleFilter(){
    // Get the next filter, avoid doing the first one twice
    if((selectedFilter + 1) >= profiles.length){
        nextFilter = 0;
    } else {
        nextFilter = selectedFilter + 1;
    }

    applyFilter(nextFilter);
}