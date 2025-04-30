const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
        width: 350,
        height: 490,
        resizable: true,
        webpreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.setMenuBarVisibility(false)
    win.loadFile('index.html')
    win.webContents.on('did-finish-load', ()=>{
        win.webContents.insertCSS('body{ overflow: hidden; }')
    })
}

app.whenReady().then(createWindow)