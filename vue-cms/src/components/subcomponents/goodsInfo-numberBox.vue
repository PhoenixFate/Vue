 <template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9" >
    <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged()" ref="number"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

  <!-- 分析：子组件什么时候把数据传递给父组件 -->
</template>
<script>
import mui from "../../lib/mui/js/mui.js"
export default {
  data() {
    return {};
  },
mounted(){
      mui('.mui-numbox').numbox();
  },
  methods: {
    countChanged(){
      // 每当文本框的数据被修改的时候，立即把最新的数据，通过事件调用传递给父组件
      //console.log(this.$refs.number.value)
      this.$emit("getCount",this.$refs.number.value)
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

