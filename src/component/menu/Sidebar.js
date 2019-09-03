import router from '../../router/';

const sidebar = {
  css:"webix_dark",
  view: "sidebar",
  collapsed: true,
  position: "right",
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
};

webix.ajax("https://api.myjson.com/bins/vw24j").then(function(data){
  sidebar.data = data.json().gnb;
  
});

export default sidebar;