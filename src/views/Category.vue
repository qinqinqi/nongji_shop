<template>
  <div>
    <van-nav-bar title="商品类型"></van-nav-bar>
    <van-row>
      <van-col span="6" class="nav">
        <ul v-for="(item, index) in types" :key="index">
          <li :class="{active:active==index}" @click="selectCategory(item.typeId, index)">{{item.typeName}}</li>
        </ul>
      </van-col>
      <van-col span="18" class="container">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list class="content" @load="onLoad" v-model="isLoading" :finished="finished">
            <div @click="goDetail(item._id)" class="content-item" v-for="(item,index) in productList" :key="index">
              <img :src="item.img" alt="">
              <p class="content-item-name">{{item.name}}</p>
              <p>￥{{item.price}}</p>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js';
export default {
  name: "category",
  data() {
    return {
      types: [], //类型信息
      active: 0,
      productList: [],
      typeId: 1,  //当前选中元素的ID
      start: 0,
      limit: 10,   //每页的数据条数
      finished: false,  //数据是否取完
      isLoading: false
    }
  },
  created() {
    axios({
      url: url.getTypes
    }).then( res => {
      // console.log(res);
      this.types = res.data;
      this.selectCategory(this.typeId, this.active);
    }).catch( err => {
      console.log(err);
    })
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.finished = false;

      this.getProductList();
    },
    getProductList(){
      this.isLoading = true;
      axios({
        url: url.getProductsByType,
        method: 'get',
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      }).then( res => {
        // console.log(res);
        if(res.data.length !=0){
          this.productList = this.productList.concat(res.data);
          this.isLoading = false;
        }else{
          this.finished = true;
        }
        
      }).catch(err => {
        console.log(err)
      })
    },
    // 上拉加载
    onLoad(){
      setTimeout(() => {
         this.getProductList();
      }, 2000)
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.productList = [];
        this.getProductList();
      }, 500);
    },
    // 商品详情
    goDetail(id) {
      // console.log(id);
      // 命名路由传参   
      // this.$router.push({
      //   name: 'detail',
      //   params: {
      //     id: id
      //   }
      // });

      // 参数会加到路由后边，刷新参数仍然存在
      // this.$router.push({
      //   path: '/detail',
      //   query: {
      //     id: id
      //   }
      // })

      // 刷新参数仍然存在
      this.$router.push(`/detail/${id}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.nav{
  background-color: #f2f2f2;
  li{
    border-bottom: 1px solid #ebebeb;
    padding: .2rem .2rem;
    font-size: .3rem;
    color: #000;
  }
  li.active{
    border-left: 1px solid #ec681f;
    background: #fff;
    color: #EC681F !important;
  }
}

.container{
  position: fixed;
  top:46px;
  bottom: 1rem;
  right: 0;
  overflow: scroll;
}

.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 1rem;
  &-item{
    width:40%;
    text-align: center;
    margin-bottom: .2rem;
    img{
      width: 2rem;
      height: 2rem;
    }
    &-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden; 
    }
  }
}
</style>