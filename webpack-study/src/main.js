// 这个main.js是这个项目的入口js

// 导入jquery
// import *** from *** 是es6中导入模块的方式
// 由于es6 的语法太高级；浏览器无法直接执行，所以执行下面这行会报错，所以需要webpack
import $ from 'jquery'

$(function(){
    $('li:odd').css("backgroundColor","lightblue");
    $('li:even').css("backgroundColor",function(){
        return '#'+'D97436'
    })
})

// 正常的js脚本无法引入其他的js
// 借助import 引入其他js

// webpack 能够处理js 文件之间的互相依赖关系
// webpack 能够处理js 的兼容问题，把高级的、浏览器无法识别的语言，转换为低级的、浏览器能够识别的语言
