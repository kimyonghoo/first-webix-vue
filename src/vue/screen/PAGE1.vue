<template>
  <div>
    <control></control>
    <datagrid></datagrid>
  </div>
</template>
<script>
import control from '../control/PAGE1_CONTROL.vue'
import datagrid from '../datagrid/PAGE1_GRID.vue'
export default{
  components: {
    control,
    datagrid
  },
}
</script>