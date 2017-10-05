const path = require('path')
const {BrowserWindow} = require('electron')
const {EventEmitter} = require('events')

class Index extends EventEmitter {
  constructor() {
    super()
    this.win = new BrowserWindow({
      alwaysOnTop: true,
      skipTaskbar: true,
      show: false,
      frame: false,
      transparent: true,
    })
    this.win.loadURL(path.join(__dirname, 'index.html'))
    this.on('message', data => {
      this.win.webContents.send('message', data)
    })
  }
}

module.exports = Index
