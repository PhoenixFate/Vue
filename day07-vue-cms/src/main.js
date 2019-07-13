// 这是入口文件
import Vue from 'vue'

//1.1 导入路由的包：
import VueRouter from 'vue-router'
//1.2 安装路由模块
Vue.use(VueRouter)
//1.3 导入自己的router.js路由模块
import router from './router.js'


// 2.1 导入Vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)


// 导入mint-ui 
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



// 导入mui的样式
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"

// 导入app根组件
import app from './app.vue'

var vm=new Vue({
    el:"#app",
    render:createElements=>createElements(app),
    // 挂在路由对象到vm实例上
    router 

})


