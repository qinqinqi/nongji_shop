<template>
  <div>
    <div class="login-title-bg">
      <div class="login-title-1">
        <img :src="login_title_1" alt="">
      </div>
      <div class="login-title-2">
        <img :src="login_title_2" alt="">
      </div>
    </div>
    <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field v-model="loginUser" required placeholder="请输入用户名"></van-field>
          <van-field type="password" v-model="loginPass" required placeholder="请输入密码"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field v-model="registUser" required placeholder="请输入用户名"></van-field>
          <van-field type="password" v-model="registPass" required placeholder="请输入密码"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="registHandler" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import login_title_1 from '../assets/images/login_title_1.png'
import login_title_2 from '../assets/images/login_title_2.png'
import axios from 'axios'
import url from '@/service.config.js'
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
    }
  },
  methods: {
    //注册的处理方法
    registHandler(){
      axios({
        url: url,
        method: 'post',
        data: {
          userName: this.registUser,
          userPass: this.registPass
        }
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss">
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

</style>