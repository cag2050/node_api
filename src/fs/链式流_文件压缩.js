const fs = require('fs')
const zlib = require('zlib')

let readStream = fs.createReadStream('zip.txt')
let zip = zlib.createGzip()
let writeStream = fs.createWriteStream('zip.txt.gz')

readStream
    .pipe(zip)
    .pipe(writeStream)

console.log('文件压缩完成');
