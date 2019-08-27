// 这里要干的是http请求服务

// 1、首先还是先加载http
var http = require("http")

// 2、创建一个http服务器
var server = http.createServer()

// 3、提供服务
// 收数据，发数据。

server.on('request', function(){
    console.log("收到客户端的请求了")
})

// 4、绑定端口号，启动服务
server.listen(5000, function(){
    console.log("绑定端口号5000，服务启动成功。")
})