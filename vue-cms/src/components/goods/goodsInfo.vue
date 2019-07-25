<template>
  <div class="goodsInfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swipeList="swipeList" :isFull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="pirc">
            市场价：
            <del>￥{{goodsInfo.old_price}}</del>&nbsp;&nbsp;销售价：
            <span class="now-price">￥{{goodsInfo.price}}</span>
          </p>
          <p>
            购买数量：
            <number-box></number-box>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{goodsInfo.cid}}</p>
          <p>库存情况:{{goodsInfo.salecount}}件</p>
          <p>上架时间:</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="toDesc()">商品介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="toComment()">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
// 导入轮播图组件
import swiper from "../subcomponents/swiper.vue";
// 导入数字选择框组件
import numberBox from "../subcomponents/goodsInfo-numberBox.vue";

export default {
  components: {
    swiper,
    numberBox
  },
  data() {
    return {
      id: this.$route.params.id,
      swipeList: [],
      goodsInfo:{

      }
    };
  },
  created() {
    this.getSliders();
    this.getGoodsInfo();
  },

  methods: {
      toDesc(){
          this.$router.push({name:"goodsDesc",params:{id:this.id}})
      },
      toComment(){
          this.$router.push({name:'goodsComment',params:{id:this.id}})
      },

    getSliders() {
      this.$http
        .get("https://njrzzk.com/app/a/app/tblImgCycle/getlist")
        .then(result => {
          // 这是成功的
          if (result.body.code == 0) {
            this.swipeList = result.body.rows.map(item => {
              item.mainImage =
                "https://njrzzk.com" + item.mainImage.replace("|", "");
              console.log(item.mainImage);
              return item;
            });
            console.log(this.swipeList);
          } else {
            // 失败
            Toast("加载轮播图失败");
          }
        });
    },
    getGoodsInfo(){
        let url='http://jd.itying.com/api/pcontent?id='+this.id;
        this.$http.jsonp('http://jd.itying.com/api/pcontent?id=59f6a2d27ac40b223cfdcf81').then(result=>{
            console.log(result)
            this.goodsInfo=result.body.result;
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.goodsInfo-container {
  background-color: #eee;
  overflow: hidden;

  .now-price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
    button {
        margin:15px 0;
    }
  }
}
</style>


