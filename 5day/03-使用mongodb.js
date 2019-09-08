// mongodb 官方包安装   npm i mongoose
// 安装好 mongodb，然后在要启动的盘符根目录下创建 /data/db 路径目录，然后 mongod 直接启动，mongo 直接连接本地。
// mongodb 基础使用，show dbs 查看数据库，use 数据库名 切换数据库。
const mongoose = require("mongoose")

// 连接数据库
// mongoose.connect("mongodb://localhost/nodejs", {useMongoClient: true})
// WARNING: The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
// 5.x 以后不用使用 {useMongoClient: true}

// mongoose.connect("mongodb://localhost/nodejs")
// DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
mongoose.connect("mongodb://localhost/nodejs", { useNewUrlParser: true })

mongoose.Promise = global.Promise

// 创建一个叫 cat 的集合
var Cat = mongoose.model('Cat',{ name: String})

// 创建一个叫 新对象
var Kalis = new Cat({name: "老毛1",age: 10 })

// 持久化保存
Kalis.save(function(err) {
    if (err) {
        return console.log("保存失败")
    }
    console.log("保存成功")
})