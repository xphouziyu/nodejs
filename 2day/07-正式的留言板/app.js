// 首先第一是创建好了工程主要目录
// 然后要下载要用的模块 art-template
// 在正式的工程中，node模块包应该在工程目录下，但是我这里为了避免模块包重复的太多，就直接使用根目录下的文件了。
// 首先写假设好基础后端。
var http = require("http")
// 为了能方便url请求，所以使用url
var url = require("url")
var fs = require("fs")
var template = require("art-template")
// 接下来要开始传参数了，这个是一个列表
var listData = [
    {
        name: "猴哥",
        message: "师弟你好胖！",
        dataTime: "2019-8-31"
    }
]

// 使用简化的http服务
http
    .createServer("request", function (req, res) {
        console.log("接收到请求")
        // 服务启动成功，并且已经接收到数据。
        // 接着配置网页，让用户根据url进行访问
        // 首先要正则好url
        var objUrl = url.parse(req.url, true)
        // console.log(objUrl)
        // 我试了一下 pathname 才是正确的。
        var objPathname = objUrl.pathname





        if (objPathname === '/') {
            // 到这里需要我们读取文件返回给用户
            fs.readFile("./veiws/index.html", function (err, data) {
                // 路径这里遇到一个坑，在node启动的时候，我是在  “node .\07-正式的留言板\app.js” 结果路径就找不到了。
                // node 下的路径使用的是 linux 类型。
                if (err) {
                    return res.end("404 not found")
                }
                // 不报错，那我们就要进行后端渲染了。同时要导入模块 art-template
                var htmlData = template.render(data.toString(), {
                    lists: listData
                })

                res.end(htmlData)
            })
        } else if (objPathname === "/post") {
            fs.readFile("./veiws/post.html", function (err, data) {
                if (err) {
                    return res.end("404 not found")
                }
                res.end(data)
            })
        } else if (req.url.indexOf("/public") === 0) {
            fs.readFile("." + req.url, function(err, data) {
                if (err) {
                    return res.end("404 not found")
                }
                res.end(data)
            })
        } else if (objPathname === "/seqInput") {
            // 接收提交的值，然后加入到数据库中
            var nowData = objUrl.query
            nowData.dataTime = "2019-8-31"
            listData.unshift(nowData)
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
        }


    })
    .listen(3000, function () {
        console.log("服务启动成功")
    })