const {app, BrowserWindow} = require("electron");
const path = require("path");

// Global window reference
let win;

function createWindow() {
    win = new BrowserWindow({ 
        width: 1280,
        height: 720,
        icon: path.join(__dirname, "assets/icon.png"),
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.setMenu(null);
    win.loadFile("src/index.html");
    win.on("closed", () => {
        // Dereference the window object
        win = null
    });
    // Enable accessibility on linux automatically because Electron does not know when assistive technology is running
    if(process.platform == "linux") {
        app.accessibilitySupportEnabled = true;
    }
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    app.quit();
});

app.on("activate", () => {
    if(win === null) {
        createWindow();
    }
});
