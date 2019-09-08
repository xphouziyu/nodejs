// route.get("/", function(req, res) {
//     res.send("hello world")
// })

// module.exports = route
// 很不幸的，我错了，下面是正确的写法
const Table = require("./tables")
// 首先先挂在一个 route 的容器， 但是这个容器是 express 封装的，所以要添加模块。
const express = require("express")

var router = express.Router()

// 要想使用 art-template 需要使用 express-art-template
// 在 app.js 中添加 模块
// var loglist = [
//     { 
//         date: "2019.09.05",
//         name: "看守所",
//         phone: "123456",
//         model: "电脑",
//         situation:"主机死机",
//         staff: "老哥",
//         yesok: "1",
//         maintain: "修好了"
//     }
// ]
// 为了保证模块化，和数据的持久保存，所以专门创建了一个文本数据 db.json


// 这个项目主要是体现增删改查
// 这里就直接显示工单把

/*
    这个是主页配置
*/
router.get("/", function(req, res) {
    Table.show(function(err, loglist) {
        if (err) {
            return res.send("数据丢失")
        }
        res.render('index.html',{loglist: loglist})
    })


    // res.send("hello world")
    // res.render("index.html", {loglist: loglist})
    // 接下来要实现到 db.json 中读取信息。
    // fs.readFile("./db.json", "utf-8", function(err, data) {
    //     if (err) {
    //         // console.log(err)
    //         // 我再一次因为启动 node 的目录不对而造成相对路径不对的问题
    //         return res.send("找不到文件") 
    //     }
    //     var loglist = JSON.parse(data).loglist
    //     res.render("index.html", {loglist: loglist})
    //     console.log(loglist)
    // })
})


/*
    这里处理新添加的信息
*/
// 添加新信息
router.get("/add", function(req, res) {
    res.render("add.html")
})
// express 本身没有 post 解析能力，需要使用中间件 body-parser ，想下载模块
// 在 app.js 中导入 body-parser 模块
router.post("/add", function(req, res) {
    // console.log(req.body)
    Table.add(req.body, function(err) {
        if (err) {
            return res.send("添加失败！")
        }
        res.redirect("/")
    })
    // console.log(req.body)
    // 现在先要将数据写入到内存变量中

    // loglist.unshift(req.body)
    // 先要读取文件到内存，然后添加内容，然后再次写入到文件中。
    // fs.readFile('./db.json','utf-8',function(err,data){
    //     if (err) {
    //         return res.send("文件不存在")
    //     }
    //     var loglist = JSON.parse(data).loglist
    // })
    // res.redirect("/")
})

// 从挂载容器到这里以上的部分就是挂载的内容
// 导出挂载的方法体

/*
    删除指定表单
*/
router.get("/delete", function(req, res) {
    Table.delete(req.query.id, function(err) {
        if (err) {
            return res.send("删除失败")
        }
        res.redirect("/")
    })
})


/*
    修改表单
*/
// 首先要获得要修改的数据
router.get("/edit", function(req, res) {
    // console.log(req.query.id)
    Table.find( parseInt(req.query.id), function(err, loglist) {
        if (err) {
            return res.send("没有指定ID")
        }
        // console.log(loglist)
        res.render("edit.html", {loglist: loglist})
    })
})

router.post("/edit", function(req, res) {
    Table.edit(req.body, function(err) {
        if (err) {
            return res.send("修改失败")
        }
        res.redirect("/")
    })
   
})
module.exports = router