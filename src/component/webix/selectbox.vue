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
  name: "selectbox",
  data() {
    return {
      data: "B",
      ui: {
        id: "webix-select",
        view: "select",
        options: [
          { id: "T", value: "Tiger" },
          { id: "L", value: "Lion" },
          { id: "B", value: "Bear" }
        ],
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