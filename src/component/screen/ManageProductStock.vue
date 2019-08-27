<template>
  <div>
    <control></control>
    <datatable></datatable>
  </div>
</template>
<script>
import control from '../control/SearchStockInfo.vue'
import datatable from '../datatable/ListProductStock.vue'
export default{
  components: {
    control,
    datatable
  },
}
</script>