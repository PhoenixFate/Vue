// 这是入口文件
console.log("main.js")
import Vue from 'vue'

// 导入mint-ui 
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)


// 导入mui的样式
import "./lib/mui/css/mui.css"


// 导入app根组件
import app from './app.vue'

var vm=new Vue({
    el:"#app",
    render:createElements=>createElements(app)
})


