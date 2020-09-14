<template>
    <div>
        <div class="header">
            <span @click="back">返回</span>
            <span>购物车({{cartnum}}) </span>
            <span style="float: right;">管理</span>
        </div>
    </div>
</template>
<script>    
    export default {
        name: "nav_bar",
        porps: {
            cartnum:{
                type:Number
            }

        },
        methods: {
            back(){
                this.$emit("myback")
            }
        },
    }
</script>
<style scoped>
     .header {
        width: 100%;
        height: 80px;
        font-size: 27px;
        text-align: center;
        background: white;
        /* border-bottom: 1px solid rgb(231, 231, 231); */
        /* line-height: 75px; */
        display: flex;
        justify-content: space-between;
        line-height: 80px;

    }
</style>