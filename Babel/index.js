// babel
// babel 做语法转换 es6 - es5 的转换
// es6 语法新特性的 polyfill 是通过 core-js 来实现的

// 语法
const a = 1
const funa = () => {}

// 新特性
Promise.resolve(1).then((res) => {
  console.log(res)
})
Object.assign({})

const x = [1, 2, 3]
x.filter((item) => item > 1)
