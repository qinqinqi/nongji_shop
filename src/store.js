import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    //存储数据   刷新会清除
    state: {
        // 用户信息
        userInfo: {}
    },
    // 计算属性
    getters: {

    },
    // 函数  改变state数据的唯一途径  不能处理异步的操作
    mutations: {
        changeLogin(state, status){
            state.userInfo = status;
        },
        loginOut (state){
            state.userInfo = {};
        },
    },
    // 和mutation差不多 但是可以处理异步的操作
    actions: {
        loginAction({commit}, user){
            commit('changeLogin', user)
        },
    },
})