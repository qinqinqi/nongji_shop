import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Category from '../views/Category.vue'
// import Cart from '../views/Cart.vue'
// import Mine from '../views/Mine.vue'
let Home = ()=> import('../views/Home.vue')
let Category = ()=> import('../views/Category.vue')
let Cart = ()=> import('../views/Cart.vue')
let Mine = ()=> import('../views/Mine.vue')
import Detail from '../views/Detail.vue'
import FooterBar from '@/components/FooterBar'

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
    components: {
      default: Home,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/category',
    name: 'category',
    components: {
      default: Category,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
