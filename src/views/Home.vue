<template>
  <div class="home">
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left" size="26px"></van-icon>
      <van-icon name="cart-o" slot="right" size="22px"></van-icon>
    </van-nav-bar>

    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for="(item, index) in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 热门商品 -->
    <div class="hot">
      <h3></h3>
      <ul>
        <li></li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return {
      carouselItem: [
        {
          name: "img1",
          imgSrc:"https://img2.nongji360.com/a/adv/2019/08/23150810287629.png"
        }, {
          name: "img2",
          imgSrc:"https://img2.nongji360.com/a/adv/2019/09/30221325173847.jpg"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.van-nav-bar{
  font-size: .36rem;
  border-bottom: 1px solid #ccc;
}

</style>
