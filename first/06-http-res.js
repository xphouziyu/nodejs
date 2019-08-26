var http = require("http")
var server = http.createServer()

/*
    Request 请求对象
    Response 发送对象
*/
// var fs = require('fs')
// var datas = fs.readFile('./s1.html', function(error, data){
//     data.toString()

// })

server.on('request', function(request, response){
    // console.log("收到客户端的请求了")
    console.log("请求对象url"+ request.url)

    response.write('我接收到了')
    // write 可以多次，但是结束的时候要用end，不然客户端会处于等待接收状态。
    response.write('我要挂机了')
    // response.write(datas)
    response.end()
})

server.listen(5000, function(){
    console.log("绑定端口号5000，服务启动成功。")
})