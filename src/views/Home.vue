<template>
  <div class="container">
    <div class="nav-bar">
      <van-nav-bar title="首页" class="nav-bar-title">
        <van-icon name="search" slot="left" size="26px" color="#ff7122"></van-icon>
        <van-icon name="cart-o" slot="right" size="22px" color="#ff7122"></van-icon>
      </van-nav-bar>
    </div>

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
      <p class="hot-title"><van-icon name="fire-o" color="#ff7122"/><em>热门</em>商品</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in hotProducts" :key="index">
          <div class="hot-swiper-content">
            <img :src="item.img" alt="">
            <div class="hot-name one-ellipsis">{{item.name}}</div>
            <div>价格：<em>{{item.price}}</em></div>
            <div class="one-ellipsis">{{item.company}}</div>
            <div class="hot-city">{{item.city}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 推荐商品 -->
    <div class="variety">
      <p class="variety-title">推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item, index) in varietyItem" :key="index">
          <img :src="item.img" alt="">
          <p class="variety-name">{{item.name}}</p>
          <p class="variety-price">价格：{{item.price}}</p>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import url from '@/service.config.js'
export default {
  name: 'home',
  data(){
    return {
      carouselItem: [  // banner轮播
        {
          name: "img1",
          imgSrc:"https://img2.nongji360.com/a/adv/2019/08/23150810287629.png"
        }, {
          name: "img2",
          imgSrc:"https://img2.nongji360.com/a/adv/2019/09/30221325173847.jpg"
        }
      ],
      hotProducts: [   // 热门商品
        {
          name: "雷沃轮式拖拉机M1504-D",
          img: "http://e.etian365.com/upload/upload/20170606/aeee57d2-f549-4e85-bc28-adf19fbba2d3.jpg.418x314.jpg",
          price: "面议",
          company: "雷沃重工股份有限公司",
          city: "山东潍坊"
        },
        {
          name: "雷沃阿波斯P5000",
          img: "http://e.etian365.com/upload/upload/20170606/aeee57d2-f549-4e85-bc28-adf19fbba2d3.jpg.418x314.jpg",
          price: "19.58万",
          company: "雷沃重工股份有限公司",
          city: "山东潍坊"
        },
        {
          name: "雷沃轮式拖拉机M1504-D",
          img: "http://e.etian365.com/upload/upload/20170606/aeee57d2-f549-4e85-bc28-adf19fbba2d3.jpg.418x314.jpg",
          price: "面议",
          company: "雷沃重工股份有限公司",
          city: "山东潍坊"
        },
        {
          name: "雷沃阿波斯P5000",
          img: "http://e.etian365.com/upload/upload/20170606/aeee57d2-f549-4e85-bc28-adf19fbba2d3.jpg.418x314.jpg",
          price: "19.58万",
          company: "雷沃重工股份有限公司",
          city: "山东潍坊"
        },{
          name: "雷沃轮式拖拉机M1504-D",
          img: "http://e.etian365.com/upload/upload/20170606/aeee57d2-f549-4e85-bc28-adf19fbba2d3.jpg.418x314.jpg",
          price: "12万",
          company: "雷沃重工股份有限公司",
          city: "山东潍坊"
        },
        {
          name: "雷沃阿波斯P5000",
          img: "http://e.etian365.com/upload/upload/20170606/aeee57d2-f549-4e85-bc28-adf19fbba2d3.jpg.418x314.jpg",
          price: "19.58万",
          company: "雷沃重工股份有限公司",
          city: "山东潍坊"
        }
      ],
      swiperOption: {  //轮播参数配置
        slidesPerView: 3,
        spaceBetween: 10
      },
      varietyItem: [], //推荐商品
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created: function(){
    axios
      .get(url.getVarietyItem)
      .then( res => {
        this.varietyItem = res.data;
      })
  }
}
</script>

<style lang="scss">
.container{
  background: #eee;
}
// 导航栏
.nav-bar{
  height: 46px;
  font-size: .36rem;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 0 .1rem #ccc;
  &-title{
    position: fixed;
    top:0;
    left:0;
    z-index: 10!important;
    width: 100%;
  }
}
// 热门商品
.hot{
  background: #fff;
  margin-top: .2rem;
  font-size: .3rem;
  color: #666;
  &-title{
    width: 100%;
    color: rgb(94, 84, 84);
    padding: .2rem;
    font-size: .34rem;
    .van-icon-fire-o:before{
      vertical-align: text-top;
      font-size: .4rem;
    }
    em{
      color: #ff7122;
      margin-left: .1rem;
    }
  }
  &-swiper{
    &-content{
      text-align: center;
      em{
        color: #eb681f;
        font-weight: bolder;
      }
    }
  }
  &-name{
    margin-top: .3rem;  
  }
  &-city{
    margin-bottom: .3rem;
  }
}
// 推荐商品
.variety{
  margin-top: .2rem;
  background: #fff;
  text-align: center;
  &-title{
    padding: .2rem;
    font-size: .34rem;
    color: #5e5454;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item{
    flex-basis: 45%;
    color: #666;
    margin-bottom: .4rem;
  }
  &-name{
    margin-top: .2rem;
  }
  &-price{
    color:#ff7122;
  }
  img{
    width: 2rem;
  }
}

</style>
