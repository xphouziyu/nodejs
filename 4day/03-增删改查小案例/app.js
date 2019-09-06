// 初始化
const express = require("express")
const app = express()
const router = require("./route")
const bodyParser = require('body-parser')

// 要想使用 art-template 需要使用 express-art-template
app.engine('html', require("express-art-template"))

// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// 将路由请求封装到独立的模块中
app.use(router)

// 监听端口并启动服务
app.listen(5000, function() {
    console.log("running at port 5000......")
})
