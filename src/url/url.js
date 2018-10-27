const { URL } = require('url')

let url = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')
console.log(`href     = ${url.href}`);
console.log(`protocol = ${url.protocol}`);
console.log(`username = ${url.username}`);
console.log(`password = ${url.password}`);
console.log(`origin   = ${url.origin}`);
console.log(`host     = ${url.host}`);
console.log(`hostname = ${url.hostname}`);
console.log(`port     = ${url.port}`);
console.log(`search   = ${url.search}`);
console.log(`hash     = ${url.hash}`);
