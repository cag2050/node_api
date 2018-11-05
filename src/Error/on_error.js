// 当一个异步方法被一个 EventEmitter 对象调用时，错误会被分发到对象的 'error' 事件上。
// 'error' 事件机制的使用常见于基于流和基于事件触发器的 API，它们本身就代表了一系列的异步操作（相对于要么成功要么失败的单一操作）。

const net = require('net');
const connection = net.connect(9015, 'localhost');
// const connection = net.connect('localhost');

// 添加一个 'error' 事件句柄到一个流：
connection.on('error', (err) => {
    // 如果连接被服务器重置，或无法连接，或发生任何错误，则错误会被发送到这里。
    console.error(err);
});

connection.pipe(process.stdout);