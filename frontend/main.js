const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    })

    const isDev = !app.isPackaged

    if (isDev) {
        win.loadURL('http://localhost:5173')  // 开发模式加载 Vite
    } else {
        win.loadFile(path.join(__dirname, 'dist/renderer/index.html'))  // 打包后加载
    }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})