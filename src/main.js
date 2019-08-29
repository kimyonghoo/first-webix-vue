import Vue from 'vue'
import App from './App.vue'
import Footer from './Footer.vue'
import Toolbar from './component/menu/Toolbar.js'
import Sidebar from './component/menu/Sidebar.js'
import Menu from './component/menu/Menu.js'
import router from './router/'

webix.ui({
    rows: [
        Toolbar,
        {cols:[
            {
                rows:[
                {
                    view: "template",
                    template: "<div id='app'></div>"
                },
                {
                    view: "template",
                    template: "<div id='btnArea'></div>",
                    autoheight:true,
                }
            ]
            },
            {
                rows:[Menu,Sidebar]
            },
        ]},
    ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

new Vue({
    el: '#btnArea',
    render: h => h(Footer),
    router: router
})