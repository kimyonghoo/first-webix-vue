import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../component/Main.vue'
import StockManagement from '../component/screen/ManageProductStock.vue'
import SellerManagement from '../component/screen/ManageSeller.vue'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Main},
      { path: '/Main', component: Main},
      { path: '/stockmanagement/:category', name: 'stockmanagement', component: StockManagement},
      { path: '/sellermanagement', component: SellerManagement}
    ]
  })
  
  export default router