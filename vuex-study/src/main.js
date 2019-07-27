// 这是入口文件
import Vue from 'vue'


// 配置vuex的步骤
// 1. 运行cnpm install vuex -S
// 2. 导入包
import Vuex from "vuex"
// 3. 注册vuex到vue中
Vue.use(Vuex)
// 4. new Vuex.Store() 实例，得到一个数据仓储对象
var store=new Vuex.Store({
    // state 就是组件中的data
    state:{
        // 如果在组件中访问，store中的数据，只能通过this.$store.state.***来访问
        count:0
    },
    // mustations: 就是组件中的methods
    mutations:{
        // 如果要操作state中的值，只能通过mutations的方法操作数据
        // 不推荐this.#store.state来操作数据，因为万一数据发送了紊乱，不能快速定位错误的原因

        increment(state){
            state.count++;
        },

        // 注意子组件想要调用mutations中的方法，只能使用this.$store.commit("方法名")来调用
        // 这种调用mutations方法的格式，和this.#emit("父亲组件中的方法名")类似

        // 在mutations中的参数列表中最多支持2两个参数
        decrement(state,params){
            console.log(params)
            state.count-=params.c;
        },
        // 注意：这里的getters只负责对外提供数据，不负责修改数据，如果想修改数据，请使用mutations中的方法
 
    },
    getters:{
        optCount:function(state){
            return "当前最新的count值是："+state.count
        }
        // 经过回顾对吧，发现getters中的方法，和组件中的过滤器比较类似，因为过滤器和getters都没有修改原数据，都把原数据做了一层包装
        // 其次，getters也和computed比较像，只要state中的数据发送了变化，如果getters中正好引用了这个数据，那么就会立即触发getters重新赋值
    }
})

// 总结：
// 1. state中的数据，不能直接修改，如果想要修改，必须通过mutations
// 2. 如果组件想要直接从state上获取数据，需要this.$store.state.xxx
// 3. 如果组件想要修改数据，必须使用mutations提供的方法，需要通过this.$store.commit("方法名",参数)来调用mutations中的方法
// 4. 如果store中的state上的数据，在对外提供的时候，需要做一层包装，建议使用getters：this.$store.getters.xxx












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






//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)





var vm=new Vue({
    el:"#app",
    render:createElements=>createElements(app),
    // 挂在路由对象到vm实例上
    router,
    // 5. 将vuex创建的store挂载到vm实例上
    store:store

})


