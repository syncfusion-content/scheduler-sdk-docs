<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :popupOpen='onPopupOpen'>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { scheduleData } from './datasource.js';
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

const selectedDate = new Date(2018, 1, 15);
const eventSettings = { dataSource: scheduleData }

const onPopupOpen = function (args) {
  if (args.type == 'Editor') {
    let recurrenceEditorObj =
      args.element.querySelector('.e-recurrenceeditor').ej2_instances[0];
    recurrenceEditorObj.frequencies = ['none', 'daily', 'weekly'];
  }
}

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
