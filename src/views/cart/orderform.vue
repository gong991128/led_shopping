<!-- 订单页 -->
<template>
    <div>
        <van-nav-bar title="确认订单" left-text="返回" left-arrow @click-left="onClickLeft" />

        <div class="dizhi">
            <p><img src="../../../public/微信截图_20200909202856.png" alt=""></p>
            <div>
                <p> <span>{{this.Dzhi.name}}</span> <span>{{this.Dzhi.tel}}</span></p>
                <span>{{this.Dzhi.address}}</span>
            </div>
        </div>

        <!-- 订单详情 -->
        <div class="orderform" v-for="(item,index) in orderform">
            <p><img :src="item[1].shopLogo" alt="" width="28px" style="vertical-align: text-bottom;"> <span
                    style="font-size: 18px; line-height:-px;">{{item[1].shopName}}</span></p>
            <van-card num="1" :price="item[0].goodsPrice" desc="描述信息" :title="item[0].goodsName"
                :thumb="item[0].goodsLogo" />
        </div>

        <div class="bottom">
            <p>应付金额 ：￥{{price}}</p>
            <p>共计{{num}}件</p>
            <button @click="Zfu">去支付</button>

        </div>

    </div>
</template>

<script>
    import { getdizhi, getorderform, postcretaeOrder } from '../../api/user.js'
    import qs from 'qs'
    export default {
        data() {
            return {
                // 收货地址数据
                Dzhi: [],
                // 渲染订单的商品数据
                orderform: [],
                // 购买的件数
                num: 0,

            }
        },
        computed: {
            // 计算总价格
            price() {
                var a = 0;
                this.orderform.forEach(element => {
                    a += element[0].goodsPrice;
                });
                return a

            }
        },
        created() {
            var idd = this.$route.query.idd
            // console.log(idd)

            // 请求收货地址
            getdizhi().then(res => {
                // console.log(res.data)
                //  
                this.Dzhi = res.data[0]
            }),
                // 展示订单信息
                getorderform(idd).then(res => {
                    // console.log(res.data[0])
                    this.orderform = res.data
                    this.num = res.data.length
                    // console.log(this.orderform)

                })

        },
        methods: {

            onClickLeft() {
                window.history.back()
            },
            Zfu() {
                let orde = {
                    price: this.price,
                    consignee_addr: this.Dzhi,
                    goodsId: this.$route.query.idd,
                    isFcart: "true"
                }
                this.$router.push({
                    name: "Defrayal",
                    query: {
                        orde: orde

                    }
                })
            }

        },
    }
</script>
<style scoped>
    .dizhi {
        width: 100%;
        height: 120px;
        font-size: 24px;
        padding-left: 20px;
        display: flex;
        background: white;
        margin-top: 20px;
    }

    .orderform {
        width: 100%;
        height: 300px;
        /* backgroun        d: tomato; */
        margin-bottom: 12px;
    }

    .bottom {
        width: 100%;
        height: 110px;
        background: rgb(240, 240, 240);
        position: fixed;
        bottom: 0px;
        display: flex;
        /* line-height: 60px; */
        justify-content: space-between;
        font-size: 32px;
    }

    button {
        width: 170px;
        height: 100px;
        background: tomato;
        outline: none;
        border: 0;
        color: white;

    }
</style>