<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script>

import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

let data = [{
  Id: 1,
  Subject: 'Paris',
  StartTime: new Date(2018, 0, 28, 10, 0),
  EndTime: new Date(2018, 0, 28, 12, 30),
  RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=8',
  RecurrenceException: '20180129T043000Z,20180131T043000Z,20180202T043000Z'
}];

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      eventSettings: {
        dataSource: data
      },
      selectedDate: new Date(2018, 0, 28),
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
