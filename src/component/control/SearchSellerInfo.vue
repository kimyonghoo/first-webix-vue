<template>
    <div style='width:500px'>
        <fieldset>
            <legend><h2>Seller Information</h2></legend>
            <webix-text label='Last name' v-model='lname' @input="addEvent"/>
            <webix-text label='First name' v-model='fname' @input="addEvent"/>
            <webix-text label='Company' v-model='company' @input="addEvent"/>
            <webix-text label='Category' v-model='category' @input="addEvent"/>
            <webix-text label='Address' v-model='address' @input="addEvent"/>
        </fieldset>                                         
    </div>
</template>
<script>
require('vue-webix');
import { EventBus } from "../../event-bus";
export default{
  name:'control',
  data () {
    return {
      lname:"",
      fname:"",
      company:"",
      category:"",
      address:"",
    }
  },
  created() {
    EventBus.$on("use-eventbus", (seller) => {
      this.lname=seller.lastname;
      this.fname=seller.firstname;
      this.company=seller.company;
      this.category=seller.category;
      this.address=seller.address;
    });
  },
  mounted() {
  },
  methods: { 
    addEvent: function () {
      EventBus.$emit("filter-bus", this);
    }
  }
}
</script>