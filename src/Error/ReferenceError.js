// 抛出一个 ReferenceError，因为 z 为 undefined
try {
    const m = 1;
    const n = m + z;
} catch (err) {
    // 在这里处理错误。
    console.log(err);
}