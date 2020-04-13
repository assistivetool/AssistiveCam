var config = {
    "defaults": {
        "in": 0.2,
        "out": 0.2,
        "max": 6
    },
    "shortcuts": {
        "s": "snapshot&&freeze 2",
        "r": "rotate 90",
        "+": "zoom in",
        "-": "zoom out",
        "i": "toggleinfo",
        "c": "camera cycle",
        "p": "freeze",
        "f": "filter cycle",
        ":": "command",
        "l": "line",
        "g": "gui",
        "t": "tts",
        "ArrowDown": "line next",
        "ArrowUp": "line previous",
    },
    "keys": {
        "abort": "Escape",
        "send": "Enter"
    },
    "startupCommands": [],
    "aliasCommands": {
        "bw": "image-style saturation 0",
        "invert": "image-style invert 100",
        "sepia": "image-style sepia 100" 
    },
    "tts": true,
    "tts-command": "spd-say -r 90",
    "node-binary": "/usr/bin/nodejs",
    "events": {}
}