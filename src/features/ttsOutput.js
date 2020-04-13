// Text to speech output for the infotext display
// Disabled by default - can be overrideen by putting "tts" in startupCommands
ttsEnabled = false;

// Set up ShellJS for use with electron
if(config["tts"] === true){
    ShellJS.config.execPath = config["node-binary"];
}

function ttsOutput(text){
	// Only output if feature enabled
	if(ttsEnabled && config["tts"] === true){
		ShellJS.exec(config["tts-command"] + ' "' + text + '"', {async:true, silent:true, fatal:true});
	}
}

function toggleTTSOutput(){
	if(ttsEnabled){
		// Speak that it's turning off
		changeInfoText("TTS disabled");
		ttsEnabled = false;
	} else {
		ttsEnabled = true;
		changeInfoText("TTS enabled");
	}
}