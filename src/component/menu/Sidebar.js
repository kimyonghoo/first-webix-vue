import router from '../../router/';

var menu_data = [
    {id: "main", icon: "mdi mdi-view-dashboard", value: "Main",  data:[
    ]},
    {id: "stockmanagement", icon: "mdi mdi-cart", value:"Product Management", data:[
      { id: "stockmanagement/apperal", value: "Apperal"},
      { id: "stockmanagement/electronic", value: "Electronic"}
    ]},
    {id: "sellermanagement", icon: "mdi mdi-account", value:"Seller Management", data:[
    ]},
    {id: "warehousemanagement", icon: "mdi mdi-home-variant", value:"Warehouse Management", data:[
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
        router.push('/'+id);
      }
  },
}