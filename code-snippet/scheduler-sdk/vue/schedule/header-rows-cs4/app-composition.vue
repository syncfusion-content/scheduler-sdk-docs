<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :views='views' :headerRows='headerRows'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, TimelineMonth, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { eventData } from './datasource.js';

const width = '100%', height = '550px';
const selectedDate = new Date(2018, 0, 1);
const headerRows = [{ option: 'Month' }, { option: 'Date' }];
const views = [{ option: 'TimelineMonth', interval: 12 }];
const eventSettings = { dataSource: eventData }

provide('schedule', [TimelineMonth]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
