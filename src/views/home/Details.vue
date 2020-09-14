<!-- details -->
<template>
    <div>
        <div class="header">
            <p class="icon">
                <van-icon style="font-size: 24px;" name="arrow-left" @click="back()" />
            </p>
            <van-tabs line-height="0" scrollspy sticky title-active-color="red" style="border-color:#00000000 ;">
                <van-tab title="商品">
                    <img :src="detailsItem.goodsLogo" width="100%" height="300px" alt="">
                    <p> {{detailsItem.goodsName}}</p>
                    <span style="color:rgb(254,120,145); font-size: 24px;">{{detailsItem.goodsPrice}}</span>
                    <s>{{detailsItem.goodsOldPrice }}</s>

                    <p class="num">
                        <span>销量{{itemtwo.sells}}</span>
                        <span>收藏{{itemtwo.snum}}</span>
                        <span>{{itemtwo.shopAre}}</span>
                    </p>

                    <div class="num2">
                        <p v-for="(item,index) in itemseveral">
                            <img :src="item.icon" width="10%" alt="">
                            {{item.name}}
                        </p>
                    </div>

                </van-tab>
                <van-tab title="评论">

                </van-tab>
                <van-tab title="详情">

                </van-tab>
                <van-tab title="推荐">

                </van-tab>
            </van-tabs>
        </div>

        <!-- 底部 -->
        <div class="footer">
            <div class=""></div>
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
                <van-goods-action-icon icon="cart-o" text="购物车" @click="tiao"  :badge='badge'  />
                <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
                <van-goods-action-button type="warning" text="加入购物车" @click="add" />
                <van-goods-action-button type="danger" text="立即购买" />
            </van-goods-action>
        </div>


    </div>
</template>
<script>
    import { getdetails, postaddcart, getaddcartlist } from '@/api/user.js'
    export default {
        data() {
            return {
                // list[0]
                detailsItem: [],
                // list[1]
                itemtwo: [],
                // list[2]
                itemseveral: [],
                // 当前id
                _thisid: "",
                badge: "",
                list:[],//加入cart所有数据
                info:[],
                
            }
        },
        created() {
            let id = this.$route.query.id
            // console.log(id)
            getdetails(id).then((res => {
                // console.log(res.data[1])
                this._thisid = res.data[1].shopId
                // console.log(res.data[2])
                this.detailsItem = res.data[0]
                this.itemtwo = res.data[1]
                this.itemseveral = res.data[2]
                // this.itemseveral = res.data[3]
            }))
        },
        methods: {
            // 返回上一页
            back() {
                window.history.back()
            },

            add() {
                
                // 加入购物车携带参数
                postaddcart({
                    product_id: this.$route.query.id

                }).then((info => {
                    console.log(info)
                    this.info = info;
                }))

                // 获取购物车添加的数据
                getaddcartlist().then((res) => {
                    console.log(res.data)
                    if(this.info.code ==201){
                        // console.log("aaaaaaa")
                        let list = res.data;
                        if(list[list.length-1]&&list.length!=0){
                            // 如果list最后一项不等于null，并且长度不为0，跳过
                        }else{
                            if(list.length==0){
                                //list长度为0，跳过
                            }else{
                                // 长度不为0，最后一项为null，移除null
                                list.pop()
                            }
                        }
                       
                    }
                    var cartlists = res.data
                    this.badge = res.data.length
                    // console.log(this.badge )
                    this.$store.dispatch('ADDCARTLIST', cartlists)
                })



            },
            tiao() {
                this.$router.push('/cart')
            }
        },

    }
</script>
<style>
    .header {
        position: relative;
        width: 100%;
        top: 0;
    }

    .icon {
        position: absolute;
        float: left;
        z-index: 1;
        top: 0;
    }

    .num {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        color: gray;
    }

    .num2 {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
</style>