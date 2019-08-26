import Vue from 'vue'
import App from './App.vue'
import router from './router/'

const menu = {
  id:"menuBar",
  css:"webix_dark",  
  view: "toolbar", 
  elements:[
      {
          view: "icon", icon: "mdi mdi-menu",
          click: function(){
              if( $$("menu").config.hidden){
                  $$("menu").show();
              }
              else
                  $$("menu").hide();
          }
      },
      {
          view: "label",
          label: ""
      },

  ]
}

const appArea =  {
  view: "template",
  template: "<div id='app'></div>"
};


webix.ui({
  rows: [menu, appArea]
});

webix.ui({
  view: "sidemenu",
  id: "menu",
  width: 200,
  position: "left",
  state:function(state){
      var toolbarHeight = $$("menuBar").$height;
      state.top = toolbarHeight;
      state.height -= toolbarHeight;
  },
  css: "my_menu",
  body:{
      view:"list",
      borderless:true,
      scroll: false,
      template: "<span class='webix_icon mdi mdi-#icon#'></span> #value#",
      data:[
          {id: "Main", value: "Main", icon: "cube"},
          {id: "P1", value: "APPAREL", icon: "database"},
          {id: "P2", value: "ELETRONIC", icon: "chart-bar"},
      ],
      select:true,
      type:{
          height: 30
      },
      on:{
          "onItemClick":function(id, e, trg){ 
              switch (id) {
              case "Main":
                  location.href='/';
                  break;
              case "P1":
                  location.href='/PAGE1';
                  break;
              case "P2":
                  location.href='/PAGE2';
                  break;
              default:
                  break;
              }
              $$("menu").hide();
              webix.message("Click on row: " + id+" is clicked");
          } //default click behavior that is true for any datatable cell
      }
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})