<template>
  <webix-ui :config='ui' v-bind:value="value"/>     
</template>
<script>
require('vue-webix');
export default{
  name:'SelectBoxUI',
  props:["value"],
  data () {
    return {
      ui:{
        id:"selectUI",
        view:"select", 
        label:"webix-ui", 
            options:[
          { "id":"T", "value":"Tiger" },
          { "id":"L", "value":"Lion" },
          { "id":"B", "value":"Bear" }
        ],
        on:{
          "onChange":function(newv, oldv){
            webix.message("Value changed from: "+oldv+" to: "+newv);
          },
          "onItemClick":function(a,b,c){
          }
        }
      }
    }
  },
}
</script>