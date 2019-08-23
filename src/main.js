import Vue from 'vue'
import Webix_datagrid from './Webix-datagrid.vue'
import Webix_control from './Webix-control.vue'

new Vue({
  el: '#control',
  render: h => h(Webix_control)
})

new Vue({
  el: '#datagrid',
  render: h => h(Webix_datagrid)
})