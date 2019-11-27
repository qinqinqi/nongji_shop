<template>
  <div>
    <van-nav-bar title="购物车" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>

    <div class="card" v-if="cartNum != 0">
      <van-card v-for="(item, index) in productList" :key="index" :price="item.price" :desc="item.company" :title="item.name" :thumb="item.img">
        <div slot="footer">
          <van-checkbox :value="item._id" v-model="item.checked" checked-color="#ff7122"  @click="chooseChange(item)"></van-checkbox>
          <van-button size="mini" @click="delCart(item._id, index)">删除</van-button>
        </div>
      </van-card>

      <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit">
        <van-checkbox @click="checkAll" v-model="AllChecked" checked-color="#ff7122">全选</van-checkbox>
      </van-submit-bar>
    </div>
    <!-- 购物车为空 -->
    <div class="cart-none" v-else>
      <div class="cart-img-bg">
        <img class="col-xs-5" :src="cart_none" alt="">
        <p>购物车空空如也~</p>
      </div>
    </div>
  </div>
</template>

<script>
import cart_none from '@/assets/images/cart_none.png'
import axios from 'axios'
import url from '@/service.config.js'
import { mapState } from 'vuex'
export default {
  name: "cart",
  data() {
    return {
      cartNum: 0,
      cart_none,
      productList: [], //与后台交互获取的当前用户购物车商品列表
      checkedNames:[], //选中的商品
      AllChecked: false,
    }
  },
  // computed一个属性有很多可能   watch检测属性变化
  computed: {
    ...mapState(['userInfo']),
    totalPrice() {
      return this.checkedNames.reduce((sum, elem) => {
        sum += elem.price;
        return sum;
      }, 0) * 10 * 10;
    },
    
  },
  created() {
    // 验证用户是否登录
    if(JSON.stringify(this.userInfo) === '{}'){
      this.$toast.fail('请先登录');
      setTimeout( () => {
        this.$router.push('/mine');
      }, 3000);
    }else{
      axios({
        url: url.getCart,
        method: 'get',
        params: {
          userId: this.userInfo._id
        }
      }).then( res => {
        for(let item of res.data){
          this.productList.push(item.productId);
        }
        this.cartNum = this.productList.length;
      }).catch( err => {
        console.log(err);
      })
    }
  },
  methods: {
    onSubmit(){
      this.$toast.success('付款界面');
    },
    delCart(id, index){
      axios({
        url: url.delCart,
        method: 'post',
        data: {
          _id: id
        }
      }).then( res => {
        if(res.data.code == 200){
          // 删除数据库中的数据，如果删除成功，进入回调函数，在回调函数中，如下代码
          this.productList.splice(index, 1);
          this.$toast.success(res.data.message);
          this.cartNum = this.productList.length;
        }
      }).catch( err => {
        console.log(err);
      })
    },
    // 单选的change事件
    chooseChange(item) {
      
      if (this.checkedNames.indexOf(item) > -1) {
        this.remove(this.checkedNames, item);
        item.checked = false;
      } else {
        this.checkedNames.push(item);
        item.checked = true;
      }
      if (this.checkedNames.length < this.productList.length) {
        this.AllChecked = false;
      } else {
        this.AllChecked = true;
      }
    },
    // 全选和反选
    checkAll() {
      let list = this.productList;
      if (this.AllChecked) {
        list.forEach(element => {
          element.checked = false;
        });
        this.checkedNames = [];
      } else {
        list.forEach(element => {
          element.checked = true;
          if (this.checkedNames.indexOf(element._id) < 0) {
            this.checkedNames.push(element);
          }
        });
        console.log(this.checkedNames);
      }
    },
    //数组删除
     remove(arr, val) {
       var index = arr.indexOf(val);
       if (index > -1) {
         arr.splice(index, 1);
       }
     }
  },
}
</script>

<style lang="scss">
.card{
  width: 100%;
  position: fixed;
  left:0;
  top: 46px;
  bottom: 100px;
  overflow: scroll;
  background: #ebebeb;
  .van-card{
    background: #fff;
    border-radius: .2rem;
    width: 96%;
    margin:.2rem auto;
    position: relative;
    &__header{
      margin-left: .3rem;
    }
    .van-button{
      position: absolute;
      bottom: 8px;
      right: 16px;
    }
  }
  .van-checkbox{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left:.1rem;
  }
}
.submit-bar{
  margin-bottom: 1rem;
}
.cart-none{background: #ebebeb;width:100vw;height: 100vh; position: fixed;
  left:0;
  top: 46px;
  bottom: 134px;
  overflow: scroll;}
.cart-img-bg{display:block;margin:0 auto;text-align:center;position:absolute;top:50%;width:100%;transform:translateY(-50%);-webkit-transform:translateY(-50%);}
.cart-img-bg img{width:40%;}
.cart-none p{text-align:center;color:#666;font-size:.3rem;}
</style>