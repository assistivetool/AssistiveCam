// Capture settings
var settingContrast = "100%";
var settingSaturation = "100%";
var settingBrightness = "100%";
var settingHueRotation = "0deg";

function updateStyling(revert = false){
    if(!revert){
        // Build the CSS filter string
        var appliedCSSFilters = "contrast(" + settingContrast + ")";
        appliedCSSFilters += " saturate(" + settingSaturation + ")";
        appliedCSSFilters += " brightness(" + settingBrightness + ")";
        appliedCSSFilters += " hue-rotate(" + settingHueRotation + ")";
        
        // Finally, apply the new CSS to the canvas
        console.log(appliedCSSFilters);
        canvas.style.filter = appliedCSSFilters;
    } else {
        // Remove the custom settings
        canvas.style.filter = null;
    }
}

// Handle the image-settings command passed in by the commandExecutor
function imageStyleCommandHandler(command){
    switch(command[1]){
        case "b":
        case "bright":
        case "brightness":
            settingBrightness = command[2] + "%";
            updateStyling();
        break;
        case "c":
        case "contrast":
            settingContrast = command[2] + "%";
            updateStyling();
        break;
        case "s":
        case "saturate":
        case "saturation":
            settingSaturation = command[2] + "%";
            updateStyling();
        break;
        case "hr":
        case "hue-rotation":
            settingHueRotation = command[2] + "deg";
            updateStyling();
        break;
        case "r":
        case "revert":
        case "remove":
            updateStyling(true);
        break;
        default:
            infoText.innerHTML = "Unknown setting " + command[1];
        break;
    }
}