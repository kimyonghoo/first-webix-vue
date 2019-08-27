import Vue from 'vue'
import VueRouter from 'vue-router'
import StockManagement from '../component/screen/ManageProductStock.vue'
import SellerManagement from '../component/screen/ManageSeller.vue'

Vue.use(VueRouter);
const Home = { template: "<div id='content'><h2>THIS IS HOME</h2></div>"}
const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home},
      { path: '/PAGE1', component: StockManagement},
      { path: '/PAGE2', component: SellerManagement}
    ]
  })
  
  export default router