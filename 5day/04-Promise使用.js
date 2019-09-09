// 对于异步处理，是没有先后顺序的。假如同时读取 data 下的三个文件，它们会根据内容的多少，先读完先出，但是我先要的是，先读 1，在读 2.然后 3。
// 这样为了执行属性就只能进行嵌套了，一大坨不好看。所以使用 promise。
const fs = require("fs")

var P1 = new Promise(function(resolve, reject) {
    // promise 容器中结果只有两种状态，成功 resolve ，失败 reject
    fs.readFile("./data/1.txt","utf-8",function(err, data) {
        if (err) {
            // 失败给 reject 传入 err 值
            reject(err)
        }else{
            // 成功给 resolve 传数据
            resolve(data)
        }
    })
})

var P2 = new Promise(function(resolve, reject) {
    // promise 容器中结果只有两种状态，成功 resolve ，失败 reject
    fs.readFile("./data/2.txt","utf-8",function(err, data) {
        if (err) {
            // 失败给 reject 传入 err 值
            reject(err)
        }else{
            // 成功给 resolve 传数据
            resolve(data)
        }
    })
})

var P3 = new Promise(function(resolve, reject) {
    // promise 容器中结果只有两种状态，成功 resolve ，失败 reject
    fs.readFile("./data/3.txt","utf-8",function(err, data) {
        if (err) {
            // 失败给 reject 传入 err 值
            reject(err)
        }else{
            // 成功给 resolve 传数据
            resolve(data)
        }
    })
})

// 接着要使用容器
P1
    .then(function(data) {
        console.log(data)
        // 这个传入的是 P1 resolve 的值
        return P2
        // 这里 return 的值是下一个 then 的data
    })
    .then(function(data) {
        console.log(data)
        return P3
    })
    .then(function(data) {
        console.log(data)
    })

// 这样就实现了顺序读取
