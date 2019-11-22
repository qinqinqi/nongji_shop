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

* 安装vuex：vuex是一种状态管理模式

  ​


# 服务端搭建

* 初始化项目：npm init -y



## koa2

* 安装koa：npm i koa -S
* 安装中间件：npm i koa-bodyparser -S  (解析post请求)
* 安装路由：npm i koa-router -S
* 模板ejs：npm i koa-views ejs -S
* koa-session：用于权限认证





## Mongodb

`Mongodb`是非关系型数据库，查询语句使用的是独特的Mongodb查询方式

`MsSQL`是关系型数据库，查询语句使用的是传统的sql语句，在海量处理数据的时候效率会很低

* 安装Mongodb，具体配置看MongoDB.md文件
* 启动数据库：`mongod`
* 数据库图形化工具`Robo 3T`：[https://robomongo.org/](https://robomongo.org/)
  * create---name-----test----save


* `npm i mongoose -S`            mongoose：Node和MongoDB数据通讯的数据建模库(纽带)
* `init.js`：连接数据库
* `schema`：定义数据模型（在model中完成）并引入  （在init中引入）
* `glob` ：   npm i glob -S
* 安装`koa-router` ： npm i koa-router -S
* 解决跨域：npm i koa2-cors -S



# 项目运行

```
git clone   ····

cd shop_server
npm install
node index

cd shop_nj
npm install
npm run serve
```




# 项目功能

* 用户注册
  * 前端页面编写
  * Axios发送请求
  * koa路由：npm i koa-router -S    配置路由
  * Post参数配置：npm i koa-bodyparser -S
  * 跨域： npm i koa2-cors -S
  * 加盐加密： npm i bcrypt -S
* 用户登录
  * Axios发送请求
  * bcryptjs.compare
  * vuex：记录用户的登录状态
* 商品分类
  * 读取json文件，写入数据库
  * 前端页面编写
  * 下拉刷新  van-pull-refresh @refresh
  * 下拉加载  van-list @load
  * 分页
* 商品详情
  * 路由传参、命名路由、带参路由
  * params  VS  query
  * 详情页编写
  * 指定路由不显示公共组件
* 购物车
  * 判断登录状态
  * 多集合查询




# mock

生成随机数据，拦截jax请求

## 好处

* **1、团队可以并行开发**

  * 有了mock前后端人员只需要定义好接口文档就可以并行工作，不会出现一个团队等另一个团队的情况。

* **2、开启TDD模式，即测试驱动开发**

  * 单元测试是TDD实现的基石，而TDD经常碰到协同模块尚未开发完成的情况。但是有了mock，当定义好接口文档后，测试人员就可以创建一个mock，把接口添加到自动化测试环境中，提前创建测试。

* 3、可以模拟那些无法访问的资源

  * 比如说你需要调用一个“墙”外的资源来进行调试，就可以自己mock一个

* 4、隔离系统

  * 加入我们需要调用一个post请求，为了获得某个响应，来看当前系统能否正确处理返回的“响应”，但是这个post请求会造成数据库中的数据污染，那么就可以充分利用mock，构造一个虚拟的post请求，我们给他指定返回就好了。

* 5、可以用来演示

  * 当一些真实数据不想演示时，就可以使用mock接口将这些敏感的数据替换掉。

* 6、测试覆盖度

  * 假如有一个接口，有100个不同类型的返回，我们需要测试它在不同返回下，系统是否能够正常响应，但是有些返回在正常情况下基本不会发生，难道你要千方百计地给系统做各种手脚让他返回以便测试吗？比如，我们需要测试在当接口发生500错误的时候，app是否崩溃，别告诉我你一定要给服务端代码做些手脚让他返回500 。。。而使用mock，这一切就都好办了，想要什么返回就模拟什么返回。

  ​







