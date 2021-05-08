var thresholdFunctionActive = false;
var thresholdFunctionThreshold = config["thresholdFunction"]["threshold"];
var foregroundThresholdColor = [255, 255, 255];
var backgroundThresholdColor = [0, 0, 0];

setForegroundThresholdColor(config["thresholdFunction"]["foreground"]);
setBackgroundThresholdColor(config["thresholdFunction"]["background"]);

function setForegroundThresholdColor(hex){
    foregroundThresholdColor = hexToRGB(hex);
    console.log(foregroundThresholdColor);
}

function setBackgroundThresholdColor(hex){
    backgroundThresholdColor = hexToRGB(hex);
}

// This code was partially stolen from Roko C. Buljan on StackOverflow: https://stackoverflow.com/a/37512944
function applyThresholdFunction(){
    if(thresholdFunctionActive){
        var w = ctx.canvas.width;
        var h = ctx.canvas.height;

        var d = ctx.getImageData(0, 0, w, h);

        for(var i = 0; i < d.data.length; i += 4){
            // Set threshold
            // r, g, b become the same value
            // compare them to the threshold value
            // if exceeded set them to full/none -> black/white
            d.data[i] = d.data[i+1] = d.data[i+2] = d.data[i+1] > thresholdFunctionThreshold ? 0 : 255;
        
            // Recolor pixels
            if(d.data[i] === 0){
                d.data[i] = foregroundThresholdColor[0];
                d.data[i+1] = foregroundThresholdColor[1];
                d.data[i+2] = foregroundThresholdColor[2];
            } else {
                d.data[i] = backgroundThresholdColor[0];
                d.data[i+1] = backgroundThresholdColor[1];
                d.data[i+2] = backgroundThresholdColor[2];
            }
        }

        ctx.putImageData(d, 0, 0);
    }
}

function hexToRGB(hex){
    let r, g, b = 0;
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
    r = parseInt(result[1], 16),
    g = parseInt(result[2], 16),
    b = parseInt(result[3], 16)

    return [+r, +g, +b];
}