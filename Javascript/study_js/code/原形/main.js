var a = {}
var funA = function (){}

var objA = new funA()

console.log(a.prototype)
console.log(funA.prototype)
console.log(objA.prototype)
console.log(Object.prototype)

console.log(a.__proto__)
console.log(funA.__proto__)
console.log(objA.__proto__)
console.log(Object.__proto__)