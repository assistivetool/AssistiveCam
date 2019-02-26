![AssistiveCam logo](assets/logo.png)

Electron based camera viewer released under the [MIT License](LICENSE) designed for usage only with keyboard shortcuts or commands, so the camera image always takes up most of your precious screen space.

## Installation and usage

AssistiveCam requires nodejs, npm and electron to be installed on your computer. I strive to use as few third-party libraries as absolutely needed for this project.

```
git clone https://github.com/assistivetool/assistivecam/
cd assistivecam
npm install
npm start
```

## Shortcuts

* ```:``` to bring up a command prompt, like in the vim editor
* ```f``` to cycle through built-in image filters
* ```c``` to cycle through all available cameras
* ```r``` to rotate by 90 degrees
* ```i``` to hide the info tooltip
* ```+``` to zoom in
* ```-``` to zoom out
* ```p``` to freeze the image
* ```s``` to instantly save a snapshot of the current canvas (without effects)
* ```l``` to toggle an alignment help

## List of commands

To see an up-to-date list of commands, check out [the documentation!](COMMANDS.md)