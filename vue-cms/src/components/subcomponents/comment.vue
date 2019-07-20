<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea name id placeholder="请输入要评论的内容" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="item.id">
        <div class="cmt-title">第{{index+1}}楼&nbsp;&nbsp;用户: {{item.tblRegistrar.nickname}}&nbsp;&nbsp;发表时间: {{item.createDate | dateFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore()">加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default {
  props:[
    "id"
  ],

  data() {
    return {
      pageNum:1,
      comments:[],
    };
  },
  created() {
    console.log(this.id)
    this.getCommentList()
  },

  methods: {
    getCommentList(){
      this.$http.get('app/a/app/tblComment/getPagelist?'+'pageNum='+this.pageNum+'&picTextId=8ef90f94a773456c949e4053161bf71d').then(result=>{
        console.log(result)
        if(result.body.code==0){
          this.comments=this.comments.concat(result.body.rows);
        }else{
          Toast("获取评论失败")
        }

      })
    },

    getMore(){
      this.pageNum++;
      this.getCommentList();
    }
  }
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }

  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin:10px 0; 
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 36px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 36px;
        text-indent: 2em;
      }
    }
  }
}
</style>

