// 这个模块是用来操作文本数据库的，因为没有使用数据库

// 既然要操作文件，那么 fs 就少不了
const fs = require("fs")

// 定义路径常量
const dbPath = "./db.json"



// 获取表单信息
exports.show = function(callback){
    fs.readFile(dbPath,'utf-8', function(err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).loglists)
    })
}


// 添加表单信息
exports.add = function( loglist, callback){
    fs.readFile(dbPath,'utf-8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var loglists = JSON.parse(data).loglists

        // 添加id
        loglist.id = loglists[loglists.length - 1].id + 1
        // 把用户传入的对象保存到数组
        loglists.push(loglist)
        // console.log(loglist)
        // 将数组转化为字符串
        var fileData = JSON.stringify({
            loglists: loglists
        })

        // 把字符串保存该的文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

// 删除表单信息
exports.delete = function(byId, callback){
    fs.readFile(dbPath, "utf-8", function(err, data) {
        if (err) {
            return callback(err)
        }
        var loglists = JSON.parse(data).loglists

        // 用 es6 的语法 findIndex 方法找到要删除的下标
        var deleteId = loglists.findIndex(function (item) {
            return item.id === parseInt(byId)
        })

        // 通过下标删除对应对象
        loglists.splice(deleteId, 1)

        var fileData = JSON.stringify({
            loglists: loglists
        })

        // 保存数据
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })

    })
}

// 通过id 查找指定数组对象
exports.find = function(byId, callback) {
    fs.readFile(dbPath, "utf-8", function(err, data) {
        if (err) {
            return callback(err)
        }
        var loglists = JSON.parse(data).loglists

        var ret = loglists.find(function (item) {
            return item.id === parseInt(byId)
        })
    
        callback(null, ret)
    })
}
// 保存修改好的数据
exports.edit = function(loglist, callback) {
    fs.readFile(dbPath, "utf-8", function(err, data) {
        if (err) {
            return callback(err)
        }
        var loglists = JSON.parse(data).loglists
        // 将字符串装换成字符
        console.log(loglist)
        loglist.id = parseInt(loglist.id)
        

        var list = loglists.find(function (item) {
            return item.id == loglist.id
        })


        // 遍历拷贝对象
        for (var key in loglist) {
            list[key] = loglist[key]
        }

        var fileData = JSON.stringify({
            loglists: loglists
        })

        // 保存信息
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}