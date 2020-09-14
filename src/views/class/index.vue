<!-- class -->
<template>
    <div class="body">
        <div class="header">
            商品分类
            <van-search placeholder="请输入搜索关键词" />
        </div>

        <div class="content">
            <div class="aside">
                <p v-for="(item,index) in classdata" :key="index" @click="onClick(index,item.cat_id)"
                    :class="defaultIndex === index ?'active':'disActive'">
                    {{item.cat_name}}
                </p>

            </div>
            <div class="main">
                <!-- sort -->
                <div class="sort">
                    <p v-for="(item,index) in sort" :key="index" @click="sortcolor(index)"
                        :class="defaults === index ?'sortColor':''">{{item}}
                    </p>
                </div>
                <!-- 渲染二级导航 -->
                <div class="classtwo">
                    <div v-for="(item,index) in classtwo">
                        <img :src="item.goodsLogo" width="100%">
                        <p class="text">{{item.goodsName}}</p>
                        <p style="text-align: center;line-height: 20px; "> <span
                                style="color:rgb(254,120,145);">￥{{item.goodsPrice}}</span>
                            <span>{{item.goodsFav}}</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { getclassdata, getclasstwo } from '@/api/user.js'

    export default {
        data() {
            return {
                sort: ["价格", "销量", "新品"],
                classdata: [],
                defaultIndex: 0,
                defaults: 0,
                classtwo: [],
                goodsBuyNum: []

            }
        },
        created() {
            // 一级导航
            getclassdata().then(res => {
                // console.log(res.data)
                this.classdata = res.data
            })
            // 默认选中第一个然后渲染
            getclasstwo({ cat_id: 85 }).then((res => {
                // console.log(res.data)
                this.classtwo = res.data

            }))
        },

        methods: {
            // 点击一级导航切换
            onClick(index, id) {
                // console.log(id)
                // this.$router.push({params:{id:id}})
                this.defaultIndex = index
                // 二级导航渲染
                getclasstwo({ cat_id: id }).then((res => {
                    console.log(res.data)
                    // console.log(res.data.goodsBuyNum)

                    this.classtwo = res.data


                }))

            },
            // 筛选排序
            sortcolor(index) {
            
                if (index == 0) {
                    // console.log('wd')
                  this.classtwo.sort((a,b)=>{
                      return   b.goodsPrice-a.goodsPrice
                  })

                }else if(index == 1){
                    this.classtwo.sort((a,b)=>{
                        return a.goodsFav -b.goodsFav
                    })
                }

                console.log(index)
                this.defaults = index
            }
        },
        mounted() { },
    }
</script>
<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    .body {
        background: white;
    }

    .header {
        width: 100%;
        height: 160px;
        text-align: center;
        font-size: 30px;
        line-height: 78px;
        /* background: rgb(216, 194, 190); */


    }

    .content {
        width: 100%;
        height: 1000px;
        display: flex;
        /* background: tomato; */
    }

    .aside {
        width: 25%;
        height: 100%;
        background: rgb(243, 241, 241);
        /* float: left; */
        /* display: flex;
        flex-direction: column; */
        /* box-sizing: border-box; */
        /* padding-left: 20px; */


    }

    .aside p {
        box-sizing: border-box;
        width: 100%;
        height: 80px;
        line-height: 80px;
        font-size: 18PX;
        /* background: tomato; */
        padding-left: 20px;
        margin-bottom: 20px;

    }

    .active {
        /* color: red; */
        border-left: 7px solid red;
        background: white;
    }

    .main {
        width: 100%;
        height: 100%;
        /* background: rgb(37, 221, 221); */
        box-sizing: border-box;

    }

    .sort {
        width: 100%;
        height: 80px;
        background: rgb(255, 255, 255);
        display: flex;
        font-size: 28px;
    }

    .sortColor {
        color: rgb(254, 120, 145);
        border-bottom: 2px solid rgb(254, 120, 145);

    }

    .sort p {
        text-align: center;
        width: 70px;
        height: 65px;
        line-height: 70px;
        /* float: left; */
        margin: 0px 55px;
        line-height: 80px;
    }

    .classtwo {
        width: 100%;
        height: 100%;
        /* background: rgb(46, 56, 56); */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        overflow: scroll;

    }

    .classtwo div {
        width: 280px;
        height: 370px;
        /* background: firebrick; */
        margin-bottom: 4px;
        border-right: 50%;
        /* float: left; */
    }

    .text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }
</style>