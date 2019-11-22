Koa是Express的下一代基于Node.jsweb开发框架，目前有1.x和2.0两个版本



# 一、Koa安装

Koa需要node7以上

* npm init -y      初始化项目
* npm i Koa -S    将koa安装到开发环境中去





# 二、async和await   ---->  ES7

* JS异步操作解决方案
* async函数返回的是promise对象
* await只能在async函数的内部使用，函数前加上这个参数后会优先执行



# 三、get/post请求接收

* get和post的区别
  * 在传输上：是HTTP的两种请求方式，用的都是同一个传输层协议
  * 获取数据用get，提交数据用post
  * GET数据长度是受限制的，POST无限制
  * POST比GET更安全（因为发送数据时get送发送的数据是URL的一部分）
  * GET幂等/POST不幂等------->(幂等：是指同一个请求方法执行多次和仅执行一次的效果是完全相同的)
* query和querystring的区别
  * query：返回的是格式化好的参数对象
  * querystring：返回的是字符串




# 四、koa-bodyparser

Koa的中间件，用来解析post请求发过来的参数

npm i koa-bodyparser -S



```javascript
const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());

app.use(async ctx => {
    let data = ctx.request.body;
    ctx.body = data;
    console.log(data);
});

app.listen(3000, () => {
    console.log(' 服务开启成功');
});
```





# 五、koa-router

npm i koa-router -S

* cookie

```javascript
const Koa = require('koa');
const app = new Koa();

app.use( async ctx => {
    if(ctx.url === '/cookie'){
        ctx.cookies.set(
            'name', 'zhangsan', {
                domain: 'localhost',   //域名
                path: '/cookie',  //cookie路径
                maxAge: 24 * 60 * 60 * 1000,  //cookie有效时间
                expires: new Date('2019-11-30'),  //cookie过期的时间
                httpOnly: false,  //是否只是服务器可访问，默认为trus
                overwrite: false,  //表示是否覆盖以前设置的同名cookie
                secure: false  //默认是false，设置成true表示只有https可以访问
            }
        )
        ctx.body = "cookie success";
    }else{
        ctx.body = 'no cookie';
    }
    
})

app.listen(3000, () => {
    console.log(' 服务开启成功');
});
```



