let crypto = require('crypto')

const hash = crypto.createHash('sha256')
// console.log(hash.update('h', 'utf-8').digest());
console.log(hash.update('h', 'utf-8').digest().toString('hex'));


