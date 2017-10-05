const {EventEmitter} = require('events')

class Index extends EventEmitter {
  constructor() {
    super()
    console.log('ready')
    this.on('message', data => {
      console.log(data)
    })
  }
}

module.exports = Index
