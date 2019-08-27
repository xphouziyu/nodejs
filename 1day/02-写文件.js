var fs = require("fs")

fs.writeFile('./hello.txt', '大家好我是渣渣辉',function(error){
    console.log("文件写入成功")
})