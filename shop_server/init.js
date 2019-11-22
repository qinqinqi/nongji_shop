//这个文件用来初始化mongoose

const mongoose = require('mongoose');
const db = 'mongodb://localhost/shop';  //数据库类型://数据库IP:端口（27017）/数据库名

//引入所有的schema
const glob = require('glob');
const path = require('path');  //path是自带的不需要安装
exports.initSchemas = () =>{
    glob.sync(path.resolve(__dirname, './model','*.js')).forEach(require);
}

exports.connect = () => {
    //连接数据库
    mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology: true});
    //监听数据库连接，连接失败重新连接
    mongoose.connection.on('disconnected', ()=>{
        mongoose.connect(db);
        console.log('******重新连接数据库******')
    });
    //链接报错
    mongoose.connection.on('error', err=>{
        console.log(err);
        mongoose.connect(db);
    });
    //连接的时候
    mongoose.connection.once('open', ()=>{
        console.log('mongodb connected success');
    });


}