var http = require("http")
var fs = require("fs")
var server = http.createServer()

server.on("request", function(req, res) {
    // console.log("连接成功")
    if (req.url == "/") {
        fs.readFile("./static/index.html", function(err, data) {
            if (err) {
                res.setHeader("content-type", "text/html; charset=utf-8")
                res.end("文件读取错误。")
            }else{
                res.setHeader("content-type", "text/html; charset=utf-8")
                res.end(data)
            }
        })
    }else if(req.url === "/tu") {
        fs.readFile("./static/yu.jpg", function(err, data) {
            if (err) {
                res.setHeader("content-type", "text/html; charset=utf-8")
                res.end("文件读取错误。")
            }else{
                // 不同的文件有不同的类型，并且图片类型不要使用字符集。
                res.setHeader("content-type", "image/jpg")
                res.end(data)
            }
        })
    }

})

server.listen(3000, function(){
    console.log("server is running...")
})