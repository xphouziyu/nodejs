// 初始化
const express = require("express")
const app = express()
const router = require("./route")

// 要想使用 art-template 需要使用 express-art-template
app.engine('html', require("express-art-template"))


// 将路由请求封装到独立的模块中
app.use(router)

// 监听端口并启动服务
app.listen(5000, function() {
    console.log("running at port 5000......")
})
