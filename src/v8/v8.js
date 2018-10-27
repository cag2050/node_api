const v8 = require('v8')
// v8堆空间的统计,即组成v8堆的片段
// console.log(v8.getHeapSpaceStatistics());
// 堆的相关信息
console.log(v8.getHeapStatistics());
