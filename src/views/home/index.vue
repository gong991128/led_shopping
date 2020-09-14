<!-- home -->
<template>
  <div>
    <!-- 头部LE购 -->
    <div class="header">
      <img class="headerimg" src="../../../public/home/LE_logo.png">
    </div>
    <!--搜索  -->
    <div class="search">
      <van-search placeholder="请输入搜索的商品" style="height:100%; background:white;" @click="sousuo" />
    </div>

    <!-- 首页轮播图 -->
    <Swiper :swiperimgUrl=swiperimgUrl />

    <!-- 首页分类 -->
    <ClassIfy :classifylist=classifylist />

    <!-- 标签栏 -->
    <van-tabs sticky title-active-color="rgb(254,120,145)" color="rgb(254,120,145)">

      <van-tab title="流行">

        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="van-tab ">
            <div class="list" v-for="(item,index) in list1" @click="onClick(item.goodsId)">
              <img :src="item.goodsLogo" width="100%" alt="">
              <span class="text">{{item.goodsName}}</span>
              <span style="color: rgb(254,120,145);">{{item.goodsOldPrice}}</span>
            </div>
          </div>
          <van-cell v-for="(item,index) in list" :key="item">
            <template>
              <div class="van-tab ">
                <div class="list" v-for="(item,index) in list1" @click="onClick(item.goodsId)">
                  <img :src="item.goodsLogo" width="100%" alt="">
                  <span class="text">{{item.goodsName}}</span>
                  <span style="color: rgb(254,120,145);">{{item.goodsOldPrice}}</span>
                </div>
              </div>
            </template>
          </van-cell>
        </van-list>

      </van-tab>

      <van-tab title="新款">
        <div class="van-tab ">
          <div class="list" v-for="(item,index) in list2" @click="onClick(item.goodsId)">
            <img :src="item.goodsLogo" width="100%" alt="">
            <span class="text">{{item.goodsName}}</span>
            <span style="color: rgb(254,120,145);">{{item.goodsOldPrice}}</span>
          </div>
        </div>
      </van-tab>
      <van-tab title="精选">
        <div class="van-tab ">
          <div class="list" v-for="(item,index) in list3" @click="onClick(item.goodsId)">
            <img :src="item.goodsLogo" width="100%" alt="">
            <span class="text">{{item.goodsName}}</span>
            <span style="color: rgb(254,120,145);">{{item.goodsOldPrice}}</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import { gethome } from '@/api/user.js'
  import { gethomelist } from '@/api/user.js'
  import Swiper from '@/components/Swiper'  //轮播图组件
  import ClassIfy from './home/Classify.vue'  //分类组件

  export default {
    components: {
      Swiper,
      ClassIfy
    },
    data() {
      return {
        swiperimgUrl: [], //轮播图
        classifylist: [],  //分类列表
        list1: [], //商品列表
        list2: [],
        list3: [],

        list: [],
        loading: false,
        finished: false,
      }
    },
    created() {
      // 首页
      gethome().then((res) => {
        this.swiperimgUrl = res.data[1]
        this.classifylist = res.data[0]
      })
      // 首页商品列表1
      gethomelist({ sortType: "syn", page: 2 }).then((res) => {
        this.list1 = res.data
      })
      // 首页商品列表2
      gethomelist({ sortType: "new", page: 2 }).then((res) => {
        this.list2 = res.data
      })
      // 首页商品列表3
      gethomelist({ sortType: "sell", page: 2 }).then((res) => {
        this.list3 = res.data
      })
    },
    methods: {

      // 跳转详情页
      onClick(id) {
        // console.log(id)
        this.$router.push({
          name: "Details",
          query: {
            id: id
          }
        })
      },
      sousuo() {
        // alert("aa")
        this.$router.push('Search')
      },
      onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求

        // 首页商品列表1
        setTimeout(() => {
          gethomelist({ sortType: "syn", page: 4 }).then((res) => {
            this.list = res.data
          })


          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 1000);

      }
    }
  }
</script>
<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .header {
    width: 100%;
    height: 95px;
    /* background: forestgreen; */
    box-sizing: border-box;
    background-color: white;
  }

  .headerimg {
    width: 420px;
    height: 400px;
    /* line-height: 500px; */
    margin-top: -150px;
    margin-left: 20%;
  }

  .search {
    width: 100%;
    height: 74px;
    background: teal;
  }

  .swiper {
    width: 100%;
    height: 390px;
  }



  .van-tab {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .list {
    width: 45%;
    height: 500px;
    /* background: forestgreen; */
    margin: 5px 0px;
    text-align: center;
  }

  .text {
    /* max-width: 110px; */

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
</style>