<template>
  <div id="btnArea">
    <router-view name="btnArea" :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: 'BtnArea',
  data () {
    return {
    }
  },
}
</script>