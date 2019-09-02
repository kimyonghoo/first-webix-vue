<template>
  <div id='btnArea'><webix-ui :config='ui'/></div>
</template>
<script>
require('vue-webix');
export default{
  name:'Buttons',
  data () {
    return {
      ui:{
          id: "btnToolbar",
          view: "toolbar",
          borderless: true,
          elements: [
              {},
              { view:"button", id:"btnR", value:"Search" , width:100, css:"webix_primary" },
              { view:"button", id:"btnC", value:"Save", width:100},
              { view:"button", id:"btnD", value:"Delete", width:100},
              { view:"button", id:"btnU", value:"Update", width:100}
          ],
      }
    }
  },
  mounted() {
    $$("btnR").attachEvent("onItemClick", function(id){
      webix.message("Selected: "+id);
    });
    $$("btnC").attachEvent("onItemClick", function(id){
      webix.message("Selected: "+id);
    });
    $$("btnD").attachEvent("onItemClick", function(id){
      webix.message("Selected: "+id);
    });
    $$("btnU").attachEvent("onItemClick", function(id){
      webix.message("Selected: "+id);
    });
  },
}
</script>