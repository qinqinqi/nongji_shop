//引入mockjs
import Mock from 'mockjs'
//使用mockjs模拟数据
// 数据模板定义规范：'name | rule': value
// Mock.mock('http://www.ceshi.com/getVariety', {
//     "data|1-100": 
//       [
//         {
//           "index|+1": 1,//随机生成索引值
//           "id": "@integer(10000, 99999)",//随机生成id
//           "date": "@datetime",//随机生成日期时间
//           "name": "@cname",//随机生成中文名字
//           "img": "@dataImage('200 x 200', '推荐' + @integer(1, 100))",//随机生成图片，生成的图片是一个色块
//           "text": "@cparagraph",//随机生成一段文本
//           "price": "@integer(10, 20) + '万' ",
//           // "stars|1-5": 5,//随机生成1-5的数字
//         }
//       ]
// //data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
// });

let Random = Mock.Random;

//随机生成推荐商品
let varietyData = () => {
  let varietyList = []; //存放推荐商品的数组
  for(let i=0; i<100; i++){
    let variety = {
      name: Random.ctitle(5, 20),
      img: Random.dataImage('200 x 200', '推荐' + Random.integer(1, 100)),
      price: Random.integer(10, 20) + '万',
      owner: Random.cname()
    }
    varietyList.push(variety);
  }
  return varietyList;
}

//用户注册
let registUser = () => {

}

Mock.mock("http://www.ceshi.com/getVarietyItem", varietyData);
Mock.mock("http://www.ceshi.com/registUser", registUser);