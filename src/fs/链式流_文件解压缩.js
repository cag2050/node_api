const fs = require('fs')
const zlib = require('zlib')

let readStream = fs.createReadStream('zip.txt.gz')
let unzip = zlib.createGunzip()
let writeStream = fs.createWriteStream('unzip.txt')

readStream
    .pipe(unzip)
    .pipe(writeStream)

console.log('文件解压缩完成');
