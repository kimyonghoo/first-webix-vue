<template>
  <div id="datatable">
    <h3>Seller information</h3>
    <webix-ui :config='ui' v-bind:value='data'/>
    <div>
    </div>
  </div> 
</template>
<script>
require('vue-webix');
import { EventBus } from "../../event-bus";
export default{
  name:'datatable',
  data () {
    return {
      data:[],
      ui:{
          id:"grid",
          view:"datatable", 
          autoheight:true, 
          select:"row",
          scrollX:false,
      },
    }
  },
  created() {
    fetch('https://api.myjson.com/bins/gjv1b')
    .then(response=>response.json())
    .then(json=>{
      this.data = json.data;
      $$("grid").config.columns = json.colInfo;
      $$("grid").refreshColumns();
      $$("grid").attachEvent("onItemClick", function(id, e, node){
          var item = this.getItem(id);
          EventBus.$emit("use-eventbus", item);
      });
    })
  },
}
</script>