var inFreeze = false;

function toggleFreeze(duration = -1){
    if(inFreeze == false){
        feed.pause();
        inFreeze = true;
        if(duration > 0){
            window.setTimeout(function(){
                toggleFreeze();
            }, duration);
        }
    } else {
        feed.play();
        inFreeze = false;
    }
}

function saveSnapshot(){
    // Get the canvas content
    image = canvas.toDataURL("png");

    // Prepare the data
    base64Data = image.replace(/^data:image\/png;base64,/, "");
    base64Data += base64Data.replace('+', ' ');
    binaryData = new Buffer(base64Data, 'base64').toString('binary');

    var d = new Date();
    var filename = "snap" + d.getTime() + ".png";

    // Write to disk
    fs.writeFile(filename, binaryData, "binary", function(err) {
        console.log(err);
    });

    infoText.innerHTML = "Snapshot saved";
}