<template>
  <div id="app">
    <router-view></router-view>
    <ul class="footer-bar">
      <router-link tag="li" to="/" class="footer-bar-item">首页</router-link>
      <router-link tag="li" to="/category" class="footer-bar-item">分类</router-link>
      <router-link tag="li" to="/cart" class="footer-bar-item">购物车</router-link>
      <router-link tag="li" to="/mine" class="footer-bar-item">我的</router-link>
    </ul>
  </div>
</template>

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
