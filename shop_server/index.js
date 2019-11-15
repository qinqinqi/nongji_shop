const Koa = require('koa');
const app = new Koa();

//连接数据库
const {connect} = require('./init.js');
(async () => {
    await connect();
    initSchemas();
})();


app.use(async (ctx) =>{
    ctx.body = "hello word";
});

app.listen(3000, res=>{
    console.log("start shop serve");
});
