<template>
  <div>
    <control></control>
    <datatable></datatable>
  </div>
</template>
<script>
import control from '../control/SearchSellerInfo.vue'
import datatable from '../datatable/ListSellerInfo.vue'
export default{
  components: {
    control,
    datatable
  },
}
</script>