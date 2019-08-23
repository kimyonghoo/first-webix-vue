<template>
  <div id="app">
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        <img v-bind:class="css.size" v-bind:src="'src/assets/'+product.image"/>
        {{ product.name }} 재고가 {{ product.quantity }} 개 입니다
        <span v-if="product.quantity === 0" v-bind:class="css.red">
          - 품절
        </span>
        <button @click="product.quantity = decrease(product)" v-if="product.show">담기</button>
        <button @click="product.quantity = increase(product)">빼기</button>
      </li>
    </ul>
    <h2>총 재고:  {{ totalProducts }}</h2>
  </div> 
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      products: [],
      css: {
        size: 'image-size', 
        red: 'red-font'
      },
    }
  },
  created() {
    fetch('https://api.myjson.com/bins/j051n')
    .then(response=>response.json())
    .then(json=>{
      this.products = json.products;
      this.products.forEach((e) => {
        if(e.quantity === 0){
          e.show = false;
        }else{
          e.show = true;
        }
      });
    })
  },
  computed: {
    totalProducts: function(){
      return this.products.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0)
    },
  },
  methods:{
    increase: function(product){
      product.show = true;
      return product.quantity+1;
    },
    decrease: function(product){
      if((product.quantity-1) <= 0) {
        product.show = false;
        return 0;
      }
      else return product.quantity-1;
    }
  }
}
</script>

<style> 
.image-size { width: 100px; height: 100px}
.red-font {color: red; font-weight: bold} 
</style>