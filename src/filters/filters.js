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

// Listen for key presses in order to react to them
document.addEventListener('keydown', function(event){
    if(event.keyCode == 70){ //f for Filter
        // Get the next filter, avoid doing the first one twice
        if((selectedFilter + 1) >= filters.length){
            selectedFilter = 0;
        } else {
            selectedFilter += 1;
        }

        nextFilter = filters[selectedFilter];
        // Apply the filter to the canvas
        canvas.className = "viewer " + nextFilter;
    }
});