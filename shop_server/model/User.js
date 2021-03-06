const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    userId: Schema.Types.ObjectId,  //唯一的标识
    userName: {unique: true, type: String},  //用户名唯一 uinique
    password: String,
    createDate: {type: Date, default: Date.now()},  
});

userSchema.pre('save', function(next) {
    // 随机生成salt  迭代10次
    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            if(err) return next(err);
            this.password = hash;
            next();
        });
    })
});

userSchema.methods = {
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, (err, isMath) => {
                if(!err) resolve(isMath);
                else reject(err);
            })
        })
    }
}

//发布模型
mongoose.set('useCreateIndex', true);
mongoose.model('User',userSchema);