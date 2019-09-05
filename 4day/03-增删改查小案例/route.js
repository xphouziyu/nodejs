// route.get("/", function(req, res) {
//     res.send("hello world")
// })

// module.exports = route
// 很不幸的，我错了，下面是正确的写法

// 首先先挂在一个 route 的容器， 但是这个容器是 express 封装的，所以要添加模块。
const express = require("express")
var router = express.Router()

// 要想使用 art-template 需要使用 express-art-template
// 在 app.js 中添加 模块
loglist = [
    { 
        date: "2019.09.05",
        name: "看守所",
        phone: "123456",
        model: "电脑",
        situation:"主机死机",
        staff: "老哥",
        yesok: "1",
        maintain: "修好了"
    }
]


// 这个项目主要是体现增删改查
// 这里就直接显示工单把
router.get("/", function(req, res) {
    // res.send("hello world")
    res.render("index.html", {loglist: loglist})
})

// 从挂载容器到这里以上的部分就是挂载的内容
// 导出挂载的方法体
module.exports = router