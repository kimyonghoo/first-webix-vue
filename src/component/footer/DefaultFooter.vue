<template>
  <div id='btnArea'><webix-ui :config='ui'/></div>
</template>
<script>
export default{
  name:'Buttons',
  data () {
    return {
      ui:{
          id: "btnToolbar",
          view: "toolbar",
          borderless: true,
          elements: [
          ],
      }
    }
  },
}
</script>