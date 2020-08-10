# AssistiveCam

Electron-based camera viewer released under the [MIT License.](LICENSE)

With its strong focus towards visually impaired users, AssistiveCam is the only heavily optimized camera viewer that is available as Free and Open Source software for this group of people as of right now. Getting started with the software may not be very straight-forward for the majority of users, but will become very intuitive over time. 

AssistiveCam is operated entirely by commands, of which combinations may also be mapped to keyboard shortcuts. This system allows for quick and precise control over all relevant parameters and takes away the overhead from your camera control, allowing you to focus on your actual work a lot better. 

Features of the software include color filters, text-to-speech information, a touch-screen-friendly GUI (if needed), an alignment utility and, of course, zoom. 

Please note that AssistiveCam is still under development. To customize any configuration, you will have to build the software yourself. However, using the defaults is likely fine for most people. 

## Installation and usage

AssistiveCam requires nodejs, npm and electron to be installed on your computer. I strive to use as few third-party libraries as absolutely needed for this project.

```
git clone https://github.com/assistivetool/assistivecam/
cd assistivecam
npm install
npm start
```

## Default shortcuts

* ```:``` to bring up a command prompt, like in the vim editor
* ```f``` to cycle through built-in image filters
* ```c``` to cycle through all available cameras
* ```r``` to rotate the view by 90 degrees
* ```i``` to hide the info tooltip
* ```+``` to zoom in
* ```-``` to zoom out
* ```p``` to freeze the image
* ```s``` to instantly save a snapshot of the current canvas (without effects)
* ```m``` to flip the view horizontally
* ```l``` to toggle an alignment help
* ```g``` to toggle the gui
* ```t``` to toggle text-to-speech output

## List of commands

To see an up-to-date list of commands, check out [the command documentation!](COMMANDS.md)