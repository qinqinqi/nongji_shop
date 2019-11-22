const Koa = require('koa');
const app = new Koa();

// 解决跨域
const cors = require('koa2-cors');
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));

// 接收前端post请求
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());

//加载路由
const Router = require('koa-router');
let user = require('./controller/user.js');
let product = require('./controller/Product.js');
let type = require('./controller/Type.js');
let cart = require('./controller/Cart.js');

let router = new Router();
//  '/user'对应的是控制器里的user
router.use('/user', user.routes());
router.use('/product', product.routes());
router.use('/type', type.routes());
router.use('/cart', cart.routes());

app.use(router.routes());
app.use(router.allowedMethods());

//连接数据库
const {connect, initSchemas} = require('./init.js');
(async () => {
    await connect();
    initSchemas();
})();


app.use(async (ctx) =>{
    ctx.body = "hello word";
});

app.listen(3000, res=>{
    console.log("start shop serve 3000");
});
