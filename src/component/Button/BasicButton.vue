<template>
    <webix-ui :config='ui' v-bind:value='data'/>
</template>
<script>
export default{
  name:'BasicButton',
  data () {
    return {
      data:"Save",
      ui:{
          view: "button",
          width:100,
      }
    }
  },
}
</script>