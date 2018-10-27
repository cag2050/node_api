const zip_local = require('zip-local')

// 压缩文件夹
zip_local.sync.zip('./dir1').compress().save('dir1.gz')