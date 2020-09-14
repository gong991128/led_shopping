<!-- cart -->
<template>
    <div>

        <!-- mav_bar -->
        <Navbar @myback="myback" :cartnum='cartnum' /> 
     
        <div>
            <van-checkbox-group v-model="result" @change="changeAll">

                <div class="list" v-for="(item,index) in cartlists">

                    <van-swipe-cell>
                        <p class="checkboxs">
                            <van-checkbox v-model="checked" :name="item" checked-color="#07c160"></van-checkbox>
                        </p>


                        <van-card num="1" :price="item.customer_id" :title="item.title" :thumb="item.image">

                        </van-card>

                        <template #right>
                            <van-button square text="删除" type="danger" class="delete-button"
                                @click="dele(item.cart_id)" />
                        </template>
                    </van-swipe-cell>
                </div>
            </van-checkbox-group>

        </div>

        <!-- 底部 -->

        <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit()" style="background:rgb(235, 225, 226)">
            <template>
                <van-checkbox v-model="selall" @change="selAll">全选</van-checkbox>
            </template>

        </van-submit-bar>

    </div>
</template>

<script>
    import { patchchecked, patchdelete, getaddcartlist } from '../../api/user.js'
    import Navbar from './cart/Navbar.vue'

    export default {
        components:{
            Navbar,
        },
        data() {
            return {
                // 被选中的商品
                result: [],
                // 购物车的总数量
                cartnum: 2,
                // 单个商品数量
                num: 0,
                // 默认false
                checked: false,
                // 默认false
                selall: false

            }
        },
        computed: {
            // 获取vuex的cartlist
            cartlists: function () {
                return this.$store.state.cart.cartlists;
                // this.list = this.$store.state.cart.cartlists;
                // console.log(cartlists)
            },
            // 计算总价
            total() {
                let money = 0
                this.result.map(item => {
                    money += item.customer_id * 1
                })
                return money * 100
            }
        },
        created() {
            // console.log(this.$store.state.cart.cartlists)
            this.cartnum = this.$store.state.cart.cartlists.length
        },
        methods: {
            // 全选
            selAll(val) {
                if (this.selall) {
                    this.checked = true
                    this.result = this.cartlists
                } else {
                    this.checked = false
                    this.result = []
                }
            },

            //实现单选全部选中时 全选
            changeAll(names) {
                // console.log(names)
                // console.log("names：", names)
                if (names.length < this.cartlists.length) {
                    this.selall = false
                } else if (names.length == this.cartlists.length) {
                    this.selall = true
                }
            },

            //    跳转携带参数到确认订单页
            onSubmit() {
                let id = []
                // console.log(this.result)
                this.result.forEach(element => {

                    id.push(element.product_id)
                });
                let idd = id.join(' ')
                this.$router.push({
                    name: 'Orderform',
                    query: {
                        idd
                    },
                })
            },
            // 删除
            dele(id) {
                console.log(id)
                // console.log("ss")
                patchdelete({ carid: id }).then(res => {
                    console.log(res)
                })
            },
            // 返回
            myback(){
                window.history.back()
            }
        },



    }

</script>
<style scoped>
   

    .list {
        width: 100%;
        height: 260px;
        /* background: tomato; */
        border: 1px solid rgb(221, 221, 221);
        /* margin: 0px 0px 20px 0px; */

    }

    .goods-card {
        margin: 0;
        background-color: white;
    }

    .delete-button {
        height: 100%;
    }

    .tag {
        position: absolute;
        left: -35px;
        top: 40px;
    }
</style>