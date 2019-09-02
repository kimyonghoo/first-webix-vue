<template>
  <webix-select :label='label' :options='options' v-bind:value="value" @input='onChange'/>     
</template>
<script>
require('vue-webix');
export default{
  name:'SelectBox',
  props:["id", "options", "label","value"],
  data () {
    return {
      ui:{
      }
    }
  },
  methods:{
    onChange:function(value){
      webix.message("Selected: " + value);
    }
  }

}
</script>