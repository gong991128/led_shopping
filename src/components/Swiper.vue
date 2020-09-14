<template>
    <div>
        <div class="swiper">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in swiperimgUrl">
                    <img :src="item.slide_show_imgUrl" width="100%" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
    export default {
        name: "swiper",
        props: {
            swiperimgUrl: Array,
        },
        created() {
            // console.log(this.swiperimgUrl)
        },

    }
</script>