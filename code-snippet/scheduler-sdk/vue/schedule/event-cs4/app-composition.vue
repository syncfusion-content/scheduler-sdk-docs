<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, TimelineMonth, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

const data = [{
  Id: 1,
  Subject: 'Paris',
  StartTime: new Date(2018, 1, 15, 10, 0),
  EndTime: new Date(2018, 1, 15, 12, 30),
  IsAllDay: false,
  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5'
}];

const height = '550px';
const views = ['Day', 'Week', 'TimelineMonth', 'Month', 'Agenda'];
const eventSettings = {
  dataSource: data
};
const selectedDate = new Date(2018, 1, 15);

provide('schedule', [Day, Week, TimelineMonth, Month, Agenda]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
