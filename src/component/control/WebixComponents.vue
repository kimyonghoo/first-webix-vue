<template>
  <component :is='webixWidget'></component>
</template>
<script>
import colorpicker from '../webix/colorpicker.vue'
import calendar from '../webix/calendar.vue'
import selectbox from '../webix/selectbox.vue'
import combo from '../webix/combo.vue'
export default{
  name:'control',
  data () {
    return {
      webixWidget: ''
    }
  },
  created() {
    this.webixWidget = this.$route.params.component;
  },
  components :{
    colorpicker,
    selectbox,
    calendar,
    combo
  },
}
</script>