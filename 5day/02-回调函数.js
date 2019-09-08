// 什么时候需要回调函数？
// 当需要函数内部的异步数据的时候。
// 比如：你送女朋友回家，到路口的时候分开，你让她到家后给你打电话，然后你等待通知。

// function fn (x,y) {
//     setTimeout(function() {
//         var z = x + y
//     }, 1000
//     )
// }

// fn(10, 20)

// 我想要取得 z 的值的时候，就需要使用回调函数。

function fn (x,y, callback) {
    setTimeout(function() {
        var z = x + y
        callback(z)
    }, 1000
    )
    
}

fn(10, 20, function(z) {
    console.log(z)
})