<template>
  <div id="app">
    <div id="container">
      <ejs-recurrenceeditor ref="EditorObj"></ejs-recurrenceeditor>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { RecurrenceEditorComponent as EjsRecurrenceeditor } from "@syncfusion/ej2-vue-schedule";

const EditorObj = ref(null);
onMounted(function () {
  EditorObj.value.endTypes = ["until", "count"];
})

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
