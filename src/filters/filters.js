// All available filters
const filters = [
    "default",
    "grayscale",
    "sepia",
    "high-contrast",
    "inverted",
    "very-bright",
    "low-light"
];
var selectedFilter = 0;

function applyFilter(filter){
    // Make sure the filter exists
    if(filter < filters.length && filter >= 0){
        nextFilter = filters[filter];

        // Apply the filter to the canvas
        canvas.className = "viewer " + nextFilter;
        selectedFilter = filter;

        // Show the filter name in infoText
        infoText.innerHTML = nextFilter;
    }
}

function cycleFilter(){
    // Get the next filter, avoid doing the first one twice
    if((selectedFilter + 1) >= filters.length){
        selectedFilter = 0;
    } else {
        selectedFilter += 1;
    }

    applyFilter(filters[selectedFilter]);
}