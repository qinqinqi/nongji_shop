# 技术栈

vue-cli + scss + Vant + ES6 +  Node.js + koa2 + MongoDB



# 项目搭建

* 安装node   （node -v）

* 安装vue-cli ：npm install -g @vue/cli   (如果是mac需要在npm前边加上suho获得权限)

  * 网络差安装失败的话可以把文件删除重新安装
  * vue -V  (一定要使用大V)

* 初始化项目：vue create 项目名    或者vue ui

  * 可以选择默认安装和自定义安装  (此项目采用的是自定义)

* 进入项目：cd shop

* 运行项目：npm run serve

* 安装vant：npm i vant -S   (-S指的是--save)

  * 导入所有的组件
  * 按需导入组件

* 安装 vue-awesome-swiper：npm i vue-awesome-swiper --save

  ​


# 服务端搭建

## koa2

* 初始化项目：npm init -y
* 安装koa：npm i koa -S



## Mongodb

`Mongodb`是非关系型数据库，查询语句使用的是独特的Mongodb查询方式

`MsSQL`是关系型数据库，查询语句使用的是传统的sql语句，在海量处理数据的时候效率会很低

* 安装Mongodb
* 启动数据库：mongod
* 数据库管理工具Robo 3T：[https://robomongo.org/](https://robomongo.org/)
  * create---name-----test----save

## mongoose

* mongoose：Node和MongoDB数据通讯的数据建模库(纽带)
* npm i mongoose -S
* 连接数据库  init.js
* schema定义（User.js）数据模型并引入  
* npm i glob -S



# 项目运行

```
git clone   ····

cd shop_nj

npm install

npm run serve
```



# 项目要点

* 路由懒加载
* 下拉刷新
* 图片懒加载  vant
* 在servie.config.js中统一接口配置



# 项目功能

* 用户登录/注册
* 商品分类
* 商品详情
* 购物车


# 项目结构





# mock.js









