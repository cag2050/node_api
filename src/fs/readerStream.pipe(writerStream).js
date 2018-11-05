const fs = require('fs')

let readStream = fs.createReadStream('pipe.input.txt')

let writeStream = fs.createWriteStream('pipe.output.txt')

readStream.pipe(writeStream)
