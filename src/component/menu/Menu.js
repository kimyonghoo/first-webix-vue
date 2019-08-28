require('vue-webix');
import router from '../../router/'
export default { 
  css:"webix_dark", 
  padding: 2, 
  view: "form",
  cols:[
    { view: "icon", icon: "mdi mdi-menu",
      click: function(){
        $$("$sidebar1").toggle()
      }
    }
  ]
}
