var list = [1, 2, 3, {name:"houge"}]

console.log(list)

var li = list[3]
// li.name = "一条狗"

// if (li === list[3]) {
//     console.log("y")
// }else{
//     console.log("n")
// }

// console.log(list)

li = 1
if (li === list[3]) {
    console.log("y")
}else{
    console.log("n")
}
console.log(list, li)