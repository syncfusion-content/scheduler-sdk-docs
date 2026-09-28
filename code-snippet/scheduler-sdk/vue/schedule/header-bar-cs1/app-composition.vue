<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedData' :eventSettings='eventSettings'
        :showHeaderBar='showHeaderBar'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';


const height = '550px';
const width = '100%';
const showHeaderBar = false;
const eventSettings = { dataSource: scheduleData };
const selectedData = new Date(2018, 1, 15);
const views = ['Day', 'Week', 'WorkWeek'];

provide('schedule', [Day, Week, WorkWeek]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
