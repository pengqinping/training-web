// https://www.douyin.com/user/self?from_tab_name=main&modal_id=7326010996860980531&showTab=record
import babel from '@babel/core'
import fs from 'node:fs'
const es6code = fs.readFileSync('./index.js', 'utf-8')
console.log('es6 代码：' + es6code)

babel
  .transformAsync(es6code, {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage', // 按需加载 polyfill
          corejs: 3
        }
      ]
    ],
    sourceMaps: true // 生成 sourcemap 文件
  })
  .then((result) => {
    console.log('es5 代码：' + result.code)
  })
  .catch((err) => {
    console.log(err)
  })
