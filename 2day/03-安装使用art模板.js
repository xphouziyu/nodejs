// 在指定位置打开终端，然后 npm install art-template 安装模块
// 加载 art-template 模块
var template = require("art-template")

// 使用方法
var res = template.render('你好 {{ name }}', {name : '老狗'})
console.log(res)