<template>
  <div style="width:500px">
    <fieldset>
      <legend>
        <h2>{{this.$route.params.component.toUpperCase()}}</h2>
      </legend>
      <webix-text label="ID" v-model="this.ui.id" />
      <webix-ui :config="ui" v-bind:value="data" />
    </fieldset>
  </div>
</template>
<script>
export default {
  name: "color",
  data() {
    return {
      data: "#0EFEFE",
      ui: {
        label: "Colorpicker",
        id: "webix-color",
        view: "colorpicker",
        on: {
          onChange: function(newv, oldv) {
            webix.message("Value changed from: " + oldv + " to: " + newv);
          }
        }
      }
    };
  }
};
</script>