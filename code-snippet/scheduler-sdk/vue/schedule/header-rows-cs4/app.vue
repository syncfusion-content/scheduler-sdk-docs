<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule :height='height' :width='width' :selectedDate='selectedDate' :eventSettings='eventSettings'
        :views='views' :headerRows='headerRows'></ejs-schedule>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, TimelineMonth, TimelineViews } from '@syncfusion/ej2-vue-schedule';
import { eventData } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      width: '100%', height: '550px',
      selectedDate: new Date(2018, 0, 1),
      headerRows: [{ option: 'Month' }, { option: 'Date' }],
      views: [{ option: 'TimelineMonth', interval: 12 }],
      eventSettings: { dataSource: eventData }
    }
  },
  provide: {
    schedule: [TimelineMonth]
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/schedule/index.css";
</style>
