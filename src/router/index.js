import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'

Vue.use(VueRouter)

const routes = [
  //当目录不存在时重定向到主页面
  {
    path:'*/',
    redirect:'/'
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  }
]

const router = new VueRouter({
  routes
})

export default router
