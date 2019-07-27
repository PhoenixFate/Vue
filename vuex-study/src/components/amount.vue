<template>
    <div>
        count的数量：{{$store.state.count}}<br>
        {{$store.getters.optCount}}
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>

</style>


