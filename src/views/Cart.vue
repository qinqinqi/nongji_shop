<template>
  <div>
    <van-nav-bar title="购物车" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>

    <div class="card">
       <van-card v-for="(item, index) in productList" :key="index" :price="item.price" :desc="item.company" :title="item.name" :thumb="item.img">
          <div slot="footer">
            <van-button size="mini" @click="delCart(item._id, index)">删除</van-button>
        </div>
    </van-card>
    </div>
    <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送, <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/service.config.js'
import { mapState } from 'vuex'
export default {
  name: "cart",
  data() {
    return {
      checked: true,
      productList: []
    }
  },
  // computed一个属性有很多可能   watch检测属性变化
  computed: {
    ...mapState(['userInfo']),
    totalPrice() {
      return this.productList.reduce((sum, elem) => {
        sum += elem.price;
        return sum;
      }, 0) * 10 * 10;
    }
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
        console.log(res);
        for(let item of res.data){
          this.productList.push(item.productId);
        }
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
      // 删除数据库中的数据，如果删除成功，进入回调函数，在回调函数中，如下代码
      this.productList.splice(index, 1);
    }
  }
}
</script>

<style lang="scss">
.card{
  width: 100%;
  position: fixed;
  left:0;
  top: 46px;
  bottom: 134px;
  overflow: scroll;
}
.submit-bar{
  margin-bottom: 1rem;
}
</style>