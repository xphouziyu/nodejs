// 在指定的位置 npm i art-template 就能安装模板引擎，安装好以后不要动他。
// 导入 art-template 模块
var template = require("art-template")
var fs = require("fs")
var http = require("http")



var listtl = {
    name : "夜明二",
    age : 30,
    gender : "不男不女"
}

// fs.readFile("www/tp.html", function(err, data) {
//     // console.log(data.toString())
//     var res = template.render(data.toString(), listtl)
//     console.log(res)
// })

var server = http.createServer()

server.on("request", function (req, res) {
    console.log("请求进来了")
    fs.readFile("www/tp.html", function (err, data) {
        if (err) {
            console.log("文件读取失败")
        } else {
            // console.log(data.toString())
            var ress = template.render(data.toString(), listtl)
            res.end(ress)
        }

    })
    // res.end("<h1>hello</h1>")
})

server.listen(3000, function () {
    console.log("web服务器启动成功。。。")
})