<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedDate' :views='views'
        :eventSettings='eventSettings'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

let data = [{
  Id: 1,
  Subject: 'Paris',
  StartTime: new Date(2018, 1, 15, 10, 0),
  EndTime: new Date(2018, 1, 17, 12, 30),
  IsAllDay: false
}, {
  Id: 2,
  Subject: 'London',
  StartTime: new Date(2018, 1, 16, 12, 0),
  EndTime: new Date(2018, 1, 18, 13, 0),
  IsAllDay: false
}];

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent,
  },
  data() {
    return {
      height: '550px',
      views: ['Day', 'Week', 'Month', 'Agenda'],
      eventSettings: {
        dataSource: data,
        spannedEventPlacement: 'TimeSlot'
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  provide: {
    schedule: [Day, Week, Month, Agenda]
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
