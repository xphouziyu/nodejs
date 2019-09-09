const fs = require("fs")

// 这个函数就相当于之前的 P1
function pread(filePath) {
    // 注意这里是 return
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, "utf-8", function(err, data) {
            if (err) {
                reject(err)
            }else{
                resolve(data)
            }
        })
    }) 
}

// 调用
// P1 = pread("./data/1.txt")

pread("./data/1.txt")
    .then(function(data) {
        console.log(data)
        return pread("./data/2.txt")
    })
    .then(function(data) {
        console.log(data)
        return pread("./data/3.txt")
    })
    .then(function(data) {
        console.log(data)
    })