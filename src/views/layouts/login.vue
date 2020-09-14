<!-- login -->
<template>
    <div class="body">
        <div class="header">
            <img src="../../../public/home/LE_logo_2.png" alt="">
        </div>


        <div class="login" v-for="(item,index) in login" @click="switchs(index)" :key="index"
            :class="deleutIndex === index? 'active':''">
            {{item}}
        </div>

        <!-- 登录 -->
        <div class="loginA" v-show="show==true">
            <div>
                <br><br><br>
                <p>账号</p>
                <el-input v-model="username" placeholder="请输入内容"></el-input>
            </div><br><br>
            <div>
                <p>密码</p>
                <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
            </div>
            <p><input type="checkbox">记住密码</p>

            <p>
                <el-button type="primary" style="width:100%; height: 45px;" @click="denglu">立即登录</el-button>
            </p>
            <p><a href="#">找回密码</a>&nbsp;&nbsp;&nbsp; |<span>还没有注册账号？</span> <a href="#" @click="dzhuce">立即注册</a> </p>
        </div>

        <!-- 注册 -->
        <div class="loginA" v-show="show==false">
            <div>
                <br><br><br>
                <p>手机号码</p>
                <el-input v-model="phoneNumber" placeholder="注册手机为找回密码的唯一凭证""></el-input>
                <p class=" ZCAA" v-show="phone==1"> {{getphonemsg}}</p>
                    <p class=" ZCAA" v-show="phone==2"> 手机号可能输入错误</p>
            </div>
            <div>
                <br>
                <p>登录名</p>
                <el-input v-model=" username" placeholder="中，英文不超过12个字符"></el-input>
                <p class="ZCAA" v-show="user==1">{{getusermsg}}</p>
                <p class="ZCAA" v-show="user==2">登录名不可用</p>
            </div><br>
            <div>
                <p>密码</p>
                <el-input v-model="password" placeholder="3-18位英文，数字，符号，区分大小写" show-password></el-input>
            </div>
            <p>短信验证码</p>
            <p class="loginButton">
                <el-input style="width: 140px;" v-model="yanNumber"></el-input>
                <button @click="yanZheng">获取验证码</button>
            </p>

            <p>
                <el-button type="primary" style="width:100%; height: 45px;" @click="zhuce">立即注册</el-button>
            </p>
        </div>



    </div>
</template>
<script>
    import { getphone, getchit, getuser, postloginA } from '@/api/user.js'
    // 语法糖
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
    import qs from 'qs'
    import md5 from 'js-md5'
    import axios from 'axios'
    export default {
        data() {
            return {
                login: ["登录", "注册"],
                deleutIndex: 0,
                username: '',//账号
                password: '',//密码,
                phoneNumber: '',//手机号码
                yanNumber: "", //验证码
                show: true,
                // 验证手机号是否可用
                yanphone: [],
                //验证手机号状态
                getphonemsg: "",
                getphonecode: '',
                // 验证用户状态
                getusermsg: "",

                // 状态显示隐藏
                phone: 1,
                user: 1
            }
        },
        created() { },
        methods: {


            // 切换登录注册
            switchs(index) {
                console.log(index)
                this.deleutIndex = index
                // 判断下标v-show
                if (index === 0) {
                    this.show = true
                } else {
                    this.show = false
                }
            },
            dzhuce() {
                this.show = false
            },

            // 获取点击验证
            yanZheng() {
                // 验证手机号
                getphone(this.phoneNumber).then((res) => {
                    console.log(res)

                    this.getphonemsg = res.msg
                    this.getphonecode = res.code
                    if (res.code === 200) {
                        this.phone = 1
                    } else {
                        this.phone = 2
                    }

                })

                // 验证用户是否可用
                getuser(this.username).then(res => {
                    console.log(res)
                    this.getusermsg = res.msg
                    if (res.code === 404) {
                        this.user = 1
                    } else {
                        this.user = 2
                    }
                })
                // 获取验证码
                getchit({ phone: this.phoneNumber, codeType: 0 }).then((res => {
                    console.log(res)
                }))
            },
            // 点击注册
            zhuce() {
                let loginA = {
                    phone: this.phoneNumber,
                    LoginName: this.username,
                    LoginPassword: this.password,
                    isPassing: "yes"
                }
                axios.post(`http://www.hj0819.top:44369/api/LoginPage/AddLogin`, qs.stringify(loginA)).then(res => {
                    console.log(res)
                })
            },


            ...mapMutations(['changeLogin']),

            // 点击登录
            denglu() {
                let _this = this;
                const loginB = { 
                    LoginName: this.username,
                    LoginPassword: md5(this.password),
                    isPassing: "yes"
                }

                axios.post(`http://www.hj0819.top:44369/api/LoginPage/Login`, qs.stringify(loginB)).then(res => {
                    // console.log(res.data.tnToken.tokenStr)
                    // this.TOKEN = res.data.tnToken.tokenStr
                    _this.userToken  = res.data.tnToken.tokenStr;
                    // 将用户token保存到vuex中

                    _this.changeLogin({ Authorization: _this.userToken });
                    _this.$router.push('/home');
                    alert('登陆成功');
                })
            },
        },
    }

</script>
<style>
    .body {
        background: white;
    }

    .header {
        width: 100%;
        height: 110px;
        padding-left: 19%;
        line-height: 190px;
        border: 1px solid rgb(226, 226, 226);
        box-sizing: border-box;
    }

    .header img {
        /* width: 200px; */
        height: 80%;
    }

    .login {
        width: 50%;
        height: 100px;
        background: rgb(236, 236, 236);
        font-size: 32px;
        color: rgb(0, 0, 0);
        /* display: flex; */
        float: left;
        text-align: center;
        line-height: 100px;

    }

    .active {
        background: rgb(255, 255, 255);
        /* color: red; */
        color: purple;

    }

    .loginA {
        margin-top: 100px;
        width: 100%;
        height: 1100px;
        /* background: forestgreen; */
        /* z-index: 1; */
        box-sizing: border-box;
        padding: 0px 80px;
    }

    .loginA div {
        width: 100%;
        /* height: 150px; */
        margin-top: 20px;
        /* background: red; */
    }

    .loginA p {
        font-size: 28px;
    }

    .loginButton {
        display: flex;
        justify-content: space-between;
    }

    .ZCAA {
        width: 100%;
        height: 20px;
        color: blue;

    }
</style>