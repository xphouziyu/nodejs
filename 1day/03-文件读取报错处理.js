var fs = require('fs')

fs.readFile('./aaa.txt', function (error, data) {
    if (error) {
        console.log("文件读取失败！")
    } else {
        console.log(data.toString())
    }
})

// 这是我第一次看见这要的代码，有些接受不了。老师说这是异步的，所以需要回调函数。