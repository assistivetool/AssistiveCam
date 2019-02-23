const {app, BrowserWindow} = require("electron");

// Global window reference
let win;

function createWindow() {
    win = new BrowserWindow({ 
        width: 1280,
        height: 720
    });
    win.setMenu(null);
    win.loadFile("src/index.html");
    win.on("closed", () => {
        // Dereference the window object
        win = null
    });
}

app.on("ready", createWindow)

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    app.quit();
});

app.on("activate", () => {
    if(win === null) {
        createWindow();
    }
});