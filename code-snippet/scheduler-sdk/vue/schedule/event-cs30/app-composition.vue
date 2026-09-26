<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';
import { blockData } from './datasource.js';

const height = '550px';
const width = '100%';
const views = ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'];
const eventSettings = {
  dataSource: blockData
};
const selectedDate = new Date(2018, 1, 15);

provide('schedule', [Day, Week, TimelineViews, Month, Agenda, Resize, DragAndDrop]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
