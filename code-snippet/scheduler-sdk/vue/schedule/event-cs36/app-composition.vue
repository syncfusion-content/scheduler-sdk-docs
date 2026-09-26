<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate'
        :currentView='currentView' :views='views' :eventSettings='eventSettings'>
      </ejs-schedule>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, TimelineViews, TimelineMonth } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';


const height = '550px';
const width = '100%';
const views = ['TimelineDay', 'TimelineMonth'];
const currentView = 'TimelineMonth';
const eventSettings = {
  dataSource: scheduleData,
  enableMaxHeight: true,
  enableIndicator: false
};
const selectedDate = new Date(2018, 1, 15);

provide('schedule', [TimelineViews, TimelineMonth]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
