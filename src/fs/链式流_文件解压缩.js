const fs = require('fs')
const zlib = require('zlib')

let readStream = fs.createReadStream('zip.txt.gz')
let zip = zlib.createGunzip()
let writeStream = fs.createWriteStream('unzip.txt')

readStream
    .pipe(zip)
    .pipe(writeStream)

console.log('文件压缩完成');
