<template>
    <div style='width:600px'>
        <fieldset>
            <legend><h2>Warehouse Information</h2></legend>
            <selectBoxUI :value='initValue' :options='options'></selectBoxUI>
            <selectBox :label='label' :value='initValue' :options='options'></selectBox>
        </fieldset>                                         
    </div>
</template>
<script>
require('vue-webix');
import { EventBus } from "../../event-bus";
import SelectBoxUI from '../BasicComponent/SelectBoxUI.vue'
import SelectBox from '../BasicComponent/SelectBox.vue'
export default{
  name:'control',
  data () {
    return {
      initValue:"",
      options:[],
      label:'',
    }
  },
  created() {
    this.options=[
      { "id":"T", "value":"Tiger" },
      { "id":"L", "value":"Lion" },
      { "id":"B", "value":"Bear" }
    ];
    this.initValue="B";
    this.label="webix-select";
  },
  mounted() {

  },
  components:{
    SelectBoxUI,
    SelectBox
  }
}
</script>