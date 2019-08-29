import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../component/Main.vue'
import StockManagement from '../component/screen/ManageProductStock.vue'
import SellerManagement from '../component/screen/ManageSeller.vue'
import StockManagementFooter from '../component/footer/StockManagementFooter.vue'
import SellerManagementFooter from '../component/footer/SellerManagementFooter.vue'

const Home = {template: '<div><h2>HOME</h2></div>'}
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home},
      { path: '/Main', component: Main},
      { path: '/stockmanagement/:category', name: 'stockmanagement', components: {
        default: StockManagement,
        btnArea: StockManagementFooter,
      }},
      { path: '/sellermanagement', components: {
        default: SellerManagement,
        btnArea: SellerManagementFooter,
      }}
    ]
  })
  
  export default router