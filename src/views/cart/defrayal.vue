<template>
    <div>
        <van-nav-bar title="支付订单" left-text="返回" left-arrow @click-left="onClickLeft" />

        <br><br><br>
        <p style="text-align: center;color: gray;">订单号：{{orders}}</p><br>

        <!-- vant的单选组件 -->
        <van-radio-group v-model="checked">
            <van-cell-group>
                <van-cell title="支付宝支付" clickable>
                    <template #right-icon>
                        <van-radio name="1" />
                    </template>
                </van-cell>
                <van-cell title="微信支付" clickable>
                    <template #right-icon>
                        <van-radio name="2" />
                    </template>
                </van-cell>
                <van-cell title="余额支付" clickable>
                    <template #right-icon>
                        <van-radio name="3" />
                    </template>
                </van-cell>
            </van-cell-group>
        </van-radio-group>


        <!-- 密码输入框 -->
        <van-password-input :value="value" info="密码为 6 位数字" :focused="showKeyboard" @focus="showKeyboard = true" />
        <!-- 数字键盘 -->
        <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />


        <!-- 底部点击支付 -->
        <div class="bottom" @click="zhifu"> 确认支付 </div>
    </div>
</template>

<script>
    import { postyuer, postcretaeOrder, postparword } from '../../api/user.js'
    import md5 from 'js-md5'
    export default {
        data() {
            return {
                // 订单号
                orders: [],
                // 默认选中第一个
                checked: '1',
                // 密码框
                value: '',
                //  是否显示密码框
                showKeyboard: false,
                // 监听到密码框里的value
                newval: ""
            }
        },
        watch: {
            value(newval, oldval) {
                // console.log(newval,oldval)
                this.newval = newval;
                // console.log("SsS" + this.newval)
            }
        },
        created() {
            let orde = this.$route.query.orde
            // 创建订单
            postcretaeOrder(orde).then(res => {
                console.log(res)
                let dingdan = res.data;
                dingdan.forEach((ele) => {
                    this.orders.push(ele.orderNumber)
                    console.log(this.orders)
                })
            })

        },
        methods: {

            // 返回上一页
            onClickLeft() {
                window.history.back()
            },
            // 选择支付方式
            zhifu() {
                console.log(this.checked)



                if (this.checked == 1) {        // checked为1支付宝支付


                } else if (this.checked == 2) { //checked为2微信支付

                } else if (this.checked == 3) { // checked为3余额支付
                    // 调用密码框
                    this.showKeyboard = true
                }
            },
            // 密码框
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
                // console.log(this.value)

                // 判断密码长度等于6调用
                if (this.value.length == 6) {
                    // 验证密码
                    let val = md5('123456')
                    // console.log(val)
                    // console.log(val)
                    postparword(val).then(res => {
                        console.log(res)
                        // 密码验证成功调用余额支付接口
                        let dingdan = this.orders.join(' ')
                        // let dingdan ="Oct20200910205058341578152"
                        console.log(dingdan)
                        postyuer(dingdan).then(res => {
                            console.log(res)
                        })
                    })
                }

            },
            // 点 × 删除密码框值
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            },

        },
    }
</script>
<style scoped>
    .radio {
        width: 100%;
        height: 120px;
        border-bottom: 1px solid gray;
    }

    .radio p {
        padding: 0px 40px;
        display: flex;
        font-size: 30px;
        justify-content: space-between;
        line-height: 80px;
    }

    .bottom {
        width: 100%;
        height: 120px;
        background: rgb(9, 157, 255);
        text-align: center;
        font-size: 29px;
        position: fixed;
        bottom: 0px;
        line-height: 120px;
        color: white;

    }
</style>