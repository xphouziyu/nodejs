// 在指定的位置 npm i art-template 就能安装模板引擎，安装好以后不要动他。
// 导入 art-template 模块
var template = require("art-template")

var fs = require("fs")
var listtl = {
    name : "夜明二",
    age : 30,
    gender : "不男不女"
}

fs.readFile("www/tp.html", function(err, data) {
    // console.log(data.toString())
    var res = template.render(date.toString(), listtl)
    console.log(res)
})
