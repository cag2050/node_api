const fs = require('fs')
const zlib = require('zlib')

let gunzip = zlib.createGunzip()
let inFile = fs.createReadStream('./a.txt.gz')
let out = fs.createWriteStream('./b.txt')

inFile.pipe(gunzip).pipe(out)
