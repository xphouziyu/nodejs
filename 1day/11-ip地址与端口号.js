// ip地址是用来地位计算机
// 端口号用来地位具体的运用程序
// 访问方也需要端口来通讯

var http = require("http")

var server = http.createServer()

server.on("request", function(requuest,response) {
    response.setHeader("content-type", "text/html; charset=utf-8")
    // 这个代码能告诉客户端浏览器我的文本类型
    response.end("<h1>hello boy（少年）</h1>")
})

server.listen(3000, function(){
    console.log("server is running....")
})