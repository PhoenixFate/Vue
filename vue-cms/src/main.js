// 这是入口文件
import Vue from 'vue'

// 导入时间格式化插件
import moment from 'moment'

// 定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})










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
// 设置请求根路径
//Vue.http.options.root='https://njrzzk.com'
// 全局设置post时候表单数据格式组织形式; 默认请求头: application/x-www-form-urlencoded
Vue.http.options.emulateJSON=true




// 按需导入mint-ui 
// import { Header ,Button} from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name,Header)
// Vue.component(Button.name,Button)
// import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// // 懒加载
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload)
import MintUI from 'mint-ui';
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


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


