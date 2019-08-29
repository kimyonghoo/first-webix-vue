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
          columns:[
            {id:"id",header:"ID",fillspace:"1"},
            {id:"quantity",header:"Quantity",template:"<input class='minusbtn' type='button' value='-'>\t#quantity#\t<input class='plusbtn' type='button' value='+'>",fillspace:"2"},
            {id:"name",header:"Name",fillspace:"3"},
            {id:"image",header:"Image",fillspace:"3"}
          ],
          autoheight:true, 
          select:"row",
          scrollX:false,
          onClick:{
            "plusbtn":function(event, cell, target){
              const record = this.getItem(cell.row);
              record['quantity'] = record.quantity +1;      
              this.refresh();
              datatable.__vue__.stock++;
              EventBus.$emit("use-eventbus", datatable.__vue__.stock);
            },
            "minusbtn":function(event, cell, target){
              const record = this.getItem(cell.row);
              if(record.quantity <= 0) return;
              record['quantity'] = record.quantity -1;      
              this.refresh();
              datatable.__vue__.stock--;
              EventBus.$emit("use-eventbus", datatable.__vue__.stock);
            }
          },
      },
    }
  },
  created() {
    let dataUrl = '';
    switch (this.$route.params.category) {
      case 'electronic':
        dataUrl = 'https://api.myjson.com/bins/6dhzr';
        break;
      case 'apperal':
        dataUrl = 'https://api.myjson.com/bins/1cpf3r';
        break;
      default:
        break;
    }
    fetch(dataUrl)
    .then(response=>response.json())
    .then(json=>{
      this.data = json.data;
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
<style>
.plusbtn, .minusbtn{
  background-color: #1CA1C1;
  color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
}

</style>