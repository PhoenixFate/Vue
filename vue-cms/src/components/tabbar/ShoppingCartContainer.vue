<template>
  <div class="shopcar-container">
    <div class="goods-list">
        <!-- 商品列表区域 -->
      <div class="mui-card" v-for="item in goodsList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
              <mt-switch></mt-switch>
              <img src="http://jd.itying.com/public\upload\iPrQ_-r43nGjFyxYXiMZWTM6.jpg" alt="">
              <div class="info">
                  <h1>
                      这是一个最简单的卡片视图控件
                  </h1>
                  <p>
                      <span class="price">￥2199</span>
                      <number-box :count="item.count" :goodsId="item.id"></number-box>
                      <a href="#">删除</a>
                  </p>
              </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
      </div>
    </div>
  </div>
</template>
<script>
import numberBox from "../subcomponents/shopcar-numberBox.vue"
export default {
    components:{
        numberBox
    },
    data(){
        return {
            goodsList:[]
        }
    },
    created(){
        this.getGoodsList();
    },
    methods:{
        getGoodsList(){
            this.goodsList=this.$store.state.car
            console.log(this.goodsList);
        }
    }

};
</script>

<style lang="scss" scoped>
.shopcar-container {
    background-color: #eee;
    overflow: hidden;

    .goods-list {
        padding:0;
        .mui-card-content-inner {
            display: flex;
            align-items: center;
        }

        img{
            width: 60px;
            height: 60px;
            margin-right:10px;
        }

        h1 {
            font-size: 13px;
            margin:0;
        }

        p {
            margin:0;
        }

        .info {
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 5px 0;
            .price {
                color:red;
                font-weight: bold;
            }
        }
    }

}


</style>
