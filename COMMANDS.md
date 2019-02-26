# AssistiveCam commands

AssistiveCam is controlled by commands. Simple keyboard shortcuts for all commands can be easily set up in the config file. Below is an overview of the available commands, which can also be chained together using the "&&" operator.

| Command                       | Aliases       | Description                   |
|-------------------------------|---------------|-------------------------------|
| command                       |               | Show a command prompt         |
| zoom <level/in/out>           | z <level/i/o> | Zoom into the image           |
| freeze [seconds]              | fr            | Freeze the image              |
| snapshot                      | snap          | Save a snapshot to disk       |
| rotate                        |               | Rotate the view by 90 degrees |
| camera <cycle/cam> [arg]      | c <c/cam>     | Use a different camera        |
| toggleinfo                    | i             | Hide/show the info text       |
| filter <cycle/no.>            | f <cycle/no.> | Apply a filter profile        |
| line [position/height] [arg]  | l [p/h]       | Show alignment help line      |
| image-style <setting> <arg>   | is <s> <arg>  | Change an image filter        |

## Examples

```snap&&freeze 2```

This command takes a snapshot, saves it to disk and then freezes the current image as a preview.

```f 1```

By default, this applies the grayscale filter profile.

```is i 100&is s 0```

Inverts the image and sets it grayscale.

```z 2```

Applies zoom level 2