<template>
  <div id='content'>
    <div><img src='../assets/main.png'></div>
  </div>
</template>
<script>
export default{
  data () {
    return {
      
    }
  },
  created() {
    //   this.imgpath='../assets/main.png';
  },
}
</script>
<style type="text/css">
#content {
	display: table;
	width: 100%;
	height: 100%;
}
#content > div {
	display: table-cell;
	text-align: center;
	vertical-align: middle;
}
#content > div > img {
	max-width: 100%;
	max-height: 100%;
	margin: auto;
	display: block;
}
</style>