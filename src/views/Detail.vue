<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
    <img :src="detail.img" alt="" class="detail-img">
    <div class="detail">
      <p class="detail-name">{{detail.name}}</p>
      <p class="detail-price">￥{{detail.price}}</p>
      <p>公司：{{detail.company}}</p>
      <p>产地：{{detail.city}}</p>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" to="/cart" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js'
import { mapState } from 'vuex'
export default {
    name: 'Detail',
    data() {
      return {
        detail: {}
      }
    },
    created(){
      axios({
        url: url.getDetail,
        method: 'get',
        params: {
          id: this.$route.params.id
        }
      }).then( res => {
        this.detail = res.data;
      }).catch( err => {
        console.log(err);
      })
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      onClickIcon() {
        this.$toast('点击图标');
      },
      onClickButton() {
        this.$toast('点击按钮');
      },
      addCart(){
        // 检查用户是否登录   前端用vuex保存登录状态
        // 如果是后端保存登录状态 可以使用koa-session
        if(JSON.stringify(this.userInfo) === '{}'){
          this.$toast.fail('请先登录');
          setTimeout( () => {
            this.$router.push('/mine');
          }, 1000);
        }else{
          // 插入购物车
          console.log(this.detail._id);
          axios({
            url: url.addCart,
            method: 'post',
            data: {
              productId: this.detail._id,
              userId: this.userInfo._id 
            }
          }).then( res => {
            console.log(res);
            if(res.data.code == 200){
              this.$toast.success(res.data.message);
            }
          }).catch( err => {
            console.log(err);
          })
        }
        

      }
    }
}
</script>

<style lang="scss" scoped>
.detail{
  line-height: .5rem;
  padding: 0 .2rem;
  &-img{
    width: 100%;
    height: 5rem;;
  }
  &-name{
    font-size: #333;
    font-weight: bold;
  }
  &-price{
    color: #ff7122;
    font-size: .3rem;
    font-weight: bold;
  }
}
</style>