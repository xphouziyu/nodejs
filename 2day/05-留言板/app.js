// 声明虽然可以用到的时候再导入，但是一般还是声明在开头，这样容易看。

var http = require("http")
var fs = require("fs")

// 这里的启动 http server 是一种简写。

http
    .createServer(function (req, res) {
        // res.end("<h1>hello world</h1>")
        var url = req.url
        if (url === "/") {
            fs.readFile("./views/index.html", function (err, data) {
                if (err) {
                    return res.end("404 NOT FOUD")
                }
                res.end(data)
            })
        } else if (url.indexOf("/public/") === 0 ) {
            fs.readFile("." + url, function (err, data) {
                if (err) {
                    return res.end("404 NOT FOUD")
                }
                res.end(data)
            })
        }
    })
        
    .listen(3000, function () {
        console.log("服务启动成功！")
    })