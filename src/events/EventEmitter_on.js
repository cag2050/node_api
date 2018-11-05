const EventEmitter = require('events')

class MyEmitter extends EventEmitter {

}

let myEmitter = new MyEmitter()
myEmitter.on('test', (value) => {
    console.log('test事件被触发');
    console.log(`传入的值为：${value}`);
})
myEmitter.emit('test', 'test1')
myEmitter.emit('test', 'test2')
