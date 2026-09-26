<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views'
        :currentView='currentView' :eventSettings='eventSettings' :actionBegin='onActionBegin'></ejs-schedule>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { isNullOrUndefined } from '@syncfusion/ej2-vue-base';
import { ScheduleComponent as EjsSchedule, Day, TimelineViews, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { readonlyData } from './datasource.js';

const scheduleObj = ref(null);
const height = '550px';
const width = '100%';
const views = ['Day', 'TimelineWeek', 'WorkWeek', 'Month'];
const currentView = 'TimelineWeek';
const eventSettings = {
  dataSource: readonlyData
};
const selectedDate = new Date(2018, 1, 15);

const onActionBegin = function (args) {
  if ((args.requestType === 'eventCreate' || args.requestType === 'eventChange') &&
    (args.data.length > 0 || !isNullOrUndefined(args.data))) {
    let eventData = args.data;
    let schedule = scheduleObj.value.ej2Instances;
    let eventField = schedule.eventFields;
    let startDate = (args.data.length > 0) ? eventData[0][eventField.startTime] : eventData[eventField.startTime];
    let endDate = (args.data.length > 0) ? eventData[0][eventField.endTime] : eventData[eventField.endTime];
    args.cancel = !schedule.isSlotAvailable(startDate, endDate);
  }
}

provide('schedule', [Day, TimelineViews, WorkWeek, Month]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
