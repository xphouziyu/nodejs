// 这里会使用程序读取文件

// 首先要加载模块
var fs = require('fs')

// 读取文件
fs.readFile('./hello.txt', function(error, data) {
    console.log(data.toString())
})

