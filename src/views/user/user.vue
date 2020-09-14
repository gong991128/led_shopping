<template>
  <div class="body">
    <div class="nav">
      <div class="nav-1">
        <van-image round width="2rem" height="2rem" src="3.jpg" />
        <div class="nav-2">
          <span></span>

          <span class="iconfont icon-shouji">15103773574</span>
        </div>
        <div class="nav-3">
          <span @click="qdao" ref="qd">点击签到</span>
        </div>
      </div>
      <div class="nav-4">
        <span class="span-1">每天领红包，年卡仅0.12元/天</span>
        <button class="span-2" @click="ktong">立即开通<b>></b></button>
      </div>
    </div>
    <div class="content">
      <div class="content-1">
        <span @click="goto('/yue')">账号余额<b>10000.00</b>元</span>
        <span>积分<b>1</b>分</span>
      </div>
      <div class="content-2">
        <div class="content-3">
          <span style="font-size: 0.4rem;"><b>查看全部</b></span>
          <span style="color: gray;" @click="goto('/dingd')">查看全部订单<b>></b></span>
        </div>
        <div class="content-4">
          <div @click="tz(0)" >
            <van-icon
              size="0.6rem"
              class="iconfont icon-thin-_home_flat"
              badge="0"
            />
            <br />
            全部
          </div>
          <div @click="tz(1)" >
            <van-icon size="0.6rem" class="iconfont icon-qianbao" badge="0" />
            <br />
            待支付
          </div>
          <div @click="tz(2)" >
            <van-icon size="0.6rem" class="iconfont icon-93shouhuo" badge="0" />
            <br />
            待收货
          </div>
          <div @click="tz(3)" >
            <van-icon size="0.6rem" class="iconfont icon-xiaoxi1" badge="0" />
            <br />
            待评价
          </div>
        </div>

        <div class="content-5">
          <img src="4.png" alt=""  @click="ktong"/>
        </div>
      </div>

      <div class="content-6">
        <div class="content-7">
          <span style="font-size: 0.4rem;"><b>我的订单</b></span>
        </div>
        <div class="content-8">
          <div>
            <van-icon
              size="0.6rem"
              class="iconfont icon-icon_huabanfuben"
  
            />
            <br />
             收货地址
          </div>
          <div>
            <van-icon size="0.6rem" class="iconfont icon-shoucang2" />
            <br />
            我的收藏
          </div>
          <div>
            <van-icon size="0.6rem" class="iconfont icon-zuji"  />
            <br />
            浏览记录
          </div>
          <div @click="Dlu">
            <van-icon size="0.6rem" class="iconfont icon-shezhi"  />
            <br /> 
            设置
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      type: true,
    };
  },
  methods: {
    // 签到
    qdao(qd) {
      //点击
      this.$refs.qd.innerHTML = "已签到";

      if (this.type == true) {
        Toast.loading({
          message: "正在签到",
          forbidClick: true,
        });
        this.type = false;
      } else {
        Toast.success("今日已签到，明天再来吧");
      }
    },
    // 开通
    ktong() {
      Toast.loading({
        message: "模块开发中，尽情期待",
        forbidClick: true,
      });
    },
    // 余额
    goto(path){
      this.$router.push({
        path:path
        
      })
    },
    // 跳转订单
    tz(index){
      this.$router.push({
        path:"/dingd",
        query:{
          index:index
        }
      })

    },
    // 登录
    Dlu(){
this.$router.push('Login')
    }
  },
};
</script>

<style scoped>
.body {
  width: 100%;
  font-size: 0.35rem;
  height: 10vh;
}
.nav {
  width: 100%;
  height: 4.2rem;
  background: #0273ff;
  position: relative;
}
.nav-1 {
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  display: flex;
}
.nav-2 {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 0.4rem;
}
.nav-2 span {
  padding-top: 0.3rem;
}
.nav-3 {
  position: absolute;
  left: 7rem;
  width: 2rem;
  float: left;
  top: 0.4rem;
}
.nav-3 span {
  background: #ff6565;
  height: 1.2rem;
  width: 2rem;
  color: white;
  line-height: 1.2rem;
  text-align: center;
  border-radius: 0.7rem;
  display: inline-block;
}
.nav-4 {
  width: 90%;
  margin-left: 0.5rem;
  height: 1.2rem;
  line-height: 1.2rem;
  background-image: linear-gradient(to left, #37445d, #3c4963, #4a5b7b);
  position: absolute;
  top: 3rem;
  border-radius: 0.3rem 0.3rem 0 0;
}
.span-1 {
  color: white;
  margin-left: 0.5rem;
  display: inline-block;
}
.span-2 {
  width: 2.3rem;
  height: 0.6rem;
  border-radius: 0.4rem;
  line-height: 0.6rem;
  border: 1px solid #21bf50;
  background-image: linear-gradient(to left, #3adb5f, #21bf50, #21bf50);
  margin-left: 1.2rem;
}
.content {
  width: 100%;
  background: #efefef;
  height: 13rem;
  position: relative;
}
.content-1 {
  position: absolute;
  top: 0.5rem;
  width: 90%;
  background: white;
  height: 1.8rem;
  line-height: 1.8rem;
  margin-left: 0.5rem;
  border-radius: 0.2rem;
  display: flex;
  justify-content: space-around;
}
.content-2 {
  position: absolute;
  top: 2.9rem;
  width: 90%;
  background: white;
  height: 3rem;
  /* line-height: 2.5rem; */
  margin-left: 0.5rem;
  border-radius: 0.2rem;
}
.content-3 {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.content-3 span {
  margin: 0.5rem;
}
.content-4 {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.iconfont {
  color: rgb(173, 173, 173);
}
.content-5 {
  position: absolute;
  top: 3.6rem;
  width: 100%;
  background: white;
  height: 2.2rem;
  /* line-height: 2.5rem; */
  border-radius: 0.2rem;
  line-height: 2.2rem;
}
.content-5 img {
  width: 90%;
  display: inline-block;
  margin: 0.2rem 0.5rem;
}
.content-6 {
  position: absolute;
  top: 9.2rem;
  width: 90%;
  background: white;
  height: 3rem;
  /* line-height: 2.5rem; */
  margin-left: 0.5rem;
  border-radius: 0.2rem;
}
.content-7 {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.content-7 span {
  margin: 0.5rem;
}
.content-8 {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.icon-shouji{
  color: white;

}
</style>