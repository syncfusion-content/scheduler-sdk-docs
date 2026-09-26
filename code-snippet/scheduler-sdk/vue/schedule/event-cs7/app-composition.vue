<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

const data = [{
  Id: 1,
  Subject: 'Scrum Meeting',
  StartTime: new Date(2018, 0, 28, 10, 0),
  EndTime: new Date(2018, 0, 28, 12, 30),
  IsAllDay: false,
  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;UNTIL=20180129T043000Z;',
},
{
  Id: 2,
  Subject: 'Scrum Meeting - Following Edited',
  StartTime: new Date(2018, 0, 30, 10, 0),
  EndTime: new Date(2018, 0, 30, 12, 30),
  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;UNTIL=20180204T043000Z;',
  FollowingID: 1
}];

const height = '550px';
const eventSettings = {
  dataSource: data,
  editFollowingEvents: true
};
const selectedDate = new Date(2018, 0, 28);

provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
