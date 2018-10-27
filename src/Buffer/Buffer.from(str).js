let str = 'e'
let buf = Buffer.from(str)
// 打印出的是：16进制
console.log(buf);
// 打印出的是：16进制对应的整数
console.log(buf[0]);
// ascii码转字符串
console.log(String.fromCharCode(buf[0]));
// 字符串 转 ascii码
console.log(str.charCodeAt());

function is32Bit(char) {
    return char.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit(str));