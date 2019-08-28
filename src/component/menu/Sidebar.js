import router from '../../router/';

var menu_data = [
    {id: "main", icon: "mdi mdi-home", value: "Main",  data:[
    ]},
    {id: "stockmanagement", icon: "mdi mdi-cart", value:"Product Management", data:[
      { id: "apperal", value: "Apperal"},
      { id: "electronic", value: "Electronic"}
    ]},
    {id: "sellermanagement", icon: "mdi mdi-account", value:"Seller Management", data:[
    ]},
    {id: "warehousemanagement", icon: "mdi mdi-houzz", value:"Warehouse Management", data:[
    ]},
  ];

export default {
  css:"webix_dark",
  view: "sidebar",
  collapsed: true,
  position: "right",
  data: menu_data,
  on:{
      onAfterSelect: function(id){
        let routePath = [];
        while(id){
          routePath.push(id);
          id = this.getParentId(id);
        }
        router.push('/'+ routePath.reverse().join("/"));
      }
  },
}