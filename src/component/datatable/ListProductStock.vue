<template>
  <div id="datatable">
    <h3>Products stock</h3>
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
          onClick:{
            "addbtn":function(event, cell, target){
              const record = $$("grid").getItem(cell.row);
              record['quantity'] = record.quantity +1;      
              $$("grid").refresh();
              datatable.__vue__.stock++;
              EventBus.$emit("use-eventbus", datatable.__vue__.stock);
            }
          },
      },
      stock:100,
    }
  },
  created() {
         fetch('https://api.myjson.com/bins/10uhcn')
    .then(response=>response.json())
    .then(json=>{
      this.data = json.data;
      $$("grid").config.columns = json.colInfo;
      $$("grid").refreshColumns();

      this.stock = json.data.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0)

      EventBus.$emit("use-eventbus", this.stock);
      EventBus.$on("filter-bus", product => {
        if(product === "ALL") product = '';
        $$("grid").filter('#name#', product);
    });
    })
  },
}
</script>