var fs = require("fs")

fs.readdir("D:/doc/Node/1day", function(err, data) {
    if (err) {
        console.log("读取失败!")
    }else{
        console.log(data)
    }
})