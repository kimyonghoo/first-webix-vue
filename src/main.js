import Vue from 'vue'
import App from './App.vue'
import router from './router/'

var menu_data = [
    {id: "MAIN", icon: "mdi mdi-view-dashboard", value: "Main",  data:[
    ]},
    {id: "P1", icon: "mdi mdi-view-column", value:"Product Management", data:[
      { id: "Apperal", value: "Apperal"},
      { id: "Eletronic", value: "Eletronic"}
    ]},
    {id: "P2", icon: "mdi mdi-table", value:"Seller Management", data:[
    ]},
  ];

const menu = { 
    css: "menu", 
    padding: 2, 
    view: "form",
    cols:[
        { view: "icon", icon: "mdi mdi-menu",
        click: function(){
            $$("$sidebar1").toggle();
        }
        }
    ]
}

const sidebar = { 
    view: "sidebar",
    collapsed: true,
    position: "left",
    data: menu_data,
    on:{
        onAfterSelect: function(id){
            switch (id) {
                case "MAIN":
                    location.href='/';
                    break;
                case "Apperal":
                    location.href='/PAGE1';
                    break;
                case "Eletronic":
                    location.href='/PAGE1';
                    break;
                case "P2":
                    location.href='/PAGE2';
                    break;
                default:
                    break;
            }
            webix.message("Selected: "+this.getItem(id).value)
        }
    }
}

const appArea =  {
  view: "template",
  template: "<div id='app'></div>"
};


webix.ui({
rows: [
    { view: "toolbar", padding:3, elements: [
        { view: "label", label: "Stock Management System"},
        {},
        { view: "icon", icon: "mdi mdi-comment",  badge:4},
        { view: "icon", icon: "mdi mdi-bell",  badge:10}
    ]},
    {cols:[
        {
            rows:[menu,sidebar]},{
            rows:[appArea]
        }
    ]}
]
});

// webix.ui({
//   view: "sidebar",
//   id: "menu",
//   width: 200,
//   position: "left",
//   state:function(state){
//       var toolbarHeight = $$("menuBar").$height;
//       state.top = toolbarHeight;
//       state.height -= toolbarHeight;
//   },
//   css: "my_menu",
//   body:{
//       view:"list",
//       borderless:true,
//       scroll: false,
//       template: "<span class='webix_icon mdi mdi-#icon#'></span> #value#",
//       data:[
//           {id: "Main", value: "Main", icon: "cube"},
//           {id: "P1", value: "Product Management", icon: "database"},
//           {id: "P2", value: "Seller Management", icon: "chart-bar"},
//       ],
//       select:true,
//       type:{
//           height: 30
//       },
//       on:{
//           "onItemClick":function(id, e, trg){ 
//               switch (id) {
//               case "Main":
//                   location.href='/';
//                   break;
//               case "P1":
//                   location.href='/PAGE1';
//                   break;
//               case "P2":
//                   location.href='/PAGE2';
//                   break;
//               default:
//                   break;
//               }
//               $$("menu").hide();
//               webix.message("Click on row: " + id+" is clicked");
//           } //default click behavior that is true for any datatable cell
//       }
//   }
// });

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})