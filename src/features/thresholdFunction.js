var thresholdFunctionActive = false;
var thresholdFunctionThreshold = config["thresholdFunction"]["threshold"];
var foregroundThresholdColor = config["thresholdFunction"]["foreground"];
var backgroundThresholdColor = config["thresholdFunction"]["background"];

// This code was stolen from Roko C. Buljan on StackOverflow: https://stackoverflow.com/a/37512944
function applyThresholdFunction(){
    if(thresholdFunctionActive){
        var w = ctx.canvas.width;
        var h = ctx.canvas.height;

        var d = ctx.getImageData(0, 0, w, h);

        for(var i = 0; i < d.data.length; i += 4){
            d.data[i] = d.data[i+1] = d.data[i+2] = d.data[i+1] > thresholdFunctionThreshold ? 255 : 0;
        }

        ctx.putImageData(d, 0, 0);
    }
}