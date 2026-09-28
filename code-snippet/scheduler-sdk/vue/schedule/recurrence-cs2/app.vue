<template>
  <div id="app">
    <div id="container">
      <ejs-recurrenceeditor ref="EditorObj"></ejs-recurrenceeditor>
    </div>
  </div>
</template>
<script>
import { RecurrenceEditorComponent } from "@syncfusion/ej2-vue-schedule";

export default {
  name: "App",
  components: {
    "ejs-recurrenceeditor": RecurrenceEditorComponent
  },
  mounted: function () {
    let recObject = this.$refs.EditorObj;
    recObject.setProperties({ endTypes: ["until", "count"] });
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
