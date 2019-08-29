<template>
  <div id="datatable">
    <h3>Seller List</h3>
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
          columns:[
            {id:"id",header:"ID",fillspace:"1"},
            {id:"lastname",header:"Last Name",fillspace:"2"},
            {id:"firstname",header:"First Name",fillspace:"3"},
            {id:"registnumber",header:"Registration #",fillspace:"3"},
            {id:"company",header:"Company",fillspace:"3"},
            {id:"category",header:"Category",fillspace:"3"},
            {id:"address",header:"Address",fillspace:"5"}
          ],
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
      $$("grid").attachEvent("onItemClick", function(id, e, node){
          var item = this.getItem(id);
          EventBus.$emit("use-eventbus", item);
      });
    })
  },
}
</script>