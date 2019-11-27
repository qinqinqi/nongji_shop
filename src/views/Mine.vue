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
          <van-field v-model="loginUser" left-icon="manager" required clearable placeholder="请输入用户名"></van-field>
          <van-field type="password" v-model="loginPass" left-icon="lock" required clearable placeholder="请输入密码"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="loginHandler" type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field v-model="registUser" left-icon="manager" required placeholder="请输入用户名"></van-field>
          <van-field type="password" v-model="registPass" left-icon="lock" required placeholder="请输入密码"></van-field>
        </van-cell-group>
        <div>
          <van-button @click="registHandler" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import login_title_1 from '../assets/images/login_title_1.png';
import login_title_2 from '../assets/images/login_title_2.png';
import axios from 'axios';
import url from '@/service.config.js';
import { mapActions } from 'vuex';
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
      if(this.loginUser == ''){
        $toast('用户名不能为空');
        return false;
      }else if(this.loginPass == ''){
        $toast('密码不能为空');
        return false;
      }else{
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
      }
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
.van-button--primary{
  display: block;
  width: 94%;
  margin: .2rem auto;
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

</style>