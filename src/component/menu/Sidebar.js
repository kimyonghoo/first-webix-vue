import router from '../../router/';

const sidebar = {
  css:"webix_dark",
  view: "sidebar",
  collapsed: true,
  position: "right",
  data: (function () {
    var xhr = webix.ajax().sync().get("https://api.myjson.com/bins/vw24j");
    return JSON.parse(xhr.responseText).gnb;
  })(),
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

export default sidebar