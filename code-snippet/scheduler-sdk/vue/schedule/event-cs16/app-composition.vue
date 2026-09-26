<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :dragStart='onDragStart'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, DragEventArgs } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';


const height = '550px';
const eventSettings = { dataSource: scheduleData };
const selectedDate = new Date(2018, 1, 15);

const onDragStart = function (args) {
  args.scroll = { enable: false };
}

provide('schedule', [Day, Week, WorkWeek, Month, Agenda, DragAndDrop]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
