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
              { view:"button", id:"btnR", value:"Search" , width:100, css:"webix_primary"},
          ],
      }
    }
  },
  created() {
  },
  mounted() {
    $$("btnR").attachEvent("onItemClick", function(id){
      webix.message("Selected: "+id);
    });
  },
  methods: { 
  }
}
</script>