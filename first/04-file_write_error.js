var fs = require("fs")

var data = "大家好我是你的爸爸，你信吗？"

fs.writeFile('heloo?<>.txt', data, function(errot){
    if (errot) {
        console.log("文件写入失败!")
    }else{
        console.log("文件写入成功！")
    }
})