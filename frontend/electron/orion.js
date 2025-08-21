const { app, BrowserWindow, screen, ipcMain } = require('electron')
const path = require('path')
 
let mainWin

function createWindow() {
    // 获取桌面可视区域大小
    const { width, height } = screen.getPrimaryDisplay().workAreaSize
    mainWin = new BrowserWindow({
        width: width,
        height: height,
        title: 'Orion',
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
    })

    const isDev = !app.isPackaged

    if (isDev) {
        // 开发模式加载 Vite
        mainWin.loadURL('http://localhost:5173')  
    } else {
        // 打包后加载
        mainWin.loadFile(path.join(__dirname, 'dist/renderer/index.html'))  
    }
}

app.whenReady().then(createWindow)

ipcMain.on('window-minimize', () => {
    mainWin.minimize()
})

ipcMain.on('window-toggle-maximize', () => {
    if (mainWin.isMaximized()) {
        mainWin.unmaximize()
    } else {
        mainWin.maximize()
    }
    mainWin.webContents.send('window-maximized-status', mainWin.isMaximized())
})

ipcMain.on('window-close', () => {
  mainWin.close();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})