const path = require('path')
const {BrowserWindow} = require('electron')

class Index {
  constructor() {
    this.win = new BrowserWindow({
      alwaysOnTop: true,
      skipTaskbar: true,
      show: false,
      frame: false,
      transparent: true,
    })
    this.win.loadURL(path.join(__dirname, 'index.html'))
  }

  message(item) {
    this.win.webContents.send('message', item)
  }
}

module.exports = Index
