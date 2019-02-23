const {app, BrowserWindow} = require("electron")

// Global window reference
let win

function createWindow () {
    win = new BrowserWindow({ 
        width: 1280,
        height: 720
    })
    win.loadFile("index.html")
    win.webContents.openDevTools()
    win.on("closed", () => {
      // Dereference the window object
      win = null
    })
}

app.on("ready", createWindow)

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
      app.quit()
    }
})