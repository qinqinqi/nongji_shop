import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'

// 导入所有的vant组件
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// 按需引入组件（推荐）
//安装插件babel-plugin-import
import { 
  Card, Checkbox, SubmitBar, GoodsAction, 
  GoodsActionIcon, GoodsActionButton, 
  Button, Icon, NavBar, Tabbar, TabbarItem, 
  Swipe, SwipeItem, Lazyload,Tabs, Tab, Field, 
  CellGroup, PullRefresh, List, Row, Col, Toast, 
  CouponCell, CouponList, Popup, Grid, GridItem, Cell 
} from 'vant'
Vue.use(Card).use(Checkbox).use(SubmitBar).use(Popup)
.use(GoodsAction) .use(GoodsActionIcon)
.use(GoodsActionButton).use(Button).use(Icon)
.use(NavBar).use(Tabbar).use(TabbarItem)
.use(Swipe).use(SwipeItem).use(Lazyload)
.use(Tabs).use(Tab).use(Field).use(CellGroup)
.use(PullRefresh).use(List).use(Row).use(Col)
.use(Toast).use(CouponCell).use(CouponList)
.use(Grid).use(GridItem).use(Cell);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
