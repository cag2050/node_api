const os = require('os')

console.log(os.totalmem().toLocaleString() + ' B');
console.log(' ' + os.freemem().toLocaleString() + ' B');