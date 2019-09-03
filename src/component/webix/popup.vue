<template>
  <div style="width:500px">
    <fieldset>
      <legend>
        <h2>{{this.$route.params.component.toUpperCase()}}</h2>
      </legend>
      <webix-ui :config="ui_btn" v-bind:value="data" />
      <webix-ui :config="ui_btn2" v-bind:value="data" />
      <webix-ui :config="ui" v-bind:value="data" />
    </fieldset>
  </div>
</template>
<script>
export default {
  name: "POPUP",
  data() {
    return {
      data: "",
      ui: {
        id:"webix-popup",
        view:"window",
				height:250,
        width:300,
        left:50, top:250,
				move:true,
        head:{
					view:"toolbar", cols:[
						{view:"label", label: "POPUP" },
						{view:"button", label: 'Close', width: 100, align: 'right', click:function(){ $$('webix-popup').close(); }}
					]
				},
				body:{
					template:"Some text..."
				}
      },
      ui_btn: {
        id:"webix-button",
        view:"button",
        label:"OPEN MODAL",
        click:function(id,event){  
          webix.modalbox({
            title:"Custom title",
            buttons:["Yes", "No", "Maybe", "Don't know"],
            width:500,
            text:"Any html content here"
          }).then(function(result){
            var type = "";
            if(result == 0) type = "success";
            else if(result == 1) type = "error";
            else if(result == 2) type = "debug";
            webix.message({ text: "Result "+result, type:type });
          });
        }
      },
      ui_btn2: {
        id:"webix-button2",
        view:"button",
        label:"OPEN POPUP",
        click:function(id,event){  
         $$("webix-popup").show();
        }
      }
    };
  },
};
</script>