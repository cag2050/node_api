// 16位无符号整数
const arr = new Uint16Array(2)
arr[0] = 1000
arr[1] = 2000

const buf = Buffer.from(arr.buffer)
console.log(buf);