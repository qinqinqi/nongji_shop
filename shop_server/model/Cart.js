const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const cartSchema = new Schema({
    ID: ObjectId,
    productId: {
        type: ObjectId,
        ref: 'Product'  //指向联合查询的集合
    },
    userId: ObjectId,
    checked: {type: Boolean, default: true},
    createDate: {type: Date, default: Date.now()}
});

// 发布模型
mongoose.model('Cart', cartSchema);