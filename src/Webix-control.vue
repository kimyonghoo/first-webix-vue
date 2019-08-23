<template>
  <div id="control">
    <div style='width:500px'>
        <fieldset>
            <legend>Product</legend>
            <webix-text label='Product' v-model='product' @input="addEvent"/>
            <webix-datepicker label='Date' v-model='date' />
            <webix-slider label='Stock sum' v-model='stock' />
            <webix-text label='Stock sum' v-model='stock' />
        </fieldset>                                         
    </div>
  </div> 
</template>
<script>
require('vue-webix');
import { EventBus } from "./event-bus";
export default{
  name:'control',
  data () {
    return {
      product:"ALL",
      date:new Date(),
      stock:100,     
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