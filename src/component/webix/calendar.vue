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
  name: "calendar",
  data() {
    return {
      data: "",
      ui: {
        id: "webix-calendar",
        view: "calendar",
        events: webix.Date.isHoliday,
        weekHeader: true,
        on: {
          onChange: function(date) {
            webix.message("Value is " + date);
          }
        }
      }
    };
  }
};
</script>