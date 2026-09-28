<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'>
        <e-views>
          <e-view option="Month" :maxEventsPerRow='maxEventsPerRow'></e-view>
        </e-views>
      </ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Month, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';


const height = '380px';
const maxEventsPerRow = 2;
const eventSettings = {
  dataSource: scheduleData
};
const selectedDate = new Date(2023, 11, 15);

provide('schedule', [Month, Resize, DragAndDrop]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
