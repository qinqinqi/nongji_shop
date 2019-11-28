<template>
  <div class="container">
    <div class="login-title-bg">
      <div class="login-title-1">
        <img :src="login_title_1" alt="">
      </div>
      <div class="login-title-2">
        <img :src="login_title_2" alt="">
      </div>
    </div>
    <van-tabs v-show="flag" v-model="active" animated color="#7fbe25" class="van">
      <van-tab title="登录">
        <van-cell-group>
          <van-field v-model="loginUser" left-icon="manager" required clearable placeholder="请输入用户名"></van-field>
          <van-field type="password" v-model="loginPass" left-icon="lock" required clearable placeholder="请输入密码"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="loginHandler" type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field v-model="registUser" left-icon="manager" clearable required placeholder="请输入用户名"></van-field>
          <van-field type="password" v-model="registPass" left-icon="lock" clearable required placeholder="请输入密码"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="registHandler" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
    <!-- 已登录 -->
    <div class="uesr-info" v-show="!flag">
      <!-- 我的订单 -->
      <div class="item">
        <div class="item-title">
          <h1>我的订单</h1>
          <router-link to="/">查看全部订单<van-icon name="arrow"/></router-link>
        </div>
        <van-grid :column-num="4">
          <van-grid-item icon="balance-list" text="待付款" info="5" style="color:#7fbe25;"/>
          <van-grid-item icon="card" text="待取货" style="color:#7fbe25" />
          <van-grid-item icon="comment" text="待评价" info="2" style="color:#7fbe25"/>
          <van-grid-item icon="gold-coin" text="退款/售后" style="color:#7fbe25" />
        </van-grid>
      </div>
      <!-- 优惠券单元格 -->
      <div class="item">
        <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true"/>
        <!-- 优惠券列表 -->
        <van-popup v-model="showList" position="bottom">
          <van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon" :disabled-coupons="disabledCoupons" @change="onChange" @exchange="onExchange"/>
        </van-popup>
        <van-cell title="问题反馈"/>
        <van-cell title="关于我们"/>
      </div>

      <van-button @click="loginOut" type="primary" size="large">退出登录</van-button>

      <FooterBar/>
    </div>
    <div class="copyright"> 大田农社 服务热线：<a href="tel:4008360128">4008-360-118</a><br> 电信经营许可证京ICP证150270号 京ICP备14027879号-2</div>
  </div>
</template>

<script>
import login_title_1 from '../assets/images/login_title_1.png';
import login_title_2 from '../assets/images/login_title_2.png';
import axios from 'axios';
import url from '@/service.config.js';
import { mapActions, mapState } from 'vuex';
import FooterBar from '@/components/FooterBar'

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
const disabled_coupons = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '8.8',
  unitDesc: '折'
};
export default {
  name: "mine",
  data() {
    return {
      loginUser: '',
      loginPass: '',
      registUser: '',
      registPass: '',
      login_title_1,
      login_title_2,
      flag: true,
      active: 0,
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [disabled_coupons]
    }
  },
  components: {
    FooterBar
  },
  computed: {
    ...mapState(['userInfo']),
  },
  created() {
    // 验证用户是否登录
    if(JSON.stringify(this.userInfo) !== '{}'){
      this.flag = false;
    }
  },
  methods: {
    ...mapActions(['loginAction']),

    //注册的处理方法
    registHandler(){
      axios({
        url: url.registUser,
        method: 'post',
        data: {
          userName: this.registUser,
          password: this.registPass
        }
      }).then(res => {
        // console.log(res);

        if(res.data.code == 200){
          this.$toast.success('注册成功');
          this.registUser = this.registPass = '';

        }else{
          this.$toast.fail('注册失败');
        }
      }).catch(err => {
        console.log(err)
        this.$toast.fail('注册失败');
      });
    },

    // 登陆的处理方法
    loginHandler(){
      axios({
        url: url.loginUser,
        method: 'post',
        data: {
          userName: this.loginUser,
          password: this.loginPass
        }
      }).then(res => {
        if(res.data.code == 200){
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            },1000)
          }).then(() => {
            this.$toast.success('登录成功');
            // 保存用户登录状态
            this.loginAction(res.data.userInfo);
            this.$router.go(-1);
          })
        }else{
          this.$toast.fail(res.data.message);
        }
        
      }).catch(err => { 
        console.log(err);
        this.$toast.success('登陆失败');
      })
    },
    // 退出登录
    loginOut(){
      this.$store.commit("loginOut");
      this.flag = true;
      this.$toast.success('退出登录');
    },

    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      console.log(code);
      this.coupons.push(coupon);
    },
    // 查看全部订单
    allOrder(){
      alert('查看全部订单')
    }

  }
}
</script>

<style lang="scss" scoped>
.container{
  position: fixed;
  width: 100%;
  bottom: 1rem;
  top: 0;
  overflow-y: scroll;
}
.login-title{
  &-bg{
    display: block;
    background: #86cf20 url(../assets/images/logo_title_bg.jpg) no-repeat left bottom/100% auto;
    padding: 0.3rem 0 3.5rem;
    text-align: center;
  }
  &-1{
    width: 50%;
    display: block;
    margin: .5em auto 0;
  }
  &-2{
    width: 50%;
    display: block;
    margin: .7em auto 0;
  }
}
.van-button--primary{
  display: block;
  width: 94%;
  margin: .6rem auto .2rem;
  font-size: 0.34rem;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #FFF;
  background-color: #ffa821;
  text-align: center;
  border-radius: 0.45rem;
  box-shadow: 0 0 5px 5px #fcebd7;
  border:0;
  outline: none;
}


.van-cell--required::before{
  display: none;
}
.van-cell{
  width: 96%;
  margin: 0 auto;
  padding: .2rem;
  border-bottom: 1px solid #f0f0f0;
  font-size: .3rem;
}

.copyright {
  text-align: center;
  display: block;
  text-align: center;
  color: #cccccc;
  width: 100%;
  font-size: 0.22rem;
  line-height: 0.36rem;
  margin: 0.3rem 0;
  a {
    color: #7fbe25;
  }
}
.item{
  width: 94%;
  margin: .2rem auto 0;
  border-radius: .2rem;
  background: #fff;
  &-title{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #fafafa;
    padding: .2rem .2rem;
    font-size: .3rem;
    a{
      font-size: .26rem;
      color:#7d7e80;
      .van-icon{
        display: inline-block;
        vertical-align: middle;
        margin: -.06rem .08rem 0;
      }
    }
  }
}
</style>