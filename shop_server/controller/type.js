const Koa = require('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs = require('fs');

router.get('/insertType', async (ctx) => {
    fs.readFile('./data/type.json', 'utf8', (err, data) => {
        // 字符串装换成对象
        data = JSON.parse(data);
        console.log(data);
        let count = 0; // 计数器
        const Type = mongoose.model('Type');
        data.map((value, index) => {
            console.log(value);
            let type = new Type(value);
            type.save().then( () => {
                count++;
                console.log("成功" + count);
            }).catch(err => {
                console.log("失败啦：" + error);
            })
        })

        ctx.body = '导入数据';
    });
})
router.get('/getTypes', async (ctx) => {
    const Type = mongoose.model('Type');
    await Type.find({}).exec().then( res => {
        ctx.body = res;
    })
})

module.exports = router; 