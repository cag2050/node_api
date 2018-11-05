const fs = require('fs')

let data = '写入内容'
let writeStream = fs.createWriteStream('写内容进此文件.txt')

// 流程：write方法、end方法、finish事件、error事件
writeStream.write(data, 'UTF8')

writeStream.end()

writeStream.on('finish', () => {
    console.log('写入完成');
})

writeStream.on('error', (err) => {
    console.log(err);
})

