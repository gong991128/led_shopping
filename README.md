### 1.移动端项目环境搭建开发流程
https://blog.csdn.net/weixin_43638968/article/details/108272572

### 2. 技术栈
 
api封装  vant  rem   

### 3.所用到的插件   

**qs插件**

> 用法：（用来解析  qs.parse()是将URL解析成对象的形式  
> qs.stringify()是将对象 序列化成URL的形式，以&进行拼接）

1.安装

npm install qs

2.使用
let data = qs.stringify({

    "username":this.username,

    "password":this.password

}); 

**md5加密插件**
 1.安装模块 
  npm install md5-node --save 
2.在服务端引入模块 
  var md5=require('md5-node'); 
3.使用 
  md5('123456'); 

### 4.接口文档

https://october.w.eolinker.com/#/share/project/api/detail?groupID=1029756&apiID=4214387&shareCode=ZsQNDF&shareToken=$2y$10$484ZXd8.2LuVoUK.JNrAve1HoeU1pW5ml9LnMIFIe24Y7WwaZBlj6&shareID=256523



### 6.githup效果地址

https://github.com/teach-tian/mallapp

### 7.最终效果

http://hj0819.top/#/LoginPage 
