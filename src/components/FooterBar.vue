<template>
  <div>
    <van-tabbar inactive-color="#000" class="footer-bar">
      <van-tabbar-item to="/" icon="wap-home-o" :class="$route.meta.index == 0 ? 'active' : ''">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="records" :class="$route.meta.index == 1 ? 'active' : ''">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o" :class="$route.meta.index == 2 ? 'active' : ''">购物车</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="contact" :class="$route.meta.index == 3 ? 'active' : ''">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">
// *{
//     list-style: none;
//     margin: 0;
//     padding:0;
//   }
  .footer{
    height: 50px;
    &-bar{
      position: fixed;
      left:0;
      bottom:0;
      width: 100%;
      box-shadow: 0 0 .1rem #ccc;
    }
  }
  .van-tabbar-item--active{
    color:#000;
  }
  .active{
    color:#ff7122!important;
  }
  
</style>