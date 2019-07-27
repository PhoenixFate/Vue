<template>
    <div>
        <input type="button" value="add" @click="add">
        <input type="button" value="minus" @click="minus">
        <br>
        <input type="text" v-model="$store.state.count">
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        add(){
            // 直接通过this.$store.state.xxx来改变变量不符合vue的设计理念
            this.$store.commit("increment")
        },
        minus(){
            this.$store.commit("decrement",{c:3,d:4})
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


