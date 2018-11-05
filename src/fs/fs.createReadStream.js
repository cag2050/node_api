const fs = require('fs')

let data = ''
let readStream = fs.createReadStream("从此文件读内容.txt")

// 事件：data、end、error
readStream.on('data', (chunk) => {
    data += chunk
})

readStream.on('end', () => {
    console.log(data);
})

readStream.on('error', (err) => {
    console.log(err);
})
