// 这个模块是用来操作文本数据库的，因为没有使用数据库

// 既然要操作文件，那么 fs 就少不了
const fs = require("fs")

// 定义路径常量
const dbPath = "./db.json"

// 获取表单信息
exports.find = function(callback){
    fs.readFile(dbPath,'utf-8', function(err, data) {
        if (err) {
            return callback(err)
        }
        callback(JSON.parse(data).loglist)
    })
}


// 添加表单信息
exports.find = function(){
    
}

// 更新表单信息
exports.find = function(){
    
}

// 删除表单信息
exports.find = function(){
    
}