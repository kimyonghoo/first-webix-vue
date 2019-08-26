import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../vue/screen/PAGE1.vue'
import Page2 from '../vue/screen/PAGE2.vue'

Vue.use(VueRouter);
const Home = { template: "<div id='content'><h2>THIS IS HOME</h2></div>"}
const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home},
      { path: '/PAGE1', component: Page1},
      { path: '/PAGE2', component: Page2}
    ]
  })
  
  export default router