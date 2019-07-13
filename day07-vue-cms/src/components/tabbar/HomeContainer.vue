<template>
  <div>
    <!-- 这是轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for循环的话，一定要使用:key -->
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.mainImage" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <h2>HomeContainer</h2>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return {
      swipeList:[],  //保存轮播图的数据
    }
  },
  created(){
    this.getSwipe()
  },
  methods:{
    // 获取轮播图数据
    getSwipe(){
      this.$http.get('https://njrzzk.com/app/a/app/tblImgCycle/getlist').then(result=>{
        // 这是成功的
        if(result.body.code==0){
          this.swipeList=result.body.rows.map(item=>{
            item.mainImage="https://njrzzk.com"+item.mainImage.replace("|","")
            console.log(item.mainImage);
            return item
          })
          console.log(this.swipeList)
        }else {
          // 失败
          Toast('加载轮播图失败')
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      // sacc语法：
      &:nth-child(1){
        color:red;
      }
      &:nth-child(2){
        color:yellow;
      }
      &:nth-child(3){
        color:yellowgreen
      }

      img{
        width:100%;
        height: 100%;
      }
    }
  }
</style>
