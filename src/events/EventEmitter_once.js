const EventEmitter = require('events')
console.log(EventEmitter);

class MyEmitter extends EventEmitter {

}

let myEmitter = new MyEmitter()
// 注册的事件，只会被触发一次
myEmitter.once('test', (value) => {
    console.log('test事件被触发');
    console.log(`传入的值为：${value}`);
})
myEmitter.emit('test', 'test1')
myEmitter.emit('test', 'test2')

