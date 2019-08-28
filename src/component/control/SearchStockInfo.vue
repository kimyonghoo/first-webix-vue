<template>
    <div style='width:500px'>
        <fieldset>
            <legend><h2>{{title}}</h2></legend>
            <webix-ui :config='ui_text' v-model="product"/>
            <webix-datepicker label='Date' v-model='date'/>
            <webix-slider label='Stock sum' v-model='stock' />
            <webix-text label='Stock sum' v-model='stock' />
        </fieldset>                                         
    </div>
</template>
<script>
require('vue-webix');
import { EventBus } from "../../event-bus";
export default{
  name:'control',
  data () {
    return {
      product:"ALL",
      date:new Date(),
      stock:0,
      title:'',
      ui_text:{ id:"product", view:"text", label:"Product", keyPressTimeout:0.1}  
    }
  },
  mounted() {
    $$("product").attachEvent("onTimedKeyPress", function(code, e){
      EventBus.$emit("filter-bus",this.getValue());
    });

    EventBus.$on("use-eventbus", stock => {
      this.stock = stock;
    });
    this.title = this.$route.params.category.toUpperCase();
  },
}
</script>