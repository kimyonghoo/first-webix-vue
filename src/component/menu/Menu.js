export default { 
  padding: 2, 
  view: "form",
  cols:[
    { 
      view: "icon",
      icon: "mdi mdi-menu",
      click: function(){
        $$("$sidebar1").toggle()
      }
    }
  ]
}