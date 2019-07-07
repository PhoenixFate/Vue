// 这个main.js是这个项目的入口js

// 导入jquery
// import *** from *** 是es6中导入模块的方式
// 由于es6 的语法太高级；浏览器无法直接执行，所以执行下面这行会报错，所以需要webpack
import $ from 'jquery'

// 使用import 导入样式
import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"
// 注意： webpack, 默认只能打包处理js类型的文件，无法处理其他非js类型的文件；
// 如果要处理非js类型的文件，需要手动安装一些合适的第三方loader加载器；
// 1.如果想要打包处理css文件，需要安装cnpm i style-loader css-loader -
// 2.打开webpack.config.js 这个配置文件，在里面新增一个配置节点：module，它是一个对象
//   在module对象上，有一个rules属性，这个rules属性是个数组，这个数组中存放了所有第三方文件的匹配和处理规则；

// 注意: webpack处理第三方文件类型的过程：
// 1. 发现这个要处理的文件不是js文件，然后就去配置文件中，查找有没有对应的第三方loader规则
// 2. 如果能找到对应的规则，就会调用对应的loader处理这种文件类型；
// 3. 在调用loader的时候，是从后往前调用；
// 4. 当最后一个loader加载完毕，会把处理的结果，直接交给webpack进行打包合并，最终输出到bundle.js中


$(function(){
    $('li:odd').css("backgroundColor","blue");
    $('li:even').css("backgroundColor",function(){
        return '#'+'D97436'
    })
})

// 正常的js脚本无法引入其他的js
// 借助import 引入其他js

// webpack 能够处理js 文件之间的互相依赖关系
// webpack 能够处理js 的兼容问题，把高级的、浏览器无法识别的语言，转换为低级的、浏览器能够识别的语言
// 运行的命令格式 ：   webpack 要打包的文件路径 -O 打包好的输出的文件路径  (webpack 4+ )
//                    webpack 要打包的文件路径  打包好的输出的文件路径  (webpack 3+ )