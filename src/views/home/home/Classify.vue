<template>
    <div>
        <div class="classify">
            <div v-for="(item,idnex) in classifylist">
                <img :src="item.sp_home_ico" width="75%" alt=""><br>
                <b>{{item.sp_home_title}}</b>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        name: "classify",
        props: {
            classifylist: Array,
        }
    }
</script>
<style scoped>
     .classify {
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
  }

  .classify div {
    width: 20%;
    height: 50%;
    text-align: center;
  }
</style>