# Vue
## day07-vue-cms
正常字体大小
### 我们是有灵魂的程序员，所以，我们的代码富有诗意
正常字体大小
#### 我们是有灵魂的程序员，所以，我们的代码富有诗意
正常字体大小
##### 我们是有灵魂的程序员，所以，我们的代码富有诗意
正常字体大小
###### 我们是有灵魂的程序员，所以，我们的代码富有诗意
正常字体

## [百度链接](http://www.baidu.com)

## (传统方式)命令行提交代码
1. git add.
2. git commit -m "提交信息"
3. git push 

## 制作首页app组件
1. 完成Header区域，使用的是Mint-ui中header组件
2. 制作底部Tabber区域，使用的是Mui的Tabber.html代码
 + 在制作购物车小图标的时候，操作相对会多一些
 + 先把拓展图标的css样式，拷贝到项目中去
 + 拷贝扩展字体库ttf文件到项目中
 + 为购物车小图标添加如下样式：class="mui-icon mui-icon-extra mui-icon-extra-cart"
3. 要在中间区域放置一个router-view来展示路由匹配到的组件

## 改造Tabber为router-link
## 设置路由高亮 
## 点击tabber中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据，使用vue-resource获取数据
2. 使用this.$http.get('url').then(result=>{}) 获取数据
3. 获取到的数据要保存到this.swipeList上
4. 使用v-for循环渲染每个item项
