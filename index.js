const Util = require('../../Util')
const {EventEmitter} = require('events')
const setting = require('./settings')
const BouyomiChan = require('./software/BouyomiChan')
const Softalk = require('./software/Softalk')

class Index extends EventEmitter {
  constructor() {
    super()
    switch (setting.software) {
      case 'BouyomiChan': this.software = new BouyomiChan(); break
      case 'Softalk':     this.software = new Softalk();     break
      default: Util.showError('ソフトが正しくありません')
    }
    this.on('message', data => {
      this.software.message(data.message)
    })
  }
}

module.exports = Index
