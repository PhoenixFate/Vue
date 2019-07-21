<template>
    <div class="photoinfo-container">
        <h3>{{photoInfo.sub_title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoInfo.old_price}}</span>
            <span>点击次数：{{photoInfo.price}}次</span>
        </p>
        <hr>

        <!-- 缩略图区域 -->

        <!-- 图片内容区域 -->
        <div class="photoinfo-content" v-html="photoInfo.content"></div>


        <!-- 评论子组件 -->
        <comment :id="id"></comment>
    </div>
</template>
<script>
import comments from "../subcomponents/comment.vue"
export default {
    components:{
        comment:comments
    },

    data(){
        return {
            id:this.$route.params.id , // 从路由中获取到的id
            photoInfo:{}   // 图片详情
        }
    },
    created(){
        this.getPhotoInfo();
    },

    methods:{
        getPhotoInfo(){
            //获取图片的详情
            this.$http.get("http://jd.itying.com/api/pcontent?id="+this.id).then(result=>{
                if(result.body.result.status==0){
                    this.photoInfo=result.body.result;
                    console.log(this.photoInfo)
                }
                console.log(result)
            })
        }
    }

}
</script>

<style lang="scss">
.photoinfo-container {
    padding: 3px;
    h3 {
        color:#26A2FF;
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
    }

    .subtitle {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        font-size: 13px;
    }

    .photoinfo-content {
        font-size: 13px;
        line-height: 30px;

        img {
            width: 100%;
            max-height: 400px;
        }
    }

}
</style>


