<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :selectedDate='selectedData' :eventSettings='eventSettings'
        :showHeaderBar='showHeaderBar'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, Day, Week, WorkWeek } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      showHeaderBar: false,
      eventSettings: { dataSource: scheduleData },
      selectedData: new Date(2018, 1, 15),
      views: ['Day', 'Week', 'WorkWeek'],
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
