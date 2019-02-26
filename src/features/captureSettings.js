// Capture settings
var settingContrast = 0;
var settingSaturation = 0;
var settingBrightness = 0;
var settingHueRotation = 0;
var settingInvert = 0;
var settingSepia = 0;

// Load the default styling from the config
function setStyling(profile = 0){
    settingContrast = profiles[profile]["contrast"] + "%";
    settingSaturation = profiles[profile]["saturate"] + "%";
    settingBrightness = profiles[profile]["brightness"] + "%";
    settingHueRotation = profiles[profile]["hue-rotate"] + "deg";
    settingInvert = profiles[profile]["invert"] + "%";
    settingSepia = profiles[profile]["sepia"] + "%";
}

// Run once on application start
setStyling();
updateStyling();

function updateStyling(revert = false){
    if(!revert){
        // Build the CSS filter string
        var appliedCSSFilters = "contrast(" + settingContrast + ")";
        appliedCSSFilters += " saturate(" + settingSaturation + ")";
        appliedCSSFilters += " brightness(" + settingBrightness + ")";
        appliedCSSFilters += " hue-rotate(" + settingHueRotation + ")";
        appliedCSSFilters += " invert(" + settingInvert + ")";
        appliedCSSFilters += " sepia(" + settingSepia + ")";

        // Finally, apply the new CSS to the canvas
        console.log(appliedCSSFilters);
        canvas.style.filter = appliedCSSFilters;
    } else {
        // Remove the custom settings
        setStyling();
        updateStyling();
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
        case "sa":
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
        case "i":
        case "invert":
            settingInvert = command[2] + "%";
            updateStyling();
        break;
        case "se":
        case "sepia":
            settingSepia = command[2] + "%";
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