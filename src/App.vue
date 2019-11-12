<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active" inactive-color="#000">
      <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="records">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
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
  .footer-bar{
    display: flex;
    background: #ccc;
    position: fixed;
    bottom:0;
    width: 100%;
    height: 1rem;
    line-height:1rem;
    &-item{
      flex-grow: 1;
      text-align: center;
    }
  }
  
</style>
