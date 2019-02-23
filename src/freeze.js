var inFreeze = false;

function toggleFreeze(){
    if(inFreeze == false){
        feed.pause();
        inFreeze = true;
    } else {
        feed.play();
        inFreeze = false;
    }
}

// Listen for key presses in order to react to them
document.addEventListener('keydown', function(event){
    if(event.keyCode == 80){ // p, for picture
        toggleFreeze();
    }
});