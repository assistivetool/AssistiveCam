// Capture settings
var settingContrast = 0;
var settingSaturation = 0;
var settingBrightness = 0;
var settingHueRotation = 0;
var settingInvert = 0;

// Load the default styling from the config
function setStylingDefaults(){
    settingContrast = config["styling"]["contrast"] + "%";
    settingSaturation = config["styling"]["saturate"] + "%";
    settingBrightness = config["styling"]["brightness"] + "%";
    settingHueRotation = config["styling"]["hue-rotate"] + "deg";
    settingInvert = config["styling"]["invert"] + "%";
}

// Run once on application start
setStylingDefaults();

function updateStyling(revert = false){
    if(!revert){
        // Build the CSS filter string
        var appliedCSSFilters = "contrast(" + settingContrast + ")";
        appliedCSSFilters += " saturate(" + settingSaturation + ")";
        appliedCSSFilters += " brightness(" + settingBrightness + ")";
        appliedCSSFilters += " hue-rotate(" + settingHueRotation + ")";
        appliedCSSFilters += " invert(" + settingInvert + ")";

        // Finally, apply the new CSS to the canvas
        console.log(appliedCSSFilters);
        canvas.style.filter = appliedCSSFilters;
    } else {
        // Remove the custom settings
        setStylingDefaults();
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
        case "i":
        case "invert":
            settingInvert = command[2] + "%";
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