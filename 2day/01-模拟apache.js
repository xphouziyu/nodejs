var http = require("http")
var fs = require("fs")

var server = http.createServer()

// 模拟apache，自然要有wwwroot路径
var wwwroot = "D:/doc/Node/2day/www" 

// 监听端口，提供服务
server.on("request", function(req,res){
    var urlPath = req.url
    fs.readFile(wwwroot+urlPath, function(err,data){
        if(err){
            res.end("404 not file ")
        }else{
            res.end(data)
        }
    })

})

// 绑定端口启动服务
server.listen(3000, function(){
    console.log("service is running。。。。")
})