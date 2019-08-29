<template>
    <webix-ui :config='ui' v-bind:value='data'/>
</template>
<script>
require('vue-webix');
export default{
  name:'PrimaryButton',
  data () {
    return {
      data:"Search",
      ui:{
          view: "button",
          width:100,
          css:"webix_primary",
      }
    }
  },
}
</script>