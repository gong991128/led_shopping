const api = {
  // Login: '/user/login',
  // UserInfo: '/user/userinfo',
  // UserName: '/user/name'
  gethome: 'api/Home/getHomeREC',
  gethomelist: '/api/Home/getHomeShowGoods',
  getdetails: '/api/Goods/GetGoodsInfo',
  getclassdata: '/api/Goods/getCatsTree',
  getphone: '/api/Verify/GetPhone',
  getchit: 'api/SMSCode/GetCode',
  getuser: '/api/Verify/LoginName',
  // postloginA :'api/LoginPage/AddLogin',
  getclasstwo: '/api/Goods/getCadGoods',
  // 添加购物车
  postaddcart: '/api/Cart/addCart',
  // 请求添加到购物车的数据
  getaddcartlist: '/api/Cart/getCart',
  // 修改购物车商品是否是选中状态
  patchchecked: '/api/Cart/pathCartChecked',
  //删除购物车的商品
  patchdelete :'/api/Cart/DeleteCart',
// 订单信息
getorderform:'api/Order/getOrderInfo', 
// 获取用户的收获地址
getdizhi  :'/api/UserInfo/getArea',
// 创建订单
postcretaeOrder:'/api/Order/cretaeOrder',
// 进行订单的支付 （余额）
postyuer :'/api/Order/payOrder',
// 验证密码
postparword :'/api/Order/verifyPayPWD',




}

export default api
