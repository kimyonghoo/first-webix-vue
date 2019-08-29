<template>
  <div id='btnArea'><webix-ui :config='ui'/></div>
</template>
<script>
require('vue-webix');
export default{
  name:'Buttons',
  data () {
    return {
      ui:{
          id: "btnToolbar",
          view: "toolbar",
          borderless: true,
          elements: [
              {},
              { view:"button", value:"Search" , width:100, css:"webix_primary" },
              { view:"button", value:"Save", width:100},
              { view:"button", value:"Delete", width:100},
              { view:"button", value:"Update", width:100}
          ],
      }
    }
  },
  created() {
  },
  mounted() {
  },
  methods: { 
  }
}
</script>