<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer">
      <van-tabbar v-model="active" inactive-color="#000" class="footer-bar"  active-color="#ff7122">
        <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/category" icon="records">分类</van-tabbar-item>
        <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/mine" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
*{
    list-style: none;
    margin: 0;
    padding:0;
  }
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
  
</style>
