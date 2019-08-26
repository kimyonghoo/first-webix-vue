<template>
    <div style='width:500px'>
        <fieldset>
            <legend><h2>APPAREL</h2></legend>
            <webix-text label='Product' v-model='product' @input="addEvent"/>
            <webix-datepicker label='Date' v-model='date' />
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
      user:"",
      product:"ALL",
      date:new Date(),
      stock:0,     
    }
  },
  created() {
    EventBus.$on("use-eventbus", stock => {
      this.stock = stock;
    });
  },
  mounted() {
  },
  methods: { 
    addEvent: function (value) {
      EventBus.$emit("filter-bus", value);
    }
  }
}
</script>