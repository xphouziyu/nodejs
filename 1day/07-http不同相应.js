var http = require("http")
var server = http.createServer()
var connot = 0

server.on('request', function(request, response){
    if (request.url === "/"){
        // 这是个是正常的写法
        response.write("on /")
        response.end()
    }else if(request.url === '/home'){
        // response.write("on home")
        // 这个是简写
        response.end("on home")
    }else{
        // response.write("input error")
        response.end("input error")
    }
    connot++
    console.log("第"+connot+"次访问")

})

server.listen(5000, function(){
    console.log("绑定端口号5000，服务启动成功。")
})