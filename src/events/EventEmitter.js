const EventEmitter = require('events')

class MyEmitter extends EventEmitter {

}

let myEmitter = new MyEmitter()
myEmitter.on('test', () => {
    console.log('test事件被触发');
})
myEmitter.emit('test')
