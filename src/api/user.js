import api from './index'
// axios
import request from '@/utils/request'


//首页
export function gethome(data) {
    return request({
        url: api.gethome,
        method: 'get',
        data
    })
}
// 首页商品列表
export function gethomelist(params) {
    return request({
        url: api.gethomelist,
        method: 'get',
        params
    })
}
// 详情页数据
export function getdetails(id) {
    return request({
        url: api.getdetails,
        method: 'get',
        params: {
            goodsId: id
        }

    })
}


// 添加购物车

export function postaddcart(params) {
    return request({
        url: api.postaddcart,
        method: 'post',
        params

    })
}
// 请求购物车的数据
export function getaddcartlist(params = { pageSize: 8 }) {
    return request({
        url: api.getaddcartlist,
        method: 'get',
        params



    })
}

// 分类列表数据
export function getclassdata(data) {
    return request({
        url: api.getclassdata,
        method: 'get',
        data

    })
}

// 验证手机号是否注册
export function getphone(phone) {
    return request({
        url: api.getphone,
        method: 'get',
        params: {
            phone
        }

    })
}
// 验证用户名是否可用
export function getuser(LoginName) {
    return request({
        url: api.getuser,
        method: 'get',
        params: {
            LoginName
        }

    })
}

// 发送验证码
export function getchit(params) {
    return request({
        url: api.getchit,
        method: 'get',
        params,
        // phone,
        // codeType:0
    })
}
// 二级导航列表数据
export function getclasstwo(params) {
    return request({
        url: api.getclasstwo,
        method: 'get',
        params,
        // phone,
        // codeType:0
    })
}

// 修改购物车商品是否是选中状态
export function patchchecked(params) {
    return request({
        url: api.patchchecked,
        method: 'patch',
        params
    })
}
// 删除购物车的商品
export function patchdelete(params) {
    return request({
        url: api.patchdelete,
        method: 'patch',
        params,
        // headers: {
        //     "Content-Type": "application/json; charset=utf-8"
        // }

    })
}
// 订单信息
export function getorderform(idd) {
    return request({
        url: api.getorderform,
        method: 'get',
        params:{
            goodsid:idd
        }
        // headers: {
        //     "Content-Type": "application/json; charset=utf-8"
        // }

    })
}
// 获取用户的收货地址
export function getdizhi(order) {
    return request({
        url: api.getdizhi,
        method: 'get',
        params:{
            order 
        }
    })
}

//创建订单
export function postcretaeOrder(params) {
    return request({
        url: api.postcretaeOrder,
        method: 'post',
        params
    })
}

// 进行订单的支付 （余额）
export function postyuer(dingdan) {
    return request({
        url: api.postyuer,
        method: 'post',
        params:{
            orderNum:dingdan
        }
    })
}
// 验证支付密码
export function postparword(val) {
    return request({
        url: api.postparword,
        method: 'post',
        params:{
            paypwd:val
        }
    })
}



// 注册
// export function postloginA(params) {
//   return request({
//     url: api.postloginA,
//     method: 'post',
//     params,
//   })
// }

// 登录
// export function login(data) {
//   return request({
//     url: api.Login,
//     method: 'post',
//     data
//   })
// }

// // 用户信息 post 方法
// export function getUserInfo(data) {
//   return request({
//     url: api.UserInfo,
//     method: 'post',
//     data,
//     hideloading: true
//   })
// }

// // 用户名称 get 方法
// export function getUserName(params) {
//   return request({
//     url: api.UserName,
//     method: 'get',
//     params,
//     hideloading: true
//   })
// }
