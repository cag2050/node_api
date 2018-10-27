const assertStrictEqual = require('assert')
// 如果两个值不全等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。 如果 message 参数是 Error 的实例，则会抛出它而不是 AssertionError。
// assertStrictEqual.strictEqual(1, 2)
// assertStrictEqual.strictEqual(1, 2, '1 不等于 2')
assertStrictEqual.strictEqual(1, 2, new Error('1 不等于 2'))
